import{a as b,b as P,c as h,d as x,e as w,f as y,g as k,h as S}from"./chunk-B44TKOD3.js";import{c as M,g as _,h as O}from"./chunk-NQWJPLCL.js";import{Ha as e,Ia as i,La as u,Qa as r,Ra as l,Sa as d,Ta as m,U as g,Va as C,W as f,sa as c}from"./chunk-U5Y3623P.js";var W=(()=>{let o=class o{constructor(){this.userObj={userName:"",password:""},this.http=g(M),this.router=g(_)}Login(){this.userObj.userName=="admin"&&this.userObj.password=="123"?(alert("login Success"),localStorage.setItem("UserInfo",this.userObj.userName),this.router.navigateByUrl("Home")):alert("login fail")}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=f({type:o,selectors:[["app-login"]],standalone:!0,features:[C],decls:13,vars:2,consts:[[1,"login-page"],[1,"form"],[1,"logo"],[1,"login-form"],["type","text","name","email","placeholder","Email","required","",3,"ngModelChange","ngModel"],["type","password","name","password","placeholder","Password","required","",3,"ngModelChange","ngModel"],[3,"click"],[1,"message"],["routerLink","/signup"]],template:function(a,n){a&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),r(3," Tech Giants "),i(),e(4,"form",3)(5,"input",4),m("ngModelChange",function(t){return d(n.userObj.userName,t)||(n.userObj.userName=t),t}),i(),e(6,"input",5),m("ngModelChange",function(t){return d(n.userObj.password,t)||(n.userObj.password=t),t}),i(),e(7,"button",6),u("click",function(){return n.Login()}),r(8,"login"),i(),e(9,"p",7),r(10,"Not registered? "),e(11,"button",8),r(12,"Create an account"),i()()()()()),a&2&&(c(5),l("ngModel",n.userObj.userName),c(),l("ngModel",n.userObj.password))},dependencies:[S,y,b,P,h,k,w,x,O],styles:['.logo[_ngcontent-%COMP%]{color:#df5b19;font-size:6vmin;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;letter-spacing:-.1vmin;font-weight:600;padding-bottom:7%}.login-page[_ngcontent-%COMP%]{width:360px;padding:8% 0 0;margin:auto}.form[_ngcontent-%COMP%]{position:relative;z-index:1;background:#fff;max-width:360px;margin:0 auto 100px;padding:45px;text-align:center;box-shadow:0 0 20px #0003,0 5px 5px #0000003d}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;outline:0;background:#f2f2f2;width:100%;border:0;margin:0 0 15px;padding:15px;box-sizing:border-box;font-size:14px}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;text-transform:uppercase;outline:0;background:#df5b19;width:100%;border:0;padding:15px;color:#fff;font-size:14px;-webkit-transition:all .3 ease;transition:all .3 ease;cursor:pointer}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#f50}.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin:15px 0 0;color:#000;font-size:12px}.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#df5b19;text-decoration:none}.form[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{display:none}.container[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:300px;margin:0 auto}.container[_ngcontent-%COMP%]:before, .container[_ngcontent-%COMP%]:after{content:"";display:block;clear:both}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin:50px auto;text-align:center}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0 0 15px;padding:0;font-size:36px;font-weight:300;color:#1a1a1a}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4d4d4d;font-size:12px}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{color:#ef3b3a}body[_ngcontent-%COMP%]{background:#76b852;background:#8dc26f;background:linear-gradient(90deg,#8dc26f,#76b852 50%);font-family:Roboto,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}']});let s=o;return s})();export{W as a};
