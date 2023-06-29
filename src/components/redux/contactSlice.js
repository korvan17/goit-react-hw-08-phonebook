import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    // cacheKey: 'authToken',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    login: builder.mutation({
      query: login => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email: login.email,
          password: login.password,
        },
      }),
      invalidatesTags: ['Contact'],
      transformResponse: ({ token }) => localStorage.setItem('token', token),
    }),
    registration: builder.mutation({
      query: registration => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: registration.name,
          email: registration.email,
          password: registration.password,
        },
      }),
      invalidatesTags: ['Contact'],
      transformResponse: ({ token }) => localStorage.setItem('token', token),
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Contact'],
      transformResponse: () => localStorage.setItem('token', ''),
    }),
  }),
});

export const {
  useLogoutMutation,
  useLoginMutation,
  useRegistrationMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = phoneBookApi;
