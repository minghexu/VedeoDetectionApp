<template>
	<view class="home" @pullDownRefresh="onPullDownRefresh">
		<!-- 顶部滚动条 -->
		<view class="topnav">
			<u-tabs :list="navlist"
				:activeStyle="{
					color: '#303133',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}"
				:inactiveStyle="{
						color: '#8a8a8a',
						transform: 'scale(1)'
					}"
				@click="clickNav">
			</u-tabs>
		</view>
		
		<!-- 骨架屏 -->
		<view class="loadingState" v-show="loadingState">
			<u-skeleton
				rows="4"
				title
				loading
			></u-skeleton>
		</view>
		
		<!-- 底下内容 -->
		<view class="content">

			<!-- 关于抑郁症 -->
			<view class="itemyiyuzheng" v-if="current==0" v-for="item in yiyuzhengDataList">
				<yiyuzhengnewsbox class="box" :item="item"></yiyuzhengnewsbox>
				<u-line></u-line>
			</view>
			
			<!-- 关于帕金森 -->
			<view class="itempajinsen" v-if="current==1" v-for="item in pajinsenDataList">
				<pajinsennewsbox class="box" :item="item"></pajinsennewsbox>
				<u-line></u-line>
			</view>
			
			<!-- 医路康办 -->
			<!-- <view class="yilukangban">
				<supernewsbox></supernewsbox>
			</view> -->
		</view>
	</view>
</template>

<script>
	const db=uniCloud.database();
	export default {
		data() {
			return {
				navlist:[
					{
						name:"阳光日报：抑郁症最新消息"
					},
					{
						name:"青年日报：帕金森最新消息"
					}
				],
				current: 0,
				
				yiyuzhengDataList:[],
				pajinsenDataList:[],
				yilukangbanDataList:[],
				loadingState:true,
				
			}
		},
		onLoad(){
			this.yilukangbanGetData();
			this.yiyuzhengGetData();
			this.pajinsenGetData();
		},
		
		methods:{
			onPullDownRefresh() {
				// 根据当前选项刷新对应的数据
				if (this.current === 0) {
					this.yiyuzhengGetData();
				} else if (this.current === 1) {
					this.pajinsenGetData();
				} else {
					this.yilukangbanGetData();
				}
			},
			
			// 在 医路康办文章 数据库取数据
			yilukangbanGetData(){
				this.loadingState=true;
			},
			
			// 在 抑郁症文章 数据库取数据
			yiyuzhengGetData(){
				db.collection("yiyuzhengArticle").orderBy("publish_date desc").get().then(res=>{
					console.log(res);
					this.yiyuzhengDataList=res.result.data;
					this.loadingState=false;
				})
			},
			
			// 在 帕金森文章 数据库取数据
			pajinsenGetData(){
				db.collection("pajinsenArticle").orderBy("publish_date desc").get().then(res=>{
					// console.log(res);
					this.pajinsenDataList=res.result.data;
					this.loadingState=false;
				})
			},
			
			// 点击顶部滚动条
			clickNav(e){
				// console.log(e);
				// this.loadingState=true;
				// this.yilukangbanDataList=[];
				// this.yiyuzhengDataList=[];
				// this.pajinsenDataList=[];
				this.current=e.index;
			}
		}
		
	}
</script>

<style lang="scss" scoped>
.home{
	.topnav{
		margin-bottom: 30rpx;	//在底部留出空间
	}
	.loadingState{
		padding: 30rpx;		//上下左右的边框
	}
	.content{
		padding: 30rpx;		//上下左右边框
		.itemyiyuzheng{
			margin-bottom: 30rpx;
			.box{
				margin-bottom: 30rpx;
			}
		}
		
		.itempajinsen{
			margin-bottom: 30rpx;
			.box{
				margin-bottom: 30rpx;
			}
		}
		
		.yilukangban{
			
		}
		.rowyiyuzheng{
			border-bottom: 1px dashed #efefef;		//加下边框 虚线
			padding: 25rpx 0;		//上下15 左右0
		}
		.rowpajinsen{
			
		}
	}
	// .topnav{
	// 	.navScroll{
	// 		height: 100rpx;
	// 		background: #f7f8fa;
	// 		white-space: nowrap;			//父级中要求内部元素不换行
	// 		.item{
	// 			font-size: 40rpx;
	// 			display: inline-block;
	// 			line-height: 100rpx;		//内部元素和父级元素行高一致
	// 			padding: 0 30rpx;
	// 			color: #515151;
	// 		}
	// 	}
	// }
}
</style>
