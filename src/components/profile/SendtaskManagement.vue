<template>
	<div class="sendtask_page">
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">因微信离线而未执行的延时任务，可查看详情后重新发送</div>
			<div class="weui-panel__bd">
				<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" src="../../assets/img/666.jpg" alt>
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title">延时点赞</h4>
					</div>
					<div class="weui-media-box__bd control_box">
						<p class="time_det">{{ new Date() | date }}</p>
						<router-link to="/index/release/releasenew" >
							<button type="button" class="see_det">查看详情</button>
						</router-link>
					</div>
				</a>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "SendtaskManagement"
	};
</script>
<style scoped lang="less">
	.weui-media-box_appmsg .weui-media-box__thumb {
		height: 100%;
	}
	.weui-media-box.weui-media-box_appmsg {
		background-color: #E0E3F0;
		border-top: 1px solid rgba(187, 187, 187, 1);
		border-bottom: 1px solid rgba(187, 187, 187, 1);
		margin-bottom: 0.3125rem;
	}
	.control_box {
		position: relative;
		.time_det {
			font-size: 0.8125rem;
			text-align: center;
		}
		.see_det {
			width: 4.375rem;
			padding: 0.3125rem;
			margin: 0 auto;
			margin-left: 2.25rem;
			border-radius: 0.25rem;
			border: 1px solid #ccc;
			background: #fff;
			margin-top: 0.625rem;
		}
	}
</style>
