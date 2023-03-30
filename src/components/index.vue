<template>
  <div v-for="(item, index) in dataList" :key="index">
    名字：{{ item.name }}
    <el-button>我是 ElButton</el-button>
    <br />
    年龄：{{ item.age }}
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "HelloWorld",
  data() {
    return {
      dataList: [],
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      const _this = this;
      axios({
        url: "/api/getpost",
        method: "GET",
        // transformRequest: [
        //   function (data) {
        //     data = qs.stringify(data);
        //     return data;
        //   },
        // ],
        // headers: {
        //   "Content-Type": "application/x-www-from-urlencoded;chatset=utf-8",
        // },
        dataType: "json",
      })
        .then((res) => {
          console.log("链接成功");
          _this.dataList = res.data.msg;
          console.log(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
