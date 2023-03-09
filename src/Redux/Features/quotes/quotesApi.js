import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/quotes' }),
    tagTypes: ['quotes'],
    endpoints: (builder) => ({
        getMyQuotes: builder.query({
            query: ({ id, page }) => ({
                url: `/get-my-quotes/${id}?page=${page}&limit=10`,
                headers: { 'Authorization': token },
            }),
            providesTags: ['quotes']
        }),
        getMySingleQuotes: builder.query({
            query: ({ id }) => ({
                url: `/get-my-single-quote/${id}`,
                headers: { 'Authorization': token },
            }),
            providesTags: ['quotes']
        }),


        updateMySingleQuotes: builder.mutation({
            query: ({ id, configure }) => ({
                url: `/update-my-quote/${id}`,
                method: 'PATCH',
                headers: { 'Authorization': token },
                body: configure
            }),
            invalidatesTags: ['quotes']
        }),


        createQuotes: builder.mutation({
            query: (threeDFile) =>
            ({
                url: `/create-a-quote/${'63fb2c1d315bb8c10634678e'}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token

                },
                body: threeDFile,
            })
            ,
            invalidatesTags: ['quotes']
        }),



    })
})

export const { useGetMyQuotesQuery, useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation, useCreateQuotesMutation } = quotesApi;