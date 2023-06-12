// import userListJSON from '@/mock/json/userList.json'


import Mock from 'mockjs'

var userData = [
    {
        "account":'1111',
        "password":'1111',
        "role":"student"
    },
    {
        "account":"2222",
        "password":"2222",
        "role":"teacher"
    }
]

var _jsonData = [
    { name: "小明", age: 16 },
    { name: "小6", age: 16 },
    { name: "小7", age: 16 },
];
// var queryData = _jsonData.filter(function (_data) {
//     return _data.name == '小明'
// })

// console.log("queryData===");
// console.log(queryData);


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

Mock.mock('/mock/login','post',( options ) => {
    console.log('dfdfdfddfd');
    // var queryData = _jsonData.filter(function (_data) {
    //     return _data.name == '小明'
    // })

    //获取post请求中的参数，存在body中，后续调用
    const body = JSON.parse(options.body)
    console.log(body.account)

    var user = userData.filter(function (_data) {
        return _data.account == body.account
    })
    // return {name: 'BO'}
    console.log(user)
    return user
})