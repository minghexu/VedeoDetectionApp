<template>
  <view class="home">
	  
  	<view class="head">
		<view class="resContent">
			经过分析，您的健康结果如下：
		</view>	
  	</view>
	
	<view class="body">
		<view class="first">
			我们需提取人体关节关键信息如下：
		</view>
		<u-line></u-line>
		
		<view class="pic1">
			<view class="pic1">
				<image src="../../static/images/12.png" mode="aspectFill"></image>
			</view>
		</view>
		
		<view class="second">
			人体关节信息预处理示意图如下：
		</view>
		<u-line></u-line>
		
		<view class="pic2">
			<view class="pic2">
				<image src="../../static/images/13.png" mode="aspectFill"></image>
			</view>
		</view>
		
		<view class="third">
			深度学习技术模型如下：
		</view>
		<u-line></u-line>
		
		<view class="pic3">
			<view class="pic3">
				<image src="../../static/images/14.png" mode="aspectFill"></image>
			</view>
		</view>
		
		<view class="result">
			您的结合步态的多模态分析结果（结合传感器）如下：
		</view>
		<u-line></u-line>
		
		<view class="resPic">
			<image src="../../static/images/11.jpg" mode="aspectFill"></image>
		</view>
	</view>
	
	<view class="foot">
		<view class="resultTxt">
			综合分析，我们对您的健康评估是：
		</view>
		<u-line></u-line>
		
		<view class="low" v-if="resultArray==1">
			<text class="score">早期倾向</text>
			<text class="description">建议您前往医院检查</text>
		</view>
		
		<view class="one" v-else>
			<text class="score">健康</text>
			<text class="description">非常棒，继续健康生活吧</text>
		</view>
		

	</view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			resultArray: []
		};
	},
	  
	onLoad(e) {
		this.detail=JSON.parse(decodeURIComponent(e.key));
		// console.log(this.detail);
		// console.log(this.detail.result);
		this.resultArray=this.detail.result;
		console.log(this.resultArray);
		
	},
	
	methods: {
		
	}
};
</script>

<style lang="scss">
.home{
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;	
	
	.head{
		background-color: #fff;
		border-radius: 25rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 30rpx;
		margin-bottom: 15rpx;
		// border: 5rpx solid blue;
		
		.resContent{
			padding: 30rpx 30rpx;
		}
		
	}
	
	.body{
		background-color: #fff;
		border-radius: 25rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		
		// border: 5rpx solid orangered;
		display: flex;
		flex-direction: column;
		
		.first{
			margin-top: 30rpx;
			margin-bottom: 15rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid greenyellow;
		}
		
		.pic1{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid purple;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			
			.pic1{
				display: flex;
				width: 100%;
				height: 400rpx;
				margin-bottom: 30rpx;
				// border: 5rpx solid blue;
				flex-direction: column;
				align-items: center;
				
				image{
					width: 100%;
					height: 100%;
					flex:1;
					border-radius: 20rpx;
				}
			}
		}
		
		.second{
			margin-top: 30rpx;
			margin-bottom: 15rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid greenyellow;
		}
		
		.pic2{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid purple;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			
			.pic2{
				display: flex;
				width: 100%;
				height: 400rpx;
				margin-bottom: 30rpx;
				// border: 5rpx solid blue;
				flex-direction: column;
				align-items: center;
				
				image{
					width: 100%;
					height: 100%;
					flex:1;
					border-radius: 20rpx;
				}
			}
		}
		
		.third{
			margin-top: 30rpx;
			margin-bottom: 15rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid greenyellow;
		}
		
		.pic3{
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid purple;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			
			.pic3{
				display: flex;
				width: 100%;
				height: 400rpx;
				margin-bottom: 30rpx;
				// border: 5rpx solid blue;
				flex-direction: column;
				align-items: center;
				
				image{
					width: 100%;
					height: 100%;
					flex:1;
					border-radius: 20rpx;
				}
			}
		}
		
		.result{
			margin-top: 30rpx;
			margin-bottom: 15rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			// border: 5rpx solid greenyellow;
		}
		
		.resPic{
			display: flex;
			margin-top: 30rpx;
			margin-bottom: 60rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			
			height: 400rpx;
			// border: 5rpx solid greenyellow;
			
			image{
				width: 100%;
				height: 100%;
				flex:1;
				border-radius: 20rpx;
			}
		}
		
	}
	
	.foot{
		background-color: #fff;
		border-radius: 25rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 15rpx;
		margin-bottom: 30rpx;
		// border: 5rpx solid coral;
		
		.resultTxt{
			padding: 30rpx 30rpx;
		}
		
		.low{
			display: flex;
			flex-direction: column;
			margin: 70rpx 40rpx;
			align-items: center;
			justify-content: center;
			
			.score{
				font-size: 100rpx;
				color: #ff5e42;
				margin-bottom: 40rpx;
			}
		}
		
		
		.one{
			display: flex;
			flex-direction: column;
			margin: 70rpx 40rpx;
			align-items: center;
			justify-content: center;
			
			.score{
				font-size: 100rpx;
				color: #338aff;
				margin-bottom: 40rpx;
			}
		}

		
		
	}
	
}
</style>