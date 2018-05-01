<template>
    <div class="wrap">
        <img @click="go('/')" src="../assets/img/logo.png" height="36" width="128" class="logo"></img>
        <ul class="path_list">
            <li class="path" :class="{'path_selected' : $route.path == '/'}"@click="go('/')">OUR PROJECT</li>
            <li class="path" :class="{'path_selected' : $route.path.match(/artwork/i)}" @click="go('/artworkslist')">ARTWORKS</li>
        </ul>
        <span v-show="!username" class="login" @click="login">登录</span>
        <span v-show="username" class="login_success">
            <span>Hi!~ {{username}}</span>
            <img :src="photo" alt="">
            <div class="list_box">
                <p @click="go('/user')">个人主页</p>
                <p @click="logout">退出登录</p>
            </div>
        </span>
        <dialog-wrap
            :closeState="showLogin"
            @toggle="close">
            <login-wrap @cancle="close" @loginSuccess="loginSuccess"></login-wrap>
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
        hasLogin: false,
        username: '',
        photo: ''
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
    logout () {
        this.$ajax.post('/api/logout')
            .then(res => {
                // this.$router.push('/')
                window.location.href = "/"
            })
    },
    go (path) {
        if(path != '/artworkslist'){
            this.$router.push(path)
        }else{
            this.$ajax.get('/api/auth')
                .then(res => {
                    if(res.data.status && res.data.status == 1){
                        // 未登录
                        this.showLogin = true
                    }else{
                        this.$router.push(path)
                    }
                })
        }
    },
    loginSuccess (value, value2) {
        this.showLogin = false
        this.username = value
        this.photo = value2
        // console.log(value)
    }
  },
  created () {
    this.$ajax.get('/api/auth')
        .then(res => {
            if(res.data.status && res.data.status == 1){
                // 未登录
                if(this.$route.path != '/'){
                    this.showLogin = true
                }
            }else{
                window.username = res.data.username
                window.avator = res.data.avator
                this.username = res.data.username
                this.loginSuccess(this.username, window.avator)
            }
        })
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
    box-shadow: rgba(0, 0, 0, .14) 0 2px 4px;//边框阴影
    .logo{
        cursor: pointer;
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
        // font-family: SourceHanSans;
    }
    .login_success{
        position: absolute;
        // cursor: pointer;
        right: 60px;
        top: 12px;
        vertical-align: middle;
        display: inline-block;
        height: 56px;
        line-height: 56px;
        text-align: left;
        color: #242424;
        font-size: 22px;
        span{
            vertical-align: top;
            display: inline-block;
            line-height: 56px;
        }
        img{
            height: 56px;
            width: 56px;
        }
        &:hover{
            .list_box{
                display: block;
            }
        }
        .list_box{
            display: none;
            position: absolute;
            right: 0;
            top: 60px;
            width: 130px;
            height: 93px;
            padding: 14px 0 9px 5px;
            background-image: url(../assets/img/group.png);
            p{
                cursor: pointer;
                text-align: center;
                line-height: 46px;
                font-size: 16px;
                color: #242424;
            }
        }
        // font-family: SourceHanSans;
    }
}
</style>