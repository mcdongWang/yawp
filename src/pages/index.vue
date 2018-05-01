<template>
  <div class="wrap">
    <div class="banner">
        <img src="../assets/img/logo_black.png" class="logo" alt="">
        <p class="title">最酷的数字资产版权保护平台</p>
        <p class="sub_title">基于区块链技术提供最安全、简单的数字版权保护方式，保护创作者的根本利益，让数字内容可以安全传播与交易</p>
        <div class="start_btn">LET'S START</div>
        <img class="down" src='../assets/img/down.png' alt="">
    </div>
    <div class="feture">
        <div class="item">
            <img class="item_logo" src="../assets/img/index_icon_1.png" alt="">
            <p class="item_title">数字版权信息加密</p>
            <p class="item_sub_title">数字作品的版权信息将被完整的加密，防止各种形式的信息篡改、盗用和盗版</p>
        </div>
        <div class="item">
            <img class="item_logo" src="../assets/img/index_icon_2.png" alt="">
            <p class="item_title">数字版权信息加密</p>
            <p class="item_sub_title">数字作品的版权信息将被完整的加密，防止各种形式的信息篡改、盗用和盗版</p>
        </div>
        <div class="item">
            <img class="item_logo" src="../assets/img/index_icon_3.png" alt="">
            <p class="item_title">数字版权信息加密</p>
            <p class="item_sub_title">数字作品的版权信息将被完整的加密，防止各种形式的信息篡改、盗用和盗版</p>
        </div>
        <div class="item">
            <img class="item_logo" src="../assets/img/index_icon_4.png" alt="">
            <p class="item_title">数字版权信息加密</p>
            <p class="item_sub_title">数字作品的版权信息将被完整的加密，防止各种形式的信息篡改、盗用和盗版</p>
        </div>
    </div>
    <div class="project">
        <p class="title">OUR PROJECT</p>
        <p class="sub_title">为上传的数字作品提供隐写数字水印服务，在保证视觉效果的情况下记录您的版权信息。现在已经有一些年轻的数字艺术家和内容创作者加入了我们的计划</p>
        <div class="project_list_wrap">
            <div class="wrap_left wrap">
                <img v-if="projectsList[activeProjectIndex]" class="user_photo" :src="projectsList[activeProjectIndex].avator || ''" alt="">
                <ul class="user_list">
                    <li :class="[activeProjectIndex == index ? 'user_name_selected' : '', 'user_name']" v-for="(item, index) in projectsList" @click="pickProjectAuther(index)">{{item.author}}</li>
                    <!-- <li class="user_name">LU SHAN</li>
                    <li class="user_name">YU YIMENG</li>
                    <li class="user_name">YANG LIQIAN</li>
                    <li class="user_name">YU YIMENG</li> -->
                </ul>
            </div>
            <div class="wrap_mid wrap">
                <img v-if="projectsList[activeProjectIndex]" class="project_img project_img_height" :src="projectsList[activeProjectIndex].pics[0]">
                <img v-if="projectsList[activeProjectIndex]" class="project_img project_img_width" :src="projectsList[activeProjectIndex].pics[1]">
            </div>
            <div class="wrap_right wrap">
                <img v-if="projectsList[activeProjectIndex]" class="project_img project_img_width" :src="projectsList[activeProjectIndex].pics[2]">
                <img v-if="projectsList[activeProjectIndex]" class="project_img project_img_height" :src="projectsList[activeProjectIndex].pics[3]">
            </div>
        </div>
    </div>
    <div class="artworks" v-for="(item, index) in artworksList" v-show="index == activeArtworkIndex">
        <div class="art">
            <!-- :src="artworksList[activeArtworkIndex].pic" -->
            <img :src="artworksList[activeArtworkIndex].pic">
        </div>
        <div class="art_info">
            <p class="title">ARTWORKS</p>
            <div class="wrap">
                <p class="wrap_title">{{item.name}}</p>
                <p class="wrap_content">{{item.comment}}</p>
            </div>
            <div class="control">
                <span @click="goPrevious(index)">&lt;</span>
                <span @click="goNext(index)">&gt;</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            projectsList: [],
            activeProjectIndex: 0,
            artworksList: [],
            activeArtworkIndex: 0
        }
    },
    methods: {
        getList () {
            this.$ajax.get('/api/home')
            .then(response => {
                this.projectsList = response.data.projects
                this.artworksList = response.data.artworks
            })
            .catch(error => {
                console.log(error)
            });
        },
        pickProjectAuther (index) {
            this.activeProjectIndex = index
        },
        goPrevious (index) {
            if (index != 0) {
                this.activeArtworkIndex --
            } else {
                this.activeArtworkIndex = this.artworksList.length - 1
            }
        },
        goNext (index) {
            if (index != this.artworksList.length - 1) {
                this.activeArtworkIndex ++
            } else {
                this.activeArtworkIndex = 0
            }
        }
    },
    created () {
        this.getList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.wrap{
    .banner{
        position: relative;
        height: 1000px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 1000px;
        background-image: url('../assets/img/banner.png');
        text-align: center;
        z-index: 1px;
        .logo{
            padding-top: 280px;
            height: 78px;
            width: 280px;
        }
        .title{
            margin-top: 40px;
            font-size: 56px;
            color: #242424;
            font-weight: bold;
        }
        .sub_title{
            margin: 60px auto 0px auto;
            font-size: 22px;
            line-height: 40px;
            color: #242424;
            width: 750px;
        }
        .start_btn{
            margin: 160px auto 0 auto;
            box-sizing: border-box;
            width: 194px;
            height: 56px;
            font-size: 22px;
            line-height: 48px;
            color: #242424;
            // font-family: SourceHanSans;
            font-weight: bold;
            border: solid 4px #242424;
        }
        .down{
            margin-top: 12px;
            width: 24px;
            height: 24px;
        }
        // &:after{
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     content: "";
        //     background-color: #F5F5F5;
        //     opacity: 0.22;
        //     z-index: 1;
        //     width: 100%;
        //     height: 100%;
        // }
    }
    .feture{
        height: 520px;
        width: 100%;
        text-align: center;
        background-color: #222;
        .item{
            display: inline-block;
            margin-left: 80px;
            width: 240px;
            .item_logo{
                margin-top: 127px;
                height: 100px;
                width: 100px;
            }
            .item_title{
                margin-top: 44px;
                font-size: 22px;
                color: #fff;
            }
            .item_sub_title{
                margin-top: 16px;
                font-size: 16px;
                line-height: 1.8;
                color: #fff;
                opacity: .6;
            }
        }
        .item:first-child{
            margin-left: 0;
        }
    }
    .project{
        text-align: center;
        .title{
            margin-top: 100px;
            font-size: 50px;
            color: #222;
            font-weight: bold;
        }
        .sub_title{
            width: 800px;
            margin: 42px auto 0 auto;
            margin-top: 42px;
            font-size: 22px;
            color: #242424;
            line-height: 1.8;
        }
        .project_list_wrap{
            margin-top: 100px;
            .wrap{
                vertical-align: top;
                margin-left: 24px;
                display: inline-block;
                height: 768px;
                width: 384px;
                .project_img{
                    width: 384px;
                    &:nth-child(2){
                        margin-top: 24px;
                    }
                }
                .project_img_height{
                    height: 504px;
                }
                .project_img_width{
                    height: 240px;
                }
            }
            .wrap:first-child{
                margin-left: 0;
            }
            .wrap_left{
                color: #fff;
                background-color: #222;
                .user_photo{
                    margin-top: 120px;
                    width: 110px;
                    height: 110px;
                    border-radius: 110px;
                }
                .user_list{
                    .user_name{
                        margin-top: 41px;
                        height: 41px;
                        font-size: 22px;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:first-child{
                            margin-top: 60px;
                        }
                    }
                    .user_name_selected{
                        font-weight: bold;
                        position: relative;
                        &:after{
                            content: '';
                            width: 40px;
                            height: 4px;
                            background-color: #fff;
                            position: absolute;
                            bottom: 0;
                            left: 172px;
                        }
                    }
                }
            }
        }
    }
    .artworks{
        width: 1200px;
        margin: 115px auto 180px auto;
        position: relative;
        .art{
            height: 530px;
            img{
                height: 530px;
                width: 792px;
            }
        }
        .art_info{
            position: absolute;
            width: 469px;
            top: 0;
            right: 0;
            .title{
                margin-left: 100px;
                font-size: 50px;
                font-weight: bold;
                color: #222;
                margin-top: 58px;
            }
            .wrap{
                height: 130px;
                margin-top: 40px;
                background-color: #222;
                padding: 40px;
                .wrap_title{
                    font-size: 22px;
                    color: #fff;
                }
                .wrap_content{
                    margin-top: 8px;
                    font-size: 14px;
                    color: #fff;
                    line-height: 2.5;
                }
            }
            .control{
                margin-top: 40px;
                margin-left: 100px;
                span{
                    cursor: pointer;
                    display: inline-block;
                    height: 60px;
                    width: 60px;
                    font-size: 20px;
                    text-align: center;
                    line-height: 60px;
                    background-color: #222;
                    color: #fff;
                    &:nth-child(2){
                        margin-left: 24px;
                    }
                }
            }
        }
    }
}
</style>
