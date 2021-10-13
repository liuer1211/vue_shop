<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <!--左-->
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <!--右-->
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(it,indexs) in item" :key="indexs">
              <div class="food_container">
                <img :src="baseUrl+it.image_url">
              </div>
              <span>{{it.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination 分页器-->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!--列表-->
      <shop-list></shop-list>
      <!--<ShopList></ShopList>-->
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    data() {
      return {
        baseUrl: 'https://fuss10.elemecdn.com',
      }
    },
    created() {
      this.$store.dispatch('getCategorys');

    },
    mounted(){
      
    },
    components:{
      HeaderTop,
      ShopList
    },
    computed:{
      //获得数据，直接取state中的
      // ...mapState(['categorys']),
      categorysArr() {
        const categorys = this.$store.state.categorys || [];
        // console.log('-',categorys)
        // 准备空的二维数组
        const arr = [];
        let minArr = [];
        categorys.length && categorys.forEach(element => {
          // 当前小数组满足8个
          if(minArr.length===8){
            minArr = []
          }
          // minArr是空的，添加
          if(minArr.length===0){
            arr.push(minArr)
          }
          minArr.push(element)
        });
        // console.log(arr);
        return arr;
      },
      address() {
        const arrRess = this.$store.state.address || '';
        return arrRess;
      }
    },
    watch: {
      categorysArr(value) { 
        // 有数据 - 页面渲染完
        this.$nextTick(()=>{
          //轮播
          new Swiper('.swiper-container',{
            loop:true,//循环
            pagination:{  //分页器
              el:'.swiper-pagination',
            }
          })
        })
       
      }
    },

  }


</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commom/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
