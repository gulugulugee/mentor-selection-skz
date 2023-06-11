import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserListAPI } from "@/apis/user";

export const useUserStore = defineStore('userlist',() => {
    // console.log("getuserlist被调用")
    const userlist = ref([])

    const getUserList = async () => {
        console.log("getuserlist被调用")
        const res = await getUserListAPI()
        userlist.value = res.data
    }
    
    return{
        getUserList,
        userlist
    }
    },
    // {
    //     persist:true
    // }
)