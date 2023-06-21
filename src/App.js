import Task3 from './components/Task3';
import './App.css';

function App() {
  const colors = ['violet', 'indigo', 'blue', 'green', 'yellow','orange','red'];
  return (
    <div className="App">
      <Task3 colors={colors}/>
    </div>
  );
}

export default App;
