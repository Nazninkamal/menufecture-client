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
            providesTags: ['quotes']
        }),



    })
})

export const { useGetMyQuotesQuery, useCreateQuotesMutation } = quotesApi;