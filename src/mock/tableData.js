// import Mock from 'mockjs' // 引入mockjs

// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let data = {
  token: 'asasas@3wec',
  userId: 23,
  userName: 'Anna',
  roles: 'staff'
} // 用于接受生成数据的数组


const userInfo = {
  token: 'asasas@3wec',
  userId: 23,
  userName: 'Anna',
  roles: 'staff'
}
export default {
  'post|/data/tableData': option => {
    console.log('shuju', option)
    return {
      status: 200,
      message: 'success',
      data: userInfo
    }
  }
}