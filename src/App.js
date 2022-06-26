import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import ListarTesis from './components/listarTesis/ListarTesis';


function App() {
  return (
    <div className="App">
       <div className="content-parent">
        <div className="menu-lateral" ></div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListarTesis />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
