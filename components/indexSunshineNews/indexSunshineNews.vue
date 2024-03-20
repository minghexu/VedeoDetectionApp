<template>
	<view class="home" @click="goDetail(item._id)">
		<view class="title">
			{{item.title}}
		</view>
		<view class="bottom">
			<view class="date">
				<uni-dateformat
					:date="item.publish_date"
					format="MM月dd hh:mm"
					:threshold="[60000,3600000*24*30]"
				></uni-dateformat>
			</view>
			<text class="viewcount">浏览量 {{item.view_count}}</text>
		</view>
		<u-line></u-line>
	</view>
	
</template>

<script>
	export default {
		name:"indexSunshineNews",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			//点击跳转到详情页
			goDetail(e){
				// console.log(e);
				uni.navigateTo({
					url: "/pages/yiyuzhengDetail/yiyuzhengDetail?id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
.home{
	display: flex;
	flex-direction: column;
	
	.title{
		background-color: #fff;
		padding: 20rpx 0;
		
		//以下为文字单行省略的CSS布局，CSDN扣过来的我也不知道啥意思
		overflow:hidden; 
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.bottom{
		background-color: #fff;
		padding-bottom: 20rpx;
		display: flex;
		
		.date{
			padding-right: 30rpx;
		}
		
		.viewcount{
			
		}
	}
}
</style>