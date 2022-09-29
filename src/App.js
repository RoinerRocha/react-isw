import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <Header text={'My first react App'}/>
      <Body />
    </div>
  );
}

export default App;
