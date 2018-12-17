<template>
	<div class="login_page">
		<div class="logo_wrap">
			<img class="middle-self" src="../../assets/crm-bc-logo.png" alt>
		</div>
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">手机号码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="tel" pattern="[0-11]*" placeholder="注册手机号">
				</div>
			</div>

			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for class="weui-label">登录密码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" value placeholder="至少6位数组，区分大小写">
				</div>
			</div>
			
		</div>
    <div class="link_forgot">
      <router-link to='/index/login/forgetpassword' tag="p">忘记密码？</router-link>
    </div>
    <div class="regiter_btn">
      <a href="javascript:;" class="weui-btn weui-btn_plain-primary">登录</a>
      <p>
        <router-link tag="span" to="/index/login/register">无账号，请注册</router-link>
      </p>
    </div>
	</div>
</template>
<script>
	export default {
    name: "Login",
    data(){
      return{
        
      }
    }
  };
</script>
<style scoped lang="less">
	.logo_wrap {
		height: 8.125rem;
		width: 100%;
		position: relative;
		img {
			width: 7.5rem;
		}
  }
  .link_forgot {
    padding: 0 3.125rem;
    margin-top: 2rem;
    text-align: right;
  }
  .regiter_btn {
    padding: 0 3.125rem;
    margin-top: 2rem;
    p {
      text-align: center;
      margin-top: 1.25rem;
      span {
        border-bottom: 1px solid #666;
      }
    }
  }
</style>

