<template>
	<view class="otherProduct">
		
		<view class="home">
			
			<!-- 左面的图片 -->
			<view class="left">
				<image src="../../static/images/222.jpg" mode="aspectFill"></image>
			</view>
			
			<!-- 右面的文字 -->
			<view class="right">
				<!-- 产品名称 -->
				<view class="name">
					<text>
						传感器（官方销售）
					</text>
					
				</view>
				
				<view class="pay">
					<!-- 价钱 -->
					<view class="money">
						<text class="icon">￥</text>
						<text class="pointBefore">220</text>
						<text class="pointAfter">.00</text>
					</view>
					
					<!-- 立即购买 -->
					<view class="buyNow" @click="buy">
						<text>立即抢购</text>
					</view>
					
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		name:"otherProduct",
		data() {
			return {
				
			};
		},
		methods:{
			buy(){
				uni.showModal({
					content:"确认购买？",
					success: function (res) {
					    if (res.confirm) {
					      // console.log('用户点击确定');
					      // 在用户点击确定时显示提示信息
					      uni.showToast({
					        title: '购买成功',
					        
					        duration: 2000
					      });
					    } else if (res.cancel) {
					      // console.log('用户点击取消');
						  uni.showToast({
						    title: '取消购买',
						    icon:'none',
						    duration: 2000
						  });
					    }
					  }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.otherProduct{
.home{
	display: flex;
	// border: solid 5rpx palevioletred;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
	padding-left: 30rpx;
	align-items: center;
	
	.left{
		// border: solid 5rpx yellowgreen;
		display: flex;		
		height: 350rpx;
		width: 320rpx;
		
		image{
			border-radius: 15rpx;
			flex: 1;
			width: 100%;
			height: 100%;
		}
	}
	
	.right{
		// border: solid 5rpx purple;
		display: flex;
		flex-direction: column;
		margin-left: 30rpx;
		margin-right: 30rpx;
		
		.name{
			display: flex;
			// border: solid 5rpx hotpink;
			width: 340rpx;
			
			text{
				font-weight: bold;
				
			}
		}
		
		.pay{
			display: flex;
			margin-top: 60rpx;
			align-items: center;
			// justify-content: space-between;
			// margin-top: 50rpx;
			// border: solid 5rpx lightskyblue;
			.money{
				display: flex;
				align-items: baseline;
				
				.icon{
					display: flex;
					color: #fa2c19;
					font-weight: bold;
					// font-size: 50rpx;
				}
				
				.pointBefore{
					display: flex;
					color: #fa2c19;
					font-weight: bold;
					font-size: 50rpx;
				}
				
				.pointAfter{
					display: flex;
					color: #fa2c19;
					font-weight: bold;
				}
			}
			
			.buyNow{
				width: 115rpx;
				height: 45rpx;
				display: flex;
				background: #fd4801;
				margin-left: 35rpx;
				border-radius: 7rpx;
				align-items: center;
				justify-content: center;
				
				text{
					font-weight: bold;
					font-size: 25rpx;
					color: #fff;
				}
			}
			
		}
	}
	
	
}
}
</style>