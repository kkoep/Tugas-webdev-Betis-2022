import './App.css';
import Footer from './footer/footer.js';
import Body from './body/body.js';
import Header from './header/header';
import { ReactComponent as Daun } from './footer/Asset/2-daun.svg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <footer className = 'footer'> 
        <Footer/> 
        <div className="daun">
          <Daun className = 'Daun-kiri'/>   
          <Daun className ='Daun-kanan'/>
          <h1>aa</h1>
        </div>
      </footer>
        
    </div>
  );
}

export default App;
