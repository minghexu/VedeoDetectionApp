<template>
	<view class="detail">
		<!-- 以下为详情页主要信息 -->
		<view class="container">				
			
			<view class="loadState" v-show="loadState">
				<u-skeleton
					rows="5"
					title
					loading
				></u-skeleton>
			</view>
			
				
			<!-- 用户信息 -->
			<view v-show="!loadState" class="userinfo">
				<!-- 用户头像 -->
				<view class="avatar">
					<!-- :src="userTemp.avatar_file ? userTemp.avatar_file.url : '../../static/images/user-default.jpg'" -->
					<image 
						:src="userTemp.avatar_file ? userTemp.avatar_file.url : '../../static/images/user-default.jpg'"
						mode="aspectFill"
					></image>
				</view>
				
				<!-- 用户姓名和发布时间 -->
				<view class="text">
					<view class="name">
						{{userTemp.nickname ? userTemp.nickname : userTemp.username}}
					</view>
					<view class="small">
						<uni-dateformat
							:date="artTemp.publish_date"
							format="MM月dd hh:mm"
							:threshold="[60000,3600000*24*30]"
						></uni-dateformat>发布
					</view>
				</view>
			</view>
				
			<!-- 详情信息 -->
			<view class="content" v-show="!loadState">
				{{artTemp.content}}
			</view>
			
			<!-- 尾端图片 -->
				
			<!-- 点赞按钮 -->
			<view class="like">
				<view class="btn active" @click="clickLike">
					<text class="iconfont icon-good-fill"></text>
					<!-- <text>
						{{artTemp.like_count}}
					</text> -->
				</view>
				<view class="users">
					<image :src="userInfo.avatar_file.url" mode="aspectFill"></image>
				</view>				
				<view class="text">
					<text class="num">
						{{artTemp.view_count}}
					</text>人看过
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	const db=uniCloud.database();
	const utilsObj=uniCloud.importObject("utilsObj");
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	
	export default {
		data() {
			return {
				artId:"",
				blogUserId:"",
				artTemp:Object,
				userTemp:Object,
				dataList:[],
				loadState:true,
				detailObj:Object
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
		
		onLoad(e){
			// console.log(e);
			this.artId=e.id;
			// console.log(this.artid);
			this.blogDetailGetData();
			this.readUpdate();
			// this.blogGetData()
		},
		
		methods:{
			// 点赞操作
			async clickLike(){
				let count=await db.collection("articleLike")
				.where(`article_id=="${this.artId}" && user_id==$cloudEnv_uid`).count()
				
				if(count.result.total){
					db.collection("articleLike").where(`article_id=="${this.artId}" && user_id==$cloudEnv_uid`)
					.remove();
				}else{
					db.collection("articleLike").add({
						article_id: this.artId
					})
				}
				
				
			},
			
			// 阅读量自增
			readUpdate(){
				utilsObj.operation("communityBlog","view_count",this.artId,1).then(res=>{
					// console.log(res);
				})
			},
			
			//获取数据
			blogDetailGetData(){
				//blog信息数据库
				db.collection("communityBlog").doc(this.artId).get().then(res=>{
					// console.log(res);
					this.artTemp=res.result.data[0];
					// console.log(this.artTemp);
					this.blogUserId=res.result.data[0].user_id;
					// console.log(this.blogUserId);
					
					//发帖人信息数据库 划重点：因为异步查询底下这段只能嵌套，不能放外面
					db.collection("uni-id-users").where({
						_id: this.blogUserId
					}).field("username,nickname,avatar_file").get().then(res=>{
						// console.log(res);
						this.userTemp=res.result.data[0];
						console.log(this.userTemp);
						this.loadState=false;
					})
				})
			},
			
			//获取数据plus
			// blogGetData(){
			// 	let artTemp= db.collection("communityBlog").where(`_id=="${this.artId}"`).getTemp();
			// 	let userTemp=db.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp()
			// 	// console.log(userTemp);
			// 	let likeTemp=db.collection("articleLike").getTemp();
			// 	db.collection(artTemp,userTemp,likeTemp).where(`_id=="${this.artId}"`).get({
			// 		getOne:true
			// 	}).then(res=>{
			// 		// console.log(res);
			// 		this.detailObj=res.result.data
			// 		console.log(this.detailObj);
			// 		this.loadState=false;
			// 	})
			// }

		}
	}
</script>

<style lang="scss">
.detail{
	background: #f8f8f8;
	min-height: calc(100vh - var(--window-top));
	.container{
		padding:30rpx;	
		background: #fff;
		.title{
			font-size: 46rpx;
			color:#333;
			line-height: 1.4em;
			font-weight: 600;
		}
		
		.userinfo{
			padding:20rpx 0 50rpx;
			display: flex;
			align-items: center;
			// border: 3rpx solid orangered;
			
			.avatar{
				width: 60rpx;
				height: 60rpx;
				margin-right: 23rpx;
				// border: 3rpx solid blue;
				
				
				image{
					width: 100%;
					height: 100%;
					border-radius: 50%;
					// border: 3rpx solid mediumpurple;
				}
			}
			
			.text{
				font-size: 28rpx;
				color:#555;
				
				.name{
					// font-weight: bold;
				}
				
				.small{
					font-size: 20rpx;
					color:#999;
				}
			}
		}
		.content{
			
		}
		.like{
			display: flex;
			flex-direction: column;
			align-items: center;
			padding:80rpx 50rpx 50rpx;
			.btn{
				width: 260rpx;
				height: 120rpx;
				background: #e4e4e4;
				border-radius: 100rpx;
				color:#fff;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				font-size: 28rpx;
				.iconfont{
					font-size: 50rpx;
				}
				&.active{
					background: #0199FE;
				}
			}
			.text{
				font-size: 26rpx;
				color:#666;				
				.num{
					color:#0199FE
				}
				.spot{
					padding:0 10rpx;
				}
			}
			.users{
				display: flex;
				justify-content: center;
				padding:30rpx 0;
				image{
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					border:3px solid #fff;
					margin-left:-20rpx;
				}
			}
		}
		
	}
	.comment{
		padding:30rpx;
		padding-bottom:120rpx;
		.item{
			padding:10rpx 0;
		}
	}
}
</style>
