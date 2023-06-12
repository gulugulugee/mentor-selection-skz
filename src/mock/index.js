// import userListJSON from '@/mock/json/userList.json'


import Mock from 'mockjs'
import { ref } from 'vue'
import userData from '@/mock/json/userData.json'

// const userData = ref([
//     {
//         account: '1111',
//         password: '1111',
//         role: 'student'
//     },
//     {
//         account: '2222',
//         password: '2222',
//         role: 'teacher'
//     }
// ])


Mock.mock('/mock/userListData',"get",function(){
    console.log("get 拦截")
    //返回10条随机数据
    return Mock.mock({
        "data|10":[
            {
                name:"@cname",//随即中文名
                msg:"@cparagraph(2,3)",//随机段落
                date:"@datetime",//随机日期
            }
        ]
    })
}
)

Mock.mock('/mock/login','post',function({ account,password }){
    console.log('dfdfdfddfd');
    //const obj = userData.value.find(item => item.account == account && item.password == password)
    return {name: 'BO'}
})