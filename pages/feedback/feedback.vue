<template>
	<view class="add">
		<form @submit="onSubmit">
			<!-- <view class="item">
				<input type="text" name="title" placeholder=""></input>
			</view>
			<view class="item">
				<input type="text" name="author"></input>
			</view> -->
			<view class="item">
				<textarea 
					v-model="formValue.content"
					name="content" 
					placeholder="输入反馈描述,适当的时候可配图便于我们沟通和解决问题喔!"
				></textarea>
			</view>
			
			
			<view class="item">
				<input 
					v-model="formValue.tel"
					type="text"
					name="tel"
					placeholder="留一下电话号码吧,方便我们联系你喔!"
				></input>
			</view>
			
			<view class="item">
				<uni-file-picker 
					v-model="imageValue" 
					fileMediatype="image" 
					mode="grid" 
					@success="uploadSuccess" 
				/>
			</view>
			
			<view class="item">
				<u-button
					form-type="submit"
					type="primary"
					text="提交反馈"
					:disabled="isDisabled(formValue)"
				></u-button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [],
				formValue: {
					content: "",
					tel: ""
				},
				pictures: [],
				isButtonDisabled: true // 默认禁用按钮
			};
		},
		methods: {
			// 图片上传成功
			uploadSuccess(e) {
				this.pictures = e.tempFilePaths; // 更新图片路径数组
			},

			// 判断按钮是否禁用
			isDisabled(obj) {
				for (let key in obj) {
					if (!obj[key]) {
						return true; // 如果有任何一个属性为空，则禁用按钮
					}
				}
				return false; // 所有属性都有值，不禁用按钮
			},

			// 点击提交
			onSubmit(e) {
				e.preventDefault(); // 阻止表单的默认提交行为

				if (this.isButtonDisabled) {
					return; // 如果按钮被禁用，则不执行后续提交操作
				}

				const detail = { ...this.formValue, pictures: this.pictures }; // 合并图片路径到提交数据中
				uniCloud.callFunction({
					name: "feedbackAdd",
					data: {
						detail,
						pictures
					}
				}).then(res => {
					console.log(res);
				});
				
				uni.showToast({
					title:"提交成功"
				})
			}
		},
		watch: {
			// 监听表单数据的变化，更新按钮禁用状态
			formValue: {
				handler(newValue) {
					this.isButtonDisabled = this.isDisabled(newValue);
				},
				deep: true
			}
		}
	};
</script>

<style lang="scss" scoped>
.add{
	padding:30rpx;
	.item{
		padding-bottom: 20rpx;
		textarea{
			border:1rpx solid #eee;
			height: 400rpx;
			padding:0 20rpx;
			width: 100%;
			box-sizing: border-box;
		}
		input{
			border:1rpx solid #eee;
			height: 80rpx;
			padding:0 20rpx;
		}
		
	}
	
	
}
</style>
