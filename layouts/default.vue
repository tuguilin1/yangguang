<template>
  <el-container>
    <el-header><Header/></el-header>
    <el-main> 
      <div>
        <nuxt/>
      </div>
    </el-main>
    <el-footer><Footer/></el-footer>
  </el-container>
  
</template>


<script type="text/javascript">
  import Header from "@/components/header"
  import Footer from "@/components/footer"

  export default{
    components:{
      Header,
      Footer
    }
  }
</script>
<style lang="less">
@color:#ff464e;
.el-header{
  height: auto !important;
}
</style>
