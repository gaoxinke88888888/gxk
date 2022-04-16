<template>
  {{ getCounter }}
  <el-button @click="cc">+</el-button>
  <!-- <el-button @click="getu('pc','json',0)">I am ElButton</el-button> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "../service/request/index";
import axios from "axios";
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();

const { counter, name, isAdmin,getCounter } = storeToRefs(mainStore);

const cc = () => {
  // mainStore.$patch((state) => {
  //   state.counter++;
  // });
  mainStore.changeState(10)
};

type responseType = {
  code: number;
  data: object;
  message: string;
};

const getu = async (cls: string, type: string, r18: number) => {
};
</script>

<style scoped></style>
