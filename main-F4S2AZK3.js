import"./chunk-FS4YW7N3.js";import"./chunk-B44TKOD3.js";import{d as l,e as u,f as s,g as f,j as d}from"./chunk-NQWJPLCL.js";import{Ja as a,U as i,Va as m,W as p,ab as c}from"./chunk-U5Y3623P.js";var e=(t,o)=>{let g=i(f),n=localStorage.getItem("UserInfo");return console.log(!n),n==null?(g.navigateByUrl("login"),!1):!0};var C=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-NRC77A6I.js").then(t=>t.LoginComponent),title:"Tech Giants"},{path:"signup",loadComponent:()=>import("./chunk-445ZPII7.js").then(t=>t.SignupComponent)},{path:"",loadComponent:()=>import("./chunk-WBAYEAEU.js").then(t=>t.LayoutComponent),canActivate:[e],children:[{path:"Home",loadComponent:()=>import("./chunk-NCJ2XCXA.js").then(t=>t.HomeComponent),canActivate:[e],title:"Home"},{path:"Services",loadComponent:()=>import("./chunk-AZIAXNKG.js").then(t=>t.ServicesComponent),canActivate:[e],title:"Services"},{path:"About",loadComponent:()=>import("./chunk-COYSW2IM.js").then(t=>t.AboutComponent),canActivate:[e],title:"About"},{path:"Contact",loadComponent:()=>import("./chunk-BALBJK7J.js").then(t=>t.ContactComponent),canActivate:[e],title:"Contact"}]}];var h={providers:[l(),c({eventCoalescing:!0}),d(C)]};var v=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(r,A){r&1&&a(0,"router-outlet")},dependencies:[s]});let t=o;return t})();u(v,h).catch(t=>console.error(t));
