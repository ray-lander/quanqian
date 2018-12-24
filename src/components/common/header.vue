<template>
	<div class="header_page">
	
		<mt-header fixed :title="$store.state.currentPageName">
			<a
				href="javascript:;"
				slot="left"
				@click="$router.go(-1)"
				v-show="show_back.indexOf($route.name) == -1 && $route.path.indexOf('login') == -1"
			>
				<span class="iconfont icon-tubiaozhizuo-"></span>
			</a>
		</mt-header>
	</div>
</template>
<script>
	export default {
		name: "Header",
		data() {
			return {
				pathName: '',
				show_back: ['MomentsList','ReleaseNew','MyCollection','MainProfile']
			}
		},
		watch: {
			// 监听 $route 为页面设置不同的标题
			$route(to, from) {
				this.$store.commit("setPageName", to.meta.title);
				
			}
		}
	
	};
</script>
<style>
</style>
