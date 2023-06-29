import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDliMDVkZGRlYTQ4MDAwMTQ4ZjU2MTQiLCJpYXQiOjE2ODc5NzQ2NTV9.DNj1ltcodTAwrEfpxNCn0qTdFA7MyUXDfGKg8po2lcI"


export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com', //'https://6491a4692f2c7ee6c2c8a0af.mockapi.io/api/v1',
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = phoneBookApi;
