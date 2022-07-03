import logo from './logo.svg';
import './App.css';
import Button from './Materi/Komponen/Pembahasan/Component';

const App = () => {
  return ( 
  <div className = "App" >
    <header className = "App-header" >
    <img src = {logo}className = "App-logo" alt = "logo" / >
    <p >Halo </p> 
    <Button />
    </header> </div>
  );
}

export default App;