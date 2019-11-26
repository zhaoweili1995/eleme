<template>
<el-rate
  v-model="value"
  show-text>
</el-rate>
</template>
<script>
export default {
  props:{
     readOnly:{
       type:Boolean,
       default:false
     },
     value:{
       type:Number,
       default:5
     }
  },
 
  name: 'Star'
}
</script>
<style lang="stylus" scoped>
</style>
