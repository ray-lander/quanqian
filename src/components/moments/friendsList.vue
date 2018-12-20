<template>
	<div class="friends_page">
		<mt-index-list>
			<mt-index-section index="A">
				<mt-cell title="Aaron" @click.native="goPage('/index/moments/personalmoments')"></mt-cell>
				<mt-cell title="Alden"></mt-cell>
				<mt-cell title="Austin"></mt-cell>
			</mt-index-section>
			<mt-index-section index="B">
				<mt-cell title="Baldwin"></mt-cell>
				<mt-cell title="Braden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
				<mt-cell title="Zack"></mt-cell>
				<mt-cell title="Zane"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>
<script>
	export default {
		name: "FriendsList",
		data() {
			return {
				id: 11
			};
		},
		methods: {
			goPage(path) {
				this.$router.push({
					path: path,
					query: {
						id: this.id
					}
				});
			}
		}
	};
</script>
<style scoped lang="less">
</style>