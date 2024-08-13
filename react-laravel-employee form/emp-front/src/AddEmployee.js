import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, updateEmployee } from './redux/employeeSlice';



const AddEmployee = ({ employeeToEdit, setEmployeeToEdit }) => {
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (employeeToEdit) {
      setCard(employeeToEdit.card);
      setName(employeeToEdit.name);
      setPhone(employeeToEdit.phone);
      setAddress(employeeToEdit.address);
      setEmail(employeeToEdit.email);
      setLocation(employeeToEdit.location);
      setCity(employeeToEdit.city);
    }
  }, [employeeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      dispatch(updateEmployee({
        
        id: employeeToEdit.id,
        employee: { card, name, phone, address, email, location, city }
      }));
      setEmployeeToEdit(null); 
    } else {

      dispatch(addEmployee({ card, name, phone, address, email, location, city }));
    }
    setCard('');
    setName('');
    setPhone('');
    setAddress('');
    setEmail('');
    setLocation('');
    setCity('');
  };

 


  return (
  
    <div className='text'>
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginLeft: "10px" }} >
      <div style={{marginLeft:"23px"}}>
        <label>CARD_ID :</label>
        <input
          type="number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          style={{marginLeft:"23px" , borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{marginLeft:"54px", borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>Phone :</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{marginLeft:"52px" , borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>Address :</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{marginLeft:"40px", borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>EMAIL :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{marginLeft:"42px", borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>LOCATION :</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{marginLeft:"12px", borderRadius:"5px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
        <label>CITY :</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{marginLeft:"55px", borderRadius:"5px"}}
        />
      </div>
      </div>


      <button type="submit" style={{padding:"5px", borderRadius:"5px", marginBottom:"42px", marginLeft: "197px", display: "block",marginTop:"20px"}}>
 {employeeToEdit ? 'Update Employee' : 'Add Employee'}
</button>
      
      
      
      
     
    </form>
    </div>


    

        




    
   
  );
};

export default AddEmployee;





