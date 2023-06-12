
import { ref  } from "vue";
import httpInstance from '@/utils/http'

// export function getUserListAPI () {
//     console.log('API')
//     return httpInstance({
//         url:'userListData',
//         method: 'get'
//     })
// }

export const loginAPI =  async ({ account,password }) => {
  const resp = await httpInstance({
    url: '/login',
    method: 'post',
    data: {
        account,
        password
    }
})
    console.log(resp);
    return resp
}