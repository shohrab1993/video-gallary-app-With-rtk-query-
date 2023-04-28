import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["Videos", "Video", "RelatedVideos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 600,
      providesTags: ["Videos"],
    }),

    getvideo: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),

    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const search = tags.map((tag) => `_search=${tag}`);
        const queryStr = `/videos/search?${search.join("&")}&limit=4`;
        return queryStr;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    createVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
    updateVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetvideoQuery,
  useGetRelatedVideosQuery,
  useCreateVideoMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
