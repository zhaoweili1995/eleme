<template>
<div class="ad">
  <div class="lunbo-box">
    <el-carousel indicator-position="none">
      <el-carousel-item
        class="lunbo-box-item"
        v-for="(item,index) in abc_img"
        :key="index"
      >
        <img :src="item.src" class="lunbotu" alt="轮播图">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>
<script>


export default {
  name:"ad",
  data(){
    return{
      abc_img:[
        {src:"/static/img/ad/ad1.jpg"},
        {src:"/static/img/ad/ad2.jpg"},
        {src:"/static/img/ad/ad3.jpg"}
      ]
    }
  }
}
</script>

<style lang="stylus">
   .ad{width:100%;height:360px;float:left;margin-top:30px;margin-left:5%}
   .lunbotu{width:90%;height:300px;margin-top:30px;margin-bottom:30px}
</style>