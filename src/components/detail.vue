<template>
  <div>
    {{name}}
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
    props:{},
    created(){
      this.name = this.$route.query.name;//获取路由参数
      console.log(this.$route);
    },
    methods(){

    }
  }
</script>

<style lang="less" scoped>
  
</style>