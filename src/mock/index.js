// import userListJSON from '@/mock/json/userList.json'


import Mock from 'mockjs'




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