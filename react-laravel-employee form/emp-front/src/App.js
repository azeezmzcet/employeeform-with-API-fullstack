import React,{ useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeList from './employeeList';
import "./App.css";




function App() {
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  

  return (
    <>
      <div id='center'>
      <h1>EMPLOYEE FORM:</h1>
      <AddEmployee employeeToEdit={employeeToEdit} setEmployeeToEdit={setEmployeeToEdit} />
      <EmployeeList setEmployeeToEdit={setEmployeeToEdit} />
      </div>
      
    </>
  );
}

export default App;
