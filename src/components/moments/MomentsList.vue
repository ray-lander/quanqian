<template>
	<div id="moments">
		<div class="moments_header clearfix">
			<div class="fl user_img">
				<img src="../../assets/img/666.jpg" alt>
				<p>西西妹</p>
			</div>
			<div class="fl user_img">
				<img src="../../assets/img/222.jpg" alt>
				<p>抖抖</p>
			</div>
			<div class="fl user_img">
				<img src="../../assets/img/111.jpg" alt>
				<p>啦啦</p>
			</div>
		</div>
		<div class="moments_user clearfix">
			<div class="fl">
				<router-link
					tag="span"
					to="/index/moments/friendslist"
					class="iconfont icon-tongxunlu phone_list"
				>通讯录</router-link>
			</div>
			<div class="fr clearfix">
				<span class="fl">啦啦</span>
				<img class="fl" src="../../assets/img/666.jpg" alt>
			</div>
		</div>
		<momentRow></momentRow>

		<div class="write_box clearfix">
			<span class="fl">
				<input type="text">
			</span>
			<img class="fl" src="../../assets/biaoqing.png" alt>
			<button class="fl" type="button">发送</button>
		</div>
	</div>
</template>
<script>
	import momentRow from "../common/momentRow.vue"
	export default {
		data(){
			return {
				pageName: '圈钱宝',			

			}
		},
		components: {
			momentRow
		}
		
	};
</script>
<style scoped lang="less">
	.moments_header {
		padding: 0.625rem 0.3125rem;
		border-bottom: 1px solid #ccc;
		.user_img {
			width: 5rem;
			height: 5rem;
			margin: 0 0.3125rem;
			img {
				width: 3.75rem;
				height: 3.75rem;
				margin: 0 auto;
			}
			p {
				text-align: center;
			}
		}
	}
	.write_box {
		padding: 5px;
		display: none;
		input {
			border: 1px solid #ccc;
			margin-right: 10px;
			width: 265px;
			height: 28px;
			border-radius: 3px;
		}
		img {
			width: 30px;
			margin-right: 10px;
		}
		button {
			border: 1px solid #ccc;
			padding: 5px;
			border-radius: 3px;
			width: 48px;
		}
	}
	.moments_user {
		padding: 0.625rem;
		height: 60px;
		line-height: 60px;
		padding-left: 0;
		.fr {
			img {
				width: 3.75rem;
				height: 3.75rem;
			}
		}
		.fl {
			.phone_list {
				border: 1px solid #666;
				// border-radius: 5px;
				padding: 5px;
			}
		}
	}

</style>