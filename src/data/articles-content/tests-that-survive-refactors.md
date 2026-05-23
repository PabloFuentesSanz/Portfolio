Imagine you join a project with more than 1,000 tests and a proud +95% **code coverage**. The team brags about how stable everything is.

One day, you decide to migrate the HTTP client from `Axios` to native `fetch`, or move the authentication state from a global Context to a library like `Zustand`.

You're not changing a single feature. When the user opens the app tomorrow, they should see exactly the same thing. You modify the code, run the test suite and… **400 tests break**.

By the time you finally get every test back to green — tests the end user couldn't care less about — you ask yourself the million-dollar question: **if I just had to rewrite half of my tests, how do I actually know the application still works the same?**

You don't. Your tests weren't testing your application; they were testing your implementation. You've just walked straight into what Vladimir Khorikov calls, in his book, a critical failure in **resistance to refactoring** [1]. The tests are so coupled to the internals of the software that they punish the evolution of your architecture instead of protecting it.

## *The coverage trap and Goodhart's Law*

In a lot of product companies — and especially in consultancies — "testing theatre" has taken over: you have to hit a minimum coverage percentage to, say, merge a PR.

But the famous **Goodhart's Law** tells us:

> *"When a measure becomes a target, it ceases to be a good measure."*

Force a developer to chase a number and the focus shifts. People stop thinking about whether the product works correctly and start looking for ways to force logical paths just to push coverage up.

Coverage tells you which lines were executed. It never tells you whether the code does what the business asked for [2].

**Martin Fowler** makes the same point in his essay [Test Coverage](https://martinfowler.com/bliki/TestCoverage.html):

> *"The real value of coverage is identifying, negatively, which critical zones are completely naked. Using it positively as a seal of guarantee is a fraud that produces **false positives**."* [3]

## How would you test an Auth Gate?

To bring all this theory down to earth, let's look at a classic problem in any product app. After a slicing session, we pulled out this vertical slice:

> "When a user enters the root route (/) of the application, the system verifies whether they're authenticated. If there is no valid session, the app shows a loading screen and redirects the user to an external provider for authentication."

The kind of thing I've typically seen in the projects I described above looks something like this:

```jsx
it('should call axios and redirect if user is not authenticated', async () => {
  // 1. Mock the specific tool (Axios)
  mockedAxios.get.mockRejectedValueOnce({ response: { status: 401 } })

  // 2. Inject a hand-crafted provider state
  const mockContextValue = { isAuthenticated: false, user: null }

  render(
    <AuthContext.Provider value={mockContextValue}>
      <AuthGuard />
    </AuthContext.Provider>
  )

  // 3. Assert on the component's internals
  expect(mockedAxios.get).toHaveBeenCalledWith('/api/user/me')
  expect(window.location.replace).toHaveBeenCalledWith(
    'https://auth.company.com/login?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F'
  )
})
```

### Why this test is a ticking time bomb

Let's break it down. It isn't exotic — even today, [Jest's own documentation](https://jestjs.io/docs/mock-functions) [6] teaches you to write tests like this by mocking libraries. But as we said, it cripples your delivery speed for two critical reasons:

- **High fragility (false negatives):** the day you decide to clean up your network layer and migrate `Axios` to native `fetch` without changing anything for the user, this test will die screaming that `axios.get` was never called [1]. You go from delivering value to wasting time fixing tests for code that works perfectly.
- **False security (false positives):** what happens if the backend team introduces a breaking change and the endpoint starts returning a `200 OK` with `{ authenticated: false }` instead of a `401 Unauthorized`? Your mock is static and hard-wired into the test, so it'll keep returning the `401` you programmed. The test stays green, CI passes, and you've just deployed a completely broken login flow to production.

This traditional test also violates the fundamental **black-box** principle laid out by Kent Beck [4].

As the official ***React Testing Library*** docs warn:

> *"Testing implementation details means that if you refactor your component's internals without changing its behavior, your tests will break. Conversely, if you break your application code without changing the implementation details, your tests will still pass. This introduces a false sense of security."* [5]

### Test the whole application, not amputated trees

TDD has a bad reputation in the frontend for some people because they try to write rigid unit tests before knowing what the component structure will look like.

The secret to making TDD efficient, fluid, and addictive is to flip the mindset — and I didn't really learn this until I understood that we need to ***FOCUS THE TEST ON THE INTEGRATION OF USER BEHAVIOR.***

Instead of rendering components amputated from their reality — like rendering `<AuthGuard/>` in an idealized environment — **we mount the whole application: `<App/>`**.

By mounting the full app and navigating programmatically, we treat our software as a real black box. To keep that sustainable and as un-chaotic as possible, we lean on three pillars:

1. **Mock Service Worker (MSW):** we stop mocking libraries [6]. MSW intercepts HTTP traffic at the network level [7]. If you swap your data library, MSW doesn't care.
2. **The Mother Pattern:** we get the giant JSON payloads out of the tests and isolate them in object factories that represent semantic business scenarios.
3. **Behavior helpers:** we abstract repetitive interactions into small, readable functions, keeping the test focused purely on the product narrative.

TDD fails when you try to use it to design the internals of your code. But if you're testing the whole application, **doing TDD means designing the product's behavior, not the file structure**. Writing the test before the code exists is nothing more than transcribing the slicing session you just had into a validator.

### Phase 1: RED (design the behavior before the code exists)

We write our test before implementing the logic. Since we're testing black-box behavior, we render the full `<App/>`.

Notice the assertions. We don't look at how functions execute internally — we look at **what the user sees** and what happens to the environment.

```jsx
it('should redirect the user to the external identity provider when session is invalid', async () => {
  // 1. Inject the business scenario into MSW through our Mother Pattern
  server.use(AuthMother.withExpiredToken())

  // Force the precondition: local storage is empty
  window.localStorage.removeItem('access_token')

  // 2. Run the action: mount the application from the root
  render(<App />)

  // 3. Validate the user experience while the system processes
  expect(screen.getByLabelText('Loading')).toBeInTheDocument()

  // 4. Validate the final consequence of the navigation
  await waitFor(() => {
    const expectedTarget = 'https://auth.company.com/login?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F'
    expect(window.location.href).toBe(expectedTarget)
  })
})
```

With this we've successfully designed the behavior contract. The test fails with a resounding **RED** because `App` is an empty component. We know exactly what our code has to do to meet the business expectation.

### Phase 2: GREEN (write the minimum code needed to make the problem go away)

In this phase we don't try to make the architecture perfect yet. We just make the test go green to validate that the logic works.

```jsx
export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = window.localStorage.getItem('access_token')
    if (!token) {
      const currentUrl = window.location.href
      window.location.replace(
        `https://auth.company.com/login?redirect_uri=${encodeURIComponent(currentUrl)}`
      )
      return
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div aria-label="Loading">Please wait...</div>
  }
  return null
}
```

Run the test again. **GREEN**.

We have absolute certainty the flow works. By controlling the real network through MSW and asserting on the final URL state, we made sure there's no trick: the integration works.

### Phase 3: REFACTOR (abstract and apply patterns without fear of breaking production)

This is where integration-driven TDD really shows its edge. Now we decide to extract the auth logic into a clean custom hook:

```jsx
export function App() {
  const { checkingAuth } = useAuthGate()

  if (checkingAuth) {
    return <div aria-label="Loading">Please wait...</div>
  }

  return <h1>Welcome to the platform</h1>
}
```

Run the test again — still **GREEN**. Without changing a single line of the test file. If we'd been writing traditional unit tests, extracting the logic into a hook would have meant reconfiguring mocks and writing a brand-new test for the hook.

We changed the internal structure of the code (the *how*), but the behavior the end user sees (the *what*) stays intact. The test survived the refactor organically. Your test suite works for you, not the other way around.

## Conclusions

Writing tests isn't about filling in a *Code Coverage* report to make the pipeline pass. The real goal of testing on serious projects is to **protect the product from change** — making sure the team can evolve the architecture without fear.

Doing TDD on the frontend with an integration mindset has taught me three things in my day-to-day:

1. **Forget the syntax of the test.** Just like I wrote in my article on [*React Compiler*](/articles/why-i-deleted-my-usememos), which exists so you stop thinking about the syntax of optimization (`useMemo`), black-box testing with MSW frees you from thinking about the internals of your code (`vi.spyOn`).
2. **Test behaviors, not files.** Mounting the full `<App/>` and capturing the real network is the only way to make sure the pieces fit together. If your tests survive a migration from `Axios` to `fetch` without touching a single test line, you're on the right track.
3. **Coverage is a consequence, not the goal.** When you test real end-to-end user flows, logical code coverage organically climbs above 80% without you noticing. The difference is that the percentage now represents real deployment confidence, not an empty number to satisfy the spreadsheet.

## Bibliography and recommended resources

### 1. Literature and software engineering theory

- **[1] Khorikov, V. (2020).** *Unit Testing Principles, Practices, and Patterns*. Manning Publications. The canonical reference for understanding "resistance to refactoring" and avoiding fragile tests.
- **[2] Winters, T., Manshreck, B., & Wright, H. (2020).** *Software Engineering at Google: Lessons Learned from Programming Over Time*. O'Reilly Media. The chapter on managing tests at scale and why tests should focus on behavior rather than coverage metrics.
- **[4] Beck, K. (2002).** *Test Driven Development: By Example*. Addison-Wesley Professional. The foundational TDD book and the definition of the black-box principle.

### 2. Reference articles and essays

- **[3] Dodds, K. C. (2019).** *Testing Implementation Details* — [kentcdodds.com/blog/testing-implementation-details](https://kentcdodds.com/blog/testing-implementation-details). The definitive essay on why tests that break under refactor destroy team confidence.
- **[5] Fowler, M. (2012).** *Test Coverage* — [martinfowler.com/bliki/TestCoverage.html](https://martinfowler.com/bliki/TestCoverage.html). Classic essay on the correct (and abusive) uses of code coverage metrics.

### 3. Official documentation and technical guides

- **[6] Jest Docs (Mock Functions):** [jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions) — reference on how traditional module and third-party library mocking works in JavaScript.
- **[7] Mock Service Worker (MSW) Docs:** [mswjs.io](https://mswjs.io/docs/quick-start) — official guide on intercepting real HTTP requests at the network level via Service Workers.
- **Vitest Docs (Mocking Guide):** [vitest.dev/guide/mocking](https://vitest.dev/guide/mocking) — official documentation on managing spies, timers, and mocks in the modern Vite ecosystem.
- **React Testing Library Docs (Guiding Principles):** [testing-library.com/docs/guiding-principles](https://testing-library.com/docs/guiding-principles) — the official philosophy on why tests should resemble, as closely as possible, the way a real user uses the software.
