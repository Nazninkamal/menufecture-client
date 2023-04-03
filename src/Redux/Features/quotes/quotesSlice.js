import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../../../Utility/Token/token';


const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
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
export const downloadPDF = createAsyncThunk(
    "quote/downloadPDF",
    async ({ id }) => {

        const response = await axios({
            url: `http://localhost:5000/api/v1/quotes/downLoad/document/${id}`,
            method: 'GET',
            responseType: 'blob',
            headers: {
                Authorization: token
            }

        }).then((response) => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'invoice.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);

        });
        return response;

    }
)







const createQuoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
       
    },


    extraReducers: (builder) => {
        builder
            .addCase(createQuote.pending, (state) => {
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
            .addCase(downloadPDF.pending, (state) => {
                state.isLoading = true;
                state.isError = false
                state.error = "";

            }).addCase(downloadPDF.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess=true;
                state.isError = false;
                state.error = "";

            }).addCase(downloadPDF.rejected, (state, action) => {
                state.isLoading = false;
                state.threeDFile = null;
                state.isError = true;
                state.error = action.error.message;

            })
    }
})
// export const { downloadPDFLoading } = createQuoteSlice.actions
export default createQuoteSlice.reducer;