<template>
    <div class="link_check">
        <p class="form_title">YAWPART数字版权区块链</p>
        <p class="form_info">使用YAWPART数字版权区块链搜索引擎，随时查询数字作品的原创性信息，让侵权行为无处可藏</p>
        <p v-show="checkWarning" class="link_check_warning">请输入正确的ID</p>
        <input
            type="text"
            class="form_input"
            :class="{'form_input_warning': checkWarning}"
            @input="input"
            placeholder="Block ID"
            v-model="searchValue"/>
        <button class="form_btn" @click="search">查询</button>
        <dialog-wrap
            :closeState="showLogin"
            @toggle="close">
            <link-check-result :art-info="artInfo"></link-check-result>
        </dialog-wrap>
    </div>
</template>
<script>

import dialogWrap from '../components/dialog'
import linkCheckResult from './linkCheckResult'
export default {
    name: 'LinkCheck',
    data () {
        return {
            showLogin: false,
            searchValue: '',
            artInfo: {
                bloackID: '',
                blockCreationTime: '',
                artworkName: '',
                author: '',
                comments: '',
                price: '',
                editionLeft: '',
                editionTotal: '',
                owner: '',
                ownerBefore: ''
            },
            checkWarning: false
        }
    },
    components: {
        dialogWrap,
        linkCheckResult
    },
    methods: {
        input (value) {
            if(this.searchValue){
                this.checkWarning = false
            }
        },
        close () {
            this.showLogin = false
        },
        search () {
            if(!this.searchValue){
                this.checkWarning = true
                return
            }
            this.$ajax.get('/api/search', {
                params: {
                    data: this.searchValue
                    // data: 'dc192343e61e997deccaa03aacaf6e9a95236ed27d311c0f197681b16df94ccd'
                }
            })
            .then(response => {
                if(response.data.status == 1){
                    alert('请输入正确的ID')
                    return
                }else{
                    this.showLogin = true
                    this.artInfo = response.data
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.link_check{
    text-align: center;
    padding-top: 60px;
    color: #242424;
    position: relative;
    .link_check_warning{
        position: absolute;
        top: 204px;
        left: 50%;
        margin-left: -280px;
        text-align: left;
        font-size: 14px;
        color: #ff5e5e;
        width: 560px;
        // display: inline-block;
    }
    .form_title{
        font-weight: bold;
        font-size: 40px;
    }
    .form_info{
        margin-top: 30px;
        font-size: 22px;
    }
    .form_input{
        box-sizing: border-box;
        margin-top: 80px;
        margin-bottom: 40px;
        width: 560px;
        padding: 20px 30px;
        font-size: 22px;
    }
    .form_input_warning{
        // border-style: unset;
        // border-color: #ff5e5e;
        border: 2px solid #ff5e5e;
    }
    .form_btn{
        display: block;
        margin: 0 auto 30px;
        font-size: 22px;
        color: #fff;
        padding: 20px 0;
        width: 560px;
        background-color: #242424;
        border: 0;
    }
}
</style>
