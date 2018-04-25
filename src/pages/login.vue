<template>
    <div class="login_wrap">
        <img class="login_logo" src="../assets/img/logo_black.png">
        <p class="login_label">Name</p>
        <input
            :class="{'input_warning': inputWarning.username}"
            :palceholder="placeholder.username"
            type="text"
            v-model="userInfo.username"
            @blur="blur('username')"
            @input="blur('username')">
        <p class="login_label">Password</p>
        <input
            :class="{'input_warning': inputWarning.password}"
            :palceholder="placeholder.username"
            type="password"
            v-model="userInfo.password"
            @blur="blur('password')"
            @input="blur('password')">
        <p v-show="warningContent" class="login_label">{{warningContent}}</p>
        <div @click="login" class="login_btn">LOGIN</div>
        <div class="login_cancle" @click="$emit('cancle')">暂不登录</div>
    </div>
</template>
<script>

import md5 from 'md5'
export default {
    name: 'login',
    data () {
        return {
            userInfo: {
                username: '',
                password: ''
            },
            inputWarning: {
                username: false,
                password: false
            },
            placeholder: {
                username: '请输入帐号',
                password: '请输入密码'
            },
            warningContent: ''
        }
    },
    methods: {
        login() {
            if(this.check()){
                let params = {
                    username: this.userInfo.username,
                    password: md5(this.userInfo.password)
                }
                this.$ajax.post('/api/login', params)
                    .then(res => {
                        if(res.data.status == 0){
                            console.log('登录成功')
                            this.$emit('loginSuccess', params.username)
                        }else{
                            console.log('登录失败')
                            this.warningContent = '账号或密码错误'
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        this.warningContent = '网络错误, 请稍后再试'
                    })
            }else{
                return
            }
        },
        blur(type) {
            if(this.warningContent){
                this.check()
            }
            if(!this.userInfo[type]){
                this.inputWarning[type] = true
            }else{
                this.inputWarning[type] = false
            }
        },
        check() {
            let warningList = []
            if(!this.userInfo.username){
                warningList.push('帐号')
            }
            if(!this.userInfo.password){
                warningList.push('密码')
            }
            if(warningList.length){
                this.warningContent = `请输入${warningList.join('、')}`
                return false
            }else{
                this.warningContent = ''
                return true
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

.login_wrap{
    width: 560px;
    margin: 240px auto 0 auto;
    margin-top: calc(~'(100vh - 500px) / 2');
    text-align: center;
    min-height: 500px;
    .login_logo{
        width: 290px;
        height: 80px;
    }
    .login_label{
        text-align: left;
        font-size: 22px;
        font-weight: bold;
        color: #242424;
        margin-top: 26px;
    }
    .login_btn{
        cursor: pointer;
        margin-top: 30px;
        font-size: 22px;
        color: #fff;
        background-color: #242424;
        padding: 25px 0 20px 0;
    }
    .login_cancle{
        cursor: pointer;
        margin-top: 20px;
        font-size: 22px;
        color: #242424;
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
    .input_warning{
        border: 1px solid #f69;
    }
}
</style>