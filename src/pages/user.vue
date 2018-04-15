<template>
    <div class="user_wrap">
        <div class="user_info">
            <img class="user_photo" src="../assets/listImg.png" alt="">
            <div class="user_name">LU SHAN</div>
            <div class="user_work_title">Digital artist</div>
            <div class="user_upload_btn">上传作品</div>
        </div>
        <div class="user_nav">
            <div class="user_nav_item" :class="{'user_nav_selected' : $route.path == '/user/artlist'}" @click="go('artlist')">我的作品</div>
            <div class="user_nav_item" :class="{'user_nav_selected' : $route.path == '/user/ownlist'}" @click="go('ownlist')">已购作品</div>
            <div class="user_nav_item" :class="{'user_nav_selected' : $route.path == '/user/selfcheck'}" @click="go('selfcheck')">原创性查询</div>
            <div class="user_nav_item" :class="{'user_nav_selected' : $route.path == '/user/linkcheck'}" @click="go('linkcheck')">区块链版权查询</div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'user',
  data: function () {
    return {

    }
  },
  methods: {
    go (path) {
        this.$router.push(`/user/${path}`)
    }
  }
}
</script>
<style lang="less" scoped>
.user_wrap{
    width: 1200px;
    margin: 60px auto 140px auto;
    .user_info{
        position: relative;
        div{
            display: inline-block;
        }
        .user_photo{
            width: 160px;
            height: 160px;
            display: inline-block;
        }
        .user_name{
            position: absolute;
            left: 148px;
            top: 20px;
            padding: 24px 40px;
            font-size: 48px;
            color: #fff;
            background-color: #242424;
        }
        .user_work_title{
            font-weight: bold;
            font-size: 22px;
            color: #242424;
            position: absolute;
            top: 136px;
            left: 180px;
        }
        .user_upload_btn{
            text-align: center;
            cursor: pointer;
            height: 44px;
            font-size: 22px;
            color: #fff;
            background-color: #242424;
            line-height: 44px;
            width: 162px;
            position: absolute;
            right: 0px;
            top: 20px;
        }
    }
    .user_nav{
        text-align: right;
        border-bottom: 1px solid #bebebe;
        .user_nav_item{
            cursor: pointer;
            color: #242424;
            opacity: .7;
            margin-left: 60px;
            display: inline-block;
            font-size: 22px;
            height: 52px;
            padding-top: 8px;
        }
        .user_nav_selected{
            opacity: 1;
            font-weight: bold;
            position: relative;
            &:after{
                content: '';
                width: 30px;
                height: 4px;
                background-color: #242424;
                position: absolute;
                bottom: 16px;
                left: calc(~'50% - 15px');
            }
        }
    }
}
</style>