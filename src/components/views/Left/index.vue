<template>
  
<div>

<el-row class="tac" style="background-color:#f5f5f5;">
  
  <el-col :span="12">
  
    <el-menu
      router :default-active="activeIndex"

      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <div class="logoword">
            <h style="position:absolute;top:20px;left:15px;color:white;">萧山区涉稳信息工作平台</h>
  
   </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-huanzhuangtu"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="Text">各单位概况</el-menu-item>
          <el-menu-item index="Huizong">汇总数据</el-menu-item>
        </el-menu-item-group>    
      </el-submenu>

      <el-submenu index="2">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span>事件详情</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">各单位详情</el-menu-item>
      </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
      <template slot="title">
          <i class="el-icon-document"></i>
          <span>人员管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">联络员</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-col>
</el-row>


</div>
</template>
<style>
 

 

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    margin-top:-10px; 
    width: 220px;
   height: auto;
    margin-left: -1070px;
   .el-menu-item{
   
   }
  }
  .logoword{
    position: relative;
    background-color:#003153;
    width:220px;
    min-height:70px;
    margin-top: 0px;
 
  }
  

</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        
      }
    },
   computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
   
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      
    }
  }
</script>