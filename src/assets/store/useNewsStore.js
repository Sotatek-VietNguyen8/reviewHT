import { create } from "zustand";
import { axiosInstance } from "../../lib/axios";

export const useNewStore = create ((set) => ({
    news: [],
    
    postNews: async(data)=>{
        try {
            const res = await axiosInstance.post('news/post', data)
            return res.data
        } catch (error) {
            console.log('Post News error response: ', error.response)
            return null
        }
    },

    getNews: async() =>{
        try {
            const res = await axiosInstance.get('news/getNews')
            set({news: res.data.filterNews })
            return res.data
        } catch (error) {
            console.log('Error fetching News: ', error.response)
            set({news: [] })
        }
    }
}))
