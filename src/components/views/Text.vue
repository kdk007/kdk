<template >

<div class="container" style="position:relative;background-color:#dcdcdc;">
 

<el-container >

<my-header>Header</my-header>

<el-container >
  <div class="sidebar" style="position:fixed;">
  <my-left >Aside</my-left>
  </div>
    
    <el-container >

      <!-- 表单查询 -->
      
<el-form :inline="true" ref="formInline" :model="formInline" class="demo-form-inline" style="background-color:white">
  <el-form-item label="查询时间：" prop="time">
     <el-date-picker
      v-model="formInline.time"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="单位：" prop="units">
    <el-select v-model="formInline.units" placeholder="请选择">
      <el-option label="政法委" value="zhengfa"></el-option>
      
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button type="info" @click="onReset">清空</el-button>
  </el-form-item>
</el-form>
      <!--数据展示  -->
    <el-main>
      <el-table :data="tableData" 
                @selection-change="handleSelectionChange"
                class="tablehead">
        <el-table-column type="selection" width="50">
        </el-table-column>
        <el-table-column prop="danwei" label="单位" width="170">

        </el-table-column>
        <el-table-column prop="xinzengshu" label="新增数" width="170">
        </el-table-column>
        <el-table-column prop="chuzhishu" label="处置数" width="170">
        </el-table-column>
        <el-table-column prop="chenggongshu" label="成功数" width="170">
        </el-table-column>
        <el-table-column prop="chongfushu" label="重复数" >
        </el-table-column>
      
       <el-table-column
      fixed="right"
      label="操作"
       show-overflow-tooltip>
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
      
      </el-table>
          

     
    </el-main>

    </el-container>
 <div class="block">
    <!-- <span class="demonstration">完整功能</span> -->
    <el-pagination
      background
     
      @current-change="handleCurrentChange"
       @size-change="handleSizeChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout=" sizes, prev, pager, total,next, jumper"
      :total="400">
    </el-pagination>
  </div>
</el-container>
 
</el-container>    
  

</div>
</template>
<style >

  .demo-form-inline{
    position: absolute;
    margin-left:-820px; 
    margin-top: 80px;
    width: 78%;
    height: 10%;
    padding-top: 20px;
    padding-left: 10px;
   
  }
 
  .tablehead{
    position: absolute;
    margin-top: 165px;
    margin-left: -840px;
    width: 78%;
    
  }
  .block{
    background-color: white;
    width: 50%;
    height: 60px;
    padding-top: 28px;
    padding-left: 200px;
    position: absolute;
   margin-left: -820px;
   margin-top: 800px;
  }
</style>
<script >
  
  export default {
    data() { 
      
      return {
        tableData: [{
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
          danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }, {
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        },{
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        },{
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        },{
           danwei: '政法委',
        xinzengshu: '232',
        chuzhishu: '321',
        chenggongshu:'311',
        chongfushu:'2132',
        }],
        formInline: {
          time: '',
          units: ''
        },
        multipleSelection: [],
        currentPage:1
      }

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      onReset(){
    this.$refs.formInline.resetFields();
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    
    }
  }
</script>