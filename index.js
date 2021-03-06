const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const cookieparser=require('cookie-parser');

const session = require('express-session')

const app = express()

const {
    mongodbURI,
    sessionConf,
    errorCode,
    whiteList,
    jwtConfig
} = require('./config')

const {RedisClient} = require('./redis')

const util = require('./util/index')

const user = require('./router/user')

const questions = require('./router/questions')

const comment = require('./router/comment')

const upload = require('./router/upload')

const statistics = require('./router/statistics')

const downLoad = require('./router/downLoad')

const RedisStore = require('connect-redis')(session)

const FileUpload = require('express-fileupload')

const path = require('path')

const history = require('connect-history-api-fallback')

const jwt = require('jsonwebtoken')

const cors = require('cors')

// 请求日志插件
const logger = require('morgan')
// 用于分割日志
const FileStreamRotator = require('file-stream-rotator')

const fs = require('fs')

// 连接数据库
mongoose.connect(mongodbURI, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('mongodb connect success')
    })
    .catch(error => {
        console.log(error)
    })

// 设置跨域
app.use(cors())

// 请求日志相关
const logDirectory = path.join(__dirname, './log')
// 判断log目录是否存在，不存在就创建
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// create a rotating write stream,分割日志
const accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
})

app.use(logger('dev', {
    skip: function (req, res) {
        // 状态码小于400的日志不会打印在控制台，即出现错误才会打印在控制台
        return res.statusCode < 400
    },
}));

// 把请求日志写入文件
app.use(logger('common', {
    stream: accessLogStream
}))

// 处理cookie
app.use(cookieparser());

// 处理post请求数据
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// 使用redis持久化session
app.use(session({
    secret: 'keyboard cat',
    store: new RedisStore({
        client: RedisClient,
        //disableTTL:false ==> ReplyError: ERR wrong number of arguments for 'set' command
        disableTTL: true
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: sessionConf.maxAge
    },
    name: sessionConf.sessionName
}));

// 把上传的文件保存在内存中
app.use(FileUpload());

let user_agent = [
    'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Sogou web spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)',
    'Mozilla/5.0 (compatible; Yahoo! Slurp/3.0; http://help.yahoo.com/help/us/ysearch/slurp)',

    'Baiduspider+(+http://www.baidu.com/search/spider.htm")',
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
]

app.use(function(req,res,next){
    const userAgent = req.headers['user-agent']
    let flag = user_agent.some(item => userAgent.startsWith(item))
    if(userAgent.startsWith('Postman') || flag){
        const url = req.url
        if(url == '/' || url == '/login'){
            res.sendFile(path.join(__dirname,'./dist/login/index.html'))
        }else if(url == '/register'){
            res.sendFile(path.join(__dirname,'./dist/register/index.html'))
        }else{
            next()
        }
    }else{
        next()
    }
})

// 检查是否已经登录,以及校验token
app.use('/api', function (req, res, next) {
    try {
        if(req.cookies.userInfo){
            next()
            return;
        }
        let url = req.url
        let flag = whiteList.some(item => url.startsWith(item))
        if (flag) {
            next()
        } else {
            let token = req.headers.token || ''
            // 校验token
            jwt.verify(token, jwtConfig.privateKey, function (err, decoded) {
                if (err) {
                    // console.log(err)
                    res.json({
                        statusCode: 401,
                        message: 'token已经过期或无效'
                    })
                    return
                }
                if (req.session.login && decoded._id) {
                    // 刷新token
                    res.setHeader('token',util.createToken(decoded,jwtConfig.privateKey,{ expiresIn: jwtConfig.tokenTime }))
                    next()
                } else {
                    res.json({
                        statusCode: 401,
                        message: '登录已过期,请重新登录'
                    })
                }
            });
        }
    } catch (error) {
        res.json({
            statusCode: errorCode,
            message: error.toString()
        })
    }
})

// 路由
app.use('/api/user', user)
app.use('/api/questions', questions)
app.use('/api/comment', comment)
app.use('/api/upload', upload)
app.use('/api/statistics', statistics)
app.use('/api/downLoad', downLoad)

// 配合使用前端history模式
app.use(history())

// 静态资源
app.use('/', express.static(path.join(__dirname, './dist')))

app.use('/share', express.static(path.join(__dirname, './share')))

// 处理全局错误
app.use(function (err, req, res, next) {
    // console.error(err.stack)
    res.json({
        statusCode: errorCode,
        message: err.stack.toString()
    })
})

const port = process.env.PORT || 5000

const host = process.env.HOST || 'localhost'

app.listen(port, host, () => {
    console.log(`服务器地址 : ${host}:${port}`)
})