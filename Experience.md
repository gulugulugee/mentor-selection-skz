mock模拟后端数据  异步加载
urlBase设置为mock

花了2小时解决mock数据到axios再到pinia再到组件 QWQ




///////////////////
git push -u github master
git push -u gitee "master"

<template v-if="item.now < item.max && userStore.studentInfo.state == false">
<el-button type="success" @click="choose">Success</el-button>
</template>
<template v-else>
    <el-button type="success" disabled>Success</el-button>
</template>