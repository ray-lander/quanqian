<template>
	<div class="header_page">
		<div class="weui-tabbar">
			<router-link to="/index/moments/momentslist" tag="a" class="weui-tabbar__item">
				<span style="display: inline-block;position: relative;">
					<img src="../../assets/pengyouquan.svg" alt class="weui-tabbar__icon">
					<span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
				</span>
				<p class="weui-tabbar__label">朋友圈</p>
			</router-link>
			<router-link to="/index/release/releasenew" tag="a" class="weui-tabbar__item">
				<img src="../../assets/xiangji.svg" alt class="weui-tabbar__icon">
				<p class="weui-tabbar__label">发布</p>
			</router-link>
			<router-link to="/index/materialcollection/mycollection" tag="a" class="weui-tabbar__item">
				<span style="display: inline-block;position: relative;">
					<img src="../../assets/xiangce_1.svg" alt class="weui-tabbar__icon">
					<span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
				</span>
				<p class="weui-tabbar__label">素材库</p>
			</router-link>
			<router-link to="/index/materialcollection/mainprofile" tag="a" class="weui-tabbar__item">
				<img src="../../assets/yonghu.svg" alt class="weui-tabbar__icon">
				<p class="weui-tabbar__label">个人中心</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	// import "../../lib/base.css"
	import "../../lib/rem.js";
	export default {
		name: "Nav"
	};
</script>
<style>
	
</style>
