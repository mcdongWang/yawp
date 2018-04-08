<template>
  <div class="artworks-list">
    <div class="artwork-item" v-for="i in 5">
        <img src="@/assets/logo.png" alt="" class="artwork-img">
        <span class="artwork-titlebar">
            <span class="artwork-name">aaa</span>
            <span class="artwork-fee">$11</span>
        </span>
        <span class="artwork-artist">bb</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworksList',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.artworks-list{
    width: 1200px;
    margin: 20px auto 140px;
}
.artwork-item{
    width: calc((100% - 120px) / 3);
    margin-top: 60px;
    margin-right: 60px;
    display: inline-block;
    color: #242424;
    .artwork-img{
        width: 100%;
        height: 240px;
    }
    .artwork-titlebar{
        margin-top: 22px;
        margin-bottom: 10px;
        font-size: 22px;
        display: block;
        .artwork-fee{
            display: inline-block;
            float: right;
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
