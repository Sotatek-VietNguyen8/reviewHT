import { create } from "zustand";
import { axiosInstance } from "../../lib/axios";
import { persist, createJSONStorage } from "zustand/middleware";

const authStoreCreator = (set) => ({
    authUser: null,
    isLoginLoading: false,
    isCheckingAuth: true,

    signUp: async (data) => {
        try {
            const res = await axiosInstance.post('user/signUp', data);
            return res.data;
        } catch (error) {
            console.error("SignUp error:", error);
            return { error: error.response?.data?.message || "Sign up failed" };
        }
    },

    login: async (data) => {
        set({ isLoginLoading: true });
        try {
            const res = await axiosInstance.post('user/login', data);
            set({ authUser: res.data, isLoginLoading: false });
            return { success: true, data: res.data };
        } catch (error) {
            console.error("Login error:", error);
            set({ isLoginLoading: false });
            return { error: error.response?.data?.message || "Login failed" };
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('user/logout');
            set({ authUser: null });
        } catch (error) {
            console.error('Logout API Error:', error);
            set({ authUser: null });
        }
    },
    checkAuth: async () => {
        try {
          const res = await axiosInstance.get('/user/checkAuth');
          set({ authUser: res.data });
        } catch (error) {
          console.log("Error in checkAuth:", error);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
    },
});

export const useAuthStore = create(
    persist(
        authStoreCreator,
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                authUser: state.authUser,
            }),
        }
    )
);