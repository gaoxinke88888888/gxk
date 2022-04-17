<template>
    <el-button type="primary" @click="loli">go</el-button>
<!--    <el-image v-for="item in dataList" style="width: 100px; height: 100px" :src="item.url" fit="fill" />-->
</template>

<script setup lang='ts'>
import { getloli } from '@/apis/testApi';
import { reactive, Ref, ref,onMounted } from 'vue';

interface Tu {
    author: string,
    id: string,
    p: number,
    pid: number,
    quickUrl: string,
    tags: string,
    title: string,
    uid: number,
    url: string,
}

const dataList = ref<Tu[]>([])

const loli = async () =>{
    const res = await getloli();
    console.log(res.data);
    dataList.value = res.data
}
</script>

<style scoped>
</style>