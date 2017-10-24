/**
 * Created by Administrator on 2017/9/5 0005.
 */

var app1 = require('koa');
var app = new app1();
var router = require('koa-router')();
var koaBody = require('koa-body')();

// 首页-广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    this.body = homeAdData;
});

var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    this.body = homeListData;
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log('搜索结果页 - 搜索结果');

    // 参数
    const params = this.params;
    const paramsPage = params.page;
    const paramsCity = params.city;
    const paramsCategory = params.category;
    const paramsKeyword = params.keyword;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);
    console.log('关键字：' + paramsKeyword);

    this.body = searchListData;
})

router.get('/', function *(next) {
    this.body = 'hello koa !';
});

router.get('/api', function *(next) {
    this.body = 'test data';
});

router.get('/api/1', function *(next) {
    this.body = 'test data 1';
});

router.get('/api/2', function *(next) {
    this.body = {a: 1, b: '123'};
});

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body);
    this.body = JSON.stringify(this.request.body);
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(9527);


