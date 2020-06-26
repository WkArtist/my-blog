const express = require('express')
const cors = require('cors')

const app = express();
const path = require('path')

//处理静态资源请求
const staticRoot = path.resolve(__dirname, "../public");
app.use("/", express.static(staticRoot))

//处理跨域
app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                callback(null, "*");
                return
            }
            callback(null, origin)
        },
        credentials: true
    })
)

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }))
//解析 application/json格式的请求体
app.use(express.json())

//处理api请求
app.use("/api/article", require('./api/article'))
app.use('/api/upload', require('./api/upload'))

//处理错误的中间件
app.use("*", require("./errorMiddleware"))

app.listen(9527, () => {
    console.log('server listen on 9527')
})