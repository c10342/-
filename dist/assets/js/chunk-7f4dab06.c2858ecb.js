(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4dab06"],{1105:function(e,t,n){},"13f5":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-container"},[n("div",[n("div",{staticClass:"flex-row align-items"},[n("span",{staticClass:"text-nowrap mr10 font20"},[e._v("试题名称 :")]),n("span",{staticClass:"font24"},[e._v(e._s(e.title))])])]),n("Single",{attrs:{isAnswer:e.isAnswer,singleQuestion:e.singleQuestion}}),n("Multiple",{attrs:{isAnswer:e.isAnswer,multipleQuestion:e.multipleQuestion}}),n("Judgement",{attrs:{isAnswer:e.isAnswer,judgementQuestion:e.judgementQuestion}}),n("Answer",{attrs:{isAnswer:e.isAnswer,answerQuestion:e.answerQuestion}}),n("div",{staticClass:"mt20"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),n("el-button",{attrs:{type:"success"},on:{click:e.goBack}},[e._v("返回")])],1)],1)},i=[],r=n("cebc"),a=(n("6b54"),n("7f7f"),n("ac6a"),n("96cf"),n("3b8d")),o=n("2f62"),u=n("adb5"),c=(n("4260"),{data:function(){return{title:"",singleQuestion:[],multipleQuestion:[],judgementQuestion:[],answerQuestion:[],isAnswer:!0}},methods:{submit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=!0,n={},this.singleQuestion.forEach(function(e){var s=null;e.answer||(s="该题还没有完成"),s?t=!1:n[e.id]=e.answer,e.message=s}),this.multipleQuestion.forEach(function(e){var s=null;0==e.answer.length&&(s="该题还没有完成"),s?t=!1:n[e.id]=e.answer,e.message=s}),this.judgementQuestion.forEach(function(e){var s=null;e.answer||(s="该题还没有完成"),s?t=!1:n[e.id]=e.answer,e.message=s}),this.answerQuestion.forEach(function(e){var s=null;e.answer||(s="该题还没有完成"),s?t=!1:n[e.id]=e.answer,e.message=s}),!t){e.next=23;break}return s={},s.title=this.title,s.answer=n,s.userName=this.userInfo.name,s.userId=this.userInfo._id,s.questionId=this.$route.params.id,e.prev=13,e.next=16,Object(u["b"])("/api/questions/submitQuestion",s);case 16:i=e.sent,200==i.statusCode?(this.$message({type:"success",message:i.message,showClose:!0}),this.$router.back()):this.$message({type:"warning",message:i.message,showClose:!0}),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](13),this.$message({type:"error",message:e.t0.toString(),showClose:!0});case 23:case"end":return e.stop()}},e,this,[[13,20]])}));function t(){return e.apply(this,arguments)}return t}(),goBack:function(){var e=!0;this.singleQuestion.forEach(function(t){t.answer&&(e=!1)}),this.multipleQuestion.forEach(function(t){0!=t.answer.length&&(e=!1)}),this.judgementQuestion.forEach(function(t){t.answer&&(e=!1)}),this.answerQuestion.forEach(function(t){t.answer&&(e=!1)}),e?this.$router.back():this.openMessageBox()},openMessageBox:function(){var e=this;this.$confirm("试题尚未提交,是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.back()}).catch(function(){})}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params.id,e.prev=1,e.next=4,Object(u["a"])("/api/questions/getQuestionById/"+t);case 4:n=e.sent,200==n.statusCode?(this.title=n.data.questionList.title,this.singleQuestion=n.data.questionList.singleQuestion,this.multipleQuestion=n.data.questionList.multipleQuestion,this.judgementQuestion=n.data.questionList.judgementQuestion,this.answerQuestion=n.data.questionList.answerQuestion):this.$message({type:"warning",message:n.message,showClose:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.$message({type:"error",message:e.t0.toString(),showClose:!0});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));function t(){return e.apply(this,arguments)}return t}(),computed:Object(r["a"])({},Object(o["b"])(["userInfo"]))}),f=c,l=(n("50f2"),n("2877")),p=Object(l["a"])(f,s,i,!1,null,"d18e56b6",null);p.options.__file="AnswerQuestion.vue";t["default"]=p.exports},"268f":function(e,t,n){e.exports=n("fde4")},"454f":function(e,t,n){n("46a7");var s=n("584a").Object;e.exports=function(e,t,n){return s.defineProperty(e,t,n)}},"46a7":function(e,t,n){var s=n("63b6");s(s.S+s.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"50f2":function(e,t,n){"use strict";var s=n("1105"),i=n.n(s);i.a},"85f2":function(e,t,n){e.exports=n("454f")},bf90:function(e,t,n){var s=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return i(s(e),t)}})},cebc:function(e,t,n){"use strict";var s=n("268f"),i=n.n(s),r=n("e265"),a=n.n(r),o=n("a4bb"),u=n.n(o),c=n("85f2"),f=n.n(c);function l(e,t,n){return t in e?f()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=u()(n);"function"===typeof a.a&&(s=s.concat(a()(n).filter(function(e){return i()(n,e).enumerable}))),s.forEach(function(t){l(e,t,n[t])})}return e}n.d(t,"a",function(){return p})},e265:function(e,t,n){e.exports=n("ed33")},ed33:function(e,t,n){n("014b"),e.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(e,t,n){n("bf90");var s=n("584a").Object;e.exports=function(e,t){return s.getOwnPropertyDescriptor(e,t)}}}]);
//# sourceMappingURL=chunk-7f4dab06.c2858ecb.js.map