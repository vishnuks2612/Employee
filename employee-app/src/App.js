import logo from './logo.svg';
import './App.css';
import MainHomeEmployee from './components/MainHomeEmployee';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainHomeEmployee />}></Route>
      <Route path='add' element={<AddEmployee />}></Route>
      <Route path='search' element={<SearchEmployee />}></Route>
      <Route path='delete' element={<DeleteEmployee />}></Route>
      <Route path='view' element={<ViewEmployee />}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
