import { createSlice } from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name: "user",
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) ?? null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            localStorage.removeItem('access_token');
            localStorage.removeItem('search');
        },
    }
})

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;