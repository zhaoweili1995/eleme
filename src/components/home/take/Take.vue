<template>
    <div class="take">
        <Top></Top>
        <Category></Category>
        <Ad></Ad>
        <Recommend></Recommend>
        <SellerList></SellerList>
    </div>
</template>
<script>


import Top from "./Top"
import Category from "./Category"
import Ad from "./Ad"
import Recommend from "./Recommend"
import SellerList from "./SellerList"

export default {
    name:"Take",
    data(){
        return{}
    },
    components:{
        Top,
        Category,
        SellerList,
        Ad,
        Recommend

    }
}
</script>

<style lang="stylus" scoped>

</style>