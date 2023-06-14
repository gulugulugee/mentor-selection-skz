import { defineStore } from "pinia";
import { ref } from "vue";
import { studentListAPI, teacherListAPI } from "@/apis/user";
import { useRouter } from "vue-router";

export const useUserStore = defineStore('user',() => {

    const router = useRouter()

    // 当前登录的用户信息
    const studentInfo = ref({})
    const teacherInfo = ref({})

    // 全部的用户信息
    const studentList = ref([])
    const teacherList = ref([])

    //我选择的老师的信息
    const myTeacher = ref({})

    // 获取学生数据
    const getStudentList = async () => {

        // 判断是否是第一次执行
        if ( localStorage.getItem('student_flag')){
            console.log('判断为不是第一次')
            return
        }else{
            console.log("getStudentList被调用")
            const res = await studentListAPI()
            studentList.value = res
            localStorage.setItem('student_flag','notfirst')
        }
        
    }

    // 获取教师数据
    const getTeacherList = async () => {
        

        // 判断是否是第一次执行
        if ( localStorage.getItem('teacher_flag')){
            console.log('判断为不是第一次')
            return
            
        }else{
            console.log("getteacherlist被调用")
            const result = await teacherListAPI()
            teacherList.value = result
            localStorage.setItem('teacher_flag','notfirst')
        }
        
    }

    // 选择教师
    const chooseTeacher = ( teacherAccount,studentaccount) => {
        //被选老师的pinia数据中的now+1
        teacherList.value.find(item => item.account == teacherAccount).now
        = teacherList.value.find(item => item.account == teacherAccount).now + 1;

        // 选课学生在pinia中的state改为true
        studentList.value.find(item => item.account == studentaccount).state = true
        // 选课学生记录选的哪个老师（存在teacher中
        studentList.value.find(item => item.account == studentaccount).teacher = teacherAccount

        // 更新pinia中当前学生信息
        studentInfo.value = studentList.value.find(item => item.account == studentaccount)

        //存储我选的老师的信息
        myTeacher.value = teacherList.value.find(item => item.account == teacherAccount)

        //选择后跳转到我的界面
        router.replace('/show')

        // // 选课后更新localstorage中的学生和教师信息
        // localStorage.setItem('localStudentList',JSON.stringify(studentList.value))
        // localStorage.setItem('localTeacherList',JSON.stringify(teacherList.value))
        
    }

    // 用户登录
    const userLogin = ({ account,password }) => {
        // 获取当前登陆者的信息
        const nowStudentInfo = studentList.value.find(item => item.account == account && item.password == password)
        const nowTeacherInfo = teacherList.value.find(item => item.account == account && item.password == password)
        
        //判断账号或密码输入错误
        if(nowStudentInfo == null && nowTeacherInfo == null){
            return true
        }else{
            // const localStudentList = JSON.parse(localStorage.getItem('localStuentList'))
        // console.log("本地学生数据读取成功")
        // console.log(localStudentList)


        // 判断跳转位置
        if(nowStudentInfo?.role == 'student' && nowStudentInfo?.state == false){
            studentInfo.value = nowStudentInfo
            router.replace('/student')
        }
        if(nowStudentInfo?.role == 'student' && nowStudentInfo?.state == true){
            // studentInfo.value = nowStudentInfo
            router.replace('/show')
        }
        if(nowTeacherInfo?.role == 'teacher'){
            teacherInfo.value = nowTeacherInfo
            router,replace('/teacher')
        }
        
        return false
        }

        
    }

    //修改密码
    const changePassword = ( oldPassword,newPassword ) => {
        studentList.value.find(item => item.password == oldPassword).password = newPassword

        //更新userinfo
        studentInfo.password = newPassword
    }
    
    return{
        studentInfo,
        teacherInfo,
        myTeacher,
        studentList,
        teacherList,
        getTeacherList,
        getStudentList,
        userLogin,
        chooseTeacher,
        changePassword,
    }

    }
    ,
    {
        persist: true
    }
)