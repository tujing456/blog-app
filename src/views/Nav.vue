<template>
	<div>
		<div>
		    <ul class="nav">
			    <ul>
				    <li><router-link to="/index" class = "text">主页</router-link></li>
				    <li><router-link to="/c" class = "text">专题</router-link></li>
			        <li><router-link to="/p" class = "text">文章</router-link></li>
				    <li><router-link to="/u" class = "text">作者</router-link></li>
			        <li><router-link to="/sign" class = "text">登陆</router-link></li>
			    </ul>
		    </ul>
		</div>
		<div class="bb">
				<router-link to="/sign" class = "text">登记</router-link>
				<img src="../assets/img/icon1.png">
				<img src="../assets/img/icon2.png">
				<router-link to="/sign" class = "text">退出</router-link>
		</div>
		<router-view class="container" />
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	created() {},
	methods: {},
	computed: {}
};
</script>
<style>
	 body
	    {
	        background-color:rgb(255, 255, 255);
	    }
	  .nav{
	  		  width:560px;
	  		  height: 50px;
	  		  font:bold 0/50px Arial;
	  		  text-align:center;
	  		  margin:0px auto 0;
	  	      background: rgb(189, 189, 189);
			  border-radius: 10px;
	  		  /*制作圆*/
	  		
	            /*制作导航立体风格*/
	            
	  		}
	  		.nav a{
	  		  display: inline-block;
	  		  -webkit-transition: all 0.2s ease-in;
	  		  -moz-transition: all 0.2s ease-in;
	  		  -o-transition: all 0.2s ease-in;
	  		  -ms-transition: all 0.2s ease-in;
	  		  transition: all 0.2s ease-in;
	  		}
	  		.nav a:hover{
	  		  -webkit-transform:rotate(20deg);
	  		  -moz-transform:rotate(20deg);
	  		  -o-transform:rotate(20deg);
	  		  -ms-transform:rotate(20deg);
	  		  transform:rotate(20deg);
	  		}
	   
	  		.nav li{
	  		  position:relative;
	  		  display:inline-block;
	  		  padding:0 16px;
	  		  font-size: 13px;
			  color: rgb(188, 130, 61);
	  		  text-shadow:1px 2px 4px rgb(0, 0, 0,.5);
	  		  list-style: none outside none;
	  		}
	  		/*使用伪元素制作导航列表项分隔线*/
	  		
	          /*删除第一项和最后一项导航分隔线*/
	  		
	  		.nav a,
	  		.nav a:hover{
	  		  color:#fff;
	  		  text-decoration: none;
	  		}
	    .bb{
			display: flex;
			width:100px;
			height: 20px;
			font-size: 15px;
			text-align:center;
			justify-content: space-around;
			/* margin:0px auto 0; */
			margin-left: 1000px;
			/* background: rgb(246, 246, 246); */
			/* border-radius: 10px; */
		}
		.bb img{
			width: 20px;
			height:20px;
		}
		.text{
			color:rgb(188, 130, 61);
		}
		
</style>
