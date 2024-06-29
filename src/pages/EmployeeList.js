import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import Navbar from '../components/Navbar';

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'ruwan', role: 'Admin', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' },
    { id: 2, name: 'ruwan', role: 'Admin', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' },
    { id: 3, name: 'ruwan', role: 'Admin', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png' },
  ]);

  function updateEmployee(id, name, role ) {
    const newEmployees = employees.map((emp) => {
      if(emp.id === id) {
        return {...emp, name, role}
      } else {
        return emp;
      }
    })
    setEmployees(newEmployees);
  }

  function addEmployee(name, role, imageSrc) {
    const newEmp = {
      name, role, imageSrc, id: employees.length+1
    }
    setEmployees([...employees, newEmp])
  }

  return (
    <div className="">
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {employees.map(person => (
          <div key={person.id}>
            <Employee id={person.id} name={person.name} role={person.role} imageSrc={person.imageSrc} updateEmployee={updateEmployee} />
          </div>
        ))}
      </div>
      <AddEmployee  addEmployee={addEmployee}/>
    </div>
  );
}

export default App;
