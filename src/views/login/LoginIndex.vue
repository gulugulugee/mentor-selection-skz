<script setup>
// import { useUserStore } from '@/stores/user'

// console.log("LoginIndex")

// const userListStore = useUserStore()

// userListStore.getUserList()

// console.log(userListStore.userlist)
import { loginAPI } from '@/apis/user';
import { ref,onMounted } from 'vue';

const form = ref({
    account: '',
    password: '',
})

const userR =ref({})

const { account,password } = form.value

const login = () =>{
    loginAPI({ account,password }).then(user => userR.value = user)
   
}

</script>


<template>
    <div class="login-box">
        ddfdf : {{ userR.name }}
        <div>登录????</div>
        <div class="account">
            账号：<input type="text" v-model="form.account">
        </div>
        <div class="password">
            密码：<input type="text" v-model="form.password">
        </div>
        <div class="login-button">
            <button @click="login">登录!!!!</button>
        </div>
    </div>
</template>

<style>
    .login-box{
        border-color: red;
    }
</style>