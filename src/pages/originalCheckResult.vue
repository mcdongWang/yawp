<template>
  <div class="original-check-result">
    <img :src="artInfo.path" alt="" class="artwork-img">
    <span class="img-block">BlockChain ID：{{artInfo.assetID}}</span>
    <span class="img-createDate">区块链创建时间：{{artInfo.createTime}}</span>
    <div class="info-box">
        <div class="artwork-info">
            <div class="info-title">
                <span class="title">{{artInfo.name}}</span>
                <span class="artist">{{artInfo.author}}</span>
            </div>
            <span class="content">{{artInfo.comment}}</span>
        </div>
        <div class="artwork-price">
            <span class="price">￥{{artInfo.price}}</span>
            <button class="buy">
                <p>版本数量{{artInfo.countT}}</p>
                <p>剩余{{artInfo.countN}}个</p>
            </button>
        </div>
    </div>

    <div class="artwork-records">
        <h1 class="title">Blockchain Records</h1>
        <p class="record-item" v-for="i in artInfo.steps">BlockChain ID: Created: {{i.create}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OriginalCheckResult',
  data () {
    return {
    }
  },
  props: {
      artInfo: {
          type: Object
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.original-check-result{
    width: 1200px;
    margin: 0 auto;
    color: #222;
    text-align: left;
}
.original-check-result{
    font-size: 0px;
    vertical-align: top;
    .artwork-img{
        width: 100%;
        margin-top: 120px;
    }
    .img-block, .img-createDate, .img-block-p{
        font-size: 14px;
        line-height: 46px;
        color: #7b7b7b;
    }
    .img-block, .img-createDate{
        margin-bottom: 44px;
        display: inline-block;
    }
    .img-createDate{
        float: right;
    }
    .info-box{
        font-size: 0;
        border-bottom: 1px solid #ccc;
        padding-bottom: 40px;
        .artwork-info{
            width: calc(100% - 420px);
            display: inline-block;
            margin-right: 100px;
        }
        .artwork-price{
            min-width: 320px;
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
                width: 320px;
                height: 104px;
                background-color: #222;
                border: 0;
                margin-top: 20px;
            }
        }
    }
    .info-title{
        margin-bottom: 20px;
        font-size: 0;
    }
    .title{
        font-size: 48px;
        display: inline-block;
        width: 80%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .artist{
        display: inline-block;
        width: 20%;
        text-align: right;
        font-size: 22px;
        margin-top: 26px;
    }
    .content{
        display: block;
        font-size: 16px;
        line-height: 36px;
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
