<template>
  <div class="artwork-detail">
    <img src="@/assets/logo.png" alt="" class="artwork-img">
    <div class="info-box">
        <div class="artwork-info">
            <div class="info-title">
                <span class="title">aa</span>
                <span class="artist">bb</span>
            </div>
            <span class="content">cccc</span>
        </div>
        <div class="artwork-price">
            <span class="price">$22</span>
            <span class="number">共100个数字版权&nbsp;剩余54个</span>
            <button class="buy">Buy Now!</button>
        </div>
    </div>
    <div class="artwork-records">
        <h1 class="title">a</h1>
        <p class="record-item" v-for="i in 5">bb</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkDetail',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.artwork-detail{
    width: 1200px;
    margin: 0 auto;
    color: #222;
}
.artwork-img{
    width: 100%;
    margin-bottom: 80px;
}
.info-box{
    padding-bottom: 40px;
    border-bottom: 1px solid #ccc;
}
.artwork-info{
    width: calc(100% - 320px - 101px);
    margin-right: 95px;
    display: inline-block;
    vertical-align: top;
    .info-title{
        margin-bottom: 20px;
    }
    .title{
        font-size: 48px;
    }
    .artist{
        display: inline-block;
        float: right;
        font-size: 22px;
    }
    .content{
        display: block;
        font-size: 16px;
        line-height: 36px;
    }
}
.artwork-price{
    width: 320px;
    display: inline-block;
    vertical-align: top;
    .price{
        display: block;
        font-size: 50px;
    }
    .number{
        display: block;
        font-size: 22px;
        line-height: 62px;
        color: #636363;
    }
    .buy{
        font-size: 22px;
        color: #fff;
        padding: 20px 108px;
        background-color: #222;
        border: 0;
        margin-top: 20px;
    }
}
.artwork-records{
    padding: 20px 0 120px;
    .title{
        font-size: 40px;
        line-height: 80px;
    }
    .record-item{
        font-size: 22px;
        line-height: 46px;
    }
}
</style>
