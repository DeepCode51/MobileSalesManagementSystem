const base = {
    get() {
        return {
            url : "http://localhost:8080/bs/",
            name: "bs",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/bs/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "移动销售管理系统"
        } 
    }
}
export default base
