import { api } from "./index";

export const adminApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAdmins: build.query({
            query: (params) => ({
                url: "/admins",
                params,
            }),
            providesTags: ["Admin"],
        }),
        getProfile: build.query({
            query: (params) => ({
                url: "/admin/profile",
                params,
            }),
            providesTags: ["Admin"],
        }),
        signIn: build.mutation({
            query: (body) => ({
                url: "/admins/sign-in",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Admin"],
        }),
        registerAdmin: build.mutation({
            query: (body) => ({
                url: "/admins/sign-up",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Admin"],
        }),
    }),
});

export const {
    useGetAdminsQuery,
    useGetProfileQuery,
    useSignInMutation,
    useRegisterAdminMutation,
} = adminApi;
