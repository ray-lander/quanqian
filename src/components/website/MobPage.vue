<template>
	<div class="mob_page">
    <div class="page_header clearfix">
      <div class="fl">
        <img src="../../assets/crm-bc-logo.png" alt="">
      </div>
      <div class="fr"> 
        <router-link  class="login_btn" to="/login">登录</router-link>
      </div>
    </div>

  </div>
</template>
<script>
  // import "../../lib/base.css"
  import "../../lib/rem.js"
	export default {
		name: "MobPage"
	};
</script>
<style scoped lang="less">
    .page_header {
      width: 100%;
      font-size: 0.75rem;
      height: 4.1875rem;
      .fl {
        width: 8.875rem;
        img {
          width: 100%;
        }
      }
      .fr {
        .login_btn {
          font-size: 2rem;
        }
      }
    }

</style>
