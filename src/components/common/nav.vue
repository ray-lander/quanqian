<template>
	<div class="nav_page">
		<div class="weui-tabbar">
			<!-- 朋友圈 -->
			<router-link
				to="/index/moments/momentslist"
				tag="a"
				class="weui-tabbar__item"
				:class="$route.path.indexOf('moments') == -1?'':'weui-bar__item_on'"
			>
				<span style="display: inline-block;position: relative;">
					<span class="weui-tabbar__icon iconfont icon-pengyouquan"></span>
					<span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
				</span>
				<p class="weui-tabbar__label">朋友圈</p>
			</router-link>
			<!-- 发布朋友圈 -->
			<router-link
				to="/index/release/releasenew"
				tag="a"
				class="weui-tabbar__item"
				:class="$route.path.indexOf('release') == -1?'':'weui-bar__item_on'"
			>
				<span class="weui-tabbar__icon iconfont icon-xiangji"></span>
				<p class="weui-tabbar__label">发布</p>
			</router-link>
			<!-- 素材库 -->
			<router-link
				to="/index/materialcollection/mycollection"
				tag="a"
				class="weui-tabbar__item"
				:class="$route.path.indexOf('materialcollection') == -1?'':'weui-bar__item_on'"
			>
				<span style="display: inline-block;position: relative;">
					<span class="weui-tabbar__icon iconfont icon-xiangce"></span>
					<span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
				</span>
				<p class="weui-tabbar__label">素材库</p>
			</router-link>
			<!-- 个人中心 -->
			<router-link
				to="/index/profile/mainprofile"
				tag="a"
				class="weui-tabbar__item"
				:class="$route.path.indexOf('profile') == -1?'':'weui-bar__item_on'"
			>
				<span class="weui-tabbar__icon iconfont icon-yonghu"></span>
				<p class="weui-tabbar__label">个人中心</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Nav",
	};
</script>
<style scoped lang="less">
.nav_page {
	.iconfont {
		font-size: 1.25rem;
		font-weight: bold;
		&.icon-xiangji {
			font-weight: 800;
		}
	}
	.weui-tabbar__label {
		// font-size: 1.25rem;
	}
}
</style>
