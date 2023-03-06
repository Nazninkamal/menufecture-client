import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../../../Utility/Token/token';


const initialState = {
    isLoading: true,
    isError: false,
    error: '',

}


export const createQuote = createAsyncThunk(
    "quote/createQuote",
    async ({ formData, id }) => {

        const response = await axios.post(`http://localhost:5000/api/v1/quotes/create-a-quote/${id}`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                },
                body: formData
            }
        )
        return response;

    }
)







const createQuoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createQuote.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(createQuote.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = "";

        }).addCase(createQuote.rejected, (state, action) => {
            state.isLoading = false;
            state.threeDFile = null;
            state.isError = true;
            state.error = action.error.message;

        })
    }
})
// export const {  } = authSlice.actions
export default createQuoteSlice.reducer;