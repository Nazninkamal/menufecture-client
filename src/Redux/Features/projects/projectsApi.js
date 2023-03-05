import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/projects' }),
    tagTypes: ['projects'],
    endpoints: (builder) => ({
        getMyProjects: builder.query({
            query: (page) => ({
                url: `/get-my-projects?page=${page}&limit=10`,
                headers: { 'Authorization': token },
            }),
            providesTags: ['projects']
        }),



    })
})

export const { useGetMyProjectsQuery } = projectsApi;