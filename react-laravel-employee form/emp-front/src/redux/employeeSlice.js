import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};

// Fetch employees
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/empform');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Add employee
export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/empform', employee);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Update employee
export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ id, employee }) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/empform/${id}`, employee);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

// Delete employee
export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/empform/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.message);
  }
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(emp => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
