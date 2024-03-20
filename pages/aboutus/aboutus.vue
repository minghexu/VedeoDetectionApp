<template>
	<view class="home">
		
		<!-- 团队介绍 -->
		<view class="teamIntro">
			<view class="title">
				<text class="left">团队介绍</text>
				<view class="right">
					<text class="iconfont icon-a-10-you"></text>
				</view>
			</view>
			<u-line></u-line>
			
			
			<view class="body">
				1. 团队成员情况:
				<br />
				&nbsp;&nbsp;我们的团队由一群具有广泛学科背景的博士、硕士和研究人员组成。每位成员在自己的领域都有深厚的学术造诣，包括但不限于计算机科学、工程学、物理学和生物学。团队成员的多元化背景使得我们能够从不同的角度解决复杂的科学问题。团队以赵玉良、吕晓勇、傅昌锃老师为指导老师，与博士李建、廉超合作，形成以邹智恺同学为首要负责人，硕士张华伟、刘英豪为主要负责人，其余本科学生为协助人员的本科生团队，团队一共15人，涉及多个领域，能高效完成各种任务
				每位团队成员都在国内外知名学术期刊和会议上发表了大量的学术论文，并且积极参与国际学术交流，保持与国际前沿科研的紧密联系。我们注重团队内部的沟通与合作，通过定期的研讨会和项目组会议，促进成员之间的学术交流和思想碰撞。
				<br />
				<br />
				2. 合作团队情况:
				<br />
				&nbsp;&nbsp;我们与多个国内外高校、科研机构和企业建立了紧密的合作关系。这种多方合作不仅加速了我们研究的进程，还为团队成员提供了更广阔的研究视野。我们鼓励开展跨学科研究，致力于将不同领域的知识和技术融合，以解决复杂的科学难题。目前，我们与秦皇岛市人民医院展开合作，与东软集团达成合作意向，受到东北大学秦皇岛分校的大力支持。
				<br />
				<br />
				3. 团队成果:
				<br />
				&nbsp;&nbsp;在科研成果方面，我们引以为傲的是我们在高水平期刊和会议上发表的一系列重要论文。这些论文涉及人工智能、生物医学工程等多个领域，其中一部分论文已被国际同行广泛引用。	我们的研究成果不仅体现在学术论文上，还在技术创新和应用落地方面取得了显著的成绩。
				尤其值得一提的是，我们团队致力于推动科技创新，取得了一系列实用性强、创新性显著的专利和软著。
				目前本团队已发表四篇论文，四篇论文均投中中科院一区期刊，三篇投中Expert Systems With Applications，影响因子为8.5，一篇投中IEEE Transactions on Affective Computing，影响因子11.9。
			</view>
			
		</view>
		
		
		<!-- 产品概况 -->
		<view class="product">
			<view class="title">
				<text class="left">产品概况</text>
				<view class="right">
					<text class="iconfont icon-a-10-you"></text>
				</view>
			</view>
			<u-line></u-line>
			
			
			<view class="body">
				产品概况
			</view>
			
		</view>
		
		<!-- 合作伙伴 -->
		<view class="partener">
			<view class="title">
				<text class="left">合作伙伴</text>
				<view class="right">
					<text class="iconfont icon-a-10-you"></text>
				</view>
			</view>
			<u-line></u-line>
			
			<view class="body">
				合作伙伴
			</view>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.home{
	// height: 100vh;		//home盒子内部元素不能撑大home盒子时让home盒子充满整个页面
	display: flex;
	flex-direction: column;		//弹性盒模型纵向排列（默认是横向）
	background-color: #f1f1f1;
	// border: 5rpx solid greenyellow;
	
	
	.teamIntro{
		display: flex;
		flex-direction: column;
		
		background: #fff;
		// height: 650rpx;
		// border: 5rpx solid blue;
		margin: 30rpx 30rpx;		//外边距：上下20，左右50
		border-radius: 25rpx;		//圆角
		position: relative;
		z-index: 1;
		
		.title{
			display: flex;
			height: 90rpx;
			// border: 5rpx solid orangered;
			
			padding: 0 30rpx;
			align-items: center;
			justify-content: space-between;		//弹性盒内对齐方式：两侧对齐
			
			.left{
				font-size: 35rpx;
				font-weight: bold;
			}
			
			.right{
				font-size: 35rpx;
				font-weight: bold;
			}
		}
		
		.body{
			padding: 30rpx;
			
		}
	}
	
	.product{
		background: #fff;
		// height: 370rpx;
		// border: 5rpx solid firebrick;
		margin: 30rpx 30rpx;		//外边距：上下20，左右50
		border-radius: 25rpx;		//圆角
		
		display: flex;
		flex-direction: column;
		background: #fff;
		// height: 370rpx;
		// border: 5rpx solid orangered;
		margin: 30rpx 30rpx;		//外边距：上下20，左右50
		border-radius: 25rpx;		//圆角
		
		.title{
			display: flex;
			height: 90rpx;
			// border: 5rpx solid orangered;
			
			padding: 0 30rpx;
			align-items: center;
			justify-content: space-between;		//弹性盒内对齐方式：两侧对齐
			
			.left{
				font-size: 35rpx;
				font-weight: bold;
			}
			
			.right{
				font-size: 35rpx;
				font-weight: bold;
			}
		}
		
		.body{
			padding: 30rpx;
		}
	}
	
	.partener{
		display: flex;
		flex-direction: column;
		background: #fff;
		// height: 370rpx;
		// border: 5rpx solid orangered;
		margin: 30rpx 30rpx;		//外边距：上下20，左右50
		border-radius: 25rpx;		//圆角
		
		.title{
			display: flex;
			height: 90rpx;
			// border: 5rpx solid orangered;
			
			padding: 0 30rpx;
			align-items: center;
			justify-content: space-between;		//弹性盒内对齐方式：两侧对齐
			
			.left{
				font-size: 35rpx;
				font-weight: bold;
			}
			
			.right{
				font-size: 35rpx;
				font-weight: bold;
			}
		}
		
		.body{
			padding: 30rpx;
		}

	}
}
</style>
