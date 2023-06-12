<script setup>
// import { useUserStore } from '@/stores/user'

// console.log("LoginIndex")

// const userListStore = useUserStore()

// userListStore.getUserList()

// console.log(userListStore.userlist)

import { ref,onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import {useRouter} from 'vue-router'

const userStore = useUserStore()

const form = ref({
    account: '',
    password: '',
})

const user =ref({})

const router = useRouter()

const login = async () =>{
    // console.log(form.value)
    const { account,password } = form.value
    // console.log(account)
    // const res = await loginAPI({ account,password })
    // user.value = res[0]
    // console.log(user.value)

    await userStore.getUserInfo({ account,password })
    // console.log(userStore.userInfo)
    if(userStore.userInfo.role == 'student'){
        router.replace({path: '/student'})
    }
    if(userStore.userInfo.role == 'teacher'){
        router.replace({path: '/teacher'})
    }
}

// onMounted(() => {
//     login();
// })

</script>


<template>
    <div class="login-box">
        ddfdf : {{ userStore.userInfo.role }}
        <div>登录????</div>
        <div class="account">
            账号：<input type="text" v-model="form.account">
        </div>
        <div class="password">
            密码：<input type="text" v-model="form.password">
        </div>
        <div class="login-button">
            <button @click="login" RouterLink="">登录!!!!</button>
        </div>
    </div>
</template>

<style>
    .login-box{
        border-color: red;
    }
</style>