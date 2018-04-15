<template>
    <div class="wrap">
        <img src="../assets/img/logo.png" height="36" width="128" class="logo"></img>
        <ul class="path_list">
            <li class="path" :class="{'path_selected' : $route.path == '/'}"@click="go('/')">OUR PROJECT</li>
            <li class="path" :class="{'path_selected' : $route.path.match(/artwork/i)}" @click="go('/artworkslist')">ARTWORKS</li>
        </ul>
        <span class="login" @click="login">登录</span>
        <dialog-wrap
            :closeState="showLogin"
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
        showLogin: false,
        hasLogin: false
    }
  },
  components: {
    dialogWrap,
    loginWrap
  },
  methods: {
    close () {
        this.showLogin = false
    },
    login () {
        this.showLogin = true
    },
    go (path) {
        this.$router.push(path)
    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 80px;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 50;
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
        .path_selected{
            position: relative;
            font-weight: bolder;
            &:after{
                content: '';
                width: 30px;
                height: 4px;
                background-color: #242424;
                position: absolute;
                bottom: -10px;
                left: calc(~'50% - 15px');
            }
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