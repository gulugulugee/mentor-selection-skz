<script setup>
import { ref,onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'



const userStore = useUserStore()

const load = async () => {
    await userStore.getStudentList()
}

load()

const form = ref({
    account: '',
    password: '',
})


const login = () => {
    const { account,password } = form.value
    userStore.userLogin({ account,password })
}




</script>


<template>
    <div class="login-box">
        <!-- ddfdf : {{ userStore.userInfo.role }} -->
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