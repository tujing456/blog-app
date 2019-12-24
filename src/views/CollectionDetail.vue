<template>
	<div class="container">
		<div class="header">
			<div class="cc">
				<img src="../assets/img/header.png">
			    <router-link to="/c" class = "text">推荐博客&nbsp;&nbsp;|</router-link>
			    <router-link to="/u" class = "text">会员博客&nbsp;&nbsp;|</router-link>
			    <router-link to="/sign" class = "text">身边动向</router-link>
		    </div>
			<div id="box">
			    <input type="text" name="search" placeholder="请输入关键字">
			    <div id="search">搜索</div> 
			</div>
		</div>
	    <div class="layout">
			<div class="layout-row"  v-for="(user,index) in users.slice(0,8)" :key="index">
				<div class="cover">
					<a href="http://127.0.0.1:8848/red/js/%E7%95%99%E8%A8%80%E6%9D%BF.html">
						<img :src ="user.avatar">
					</a>
				</div>
				<div class="im-bot">
					<div class="im-reprint">
						<p class="meta"><img src="../assets/img/04.png">{{ user.fans }}</p>
						<p class="meta"><img src="../assets/img/40.png">{{ user.articles }}</p>
					    <p class="meta"><img src="../assets/img/101.png">{{ user.id }}</p>
					</div>
					<div class="im-ava">
						<div class="iy-left">
							<img :src="user.avatar">
						</div>
						<div class="iy-right">
							{{ user.nickname }}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	    <div class="foo">
	    	<div class="foo-tit">
	    		<p><b>网页索引</b></p>
	    	</div>
	    	<div class="foo-to">
	    		<router-link to="/c" class = "text-ex">推荐博客</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	    		<router-link to="/u" class = "text-ex">会员博客</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	    		<router-link to="/sign" class = "text-ex">注册博客</router-link>
	    	</div>
	        <div class="foo-in">	
	    	</div>
	    </div>
	    <div class="boo">
	    	<img src="../assets/img/9.png">
	    </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			named:[]
		}
	},
	created() {
		this.axios.get('http://localhost:8080/api/user').then(res => {
					console.log(res.data.data);
					this.users = res.data.data;
				});
	},
    methods:{
		
	},
	computed: {
		
	}
}
</script>

<style>
	.container{
	    width: 100%;
	    margin: 0 auto;
		height: 1000px;
	}
	.header {
		background-color: rgb(255, 255, 255);
		height: 60px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		/* align-items: center; */
		border-radius: 10px;
	}
	
	.cc{
		width: 700px;
		display: flex;
		justify-content: space-around;
		margin-top: 30px;
	}
	.cc img{
		margin-left: 150px;
		width: 100px;
		height: 40px;
	}
	.text{
		color:rgb(188, 130, 61);
	}
	#box{
	    width: 380px;
	    margin: 30px auto;
	    font-family: 'Microsoft YaHei';
	    font-size: 14px;
		margin-left: 80px;
	}
	
	input{
	    width: 300px;
	    border: 1px solid #e2e2e2;
	    height: 30px;
	    float: left;
	    background-image: url(../assets/img/search.png);
	    background-repeat: no-repeat;
	    background-size: 25px;
	    background-position:5px center;
	    padding:0 0 0 40px;
	}
	
	#search{
	    width: 78px;
	    height: 32px;
	    float: right;
	    background: rgb(188, 130, 61);
	    color: white;
	    text-align: center;
	    line-height: 30px;
	    cursor: pointer;
	}
	.em-text{
		color: #000000;	
	}
	.layout{
		width: 1000px;
		height: 1000px;
		margin-left: 150px;
		margin-top: 50px;
		display: flex;
		background-color: rgb(250, 250, 250);
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
	.layout-row{
		width:22%;
		height: 360px;
		border: 3px solid gainsboro;
		border-radius: 5px;
		box-shadow: 10px 10px 5px #888888;     
		-webkit-transition: margin 0.5s ease-out;      
		-moz-transition: margin 0.5s ease-out;      
		-o-transition: margin 0.5s ease-out; 
	}
	.layout-row:hover{
		margin-bottom: 100px; 
	}
	.cover{
		width:100%;
		height: 75%;
	}
	.cover img{
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
    .im-bot{
		width: 100%;
		height: 25%;
		background-color: rgb(255, 255, 255);
	}
	.im-reprint{
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: flex-start;
	}
	.im-reprint img{
		width: 20px;
		height: 20px;
		padding-top: 5px;
	}
	.meta{
		font-family: Franklin Gothic;
	}
	.im-ava{
		width: 100%;
		height: 80%;
		display: flex;
		justify-content: flex-start;
	}
	.iy-left{
		width: 30%;
		height: 100%;
		margin-top: 10px;
		margin-left: 5px;
	}
	.iy-left img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.iy-right{
		width: 70%;
		height: 100%;
		margin-top: 20px;
		margin-left: 5px;
	}
	.foo{
		display: flex;
		/* justify-content: space-around; */
		/* justify-content: center; */
		/* justify-content: space-around; */
		width: 1260px;
		height: 100px;
		background-color: rgb(241, 226, 205);
		margin-top: 100px;
		margin-left: 3px;
		font-family: "zapf dingbats";
		padding-top: 20px;
	}
	
	.foo-tit{
		font-family: "copperplate gothic bold";
		font-size: large;
		justify-content: center;
		padding-left: 230px;
	}
	.text-ex{
		color:#000000;
	}
	.foo-to{
		/* display: flex; */
		width: 300px;
		margin-left: 200px;
		/* justify-content: space-around; */
	}
	.boo{
		width: 1260px;
		height: 50px;
		margin-left: 3px;
	}
	.boo img{
		width: 100%;
		height: 100%;
	}
</style>