<template>
	<view class="yiyuzhengnewsbox" @click="goDetail(item._id)">
		<!-- 左部图片 -->
		<view class="pic">
			<image :src="item.pictures[0]" mode="aspectFill"></image>
		</view>
		
		<!-- 右部文字 -->
		<view class="text">
			<!-- 上部标题 -->
			<view class="title">
				{{item.title}}
			</view>
			
			<!-- 下部信息 -->
			<view class="info">
				<uni-dateformat
					:date="item.publish_date"
					format="MM月dd hh:mm"
					:threshold="[60000,3600000*24*30]"
				></uni-dateformat>
				<text>{{item.view_count}}浏览量</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"yiyuzhengnewsbox",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {};
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
.yiyuzhengnewsbox{
	display: flex;		//内部横向布局 先弹性盒模型，然后再加排列方式
	
	.pic{
		border-radius: 20rpx;
		width: 230rpx;
		height: 160rpx;
		image{
			border-radius: 20rpx;
			width: 100%;		//宽度百分百继承
			height: 100%;		//高度百本百继承
		}
	}
	.text{
		flex: 1;		//让本部分占满父级
		padding-left: 20rpx;	//左侧留空间
		display: flex;
		flex-direction: column;	//弹性盒后内部不满足需求手动限制一下内部纵向排列
		justify-content: space-between;		//上下排列舒服一点
		
		.title{
			font-size: 38rpx;	//字体大小
			color: #333;
			
			//以下为文字两行省略CSS布局，CSDN扣过来的我也不知道啥意思
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;		//设定为两行
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.info{
			font-size: 26rpx;
			color: #999;
			text{
				padding-right: 30rpx;
			}
		}
	}
}
</style>