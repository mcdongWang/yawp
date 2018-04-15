<template>
  <div class="original-check-result">
    <img src="@/assets/detailImg.png" alt="" class="artwork-img">
    <span class="img-block">BlockChain ID：0897ae780d986767x098fd7098ae98ad087787a876</span>
    <span class="img-createDate">区块链创建时间：2018-03-02</span>
    <div class="info-box">
        <div class="artwork-info">
            <div class="info-title">
                <span class="title">镜光，埃尔帕索</span>
                <span class="artist">平川典俊</span>
            </div>
            <span class="content">在平川典俊的摄影作品《镜光，埃尔帕索》里，一个女人看向镜中的自己，同时撩起有褶边的裙子，露出薄丝底裤。平川典俊描述说：“（照片里的）一个女人在等电梯时，在电梯间的镜子里查看自己的脸。”这是典型的平川典俊的作品，里面包含其摄影的各种特征：在某个未知的地方的单身女性形象、摆出某种暗示却并非刻意色情的姿势、仿佛对其露骨的性暗示并不自知。</span>
        </div>
        <div class="artwork-price">
            <span class="price">$22</span>
            <button class="buy">
                <p>版本数量100</p>
                <p>剩余54</p>
            </button>
        </div>
    </div>

    <div class="artwork-records">
        <h1 class="title">Blockchain Records</h1>
        <p class="record-item" v-for="i in 5">BlockChain ID：create：0897ae780d986767x098fd7098ae98ad087787a876</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OriginalCheckResult',
  data () {
    return {
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
