import './App.css';
import List from './components/list';
import Subtitle from './components/subtitle';
import Title from './components/title';

function App() {

  const items = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs",
  ]; 

  return (
    <div className="App">
      <Title />
      <Subtitle />
      <List items={items}/>
    </div>
  );
}

export default App;
