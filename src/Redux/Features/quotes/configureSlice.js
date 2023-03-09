import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    configure: {},

}



const configureSlice = createSlice({
    name: "configure",
    initialState,
    reducers: {
        createConfigure: (state, { payload }) => {
            state.configure = payload;
        }
    }

});

export const { createConfigure } = configureSlice.actions;
export default configureSlice.reducer;