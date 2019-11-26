<template>
    <div class="find">
        <div class="title">发现</div>

        <div class="flex-container">
            <div class="flex-item">
                <img src="/static/img/find/faxian-1.png">
                <img src="/static/img/find/faxian-4.png">
            </div>
            <div class="flex-item">
                <img src="/static/img/find/faxian-2.png">
                <img src="/static/img/find/faxian-3.png">
                <img src="/static/img/find/faxian-5.png">          
            </div> 
        </div>
        <div class="gray-bg"></div>
        <div class="find-add"><img src="/static/img/find/add.jpg" style="width:100%;height:auto"></div>
        <div class="gray-bg"></div>

        <div class="tui">
            <h3>美食热推</h3>
            <p>你的口味,我们都懂</p>
        </div>
        
        <ul class="goods-container">
            <li><img src="/static/img/goods/aeljtplr.webp"></li>
            <li><img src="/static/img/goods/bbz.webp"></li>
            <li><img src="/static/img/goods/bcdht.webp"></li>
        </ul>
  
    </div>
</template>
<script>
export default {
    name:"Find"
}
</script>

<style lang="stylus" scoped>

.find{
    .title{width:100%;height:1.6rem;line-height:1.6rem; font-size:0.4rem; color:#fff;text-align:center;background:#00a6ff}

    .flex-container {
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: auto;
        .flex-item {
        width: 50%;

    }

}
}
    .gray-bg{width:100%;height:.4rem; background:#eeeeee}
    .tui{
        text-align:center
        margin-top:70px
       h3{font-size:48px;margin-bottom:25px}
   
    }

    

      .goods-container{
            display: -webkit-flex;
            display: flex;
            width: 90%;
            margin-left:5%;
            margin-top:40px;
            height: auto;

        li {width: 30%;margin-left:1.5%; margin-right:1.5%;
         img{width:100%}}
      }
</style>