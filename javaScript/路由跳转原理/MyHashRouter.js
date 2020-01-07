/**
 * 基于Hash的前端路由插件
 **/
;(function() {
    function Router() {
        this.historyStack = [];  //记录路由的跳转历史
        this.registerRouter = []; //记录已注册的路由信息
        this.otherwiseRouter = {
            path: '/',
            content: 'Home Page'
        }; //路由匹配失败时跳转项
    }

    /** 启动路由功能*/
    Router.prototype.init = function() {

    }

    /** 绑定window.onhashchange事件的回调函数 */
    Router.prototype._bindEvents = function() {

    }

    /** 路由注册方法 */
    Router.prototype.when = function(path, content) {

    }

    /** 判断新添加的路由是否已经存在 */
    Router.prototype._hasThisRouter = function(path) {

    }

    /** 路由不存在时的指定地址 */
    Router.prototype.otherwise = function(path, content) {

    }

    /** 路由跳转方法，主动调用时可用于跳转路由 */
    Router.prototype.go = function(toPath) {

    }

    /** 用于将对应路由信息渲染至页面，实现路由切换 */
    Router.prototype.render = function(content) {

    }

    /** 将接口暴露至全局 */
    let router = new Router();
    window.$router = router;
})()
