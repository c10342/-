(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],f=0,p=[];f<o.length;f++)r=o[f],a[r]&&p.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/share/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"141b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("a026"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.flag?s("div",{staticClass:"font20"},[t._v("感谢作答")]):t._e(),t.flag?t._e():s("div",{},[s("div",{staticClass:"time"},[t._v("时间：\n          "),s("span",{staticStyle:{color:"red"}},[t._v(t._s(t.showTime))])]),s("div",[s("div",{staticClass:"flex-row align-items"},[s("span",{staticClass:"text-nowrap mr10 font20"},[t._v("试卷名称 :")]),s("span",{staticClass:"font24"},[t._v(t._s(t.title))])])]),s("div",{staticClass:"mt20"},[s("h1",{staticClass:"font20"},[t._v("一、单选题")]),t._l(t.singleQuestion,function(e,n){return s("div",{key:n,staticClass:"mt30"},[s("div",{staticClass:"flex-row align-items"},[s("span",{staticClass:"font18"},[t._v(t._s(n+1)+"、")]),s("span",{staticClass:"font20 text-nowrap mr10"},[t._v("题目 : ")]),s("span",{staticClass:"font20"},[t._v(t._s(e.title))])]),s("div",{staticClass:"mt20 ml20"},t._l(e.options,function(n,a){return s("div",{key:a,staticClass:"mb10 flex-row"},[s("el-radio",{staticClass:"mr20",attrs:{label:a},model:{value:e.answer,callback:function(s){t.$set(e,"answer","string"===typeof s?s.trim():s)},expression:"question.answer"}},[t._v(t._s(a))]),s("span",{staticClass:"font18"},[t._v(t._s(e.options[a]))])],1)}),0),s("div",{staticClass:"mt20 flex-row item"},[s("span",{staticStyle:{color:"red"}},[t._v(t._s(e.message))])])])})],2),s("div",{staticClass:"mt20"},[s("h1",{staticClass:"font20"},[t._v("二、多选题")]),t._l(t.multipleQuestion,function(e,n){return s("div",{key:n,staticClass:"mt30"},[s("div",{staticClass:"flex-row align-items"},[s("span",{staticClass:"font18"},[t._v(t._s(n+1)+"、")]),s("span",{staticClass:"font20 text-nowrap mr10"},[t._v("题目 : ")]),s("span",{staticClass:"font20"},[t._v(t._s(e.title))])]),s("div",{staticClass:"mt20 ml20"},t._l(e.options,function(n,a){return s("div",{key:a,staticClass:"mb10 flex-row align-items"},[s("el-checkbox",{staticClass:"mr20",attrs:{label:a},model:{value:e.answer,callback:function(s){t.$set(e,"answer","string"===typeof s?s.trim():s)},expression:"question.answer"}},[t._v(t._s(a))]),s("span",{staticClass:"font18"},[t._v(t._s(e.options[a]))])],1)}),0),s("div",{staticClass:"mt20 flex-row item"},[s("span",{staticStyle:{color:"red"}},[t._v(t._s(e.message))])])])})],2),s("div",{staticClass:"mt20"},[s("h1",{staticClass:"font20"},[t._v("三、判断题")]),t._l(t.judgementQuestion,function(e,n){return s("div",{key:n,staticClass:"mt30"},[s("div",{staticClass:"flex-row align-items"},[s("span",{staticClass:"font18"},[t._v(t._s(n+1)+"、")]),s("span",{staticClass:"font20 text-nowrap mr10"},[t._v("题目 : ")]),s("span",{staticClass:"font20"},[t._v(t._s(e.title))])]),s("div",{staticClass:"mt20 flex-row",staticStyle:{"margin-left":"30px"}},[s("el-radio",{staticClass:"mr20",attrs:{label:"A"},model:{value:e.answer,callback:function(s){t.$set(e,"answer","string"===typeof s?s.trim():s)},expression:"question.answer"}},[t._v("对")]),s("el-radio",{staticClass:"mr20",attrs:{label:"B"},model:{value:e.answer,callback:function(s){t.$set(e,"answer","string"===typeof s?s.trim():s)},expression:"question.answer"}},[t._v("错")])],1),s("div",{staticClass:"mt20 flex-row item"},[s("span",{staticStyle:{color:"red"}},[t._v(t._s(e.message))])])])})],2),s("div",{staticClass:"mt20"},[s("h1",{staticClass:"font20"},[t._v("四、问答题")]),t._l(t.answerQuestion,function(e,n){return s("div",{key:n,staticClass:"mt30"},[s("div",{staticClass:"flex-row align-items"},[s("span",{staticClass:"font18"},[t._v(t._s(n+1)+"、")]),s("span",{staticClass:"font20 text-nowrap mr10"},[t._v("题目 : ")]),s("span",{staticClass:"font20"},[t._v(t._s(e.title))])]),s("div",{staticClass:"mt20 flex-row",staticStyle:{"margin-left":"30px"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.answer,callback:function(s){t.$set(e,"answer","string"===typeof s?s.trim():s)},expression:"question.answer"}})],1),s("div",{staticClass:"mt20 flex-row item"},[s("span",{staticStyle:{color:"red"}},[t._v(t._s(e.message))])])])})],2),t.singleQuestion.length||t.multipleQuestion.length||t.judgementQuestion.length||t.answerQuestion.length?s("div",{staticClass:"mt20"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1):t._e()])])},i=[],r=(s("ac6a"),s("6b54"),s("96cf"),s("3b8d")),o=s("bc3a"),l=s.n(o),c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(n,a){l.a.get(t,{params:e,headers:s}).then(function(t){200==t.status?n(t.data):a(t.data)}).catch(function(t){a(t)})})},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(s,n){l.a.post(t,e).then(function(t){200==t.status?s(t.data):n(t.data)}).catch(function(t){n(t)})})},f={name:"app",data:function(){return{title:"",singleQuestion:[],multipleQuestion:[],judgementQuestion:[],answerQuestion:[],time:0,id:null,questionType:"",flag:!1}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=window.location.href,s=e.indexOf("="),-1!=s){t.next=5;break}return t.abrupt("return");case 5:if(n=e.substring(s+1),n){t.next=9;break}return this.$message({type:"error",message:"试题出错",showClose:!0}),t.abrupt("return");case 9:return this.id=n,t.next=12,c("/api/questions/getQuestionById/"+n);case 12:a=t.sent,200==a.statusCode?(this.title=a.data.questionList.title,this.singleQuestion=a.data.questionList.singleQuestion,this.multipleQuestion=a.data.questionList.multipleQuestion,this.judgementQuestion=a.data.questionList.judgementQuestion,this.answerQuestion=a.data.questionList.answerQuestion,this.questionType=a.data.questionList.questionType,this.initTime()):this.$message({type:"warning",message:a.message,showClose:!0}),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),this.$message({type:"error",message:t.t0.toString(),showClose:!0});case 19:case"end":return t.stop()}},t,this,[[0,16]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{initTime:function(){var t=this;this.timer=setInterval(function(){t.time++},1e3)},submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=!0,s={},this.singleQuestion.forEach(function(t){var n=null;t.answer||(n="该题还没有完成"),n?e=!1:s[t.id]=t.answer,t.message=n}),this.multipleQuestion.forEach(function(t){var n=null;0==t.answer.length&&(n="该题还没有完成"),n?e=!1:s[t.id]=t.answer,t.message=n}),this.judgementQuestion.forEach(function(t){var n=null;t.answer||(n="该题还没有完成"),n?e=!1:s[t.id]=t.answer,t.message=n}),this.answerQuestion.forEach(function(t){var n=null;t.answer||(n="该题还没有完成"),n?e=!1:s[t.id]=t.answer,t.message=n}),!e){t.next=25;break}return n={},n.title=this.title,n.answer=s,n.userName="匿名用户",n.userId=Date.now().toString(),n.questionId=this.id,n.answerTime=this.showTime,n.questionType=this.questionType,t.prev=15,t.next=18,u("/api/questions/submitQuestion",n);case 18:a=t.sent,200==a.statusCode?(this.timer&&clearInterval(this.timer),this.flag=!0):this.$message({type:"warning",message:a.message,showClose:!0}),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](15),this.$message({type:"error",message:t.t0.toString(),showClose:!0});case 25:case"end":return t.stop()}},t,this,[[15,22]])}));function e(){return t.apply(this,arguments)}return e}()},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},computed:{showTime:function(){var t=this.time%60;t=t<10?"0".concat(t):t;var e=parseInt(this.time/60)%60;e=e<10?"0".concat(e):e;var s=parseInt(this.time/60/60)%24;return s=s<10?"0".concat(s):s,"".concat(s,"：").concat(e,"：").concat(t)}}},p=f,m=(s("7c55"),s("2877")),d=Object(m["a"])(p,a,i,!1,null,null,null),v=d.exports,h=s("5c96"),g=s.n(h);s("0fae"),s("141b");n["default"].config.productionTip=!1,n["default"].use(g.a),new n["default"]({render:function(t){return t(v)}}).$mount("#app")},"5c48":function(t,e,s){},"7c55":function(t,e,s){"use strict";var n=s("5c48"),a=s.n(n);a.a}});
//# sourceMappingURL=app.d3f7a9fb.js.map