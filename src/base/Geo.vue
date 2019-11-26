<template>
    <span>{{location}}</span>
</template>
<script>
import BMap from "BMap"
export default {
   data(){
       return {location:"定位中……"}
   },
   created(){
       const geolocation = new BMap.Geolocation()
       geolocation.getCurrentPosition((r)=>{
           const point = new BMap.point(r.point.lng,r.point.lat)
           const myGeo = new BMap.Geocoder()
           myGeo.getLocation(p,(result)=>{
               this.location = result.address
           })
       })
   }
}
</script>
<style lang="stylus">
</style>