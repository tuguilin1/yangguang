<template>
  <div class="index">
     <section class="nav">
       <nav class="left-nav">
         <div v-for="(item,index) in leftNavs" :key="index" :class="[index%2==0?'active1':'',index!==0&&index!==1?'active2':'']"><nuxt-link :to="'/'+item">{{item}}</nuxt-link></div>
       </nav>
       <nav class="banner">
         <div class="block">
            <el-carousel height="350px">
              <el-carousel-item v-for="item in bannerData" :key="item.id">
                <div class="wrap-img"><img :src="item.pic"></div>
              </el-carousel-item>
            </el-carousel>
          </div>
       </nav>
       <nav class="right-nav">
         <img src="../assets/activity.png">
       </nav>
     </section>
     <section class="container">
       <goods-list :goods-list="goodsData"></goods-list>
     </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from "axios"
import goodsList from "~/components/goodslist.vue"
export default {
  components: {
    Logo,
    goodsList
  },
  data(){
    return{
      leftNavs:["女装","男装","鞋子","箱包","母婴","美妆","居家","家纺","文体","美食","数码","电器","内衣","配饰"],
      pageNum:1
    }
  },
  asyncData() {
    return axios.all([axios.get('http://127.0.0.1:3000/data/banner'),axios.get("http://127.0.0.1:3000/data/pagedata?page=1")]).then((arr)=>{
      console.log(arr);
      return {
        "bannerData":arr[0].data,
        "goodsData":arr[1].data
      }
    });
  },
  mounted(){
    console.log(this.goodsData)
  }
}
</script>

<style lang="less">
@color:#ff464e;
  .el-main{
    padding: 0;
  }
  .index{
    width: 100%;
    box-sizing: border-box;
    padding-left: 5%;
    padding-right: 5%;
    background: #f6f6f6;
    .nav{
      display: flex;
      justify-content:space-between;
      height: 350px;
      .left-nav{
        width: 200px;
        display: flex;
        flex-wrap: wrap;
        background: white;
        div{
          width:39px;
          padding: 10px 30px;
          height: 29px;
          line-height: 29px;
          text-align: center;
          position: relative;
          cursor: pointer;
        }
        div:hover{
          color:@color;
        }
        .active1:after{
          content:"";
          position: absolute;
          left: auto;
          top:15px;
          right:0;
          height: 20px;
          width: 1px;
          background: #999;
        }
        .active2{
          border-top: 1px dotted #999;
        }
      }
      .right-nav{
        width: 250px;
        padding-left: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .banner{
        flex:1;
        .wrap-img{
          width: 100%;
          height: 350px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .container{
      margin-top: 30px;
    }
  }
</style>
