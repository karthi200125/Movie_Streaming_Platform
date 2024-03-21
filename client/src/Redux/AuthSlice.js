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
        },
        watchedMovies: (state, action) => {
            const movieId = action.payload;
            const watchedMoviesSet = new Set(state.user.watchedMovies);
            if (!watchedMoviesSet.has(movieId)) {
                state.user.watchedMovies.push(movieId);
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        }

    }
})

export const { login, logout, watchedMovies } = AuthSlice.actions;

export default AuthSlice.reducer;