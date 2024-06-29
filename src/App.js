import './index.css';
import EmployeeList from './pages/EmployeeList';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';

function App() {
  return (
   <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path='/employees' element={<EmployeeList />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/dictionary' element={<Dictionary  />}/>
          <Route path='/definition/:search' element={<Definition  />}/>
          <Route path='/404' element={<NotFound  />}/>
          <Route path='*' element={<NotFound  />}/>

        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
