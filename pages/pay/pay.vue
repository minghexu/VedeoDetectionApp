<template>
	<view class="home">
		<!-- 头部 -->
		<view class="head">
			<!-- 个人信息 -->
			<view class="selfInfo">
				<!-- 头像 -->
				<view class="pic">
					<image v-if="hasLogin&&userInfo.avatar_file&&userInfo.avatar_file.url"
						:src="userInfo.avatar_file.url"
						mode="aspectFill"
					></image>
					<image v-else
						src="../../static/images/user-default.jpg"
						mode="aspectFill"
					></image>
				</view>
				
				<!-- 昵称 -->
				<view class="text" v-if="hasLogin">
					<view class="nickname">
						{{userInfo.nickname||userInfo.username||userInfo.mobile}}
					</view>
					<!-- <view class="year">
						<uni-dateformat 
							:date="userInfo.register_date" 
							:threshold="[3600,99*365*24*60*60*1000]"
						></uni-dateformat>
						注册
					</view> -->
				</view>
				
			</view>
			
			<u-line></u-line>
			
			<!-- 剩余次数 -->
			<view class="times">
				当前剩余次数：23次
			</view>
		</view>
		
		<!-- 三个套餐 纵向排列 -->
		<view class="menu">
			<!-- 买5次 -->
			<view
				class="buyFive"
				:class="{ 'selected': selectedPackage === 'buyFive' }"
				@click="selectPackage('buyFive')"
			>
				<view class="tit">
					普通套餐
				</view>
				
				<view class="body">
					<view class="discription">
						5次检测机会
					</view>
					<view class="money">
						<text>￥20</text>
					</view>
				</view>
				
			</view>
			
			<!-- 买15次 -->
			<view
				class="buyFifteen"
				:class="{ 'selected': selectedPackage === 'buyFifteen' }"
				@click="selectPackage('buyFifteen')"
			>
				<view class="tit">
					豪华套餐
				</view>
				
				<view class="body">
					<view class="discription">
						15次检测机会
					</view>
					<view class="money">
						<text>￥20</text>
					</view>
				</view>
			</view>
			
			<!-- 买50次 -->
			<view
				class="buyFifty"
				:class="{ 'selected': selectedPackage === 'buyFifty' }"
				@click="selectPackage('buyFifty')"
			>
				<view class="tit">
					至尊套餐
				</view>
				
				<view class="body">
					<view class="discription">
						50次检测机会
					</view>
					<view class="money">
						<text>￥20</text>
					</view>
				</view>
			</view>
			
			<!-- 终身大会员 -->
			<view
				class="buyAll"
				:class="{ 'selected': selectedPackage === 'buyAll' }"
				@click="selectPackage('buyAll')"
			>
				<view class="tit">
					终身大会员
				</view>
				
				<view class="body">
					<view class="discription">
						无限次检测机会
					</view>
					<view class="money">
						<text>￥20</text>
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 按钮 -->
		<u-button class="button" @click="purchase" :disabled="!isButtonEnabled">
			<text>立即购买</text>
		</u-button>
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	
	export default {
		data() {
			return {
				selectedPackage: null,
				isButtonEnabled: false, // 初始状态下按钮不可用
			};
		},
		
		computed: {
			userInfo(){
				return store.userInfo
			},
			hasLogin(){
				return store.hasLogin
			}
		},
		
		methods: {
			selectPackage(packageName) {
				// 如果再次点击相同的套餐，取消选中
				// console.log(111);
				this.selectedPackage = this.selectedPackage === packageName ? null : packageName;
				this.isButtonEnabled = this.selectedPackage !== null; // 当选择套餐时启用按钮
			},
			
			purchase(){
				uni.showToast({
					title: '购买成功',
					icon: 'success',
					duration: 2000,
					success: () => {
						setTimeout(() => {
							uni.navigateBack({
								delta: 1, // 返回上一个页面
							});
						}, 1000);
					},
				})
			}
		},
	}
</script>

<style lang="scss">
.home{
	display: flex;
	flex-direction: column;
	background-color: #f1f1f1;
	
	.head{
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 40rpx 40rpx;
		padding: 50rpx 50rpx;
		border-radius: 30rpx;
		
		.selfInfo{
			display: flex;
			// justify-content: center;
			align-items: center;
			margin-bottom: 25rpx;
			
			.pic{
				display: flex;
				height: 100rpx;
				width: 100rpx;
				border-radius: 30rpx;
				
				image{
					border: solid 5rpx gold;
					flex: 1;
					height: 100%;
					width: 100%;
					border-radius: 20rpx;
				}
			}
			
			.text{
				margin-left: 40rpx;
				
			}
		}
		
		.times{
			margin-top: 25rpx;
		}
	}
	
	.menu{
		// margin-top: 40rpx;
		background: #f1f1f1;
		
		.buyFive{
			
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			margin: 40rpx 0rpx;
			background: #f1f1f1;
			// justify-content: center;
			align-items: center;
			
			.tit{
				border-radius: 20rpx 20rpx 0 0;
				padding: 30rpx 30rpx;
				background: gold;
				display: flex;
				align-items: center;
				justify-content: center;
				border: solid 5rpx gold;
				width: 550rpx;
				font-weight: bold;
			}
			
			.body{
				padding: 30rpx 30rpx;
				background: #fff;
				border-radius: 0 0 20rpx 20rpx;
				width: 550rpx;
				border: solid 5rpx gold;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				.discription{
					padding-top: 30rpx;
				}
				.money{
					padding: 30rpx 0;
					font-weight: bold;
				}
			}
			
		}
		
		.buyFifteen{
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			margin: 40rpx 0rpx;
			background: #f1f1f1;
			// justify-content: center;
			align-items: center;
			
			.tit{
				border-radius: 20rpx 20rpx 0 0;
				padding: 30rpx 30rpx;
				background: gold;
				display: flex;
				align-items: center;
				justify-content: center;
				border: solid 5rpx gold;
				width: 550rpx;
				font-weight: bold;
			}
			
			.body{
				padding: 30rpx 30rpx;
				background: #fff;
				border-radius: 0 0 20rpx 20rpx;
				width: 550rpx;
				border: solid 5rpx gold;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				.discription{
					padding-top: 30rpx;
				}
				.money{
					padding: 30rpx 0;
					font-weight: bold;
				}
			}
		}
		
		.buyFifty{
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			margin: 40rpx 0rpx;
			background: #f1f1f1;
			// justify-content: center;
			align-items: center;
			
			.tit{
				border-radius: 20rpx 20rpx 0 0;
				padding: 30rpx 30rpx;
				background: gold;
				display: flex;
				align-items: center;
				justify-content: center;
				border: solid 5rpx gold;
				width: 550rpx;
				font-weight: bold;
			}
			
			.body{
				padding: 30rpx 30rpx;
				background: #fff;
				border-radius: 0 0 20rpx 20rpx;
				width: 550rpx;
				border: solid 5rpx gold;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				.discription{
					padding-top: 30rpx;
				}
				.money{
					padding: 30rpx 0;
					font-weight: bold;
				}
			}
		}
		
		.buyAll{
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			margin: 40rpx 0rpx;
			background: #f1f1f1;
			// justify-content: center;
			align-items: center;
			
			.tit{
				border-radius: 20rpx 20rpx 0 0;
				padding: 30rpx 30rpx;
				background: gold;
				display: flex;
				align-items: center;
				justify-content: center;
				border: solid 5rpx gold;
				width: 550rpx;
				font-weight: bold;
			}
			
			.body{
				padding: 30rpx 30rpx;
				background: #fff;
				border-radius: 0 0 20rpx 20rpx;
				width: 550rpx;
				border: solid 5rpx gold;
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				.discription{
					padding-top: 30rpx;
				}
				.money{
					padding: 30rpx 0;
					font-weight: bold;
				}
			}
		}
		
		.buyFive.selected,
		.buyFifteen.selected,
		.buyFifty.selected,
		.buyAll.selected {
			// border-color: #fff ; // 设置你想要的选中边框颜色
			.tit{
				border-color: #fff8dc;
				background: #e8c785;
			}
			.body{
				border-color: #fff8dc;
				background: #e8c785;
			}
		}
	}
	
	.button{
		background: gold;
		width: 500rpx;
		margin-bottom: 40rpx;
		
		text{
			color: #fff;
			font-weight: bold;
		}
	}
}
</style>
