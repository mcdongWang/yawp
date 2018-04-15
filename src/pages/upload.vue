<template>
    <div class="upload_wrap">
            <div class="upload_title">
                <img src="../assets/img/logo_black.png" alt="">
                <p class="upload_title_content">现在就上传你的数字作品吧!</p>
            </div>
            <div class="upload_input">
                <img v-show="page == 1" class="upload_input_btn" src="../assets/img/upload.png"></img>
                <p  v-show="page == 1"class="upload_input_btn_content">点击上传作品图片</p>
                <img v-show="page == 2" class="pic" src="../assets/listImg.png" alt="">
            </div>
            <div v-show="page == 1">
                <input type="text" placeholder="请输入作品名称">
                <input type="text" placeholder="请输入版权人信息">
                <input type="number" placeholder="该版本销售价格" class="half_width">
                <input type="number" placeholder="该版本发售数量" class="half_width ml">
            </div>
            <div v-show="page == 2">
                <textarea class="area" placeholder="请输入作品描述"></textarea>
            </div>
            <div class="next_btn" @click="pageChange()">{{page == 2 ? '发布作品' : '下一步'}}</div>
            <div class="cancle_upload" @click="cancle()">{{page == 2 ? '上一步' : '取消上传'}}</div>
    </div>
</template>
<script>
export default {
  name: 'upload',
  data () {
    return {
      page: 1
    }
  },
  methods: {
    pageChange () {
        if(this.page == 1){
            this.page = 2
        }else{
            alert('上传')
        }
    },
    cancle () {
        if(this.page == 1){
            this.$emit('cancle')
        }else{
            this.page = 1
        }
    }
  }
}
</script>
<style lang="less" scoped>
// input placeholder 颜色修改
.placeholder(@rules) {
    &::placeholder {
        @rules();
    }
}
.upload_wrap{
    width: 560px;
    margin: 174px auto 40px auto;
    margin-top: 174px;
    text-align: center;
    min-height: 500px;
    .upload_title{
        text-align: left;
        img{
            height: 40px;
            display: inline-block;
        }
        .upload_title_content{
            display: inline-block;
            font-size: 22px;
            color: #242424;
        }
    }
    .upload_input{
        margin-top: 30px;
        height: 280px;
        width: 100%;
        cursor: pointer;
        border: 2px dashed #b7b7b7;
        box-sizing: border-box;
        .pic{
            height: 100%;
        }
        .upload_input_btn{
            margin-top: 80px;
        }
        .upload_input_btn_content{
            margin-top: 20px;
            color: #b7b7b7;
        }
    }
    .area{
        .placeholder({
            color: #b9b9b9!important;
        });
        resize:none;
        -web-kit-appearance:none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        border: none;
        width: 100%;
        height: 234px;
        margin-top: 20px;
        padding: 20px 30px;
        font-size: 22px;
        color: #242424;
        box-sizing: border-box;
        background-color: #f4f4f4;
    }
    input{
        .placeholder({
            color: #b9b9b9!important;
        });
        -web-kit-appearance:none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        border: none;
        width: 100%;
        margin-top: 20px;
        padding: 20px 30px;
        font-size: 22px;
        color: #242424;
        box-sizing: border-box;
        background-color: #f4f4f4;
    }
    .half_width{
        width: 268px;
    }
    .ml{
        margin-left: 18px;
    }
    .next_btn{
        cursor: pointer;
        margin-top: 30px;
        font-size: 22px;
        color: #fff;
        background-color: #242424;
        padding: 25px 0 20px 0;
    }
    .cancle_upload{
        cursor: pointer;
        margin-top: 20px;
        font-size: 22px;
        color: #242424;
    }

}
</style>