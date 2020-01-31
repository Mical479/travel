<template>
  <div>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_200x200_77551cb9.jpg',
        title: '澳门水舞间演出',
        desc: '澳门特别行政区凼仔岛氹连贯公路新濠天地水舞间剧院'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_200x200_77551cb9.jpg',
        title: '澳门水舞间演出',
        desc: '澳门特别行政区凼仔岛氹连贯公路新濠天地水舞间剧院'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1801/5d/5d24bb249f8ca889a3.water.jpg_200x200_77551cb9.jpg',
        title: '澳门水舞间演出',
        desc: '澳门特别行政区凼仔岛氹连贯公路新濠天地水舞间剧院'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #EEEEEE
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #CCCCCC
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #FFFFFF
</style>
