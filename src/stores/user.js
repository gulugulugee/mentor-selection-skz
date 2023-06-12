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

    // 获取学生数据
    const getStudentList = async () => {
        console.log("getStudentList被调用")
        const res = await studentListAPI()
        studentList.value = res
    }

    // 获取教师数据
    const getTeacherList = async () => {
        console.log("getteacherlist被调用")
        const result = await teacherListAPI()
        teacherList.value = result
    }

    // 选择教师
    const chooseTeacher = ( teacherAccount,studentaccount) => {
        teacherList.value.find(item => item.account = teacherAccount).now
        = teacherList.value.find(item => item.account = teacherAccount).now + 1;

        studentList.value.find(item => item.account = studentaccount).state = true

        studentInfo.value = studentList.value.find(item => item.account = studentaccount)
    }

    // 用户登录
    const userLogin = ({ account,password }) => {
        // 获取当前登陆者的信息
        const nowStudentInfo = studentList.value.find(item => item.account = account && item.password == password)
        const nowTeacherInfo = teacherList.value.find(item => item.account = account && item.password == password)
        
        // 判断跳转位置
        if(nowStudentInfo.role && nowStudentInfo.state == false){
            studentInfo.value = nowStudentInfo
            router.replace('/student')
            return studentInfo
        }
        if(nowStudentInfo.role && nowStudentInfo.state == true){
            // studentInfo.value = nowStudentInfo
            router.replace('/layout')
        }
        if(nowTeacherInfo.role){
            teacherInfo.value = nowTeacherInfo
            router,replace('/teacher')
            return teacherInfo
        }
    }
    
    return{
        studentInfo,
        teacherInfo,
        studentList,
        teacherList,
        getTeacherList,
        getStudentList,
        userLogin,
        chooseTeacher,
    }

    },{
        persist: true
    }
)