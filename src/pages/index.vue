<template>
  <div class="wrap">
    <div class="banner">
        <img src="../assets/img/logo_black.png" class="logo" alt="">
        <p class="title">最酷的数字资产版权保护平台</p>
        <p class="sub_title">基于区块链技术提供最安全、简单的数字版权保护方式，保护创作者的根本利益，让数字内容可以安全传播与交易</p>
        <div class="start_btn">LET'S STAR</div>
        <img class="down" src='../assets/img/down.png' alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap{
    .banner{
        position: relative;
        height: 1000px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 1000px;
        background-image: url('../assets/img/banner.png');
        text-align: center;
        z-index: 1px;
        .logo{
            padding-top: 280px;
            height: 78px;
            width: 280px;
        }
        .title{
            margin-top: 40px;
            font-size: 56px;
            color: #242424;
            font-weight: bold;
        }
        .sub_title{
            margin: 60px auto 0px auto;
            font-size: 22px;
            line-height: 40px;
            color: #242424;
            width: 750px;
        }
        .start_btn{
            margin: 160px auto 0 auto;
            box-sizing: border-box;
            width: 194px;
            height: 56px;
            font-size: 22px;
            line-height: 48px;
            color: #242424;
            font-family: SourceHanSans;
            font-weight: bold;
            border: solid 4px #242424;
        }
        .down{
            margin-top: 12px;
            width: 24px;
            height: 24px;
        }
        // &:after{
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     content: "";
        //     background-color: #F5F5F5;
        //     opacity: 0.22;
        //     z-index: 1;
        //     width: 100%;
        //     height: 100%;
        // }
    }
}
</style>
