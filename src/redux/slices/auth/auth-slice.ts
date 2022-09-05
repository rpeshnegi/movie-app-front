import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from 'axios';

const initialState: AuthInitState = {
  isAuthenticated: !!localStorage.getItem('user') || false,
  isInitialized: false,
  auth: JSON.parse(localStorage.getItem('user') || '{}'),
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state: any, action: PayloadAction<IAuthData>) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.isAuthenticated = true;
      state.auth = action.payload;
    },
    LOGIN_ERROR: (state: any, action: PayloadAction<AxiosError>) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    LOGOUT: (state: any) => {
      localStorage.removeItem('user')
      state.isAuthenticated = false
      state.auth = null
    },
  },
});

export default authSlice;
