import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),

  tagTypes: ["Post"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: ["Post"],
    }),

    addPost: builder.mutation({
      query: (post) => ({
        url: `posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: rest,
      }),

      invalidatesTags: ["Post"],
    }),

    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
