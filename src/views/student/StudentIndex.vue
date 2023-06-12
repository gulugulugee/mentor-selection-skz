<script setup>
    import { useUserStore } from '@/stores/user';
    import { onMounted,ref } from 'vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()

    const userStore = useUserStore()
    const load = async () => {
        await userStore.getTeacherList()
    }

    onMounted(() => load())

    const choose = (chooseAccount) => {
        userStore.chooseTeacher(chooseAccount,userStore.studentInfo.account)
    }

    const back = () => {
        router.replace({path: '/'})
    }

</script>
<template>
    <h1>学生界面</h1>
    <p v-for="item in userStore.teacherList">
        教师名：{{ item.name }}--
        教师当前已带学生总数： {{ item.now }}--
        教师带学生总数: {{ item.max }}
        <template v-if="userStore.studentInfo.state == false">
            <template v-if="item.now < item.max">
            <button @click="choose(item.account)">选择{{ item.name }}老师</button>
            </template>
            <template v-if="item.now >= item.max">
                <button disabled>{{ item.name }}老师人数已满，请选择其他老师</button>
            </template>
        </template>
    </p>
    <p>
        <button @click="back">回到登陆界面</button>
    </p>
</template>