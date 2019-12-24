<template>
	<div class="container">
	<div class="row">
		
		<div class="img">
			
		<img src="../assets/img/forestfloor.jpg">
		</div>
		<div class="col-8"> 
		<div class="about" v-for="(user, index) in users.slice(0,6)" :key="index">
			
			<p>{{user.nickname}}</p>
			<div class="avatar">
			<img :src="user.avatar" />
			</div>
			<!-- <div class="active">
				
				</div> -->
			</div>
		 
		</div>
		<div class="col-3">
			
		 </div>
	</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userVo: {
				users: [],
				articleList: {}
			}
		};
	},
	created() {
		var id = this.$route.params.id;
			this.axios
				.get('http://localhost:8080/api/user').then(res => {
				console.log(res.data.data);
				this.users = res.data.data;
			});
		},
	methods: {}
};
</script>

<style scoped="scoped">
	.container{
		height: 2200px;
		font-weight: 300px;
		background: #B4B4B4;
	}
 .img{
		height: 301px;
		box-sizing: border-box;
		padding-top: 50px;
	}
	.col-8{
		height: 1800px;
		background: #D9DEE2;
		margin-right: 20px;
	}
	.col-3{
		height: 800px;
		background: #42C02E;
		margin-left: 76px;
		
	}
	.about{
		height: 250px;
		background: #EBEEF2;
		margin-top: 40px;
		
	}
	.avatar{
		top:-10px;
		height: 15px;
		width: 15px;
		border-radius: 15px 50px 30px 5px;
	}
</style>