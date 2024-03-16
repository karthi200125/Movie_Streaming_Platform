import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './AuthSlice'
import ModelSlice from './ModelSlice'

export const store = configureStore({
    reducer: {
        user: AuthSlice,
        model: ModelSlice
    }
})