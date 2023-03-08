import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { token } from '../../../Utility/Token/token';


export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/projects' }),
    tagTypes: ['Projects'],
    endpoints: (builder) => ({
        getMyProjects: builder.query({
            query: (page) => ({
                url: `/get-my-projects?page=${page}&limit=10`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['Projects']
        }),
        getSingleMyProjects: builder.query({
            query: ({ id }) => ({
                url: `/get-single-project/${id}`,
                method: 'GET',
                headers: { 'Authorization': token },
            }),
            providesTags: ['Projects']
        }),
        createProject: builder.mutation({
            query: (data) => ({
                url: `/create-project`,
                method: 'POST',
                body: data,
                headers: { 'Authorization': token },
            }),
            invalidatesTags: ['Projects']
        }),
        updateProject: builder.mutation({
            query: ({ projectName, id }) => ({
                url: `/update-project/${id}`,
                method: 'PATCH',
                body: { projectName },
                headers: { 'Authorization': token },
            }),
            invalidatesTags: ['Projects']
        }),
        deleteProject: builder.mutation({
            query: ({ id }) => ({
                url: `/delete-project/${id}`,
                method: 'DELETE',
                headers: { 'Authorization': token },
            }),
            invalidatesTags: ['Projects']
        }),



    })
})

export const { useGetMyProjectsQuery, useGetSingleMyProjectsQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } = projectsApi;