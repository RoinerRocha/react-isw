import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="container mt-2">
      <Header text={'My first react App'}/>
      <Body />
      <Footer />
    </div>   
  );
}

export default App;
