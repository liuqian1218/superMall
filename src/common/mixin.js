import {debounce} from './utils'
import backTop from 'components/content/backTop/backTop'

export const itemListenerMixin = {
    data(){
        return {
            itemImgListener:null ,
        }
    },
    mounted(){
    //频繁刷新防抖
      this.itemImgListener = debounce(this.$refs.scroll.refresh,500)
      //监听item中图片加载完成
      this.$bus.$on("ItemImgLoad",this.itemImgListener)
    }
}

export const backTopMix = {
    components:{
        backTop
    },
    data(){
        return {
            showBack : false ,
        }
    },
    methods:{
    //回到顶部点击事件
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      listenBackTop(position){
        this.showBack = -(position.y) > 1000 ? true :false ;
      }
    },
}