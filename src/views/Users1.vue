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
		<div class="aa">
			<div class="box">
				<img src="../assets/img/016.jpg" >
				
			</div>
		 <div class="left">
			<div class="left-img-1">
				<router-link to="/UserDetail5" class = "text"><img src="../assets/img/005.jpg"></router-link>
				</div>
			<div class="left-p-1">
				<p>一 Simple book drill housekeeper</p>
		 </div>
				<div class="get">
					<router-link to="/u" class = "text"><p> ← </p></router-link>
				
				
			</div>
		</div>
		
		<div class="right">
			<div class="rignt-img-1">
				
				<router-link to="/UserDetail6" class = "text"><img src="../assets/img/006.jpg"></router-link>
			</div>
			<div class="right-p-1">
				<p>一 may pick up Ying</p>
			</div>
			<div class="right-img-2">
				
				<router-link to="/UserDetail7" class = "text"><img src="../assets/img/007.jpg"></router-link>
			</div>
			<div class="rignt-p-2">
				<p>一 The stack</p>
			</div>
			<div class="output">
					<router-link to="/users2" class = "text"><p>  → </p></router-link>
				</div>
			</div>
		</div>
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
		this.axios.get('http://localhost:8080/api/user').then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios.get('http://localhost:8080/api/user')
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
</script>
<style scoped>
	.container{
	    width: 100%;
	    margin: 0 auto;
		height: 800px;
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
		    background-image: url(../assets/img/header.png);
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
		
		.aa{
			width: 100%;
			height:500px;
			margin-top:40px;
			background: rgb(255,255,255);
			margin-left: 100px;
			
			
		}
		
		.box{
			margin-left: 690px;
			width: 500px;
		}
		
		.left{
			width: 100%;
			height: 85%;
			margin-top: 0px;
		}
		
		.left-img-1{
			margin-right: 100px;
			margin-top: -850px;
			cursor:pointer;
		}
		.left-p-1{
		   margin-left: 0px;
		   margin-top: 10px;
		   font-size: 24px;
			
		}
		
		
		.right{
			width: 100%;
			height: 85%;
			margin-top: 250px;
			
		}
		.rignt-img-1{
			margin-left: 740px;
			margin-top: -680px;
			cursor:pointer;
		}
		.right-p-1{
			margin-left: 740px;
			margin-top: 10px;
			font-size: 24px;
		}
		.right-img-2{
			margin-left:  980px;
			margin-top: 65px;
			cursor:pointer;
			}
	  .rignt-p-2{
		  margin-left: 980px;
		  margin-top: 10px;
		  font-size: 24px;
		  font-family : 
				
			}
	  .output{
	  	font-size: 24px;
	  		margin-left: 1300px;
	  		margin-top: 53px;
	  	    cursor:pointer;
	  }
	 .get{
	 	 font-size: 24px;
	 	margin-top: 430px;
	 	cursor:pointer;
	 	}
	
		
			

</style>