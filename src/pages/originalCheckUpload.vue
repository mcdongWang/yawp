<template>
    <div class="upload_wrap">
        <div class="upload_title">
            <p class="upload_title_content">YAMPART版权原创性信息校验</p>
            <p class="upload_title_sub_content">使用YAWPART数字版权在线校验功能, 让侵权行为无处可藏</p>
        </div>
        <div class="upload_input" @click="upload">
                <img v-show="imgPath" class="img_preview" :src="imgPath">
                <img v-show="!imgPath" class="upload_input_btn" src="../assets/img/upload.png"></img>
                <p  v-show="!imgPath"class="upload_input_btn_content">点击上传作品图片</p>
        </div>
        <div v-show="page == 1">
            <input class="file_upload_btn" type="file" @change="getImageUpload" ref="file">
        </div>
        <div class="next_btn" @click="pageChange()">数字版权校验</div>
        <dialog-wrap
            :closeState="showResult"
            @toggle="close">
            <original-check-result :art-info="result"></original-check-result>
        </dialog-wrap>
    </div>
</template>
<script>
import dialogWrap from '../components/dialog'
import originalCheckResult from './originalCheckResult'

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
      },
      result: {},
      showResult: false
    }
  },
  methods: {
    close () {
        this.showResult = false
    },
    pageChange () {
        this.uploading = true
        let data = new FormData();
        data.append('image', this.$refs.file.files[0]);
        this.$ajax.post('/api/check', data, {
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
                console.log(res.data)
                this.result = res.data
                this.showResult = true
                // this.$router.push('/artworkDetail/' + res.data.fid)
                // window.location.reload()
            }
        }).catch(err => {
            this.uploading = false
            alert('上传失败, 请重试')
        })
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
  },
  components: {
      dialogWrap,
      originalCheckResult
  },
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
    width: 800px;
    margin: 60px auto 40px auto;
    // margin-top: 174px;
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
        text-align: center;
        img{
            height: 40px;
            display: inline-block;
        }
        .upload_title_content{
            font-weight: bold;
            font-size: 40px;
            color: #242424;
        }
        .upload_title_sub_content{
            margin-top: 30px;
            font-size: 22px;
            color: #242424;
        }
    }
    .upload_input{
        margin-top: 60px;
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