<script setup>
import { ref,onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'




const userStore = useUserStore()

const load = async () => {
    await userStore.getStudentList()
    await userStore.getTeacherList()
}

load()

// 表单对象
const form = ref({
    account: '',
    password: '',
})

// 2.规则对象
const rules = {
    account:[
        { required:true ,message:'账号不能为空', trigger: 'blur' }
    ],
    password:[
        { required:true ,message:'密码不能为空', trigger: 'blur' }
    ]
}



const flag = ref(false)

const login = () => {
    const { account,password } = form.value
    flag.value = userStore.userLogin({ account,password })
}


</script>


<template>
    <template v-if="flag">
        <el-alert title="账号或密码错误" type="error" />
    </template>

     <!-- <div class="login-box">
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
        </div> -->

    <!-- <div class="full_page">
        <div class="title">
        <h1>
            毕设导师选择系统
        </h1>
        </div>
        <div class="input_box">
            <div class="input_text">
                <el-form :model="form" :rules="rules">
                    <el-form-item prop="account" label="账号">
                        <el-input 
                            size="large"
                            v-model="form.account" 
                            placeholder="请输入账号，默认为学号/工号" 
                        />
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input 
                            type="password"
                            size="large"
                            v-model="form.password" 
                            placeholder="请输入账号，默认为学号/工号" 
                        />
                    </el-form-item>
                    </el-form>
            </div>
            <div class="input_button">
                <el-button @click="login" type="success">登录</el-button>
            </div>
        </div>
    </div> -->


    
    <div class="common-layout">
        <el-container>
        <el-header>
            <h1>
                欢迎使用毕设导师选择系统，请先登录
            </h1>
        </el-header>
        <el-container>
            <!-- <el-aside width="200px">Aside</el-aside> -->
            <el-main>
                <div class="input-form">
                    <el-form 
                    :inline="true" 
                    :model="formInline" 
                    class="demo-form-inline"
                    :rules="rules"
                    >

                    <el-form-item label="账号：" prop="account">
                    <el-input v-model="form.account" placeholder="请输入账号" />
                    </el-form-item>
                    <br>
                    <el-form-item label="密码：" prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" />
                    </el-form-item>
                    <br>
                    <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    </el-form-item>

                    </el-form>
                </div>
            </el-main>
        </el-container>
        </el-container>
    </div>
    
    
    
</template>

<style>

    /* .full_page{
        position : absolute;
        width : 100%;
	    height : 100%;
        background-image: url('@/pictures/Login.jpg');
        background-size: cover;

    }

    .title{
        margin-top: 20px;
        margin-left: 50px;
    }

    .input_box{
        border-radius: 25px;
        width: 600px;
        height: 300px;
        background-color: rgb(184, 135, 63, 0.5);
        padding-top: 70px;
        margin-top: 50px;
        margin-left: 60%;
        
    }

    .input_text{
        border-radius: 25px;
        position: relative;
        width: 400px;
        margin: auto;
        background-color: rgb(184, 135, 63);
        padding: 20px;
    }

    .input_button{
        margin-top: 50px;
        padding-left: 500px;
    } */
   
    .input-form{
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid rgb(90, 51, 151);
        border-radius: 20px;
        width: 500px;
        height: 300px;
    }

</style>