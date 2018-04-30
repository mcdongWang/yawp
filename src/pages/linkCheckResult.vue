<template>
  <div class="link-check-result">
    <img :src="artInfo.path" alt="" class="artwork-img">
    <span class="img-block">BlockChain ID：{{artInfo.bloackID}}</span>
    <span class="img-createDate">区块链创建时间：{{artInfo.blockCreationTime}}</span>
    <div class="info-box">
        <div class="artwork-info">
            <div class="info-title">
                <span class="title">{{artInfo.artworkName}}</span>
                <span class="artist">{{artInfo.author}}</span>
            </div>
            <span class="content">{{artInfo.comments}}}</span>
        </div>
        <div class="artwork-price">
            <span class="price">￥{{artInfo.price}}</span>
            <span class="number">当前版本编号:{{artInfo.editionLeft}} of {{artInfo.editionTotal}}</span>
        </div>
    </div>
    <p class="img-block-p">当前拥有者：{{artInfo.owner}}</p>
    <p class="img-block-p">上一位拥有者：{{artInfo.ownerBefore}}</p>
  </div>
</template>

<script>
export default {
    name: 'LinkCheckResult',
    data () {
        return {
        }
    },
    props: {
        artInfo: {
            type: Object
        }
    },
    created () {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.link-check-result{
    width: 1200px;
    margin: 0 auto 0;
    color: #222;
    text-align: left;
}
.link-check-result{
    vertical-align: top;
    padding-bottom: 125px;
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
        .artwork-info{
            width: 70%;
            display: inline-block;
            margin-right: 100px;
        }
        .artwork-price{
            width: calc(100% - 70% - 100px);
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
