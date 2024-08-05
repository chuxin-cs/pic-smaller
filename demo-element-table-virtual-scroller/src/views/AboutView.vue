<template>
  <div class="about">
    <virtual-scroll
      :data="resultData"
      :item-size="50"
      key-prop="id"
      @change="(virtualList) => (tableData = virtualList)"
      :virtualized="true"
      @selection-change="handleSelectionChange"
    >
      <el-table :data="item" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="address1" label="地址"> </el-table-column>
        <el-table-column prop="address2" label="地址"> </el-table-column>
        <el-table-column prop="address3" label="地址"> </el-table-column>
        <el-table-column prop="address4" label="地址"> </el-table-column>
        <el-table-column prop="address5" label="地址"> </el-table-column>
        <el-table-column prop="address6" label="地址"> </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < 2000; i++) {
      this.tableData.push({
        date: "2016-05-02",
        name: "王小虎",
        address1: "上海市普陀区金沙江路 1518 弄",
        address2: "上海市普陀区金沙江路 1518 弄",
        address3: "上海市普陀区金沙江路 1518 弄",
        address4: "上海市普陀区金沙江路 1518 弄",
        address5: "上海市普陀区金沙江路 1518 弄",
        address6: "上海市普陀区金沙江路 1518 弄",
        address: "上海市普陀区金沙江路 1518 弄",
      });
    }
  },
};
</script>
