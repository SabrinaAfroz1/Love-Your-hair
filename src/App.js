import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Notfound from './Component/NotFound/Notfound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
