<template>
	<div id="container_demo" >
		<a class="hiddenanchor" id="toregister"></a>
		<a class="hiddenanchor" id="tologin"></a>
		<div id="wrapper">
			<div id="login" class="animate form">
				<form  action="mysuperscript.php" autocomplete="on"> 
					<h1>Log in</h1> 
					<p> 
						<label for="username" class="uname" data-icon="" > Your email or username </label>
						<input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com" v-model="userDto.mobile"/>
					</p>
					<p> 
						<label for="password" class="youpasswd" data-icon=""> Your password </label>
						<input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" v-model="userDto.password"/> 
					</p>
					<p class="keeplogin"> 
						<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
						<label for="loginkeeping">Keep me logged in</label>
					</p>
					<p class="login button"> 
						<input type="submit" value="Login" @click="signIn(userDto)" /> 
					</p>
					<p class="change_link">
						Not a member yet ?
						<a href="#toregister" class="to_register">Join us</a>
					</p>
				</form>
				
			</div>

			
	 
	 
	 
	 
			<div id="register" class="animate form">
				<form  action="mysuperscript.php" autocomplete="on"> 
					<h1> Sign up </h1> 
					<p> 
						<label for="usernamesignup" class="uname" data-icon="">Your username</label>
						<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
					</p>
					<p> 
						<label for="emailsignup" class="youmail" data-icon="" > Your email</label>
						<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
					</p>
					<p> 
						<label for="passwordsignup" class="youpasswd" data-icon="">Your password </label>
						<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
					</p>
					<p> 
						<label for="passwordsignup_confirm" class="youpasswd" data-icon="">Please confirm your password </label>
						<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
					</p>
					<p class="signin button"> 
						<input type="submit" value="Sign up" @click="signUp(userDto)"/> 
					</p>
					<p class="change_link">  
						Already a member ?
						<a href="#tologin" class="to_register"> Go and log in </a>
					</p>
				</form>
			</div>
			
		</div>
	</div>  

</template>

<script>
export default {
	data() {
		return {
			userDto: {
						mobile: '',
						password: ''
					},
					token: ''
				};
			},
			

	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
				// console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
				console.log(res.headers);
				//取得后台通过响应头返回的sessionId的值
				this.token = res.headers['access-token'];
				console.log(this.token);
			});
		},
    methods:{
		signIn(userDto) {
			this.axios({
				method: 'post',
				url:  this.GLOBAL.baseUrl+'/api/user/sign-in',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token  //将token放在请求头带到后端
				},
			}).then(res => {
				alert(this.userDto)
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user',JSON.stringify(res.data.data));
					this.$router.push('/');
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		refresh() {
					this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
						console.log(res);
						var img = this.$refs.codeImg;
						let url = window.URL.createObjectURL(res.data);
						img.src = url;
					});
				}
			}
		};
	
</script>

<style>
	
	
	#subscribe{
		position: absolute;
		top: 120px;
		margin-left: 460px;
		width: 40%;
	    height: 500px;
		padding: 20px 6% 70px 6%;
		
		/* margin: 0 0 35px 0; */
		background: rgb(247, 247, 247);
		border: 1px solid rgba(147, 184, 189,0.8);
		box-shadow:	
			0pt 2px 5px rgba(105, 108, 109,  0.7),	
			0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
		border-radius: 15px;
	}
	#login{
		position: absolute;
		top: 120px;
		margin-left: 460px;
		width: 40%;	
		height: 500px;
		padding: 20px 6% 70px 6%;
		
		/* margin: 0 0 35px 0; */
		background: rgb(247, 247, 247);
		border: 1px solid rgba(147, 184, 189,0.8);
		box-shadow:	
			0pt 2px 5px rgba(105, 108, 109,  0.7),	
			0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
		border-radius: 15px;
	}
	#login{
		z-index: 22;
	}
	
	#bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/topic.png);
	}
	.login-box {
		
		width: 400px;
		height: 340px;
		border: 2px solid rgb(170, 208, 95);
		border-radius: 10px;
		background-color: rgb(170, 208, 95, 0.6);
		position: absolute;
		top: 200px;
		left: 30%;
	
		
	}
	.login-form {
		padding-top: 20px;
		width: 70%;
		margin: 0 auto;
		text-align: right;
	}
	
	
	#subscribe{
		position: absolute;
				top: 120px;
				margin-left: 460px;
				width: 40%;	
				padding: 20px 6% 70px 6%;
				
				/* margin: 0 0 35px 0; */
				background: rgb(247, 247, 247);
				border: 1px solid rgba(147, 184, 189,0.8);
				box-shadow:	
					0pt 2px 5px rgba(105, 108, 109,  0.7),	
					0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
				border-radius: 15px;
	} 
	#register{
		position: absolute;
		top: 120px;
		margin-left: 460px;
		width: 40%;	
		padding: 20px 6% 70px 6%;
		
		/* margin: 0 0 35px 0; */
		background: rgb(247, 247, 247);
		border: 1px solid rgba(147, 184, 189,0.8);
		box-shadow:	
			0pt 2px 5px rgba(105, 108, 109,  0.7),	
			0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
		border-radius: 15px;
	
	}
	#register{
		z-index: 21;
	}
	
	/**** general text styling ****/
	#wrapper h1{
		font-size: 48px;
		color: rgb(6, 106, 117);
		padding: 2px 0 10px 0;
		font-family: 'FranchiseRegular','Arial Narrow',Arial,sans-serif;
		font-weight: bold;
		text-align: center;
		padding-bottom: 30px;
	}
	 
	/** For the moment only webkit supports the background-clip:text; */
	#wrapper h1{
		background: 
		-webkit-repeating-linear-gradient(-45deg, 
			rgb(18, 83, 93) , 
			rgb(18, 83, 93) 20px,
			rgb(64, 111, 118) 20px,
			rgb(64, 111, 118) 40px,
			rgb(18, 83, 93) 40px);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
	 
	#wrapper h1:after{
		content:' ';
		display:block;
		width:100%;
		height:1.5px;
		margin-top:7px;
		background: 
			linear-gradient(left,  
				rgba(147,184,189,0) 0%,
				rgba(147,184,189,0.8) 20%,
				rgba(147,184,189,1) 53%,
				rgba(147,184,189,0.8) 79%,
				rgba(147,184,189,0) 100%); 
	}
	
	
	/**** advanced input styling ****/
	/* placeholder */
	::-webkit-input-placeholder  { 
		color: rgb(190, 188, 188); 
		font-style: italic;
	}
	input:-moz-placeholder{
		color: rgb(190, 188, 188);
		font-style: italic;
	}
	textarea:-moz-placeholder{ 
		color: rgb(190, 188, 188);
		font-style: italic;
	} 
	input {
	  outline: none;
	}
	
	
	/* all the input except submit and checkbox */
	#wrapper input:not([type="checkbox"]){
		width: 98%;
		margin-top: 1.5px;
		padding: 10px 5px 10px 32px;	
		border: 1px solid rgb(178, 178, 178);
		box-sizing : content-box;
		border-radius: 5px;
		box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
		transition: all 0.2s linear;
	}
	#wrapper input:not([type="checkbox"]):active{
		border: 1px solid rgba(91, 90, 90, 0.7);
		background: rgba(238, 236, 240, 0.2);	
		box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
	}
	#wrapper input:not([type="checkbox"]):focus{
		border: 1px solid rgba(91, 90, 90, 0.7);
		background: rgba(238, 236, 240, 0.2);	
		box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
	} 
	
	/* @font-face {
	    font-family: 'FontomasCustomRegular';
	    src: url('fonts/fontomas-webfont.eot');
	    src: url('fonts/fontomas-webfont.eot?#iefix') format('embedded-opentype'),
	         url('fonts/fontomas-webfont.woff') format('woff'),
	         url('fonts/fontomas-webfont.ttf') format('truetype'),
	         url('fonts/fontomas-webfont.svg#FontomasCustomRegular') format('svg');
	    font-weight: normal;
	    font-style: normal;
	} */
	 
	/** the magic icon trick ! **/
	[data-icon]:after {
	    content: attr(data-icon);
	    font-family: 'FontomasCustomRegular';
	    color: rgb(106, 159, 171);
	    position: absolute;
	    left: 10px;
	    top: 35px;
		width: 30px;
	}
	
	/*按钮样式*/
	/*styling both submit buttons */
	#wrapper p.button input{
		width: 30%;
		cursor: pointer;	
		background: rgb(61, 157, 179);
		padding: 5px 8px;
		font-family: 'BebasNeueRegular','Arial Narrow',Arial,sans-serif;
		color: #fff;
		font-size: 20px;	
		border: 1px solid rgb(28, 108, 122);	
		margin-bottom: 10px;	
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
		border-radius: 3px;	
		margin-top: 5px;
		box-shadow:
			0px 1px 6px 4px rgba(0, 0, 0, 0.07) inset,
			0px 0px 0px 3px rgb(254, 254, 254),
			0px 5px 3px 3px rgb(210, 210, 210);
		transition: all 0.2s linear;
	}
	#wrapper p.button input:hover{
		background: rgb(74, 179, 198);
	}
	#wrapper p.button input:active{
		background: rgb(40, 137, 154);
		position: relative;
		top: 1px;
		border: 1px solid rgb(12, 76, 87);	
		box-shadow: 0px 1px 6px 4px rgba(0, 0, 0, 0.2) inset;
	}
	#wrapper p.button input:focus{
		background: rgb(40, 137, 154);
		position: relative;
		top: 1px;
		border: 1px solid rgb(12, 76, 87);	
		box-shadow: 0px 1px 6px 4px rgba(0, 0, 0, 0.2) inset;
	}
	p.login.button{
		text-align: right;
		margin: 9px 0;
		}
		
	p.signin.button{
		text-align: right;
		margin: 9px 0;
	}
	
	/* styling the checkbox "keep me logged in"*/
	.keeplogin{
		margin-top: 15px;
		/* text-align: left; */
		
	}
	/*复选框*/
	.keeplogin input{
		display: inline-block;
		font-size: 8px;	
		margin-top: 12px;
	    margin-left: 180px;
		font-style: italic;
		
		}
		.keeplogin label{
		display: inline-block;
		font-size: 12px;
		margin-left: 310px;
		font-style: italic;
	}
	.keeplogin input#loginkeeping{
		margin-right: 5px;
	}
	.keeplogin label{
		width: 80%;
	}
	
	/* 按钮下面横条 */
	
	p.change_link{
		position: absolute;
		color: rgb(127, 124, 124);
		left: 0px;
		margin-top: 100px;
		height: 20px;
		width: 612.5px;
		padding: 15px 30px 20px 30px;
		font-size: 20px	;
		text-align:-webkit-auto;
	
		border-top: 1px solid rgb(219, 229, 232);
		border-radius: 0 0  10px 10px;
		background: rgb(225, 234, 235);
		background: repeating-linear-gradient(-45deg, 
		rgb(247, 247, 247) , 
		rgb(247, 247, 247) 15px, 
		rgb(225, 234, 235) 15px, 
		rgb(225, 234, 235) 30px, 
		rgb(247, 247, 247) 30px
		);
	}
	/* 切换按钮 */
	#wrapper p.change_link a {
		display: inline-block;
		font-weight: bold;
		background: rgb(247, 248, 241);
		padding: 2px 10px;
		color: rgb(29, 162, 193);
		margin-left: 10px;
		margin-top: -15px;
		text-decoration: none;
		border-radius: 5px;
		border: 1px solid rgb(203, 213, 214);
		transition: all 0.4s  linear;
	}
	#wrapper p.change_link a:hover {
		color: rgb(57, 191, 215);
		background: rgb(247, 247, 247);
		border: 1px solid rgb(74, 179, 198);
	}
	#wrapper p.change_link a:active{
		position: relative;
		top: 10px;
	}
	
	
	#register{	
		z-index: 21;
		opacity: 0;

}
#toregister:target ~ #wrapper #register{
	z-index: 22;
	animation-name: fadeInLeft;
	animation-delay: .1s;
}
#tologin:target ~ #wrapper #login{
	z-index: 22;
	animation-name: fadeInLeft;
	animation-delay: .1s;
}


.animate{
	animation-duration: 0.5s;
	animation-timing-function: ease;
	animation-fill-mode: both;
}
@keyframes fadeInLeft {
	0% {
		opacity: 0;
		transform: translateX(-20px);
	}
	
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}


#toregister:target ~ #wrapper #login{
	animation-name: fadeOutLeftBig;
}
#tologin:target ~ #wrapper #register{
	animation-name: fadeOutLeftBig;
}
 
@keyframes fadeOutLeft {
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	
	100% {
		opacity: 0;
		transform: translateX(-20px);
	}
}










	
</style>