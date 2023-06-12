import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore('user',() => {
    // console.log("getuserlist被调用")
    const userInfo = ref([])

    const getUserInfo = async ({ account,password }) => {
        console.log("gtuserinfo被调用")
        const res = await loginAPI({ account,password })
        userInfo.value = res[0]
    }
    
    return{
        userInfo,
        getUserInfo
    }
    },
    {
        persist: true,
    }
)