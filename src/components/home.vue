<template>
  <div class="Home">
    <el-container class="height-100">
      <el-header class="header">
        <div class="w-200">后台管理系统</div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-scrollbar>
            <el-menu :default-openeds="['1']" default-active="books"  :router="true"  @select="handleSelect">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <Menu />
                  </el-icon>项目管理中心
                </template>
                <el-menu-item-group>
                  <template #title></template>
                  <el-menu-item index="books" >
                    <el-icon><House /></el-icon>书架
                  </el-menu-item>
                  <el-menu-item index="echat" >
                    <el-icon><House /></el-icon>图表
                  </el-menu-item>
                  <el-menu-item index="index" >
                    <el-icon><Document /></el-icon>文档管理
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-container>
          <el-main>
            <el-scrollbar>
              <router-view></router-view>
            </el-scrollbar>
          </el-main>
          <el-footer>本产品由Element-plus+Nodejs+Axios技术语言构建</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Menu,House,Document } from "@element-plus/icons-vue"
export default {
  name: "Home",
  data() {
    return {
      menus: [],
    };
  },
  components: {
    Menu,House,Document,
  },
 
  created() {},
  methods: {
    handleSelect(index,indexPath,item,routeResult){
      console.log(index,indexPath);
      console.log(item,routeResult);
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Home {
  height: 100%;
  background: #eee;
  overflow: hidden;
}
.header {
  background-color: rgba(8, 62, 127, 1);
  color: #fff;
  line-height: 60px;
  padding: 0;
  .w-200 {
    width: 200px;
    text-align: center;
    background: #042955;
  }
}
.el-container {
  overflow: hidden;
  .aside {
    background: #fff;
    color: #fff;
    a{
      text-decoration: none;
      color: #000
    }
    a:hover{
      color:#0c65ee
    }
  }
  .el-footer{
    text-align: center;
    background: #d8e7f6;
    height: 40px;
    line-height: 40px;
    color: #999;
    font-size: 0.7rem;
  }
}
.height-100 {
  height: 100%;
}
</style>
