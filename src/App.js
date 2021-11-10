import logo from './logo.svg';
import './App.css';
import TopBanner from './Component/TopBanner/TopBanner';
import Navigationbar from './Component/Navigationbar/Navigationbar';

function App() {
  return (
    <div className="App">
      <Navigationbar></Navigationbar>
      <TopBanner></TopBanner>
    </div>
  );
}

export default App;
