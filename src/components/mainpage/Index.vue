<template>
	<div id="index_page">
		<WxHeader></WxHeader>
    <transition
      name="custom-classes-transition"
      :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate"
    >
		<router-view/>
    </transition>
		<WxNav v-show="$route.path.indexOf('login') == -1"></WxNav>    
	</div>
</template>

<script>
	import WxHeader from "../common/header";
	import WxNav from "../common/nav";
	export default {
		name: "Index",
		data() {
			return {	
				pageName: '圈钱宝',			
				showNav: "true",
				routerAnimate: false,
				enterAnimate: "", //页面进入动效
				leaveAnimate: "" //页面离开动效
			};
		},
		components: {
			WxHeader,
			WxNav
		},
		methods: {},
		watch: {
			$route(to, from) {
				// console.log(to.name)
				// this.$store.commit("setPageName", to.name);
				
			}
		}
	};
</script>

<style>
	#index_page {
		width: 100%;
		padding-top: 50px;
		padding-bottom: 50px;
		box-sizing: border-box;
	}
	.weui-navbar__item.weui-bar__item_on {
		background-color: #2b2a30;
		color: #fff;
	}
	.weui-navbar {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		position: fixed;
		z-index: 500;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fafafa;
		right: 0;
	}
	.weui-tabbar {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		position: fixed;
		z-index: 500;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #f7f7fa;
		right: 0;
	}
	.mint-header.is-fixed {
		background-color: #2b2a30;
		height: 44px;
		z-index: 8;
	}
	.picker.mint-datetime-picker .mint-datetime-action {
		color: #1aad19;
	}
</style>
