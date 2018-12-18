<template>
	<div class="mainprofile_page">
		<div class="page_hd clearfix">
			<div class="fl clearfix">
				<p class="hide_txt">点击+按钮关联微信号</p>
				<!-- <div class="fl user_img">
					<img src="../../assets/crm-bc-logo.png" alt="">
				</div>-->
			</div>
			<div class="fr">
				<span class="plus" @click="this.QRcode">+</span>
			</div>
		</div>
		<!-- 我的账号 -->
		<div class="center_box">
			<div class="row_center">
				<p>
					<span>我的账号：</span>
					<span>15112345678</span>
				</p>
			</div>
			<div class="row_center">
				<p>
					<span>已购微信号：</span>
					<span>0</span>
				</p>
			</div>
			<div class="row_center">
				<p>
					<span>关联微信号：</span>
					<span>0</span>
				</p>
			</div>
		</div>

		<!-- 列表 -->
		<div class="page_list">
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd">
					<span style="vertical-align: middle">购买套餐</span>
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd">
					<span style="vertical-align: middle">解绑微信（仅限免费试用期间）</span>
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd">
					<span style="vertical-align: middle">修改密码</span>
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_access">
				<div class="weui-cell__bd">
					<span style="vertical-align: middle">延时发送管理</span>
				</div>
				<div class="weui-cell__ft"></div>
			</div>
		</div>
		<!-- 提示框 -->
		<div id="toast" style="opacity: 0; display: none;">
			<div class="tip-mask_transparent"></div>
			<div class="tip-toast">
				<p class="tip-toast__content">请先关联微信号后继续使用该功能</p>
			</div>
		</div>
		<!-- 二维码 -->
		<div class="js_dialog" id="iosDialog1" v-show="this.showQrcode">
			<div class="weui-mask"></div>
			<div class="weui-dialog">
				<div class="weui-dialog__hd">
					<strong class="weui-dialog__title">使用微信扫描下方二维码</strong>
					<i class="weui-icon-cancel" @click="hideQRcode"></i>
				</div>
				<div class="dialog_img">
					<img src="../../assets/crm-bc-logo.png" alt>
				</div>
				<div class="dialog_text">二维码有效期15s</div>
			</div>
		</div>
	</div>
</template>
<script>
	// import Toast from "../common/toast";
	export default {
		name: "MainProfile",
		data() {
			return {
				showQrcode: false
			};
		},
		methods: {
			QRcode() {
				this.showQrcode = true;
			},
			hideQRcode() {
				this.showQrcode = false;
			}
		},
		// components: {
		// 	Toast
		// }
	};
</script>
<style scoped lang="less">
	.mainprofile_page {
		.page_hd {
			padding: 10px 0;
			box-sizing: border-box;
			border-bottom: 1px solid #ccc;
			.fl {
				width: 70%;
				.hide_txt {
					text-align: center;
					height: 5rem;
					line-height: 5rem;
				}
				.user_img {
					width: 5rem;
					height: 5rem;
					margin: 0 0.625rem;
				}
			}
			.fr {
				width: 30%;
				span {
					display: block;
					text-align: center;
					height: 5rem;
					width: 5rem;
					line-height: 4.5rem;
					margin: 0 auto;
					border: 1px solid #ccc;
					border-radius: 50%;
					font-size: 2.5rem;
				}
			}
		}
		.center_box {
			padding: 0.625rem 0;
			box-sizing: border-box;
			.row_center {
				background-color: #c0c4dd;
				p {
					padding: 0 1.125rem;
					box-sizing: border-box;
					height: 2.9375rem;
					line-height: 2.9375rem;
					// border-bottom: 1px solid #ccc;
				}
			}
		}
		.page_list {
			border-top: 1px solid #eee;
			border-bottom: 1px solid #eee;
		}
	}
	.tip-mask_transparent {
		position: fixed;
		z-index: 1000;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}
	.tip-toast {
		position: fixed;
		z-index: 5000;
		/* width: 7.6em; */
		/* min-height: 7.6em; */
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		/* margin-left: -3.8em; */
		background: rgba(17, 17, 17, 0.7);
		text-align: center;
		border-radius: 5px;
		color: #ffffff;
	}
	.weui-dialog__hd {
		position: relative;
		.weui-icon-cancel {
			position: absolute;
			right: 10px;
			top: 10px;
			color: #333;
		}
	}
	.dialog_img {
		width: 13.125rem;
		height: 13.125rem;
		margin: 20px auto;
		img {
			width: 13.125rem;
			height: 13.125rem;
		}
	}
</style>