<template>
<div class="container" style="position:relative;background-color:#dcdcdc;">
 


<el-container >
<my-header></my-header>
<el-container >
  <my-left id="sidebar"></my-left>
<template>
  <!--为echarts准备一个具备大小的容器dom-->
  
  <div id="one" >
  	<font color="#8d8d8d">本年事件总数</font>
  	<i class="el-icon-info" style="padding-left:90px;color:#8d8d8d" ></i>

  	<p style="font-size:28px;line-height:0px" >126,560</p>
  	<span style="color:#727272;font-size:14px">同比</span>
  	<i class="el-icon-question" style="color:#33ffba;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">12%</span>
  	<span style="color:#727272;font-size:14px;padding-left:20px">环比</span>
  	<i class="el-icon-question" style="color:#ff0000;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">11%</span>
  	<HR style="margin-top:15px;margin-left:-20px;width:200px;color:#8d8d8d;"></HR>
  	<font  size="2" color="#8d8d8d">日均事件数</font>
  	<span style="color:#000000;font-size:14px;padding-left:10px">12,423</span>
  </div>

  <div id="two" >
  	<font color="#8d8d8d">处置成功数</font>
  	<i class="el-icon-info" style="padding-left:90px;color:#8d8d8d" ></i>
  	<p style="font-size:28px;line-height:0px" >18,846</p>
  	<div id="bc" style="position:absolute;width:230px;height:100px;margin-top:-20px;margin-left:-20px;">
  	<!-- 实心折线图> -->
    </div>
    <HR style="margin-top:63px;margin-left:-20px;width:200px;color:#8d8d8d;"></HR>
    <font  size="2" color="#8d8d8d">日处置量</font>
    <span style="color:#000000;font-size:14px;padding-left:10px">1,234</span>
  </div>
 
  <div id="three">
   	<font color="#8d8d8d">周事件期数</font>
   	<i class="el-icon-info" style="padding-left:90px;color:#8d8d8d" ></i>
   	<p style="font-size:28px;line-height:0px" >560</p>
    <div id="cc" style="position:absolute;width:230px;height:100px;margin-top:-70px;margin-left:-20px;">
    <!--柱状图-->   
    </div>
    <HR style="margin-top:63px;margin-left:-20px;width:200px;color:#8d8d8d;"></HR>
    <span style="color:#727272;font-size:14px">同比</span>
  	<i class="el-icon-question" style="color:#33ffba;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">12%</span>
  	<span style="color:#727272;font-size:14px;padding-left:20px">环比</span>
  	<i class="el-icon-question" style="color:#ff0000;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">11%</span>
  </div>

  <div id="four" >
   	<font color="#8d8d8d">月事件期数</font>
   	<i class="el-icon-info" style="padding-left:90px;color:#8d8d8d" ></i>
   	<p style="font-size:28px;line-height:0px" >2,846</p>
    <div id="dc" style="position:absolute;width:230px;height:100px;margin-top:-70px;margin-left:-20px;">
    <!--柱状图-->   
    </div>
    <HR style="margin-top:63px;margin-left:-20px;width:200px;color:#8d8d8d;"></HR>
    <span style="color:#727272;font-size:14px">同比</span>
  	<i class="el-icon-question" style="color:#33ffba;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">12%</span>
  	<span style="color:#727272;font-size:14px;padding-left:20px">环比</span>
  	<i class="el-icon-question" style="color:#ff0000;padding-left:5px;"></i>
  	<span style="color:#000000;font-size:14px">11%</span>
  </div>
  

  <div id="five" >
  	<span style="font-size:25px;line-height:0px;" >事件量</span>
  	<i class="el-icon-download" style="padding-top:15px;padding-left:580px;color:#8d8d8d" ></i>
  	<div style="height:2px;width:720px;border-top:1px solid #ccc;margin-left:-20px;margin-top:10px;margin-bottom:10px;"></div>
    <div id="ec" style="position:absolute;width:700px;height:400px;margin-top:0px;margin-left:0px;">
    	
    </div>
  </div>

  
<div id="six">
  	<p style="font-size:22px;line-height:2px;margin-top:20px;" >事件来源地排名</p>
  	<i class="el-icon-download" style="position:absolute;margin-top:-30px;padding-left:270px;color:#8d8d8d" ></i>
  	<div style="height:2px;width:310px;border-top:1px solid #ccc;margin-left:-20px;margin-top:10px;margin-bottom:10px;"></div>
    

    <!-- 时间选择框 -->
    <el-date-picker
      class="dateselect1"
 
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>

   <!-- 下拉选择框 -->
   
  <el-dropdown>
  <span class="el-dropdown-link" style="padding-left:10px;">
    周期<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>本日</el-dropdown-item>
    <el-dropdown-item>本周</el-dropdown-item>
    <el-dropdown-item>本月</el-dropdown-item>
    <el-dropdown-item>本年</el-dropdown-item>
   
  </el-dropdown-menu>
</el-dropdown>


<div style=" width:15px; height:15px; background-color:#1e90ff; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:white; text-align:center">1</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">北京</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">191,342</span>

<div style=" width:15px; height:15px; background-color:#1e90ff; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:white; text-align:center">2</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">上海</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">171,908</span>

<div style=" width:15px; height:15px; background-color:#1e90ff; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:white; text-align:center">3</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">杭州</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">136,720</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">4</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">济南</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">102,981</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">5</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">厦门</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">97,298</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">6</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">宁波</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">94,297</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">7</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">德州</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">38,902</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">8</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">台州</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">7,298</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">9</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">金华</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">4,297</span>

<div style=" width:15px; height:15px; background-color:#dcdcdc; border-radius:20px;margin-top:20px">
<span style="height:15px;width:15px; line-height:15px; display:block; color:#020202; text-align:center">10</span>
</div>
<span style="font-size:14px;position:absolute;margin-left:30px;margin-top:-17px">义乌</span>
<span style="font-size:14px;position:absolute;margin-left:235px;margin-top:-14px">902</span>

</div>
</template>

    
    
 
</el-container>  
</el-container>
</div>
</template>




<style>
 .el-menu-vertical-demo{
    height: 3500px!important;
}
#one{
position:absolute;width: 220px;height: 140px;margin-top:80px;margin-left:-840px;padding-left:20px;padding-top:10px;background-color:white;
}
#two{
position:absolute;width: 220px;height: 140px;margin-top:80px;margin-left:-580px;padding-left:20px;padding-top:10px;background-color:white;
}
#three{
position:absolute;width: 220px;height: 140px;margin-top:80px;margin-left:-320px;padding-left:20px;padding-top:10px;background-color:white;
}
#four{
position:absolute;width: 220px;height: 140px;margin-top:80px;margin-left:-60px;padding-left:20px;padding-top:10px;background-color:white;
}
#five{
position: absolute;
background-color: white;
margin-left: -840px;
margin-top: 250px;
width:680px;
height: 450px;
padding-left:20px;
padding-top:10px;
}
#six{
	position: absolute;
	background-color: white;
	width: 290px;
	height: 450px;
    margin-top: 250px;
    margin-left: -130px;
    padding-left:20px;
    padding-top:10px;
}
.dateselect1{
	width: 220px!important;
	height: 40px!important;
	/*margin-left: 0px;*/
}
.el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 15px;
  }

</style>






<script >
export default { 
  mounted(){    
  	this.TwoEchart();
  	this.ThreeEchart();
  	this.FourEchart();
  	this.FiveEchart();
  },
  data () {    
  	return { 
  	value6: '',    
  	fileOrgType:''
    }
  },  
  methods: {
    
    TwoEchart(){        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('bc'))        // 绘制图表
      var   option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show:false  //隐藏x坐标轴
    },
    yAxis: {
        type: 'value',
        show:false   //隐藏y坐标轴
    },
    series: [{
    	smooth:true,
        data: [20, 32, 10, 34, 23, 30, 20],
        type: 'line',
        areaStyle: {}
    }],
    grid:{
        // left: '5%',   // 与容器左侧的距离
         // right: '5%', // 与容器右侧的距离
        top: '15%',   // 与容器顶部的距离
        bottom: '55%', // 与容器底部的距离
      },

};
        myChart.setOption(option);
    },

// echarts分割线------------------------------------------


    	ThreeEchart(){        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('cc'))        // 绘制图表
        var option = {
    
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '2%',
        bottom: '5%',
        containLabel: false
    },
    xAxis : [
        {
        	show:false,
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis :  

    [

        {
        	show:false,
            type : 'value'
        }

    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[1600, 720, 800, 1700, 600, 1330, 1720]
        }
    ]
};
        myChart.setOption(option);
    },

// echarts分割线------------------------------------------

    FourEchart(){        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('dc'))        // 绘制图表
        var option = {
    
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis : [
        {
        	show:false,
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis :  

    [

        {
        	show:false,
            type : 'value'
        }

    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[1600, 720, 800, 1700, 600, 1330, 1720]
        }
    ]
};
        myChart.setOption(option);
    },

// echarts分割线------------------------------------------

    FiveEchart(){        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('ec'))        // 绘制图表
        var option = {
    
    color: ['#3398DB'],
    title: {
        text: '事件量趋势',
        
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '10%',
        containLabel: false
    },
    xAxis : [
        {
            type : 'category',
            data : ['10月', '11月', '12月', '1月', '2月', '3月', '4月','5月','6月','7月','8月','9月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220,200,700,430,30,70]
        }
    ]
};
        myChart.setOption(option);
    }

  }
}


</script>