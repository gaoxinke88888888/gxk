<template>
    <el-menu default-active="pc" mode="horizontal" @select="handleSelect" :router="router">
        <div class="logo">
            <el-image style="width: 50px; height: 50px" :src="img" fit="fill" />
        </div>
        <el-menu-item index="pc">电脑随机壁纸</el-menu-item>
        <el-menu-item index="app">手机随机壁纸</el-menu-item>
        <el-menu-item index="p">P站随机壁纸</el-menu-item>
        <el-menu-item index="s">搜索壁纸</el-menu-item>
        <el-menu-item index="st">搜索图片</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item style="margin-left: auto">
            <div>
                <el-dropdown class="menuDropdown" style mand="handleCommand">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    ></el-avatar>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="login">登录/注册</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import img0 from '@/assets/GXK.png'
import { ElDropdown, ElMenu, ElAvatar } from "element-plus";
import { ref } from "vue";

const img = ref(img0)

type Props = {
    logoTitle: string,
    router:boolean
}

defineProps<Props>()

const emit = defineEmits(['select','command'])

const handleSelect = (index: any,indexPath: any,routeResult: any) => {
    emit('select',index,indexPath,routeResult)
};

const handleCommand = () => { };
</script>

<style scoped>
.logo {
    /* background-color: rgb(120, 238, 232); */
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bolder;
    cursor:pointer
}
.menuDropdown {
    transform: translateY(-15%);
}
</style>
