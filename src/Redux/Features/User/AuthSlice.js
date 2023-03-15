import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    user: null,
    isLoading: true,
    isError: false,
    error: '',
    
}


export const registration = createAsyncThunk(
    "auth/registration",
    async (data) => {
        
        const response = await axios.post("http://localhost:5000/api/v1/users/registration", data);
        return response;

    }
)
export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
        const response = await axios.post("http://localhost:5000/api/v1/users/login", data);
        return response;

    }
)



export const getMe = createAsyncThunk(
    "auth/getMe",
    async () => {
        const token = `Bearer ${localStorage.getItem('token')}`;

        const response = await axios.get("http://localhost:5000/api/v1/users/get-me",
            {
                headers: {
                    Authorization: token
                }
            }
        );
        return response;

    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(registration.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.error = "";

        }).addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isError = true;
            state.error = action.error.message;

        }).addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload?.data?.result?.user;
            state.isError = false;
            state.error = "";

        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isError = true;
            state.error = action.error.message;

        }).addCase(getMe.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(getMe.fulfilled, (state, { payload }) => {
            state.user = payload?.data?.result;
            state.isLoading = false;
            state.isError = false;
            state.error = "";

        }).addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
                  })
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer;