<template>
  <div id="index_page">  
    
    <WxHeader></WxHeader>      
    
    <router-view/>

    <WxNav v-show="$route.path.indexOf('login') == -1"></WxNav>
  </div>
</template>

<script>
import WxHeader from "../common/header"
import WxNav from "../common/nav"
export default {
  name: 'Index',
  data(){
    return {
      pageName: "",
      showNav: "true"
   
    }
  },
  components: {
    WxHeader,
    WxNav
  },
  methods: {
    
  },
  watch: {
    
  },
  
}
</script>

<style>
#index_page {
  height: 100%;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.weui-navbar__item.weui-bar__item_on {
  background-color: #2B2A30;
  color: #fff;
}
</style>
