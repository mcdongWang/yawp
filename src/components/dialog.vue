<template>
    <div class="dialog_wrap" v-show="close || false">
        <div class="button" @click="closeWrap">
            <img src="../assets/img/close.png"alt="">
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    close: {
        get () {
            return this.closeState || false
        },
        set () {

        }
    }
  },
  methods: {
    closeWrap () {
        this.$emit('toggle', false)
    }
  },
  props: ['closeState']
}
</script>
<style lang="less" scoped>
.dialog_wrap{
    top: 0;
    left: 0;
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .button{
        cursor: pointer;
        background-color: #222;
        position: absolute;
        top: 60px;
        right: 60px;
        height: 50px;
        width: 50px;
        text-align: center;
        img{
            font-size: 0;
            display: inline-block;
            height: 22px;
            width: 22px;
            margin-top: 14px;
        }
    }
}
</style>