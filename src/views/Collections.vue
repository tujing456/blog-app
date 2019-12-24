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
			<div class="la-left">
				<a href="Index.vue" class="em-text">首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;推荐博客</a>
			    <div class="ex-box">
					<p>博客分类:</p>
					<div class="wrapper-demo">
						<div id="dd" class="wrapper-dropdown-3" tabindex="1">
						    <span>所有</span>
						    <ul class="dropdown">
							    <li>
								    <a href="#">
									    <i class="icon-envelope icon-large"></i>环球旅行
								    </a>
							    </li>
							    <li>
								    <a href="#">
									    <i class="icon-truck icon-large"></i>美容彩妆
							        </a>
							</li>
							<li>
								<a href="#">
									<i class="icon-plane icon-large"></i>美食烹饪
								</a>
							</li>
						</ul>
						</div>
					</div>
				    <img src="../assets/img/goin.png">
				</div>
				<div class="ih">
					<img src="../assets/img/00.png">
				</div>
				<img src="../assets/img/8.png">
			    <div class="tr">
					<p>排序：最新|热门</p>
				    <div class="ex-row">
						<div class="media" v-for="(article, index) in articles" :key="index">
							<div class="media-left">
								<div class="cll">	
										<router-link :to="{ path: '/article/' + article.id }">
									<img :src="article.article.thumbnail" class="bl-avatar-normal" /></router-link>
								</div>
							</div>
							<img src="../assets/img/at-le.png" style="height: 140px;">
							<div class="media-right">
								<p class="sub-title">{{article.article.summary}}</p>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="la-right">
				<div class="ri-top">
					<img src="../assets/img/21.png" style="width: 360px;">
					<div class="im-box">
						<router-link to="/m" class = "im-text">人气排名</router-link>
					</div>
					<div class="im-border">
						<div class="im-card">
							<div class="card" v-for="(user,index) in users" :key="index">
								<div class="im-top">
									<div class="im-left">
										<div class="im-cll">
											<router-link :to="{ path: '/user/' + user.id }">
											<img :src="user.avatar"></router-link>
										</div>
									</div>
									<div class="im-right">
										<p class="text">{{user.nickname}}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			    <div class="ri-mi">
					<a href="http://127.0.0.1:8848/blogem/%E7%95%99%E8%A8%80%E6%9D%BF3.html">
					<img src="../assets/img/70.png" /></a>
				</div>
				<div class="ri-bot">
					<img src="../assets/img/23.png">
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
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/topic').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/user').then(res => {
					console.log(res.data.data);
					this.users = res.data.data;
				});
	},
	methods:{
		loadMore() {
					this.currentPage = this.currentPage + 1;
					this.axios
						.get(this.GLOBAL.baseUrl + '/user', {
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
	},
	computed: {
		// 解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		}
	}
};
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
		.layout{
			display: flex;
			justify-content: space-between;
			width: 1000px;
			height: 1200px;
			background-color: rgb(255,255,255);
			margin-top: 50px;
			margin-left: 160px;
		}
		.la-left{
			width: 60%;
			height: 100%;
			background-color: rgb(255,255,255);
		}
		.la-right{
			width: 40%;
			height: 100%;
			background-color: rgb(255,255,255);
		}
		.ex-box{
			width: 100%;
			height: 50px;
			background-color: rgb(238, 215, 183);
			margin-top: 20px;
			border-radius: 10px;
			display: flex;
			justify-content: flex-start;
		}
		.ex-box img{
			width: 100px;
			height: 50px;
			padding: 5px;
		}
		.ih{
			width: 40px;
			height: 10px;
			padding-left: 100px;
		}
		p{
			padding-left: 20px;
			padding-top: 10px;
		}
		*,
		*:after,
		*:before {
		    -webkit-box-sizing: border-box;
		    -moz-box-sizing: border-box;
		    box-sizing: border-box;
		    padding: 0;
		    margin: 0;
		}
		      
		.wrapper-demo {
            margin: 3px 3px 3px 3px;
		    *zoom: 1;
		    font-weight: 400;
		}
		        
	    .wrapper-dropdown-3 {
		    position: relative;
			width: 200px;
			margin: 0 auto;
		    padding: 10px;
			background: #fff;
			border-radius: 7px;
			border: 1px solid rgba(0,0,0,0.15);
			box-shadow: 0 1px 1px rgba(50,50,50,0.1);
			cursor: pointer;
		    outline: none;
			font-weight: bold;
			color: #8AA8BD;
		}
				
		.wrapper-dropdown-3:after {
		    content: "";
			width: 0;
			height: 0;
			position: absolute;
			right: 15px;
			top: 50%;
			margin-top: -3px;
			border-width: 6px 6px 0 6px;
			border-style: solid;
			border-color: #8aa8bd transparent;
		}
				
	    .wrapper-dropdown-3 .dropdown {
			position: absolute;
			top: 140%;
			left: 0;
			right: 0;
			background: white;
			border-radius: inherit;
			border: 1px solid rgba(0,0,0,0.17);
			box-shadow: 0 0 5px rgba(0,0,0,0.1);
			font-weight: normal;
			-webkit-transition: all 0.5s ease-in;
			-moz-transition: all 0.5s ease-in;
			-ms-transition: all 0.5s ease-in;
			-o-transition: all 0.5s ease-in;
			transition: all 0.5s ease-in;
			list-style: none;
			opacity: 0;
		    pointer-events: none;
		}
				
	    .wrapper-dropdown-3 .dropdown:after {
		    content: "";
			width: 0;
			height: 0;
			position: absolute;
			bottom: 100%;
			right: 15px;
			border-width: 0 6px 6px 6px;
			border-style: solid;
			border-color: #fff transparent;    
		}
				
		.wrapper-dropdown-3 .dropdown:before {
			content: "";
			width: 0;
			height: 0;
			position: absolute;
			bottom: 100%;
			right: 13px;
			border-width: 0 8px 8px 8px;
			border-style: solid;
			border-color: rgba(0,0,0,0.1) transparent;    
		}
				
		.wrapper-dropdown-3 .dropdown li a {
			display: block;
			padding: 10px;
			text-decoration: none;
			color: #8aa8bd;
			border-bottom: 1px solid #e6e8ea;
			box-shadow: inset 0 1px 0 rgba(255,255,255,1);
			-webkit-transition: all 0.3s ease-out;
			-moz-transition: all 0.3s ease-out;
			-ms-transition: all 0.3s ease-out;
			-o-transition: all 0.3s ease-out;
			transition: all 0.3s ease-out;
		}
				
		.wrapper-dropdown-3 .dropdown li i {
			float: right;
			color: inherit;
		}
				
		.wrapper-dropdown-3 .dropdown li:first-of-type a {
			border-radius: 7px 7px 0 0;
		}
				
		.wrapper-dropdown-3 .dropdown li:last-of-type a {
			border: none;
			border-radius: 0 0 7px 7px;
		}
		.wrapper-dropdown-3 .dropdown li:hover a {
			background: #f3f8f8;
		}
		.wrapper-dropdown-3.active .dropdown {
		    opacity: 1;
			pointer-events: auto;
		}
		.no-opacity       .wrapper-dropdown-3 .dropdown,
		.no-pointerevents .wrapper-dropdown-3 .dropdown {
			display: none;
			opacity: 1; 
			pointer-events: auto; 
		}
				
		.no-opacity       .wrapper-dropdown-3.active .dropdown,
		.no-pointerevents .wrapper-dropdown-3.active .dropdown {
			display: block;
		}
		.wrapper-dropdown-3:focus .dropdown {
			opacity: 1;
			pointer-events: auto;
		}
		
		.tr{
			width: 100%;
			height: 900px;
			background-color: rgb(247, 247, 247);
		}
		p{
			color: rgb(137, 106, 61);
			/* text-align: end; */
			text-align: right;
		    padding-right: 10px;
		}
		
        .ex-row{
            display: flex;
            width: 100%;
			height: 50%;
			background-color:rgb(247, 247, 247);
			margin-top: 5px;
			justify-content: flex-start;
			flex-wrap: wrap;
        }
		.media{
			width: 100%;
			height: 150px;
			background: rgb(247, 247, 247);
			display: flex;
			justify-content: flex-start;
			border-bottom: 1px solid #ddd;
			border-radius: 5px;
			/* background-color: #fff; */
			margin-bottom: 5px;
			padding-top: 5px;
		}
		.media-left{
			width: 20%;
			/* margin-top: 20px;
			margin-left: 30px; */
			
		}
		.media-left img{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			/* margin-left: 30px;
			margin-top: 30px; */
		}
		.cll{
			margin-top: 30px;
			margin-left: 30px;
			/* padding-top: 30px;
			padding-left: 30px; */
			border-right: 5px solid rgb(203, 175, 136);
			border-bottom: 5px solid rgb(203, 175, 136);
			border-radius: 50%;
			width: 55px;
			height: 55px;
		}
		.media-right{
			width: 80%;
			text-align: left;
			margin-right: 5px;
			margin-top: 5px;
			margin-bottom: 5px;
			background-color: rgb(255, 255, 255);
		}
		.sub-title{
			size: 13px;
			color: #000000;
			text-align: center;
		}
		.ri-top{
			width: 90%;
			height:550px;
			background-color: rgb(247, 247, 247);
			margin-left: 20px;
			margin-right: 20px;
			margin-top: 5px;
		}
		.im-text{
			color: #000000;
			text-align: center;
			padding-left: 150px;
		}
		.im-box{
			background-color: rgb(245, 198, 130);
			width: 100%;
			height: 30px;
			justify-content: center;
		}
		.im-border{
			width: 100%;
			height: 400px;
			background-color: rgb(247, 247, 247);
			margin-top: 3px;
		}
		.im-card{
			display: flex;
			flex-wrap: wrap;
		}
		.card{
			flex: 0 0 100%;
			margin: 5px 5px 5px 5px;
			border: 1px;
			border-bottom: 1px solid #e5e5e5;
			border-radius: 5px;
			/* background-color: #fff; */
			margin-bottom: 5px;
			/* padding-top: 5px; */
			padding-bottom: 5px;
		}
		.im-top{
			width: 100%;
			height: 30px;
			display: flex;
			justify-content: flex-start;
			padding-left: 100px;
		}
		.im-left img{
			width: 30px;
			height: 30px;
			padding-bottom: 5px;
		}
		.im-cll{
			margin-top: 3px;
			margin-left: 3px;
			border-top:2px solid rgb(203, 175, 136);
			border-left:2px solid rgb(203, 175, 136);
			border-right: 2px solid rgb(203, 175, 136);
			border-bottom: 2px solid rgb(203, 175, 136);
			width: 33px;
			height: 32px;
		}
		.ri-mi{
			width: 90%;
			height: 500px;
			background-color: rgb(247, 247, 247);
			margin-top: 40px;
			margin-left: 20px;
		}
		.ri-mi img{
			width: 100%;
			height: 100%;
		}
		.ri-bot{
			width: 90%;
			height: 500px;
			background-color: rgb(247, 247, 247);
			margin-top: 40px;
			margin-left: 20px;
		}
		.ri-bot img{
			width: 100%;
			height: 100%;
		}
		
		.foo{
			display: flex;
			/* justify-content: space-around; */
			/* justify-content: center; */
			/* justify-content: space-around; */
			width: 1260px;
			height: 100px;
			background-color: rgb(241, 226, 205);
			margin-top: 580px;
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