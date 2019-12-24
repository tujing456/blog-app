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
		<div class="row">
			<div v-for="(item, index) in users" :key="index" class="col-4">
				<div class="card shadow flex flex-top-y">
					<div class="card-head flex flex-center">
						<div class="uu-img"><img :src="item.avatar" /></div>
						<p class="uu-title">{{ item.nickname }}</p>
							<router-link :to="{ path: '/user/' + item.id }">
						</router-link>
					</div>
					<div class="card-body flex flex-left">
						<p class="sub-title">{{ item.introduction }}</p>
						<p class="meta">
							<strong>来自：{{ item.address }}</strong>
						</p>
						<p class="meta">{{ item.articles }}篇文章，{{ item.fans }}个粉丝</p>
						
					</div>
					 <div id="shoucang">+喜欢</div>
					<div><router-link to="/u" class = "text">个人主页</router-link></div>
				</div>
			</div>
		</div>
		<div class="row"><button class="btn btn-lg btn-rd dark-fill" @click="loadMore" style="margin-left: 600px;width: 120px;height: 50px;">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			currentPage: 1,
			count: 6
		};
	},
	created() {
		this.axios
			.get('http://localhost:8080/api/user', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get('http://localhost:8080/api/user', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.users.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.users.length);
				});
		},
		go(page) {
			window.location.href = page;
		}
	}
};

window.onload = function (){
	    var oSc = document.getElementById('shoucang');
	    var onOff = true;
	     
	    oSc.onclick = function (){
	        if(onOff){
	            oSc.innerHTML = '<i class="yishoucang"></i>'+'已喜欢';
	            oSc.style.backgroundColor = '#87aab5';
	            onOff = false;    
	        }else{
	            oSc.innerHTML = '+喜欢';
	            oSc.style.backgroundColor = '#87aab5';
	            onOff = true;
	        }
	    };
	     
	    oSc.onmouseover = function (){
	        if(onOff){
	            oSc.style.backgroundColor = '#03a6d7';    
	        }else{
	            oSc.innerHTML = '已喜欢';
	            oSc.style.backgroundColor = '#527884';
	        }
	    };
	    
	}
</script>
<style scoped>
	.container{
	    width: 100%;
	    margin: 0 auto;
		height: 2000px;
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
.card {
	margin-top: 20px;
	margin-left: 200px;
	width: 75%;
	height: 200px;
	/* background-image: url(../assets/img/user.png); */
	background-size: 100%, 100%;
	margin-bottom: 50px;
	padding: 20px;
	border-right: 5px solid rgb(203, 175, 136);
	border-bottom: 5px solid rgb(203, 175, 136);
	border-top: 5px solid rgb(203, 175, 136);
	border-left: 5px solid rgb(203, 175, 136);
}
.card-head {
	margin-top: 10px;
	height: 30%;
	padding: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.card-head img {
	width: 100px;
	height: 100px;
	/* border-radius: 50%; */
	/* margin-left: 20px; */
}
.card-body {
	width: 60%;
	margin: 0 auto;
}
.card-body > p {
	line-height: 30px;
}
.card a {
	color: rgb(0, 98, 89);
	font-weight: 700;
}
.uu-title{
	padding-left: 60px;
}
.uu-img{
	padding-top: 60px;
}
	#shoucang{
	   background-color:#00b7ee;
	   line-height:36px;
	   width:88px;
	   display:flex;
	   margin: auto;
	   margin-top: -35px;
	   font-size:14px;
	   color:#ffffff;
	   border-radius:7px;
	   cursor:pointer;
	   margin-left:163px;
	   
		
	    }
	.yishoucang{
	    width:11px;
	    height:8px;
        display:flex;
	    margin-left:9px;
	    }
</style>