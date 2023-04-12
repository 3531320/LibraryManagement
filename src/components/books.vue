<template>
  <el-carousel :interval="4000" type="card" height="200px" :autoplay="false">
    <el-carousel-item v-for="item in dataList" :key="item" >
      <h3 text="2xl" justify="center">{{ item.name }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import {
  getDate,
  addBook,
  delBook,
  updateBook,
  bookDetail,
} from "../httpRequest";
export default {
  name: "books",
  data() {
    return {
      dataList: [],
    };
  },
  props: {},
  created() {
    this.getDate();
  },
  methods: {
     getDate() {
      getDate({ name: this.name }).then((res) => {
        this.dataList = res.msg;
        console.log(this.dataList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>