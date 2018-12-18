<template>
	<div id="toast" style="opacity: 0; display: none;">
		<div class="tip-mask_transparent"></div>
		<div class="tip-toast">
			<p class="tip-toast__content">请先关联微信号后继续使用该功能</p>
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style>
	/* #toast {
		opacity: 0;
		display: none;
	} */
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
</style>
