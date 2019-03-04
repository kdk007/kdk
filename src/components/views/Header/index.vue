<template>
  
<div >

<el-row class="tac" style="background-color:#f5f5f5; margin-left:20px;">
  
  <el-col :span="12">
 
  <div class="header" style="height:70px;background-color:white;margin-top:-10px;">
   <h style="position:absolute;margin-left:60px;margin-top:20px;font-weight:bold;font-family:'行书'">你好，张某某，祝你开心每一天！</h>
  <el-header style="position:absolute;right:0;top:30%; font-size: 10px;margin-right:-180px;">

      <el-dropdown>

        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="iconfont icon-jingcha" ></i>
      <span >张某某</span>
  </el-header>
   
  </div>

    
  </el-col>
</el-row>

</div>
</template>

<style>
 
  .header{
    background-color: white;
    width: 1040px;
    height: 60px;
    margin-left: 35%;
    margin-top: -13%;
   margin-right: -15%;
  }
 

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    margin-top:0px; 
    width: 220px;
    min-height: 800px;
    margin-left: -10px;
  }
  

</style>

<script>

</script>