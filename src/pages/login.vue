<template>
    <div class="login_wrap">
        <img class="login_logo" src="../assets/img/logo_black.png">
        <p class="login_label">Name</p>
        <input type="text">
        <p class="login_label">Password</p>
        <input class="input_warning" type="password">
        <div class="login_btn">LOGIN</div>
        <div class="login_cancle" @click="$emit('cancle')">暂不登录</div>
    </div>
</template>
<style lang="less" scoped>
.login_wrap{
    width: 560px;
    margin: 240px auto 0 auto;
    margin-top: calc(~'(100vh - 500px) / 2');
    text-align: center;
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
        -web-kit-appearance:none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        border: none;
        width: 100%;
        margin-top: 20px;
        padding: 20px 30px;
        font-size: 22px;
        color: #b9b9b9;
        box-sizing: border-box;
        background-color: #f4f4f4;
    }
    .input_warning{
        border: 1px solid #f69;
    }
}
</style>