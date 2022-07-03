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
    <a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >Learn React </a> </header> </div>
  );
}

export default App;