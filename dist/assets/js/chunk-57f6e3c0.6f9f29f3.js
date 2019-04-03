(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57f6e3c0"],{"22f0":function(e,r,s){},"268f":function(e,r,s){e.exports=s("fde4")},"454f":function(e,r,s){s("46a7");var t=s("584a").Object;e.exports=function(e,r,s){return t.defineProperty(e,r,s)}},"46a7":function(e,r,s){var t=s("63b6");t(t.S+t.F*!s("8e60"),"Object",{defineProperty:s("d9f6").f})},"73cf":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"register"},[s("section",{staticClass:"form_container"},[e._m(0),s("el-form",{ref:"registerForm",staticClass:"registerForm",attrs:{model:e.registerUser,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.registerUser.name,callback:function(r){e.$set(e.registerUser,"name",r)},expression:"registerUser.name"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.registerUser.email,callback:function(r){e.$set(e.registerUser,"email",r)},expression:"registerUser.email"}})],1),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.registerUser.password,callback:function(r){e.$set(e.registerUser,"password",r)},expression:"registerUser.password"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"password2"}},[s("el-input",{attrs:{placeholder:"请确认密码",type:"password"},model:{value:e.registerUser.password2,callback:function(r){e.$set(e.registerUser,"password2",r)},expression:"registerUser.password2"}})],1),s("el-form-item",{attrs:{label:"验证码",prop:"code"}},[s("div",{staticClass:"flex-row"},[s("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.registerUser.code,callback:function(r){e.$set(e.registerUser,"code",r)},expression:"registerUser.code"}}),s("el-button",{staticClass:"code_btn",attrs:{disabled:e.disabled,type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.disabled?e.second+"s":"获取"))])],1)]),s("el-form-item",[s("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(r){e.submitForm("registerForm")}}},[e._v("注 册")])],1),s("div",{staticClass:"tiparea"},[s("p",[e._v("已经有账号？现在"),s("router-link",{attrs:{to:"/login"}},[e._v("登录")])],1)])],1)],1)])},a=[function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"manage_tip"},[s("span",{staticClass:"title"},[e._v("在线答题系统")])])}],i=(s("6b54"),s("96cf"),s("3b8d")),n=s("cebc"),o=s("2f62"),c=s("4260"),l=s("adb5"),u={name:"register",data:function(){var e=this,r=function(r,s,t){s!==e.registerUser.password?t(new Error("两次输入密码不一致!")):t()};return{registerUser:{name:"",email:"",password:"",password2:"",code:""},disabled:!1,second:60,rules:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:30,message:"用户名长度应为2到30个字符",trigger:"blur"}],email:[{type:"email",required:!0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"},{min:6,max:30,message:"密码长度应为6到30个字符",trigger:"blur"}],password2:[{required:!0,trigger:"blur",message:"密码不能为空"},{min:6,max:30,message:"密码长度应为6到30个字符",trigger:"blur"},{validator:r,trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"},{min:4,max:4,message:"验证码长度应为4个字符",trigger:"blur"}]}}},methods:Object(n["a"])({},Object(o["c"])(["setUserInfo"]),{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(s){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!s){e.next=11;break}return e.prev=1,e.next=4,Object(l["b"])("/api/user/register",r.registerUser);case 4:t=e.sent,200==t.statusCode?(r.$message({showClose:!0,message:t.message,type:"success"}),r.setUserInfo(t.data.userInfo),r.$router.push({name:"home"})):r.$message({showClose:!0,message:t.message,type:"warning"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r.$message({showClose:!0,message:e.t0.toString(),type:"error"});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(r){return e.apply(this,arguments)}}())},getCode:function(){var e=this;""!=this.registerUser.email?Object(c["a"])(this.registerUser.email)&&(this.disabled=!0,this.timer=setInterval(function(){e.second=e.second-1,0===e.second&&(e.disabled=!1,e.second=60,clearInterval(e.timer))},1e3),Object(l["a"])("/api/user/sendCode",{email:this.registerUser.email}).then(function(r){200==r.statusCode?e.$message({showClose:!0,message:r.message,type:"success"}):e.$message({showClose:!0,message:r.message,type:"warning"})}).catch(function(r){e.$message({showClose:!0,message:r.toString(),type:"error"})})):this.$message({showClose:!0,message:"邮箱不能为空",type:"warning"})}}),beforeDestroy:function(){this.timer&&clearInterval(this.timer)}},m=u,g=(s("8df1"),s("2877")),f=Object(g["a"])(m,t,a,!1,null,"6d996cc4",null);f.options.__file="Register.vue";r["default"]=f.exports},"85f2":function(e,r,s){e.exports=s("454f")},"8df1":function(e,r,s){"use strict";var t=s("22f0"),a=s.n(t);a.a},bf90:function(e,r,s){var t=s("36c3"),a=s("bf0b").f;s("ce7e")("getOwnPropertyDescriptor",function(){return function(e,r){return a(t(e),r)}})},cebc:function(e,r,s){"use strict";var t=s("268f"),a=s.n(t),i=s("e265"),n=s.n(i),o=s("a4bb"),c=s.n(o),l=s("85f2"),u=s.n(l);function m(e,r,s){return r in e?u()(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function g(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},t=c()(s);"function"===typeof n.a&&(t=t.concat(n()(s).filter(function(e){return a()(s,e).enumerable}))),t.forEach(function(r){m(e,r,s[r])})}return e}s.d(r,"a",function(){return g})},e265:function(e,r,s){e.exports=s("ed33")},ed33:function(e,r,s){s("014b"),e.exports=s("584a").Object.getOwnPropertySymbols},fde4:function(e,r,s){s("bf90");var t=s("584a").Object;e.exports=function(e,r){return t.getOwnPropertyDescriptor(e,r)}}}]);
//# sourceMappingURL=chunk-57f6e3c0.6f9f29f3.js.map