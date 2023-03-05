import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userName: "",
    email: "",
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",

}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {

        // Extra reducer comes here

    },



})

// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer