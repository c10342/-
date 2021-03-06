const mongoose = require('mongoose')

const {getCode} = require('../util/index')

const Schema = mongoose.Schema

const user = new Schema({
    name:{
        required:true,
        type:String
    },
    githubId:{
        type:Number,
        default:1
    },
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now
    },
    identity:{
        type:String,
        // 0管理员，1小学生，2初中生，3高中生，4大学生，5教师，6游客，7其他
        default:'游客'
    },
    jurisdiction:{
        type:Array,
        default:function(){
            return ['1','1-1','1-2','1-3','1-4','2','2-1','2-2','2-3','2-4','3','4','5']
        }
    },
    // 用户发表违规信息次数
    violationCount:{
        type:Number,
        default:0
    }
})

module.exports = User = mongoose.model('users',user)