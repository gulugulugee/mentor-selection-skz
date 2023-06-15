<script setup>
    import { useUserStore } from '@/stores/user'
    import { ref,onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const userStore = useUserStore()

    const router = useRouter()

    const newPassword = ref('')

    const cancelEvent = () => {
        console.log('cancel!')
    }

    const back = () => {
        router.replace({path: '/'})
    }

    const changeTPassword = () => {
      console.log('changePassword被调用')
      console.log(userStore.teacherInfo.password)
      console.log(newPassword.value)
        userStore.changeTeacherPassword(userStore.teacherInfo.password,newPassword.value)
    }
</script>
<template>
  <template v-if="userStore.studentInfo.account == userStore.studentInfo.password">
      <el-alert title="当前账号密码相同，请修改密码" type="warning" effect="dark" center />
  </template>
    <div class="common-layout">
      <el-container>
        <el-header>
            <h1>
                欢迎{{ userStore.teacherInfo.name }}登录，工作辛苦了
            </h1>
        </el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>
            <el-descriptions
                    title="全部教师"
                    direction="vertical"
                    :column="4"
                    :size="size"
                    border
                >
                    <template v-for="(item,index) in userStore.teacherInfo.myStudent" :key="index">
                        <template v-if="index === 0">
                            <el-descriptions-item label="学生名">{{ userStore.getMyStudentInfo(item).name }}</el-descriptions-item>
                            <el-descriptions-item label="学生电话">{{ userStore.getMyStudentInfo(item).telephone }}</el-descriptions-item>
                            <el-descriptions-item label="学生地址">{{ userStore.getMyStudentInfo(item).address }}</el-descriptions-item>
                            <el-descriptions-item label="所属学校">{{ userStore.getMyStudentInfo(item).school }}</el-descriptions-item>
                            
                        </template>
                        <template v-else>
                          <el-descriptions-item >{{ userStore.getMyStudentInfo(item).name }}</el-descriptions-item>
                          <el-descriptions-item >{{ userStore.getMyStudentInfo(item).telephone }}</el-descriptions-item>
                          <el-descriptions-item >{{ userStore.getMyStudentInfo(item).address }}</el-descriptions-item>
                          <el-descriptions-item >{{ userStore.getMyStudentInfo(item).school }}</el-descriptions-item>
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
                                    @confirm="changeTPassword"
                                    @cancel="cancelEvent"
                                >
                                <template #reference>
                                    <template v-if="newPassword == userStore.teacherInfo.password">
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