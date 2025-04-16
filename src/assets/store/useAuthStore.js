
import { create } from "zustand"
import { axiosInstance } from "../../lib/axios" 
import { persist, createJSONStorage } from "zustand/middleware"

const authStoreCreator = (set, get) => ({
    authUser: null,
    isLoginLoading: false,
    isCheckingAuth: true, 

    isRequestingReset: false,
    isResettingPassword: false,

    signUp: async (data) => {
        try {
            const res = await axiosInstance.post('user/signUp', data)
            return { success: true, data: res.data }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Sign up failed"
            console.error("SignUp error:", error.response?.data || error.message)
            return { error: errorMessage }
        }
    },

    login: async (data) => {
        set({ isLoginLoading: true, authUser: null })
        try {
            const res = await axiosInstance.post('user/login', data)
            set({ authUser: res.data, isLoginLoading: false })
            return { success: true, data: res.data }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Login failed"
            console.error("Login error:", error.response?.data || error.message)
            set({ isLoginLoading: false })
            return { error: errorMessage }
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post('user/logout')
            set({ authUser: null })
            return { success: true }
        } catch (error) {
            console.error('Logout API Error:', error.response?.data || error.message)
            set({ authUser: null }) 
            return { error: "Logout failed on server, logged out locally." }
        }
    },

    checkAuth: async () => {
        if (get().authUser || get().isCheckingAuth === false) {
             if (get().isCheckingAuth) set({ isCheckingAuth: false })
             return
        }
        set({ isCheckingAuth: true })
        try {
          const res = await axiosInstance.get('/user/checkAuth')
          set({ authUser: res.data, isCheckingAuth: false })
        } catch (error) {
          console.log("CheckAuth failed (likely not logged in):", error.response?.statusText || error.message)
          set({ authUser: null, isCheckingAuth: false })
        }
    },

    requestPswReset: async (data) => {
        set({ isRequestingReset: true })
        try {
            const res = await axiosInstance.post('/user/request-reset-password', data)
            set({ isRequestingReset: false })
            return { success: true, message: res.data.message }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Request failed. Please try again."
            console.error('Request reset password API Error:', error.response?.data || error.message)
            set({ isRequestingReset: false })
            return { error: errorMessage }
        }
    },

    resetPassword: async (data) => {
        set({ isResettingPassword: true })
        try {
            const res = await axiosInstance.post('/user/reset-password', data)
            set({ isResettingPassword: false })
            await get().checkAuth() 
            return { success: true, message: res.data.message }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Password reset failed. Please check code/password."
            console.error('Reset password API Error:', error.response?.data || error.message)
            set({ isResettingPassword: false })
            return { error: errorMessage }
        }
    }
})

export const useAuthStore = create(
    persist(
        authStoreCreator,
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                authUser: state.authUser,
            }),
            onRehydrateStorage: (state) => {
                console.log("Hydrating auth state...")
                return (state, error) => {
                   if (error) {
                       console.error("Failed to rehydrate auth state:", error)
                   } else if (state && !state.authUser) {
                   } else if (state?.authUser) {
                      console.log("User found in storage:", state.authUser?.userName)
                      state.isCheckingAuth = false 
                   }
               }
           }
        }
    )
)

