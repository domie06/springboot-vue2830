const base = {
    get() {
        return {
            url : "http://localhost:8080/chuyikafeizaixianxiaoshou/",
            name: "chuyikafeizaixianxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuyikafeizaixianxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "滁艺咖啡在线销售系统"
        } 
    }
}
export default base
