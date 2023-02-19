import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (page) => ({
                url: `/get-products?page=${page}&limit=10`,
            }),
            providesTags: ['product']
        }),



    })
})

export const { useGetProductsQuery } = productsApi;