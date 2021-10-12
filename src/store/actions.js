/*
* 通过mutations间接更新state的多个方法的对象
* */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_GOODS} from "./mutation-types";
import {reqAddress,reqFoodCategorys,reqShops,reqShopGoods} from '../api'

export default {
  //地址
  async getAddress({commit,state}){
    try {
      // console.log('...........',commit,state)
      //发送异步ajax请求
      const geohash=state.latitude+','+state.longitude
      const res=await reqAddress(geohash)
      const result=res.data
      //console.log('re',result)
      //提交一个mutations
      if(result.code===0){
        //address  是 对应mutation方法的对象
        const address=result.data
        commit(RECEIVE_ADDRESS,{address})
      }
    } catch (e) {
      const address = {
        address: "北京市昌平区S337",
        city: "北京市",
        geohash: "40.10038,116.36867",
        latitude: "40.10038",
        longitude: "116.36867",
        name: "上海浦东新区",
      };
      commit(RECEIVE_ADDRESS,{address});
    }
  },
  //食品
  async getCategorys({commit}){
    //发送异步ajax请求
    const result=await reqFoodCategorys()
    //提交一个mutations
    if(result.code===0){
      //category  是 对应mutation方法的对象
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {latitude,longitude}=state
    const result=await reqShops(longitude,latitude)
    //提交一个mutations
    if(result.code===0){
      //address  是 对应mutation方法的对象
      const shops=result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  // 商品
  async getGoods({commit,state},callback) {
    const result= await reqShopGoods()
    if (result.code === 0){
      const goods=result.data
      commit(RECEIVE_GOODS,{goods})
      callback && callback()
    } else {
      const goods=[{name:'113'}]
      commit(RECEIVE_GOODS,{goods})
      callback && callback()
    }
  }
}
