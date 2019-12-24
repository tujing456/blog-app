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
			<div class="im-layout-row"  v-for="(topic,index) in topics.slice(0,8)" :key="index">
				<div class="im-cover">
					<router-link :to="{ path: '/topic/' + topic.id }">
						<img :src="topic.logo" />
					</router-link>
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
	methods:{
		
	},
    computed: {
		
	}
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
		height: 800px;
		background-color: rgb(255, 255, 255);
		margin-left: 170px;
	}
	.im-layout-row{
		width:22%;
		height: 360px;
		border: 3px solid gainsboro;
		border-radius: 5px;
		margin: 40px auto 0;
		position: relative;
		cursor: pointer;
		overflow: hidden;
		box-shadow: 10px 10px 5px #888888;   
	}
	.im-layout-row:before {
	    content: '';
	    position: absolute;
	    top: 0;
	    right: 0;
	    border: 0px solid;
	    border-color: rgba(0, 0, 0, 0.2) #fff;
	    -webkit-transition: border .5s ease; 
	}
	.im-layout-row:hover:before {
	    border-right-width: 50px;
	    border-bottom-width: 50px
	}
	.im-cover{
		width:100%;
		height: 100%;
	}
	.im-cover img{
		width: 100%;
		height: 100%;
		border-radius: 5px;
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