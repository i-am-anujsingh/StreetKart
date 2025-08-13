import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,          // User is not logged in
  userData: null          // MongoDB user data will be stored here
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Called after successful login from MongoDB backend
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload; // Direct MongoDB user object
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;