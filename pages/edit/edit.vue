<template>
	<view class="edit">
		<form @submit="onSubmit">
			<!-- 输入内容 -->
			<view class="item">
				<textarea name="content" placeholder="请输入内容" @input="checkContent"></textarea>
			</view>
			
			<!-- 选择图片 -->
			<view class="item">
				<uni-file-picker 
					v-model="imageValue" 
					fileMediatype="image"
					:limit="3"
					mode="grid" 
					@success="uploadSuccess" 
					@select="selectSuccess"
				/>
			</view>
			
			<!-- 提交按钮 -->
			<view class="item">
				<u-button class="submitButton" form-type="submit" type="primary" 
					text="确认提交" :disabled="!isContentAvailable">
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
		        // pictures: [],
		        communityBlogObj: {
					content: "" ,
					description: "",
					pictures: []
		        },
		        isContentAvailable: false
		    };
		},
		methods:{
			// 检查内容是否存在
			checkContent(event) {
				// console.log(event);
				this.isContentAvailable = event.target.value.trim().length > 0;
			},
			
			// 图片选择成功
			selectSuccess(e){
				console.log(e);
			},
			
			// 图片上传成功
			uploadSuccess(e){
				console.log(e);
				this.communityBlogObj.pictures=e.tempFilePaths;		//图片已经保存在pictures数组里了
			},
			
			// 点击提交
			onSubmit(e) {
			    // 检查内容是否存在
			    if (this.isContentAvailable) {
					console.log(e);
					uni.showLoading({
						title:"发布中，请稍后"
					})
			        // 上传文案内容
					this.communityBlogObj.content=e.detail.value.content;
					this.communityBlogObj.description=e.detail.value.content.slice(0,80);
					
					db.collection("communityBlog").add({
						...this.communityBlogObj
					}).then(res=>{
						console.log(res);
					})
					uni.hideLoading();
					uni.showToast({
						title:"发布成功"
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:"/pages/community/community"
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
