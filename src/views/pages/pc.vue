<template>
    <el-space class="space" :size="20" wrap>
        <el-card
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
            v-for="i in 100"
            :key="i"
        >
            <el-image class="image"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             fit="fill" />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <el-button type="text" class="button">Operating</el-button>
                </div>
            </div>
        </el-card>
    </el-space>
</template>

<script setup lang="ts"></script>

<style scoped>
.space {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 50vh;
    height: 70vh;
    cursor: pointer;
}

.image {
  width: 100%;
  display: block;
}
</style>
