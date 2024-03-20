<template>
	<view class="home" @pullDownRefresh="onPullDownRefresh">
		<!-- 首页头部背景图 -->
		<view class="head">
			<view class="bg">
				<image class="bgimg" src="../../static/images/bg.png" mode="aspectFill"></image>
			</view>
		</view>
		
		<!-- 底下的所有部分封装在一个盒子里 -->
		<view class="body">
			
			<!-- 健康中心 里面是一个横向滚动列表 包括抑郁症 两大部分康复文章推送 参考小猴搜题 -->
			<view class="healthCenter">
				<view class="title">
					<text class="left">暖心推文</text>
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				<u-line></u-line>
				
				<view class="healthCenterBody">
					<u-scroll-list class="scroll" :indicator="indicator" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
						<view class="pic" v-for="(item,index) in healthList" :key="index" @click="clickPic(item._id)">
							<image :src="item.pictures[0]" mode="widthFix"></image>
						</view>
					</u-scroll-list>
				</view>
				
			</view>
			
			<!-- 自我检测 两个按钮 -->
			<view class="selfDetect">
				<view class="twoButton">
					
					<!-- 左面的帕金森检测按钮 -->
					<view class="left" @click="goPhoto">
						<view class="leftText">
							帕金森检测
						</view>
						<view class="rightText">
							<text class="iconfont icon-a-117-yiliao"></text>
						</view>
					</view>
					
					<!-- 右面的查询按钮 -->
					<view class="right" @click="goPhotoYiyuzheng">
						<view class="leftText">
							抑郁症检测
						</view>
						<view class="rightText">
							<text class="iconfont icon-a-1-sousuo"></text>
						</view>
					</view>
					
					<!-- 综合检测按钮 -->
					<view class="together" @click="goPhotoTogether">
						<view class="leftText">
							综合性检测
						</view>
						<view class="rightText">
							<text class="iconfont icon-a-183-xitong"></text>
						</view>
					</view>
					
				</view>
			</view>
			
			<!-- 关于我们 -->
			<view class="aboutUs" @click="aboutUs">
				<!-- 里面放一些团队荣誉介绍啦等等 -->
				<view class="title">
					<text class="left">关于我们</text>
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				<u-line></u-line>
				
				<view class="aboutUsBody">
					<!-- 团队介绍 -->
					<view class="intro">
						<view class="pic">
							<image src="../../static/images/us.png" mode="aspectFit"></image>
						</view>
						<view class="txt">
							团队介绍
						</view>
					</view>
					
					<!-- 产品概况 -->
					<view class="product">
						<view class="pic">
							<image src="../../static/images/buy.png" mode="aspectFit"></image>
						</view>
						<view class="txt">
							产品概况
						</view>
					</view>
					
					<!-- 合作企业 -->
					<view class="cooper">
						<view class="pic">
							<image src="../../static/images/colleboration.png" mode="aspectFit"></image>
						</view>
						<view class="txt">
							合作单位
						</view>
					</view>
				</view>
				
			</view>
			
			<!-- 医路日报 -->
			<view class="news">
				
				<!-- 里面分两个部分 阳光日报 少年日报 -->
				<view class="title" @click="goNews">
					<text class="left">医路日报</text>
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				<u-line></u-line>
				
				<!-- 阳光日报 -->
				<view class="sunshine">
					<view class="left">
						<text>阳光日报</text>
						<view class="detail">
							<text>抑郁症研究最新消息</text>
						</view>
					</view>
					
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				<view class="newsSunshine" v-for="item in sunshineDataList">
					<indexSunshineNews :item="item"></indexSunshineNews>
				</view>
				
				<!-- 青年日报 -->
				<view class="youngster">
					<view class="left">
						<text>青年日报</text>
						<view class="detail">
							<text>帕金森研究最新消息</text>
						</view>
					</view>
					
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				<view class="newsYoungster" v-for="item in youngsterDataList">
					<indexYoungsterNews :item="item"></indexYoungsterNews>
				</view>
				
				<!-- 底部 -->
				<view class="bottom" @click="goNews">
					<text class="left">更多</text>
					<view class="right">
						<text class="iconfont icon-a-10-you"></text>
					</view>
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	const db=uniCloud.database()
	//把uni-id里面的用的东西导进来
	import{
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	
	export default {
		data() {
			return {
				title: 'Hello',
				sunshineDataList: [],
				youngsterDataList: [],
				indicator: true,
				healthList: [],
				artId:"",
				result:0
			}
		},
		
		computed:{
			hasLogin(){
				return store.hasLogin
			}
		},
		
		onLoad() {
			this.sunshineGetData(),
			this.youngsterGetData(),
			this.yilukangbanGetData()
			
		},
		
		methods: {
			onPullDownRefresh() {
				// 重新请求数据
				this.sunshineGetData();
				this.youngsterGetData();
				this.yilukangbanGetData();
			
				// 停止下拉刷新动画
				uni.stopPullDownRefresh();
			},
			
			// 前往新闻页面
			goNews(){
				uni.navigateTo({
					url:"/pages/news/news"
				})
			},
						
			//aboutus跳转
			aboutUs(){
				uni.navigateTo({
					url: "/pages/aboutus/aboutus"
				})
			},
			
			//点击不同的暖文推送跳转到不同的页面
			clickPic(e){
				// console.log(e);
				
				uni.navigateTo({
					url: "/pages/articleDetail/articleDetail?id="+e
				})
			},
			
			// 在 医路康办文章 数据库取数据
			yilukangbanGetData(){
				db.collection("yilukangbanArticle").get().then(res=>{
					// console.log(res);
					this.healthList=res.result.data;
				})
			},
			
			// 阳光日报新闻逻辑
			sunshineGetData(){
				db.collection("yiyuzhengArticle").get().then(res=>{
					// console.log(res);
					this.sunshineDataList=res.result.data;
				})
			},
			
			// 青年日报新闻逻辑
			youngsterGetData(){
				db.collection("pajinsenArticle").get().then(res=>{
					// console.log(res);
					this.youngsterDataList=res.result.data;
				})
			},
			
			
			////////////////////////////////////////////////////////////////
			
			
			// 点击上传视频 底下的所有代码都是和上传视频有关的逻辑
			goPhoto(){
				if (this.hasLogin) {
					uni.showActionSheet({
						// alertText:"选择上传视频方式",
						itemList: ['相机录制' , '从相册中选择' , '相机录制（若已插入传感器）' , '从相册中选择（若已插入传感器）'],
						success: (res) =>{
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							switch(res.tapIndex){
								case 0: this.cameraUpload();
									break;
								case 1: this.albumUpload();
									break;
								case 2: this.cameraUpload();
									break;
								case 3: this.albumUpload();
									break;
							}
						},
						fail: (res) =>{
							console.log(res.errMsg);
						}
					})
				} else {
					// 未登录，跳转到登录页面
				    uni.navigateTo({
						url:'/uni_modules/uni-id-pages/pages/login/login-withpwd',
				    })
				}
			},
			
			// 将视频文件上传到服务器统一封装函数
			uploadVideo(videoPath) {
				console.log(videoPath);
				uni.showLoading({
				    title: '检测中，请稍后...',
				    mask: true  // 是否显示透明蒙层，防止用户触摸操作
				});
				uni.uploadFile({
					url: 'http://zzk.vip.cpolar.cn', // 替换为您的上传接口 URL
					filePath: videoPath, // 要上传的文件路径
					name: 'file', // 服务器接收的文件字段名
					formData: {
						// 可选的额外参数，如 token 等
						// 'token': 'YOUR_TOKEN'
					},
					
					success: (uploadRes) => {
						this.result=uploadRes.data;
						console.log(this.result);
											
						// 解析 JSON 字符串，将其转换为 JavaScript 对象
						const resultObject = JSON.parse(this.result);
						console.log(resultObject);

						const obj=JSON.stringify(resultObject);
						console.log(obj);
						
						uni.hideLoading();
						
						uni.navigateTo({
							url: "/pages/result/result?key="+encodeURIComponent(JSON.stringify(resultObject))
						})
						
					},
					fail: (err) => {
						console.error('视频上传失败', err);
						uni.showToast({
							title: '视频上传失败',
							icon: 'none'
						});
					},
					
				});
			},
			
			//拍摄视频上传
			cameraUpload(){
				uni.chooseVideo({
					sourceType:['camera'],
					maxDuration:60,
					camera:'front',
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideo(tempVideoPath);
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
				// uni.navigateTo({
				// 	url:"/pages/result/result"
				// })
			},
			
			//相册选择视频上传
			albumUpload(){
				uni.chooseVideo({
					sourceType:['album'],
					maxDuration:60,
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideo(tempVideoPath);
						
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
			},
			
			
			///////////////////////////////////////////////////////////
			
			
			// 点击上传视频 底下的所有代码都是和上传视频有关的逻辑
			goPhotoYiyuzheng(){
				if (this.hasLogin) {
					uni.showActionSheet({
						// alertText:"选择上传视频方式",
						itemList: ['相机录制' , '从相册中选择' , '相机录制（若已插入传感器）' , '从相册中选择（若已插入传感器）'],
						success: (res) =>{
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							switch(res.tapIndex){
								case 0: this.cameraUploadYiyuzheng();
									break;
								case 1: this.albumUploadYiyuzheng();
									break;
								case 2: this.cameraUploadYiyuzheng();
									break;
								case 3: this.albumUploadYiyuzheng();
									break;
							}
						},
						fail: (res) =>{
							console.log(res.errMsg);
						}
					})
				} else {
					// 未登录，跳转到登录页面
				    uni.navigateTo({
						url:'/uni_modules/uni-id-pages/pages/login/login-withpwd',
				    })
				}
			},
			
			// 将视频文件上传到服务器统一封装函数
			uploadVideoYiyuzheng(videoPath) {
				console.log(videoPath);
				uni.showLoading({
				    title: '检测中，请稍后...',
				    mask: true  // 是否显示透明蒙层，防止用户触摸操作
				});
				uni.uploadFile({
					url: 'http://zzk.vip.cpolar.cn', // 替换为您的上传接口 URL
					filePath: videoPath, // 要上传的文件路径
					name: 'file', // 服务器接收的文件字段名
					formData: {
						// 可选的额外参数，如 token 等
						// 'token': 'YOUR_TOKEN'
					},
					
					success: (uploadRes) => {
						this.result=uploadRes.data;
						console.log(this.result);
											
						// 解析 JSON 字符串，将其转换为 JavaScript 对象
						const resultObject = JSON.parse(this.result);
						console.log(resultObject);
			
						const obj=JSON.stringify(resultObject);
						console.log(obj);
						
						uni.hideLoading();
						
						uni.navigateTo({
							url: "/pages/yiyuzhengResult/yiyuzhengResult?key="+encodeURIComponent(JSON.stringify(resultObject))
						})
						
					},
					fail: (err) => {
						console.error('视频上传失败', err);
						uni.showToast({
							title: '视频上传失败',
							icon: 'none'
						});
					},
					
				});
			},
			
			//拍摄视频上传
			cameraUploadYiyuzheng(){
				uni.chooseVideo({
					sourceType:['camera'],
					maxDuration:60,
					camera:'front',
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideoYiyuzheng(tempVideoPath);
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
				// uni.navigateTo({
				// 	url:"/pages/result/result"
				// })
			},
			
			//相册选择视频上传
			albumUploadYiyuzheng(){
				uni.chooseVideo({
					sourceType:['album'],
					maxDuration:60,
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideoYiyuzheng(tempVideoPath);
						
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
			},
			
			///////////////////////////////////////////////////////////////
			
			
			
			// 点击上传视频 底下的所有代码都是和上传视频有关的逻辑
			goPhotoTogether(){
				if (this.hasLogin) {
					uni.showActionSheet({
						// alertText:"选择上传视频方式",
						itemList: ['相机录制' , '从相册中选择' , '相机录制（若已插入传感器）' , '从相册中选择（若已插入传感器）'],
						success: (res) =>{
							console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
							switch(res.tapIndex){
								case 0: this.cameraUploadTogether();
									break;
								case 1: this.albumUploadTogether();
									break;
								case 2: this.cameraUploadTogether();
									break;
								case 3: this.albumUploadTogether();
									break;
							}
						},
						fail: (res) =>{
							console.log(res.errMsg);
						}
					})
				} else {
					// 未登录，跳转到登录页面
				    uni.navigateTo({
						url:'/uni_modules/uni-id-pages/pages/login/login-withpwd',
				    })
				}
			},
			
			// 将视频文件上传到服务器统一封装函数
			uploadVideoTogether(videoPath) {
				console.log(videoPath);
				uni.showLoading({
				    title: '检测中，请稍后...',
				    mask: true  // 是否显示透明蒙层，防止用户触摸操作
				});
				uni.uploadFile({
					url: 'http://zzk.vip.cpolar.cn', // 替换为您的上传接口 URL
					filePath: videoPath, // 要上传的文件路径
					name: 'file', // 服务器接收的文件字段名
					formData: {
						// 可选的额外参数，如 token 等
						// 'token': 'YOUR_TOKEN'
					},
					
					success: (uploadRes) => {
						this.result=uploadRes.data;
						console.log(this.result);
											
						// 解析 JSON 字符串，将其转换为 JavaScript 对象
						const resultObject = JSON.parse(this.result);
						console.log(resultObject);
			
						const obj=JSON.stringify(resultObject);
						console.log(obj);
						
						uni.hideLoading();
						
						uni.navigateTo({
							url: "/pages/result/result?key="+encodeURIComponent(JSON.stringify(resultObject))
						})
						
					},
					fail: (err) => {
						console.error('视频上传失败', err);
						uni.showToast({
							title: '视频上传失败',
							icon: 'none'
						});
					},
					
				});
			},
			
			//拍摄视频上传
			cameraUploadTogether(){
				uni.chooseVideo({
					sourceType:['camera'],
					maxDuration:60,
					camera:'front',
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideoTogether(tempVideoPath);
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
				// uni.navigateTo({
				// 	url:"/pages/resultTogether/resultTogether"
				// })
			},
			
			//相册选择视频上传
			albumUploadTogether(){
				uni.chooseVideo({
					sourceType:['album'],
					maxDuration:60,
					success:(res)=>{
						const tempVideoPath = res.tempFilePath; // 获取视频临时文件路径
						this.uploadVideo(tempVideoPath);
						
					},
					fail:(res)=>{
						uni.showToast({
							title: '视频时间过长',
							icon:"none"
						});
					}
				})
			}
			
			
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
	
	.head{
		height: 470rpx;
		overflow: hidden;
		border-radius: 0 0 15% 15%;
		// border: 5rpx solid orangered;
		
		.bg{
			width: 100%;
			height: 100%;
			
			.bgimg{
				width: 100%;
				height: 100%;
				//以上部分的意义在于让图片百分百填充在父模型中，避免溢出来和填不满
			}
		}
	}
	
	.body{
		flex: 1;		//在弹性盒模型下全部填充
		margin-top: -50rpx;
		// border: 5rpx solid purple;
		
		.healthCenter{
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
			
			.healthCenterBody{
				// border: 5rpx solid deeppink;
				flex: 1;
				
				.scroll{
					// border: 5rpx solid greenyellow;
					flex: 1;
					
					.pic{
						// border: 5rpx solid orange;
						flex: 1;
						height: 350rpx;
					}
				}
			}
		}
		
		.selfDetect{
			display: flex;
			flex-direction: column;
			// border: 5rpx solid deeppink;
			margin: 30rpx 30rpx;		//外边距：上下20，左右50
			padding: 0rpx, 30rpx;		//内边距
			border-radius: 25rpx;		//圆角
			
			.twoButton{
				display: flex;
				justify-content: space-between;		//对齐格式：两端对齐
				align-items: center;		//让内部元素垂直居中与页面中心
				// border: 5rpx solid yellow;
				
				.left{
					display: flex;
					flex-direction:column;
					align-items: center;
					justify-content: center;
					
					flex-grow: 1;		//让弹性盒自动变长直到触碰到硬边界
					height: 170rpx;
					// background: #fe4690;
					background-image: linear-gradient(to bottom right, #338aff, #76dffc);
					// margin-right: 15rpx;
					// border: 5rpx solid indianred;
					border-radius: 25rpx;		//圆角
					
					.leftText{
						padding-right: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						// font-family: ;
						color: #fff;
					}
					
					.rightText{
						padding-left: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #fff;
					}
				}
				
				.right{
					display: flex;
					flex-direction:column;
					align-items: center;
					justify-content: center;
					
					flex-grow: 1;		//让弹性盒自动变长直到触碰到硬边界
					height: 170rpx;
					// background: #76dffc;
					background-image: linear-gradient(to bottom right, #ffaf02, #ffe38a);
					margin-left: 15rpx;
					// border: 5rpx solid seagreen;
					border-radius: 25rpx;		//圆角
					
					.leftText{
						padding-right: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #fff;
					}
					
					.rightText{
						padding-left: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #fff;
					}
				}
				
				.together{
					display: flex;
					flex-direction:column;
					align-items: center;
					justify-content: center;
					
					flex-grow: 1;		//让弹性盒自动变长直到触碰到硬边界
					height: 170rpx;
					// background: #76dffc;
					// #fe8c30 #ffcea6
					background-image: linear-gradient(to bottom right, #ff5e42, #ffc1a2);
					margin-left: 15rpx;
					// border: 5rpx solid seagreen;
					border-radius: 25rpx;		//圆角
					
					.leftText{
						padding-right: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #fff;
					}
					
					.rightText{
						padding-left: 7rpx;
						font-size: 40rpx;
						font-weight: bold;
						color: #fff;
					}
				}
			}
		}
		
		.aboutUs{
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
			
			.aboutUsBody{
				display: flex;
				padding: 20rpx 30rpx;
				justify-content: space-between;	
				
				.intro{
					display: flex;
					flex-direction: column;
					align-items: center;
					.pic{
						
						width: 200rpx;
						height: 150rpx;
						image{
							border-radius: 20rpx;
							width: 100%;
							height: 100%;
							flex: 1;
						}
					}
					.txt{
						margin: 20rpx 0;
					}
				}
				
				.product{
					display: flex;
					flex-direction: column;
					align-items: center;
					.pic{
						
						width: 200rpx;
						height: 150rpx;
						image{
							border-radius: 20rpx;
							width: 100%;
							height: 100%;
							flex: 1;
						}
					}
					.txt{
						margin: 20rpx 0;
					}
				}
				
				.cooper{
					display: flex;
					flex-direction: column;
					align-items: center;
					
					.pic{
						width: 200rpx;
						height: 150rpx;
						image{
							border-radius: 20rpx;
							width: 100%;
							height: 100%;
							flex: 1;
						}
					}
					
					.txt{
						margin: 20rpx 0;
					}
				}
			}
		}
		
		.news{
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
			
			.sunshine{
				display: flex;
				// padding: 20rpx 30rpx;
				padding-top: 50rpx;
				padding-bottom: 20rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				align-items: center;
				justify-content: space-between;
				
				.left{
					display: flex;
					// border: 5rpx solid #76dffc;
					align-items: center;
					
					.detail{
						display: flex;
						// border: 5rpx solid #76dffc;
						height: 30rpx;
						border-radius: 7rpx;
						margin-left: 15rpx;
						padding: 5rpx 7rpx;
						background-color: #fa374b;
						align-items: center;
						
						text{
							color: #fff;
							font-size: 23rpx;
						}
					}
				}
			}
			
			.newsSunshine{
				padding: 0rpx 30rpx;
			}
			
			.youngster{
				display: flex;
				padding-top: 50rpx;
				padding-bottom: 20rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				align-items: center;
				justify-content: space-between;
				
				.left{
					display: flex;
					// border: 5rpx solid #76dffc;
					align-items: center;
					
					.detail{
						display: flex;
						// border: 5rpx solid #76dffc;
						height: 30rpx;
						border-radius: 7rpx;
						margin-left: 15rpx;
						padding: 5rpx 7rpx;
						background-color: #fa374b;
						align-items: center;
						
						text{
							color: #fff;
							font-size: 23rpx;
						}
					}
				}
			}
			
			.newsYoungster{
				padding: 0rpx 30rpx;
			}
			
			.bottom{
				display: flex;
				justify-content: right;
				padding: 20rpx 30rpx;
				
				.left{
					// font-weight: bold;
					font-size: 28rpx;
					color: #d3d3d3;
				}
				.right{
					// font-weight: bold;
					font-size: 28rpx;
					color: #d3d3d3;
				}
			}
		}
	}
}
</style>





