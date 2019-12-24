<template>
	<div id="app">
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
			<div class="carousel-wrap">
				<transition-group tag="ul" class="slide-ul" name="slide">
					<li v-for="(item,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
						<a :href="item.url">
							<img :src="item.image" :alt="item.description">
						</a>
					</li>
				</transition-group>
				<div class="carousel-items">
					<span v-for="(item,index) in slideList" :class="{active:index===currentIndex}" @mouseover="change(index)"></span>
				</div>
			</div>
		    <div class="layout">
				<div class="wj-left">
					<img src="../assets/img/icon3.gif">
					<img src="../assets/img/icon6.png">
					<img src="../assets/img/title1.gif">
					<div class="ph">
						<img src="../assets/img/icon7.png">
					</div>
					<div class="card-wraaper">
						<div class="card" v-for="(user,index) in users" :key="index">
							<div class="top">
								<div class="left">
									<router-link :to="{ path: '/user/' + user.id }">
									<img :src="user.avatar"></router-link>
								</div>
								<div class="bottom">
									<p class="ib-text">简介：{{user.introduction}}...</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="wj-right">
					<img src="../assets/img/icon4.gif">
					<img src="../assets/img/icon6.png">
					<img src="../assets/img/title2.gif">
					<div class="ph">
						<img src="../assets/img/icon7.png">
					</div>
					<div class="media-wraaper">
						<div class="media" v-for="(article, index) in articles" :key="index">
							<div class="media-left">
								<router-link :to="{ path: '/article/' + article.id }">
								<img :src="article.article.thumbnail" class="bl-avatar-normal" />
							    </router-link>
							</div>
							 <div class="media-right">
								<p class="sub-title">{{article.article.title}}</p>
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			users: [],
			avatar: "https://niit-soft.oss-cn-hangzhou.aliyuncs.com/icon/_plus%20.png",
				images: [],
				slideList: [{
						"url": "#",
						"description": "one",
						"image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572447676996&di=e663f0edccfc032938b692f285c89f6e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01906959b941fda801207534fa72c9.jpg%401280w_1l_2o_100sh.png"
					},
					{
						"url": "#",
						"description": "two",
						"image": "https://gratisography.com/thumbnails/gratisography-runner-resting-thumbnail-small.jpg"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://gratisography.com/thumbnails/gratisography-285-thumbnail-small.jpg"
					},
					{
						"url": "#",
						"description": "three",
						"image": "https://gratisography.com/thumbnails/gratisography-287-thumbnail-small.jpg"
					}
				],
				currentIndex: 0,
				timer: null
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/user').then(res => {
					console.log(res.data.data);
					this.users = res.data.data;
				});
		this.$nextTick(() => {
			this.timer = setInterval(() => {
				this.autoPlay()
			}, 3000)
		})
	},
	methods: {
		go() {
				this.timer = setInterval(() => {
					this.autoPlay()
				}, 3000)
			},
			stop() {
				clearInterval(this.timer)
				this.timer = null
			},
			change(index) {
				this.currentIndex = index
			},
			autoPlay() {
				this.currentIndex++
				if (this.currentIndex > this.slideList.length - 1) {
					this.currentIndex = 0
				}
			},
			showBox: function() {
				this.show = true;
			},
			closeBox: function() {
				this.show = false;
			},
			clearBox: function() {
			
			},
			addUser: function(user) {
				let data = {
					"account": user.account,
					"password": user.password,
					"nickname": user.nickname,
					"avatar": user.avatar,
					"introduction": user.introduction
				};
				alert(JSON.stringify(data));
				var _this = this;
				axios.post('http://localhost:8080/api/user', JSON.stringify(data))
					.then(function(response) {
						_this.closeBox();
						_this.users.splice(0, 0, response.data);
					});
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
	.preview-box {
		width: 50px;
		height: 50px;
		border: 1px dashed #aaa;
		position: relative;
		top: 50px;
		left: 1200px;
	
	}
	
	.preview-box img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	
	}
	
	.select-file {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		z-index: 9999;
		cursor: pointer;
	}
	
	.carousel-wrap {
		position: relative;
		width: 80%;
		height: 400px;
		left: 150px;
		overflow: hidden;
		top: 30px;
		border-radius: 20px;
	
	}
	
	.slide-ul {
		width: 100%;
		height: 100%;
	}
	
	.slide-ul li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	.slide-ul li img {
		width: 100%;
		height: 100%;
	}
	
	.carousel-items {
		z-index: 100;
		position: relative;
		top: -80px;
		text-align: center;
		font-size: 0;
	}
	
	.carousel-items span {
		display: inline-block;
		width: 50px;
		height: 6px;
		margin: 0 5px;
		background-color: #eee;
		cursor: pointer;
	}
	
	.carousel-items .active {
		background-color: #FFA500;
	}
	
	/* 动画 */
	.slide-enter-to {
		transition: all 1s ease;
		transform: translateX(0);
	}
	
	.slide-leave-active {
		transition: all 1s ease;
		transform: translateX(-100%)
	}
	
	.slide-enter {
		transform: translateX(100%)
	}
	
	.slide-leave {
		transform: translateX(0)
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
	
	ul {
		display: flex;
		flex-wrap: wrap;
	}
	
	li {
		list-style: none;
	}
	.square{
	    position: relative;
	    width: 90%;
	    height: 0;
	    padding-bottom: 90%; 
	    margin-bottom: 30px;
		left:400px;
	}
	.square-inner{
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 30%;
	    height: 30%; 
	}
	.square-inner>li{
	    width: calc(98%/ 3); 
	    height: calc(98%/ 3);
	    margin-right: 1%;
	    margin-bottom: 1%;
	    overflow: hidden;
	}
	.flex{
	    display: flex;
	    flex-wrap: wrap;
	}
	.flex>li{
	    flex-grow: 1; 
	    background-color: #FFFFFF;
	    text-align: center;
	    color: #fff;
	    font-size: 10px;
	    line-height: 2;
	}
	.flex>li:nth-of-type(3n){ 
	    margin-right: 0;
	}
	.flex>li:nth-of-type(n+7){ 
	    margin-bottom: 0;
	}
	.layout{
		display: flex;
		width: 1000px;
		height: 900px;
		background:rgb(255, 255, 255);
		margin-top: 80px;
		margin-left: 150px;
	}
	.wj-left{
		width:500px;
		height:900px;
		margin-left: 0px;
		background: rgb(255, 255, 255);
	}
	.ph {
		width: 10px;
		height: 20px;
	}
	.wj-right{
		width:500px;
		height: 900px;
		margin-left:0px;
		background-color: rgb(255, 255, 255);
		margin-top: 0px;
	}
	.card-wraaper {
		display: flex;
		flex-wrap: wrap;
	}
	
	.card {
		flex: 0 0 100%;
		margin: 5px 5px 5px 5px;
		border: 1px;
		border-bottom: 1px dashed #e5e5e5;;
		border-radius: 5px;
		background-color: #fff;
		margin-bottom: 5px;
		padding-top: 5px;
	}
	
	.top {
		border-radius: 50%;
		width: 80%;
		height: 100px;
		display: flex;
		justify-content: space-around;
	}
	
	.bottom {
		margin-top: 0px;
		padding-top: 0px;
		height: 25%;
		background: rgb(255, 255, 255);
		border-radius: 5px;
		margin-left: 0px;
	}
	.left{
		width: 100px;
		height: 100%;
	}
	.left img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.ib-text{
		color:#000000;
	}
	.media-wraaper{
		width: 100%;
		height: 30px;
		padding: 5px;
	}
	.media{
		display: flex;
		align-items: stretch;
		justify-content: flex-start;
		border-bottom: 1px solid #ddd;
		border-radius: 5px;
		background-color: #fff;
		margin-bottom: 5px;
		padding-top: 5px;
	}
	.media-left {
		flex: 0 0 20%;
		text-align: center;
		line-height: 20px;
		border-right: 1px solid #eee;
	}
	.media-left img{
		width: 100px;
		height:100px;
	}
	.media-right {
		width: 100%;
		text-align: center;
		margin-right: 10px;
	}
	.foo{
		display: flex;
		/* justify-content: space-around; */
		/* justify-content: center; */
		/* justify-content: space-around; */
		width: 1260px;
		height: 100px;
		background-color: rgb(241, 226, 205);
		margin-top: 400px;
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