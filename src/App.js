import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';
import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
