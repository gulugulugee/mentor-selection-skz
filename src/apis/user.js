import axios  from "axios";
import { ref  } from "vue";
import httpInstance from '@/utils/http'

// export function getUserListAPI () {
//     console.log('API')
//     return httpInstance({
//         url:'userListData',
//         method: 'get'
//     })
// }

export const loginAPI = ({ account,password }) => {
    return Request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}