import './App.css';
import Count from './components/Count/Count';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch'

function App() {
  return (
    <div className="App">
      <Count></Count>
      <Device name='uphone' price='13000'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
