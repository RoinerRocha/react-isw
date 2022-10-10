import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Modal from './components/Modal/modal';

function App() {
  return (
    <div className="container mt-2">
      <Header text={'My first react App'}/>
      <Body />
      <Modal />
      <Footer />
    </div>   
  );
}

export default App;
