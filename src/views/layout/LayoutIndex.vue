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
    这是{{ userStore.userInfo.name }}的登陆页面
    <p>
        <button @click="back"></button>
    </p>
</template>