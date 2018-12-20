<template>
	<div class="personal_page">
		<div class="personal_header">
			<ul class="clearfix">
				<li class="fl now" @click="this.onoo">选中最近5条</li>
				<li class="fl">选中最近10条</li>
				<li class="fl">选中最近15条</li>
			</ul>
		</div>
		<momentRow></momentRow>
	</div>
</template>
<script>
	import momentRow from "../common/momentRow.vue";

	export default {
    data(){
      return{

      }
    },
    methods: {
      onoo(){
        console.log(this.$route.name)
      }
    },
		components: {
			momentRow
		}
	};
</script>
<style scoped lang="less">
	.personal_header {
		ul {
			li {
				width: 33.3%;
				text-align: center;
				border-right: 1px solid #ccc;
				border-bottom: 1px solid #ccc;
				padding: 10px 5px;
				box-sizing: border-box;
				border-radius: 5px;
				&.now {
					background-color: #1aad19;
					color: #fff;
				}
			}
		}
	}

</style>
