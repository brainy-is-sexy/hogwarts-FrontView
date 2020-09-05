<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="霍格沃兹魔法学校">
            <img src="~/assets/img/logo.jpg" width="100%" alt="霍格沃兹魔法学校">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>魔法师</a>
            </router-link>
          </ul>
          <!-- / nav -->
       <!-- / nav -->
          <ul class="h-r-login">
              <li v-if="!loginInfo.id" id="no-login">
                  <a href="/login" title="登录">
                      <em class="icon18 login-icon">&nbsp;</em>
                      <span class="vam ml5">登录</span>
                  </a>
                  |
                  <a href="/register" title="注册">
                      <span class="vam ml5">注册</span>
                  </a>
              </li>
              <li v-if="loginInfo.id" id="is-login-one" class="mr10">
                  <a id="headerMsgCountId" href="#" title="消息">
                      <em class="icon18 news-icon">&nbsp;</em>
                  </a>
                  <q class="red-point" style="display: none">&nbsp;</q>
              </li>
              <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
                  <a href="/ucenter" title>
                      <img
                          :src="loginInfo.avatar"
                          width="30"
                          height="30"
                          class="vam picImg"
                          alt
                          >
                      <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
                  </a>
                  <a href="javascript:void(0);" title="退出" @click="logout()" class="ml5">退出</a>
              </li>
              <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
         
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->
      
    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="https://www.blog.huazhenli.top/" title="尚硅谷" target="_blank">brainy is the new sexy</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              
              <section class="b-f-link mt10">
                <span>©2020课程版权均归霍格沃兹魔法学院所有</span>
              </section>
            </section>
          </section>
         
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import '~/assets/css/base.css'
import '~/assets/css/activity_tab.css'
import '~/assets/css/bottom_rec.css'
import '~/assets/css/nice_select.css'
import '~/assets/css/order.css'
import '~/assets/css/swiper-3.3.1.min.css'
import "~/assets/css/pages-weixinpay.css"

import cookie from 'js-cookie'
import userApi from '@/api/login'

export default {
   data() {
    return {
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      }
    }
  },

  created() {
    this.token=this.$route.query.token
    if(this.token){
      this.wxLogin()
    }
    this.showInfo()
  },

  methods: {
    wxLogin(){
     cookie.set('guli_token',this.token, { domain: 'localhost' })
     cookie.set('guli_ucenter', '', { domain: 'localhost' })
     userApi.getLoginInfo()
     .then(response=>{
       this.loginInfo=response.data.data.userInfo
       cookie.set('guli_ucenter', this.loginInfo, { domain: 'localhost' })
     })
    },
    showInfo() {
      //debugger
      var jsonStr = cookie.get("guli_ucenter");  
      if (jsonStr) {
        this.loginInfo = JSON.parse(jsonStr)
      }
    },

    logout() {
      //debugger
      cookie.set('guli_ucenter', "", {domain: 'localhost'})
      cookie.set('guli_token', "", {domain: 'localhost'})

      //跳转页面
      window.location.href = "/"
    }
  }
};
</script>