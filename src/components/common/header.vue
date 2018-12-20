<template>
	<div class="header_page">
	
		<mt-header fixed title="圈钱宝">
			<a
				href="javascript:;"
				slot="left"
				@click="$router.go(-1)"
				v-show="show_back.indexOf($route.name) == -1"
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
				show_back: ['MomentsList','ReleaseNew','MyCollection','MainProfile']
			};
		}
	
	};
</script>
<style>
</style>
