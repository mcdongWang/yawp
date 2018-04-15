<template>
  <div class="artworks-list">
    <div class="artwork-item" v-for="i in 5" @click="gotoDetail()">
        <div class="artwork_wrap">
            <img src="@/assets/logo.png" alt="" class="artwork-img">
        </div>
        <span class="artwork-titlebar">
            <span class="artwork-name">那夜过后渐渐静止的风</span>
            <span class="artwork-fee">￥1080</span>
        </span>
        <span class="artwork-artist">LU SHAN</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworksList',
  data () {
    return {
    }
  },
  methods: {
    gotoDetail () {
        this.$router.push({name: 'artworkDetail'})
    }
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
        text-align: center;
        background-color: #b9b9b9;
        .artwork-img{
            text-align: center;
            height: 240px;
        }
    }
    .artwork-titlebar{
        margin-top: 22px;
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
    }
    &:nth-child(3n){
        margin-right: 0;
    }
}
</style>
