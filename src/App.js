import './index.css';
import EmployeeList from './pages/EmployeeList';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {
  return (
   <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/employees' element={<EmployeeList />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/dictionary' element={<Dictionary  />}/>
          <Route path='/definition/:search' element={<Definition  />}/>
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
