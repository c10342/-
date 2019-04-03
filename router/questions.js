const express = require('express')

const router = express.Router()

const questions = require('../server/questions')

// 添加试题
router.post('/addQuestion',questions.addQuestion)

// 查询所有试题
router.get('/getQuestion',questions.getQuestion)

// 根据试卷id查询试卷详情
router.get('/getQuestionById/:id',questions.getQuestionById)

// 根据用户id查询用户所发布的所有试卷
router.get('/getPublishedQuestion',questions.getPublishedQuestion)

// 根据试卷id获取试卷详细信息
router.get('/getPublishedQuestionById/:id',questions.getPublishedQuestionById)

// 回答试题
router.post('/submitQuestion',questions.submitQuestion)

// 删除试题
router.post('/deleteQuestion',questions.deleteQuestion)

// 修改试题
router.post('/editQuestion',questions.editQuestion)

// 根据用户id获取用户所有已经作答的试卷
router.get('/getAnswerQuestion',questions.getAnswerQuestion)

// 根据答卷的id查询该答卷的详细信息
router.get('/getAnswerQuestionById/:id',questions.getAnswerQuestionById)


module.exports = router
