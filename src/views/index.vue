<template>
  <div class="main">
    <h1>首页</h1>
    <section class="content">
      <el-table
        :data="currentData"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
          <template slot-scope="scope">
            {{scope.row.address.length}}
            <div v-if="scope.row.address && scope.row.address.length">
              <div  v-for="(item, index) in scope.row.address" :key="index">
                <div v-if="index <= 3">
                  <p>{{item}}</p> 
                </div>
                <p v-if="index === 3">more</p>
                <div v-if="index > 3 && !viewMore">
                  <p>{{item}}</p> 
                </div>
              </div>
              <!-- <p v-if="viewMore" @click="doViewMore">more</p> -->
            </div>
            <div v-else>
              <span>{{scope.row.address}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pageJson.currentPage"
          layout="total, prev, pager, next"
          :total="pageJson.total">
        </el-pagination>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class Index extends Vue {
  private viewMore: boolean = true
  private tableData: any[] = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      more: true,
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: [
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
        '上海市普陀区金沙江路 1517 弄',
      ],
      more: true,
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      more: true,
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
      more: true,
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
      more: true,
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
  }]
  private currentData: any[] = []
  private pageJson: any = {
    total: 0,
    currentPage: 1,
    pageSize: 10,
  }
  private created() {
    this.pageJson.total = this.tableData.length
    console.log('currentPage', this.pageJson.currentPage - 1)
    console.log('pageSize', this.pageJson.pageSize)
    this.currentData = this.tableData.slice(this.pageJson.currentPage - 1, this.pageJson.pageSize)
    console.log('current', this.currentData)
  }
  private handleSizeChange(val: any) {
    console.log(val)
    this.pageJson.currentPage = val
    this.currentData = this.tableData.slice(this.pageJson.currentPage - 1, this.pageJson.pageSize)
  }
  private handleCurrentChange(val: any) {
    console.log(val)
    this.pageJson.currentPage = val
    this.currentData = this.tableData.slice(this.pageJson.currentPage - 1, this.pageJson.pageSize)
  }
  private doViewMore() {
    this.viewMore = !this.viewMore
  }
}
</script>
