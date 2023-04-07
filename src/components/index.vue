<template>
  <div class="index">
    <el-input
      style="width: 50%"
      v-model="name"
      placeholder="请输入书名"
      clearable
    ></el-input>
    <el-button @click="getDate">查询</el-button>
    <el-button @click="delBook" :disabled="ids.length === 0" >批量删除</el-button>
    <el-button @click="addbook">添加图书</el-button>
    <el-button type="primary" size="default" @click="goDetail">详情页面</el-button>
    
    <div class="table">
      <el-table
        ref="multipleTableRef"
        style="width: 100%"
        :data="dataList"
        stripe
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="col in columns"
          :prop="col.id"
          :key="col.id"
          :label="col.label"
          :width="col.width"
        >
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.row, 'edit')"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="handleEdit(scope.row, 'del')"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="编辑图片信息" v-model="dialogVisible" width="30%">
      <el-form :model="bookItem" class="demo-form-inline">
        <el-form-item label="编码">
          <el-input
            v-model="bookItem.id"
            readonly
          ></el-input>
        </el-form-item>
        <el-form-item label="书名">
          <el-input
            v-model="bookItem.name"
            placeholder="请输入书名"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import qs from "qs";
import { getDate, addBook ,delBook,updateBook,bookDetail} from "../httpRequest";
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      dataList: [],
      columns: [
        { label: "编码", id: "id" },
        { label: "书名", id: "name" },
      ],
      ids: [],
      dialogVisible: false, //是否显示对话框
      bookItem: {}, //图书详情信息
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.getDate();
  },
  methods: {
    //转成同步请求
    getDate() {
      getDate({ name: this.name }).then((res) => {
        this.dataList = res.msg;
        console.log(this.dataList);
      });
    },
    addbook() {
      addBook({
        name: this.name,
        id: this.dataList[this.dataList.length - 1].id + 1,
      }).then((res) => {
        ElMessage({
          message: "添加成功!",
          type: "success",
        });
        this.name = "";
        this.getDate();
      });
    },
    delBook() {
      delBook({id: this.ids, }).then((res) => {
        ElMessage({
          message: "删除成功!",
          type: "success",
        });
        this.ids = [];
        this.name = "";
        this.getDate();
      });
    },
    // 取出数组的id
    handleSelectionChange(val) {
      this.ids = val.map((item) => {
        return item.id;
      });
    },
    //编辑按钮
    handleEdit(row, type) {
      if (type == "edit") {
        this.bookDetail(row.id);
      } else {
        //删除
        this.ids = [];
        this.ids.push(row.id);
        this.delBook();
      }
    },
    bookDetail(id){
      bookDetail({id:id}).then(res=>{
        this.bookItem = res.msg[0];
        this.dialogVisible = true;
      })
    },

    //对话框确认事件
    confirm() {
      updateBook( { id: this.bookItem.id, name: this.bookItem.name }).then((res) => {
        ElMessage({
          message: "更新成功!",
          type: "success",
        });
        this.dialogVisible = false;
        this.ids = [];
        this.getDate();
      });
     
    },
    goDetail(){
      this.$router.push({
        name: "detail",//name的值对应routes.js中的name值
        params: {
          name: "张三", //传递参数
        },
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.index {
  .table {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
