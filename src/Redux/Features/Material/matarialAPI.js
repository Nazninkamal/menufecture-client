import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const materialApi = createApi({
    reducerPath: 'materialApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/material' }),
    tagTypes: ['material'],
    endpoints: (builder) => ({
        createMaterials: builder.mutation({
            query: ({ material }) => ({
                url: `/create-material`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: material,
            }),
            invalidatesTags: ['material']
        }),
        getMaterials: builder.query({
            query: () => ({
                url: `/get-material`,
                headers: { 'Authorization': token },
            }),
            providesTags: ['material']
        }),
        deleteMaterials: builder.mutation({
            query: ({ id }) => ({
                url: `/delete-material/${id}`,
                method: 'DELETE',
                headers: { 'Authorization': token },
            }),
            invalidatesTags: ['material']
        }),

    })
})

export const { useCreateMaterialsMutation, useGetMaterialsQuery, useDeleteMaterialsMutation } = materialApi;