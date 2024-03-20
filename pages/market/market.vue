<template>
	<view class="home">
		
		<!-- 自营产品 -->
		<view class="selfProduct">
			<view class="title">
				<text>自营产品</text>
			</view>
			
			<view class="productList">
				<selfProduct></selfProduct>
				<u-line></u-line>
			</view>
		</view>
		
		<!-- 入驻产品 -->
		<view class="otherProduct">
			<view class="title">
				<text>入驻产品</text>
				
			</view>
			<view class="productList">
				<otherProduct></otherProduct>
				<u-line></u-line>
			</view>
		</view>
		
		<!-- 检测次数购买 -->
		<view class="times">
			<view class="title">
				<text>检测次数购买</text>
			</view>
			
			<view class="menu">
				
				<!-- 买1次 -->
				<view
					class="buyOne"
				>
					<view class="tit">
						尝鲜体验
					</view>
					
					<view class="body">
						<view class="discription">
							<text>单次检测机会</text>
							
						</view>
						<view class="money">
							<text>￥10</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">原价出售，一次10元</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
						
					</view>
					
				</view>
				
				<u-line></u-line>
				
				<!-- 买5次 -->
				<view
					class="buyFive"
				>
					<view class="tit">
						普通套餐
					</view>
					
					<view class="body">
						<view class="discription">
							<text>5次检测机会</text>
							
						</view>
						<view class="money">
							<text>￥45</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">9折优惠，每次9元</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
					
				</view>
				
				<u-line></u-line>
				
				<!-- 买15次 -->
				<view
					class="buyFifteen"
				>
					<view class="tit">
						豪华套餐
					</view>
					
					<view class="body">
						<view class="discription">
							<text>15次检测机会</text>
							
						</view>
						<view class="money">
							<text>￥120</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">8折优惠，每次8元</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
					
				</view>
				
				<u-line></u-line>
				
				<!-- 买50次 -->
				<view
					class="buyFifty"
				>
					<view class="tit">
						至尊套餐
					</view>
					
					<view class="body">
						<view class="discription">
							<text>60次检测机会</text>
							
						</view>
						<view class="money">
							<text>￥420</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">7折优惠，每次7元</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
				</view>
				
				<u-line></u-line>
				
				<!-- 月卡 -->
				<view class="buyMonth">
					<view class="tit">
						<text>月度黄金会员</text>
					</view>
					
					<view class="body">
						<view class="discription">
							<text>无限次检测机会</text>
						</view>
						<view class="money">
							<text>￥88</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">单月无限次检测机会</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
				</view>
				
				<u-line></u-line>
				
				<!-- 季卡 -->
				<view class="buySeason">
					<view class="tit">
						<text>季度白金会员</text>
					</view>
					
					<view class="body">
						<view class="discription">
							<text>无限次检测机会</text>
						</view>
						<view class="money">
							<text>￥188</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">单季无限次检测机会</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
				</view>
				
				<u-line></u-line>
				
				<!-- 年卡 -->
				<view class="buyYear">
					<view class="tit">
						<text>年度钻石会员</text>
					</view>
					
					<view class="body">
						<view class="discription">
							<text>无限次检测机会</text>
						</view>
						<view class="money">
							<text>￥588</text>
						</view>
						
						<view class="onceDescription">
							<text class="description">单年无限次检测机会</text>
							
							<view class="buy" @click="buy">
								<text>立即抢购</text>
							</view>
						</view>
					</view>
				</view>
				
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
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
.home{
	background: #fff;
	display: flex;
	flex-direction: column;
	
	.selfProduct{
		display: flex;
		flex-direction: column;
		
		.title{
			padding: 50rpx 70rpx;
			background: #fff;
			background-image: linear-gradient(to top, gold, #fff);
			border-radius: 0 0 40rpx 40rpx;
			// border: solid 5rpx gold;
			
			text{
				font-weight: bold;
			}
		}
		
		// .productList{
		// 	background: #fff;
		// }
		
	}
	
	.otherProduct{
		.title{
			padding: 50rpx 70rpx;
			background: #fff;
			background-image: linear-gradient(to top, gold, #fff);
			border-radius: 0 0 40rpx 40rpx;
			// border: solid 5rpx gold;
			
			text{
				font-weight: bold;
			}
		}
	}
	
	.times{
		.title{
			padding: 50rpx 70rpx;
			background: #fff;
			background-image: linear-gradient(to top, gold, #fff);
			border-radius: 0 0 40rpx 40rpx;
			// border: solid 5rpx gold;
			
			text{
				font-weight: bold;
			}
		}
		
		.menu{
			// margin-top: 40rpx;
			background: #fff;
			
			.buyOne{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
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
						// padding-top: 30rpx;
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			
			.buyFive{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
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
						// padding-top: 30rpx;
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			.buyFifteen{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
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
						// padding-top: 30rpx;
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			.buyFifty{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
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
						// padding-top: 30rpx;
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			.buyMonth{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
				// justify-content: center;
				align-items: center;
				
				.tit{
					border-radius: 20rpx 20rpx 0 0;
					padding: 30rpx 30rpx;
					
					background: #2a251d;
					display: flex;
					align-items: center;
					justify-content: center;
					
					border: solid 5rpx #2a251d;
					width: 550rpx;
					
					text{
						font-weight: bold;
						color: #f9d89b;
					}
				}
				
				.body{
					padding: 30rpx 30rpx;
					// background: #fff4e0;
					background-image: linear-gradient(to bottom left, #fff9ef, #ffecc9);
					border-radius: 0 0 20rpx 20rpx;
					width: 550rpx;
					border: solid 5rpx #2a251d;
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;
					.discription{
						// padding-top: 30rpx;
						text{
							color: #744f06;
							font-weight: bold;
						}
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			
			.buySeason{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
				// justify-content: center;
				align-items: center;
				
				.tit{
					border-radius: 20rpx 20rpx 0 0;
					padding: 30rpx 30rpx;
					
					background: #2a251d;
					display: flex;
					align-items: center;
					justify-content: center;
					
					border: solid 5rpx #2a251d;
					width: 550rpx;
					
					text{
						font-weight: bold;
						color: #f9d89b;
					}
				}
				
				.body{
					padding: 30rpx 30rpx;
					// background: #fff4e0;
					background-image: linear-gradient(to bottom left, #fff9ef, #ffecc9);
					border-radius: 0 0 20rpx 20rpx;
					width: 550rpx;
					border: solid 5rpx #2a251d;
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;
					.discription{
						// padding-top: 30rpx;
						text{
							color: #744f06;
							font-weight: bold;
						}
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
			
			
			.buyYear{
				margin: 20rpx 0;
				display: flex;
				flex-direction: column;
				margin: 40rpx 0rpx;
				background: #fff;
				// justify-content: center;
				align-items: center;
				
				.tit{
					border-radius: 20rpx 20rpx 0 0;
					padding: 30rpx 30rpx;
					
					background: #2a251d;
					display: flex;
					align-items: center;
					justify-content: center;
					
					border: solid 5rpx #2a251d;
					width: 550rpx;
					
					text{
						font-weight: bold;
						color: #f9d89b;
					}
				}
				
				.body{
					padding: 30rpx 30rpx;
					// background: #fff4e0;
					background-image: linear-gradient(to bottom left, #fff9ef, #ffecc9);
					border-radius: 0 0 20rpx 20rpx;
					width: 550rpx;
					border: solid 5rpx #2a251d;
					display: flex;
					flex-direction: column;
					// justify-content: center;
					align-items: center;
					.discription{
						// padding-top: 30rpx;
						text{
							color: #744f06;
							font-weight: bold;
						}
					}
					.money{
						padding: 30rpx 0;
						text{
							font-weight: bold;
						}
						
					}
					
					.onceDescription{
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						
						.description{
							color: #8c8c8c;
							font-weight: bold;
							font-size: 27rpx;
						}
						
						.buy{
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
	}
	
}
</style>
