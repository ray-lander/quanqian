<template>
	<div class="register_page">		
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">手机号码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="tel" pattern="[0-11]*" placeholder="注册手机号">
				</div>
			</div>

			<div class="weui-cell weui-cell_vcode">
				<div class="weui-cell__hd">
					<label class="weui-label">验证码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="number" placeholder="请输入验证码">
				</div>
				<div class="weui-cell__ft">
					<button class="weui-vcode-btn">获取验证码</button>
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
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for class="weui-label">确认密码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" value placeholder="与登录密码保持一致">
				</div>
			</div>
		</div>
    <div class="regiter_btn">
      <a href="javascript:;" class="weui-btn weui-btn_plain-primary">确认修改</a>      
    </div>
	</div>
</template>
<script>
	export default {
    name: "Register",
    data(){
      return {
				pageName: '忘记密码'
      }
    }
  };
</script>
<style scoped lang="less">
	
  .regiter_btn {
    padding: 0 3.125rem;
    margin-top: 3.75rem;
    p {
      text-align: center;
      margin-top: 1.25rem;
      span {
        border-bottom: 1px solid #666;
      }
    }
  }
</style>
