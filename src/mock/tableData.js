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
  'post|/api/data/tableData': option => {
    return {
      status: 200,
      success: true,
      data: userInfo
    }
  }
}