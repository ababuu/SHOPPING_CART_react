import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/products' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
