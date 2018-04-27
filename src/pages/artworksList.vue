<template>
  <div class="artworks-list">
    <div class="artwork-item" v-for="item in artworkList" @click="gotoDetail(item.fid)">
        <div class="artwork_wrap">
            <img :src="item.path" class="artwork-img">
        </div>
        <span class="artwork-titlebar">
            <span class="artwork-name">{{item.name}}</span>
            <span class="artwork-fee">￥{{item.price}}</span>
        </span>
        <span class="artwork-artist">{{item.author}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ArtworksList',
    data () {
        return {
            artworkList: []
        }
    },
    methods: {
        gotoDetail (id) {
            this.$router.push(`/artworkDetail/${id}`)
        },
        getList () {
            this.$ajax.get('/api/galerry')
            .then(response => {
                console.log(response.data)
                this.artworkList = response.data.data
            })
            .catch(error => {
                console.log(error)
            });
        },
    },
    created () {
        this.getList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.artworks-list{
    width: 1200px;
    margin: 20px auto 140px;
    background-color: #f9f9f9;
}
.artwork-item{
    width: calc((100% - 120px) / 3);
    margin-top: 60px;
    margin-right: 60px;
    display: inline-block;
    color: #242424;
    cursor: pointer;
    overflow: hidden;
    .artwork_wrap{
        width: 100%;
        text-align: center;
        height: 240px;
        background-color: #b9b9b9;
        position: relative;
        .artwork-img{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            max-height: 240px;
            max-width: 100%;
            text-align: center;
            vertical-align: middle;
        }
    }
    .artwork-titlebar{
        margin-top: 20px;
        margin-bottom: 10px;
        display: block;
        font-size: 0;
        vertical-align: top;
        .artwork-name{
            vertical-align: top;
            display: inline-block;
            font-size: 22px;
            width: calc(~'100% - 90px');
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .artwork-fee{
            display: inline-block;
            width: 90px;
            font-size: 22px;
            text-align: right;
        }
    }
    .artwork-artist{
        font-size: 16px;
        line-height: 20px;
    }
    &:nth-child(3n){
        margin-right: 0;
    }
}
</style>
