import './App.css';
import Header from './components/Header';
import WaveMenu from './components/WaveMenu';
import MyExperience from './components/MyExperience';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <WaveMenu/>
      <MyExperience/>
      <MyWork/>
      <Contact/>
    </div>
  );
}

export default App;
