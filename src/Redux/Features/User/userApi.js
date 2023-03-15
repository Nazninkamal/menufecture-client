import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/users' }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: `/get-all-users`,
                method: 'GET',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("token")}` },
            }),
            providesTags: ['user']
        }),
        getMe: builder.query({
            query: () => ({
                url: `/get-me`,
                method: 'GET',
                headers: { 'Authorization': `Bearer ${localStorage?.getItem("token")}` },
            }),
            providesTags: ['user']
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: `/update-password`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
        changeProfileDetails: builder.mutation({
            query: (data) => ({
                url: `/update-details`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
        applyForSupplier: builder.mutation({
            query: (data) => ({
                url: `/applyForSupplier`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data
            }),
            invalidatesTags: ['user']
        }),
        getApplyForSupplier: builder.query({
            query: () => ({
                url: `/getApplyForSupplier`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['user']
        }),
        makeAddApplyForSupplier: builder.mutation({
            query: ({ email }) => ({
                url: `/makeAddApplyForSupplier`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: email
            }),
            invalidatesTags: ['user']
        }),

    })
})

export const { useChangePasswordMutation, useGetAllUsersQuery, useGetMeQuery, useChangeProfileDetailsMutation, useApplyForSupplierMutation, useGetApplyForSupplierQuery, useMakeAddApplyForSupplierMutation } = userApi;