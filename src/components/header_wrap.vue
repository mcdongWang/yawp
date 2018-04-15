<template>
    <div class="wrap">
        <img src="../assets/img/logo.png" height="36" width="128" class="logo"></img>
        <ul class="path_list">
            <li class="path">OUR PROJECT</li>
            <li class="path" @click="go">ARTWORKS</li>
        </ul>
        <span class="login" @click="login">登录</span>
        <dialog-wrap
            :closeState="show_login"
            @toggle="close">
            <login-wrap @cancle="close"></login-wrap>
        </dialog-wrap>
    </div>
</template>
<script>

import dialogWrap from './dialog'
import loginWrap from '../pages/login'
export default {
  name: 'index',
  data () {
    return {
        show_login: false
    }
  },
  components: {
    dialogWrap,
    loginWrap
  },
  methods: {
    close () {
        this.show_login = false
    },
    login () {
        this.show_login = true
    },
    go () {
        this.$router.push('/artworkslist')
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 80px;
    background-color: #fff;
    position: relative;
    user-select:none;
    box-shadow: darkgrey 0 3px 10px;//边框阴影
    .logo{
        vertical-align: top;
        margin-left: 100px;
        display: inline-block;
        background: #000;
        width: 128px;
        height: 36px;
        padding: 26px 28px 24px 34px;
    }
    .path_list{
        display: inline-block;
        vertical-align: top;
        .path{
            cursor: pointer;
            margin-left: 60px;
            margin-top: 34px;
            font-family: ArialMT;
            font-weight: bold;
            display: inline-block;
            font-size: 20px;
            color: #242424;
        }
    }
    .login{
        position: absolute;
        cursor: pointer;
        right: 60px;
        top: 25px;
        vertical-align: middle;
        display: inline-block;
        width: 64px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #222;
        color: #fff;
        font-size: 20px;
        font-family: SourceHanSans;
    }
}
</style>