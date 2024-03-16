import { createSlice } from '@reduxjs/toolkit';

const modelSlice = createSlice({
    name: 'model',
    initialState: { model: false },
    reducers: {
        openModel: (state) => {
            state.model = true;
        },
        closeModel: (state) => {
            state.model = false;
        },
    },
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
