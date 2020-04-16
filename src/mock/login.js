// 引入mockjs
const Mock = require('mockjs');
Mock.setup({
    timeout: 800, // 设置延迟响应，模拟向后端请求数据
});
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = {
      a:1
    }
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('http://localhost:9000/user/account/login', 'post', produceNewsData);