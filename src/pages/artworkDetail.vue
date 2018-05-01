<template>
  <div class="artwork-detail">
    <div class="artwork-img-wrap">
        <img :src="artworkInfo.path" alt="" class="artwork-img">
    </div>
    <div class="info-box">
        <div class="artwork-info">
            <div class="info-title">
                <p class="title">{{artworkInfo.name}}</p>
                <p class="artist">{{artworkInfo.author}}</p>
            </div>
            <span class="content">{{artworkInfo.comment}}</span>
        </div>
        <div class="artwork-price">
            <span class="price">￥{{artworkInfo.price}}</span>
            <span class="number">共{{artworkInfo.countT}}个数字版权&nbsp;剩余{{artworkInfo.countN}}个</span>
            <button class="buy disabled" disabled="disabled">Buy Now!</button>
        </div>
    </div>
    <div class="artwork-records">
        <h1 class="title">Blockchain Records</h1>
        <p class="record-item" v-for="item in artworkInfo.steps">BlockChain ID：{{item.create}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ArtworkDetail',
    data () {
        return {
            id: this.$route.params.id,
            artworkInfo: {}
        }
    },
    filters: {
        formatRecords (val) {
            let obj = JSON.parse(val)
            for (let x in obj) {
                return `${x}：${obj[x]}`
            }
        }
    },
    methods: {
        getInfo () {
            this.$ajax.get('/api/artwork', {
                params: {
                    id: this.id
                }
            })
            .then(response => {
                console.log(response.data)
                this.artworkInfo = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
    },
    created () {
        this.getInfo()
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
.artwork-img-wrap{
    width: 100%;
    height: 400px;
    margin-top: 60px;
    margin-bottom: 80px;
    text-align: center;
    .artwork-img{
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
    }
}
.info-box{
    padding-bottom: 40px;
    border-bottom: 1px solid #ccc;
    font-size: 0;
}
.artwork-info{
    width: calc(100% - 312px - 95px);
    margin-right: 95px;
    display: inline-block;
    vertical-align: top;
    .info-title{
        margin-bottom: 20px;
        font-size: 0;
    }
    .title{
        font-size: 48px;
        // display: inline-block;
        // width: 80%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .artist{
        // display: inline-block;
        // width: 20%;
        text-align: left;
        font-size: 22px;
        margin-top: 20px;
    }
    .content{
        display: block;
        font-size: 16px;
        line-height: 36px;
    }
}
.artwork-price{
    width: 312px;
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
        cursor: pointer;
    }
    .disabled{
        cursor: not-allowed;
        opacity: 0.6;
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
