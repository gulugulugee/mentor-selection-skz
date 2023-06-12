// import userListJSON from '@/mock/json/userList.json'


import Mock from 'mockjs'


//用户数据
var userData = [
    {
        "name":"skz",
        "account":'2020214718',
        "password":'2020214718',
        "role":"student",
        "state":false
    },
    {
        "name":"student2",
        "account":'2020214719',
        "password":'2020214719',
        "role":"student",
        "state":false
    },
    {
        "name":"student3",
        "account":'2020214720',
        "password":'2020214720',
        "role":"student",
        "state":false
    },
    {
        "name":"teacher1",
        "account":"121212",
        "password":"121212",
        "max":"12",
        "now":10,
        "role":"teacher"
    },
    {
        "name":"teacher2",
        "account":"131313",
        "password":"131313",
        "max":"13",
        "now":10,
        "role":"teacher"
    },
    {
        "name":"teacher3",
        "account":"141414",
        "password":"141414",
        "max":"14",
        "now":10,
        "role":"teacher"
    },
    {

        "name":"teacher4",
        "account":"151515",
        "password":"151515",
        "max":"15",
        "now":15,
        "role":"teacher"
    }
]

// var _jsonData = [
//     { name: "小明", age: 16 },
//     { name: "小6", age: 16 },
//     { name: "小7", age: 16 },
// ];
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

// Mock.mock('/mock/login','post',( options ) => {
//     console.log('dfdfdfddfd');
//     // var queryData = _jsonData.filter(function (_data) {
//     //     return _data.name == '小明'
//     // })

//     //获取post请求中的参数，存在body中，后续调用
//     const body = JSON.parse(options.body)
//     console.log(body.account)

//     var user = userData.filter(function (_data) {
//         return _data.account == body.account
//     })
//     // return {name: 'BO'}
//     console.log(user)
//     return user
// })

Mock.mock('/mock/studentList','get',() => {
    console.log("获取学生信息的mock启动")
    var studentList = userData.filter(function (_data) {
        return _data.role == 'student'
    })

    console.log(studentList)
    return studentList
})

Mock.mock('/mock/teacherList','get',() => {
    console.log("获取教师信息的mock启动")
    var teacherList = userData.filter(function (_data) {
        return _data.role == 'teacher'
    })

    console.log(teacherList)
    return teacherList
})