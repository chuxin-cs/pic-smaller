<script setup lang="ts">
import { ref } from "vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
import { routes } from "@/router/routes";

let menuList = ref(routes);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 页头 -->
      <el-header>Header</el-header>

      <!-- 菜单 + 主体 -->
      <el-container>
        <!-- 菜单 -->
        <el-aside width="250px">
          <el-menu
            :router="true"
            @open="handleOpen"
            @close="handleClose"
            default-active="vue"
            text-color="#fff"
            background-color="#666"
            active-text-color="#000"
          >
            <el-sub-menu index="1">
              <!-- 一级 -->
              <template #title>
                <span>Vue3 Setup</span>
              </template>
              <!-- 二级 -->
              <el-menu-item-group>
                <el-menu-item
                  v-for="menu in menuList"
                  :key="menu.path"
                  :index="menu.path"
                >
                  {{ menu.name }}
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>

        <!-- 主体内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app,
.common-layout,
.el-container {
  height: 100%;
  width: 100%;
}
.el-aside > .el-menu {
  height: calc(100vh - 60px);
}
</style>
