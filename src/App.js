import './App.css';
import TopBar from './components/TopBar'
import BackgroundImage from './components/BackgroundImage'
import StoreListing from './components/StoreListing'

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListing />
    </div>
  );
}

export default App;
