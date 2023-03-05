import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/users' }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: `/get-all-users`,
                method: 'GET',

            }),
            providesTags: ['user']
        }),
        getMe: builder.query({
            query: (email) => ({
                url: `/get-me/${email}`,
                method: 'GET',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("token")}` },
            }),
            providesTags: ['user']
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: `/login`,
                method: 'POST',
                body: data
            }),
            providesTags: ['user']
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: `/registration`,
                method: 'POST',
                body: data
            }),
            providesTags: ['user']
        }),

    })
})

export const { useLoginUserMutation, useRegisterUserMutation, useGetAllUsersQuery, useGetMeQuery } = userApi;