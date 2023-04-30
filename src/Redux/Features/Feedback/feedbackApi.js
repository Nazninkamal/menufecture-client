import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/feedback' }),
    tagTypes: ['feedback'],
    endpoints: (builder) => ({
        createFeedback: builder.mutation({
            query: ({ data }) => ({
                url: `/create-feedback`,
                method: 'POST',
                headers: { 'Authorization': token },
                body: data,
            }),
            invalidatesTags: ['feedback']
        }),
        getFeedback: builder.query({
            query: () => ({
                url: `/get-feedback`,
                headers: { 'Authorization': token },
            }),
            providesTags: ['feedback']
        })

    })
})

export const { useCreateFeedbackMutation, useGetFeedbackQuery } = feedbackApi;