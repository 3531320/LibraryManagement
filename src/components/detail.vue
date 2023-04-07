<template>
  <div>
    sssss
  </div>
</template>
<script>
  export default{
    name:"detail",
    data(){
      return{
        name:""
      }
    },
    created(){
      this.name = this.$route.params.name;//获取路由参数
    },
    methods(){

    }
  }
</script>

<style lang="less" scoped>
  
</style>