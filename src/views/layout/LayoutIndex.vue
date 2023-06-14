<script setup>
    import { useUserStore } from '@/stores/user';
    import { useRouter } from 'vue-router';
    import { computed, ref, onMounted } from 'vue'

    const router = useRouter()
    const userStore = useUserStore()

    

    const back = () => {
        router.replace('/')
    }
    const size = ref('')
    const blockMargin = computed(() => {
    const marginMap = {
        large: '32px',
        default: '28px',
        small: '24px',
    }
    return {
        marginTop: marginMap[size.value] || marginMap.default,
    }
    })
</script>

<template>
    <!-- 这是{{ userStore.userInfo.name }}的登陆页面 -->
    <!-- <h1> 登陆后的页面 </h1>
    <p>
        <button @click="back">回到登录页</button>
    </p> -->
    
    <div class="common-layout">
        <el-container>
        <el-header>
            <h1>
                选择成功
            </h1>
        </el-header>
        <el-container>
            <el-aside width="300px">

            </el-aside>
            <el-main>
                <el-descriptions
                    title="我的导师："
                    direction="vertical"
                    :column="4"
                    :size="size"
                    border
                >
                    <el-descriptions-item label="导师姓名">{{ userStore.myTeacher.name }}</el-descriptions-item>
                    <el-descriptions-item label="电话">{{ userStore.myTeacher.telephone }}</el-descriptions-item>
                    <el-descriptions-item label="所属学校" :span="2">{{ userStore.myTeacher.place }}</el-descriptions-item>
                    <el-descriptions-item label="学生总数">{{ userStore.myTeacher.max }}</el-descriptions-item>
                    <el-descriptions-item label="当前已带学生">{{ userStore.myTeacher.now }}</el-descriptions-item>
                    <el-descriptions-item label="" :span="2"></el-descriptions-item>
                    <el-descriptions-item label="办公室">
                    <el-tag size="small">Linda</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item label="办公室位置"
                    :span="3"
                    >{{ userStore.myTeacher.address }}
                    </el-descriptions-item>
                    <el-descriptions-item label="修改密码">
                        <el-button type="warning" @click="back">点我修改密码</el-button>
                    </el-descriptions-item>
                    <el-descriptions-item label="重新登录">
                        <el-button type="warning" @click="back">点我回到登录页面</el-button>
                    </el-descriptions-item>
                </el-descriptions>
            </el-main>
        </el-container>
        </el-container>
    </div>
    
</template>
<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>