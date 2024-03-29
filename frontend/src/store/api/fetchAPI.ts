import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "fetchAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductQuery } = api;
