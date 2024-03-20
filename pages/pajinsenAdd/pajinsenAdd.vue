<template>
	<view class="edit">
		<form @submit="onSubmit">
			<!-- 输入标题 -->
			<view class="item">
				<input name="title" placeholder="请输入标题" @input="checkTitle"></input>
			</view>
			
			<!-- 输入内容 -->
			<view class="item">
				<textarea maxlength="20000" name="content" placeholder="请输入内容"></textarea>
			</view>
			
			<!-- 选择图片 -->
			<view class="item">
				<uni-file-picker 
					v-model="imageValue" 
					fileMediatype="image"
					:limit="1"
					mode="grid" 
					@success="uploadSuccess" 
					@select="selectSuccess"
				/>
			</view>
			
			<!-- 提交按钮 -->
			<view class="item">
				<u-button class="submitButton" form-type="submit" type="primary" 
					text="确认提交" :disabled="!isTitleAvailable">
				</u-button>
			</view>
		</form>
	</view>
</template>

<script>
	const db=uniCloud.database();
	export default {
		data() {
			return {
		        imageValue: [],		//双向绑定不用管
		        articleBlogObj: {
					title:"",
					content: "" ,
					pictures: []
		        },
		        isTitleAvailable: false
		    };
		},
		methods:{
			// 检查标题是否存在
			checkTitle(event) {
				// console.log(event);
				this.isTitleAvailable = event.target.value.trim().length > 0;
			},
			
			// 图片选择成功
			selectSuccess(e){
				console.log(e);
			},
			
			// 图片上传成功
			uploadSuccess(e){
				console.log(e);
				this.articleBlogObj.pictures=e.tempFilePaths;		//图片已经保存在pictures数组里了
			},
			
			// 点击提交
			onSubmit(e) {
			    // 检查标题是否存在
			    if (this.isTitleAvailable) {
					console.log(e);
					uni.showLoading({
						title:"发布中，请稍后"
					})
			        // 上传标题和文案内容
					this.articleBlogObj.title=e.detail.value.title;
					this.articleBlogObj.content=e.detail.value.content;
					
					db.collection("pajinsenArticle").add({
						...this.articleBlogObj
					}).then(res=>{
						console.log(res);
					})
					uni.hideLoading();
					uni.showToast({
						title:"发布成功"
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:"/pages/news/news"
						})
					},800)
			    }
			},
		}
	}
</script>

<style lang="scss">
.edit{
	padding: 30rpx;
	.item{
		padding-bottom: 20rpx;
		input{
			border:1rpx solid #eee;
			padding: 0 20rpx;
			height: 70rpx;
			width: 100%;
			box-sizing: border-box;
		}
		textarea{
			border:1rpx solid #eee;
			height: 80rpx;
			padding: 0 20rpx;		//上下0，左右20
			height: 200rpx;
			width: 100%;
			box-sizing: border-box;	
		}
		.submitButton{
			// 根据需要设置按钮样式
		}
	}
}
</style>
