<template>
  <el-container class="container">
    <el-header class="header">
      <TopMenuVue logo-title="gxk" @select="handleSelect" :router="true"></TopMenuVue>
    </el-header>
    <el-main class="main">
      <el-scrollbar height="100%" ref="scrollbarRef">
        <div class="router">
          <router-view ></router-view>
        </div>
        <el-footer class="footer">
          <div style="margin-top: 1px">
            <el-link
              type="info"
              href="https://beian.miit.gov.cn/"
              :underline="false"
            >湘ICP备2021001876号</el-link>
          </div>
        </el-footer>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ElScrollbar } from "element-plus";
import { ref, reactive, onBeforeUpdate, watch, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import TopMenuVue from "../../components/TopMenu.vue";

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const bgImgUrl = ref("https://api.fantasyzone.cc/tu?class=pc&type=url")

const handleSelect = (index: any, indexPath: any, routeResult: any) => {
  //   console.log(key, keyPath);
  scrollbarRef.value!.setScrollTop(0)
};
const router = useRouter();
router.push("/pc");
const handleCommand = (command: string) => {
  switch (command) {
    case "login":
      router.push("/login");
      break;
    default:
      break;
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  height: 8vh;
}

.main {
  padding: 3px 1px 0px 1px;
  background-image: v-bind('"url("+bgImgUrl+")"');
}

.router{
  min-height: 95vh;
}

.footer {
  background-color: rgb(178, 180, 180);
  height: 3vh;
  width: 100%;
  bottom: 0;
  text-align: center;
}
</style>
