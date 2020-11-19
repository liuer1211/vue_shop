<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  // 24
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {

    mounted(){
      //发请求，调接口
      //this.$store.dispatch('getAddress')
      this.getAddress()
    },

    methods:{
      //映射声明一个函数
      ...mapActions(['getAddress'])

    },

    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
