<script setup>
    import { useUserStore } from '@/stores/user';
    import { onMounted,ref } from 'vue'
    import {useRouter} from 'vue-router'
    import { InfoFilled } from '@element-plus/icons-vue'

    const newPassword = ref('')

    const router = useRouter()

    const userStore = useUserStore()
    const load = async () => {
        await userStore.getTeacherList()
    }

    onMounted(() => load())

    const choose = (chooseAccount) => {
        userStore.chooseTeacher(chooseAccount,userStore.studentInfo.account)
    }

    const cancelEvent = () => {
        console.log('cancel!')
    }

    const back = () => {
        router.replace({path: '/'})
    }

    const changePassword = () => {
        userStore.changePassword(userStore.studentInfo.password,newPassword)
    }

</script>
<template>
    <!-- <h1>学生界面</h1>
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
    </p> -->
    <div class="common-layout">
        <el-container>
        <el-header>
            <h1>
                你好！欢迎{{ userStore.studentInfo.name }}使用毕设导师选择系统,请选择你的导师
            </h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <ul>
                    <li>
                        选择导师
                    </li>
                    <li>
                        修改密码
                    </li>
                </ul>
            </el-aside>
            <el-main>
                <template v-if="userStore.studentInfo.account == userStore.studentInfo.password">
                    <el-alert title="当前账号密码相同，请修改密码" type="warning" effect="dark" center />
                </template>
                 <el-descriptions
                    title="全部教师"
                    direction="vertical"
                    :column="4"
                    :size="size"
                    border
                >
                    <template v-for="(item,index) in userStore.teacherList" :key="index">
                        <template v-if="index === 0">
                            <el-descriptions-item label="教师名">{{ item.name }}</el-descriptions-item>
                            <el-descriptions-item label="当前跟随该老师的学生数">{{ item.now }}</el-descriptions-item>
                            <el-descriptions-item label="最多学生数">{{ item.max }}</el-descriptions-item>
                            <el-descriptions-item label="选择">
                                <el-popconfirm
                                    confirm-button-text="确认"
                                    cancel-button-text="再想想"
                                    title="你确定选择这位老师吗"
                                    :icon="InfoFilled"
                                    icon-color="#626AEF"
                                    @confirm="choose(item.account)"
                                    @cancel="cancelEvent"
                                >
                                    <template #reference v-if="item.now < item.max && userStore.studentInfo.state == false">
                                    <el-button type="success">Success</el-button>
                                    </template>
                                    <template #reference v-else>
                                        <el-button type="success" disabled>Success</el-button>
                                    </template>
                                </el-popconfirm>
                            </el-descriptions-item>
                        </template>
                        <template v-else>
                            <el-descriptions-item >{{ item.name }}</el-descriptions-item>
                            <el-descriptions-item >{{ item.now }}</el-descriptions-item>
                            <el-descriptions-item >{{ item.max }}</el-descriptions-item>
                            <el-descriptions-item>
                                <template v-if="item.now < item.max && userStore.studentInfo.state == false">
                                    <el-button type="success" @click="choose">Success</el-button>
                                </template>
                                <template v-else>
                                    <el-button type="success" disabled>Success</el-button>
                                </template>
                            </el-descriptions-item>
                        </template>
                    </template>
                    <el-descriptions-item label="修改密码">
                        <el-popover
                            placement="bottom"
                            title="Title"
                            :width="400"
                            trigger="click"
                        >
                            <template #reference>
                                <el-button type="warning">点我修改密码</el-button>
                            </template>
                            <el-input v-model="newPassword" placeholder="请输入新密码" />
                            <el-popconfirm
                                    confirm-button-text="确认"
                                    cancel-button-text="再想想"
                                    title="你确定以此为新密码吗"
                                    :icon="InfoFilled"
                                    icon-color="#626AEF"
                                    @confirm="changePassword"
                                    @cancel="cancelEvent"
                                >
                                <template #reference>
                                    <template v-if="newPassword == userStore.studentInfo.password">
                                        <el-button type="danger" disabled>新密码不能和旧密码相同</el-button>
                                    </template>
                                    <template v-else>
                                        <el-button type="danger">提交</el-button>
                                    </template>
                                </template>
                            </el-popconfirm>
                        </el-popover>
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

</style>