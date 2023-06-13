<script setup>
    import { useUserStore } from '@/stores/user';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const userStore = useUserStore()

    const back = () => {
        router.replace('/')
    }
</script>

<template>
    <!-- 这是{{ userStore.userInfo.name }}的登陆页面 -->
    <h1> 登陆后的页面 </h1>
    <p>
        <button @click="back">回到登录页</button>
    </p>
</template>