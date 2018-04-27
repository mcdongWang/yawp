<template>
    <div class="link_check">
        <p class="form_title">YAWPART数字版权区块链</p>
        <p class="form_info">使用YAWPART数字版权区块链搜索引擎，随时查询数字作品的原创性信息，让侵权行为无处可藏</p>
        <input type="text" class="form_input" placeholder="Block ID" v-model="searchValue"/>
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
            }
        }
    },
    components: {
        dialogWrap,
        linkCheckResult
    },
    methods: {
        close () {
            this.showLogin = false
        },
        search () {
            this.$ajax.get('/api/search?', {
                params: {
                    // data: this.searchValue
                    data: 'dc192343e61e997deccaa03aacaf6e9a95236ed27d311c0f197681b16df94ccd'
                }
            })
            .then(response => {
                this.showLogin = true
                this.artInfo = response.data
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
    .form_title{
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
    .form_btn{
        display: block;
        margin: 0 auto 300px;
        font-size: 22px;
        color: #fff;
        padding: 20px 0;
        width: 560px;
        background-color: #242424;
        border: 0;
    }
}
</style>
