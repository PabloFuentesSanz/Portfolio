More than five years have passed, but it feels like yesterday I started my journey with React and ran straight into the big problem of optimization and component rendering. Everything had been smooth sailing until then. React was wonderful, but trying to understand the how, when and why of using a `useMemo` or a `useCallback` made my head explode.

It took me a few months of heavy practice and research until I finally got these concepts down and started applying them in real projects.

All that effort, only for the React team to announce React Compiler v1.0 a few months ago with a single tagline:

> ['Forget manual memoization. React will do it for you.'](https://www.youtube.com/watch?v=SnrSA8D11K8) — ReactConf 2025

On one hand, the news amazed me. On the other, I kept thinking — does everything I learned about React optimization no longer matter?

Before we start, a quick intro. I'm [Pablo Fuentes](https://www.linkedin.com/in/pablo-fuentes-512258134/), Frontend Engineer at [Mercadona Tech](https://www.linkedin.com/company/mercadonatech/), and to answer that question — and see whether React Compiler actually delivers on its promise — I decided to build a lab project where we'll investigate how an application behaves in three different scenarios: without optimization, with the "legacy" optimization, and with the new React Compiler.

> 💡 To speed up building the lab I used [Antigravity](https://antigravity.google/) ([Claude Sonnet 4.5](https://www.anthropic.com/claude/sonnet)). All documentation, videos and articles I used as backup for writing this piece are listed in the bibliography at the end.

## A little context

By default, React re-renders components when their state changes or their parents re-render, cascading down the component tree.

With the right memoization you can prevent these unnecessary re-renders. Memoization caches the result of a calculation or a component render so it can be reused when its inputs don't change.

To memoize manually we've always used:

- [**`React.memo`**](https://react.dev/reference/react/memo) → for components.
- [**`useMemo`**](https://react.dev/reference/react/useMemo) → for the result of calculations.
- [**`useCallback`**](https://react.dev/reference/react/useCallback) → for function references.

## What does React Compiler actually promise?

The compiler's goal isn't just to save us from writing lines of code, but to remove the cognitive load of deciding what should be memoized. The compiler understands the semantics of JavaScript and React, allowing only the parts of the DOM that actually depend on changed data to update.

However, for the compiler to work its magic, your code needs to be "understandable" to it. You need to follow three design principles:

- [**Isolate mutations**](https://react.dev/reference/rules/components-and-hooks-must-be-pure) to maintain purity.
- [**Prefer primitives**](https://www.30secondsofcode.org/react/s/use-effect-primitive-dependencies/) to make comparisons easier.
- [**Use static configurations**](https://react.dev/learn/preserving-and-resetting-state#skipping-re-rendering) outside of render to free up cognitive load for the compiler.

And of course, the three [Golden Rules of React](https://react.dev/reference/rules):

- **Components and Hooks must be Pure:** [Keeping Components Pure (React.dev)](https://react.dev/learn/keeping-components-pure).
- **Idempotency (same input, same output):** [Rules of React: Idempotency](https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent).
- **No side effects in Render:** [Rules of React: Side Effects](https://react.dev/reference/rules/components-and-hooks-must-be-pure#side-effects-must-run-outside-of-render).

## The lab ([Repository](https://github.com/PabloFuentesSanz/react-compiler-lab/))

### [@rama-1-sin-optimizar](https://github.com/PabloFuentesSanz/react-compiler-lab/tree/rama-1-sin-optimizar)

We start from the basics. We've built an online supermarket — right now there are just 22 products and a few filters running on the frontend to force the optimization problem a bit. It works fine today, but the scalability problem is already there. What happens when we have thousands of products?

To analyze our app's re-renders we'll lean on [React Scan](https://github.com/aidenybai/react-scan).

We can run it on our project or point it at any domain we want and watch components re-render with every action we trigger.

```bash
npx react-scan localhost:5173
```

We can see that any action on the filters, search, or adding a product re-renders every component in the app, regardless of whether its state changed.

![React Scan showing every component re-rendering on any action](/assets/articles/react-compiler/01_rama_react_scan.webp)

### [@rama-2-optimizacion-manual](https://github.com/PabloFuentesSanz/react-compiler-lab/tree/rama-2-optimizacion-manual)

To solve these optimization problems we've always reached for the old reliables we mentioned above (`memo`, `useMemo`, `useCallback`).

We won't dwell on this part too much, but let's analyze the renders with React Scan to see those unnecessary re-renders disappear entirely.

For example, in the product list we see how only "arroz" re-renders — the only one that's different after changing the filter.

![Only the rice product re-renders after manual optimization](/assets/articles/react-compiler/02_rama_react_scan.webp)

The "problem" with this is **fragility**. Manually maintaining referential stability in a large application is tough.

![Manual optimization code excerpt](/assets/articles/react-compiler/03_rama_react_scan.webp)

![Manual optimization code excerpt](/assets/articles/react-compiler/04_rama_react_scan.webp)

![Manual optimization code excerpt](/assets/articles/react-compiler/05_rama_react_scan.webp)

### [@rama-3-react-compiler](https://github.com/PabloFuentesSanz/react-compiler-lab/tree/rama-3-react-compiler)

For this test we installed React Compiler:

```bash
npm install -D babel-plugin-react-compiler
```

Once installed and configured following the [official guide](https://react.dev/learn/react-compiler), we should be ready to remove every `React.memo`, `useMemo` and `useCallback` we had.

After doing that, we run the scanner again and...

### It didn't work?!

![React Scan still showing re-renders after enabling React Compiler](/assets/articles/react-compiler/06_rama_react_scan.webp)

OK, that conclusion based on just this analysis is a bit reductive. We need to caveat that React Scan is fairly demanding and warns you every time a component renders. It doesn't differentiate between a heavy render and an optimized one.

**React Compiler optimizes the "cost" of renders, but doesn't always prevent the component from executing.**

If we open the devTools, for example, we can confirm that our components are being memoized automatically (`Memo*`).

![React devTools showing components prefixed with Memo](/assets/articles/react-compiler/07_rama_react_scan.webp)

But then — how do we know whether it's actually optimizing our components?

For a more technical analysis, the [Profiler in the devTools](https://es.legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) lets us see the performance of our components and compare the three cases:

![Unoptimized](/assets/articles/react-compiler/08_rama_react_scan.webp)

![Manual optimization](/assets/articles/react-compiler/09_rama_react_scan.webp)

![React Compiler](/assets/articles/react-compiler/10_rama_react_scan.webp)

| Scenario | Render duration | Children behavior (ProductCard) | Efficiency |
| --- | --- | --- | --- |
| **1. Unoptimized** | **15.9ms** | All blocks are colored. Each card is processed again. | 🔴 Low |
| **2. Manually optimized** | **1.6ms** | Children appear gray/empty. React doesn't even "step into" them. | 🟢 Maximum |
| **3. React Compiler** | **2.5ms** | Some blocks color in, but total time is very low. | 🟡 High (Auto) |

We can see the Compiler made a big automatic optimization, cutting time to a sixth of the unoptimized version. But there are still some components re-rendering unnecessarily.

## Bonus: why the Compiler isn't "magic"

### [@rama-4-compiler-arquitectura](https://github.com/PabloFuentesSanz/react-compiler-lab/tree/rama-4-compiler-arquitectura)

In our lab, the **filters** state and the **cart** state lived in the same `ProductList` component. This created an invisible coupling — every time you added a product, the entire list re-rendered, breaking [**referential stability**](https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent). To the compiler, if the "input" changes, the "output" has to be processed.

**How do we get close to the 1.6ms of the manual solution?**

The key isn't adding code, it's moving it:

1. **Extract state:** We pull the cart logic into its own component (or a Store/Context). That way, when you add a product, the listing doesn't even notice.
2. **Stable references:** Instead of wrapping functions in `useCallback`, we pass the state setter (`setCart`) directly. Because it's a fixed reference by nature, the Compiler guarantees the children aren't touched.

Here we can see how this update gets us to 1.7ms, and how there's still some architectural room to grow elsewhere in the app.

![Profiler showing 1.7ms after architectural refactor](/assets/articles/react-compiler/11_rama_react_scan.webp)

## Conclusions

React Compiler didn't come so we'd stop thinking about performance — it came so we'd stop thinking about the **syntax** of performance.

The Compiler optimizes the "cost" of rendering, but good **component architecture** is what prevents the render in the first place.

The difference isn't knowing how to use a `useMemo` — it's understanding how data flows through your app so you don't break the automatic optimization. The compiler will make your app fly if your architecture is good. If it isn't, it'll push it off a cliff.

## Want to know if your current project is compatible?

Run this in your terminal right now:

```bash
npx react-compiler-healthcheck
```

If your project is more than **70% compatible**... Congrats — you can follow the guide to [implement React Compiler](https://react.dev/learn/react-compiler/installation) in your project.

## Bibliography and recommended resources

**1. Official Documentation and Specs**

- [react.dev/learn/react-compiler](https://react.dev/learn/react-compiler) — The source of truth. Official docs on how "Memoization Slots" work and how to configure the compiler.
- [react.dev/reference/rules](https://react.dev/reference/rules) — Essential guide to understand what React considers a "pure" component and what violations cause a bail-out.
- [**React Compiler Healthcheck Script**](https://www.npmjs.com/package/react-compiler-healthcheck) — Official repo for the diagnostic tool to verify your codebase's compatibility.

**2. Technical Articles and Analysis**

- [developerway.com](https://www.developerway.com/) — Reference blog cited in this article. Must-read on composition patterns and referential stability in large-scale React apps.
- [conf.react.dev](https://conf.react.dev/) — The original talk where the vision of "React Forget" (the compiler's original code name) and the future of automatic memoization was laid out.

**3. Performance Tools**

- [react-scan](https://github.com/aidenybai/react-scan) — Open-source tool by Aiden Bai for visually detecting performance problems and unnecessary re-renders in real time.
- [**eslint-plugin-react-compiler**](https://www.npmjs.com/package/eslint-plugin-react-compiler) — Official plugin to surface compiler warnings in your workflow (VS Code / CI).
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

**4. Lab Repository**

- [github.com/PabloFuentesSanz/react-compiler-lab](https://github.com/PabloFuentesSanz/react-compiler-lab) — The full lab code with the 4 branches to experiment with.

**5. Other Resources**

- [Introducing the React Profiler](https://es.legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
