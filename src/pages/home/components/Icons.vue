<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="icon-swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.icon-swiper-pagination'
      },
      iconList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '万龙门票'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '静之湖滑雪'
      }, {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '古北水镇'
      }, {
        id: '007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '北京滑雪'
      }, {
        id: '008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '陶然亭滑雪'
      }, {
        id: '009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    position relative
    .icon-swiper-pagination
      text-align center
      position absolute
      bottom 0
    .icon
      position relative
      float left
      height 0
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()
</style>
