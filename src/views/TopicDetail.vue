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
		<div class="w-layout">
			<div class="w-left">
				<div class="t-top">
					<div class="card-top">
						<div class="in-layout-row"  v-for="(topic,index) in topics.slice(0,1)" :key="index">
						    <img :src="topic.logo" />
						</div>
					</div>
					<div class="card-middle">
						<div class="in-middle"  v-for="(topic,index) in topics.slice(0,1)" :key="index">
						    <p>{{topic.description}}</p>
						</div>
					</div>
					<div class="card-bottom">
						<img src="../assets/img/YM.png">
					</div>
				</div>
				<div class="t-bo">
					<div class="in-re" v-for="(user,index) in users.slice(0,1)" :key="index">
					    <img :src="user.avatar">
						<div class="i-te">
							<p>{{user.nickname}}</p>
						</div>
					</div>
					<div class="in-publish">
						<img src="../assets/img/36.png">
						<input class="ww" placeholder="添加评论">
						<button class="in-button">评论</button>
					</div>
				</div>
			</div>
			<div class="w-right">
				<div class="in-ava">
					<div class="in-aa" v-for="(user,index) in users.slice(0,1)" :key="index">
						<img :src="user.avatar">
						<div class="ie-text">
							<p>{{user.nickname}}</p>
							<p>{{user.address}}</p>
							<p>{{user.introduction}}</p>
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
			articles: [],
			users: [],
			topics: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			// console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/user').then(res => {
			// console.log(res.data.data);
			this.users = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/topic').then(res => {
			// console.log(res.data.data);
			this.topics = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
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
	    /* background-image: url(../assets/img/search.png); */
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
	.w-layout{
		width: 1000px;
		height: 800px;
		background-color: rgb(255, 255, 255);
		margin-left: 170px;
		margin-top: 30px;
		display: flex;
		justify-content: flex-start;
	}
	.w-left{
		width: 60%;
		height: 100%;
		background-color: rgb(230, 230, 230);
	}
	.w-right{
		width: 40%;
		height: 50%;
		background-color: rgb(255, 255, 255);
	}
	.t-top{
		width: 90%;
		height: 75%;
		background: rgb(255, 255, 255);
		margin-left: 25px;
		margin-top: 10px;
	}
	.t-bo{
		width: 90%;
		height: 20%;
		margin-top: 20px;
		background-color: rgb(255, 255, 255);
		margin-left: 25px;
		margin-bottom: 10px;
	}
	.card-top{
		width: 100%;
		height: 40%;
		background-color: rgb(255, 255, 255);
	}
	.in-layout-row img{
		width: 540px;
		height: 400px;
	}
	.card-middle{
		width: 100%;
		height: 50%;
		background-color: rgb(255, 255, 255);
	}
	.in-middle{
		padding-top: 200px;
	}
	.card-bottom{
		width: 100%;
		height: 10%;
		background-color: rgb(255, 255, 255);
		display: flex;
	}
	.card-bottom img{
		width: 50%;
		height: 100%;
	}
	.in-re{
		width: 100%;
		height: 50%;
		display: flex;
		padding-left: 10px;
		padding-top: 10px;
	}
	.in-re img{
		width: 50px;
		height: 50px;
       /* border-radius: 50%; */
	}
	.i-te{
		padding-left: 20px;
		text-align: center;
	}
	.in-publish{
		width: 100%;
		height: 50%;
		padding-left: 5px;
		display: flex;
	}
	.in-publish img{
		width: 60px;
		height: 60px;
	}
	.in-ava{
		margin-left: 50px;
		width: 90%;
		height: 80%;
		border-right: 5px solid rgb(203, 175, 136);
		border-bottom: 5px solid rgb(203, 175, 136);
		border-left: 5px solid rgb(203, 175, 136);
		border-top: 5px solid rgb(203, 175, 136);
	}
	.in-aa{
		width: 100%;
		height: 100%;
		/* padding-left: 30px; */
	}
	.in-aa img{
		width: 350px;
		height:310px;
	}
	.ie-text{
		text-align: center;
		padding-top: 20px;
	}
	.ww{
		box-shadow: 5px 5px 5px 5px rgb(255, 255, 255);
		width: 300px;
		height: 40px;
		margin-left: 30px;
		margin-top: 10px;
	}
	.in-button{
		margin-top: 15px;
		margin-left: 10px;
		color: #000000;
		width: 70px;
		height: 30px;
		
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
	.text-ex{
		color:#000000;
	}
	.foo-tit{
		font-family: "copperplate gothic bold";
		font-size: large;
		justify-content: center;
		padding-left: 230px;
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