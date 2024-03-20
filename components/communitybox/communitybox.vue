<template>
	<view class="communitybox">
		<!-- 头部 -->
		<view class="head">
			<view class="userInfo">
				<view class="avatar">
					<image
						:src="item.user_id[0].avatar_file ? item.user_id[0].avatar_file.url : '../../static/images/user-default.jpg'" 
						mode="aspectFill"
					></image>
				</view>
				<view class="name">
					{{item.user_id[0].nickname ? item.user_id[0].nickname : item.user_id[0].username}}
				</view>
				<view class="time">
					<uni-dateformat
						:date="item.publish_date"
						format="MM月dd hh:mm"
						:threshold="[60000,3600000*24*30]"
					></uni-dateformat>
				</view>
			</view>
			<view class="more">
				<text class="iconfont icon-ellipsis"></text>
			</view>
		</view>
		
		<!-- 中间 -->
		<view class="body">
			<!-- <view class="title">{{item.title}}</view> -->
			<view class="text" @click="goDetail(item._id)">
				<view class="t">{{item.description}}</view>
			</view>
			<view class="piclist">
				<view class="pic" 
					:class="item.pictures.length==1 ? 'only': ''"
					v-for="(pic,index) in item.pictures" 
					:key="pic">
					<image @click="clickPic(index)" :src="pic" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		
		<!-- 尾部信息 -->
		<view class="info">
			<view class="box">
				<text class="iconfont icon-a-27-liulan"></text>
				<text>{{item.view_count}}</text>
			</view>
			<view class="box" @click="goDetail(item._id)">
				<text class="iconfont icon-a-5-xinxi"></text>
				<text>{{item.comment_count ? item.comment_count : '评论'}}</text>
			</view>
			<view class="box">
				<text class="iconfont icon-a-106-xihuan"></text>
				<text>{{item.like_count ? item.like_count : '点赞'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"communitybox",
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
					url:"/pages/blogDetail/blogDetail?id="+e
				})
			},
			
			//单击图片
			clickPic(index){
				uni.previewImage({
					urls:this.item.pictures,
					current:index
				})
			}
		}
	}
</script>

<style lang="scss">
.communitybox{
	.head{
		display: flex;
		font-size: 32rpx;
		align-items: center;
		justify-content: space-between;
		.userInfo{
			display:flex;
			align-items: center;
			
			.avatar{
				width:40rpx;
				height:40rpx;
				border-radius: 50%;
				border-radius: 50%;
				overflow: hidden;
				image{
					width:100%;
					height:100%;
					display: block;
				}
			}
			.name{
				color:#222;
				padding-left: 10rpx;
			}
			.time{
				color:#888;
				font-size: 22rpx;
				padding-left:20rpx;
			}
		}
		.more{
			padding:5rpx;
			.iconfont{
				font-size:50rpx;
				color: #888;
			}
		}
	}
	.body{
		padding: 15rpx 0 30rpx;
		.title{
			font-size:44rpx;
			color:#000;
			font-weight:600;
			text-align: justify;
		}
		.text{
			padding-top: 10rpx;
			padding-bottom: 10rpx;
			font-size: 30rpx;
			text-align: justify;
			color:#888;
			.t{
				text-overflow: -o-ellipsis-lastline;
				overflow:hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp:2;
				-webkit-box-orient:vertical;
			}
		}
		.piclist{
			display: flex;
			padding-top:20rpx;
			.pic{
				width:225rpx;
				height:225rpx;
				margin-right:6rpx;
				overflow:hidden;
				image{
					width:100%;
					height:100%;
				}
				&:first-child{
					border-radius:20rpx 0 0 20rpx;
				}
				&:last-child{
					border-radius:0 20rpx 20rpx 0;
				}
				&.only{
					border-radius: 20rpx;
				}
			}
		}
		
	}
	.info{
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 26rpx;
		color:#333;
		.box{
			display:flex;
			align-items: center;
			padding: 15rpx 0 5rpx;
			flex: 1;
			display:flex;
			justify-content: center;
			.iconfont{
				font-size: 40rpx;
				padding-right: 10rpx;
			}
		}
	}
}
</style>