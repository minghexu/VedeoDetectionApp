<template>
	<view class="home" @pullDownRefresh="onPullDownRefresh">
		
		<!-- 骨架屏 -->
		<view class="loadingState" v-show="loadingState">
			<u-skeleton
				rows="7"
				title
				loading
			></u-skeleton>
		</view>
		
		<!-- 一条条动态 -->
		<view class="item" v-for="item in dataList">
			<communitybox :item="item"></communitybox>
		</view>
		
		<!-- 编辑按钮 -->
		<view class="edit" @click="goEdit">
			<text class="iconfont icon-a-21-xiugai"></text>
		</view>
		
	</view>
</template>

<script>
	const db=uniCloud.database();
	export default {
		data() {
			return {
				loadingState: true,
				dataList:[],
			};
		},
		onLoad(){
			this.getData();
		},
		methods:{
			//从数据库里把数据拿出来
			getData(){

				      // 添加下拉刷新状态标志
				      this.loadingState = true;
				
				      let artTemp = db.collection("communityBlog").getTemp();
				      let userTemp = db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				
				      db.collection(artTemp, userTemp).orderBy("publish_date desc").get().then(res => {
				        this.dataList = res.result.data;
				        // 关闭下拉刷新动画
				        uni.stopPullDownRefresh();
				        // 移除下拉刷新状态标志
				        this.loadingState = false;
				      }).catch(error => {
				        console.error('获取数据失败', error);
				        // 关闭下拉刷新动画
				        uni.stopPullDownRefresh();
				        // 移除下拉刷新状态标志
				        this.loadingState = false;
				      });
				
				// let artTemp= db.collection("communityBlog").getTemp();
				// let userTemp= db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();
				// // console.log(1111);
				// db.collection(artTemp,userTemp).orderBy("publish_date desc").get().then(res=>{
				// 	// console.log(res);
				// 	this.dataList=res.result.data;
				// 	this.loadingState=false;
				// })
			},
			
			onPullDownRefresh() {
			    this.getData();
			},
			
			//点击跳转
			goEdit(){
				uni.navigateTo({
					url:"/pages/edit/edit"
				})
			}
		}
	}
</script>

<style lang="scss">
.home{
	.loadingState{
		padding: 30rpx;
		
	}
	.item{
		padding: 30rpx;
		border-bottom: #f7f7f7 10rpx solid;
	}
	.edit{
		width: 120rpx;
		height: 120rpx;
		background: #0199fe;
		border-radius: 50%;
		color: #fff;
		position: fixed;
		z-index: 100;
		bottom: 150rpx;
		right: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 20rpx rgba(1,153,254,0.8);
		.iconfont{
			font-size: 60rpx;
		}
	}
}
</style>