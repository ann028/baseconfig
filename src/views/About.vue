<template>
  <div class="mian about">
    <h1>about</h1>
    <div class="content">
      <el-table
        :data="tableData"
        style="width: 100%; overflow-y: auto"
        :span-method="arraySpanMethod"
        @cell-click="cellClick"
        @cell-mouse-enter="tableHover">
        <!-- <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column> -->
        <el-table-column
          label= "序号">
          <template slot-scope="scope">
           <span :style="scope.row.show ? '' : 'display: none;'">{{scope.row.index}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label= "数据类型"
          prop="type">
          <template slot-scope="scope">
            <div  :style="scope.row.show ? '' : 'display: none;'">
              <i class="el-icon-caret-bottom"></i>
              <span>{{scope.row.type}}</span>
            </div>
           
          </template>
        </el-table-column>
        <el-table-column
          label="商品 ID"
          prop="id">
          <template slot-scope="scope">
            <!-- {{scope.row.id}} -->
            <div :style="scope.row.show ? '' : 'display: none;'">
              <el-progress v-if="spanArr[scope.$index] !== 0" :percentage="scope.row.complateRate" style="width: 200px;"></el-progress>
              <span v-else>{{scope.row.id}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" prop="name">
          <template slot-scope="scope">
           <span :style="scope.row.show ? '' : 'display: none'" :class="scope.row.show ? 'show' : ''">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="描述"
          prop="desc">
          <template slot-scope="scope">
           <span :style="scope.row.show ? '' : 'display: none'">{{scope.row.desc}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({
  components: {
  }
})
export default class about extends Vue {
  private tableData: any = [
    {
      index: 1,
      type: '交易类',
      complateRate: 50,
    },{
      index: 2,
      id: '12987122',
      type: '交易类',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333',
      complateRate: 50,
    }, {
      index: 3,
      id: '12987123',
      type: '交易类',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333',
      complateRate: 20,
    }, {
      index: 4,
      id: '12987122',
      type: '交易类',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333',
      complateRate: 50,
    },
    {
      index: 5,
      type: '权益类',
      complateRate: 20,
    },
    {
      index: 6,
      id: '12987122',
      type: '权益类',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333',
      complateRate: 20,
    }
  ]
  private spanArr: any[] = []
  private position: any = 0
  private cellIndex: any = '-1'

  private arraySpanMethod(row: any) {
    if (this.tableData.length > 1) {
       if (row.columnIndex === 1) {
        const row1 = this.spanArr[row.rowIndex];
        const col1 = row1 > 0 ? 1 : 0;
        return {
          rowspan: row1,
          colspan: col1,
        }
      }
      // if (row.columnIndex === 0 || row.columnIndex === 1) {
      //   return [1, 1]
      // } else if (row.columnIndex === 2) {
      //   // console.log('this.spanArr', this.spanArr)
      //   // console.log('========', row.rowIndex)
      //   return [1,3]
      // }  else {
      //   return [0,0]
      // }
    }
   
  }
  private rowspan() {
    this.spanArr = []
    this.position = 0
    this.tableData.forEach((item: any, index: any) => {
      if ( index === 0) {
        this.spanArr.push(1);
        this.position = 0;
        this.tableData[index].show = true
      } else {
        if (this.tableData[index].type ===  this.tableData[index - 1].type) {
          this.spanArr[this.position] += 1;
          this.spanArr.push(0);
          this.tableData[index].show = false
        } else {
          this.spanArr.push(1);
          this.position = index;
          this.tableData[index].show = true
        }
      }
    })
    this.position = 0
    console.log(this.tableData)
    // this.spanArr = this.spanArr.map((item: any) => {
    //   return item + 1
    // })
  }
  private cellClick(row: any) {
    this.tableData.forEach((item: any, index: any) => {
      if (row.index < item.index && item.index < row.index + this.spanArr[row.index - 1]) {
        this.tableData[index].show = !this.tableData[index].show
      }
    })
    // this.tableData[row.index].show = true
    console.log('=================', this.tableData)
    this.tableData.push()
  }
  private tableHover(row: any) {
    console.log(row)
  }
  private created() {
    // console.log(this.tableData)
    this.rowspan()
  }
}
</script>
<style lang="less">
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-table td {
    vertical-align: top;
    padding: 0;
  }
  .show{
    .el-table td {
      vertical-align: top;
      // padding: 0;
      border-bottom: 0;
    }
  }
</style>
