<template>
	<div>
			<div class="row">
				<div class="col-3" v-for="(item, index) in topics" :key="index">
					<div class="card link shadow">
						<router-link :to="{ path: '/topic/' + item.id }"><img :src="item.logo" class="logo" /></router-link>
						<p class="title">{{ item.topicName }}</p>
						<p class="sub-title">{{ item.description.slice(0, 20) }}...</p>
						<p class="meta">
							<span class="gutter">{{ item.articles }}篇文章,</span>
							<span>{{ item.follows }}人关注</span>
						</p>
					</div>
				</div>
			</div>
	
			<div class="row">
				<div class="col-8">
					<h3>热门文章</h3>
					<div v-for="(item, index) in articles" :key="index" class="col-12">
						<div class="media-wraaper border">
							<div class="media-left">
								<router-link :to="{ path: '/user/' + item.article.userId }">
								<img :src="item.author.avatar" class="avatar-lg link" />
								</router-link>
								<p>{{ item.author.nickname }}</p>
								<strong>来自</strong>
								<p>{{ item.topic.topicName }}</p>
							</div>
							<div class="media-middle flex flex-around flex-left">
								<router-link :to="{ path: '/article/' + item.article.id }" class="subtitle">
									 {{ item.article.title }} 
								</router-link>
								<p class="sub-title link">{{ item.article.summary }}</p>
								<p>
									<span class="meta gutter">{{ item.article.comments }}评论</span>
									<span class="meta">{{ item.article.likes }}喜欢</span>
								</p>
							</div>
							<div class="media-right"><img :src="item.article.thumbnail" alt="" /></div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<h3>热门作者</h3>
					<div v-for="(item, index) in users" :key="index" class="row">
						<div class="col-12 border box">
							<div class="flex-center-y">
								<router-link :to="{ path: '/user/' + item.id }">
								<img :src="item.avatar" class="avatar-xs link" />
								</router-link>
								<p class="sub-title">{{ item.nickname }}</p>
							</div>
							<div class="flex-center-y">
								<p class="meta">{{ item.fans }}个粉丝</p>
								<p class="meta">写了{{ item.articles }}篇文章</p>
							</div>
							<div class="flex-center-y"><button class="btn btn-follow">关注</button></div>
						</div>
					</div>
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
	}
};
</script>

<style scoped="scoped">
.logo {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.logo:hover {
	opacity: 0.6;
}
.box {
	display: flex;
	justify-content: space-around;
	height: 70px;
	padding: 10px;
}
.btn-follow {
	background-color: #42c02e;
	font-weight: 400;
	font-size: 15px;
	color: #fff;
	padding: 5px 0;
	width: 80px;
	height: 30px;
	border-radius: 40px;
	display: inline-block;
	text-align: center;
}
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

img {
	border: none;
}

li,
ol,
ul {
	list-style: none;
}

button,
input,
select,
textarea {
	box-sizing: border-box;
	outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 600;
}

a,
a:link,
a:visited,
a:hover,
a:active {
	text-decoration: none;
}

/* 浮动方式 */
.pull-left {
	float: left;
}

.pull-right {
	float: right;
}

.clear {
	overflow: hidden;
	clear: both;
	height: 0;
	font-size: 0;
}

.clearfix::after {
	display: block;
	visibility: hidden;
	clear: both;
	height: 0;
	font-size: 0;
	content: "";
}

/* 定位方式 */
.pr {
	position: relative;
}

.pa {
	position: absolute;
}

.pf {
	position: fixed;
}

.center {
	margin: 0 auto;
}

/* 对齐方式 */
.tx-left {
	text-align: left;
}

.tx-center {
	text-align: center;
}

.tx-right {
	text-align: right;
}

.tx-justify {
	text-align: justify;
}

/* 居中定位 */
.abs-center {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

/* 垂直居中,水平居右 */
.abs-center-right {
	position: absolute;
	left: 82%;
	top: 50%;
	transform: translate(-82%, -50%);
}

.abs-cx {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.abs-cy {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

/* 弹性布局 */
.flex {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}

.flex-center {
	justify-content: center;
}

.flex-between {
	justify-content: space-between;
}

.flex-around {
	justify-content: space-around;
}

.flex-left {
	justify-content: flex-start;
}

.flex-right {
	justify-content: flex-end;
}



.flex-center-y {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.flex-top-y {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
}

.container {
	width: 80%;
	margin: 0 auto;
}

/* 栅格 */
.row {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 10px;
}

.col-12 {
	flex: 0 0 100%;
}

.col-8 {
	flex: 0 0 66.6%;
}

.col-6 {
	flex: 0 0 50%;
}

.col-4 {
	flex: 0 0 33.3%;
}

.col-3 {
	flex: 0 0 25%;
}

.col-2 {
	flex: 0 0 16.6%;
}

.col-1 {
	flex: 0 0 8.3%;
}


/* 动画模式 */
.td-camera {
	perspective: 1000;
}

.td-space {
	transform-style: preserve-3d;
}

.td-box {
	backface-visibility: hidden;
}

.gpu-speed {
	transform: translate3d(0, 0, 0);
}

/* 全屏 */
.fullscreen {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}

/* 省略 */
.ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

/* 圆形 */
.circle {
	border-radius: 100%;
}

.round {
	border-radius: 10px;
}

/* 链接样式 */
.link {
	cursor: pointer;
}

/* 间距 */
.gutter {
	margin-right: 10px;
}
/* 字体设置 */
p {
	font-size: 15px;
	line-height: 18px;
}

.title {
	font-size: 16px;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.7);
}

.sub-title {
	font-size: 15px;
	color: rgba(0, 0, 0, 0.6);
}

.meta {
	font-size: 13px;
	color: #b4b4b4;
}

/* ---------主题设置----------- */
.primary-fill {
	background-color: #009688;
	color: #fff;
}

.primary-border {
	border: 1px solid #009688;
	color: #009688;
}

.warning-fill {
	background-color: #fb8c00;
	color: #fff;
}

.warning-border {
	border: 1px solid #fb8c00;
	color: #fb8c00;
}

.success-fill {
	background-color: #4caf50;
	color: #fff;
}

.success-border {
	border: 1px solid #4caf50;
	color: #4caf50;
}

.disable-fill {
	background-color: #e0e0e0;
	color: #fff;
}

.disable-border {
	border: 1px solid #e0e0e0;
	color: #e0e0e0;
}

.dark-fill {
	background-color: #555555;
	color: #fff;
}

.dark-border {
	border: 1px solid #555555;
	color: #555555;
}

/* --------------按钮设置------------ */
.btn {
	border: none;
	cursor: pointer;
}

.btn-lg {
	width: 120px;
	height: 35px;
}

.btn-rd {
	border-radius: 20px;
}



.btn-circle {
	width: 60px;
	height: 60px;
	border-radius: 50%;
}

/* 表单元素样式 */
.input-box {
	display: block;
	width: 90%;
	border: 1px solid darkcyan;
	border-radius: 5px;
	height: 40px;
	margin-bottom: 20px;
}

/* 阴影样式 */
.shadow {
	box-shadow: 2px 5px 10px #aaa;
}

/* 头像样式 */
.avatar-xs {
	display: inline-block;
	width: 35px;
	height: 35px;
	border-radius: 50%;
}

.avatar-lg {
	display: inline-block;
	width: 55px;
	height: 55px;
	border-radius: 50%;
}

.avatar-xs,
.avatar-lg:hover {
	cursor: pointer;
}

/* 图片缩略样式 */
.thumnail-xs {
	width: 150px;
	height: 150px;
	border-radius: 10px;
}

.thumnail-lg {
	width: 200px;
	height: 200px;
	border-radius: 10px;
}

/* 导航条 */
.nav {
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 999;
}

.nav-bar {
	width: 100%;
	height: 70px;
}

.nav-list {
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
}

.nav-item {
	height: 70px;
	line-height: 70px;
}

.nav-item input {
	margin-top: 15px;
	width: 200px;
	height: 35px;
}

.nav-item img {
	width: 45px;
	height: 45px;
	border-radius: 50%;
}

.nav-item a {
	display: inline-block;
	width: 80px;
	height: 35px;
	margin-right: 5px;
	font-size: 18px;
	font-weight: 600;
	color: #fff;
	text-align: center;
	line-height: 35px;
	letter-spacing: 3px;
}

.nav-right {
	float: right;
}

/* 边框 */
.border {
	border: 1px solid #ddd;
	border-radius: 5px;
}

/* 下边框 */
.border-bottom {
	border-bottom: 1px solid #ddd;
	padding-bottom: 20px;
}

/* 文章样式 */
.media-wraaper {
	display: flex;
	min-height: 120px;
	height: 180px;
	margin: 10px;
	border-radius: 5px;
	padding: 10px;
}

.media-left {
	flex: 1 1 18%;
	text-align: center;
	margin-right: 15px;
}

.media-middle {
	flex: 1 1 60%;
	margin-right: 15px;
}

.media-right {
	flex: 1 1 22%;
	height: 100%;
}

.media-middle>a {
	color: #FB8C00;
	font-size: 18px;
	font-weight: 700;
}

.media-right img {
	width: 95%;
	height: 80%;
	border-radius: 10px;
}

/* 卡片样式 */
.card {
	width: 100%;
	height: 260px;
	border: 1px solid #eee;
	border-radius: 5px;
	margin: 5px;
	padding: 10px;
}

.card img {
	width: 100%;
	height: 60%;
	border-top-left-radius: 5px;
	border-bottom-right-radius: 5px;
}

.card>p {
	line-height: 20px;
}
</style>