<template>
    <div class="upload_wrap">
            <div class="upload_title">
                <img src="../assets/img/logo_black.png" alt="">
                <p class="upload_title_content">现在就上传你的数字作品吧!</p>
            </div>
            <div class="upload_input" @click="upload">
                    <img v-show="imgPath" class="img_preview" :src="imgPath">
                    <img v-show="page == 1 && !imgPath" class="upload_input_btn" src="../assets/img/upload.png"></img>
                    <p  v-show="page == 1 && !imgPath"class="upload_input_btn_content">点击上传作品图片</p>
            </div>
            <div v-show="page == 1">
                <input class="file_upload_btn" type="file" @change="getImageUpload" ref="file">
                <input v-model="artInfo.artname" type="text" placeholder="请输入作品名称">
                <input v-model="artInfo.cr" type="text" placeholder="请输入版权人信息">
                <input v-model="artInfo.price" min="0" type="number" placeholder="该版本销售价格" class="half_width">
                <input
                    :disabled="parseInt(artInfo.price) === 0"
                    v-model="artInfo.count"
                    type="number"
                    :placeholder="parseInt(artInfo.price) === 0 ? '价格为零不可销售' : '该版本发售数量'"
                    class="half_width ml"
                    min="0"
                     onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                     onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\D/g,'')}">
            </div>
            <div v-show="page == 2">
                <textarea v-model="artInfo.comments" class="area" placeholder="请输入作品描述"></textarea>
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
      page: 1,
      imgPath: '',
      uploading: false,
      artInfo: {
        img: '',
        cr: '',
        artname: '',
        price: '',
        count: '',
        comments: ''
      }
    }
  },
  methods: {
    pageChange () {
        if(this.page == 1){
            this.page = 2
        }else{
            this.uploading = true
            let data = new FormData();
            data.append('image', this.$refs.file.files[0]);
            data.append('cr', this.artInfo.cr);
            data.append('artname', this.artInfo.artname);
            data.append('price', this.artInfo.price);
            data.append('count', this.artInfo.count);
            data.append('comments', this.artInfo.comments);

            this.$ajax.post('/api/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    // 'Content-Type': 'x-www-form-urlencoded'
                }
            }).then(res => {
                this.uploading = false
                console.log(res)
                if(res.data.status == 1){
                    alert('上传失败, 请重试')
                }else{
                    // alert('恭喜, 上传成功')
                    console.log(res.data.fid)
                    this.$router.push('/artworkDetail/' + res.data.fid)
                    // window.location.reload()
                }
            }).catch(err => {
                this.uploading = false
                alert('上传失败, 请重试')
            })
        }
    },
    cancle () {
        if(this.page == 1){
            this.$emit('cancle')
        }else{
            this.page = 1
        }
    },
    getImageUpload () {
        let file = this.$refs.file.files[0];
        console.log(file)
        if(!file){
            return
        }
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
            //图片url
            vm.imgPath = e.target.result;
        };
        reader.readAsDataURL(file);
    },
    upload () {
        document.getElementsByClassName('file_upload_btn')[0].click()
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
    .file_upload_btn{
        width: 0px;
        height: 0px;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
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
        position: relative;
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
        .img_preview{
            max-width: 100%;
            max-height: 276px;
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
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