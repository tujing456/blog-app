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
			
  <div class="round">
	 <div class="title">
	     <div class="avatar">
	       <img :src="userInfo.avatar"/>
	       <!-- 图片地址动态绑 -->
	     </div>
	     <div class="setting_right" @click.stop="uploadHeadImg">
	       <div class="caption">更改头像</div>
	     <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
	   </div>
	   <div class="title" v-for="(user, index) in users.slice(1,2)" :key="index">
	   		<div class="a">
	   		<p>姓名: {{user.nickname }}</p>
	   		</div>
	   		<div class="b">
	   		<p>手机号: {{user.mobile}}</p>
	   		</div>
	   		<div class="c">
	   		<p>性别: {{user.gender}}</p>
	   		</div>
	   		<div class="d">
	   		<p>生日: {{user.birthday}}</p>
	   		</div>
	   		<div class="e">
	   		<p>地区: {{user.address}}</p>
	   		</div>
	   		<div class="f">
	   		<p>代表作: {{user.introduction}}</p>
	   		</div>
			<div class=" button">
				<p>编辑个人信息</p>
			</div>
	   		  <div id="shoucang">+关注作者</div>
	   </div>
	 </div> 
	
	 
	 <div class="lanren">
	 	<div class="flip-3d">
	 	 	<figure>
	 	    	<img src="https://upload-images.jianshu.io/upload_images/185350-e65072704c6acac9.jpeg" alt="">
	 	    	<figcaption>经验告诉我们，停留在不愉快情绪的时间越长，会大量降低我们解决问题的整体能力。</figcaption>
	 		</figure>
	 	</div>
	 	<div class="flip-3d">
	 		<figure>
	 	    	<img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
	 	    	<figcaption>微笑的表情，可以感受生活中每一刻的丰足与喜悦；乐观的心情，足以抵挡生命中每一次的挫折与打击。</figcaption>
	 	  	</figure>
	 	</div>
	 	<div class="flip-3d">
	 		<figure>
			<img src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt="">
	 	    	
				<figcaption>混乱生起的地方，也是宁静生起的地方。透过智慧，哪里有混乱，哪里就有宁静。</figcaption>
	 		</figure>
	 	</div>
	<div class="get">
				<router-link to="/u" class = "text"><p> ← </p></router-link>
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
				userInfo: {
				  avatar: 'https://img0.sc115.com/uploads3/sc/jpgs/1908/bpic12885_sc115.com.jpg'
				}
			
			
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/user').then(res => {
				console.log(res.data.data);
				this.articles = res.data.data;
			});
			this.axios.get('http://localhost:8080/api/user').then(res => {
						console.log(res.data.data);
						this.users = res.data.data;
					});
		},
		computed: {
			// 解决403图片缓存问题
			getImages(_url) {
				if (_url) {
					let _u = _url.substring(8);
					return 'https://images.weserv.nl/?url=' + _u;
				}
			}
		},
		methods: {
		  // 打开图片上传
		  uploadHeadImg: function () {
		    this.$el.querySelector('.hiddenInput').click()
		  },
		  // 将头像显示
		  handleFile: function (e) {
		    let $target = e.target || e.srcElement
		    let file = $target.files[0]
		    var reader = new FileReader()
		    reader.onload = (data) => {
		      let res = data.target || data.srcElement
		      this.userInfo.avatar = res.result
		    }
		    reader.readAsDataURL(file)
		  },
		}
	};
	window.onload = function (){
	    var oSc = document.getElementById('shoucang');
	    var onOff = true;
	     
	    oSc.onclick = function (){
	        if(onOff){
	            oSc.innerHTML = '<i class="yishoucang"></i>'+'已关注';
	            oSc.style.backgroundColor = '#87aab5';
	            onOff = false;    
	        }else{
	            oSc.innerHTML = '+关注作者';
	            oSc.style.backgroundColor = '#87aab5';
	            onOff = true;
	        }
	    };
	     
	    oSc.onmouseover = function (){
	        if(onOff){
	            oSc.style.backgroundColor = '#03a6d7';    
	        }else{
	            oSc.innerHTML = '已关注';
	            oSc.style.backgroundColor = '#527884';
	        }
	    };
	    
	}
</script>

<style>
	
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
		.button {
		   color: #a9c08c;
		   cursor:pointer;
		  	background: -webkit-gradient(linear, left top, left bottom, from(#4e7d0e), to(#7db72f));
		   	background: -moz-linear-gradient(top,  #4e7d0e,  #7db72f);
		   /* 	filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#4e7d0e', endColorstr='#7db72f'); */
		    margin-left: 720px;
		   /* margin-top: -200px; */
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
	.round{
		height: 1200px;
		width: 1200px;
		margin: auto;
		margin-top: 20px;
		padding: 10px;
		background: #E5E5E5;
		border-style:solid;
		border-color:#E2E2E2;
	    border-width:5px;
		border-radius: 8px;
	}
	.title{
		height: 300px;
		width: 900px;
		margin: auto;
		border-radius: 15px;
		margin-top: 20px;
		background:#F1F1F1;
	}
	
	.avatar{
	  height: 90px;
	  margin-left: 150px;
	  margin-top: 50px;
	}
	.avatar img{
	  width:110px;
	  height:110px;
	  border-radius:50px;
	}
	.setting_right{
	  display: flex;
	  height: 37px;
	  margin-left: 160px;
	  margin-top: -30px;
	}
	.hiddenInput{
	  display: none;
	}
	.caption {
	  color: #666666;
	  font-size: 22px;
	  height: 37px;
	  cursor: pointer;
	  
	}
	.a{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		
	}
	.b{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		margin-top: 8px;
		}
	.c{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		margin-top: 8px;
		}
	.d{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		margin-top: 8px;
		}
	.e{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		margin-top: 8px;
		}
     .f{
		margin-left: 410px;
		margin-top: -80px;
		font-size: 18px;
		margin-top: 8px;
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
	 
	.lanren{width:1000px;overflow:hidden;margin:0 auto;}
	.flip-3d { 
	 perspective: 1200px; 
	 width: 33%; 
	 float: left;
	 margin-top: 130px;
	  
	 }
	.flip-3d figure { 
	 position: relative; 
	 transform-style: preserve-3d; 
	 transition: 1s transform;
	 font-size: 1.6rem;
	 margin:25px;
	
	 }
	 .flip-3d figure img { 
	   width: 100%; 
	   height: auto;
	   border-radius: 10px;
	 }
	 .flip-3d figure figcaption { 
	   position: absolute; 
	   width: 100%; height: 100%; top: 0; 
	   transform: rotateY(.5turn) translateZ(1px); 
	   background: rgba(255,255,255,0.9); 
	   text-align: center; 
	   padding-top: 45%; 
	   opacity: 0.6; 
	   transition: 1s .5s opacity; 
	 }
	 .flip-3d:hover figure { transform: rotateY(.5turn); }
	 .flip-3d:hover figure figcaption { opacity: 1; }
	 .flip-3d figure:after { 
	  content: "  "; display: block;
	  height: 8vw; width: 100%; 
	  transform: rotateX(90deg); 
	  background-image:radial-gradient(ellipse closest-side, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%); 
	 }
	 @media screen and (max-width: 800px) { 
	   #flip-3d { perspective-origin: center top; }
	 	div#flip-3d figure { 
	     float: none; 
	     width: 50%; 
	     margin: 0 auto; 
	     margin-bottom: 12vw; 
	   }
	  .flip-3d figure figcaption{font-size: 0.8rem;}
	 	div#flip-3d figure:last-child { display: none; }
	 }  
	 
	 .get{
	 	font-size: 24px;
	 	margin-top: 50px;
	 	cursor:pointer;
	 	}
	 		.foo{
	 			display: flex;
	 			/* justify-content: space-around; */
	 			/* justify-content: center; */
	 			/* justify-content: space-around; */
	 			width: 100%;
	 			height: 100px;
	 			background-color: rgb(241, 226, 205);
	 			margin-top: 400px;
	 			margin-left: 3px;
	 			font-family: "zapf dingbats";
	 			padding-top: 20px;
	 			margin-top: 70px;
	 		}
	 		.text-ex{
	 			color:#000000;
	 		}
	 		.foo-tit{
	 			font-family: "copperplate gothic bold";
	 			font-size: large;
	 			justify-content: center;
	 			padding-left: 280px;
	 		}
	 		.foo-to{
	 			/* display: flex; */
	 			width: 300px;
	 			margin-left: 200px;
	 			/* justify-content: space-around; */
	 		}
	 		.boo{
	 			width: 100%;
	 			height: 50px;
	 			margin-left: 3px;
	 		}
	 		.boo img{
	 			width: 100%;
	 			height: 100%;
	 		}  
	 		  
		  
		  
		  
		  
		
</style>
