<template>
	<view class="detail">
		<view class="title">
			{{contentTemp.title}}
		</view>
		<view class="info">
			<view class="viewCount">
				{{contentTemp.view_count}}浏览量
			</view>
			<view class="time">
				<uni-dateformat
					:date="contentTemp.publish_date"
					format="MM月dd hh:mm"
					:threshold="[60000,3600000*24*30]"
				></uni-dateformat>
			</view>
		</view>
		<view class="content">
			{{contentTemp.content}}
		</view>
		<view class="description">
			声明：
		</view>
	</view>
</template>

<script>
	const db=uniCloud.database();
	const utilsObj=uniCloud.importObject("utilsObj");
	export default {
		data() {
			return {
				artId:"",
				contentTemp:Object,
			};
		},
		onLoad(e){
			this.artId=e.id;
			this.detailGetData();
			this.readUpdate();
		},
		methods:{
			readUpdate(){
				utilsObj.operation("pajinsenArticle","view_count",this.artId,1).then(res=>{
					// console.log(res);
				})
			},
			
			detailGetData(){
				db.collection("pajinsenArticle").doc(this.artId).get().then(res=>{
					// console.log(res);
					this.contentTemp=res.result.data[0];
				})
			}
		}
	}
</script>

<style lang="scss">
.detail{
	padding: 30rpx;
	.title{
		font-size: 46rpx;
		color: #333;
	}
	.info{
		background: #f6f6f6;
		padding:20rpx 10rpx;
		font-size: 25rpx;
		color: #666;
		display: flex;
		justify-content: space-between;
		margin: 40rpx 0;
	}
	.content{
		padding-bottom: 50rpx;
	}
	.description{
		background:#fef0f0;
		font-size:26rpx;
		padding:20rpx;
		color:#f89898;
		line-height: 1.8em;
	}
}
</style>
