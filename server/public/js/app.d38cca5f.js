(function(t){function e(e){for(var o,r,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1ac93cdc"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"ca6e1502"}[t]+".css",a=u.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("navbar"),n("v-content",[n("router-view")],1),n("myfooter")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[n("v-toolbar-title",[n("router-link",{attrs:{to:"/",flat:""}},[n("span",{staticClass:"blue--text text--lighten-1"},[t._v("Blog")])])],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"d-flex d-sm-none",attrs:{dark:"",icon:""}},o),[n("v-icon",[t._v("mdi-menu")])],1)]}}])},[t.isLoggedIn?t._e():n("v-list",t._l(t.menuNotActive,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.section}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1),t.isLoggedIn?n("v-list",t._l(t.menuActive,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.section}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):t._e()],1),t.isLoggedIn?t._e():n("v-toolbar-items",{staticClass:"d-none d-sm-flex"},t._l(t.menuNotActive,(function(e,o){return n("v-btn",{key:o,attrs:{to:e.section,text:""}},[t._v(t._s(e.title))])})),1),t.isLoggedIn?n("v-toolbar-items",{staticClass:"d-none d-sm-flex"},[n("v-btn",{attrs:{to:"/newpost",text:""}},[t._v("Create Post")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.logOut()}}},[t._v("Logout")])],1):t._e()],1)],1)},i=[],u={data:function(){return{drawer:!1,menuNotActive:[{icon:"home",title:"Login",section:"/login"},{icon:"info",title:"Register",section:"/register"}],menuActive:[{icon:"plus",title:"Create Post"},{icon:"warning",title:"Logout"}],options:{duration:500,offset:0,easing:"easeInOutCubic"}}},methods:{menuItems:function(){return this.menu},logOut:function(){this.$store.dispatch("logout"),this.$router.push("/login")}},computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated}}},c=u,l=n("2877"),f=n("6544"),d=n.n(f),m=n("40dc"),p=n("8336"),v=n("132d"),h=n("8860"),g=n("da13"),b=n("5d23"),_=n("e449"),y=n("2fa4"),w=n("2a7f"),k=Object(l["a"])(c,s,i,!1,null,null,null),C=k.exports;d()(k,{VAppBar:m["a"],VBtn:p["a"],VIcon:v["a"],VList:h["a"],VListItem:g["a"],VListItemTitle:b["a"],VMenu:_["a"],VSpacer:y["a"],VToolbarItems:w["a"],VToolbarTitle:w["b"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Dany Costa")])])],1)},x=[],O={},S=O,V=n("62ad"),A=n("553a"),j=Object(l["a"])(S,P,x,!1,null,null,null),I=j.exports;d()(j,{VCol:V["a"],VFooter:A["a"]});var L={data:function(){return{}},methods:{},components:{navbar:C,myfooter:I}},T=L,E=n("7496"),N=n("a75b"),$=Object(l["a"])(T,r,a,!1,null,null,null),B=$.exports;d()($,{VApp:E["a"],VContent:N["a"]});n("d3b7");var q=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"6"}},t._l(t.allPosts,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("v-card",[n("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(e.title)}}),n("v-img",{attrs:{src:"http://localhost:5000/"+e.image}}),n("v-card-subtitle",{domProps:{textContent:t._s(e.description)}}),n("v-card-actions",[n("v-btn",{attrs:{color:"orange",text:""}},[t._v(" "+t._s(e.comments.length)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-comment")])],1),n("v-btn",{attrs:{color:"orange",text:""}},[t._v(" "+t._s(e.voters.length)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-arrow-up-bold-box")])],1)],1)],1)],1)],1)})),1)],1)],1)],1)},R=[],D=n("5530"),z=n("2f62"),F={name:"Home",data:function(){return{}},computed:Object(z["c"])(["isAuthenticated","allPosts"]),methods:Object(D["a"])({},Object(z["b"])(["fetchPosts"])),created:function(){this.fetchPosts()}},H=F,J=n("b0af"),U=n("99d9"),K=n("a523"),Y=n("adda"),G=n("0fd9"),Q=Object(l["a"])(H,M,R,!1,null,null,null),W=Q.exports;d()(Q,{VBtn:p["a"],VCard:J["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardTitle:U["d"],VCol:V["a"],VContainer:K["a"],VIcon:v["a"],VImg:Y["a"],VRow:G["a"]});var X={teste:"adsad"},Z={allTodos:function(t){return t.todos}},tt={},et={},nt={state:X,getters:Z,actions:tt,mutations:et},ot=n("bc3a"),rt=n.n(ot),at={status:"",token:localStorage.getItem("auth-token")||"",user:{}},st={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},it={login:function(t,e){var n=t.commit;return new Promise((function(t,o){n("auth_request"),rt()({url:"/api/users/login",data:e,method:"POST"}).then((function(e){var o=e.data.token,r=e.data.user;localStorage.setItem("auth-token",o),rt.a.defaults.headers.common["Authorization"]=o,n("auth_success",o,r),t(e)})).catch((function(t){n("auth_error"),localStorage.removeItem("auth-token"),o(t)}))}))},register:function(t,e){var n=t.commit;return new Promise((function(t,o){n("auth_request"),rt()({url:"/api/users/register",data:e,method:"POST"}).then((function(e){t(e)})).catch((function(t){o(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("auth-token"),delete rt.a.defaults.headers.common["Authorization"],t()}))}},ut={auth_request:function(t){t.status="loading"},auth_success:function(t,e,n){t.status="success",t.token=e,t.user=n},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},ct={state:at,getters:st,actions:it,mutations:ut},lt=(n("96cf"),n("1da1")),ft={posts:[]},dt={allPosts:function(t){return t.posts}},mt={fetchPosts:function(t){return Object(lt["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,rt.a.get("/api/posts");case 3:o=e.sent,n("set_posts",o.data);case 5:case"end":return e.stop()}}),e)})))()},newPost:function(t,e){var n=t.commit;return new Promise((function(t,o){console.log(e.get("file")),rt.a.post("/api/posts",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(o){n("create_post",e),t(o)})).catch((function(t){o(t)}))}))}},pt={set_posts:function(t,e){t.posts=e},create_post:function(t,e){t.posts.push(e)}},vt={state:ft,getters:dt,actions:mt,mutations:pt};o["a"].use(z["a"]);var ht=new z["a"].Store({modules:{AuthStore:ct,UserStore:nt,PostStore:vt}});o["a"].use(q["a"]);var gt=function(t,e,n){ht.getters.isAuthenticated?n("/"):n()},bt=function(t,e,n){ht.getters.isAuthenticated?n():n("/login")},_t=[{path:"/",name:"Home",component:W},{path:"/newpost",name:"New Post",component:function(){return n.e("about").then(n.bind(null,"6e73"))},beforeEnter:bt},{path:"/posts",name:"Posts",component:function(){return n.e("about").then(n.bind(null,"17c3"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))},beforeEnter:gt}],yt=new q["a"]({mode:"history",base:"/",routes:_t}),wt=yt,kt=n("f309");o["a"].use(kt["a"]);var Ct=new kt["a"]({theme:{dark:!0}});o["a"].config.productionTip=!1,o["a"].prototype.$http=rt.a;var Pt=localStorage.getItem("auth-token");Pt&&(rt.a.defaults.headers.common["Authorization"]=Pt),new o["a"]({router:wt,vuetify:Ct,store:ht,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.d38cca5f.js.map