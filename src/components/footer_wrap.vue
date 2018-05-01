<template>
    <div class="wrap">
        <div class="content">
            <div class="left">
                <img src="../assets/img/logo.png" alt="">
                <p class="copy">&copy; 2018 呐喊青年（北京）科技文化有限公司</p>
            </div>
            <div class="right">
                <ul>
                    <li>快速链接</li>
                    <li>Home</li>
                    <li>OUR PROJECT</li>
                    <li>ARTWORKS</li>
                </ul>
                <ul>
                    <li>公司信息</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>官方微博</li>
                </ul>
                <ul>
                    <li>法律声明</li>
                    <li>服务条款细则</li>
                    <li>隐私政策</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.wrap{
    width: 100%;
    height: 365px;
    background-color: #222;
    .content{
        width: 1200px;
        margin: 0 auto;
        padding-top: 100px;
        .left{
            display: inline-block;
            .copy{
                padding-top: 18px;
                font-size: 14px;
                color: #fff;
            }
        }
        .right{
            display: inline-block;
            vertical-align: top;
            font-size: 0;
            margin-left: 400px;
            ul{
                vertical-align: top;
                display: inline-block;
                width: 200px;
                li{
                    color: #fff;
                    font-size: 16px;
                    opacity: .6;
                    margin-top: 22px;
                    cursor: pointer;
                }
                & li:first-child{
                    cursor: unset;
                    font-size: 22px;
                    color: #fff;
                    opacity: 1;
                    font-weight: bold;
                    margin-top: 0px;
                }
                & li:nth-child(2){
                    margin-top: 30px;
                }
                & li:nth-child(3){
                }
                & li:nth-child(4){
                }
            }
        }
    }
}
</style>