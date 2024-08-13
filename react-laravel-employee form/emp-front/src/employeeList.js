
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from './redux/employeeSlice';
import React, { useEffect } from 'react';
import Loading from './loading/loading';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';





const EmployeeList = ({ setEmployeeToEdit }) => {
  const dispatch = useDispatch();
  const { employees, status, error } = useSelector(state => state.employees);

  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [status, dispatch]);



  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    
    alert("want to delete");
  };



  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
  };



  let content;

  if (status === 'loading') {

    content = <Loading />;

  } else if (status === 'succeeded') {
    content = employees.length > 0 ? (
      <ol
      style={{ 
        display:"flex", 
        flexDirection: "colomun", 
        gap: "10px", 
        padding: "10px",
      }} >
        {employees.map(emp => (
          <li key={emp.id} style={{ 
            display: "flex", 
            flexDirection:"column", 
             gap: "10px", 
         }}>
      <b> Card-No : {emp.card} || Name: {emp.name} || Email:{emp.email} </b>
       <div style={{ display: "flex", gap: "10px" }} >
       <Button onClick={() => handleEdit(emp)} id='edit'  variant="outlined"  startIcon={<EditOutlinedIcon />}  sx={{ color: 'black', borderColor: 'black' , borderRadius:"12px" }} size="small">
        Edit
      </Button>
            <Button onClick={() => handleDelete(emp.id)}  id='delete' variant="outlined"  startIcon={<DeleteIcon />}  sx={{ color: 'black', borderColor: 'black', borderRadius:"12px" }} size="small">
        Delete
      </Button>

            </div>
          </li>
        ))}
      </ol>
    ) : (
      <></>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      {status === 'succeeded' && employees.length > 0 && <h2>Employee List</h2>}
      {content}

  
    </div>
  );
};

export default EmployeeList;
