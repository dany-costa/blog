(function(t){function e(e){for(var o,r,u=e[0],i=e[1],c=e[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==s[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"021e9305"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"2912050b"}[t]+".css",s=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===s))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===o||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],m.parentNode.removeChild(m),n(a)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=s[t]=[e,n]}));e.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=s[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("navbar"),n("v-content",[n("router-view")],1),n("myfooter")],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{app:"","elevate-on-scroll":""}},[n("v-toolbar-title",[n("router-link",{attrs:{to:"/",flat:""}},[n("span",{staticClass:"blue--text text--lighten-1"},[t._v("Blog")])])],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"","offset-y":"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"d-flex d-sm-none",attrs:{dark:"",icon:""}},o),[n("v-icon",[t._v("mdi-menu")])],1)]}}])},[t.isAuthenticated?t._e():n("v-list",t._l(t.menuNotActive,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.section}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1),t.isAuthenticated?n("v-list",[n("v-list-item",{attrs:{to:"/newpost"}},[n("v-list-item-title",[t._v("Create Post")])],1),n("v-list-item",{on:{click:function(e){return t.logOut()}}},[n("v-list-item-title",[t._v("Logout")])],1)],1):t._e()],1),t.isAuthenticated?t._e():n("v-toolbar-items",{staticClass:"d-none d-sm-flex"},t._l(t.menuNotActive,(function(e,o){return n("v-btn",{key:o,attrs:{to:e.section,text:""}},[t._v(t._s(e.title))])})),1),t.isAuthenticated?n("v-toolbar-title",[t._v("Hello, "+t._s(t.userLogged.username))]):t._e(),t.isAuthenticated?n("v-toolbar-items",{staticClass:"d-none d-sm-flex"},[n("v-btn",{attrs:{to:"/newpost",text:""}},[t._v("Create Post")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.logOut()}}},[t._v("Logout")])],1):t._e()],1)],1)},u=[],i=n("2f62"),c={data:function(){return{drawer:!1,menuNotActive:[{icon:"home",title:"Login",section:"/login"},{icon:"info",title:"Register",section:"/register"}],menuActive:[{icon:"plus",title:"Create Post"},{icon:"warning",title:"Logout"}],options:{duration:500,offset:0,easing:"easeInOutCubic"}}},methods:{menuItems:function(){return this.menu},logOut:function(){this.$store.dispatch("logout"),this.$router.push("/login")}},computed:Object(i["c"])(["isAuthenticated","userLogged"])},l=c,d=n("2877"),m=n("6544"),f=n.n(m),p=n("40dc"),v=n("8336"),h=n("132d"),g=n("8860"),_=n("da13"),b=n("5d23"),w=n("e449"),P=n("2fa4"),x=n("2a7f"),k=Object(d["a"])(l,a,u,!1,null,null,null),y=k.exports;f()(k,{VAppBar:p["a"],VBtn:v["a"],VIcon:h["a"],VList:g["a"],VListItem:_["a"],VListItemTitle:b["a"],VMenu:w["a"],VSpacer:P["a"],VToolbarItems:x["a"],VToolbarTitle:x["b"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Dany Costa")])])],1)},C=[],S={},j=S,A=n("62ad"),I=n("553a"),V=Object(d["a"])(j,O,C,!1,null,null,null),R=V.exports;f()(V,{VCol:A["a"],VFooter:I["a"]});var L={data:function(){return{}},methods:{},components:{navbar:y,myfooter:R}},T=L,E=n("7496"),N=n("a75b"),$=Object(d["a"])(T,r,s,!1,null,null,null),B=$.exports;f()($,{VApp:E["a"],VContent:N["a"]});n("d3b7");var q=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{lg:"6"}},t._l(t.allPosts,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("v-card",[n("v-card-title",{staticClass:"headline"},[n("router-link",{attrs:{to:{name:"Post",params:{postId:e._id}}}},[t._v(t._s(e.title))])],1),n("v-img",{attrs:{src:"./"+e.image}}),n("v-card-subtitle",{domProps:{textContent:t._s(e.description)}}),n("v-card-actions",[n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(n){return t.redirect(e._id)}}},[t._v(" "+t._s(e.comments.length)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-comment")])],1),-1===e.voters.indexOf(t.userLogged.id)?n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(n){return t.upvote(e._id)}}},[t._v(" "+t._s(e.voters.length)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-arrow-up-bold-box")])],1):n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(n){return t.downvote(e._id)}}},[t._v(" "+t._s(e.voters.length)+" "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-arrow-down-bold-box")])],1),e.author==t.userLogged.id?n("v-btn",{attrs:{color:"orange",text:""},on:{click:function(n){return t.remove(e._id)}}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-trash-can-outline")])],1):t._e()],1)],1)],1)],1)})),1)],1)],1)],1)},D=[],H=n("5530"),z={name:"Home",data:function(){return{}},computed:Object(i["c"])(["isAuthenticated","allPosts","userLogged"]),methods:Object(H["a"])(Object(H["a"])({},Object(i["b"])(["fetchPosts","upvotePost","downvotePost","deletePost"])),{},{upvote:function(t){this.upvotePost(t)},downvote:function(t){this.downvotePost(t)},remove:function(t){this.deletePost(t).then((function(){console.log("deleted")}))},redirect:function(t){this.$router.push({name:"Post",params:{postId:t}})}}),created:function(){this.fetchPosts()}},F=z,J=n("b0af"),U=n("99d9"),K=n("a523"),Y=n("adda"),G=n("0fd9"),Q=Object(d["a"])(F,M,D,!1,null,null,null),W=Q.exports;f()(Q,{VBtn:v["a"],VCard:J["a"],VCardActions:U["a"],VCardSubtitle:U["b"],VCardTitle:U["d"],VCol:A["a"],VContainer:K["a"],VIcon:h["a"],VImg:Y["a"],VRow:G["a"]});var X=n("0e44"),Z={teste:"adsad"},tt={allTodos:function(t){return t.todos}},et={},nt={},ot={state:Z,getters:tt,actions:et,mutations:nt},rt=n("bc3a"),st=n.n(rt),at={status:"",token:localStorage.getItem("auth-token")||"",user:{}},ut={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status},userLogged:function(t){return t.user}},it={login:function(t,e){var n=t.commit;return new Promise((function(t,o){n("auth_request"),st()({url:"/api/users/login",data:e,method:"POST"}).then((function(e){var o=e.data.token;localStorage.setItem("auth-token",o),st.a.defaults.headers.common["Authorization"]=o,n("auth_success",e.data),t(e)})).catch((function(t){n("auth_error"),localStorage.removeItem("auth-token"),o(t)}))}))},register:function(t,e){var n=t.commit;return new Promise((function(t,o){n("auth_request"),st()({url:"/api/users/register",data:e,method:"POST"}).then((function(e){t(e)})).catch((function(t){o(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t){e("logout"),localStorage.removeItem("auth-token"),delete st.a.defaults.headers.common["Authorization"],t()}))}},ct={auth_request:function(t){t.status="loading"},auth_success:function(t,e){t.status="success",t.token=e.token,t.user=e.user},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},lt={state:at,getters:ut,actions:it,mutations:ct},dt=(n("4de4"),n("c740"),n("c975"),n("a434"),n("96cf"),n("1da1")),mt={posts:[],selectedPost:{}},ft={allPosts:function(t){return t.posts},selected:function(t){return t.selectedPost}},pt={fetchPosts:function(t){return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,st.a.get("/api/posts");case 3:o=e.sent,n("set_posts",o.data);case 5:case"end":return e.stop()}}),e)})))()},fetchPost:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,st.a.get("/api/posts/"+e);case 3:r=n.sent,o("selected_post",r.data);case 5:case"end":return n.stop()}}),n)})))()},upvotePost:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.rootState,n.next=3,st.a.put("/api/posts/upvote/"+e).then((function(t){return t}));case 3:s=r.AuthStore.user.id,o("upvote_post",{user:s,id:e});case 5:case"end":return n.stop()}}),n)})))()},downvotePost:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.rootState,n.next=3,st.a.put("/api/posts/downvote/"+e).then((function(t){return t}));case 3:s=r.AuthStore.user.id,o("downvote_post",{user:s,id:e});case 5:case"end":return n.stop()}}),n)})))()},deletePost:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,st.a.delete("/api/posts/delete/"+e).then((function(t){return t}));case 3:o("delete_post",e);case 4:case"end":return n.stop()}}),n)})))()},newPost:function(t,e){var n=t.commit;return new Promise((function(t,o){st.a.post("/api/posts",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(o){n("create_post",e),t(o)})).catch((function(t){o(t)}))}))},newComment:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.state,n.next=3,st.a.post("/api/comments/new/"+r.selectedPost._id,{content:e});case 3:s=n.sent,o("add_comment",s.data);case 5:case"end":return n.stop()}}),n)})))()},upComment:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.state,s=t.rootState,n.next=3,st.a.put("/api/comments/upvote/"+r.selectedPost._id+"/"+e);case 3:a=s.AuthStore.user.id,o("upvote_comment",{user:a,commentId:e});case 5:case"end":return n.stop()}}),n)})))()},downComment:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.state,s=t.rootState,n.next=3,st.a.put("/api/comments/downvote/"+r.selectedPost._id+"/"+e);case 3:a=s.AuthStore.user.id,o("downvote_comment",{user:a,commentId:e});case 5:case"end":return n.stop()}}),n)})))()},deleteComment:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,r=t.state,n.next=3,st.a.delete("/api/comments/delete/"+r.selectedPost._id+"/"+e);case 3:o("delete_comment",e);case 4:case"end":return n.stop()}}),n)})))()}},vt={set_posts:function(t,e){t.posts=e,t.selectedPost=null},selected_post:function(t,e){t.selectedPost=e},create_post:function(t,e){t.posts.unshift(e)},delete_post:function(t,e){t.posts=t.posts.filter((function(t){return t._id!==e}))},upvote_post:function(t,e){var n=e.user,o=e.id;if(t.selectedPost)t.selectedPost.voters.push(n);else{var r=t.posts.findIndex((function(t){return t._id===o}));t.posts[r].voters.push(n)}},downvote_post:function(t,e){var n=e.user,o=e.id;if(t.selectedPost){var r=t.selectedPost.voters.indexOf(n);r>-1&&t.selectedPost.voters.splice(r,1)}else{var s=t.posts.findIndex((function(t){return t._id===o})),a=t.posts[s].voters.indexOf(n);a>-1&&t.posts[s].voters.splice(a,1)}},add_comment:function(t,e){t.selectedPost.comments.push(e)},delete_comment:function(t,e){t.selectedPost.comments=t.selectedPost.comments.filter((function(t){return t._id!==e}))},upvote_comment:function(t,e){var n=e.user,o=e.commentId,r=t.selectedPost.comments.findIndex((function(t){return t._id===o}));t.selectedPost.comments[r].voters.push(n)},downvote_comment:function(t,e){var n=e.user,o=e.commentId,r=t.selectedPost.comments.findIndex((function(t){return t._id===o})),s=t.selectedPost.comments[r].voters.indexOf(n);s>-1&&t.selectedPost.comments[r].voters.splice(s,1)}},ht={state:mt,getters:ft,actions:pt,mutations:vt};o["a"].use(i["a"]);var gt=new i["a"].Store({plugins:[Object(X["a"])()],modules:{AuthStore:lt,UserStore:ot,PostStore:ht}});o["a"].use(q["a"]);var _t=function(t,e,n){gt.getters.isAuthenticated?n("/"):n()},bt=function(t,e,n){gt.getters.isAuthenticated?n():n("/login")},wt=[{path:"/",name:"Home",component:W},{path:"/newpost",name:"New Post",component:function(){return n.e("about").then(n.bind(null,"6e73"))},beforeEnter:bt},{path:"/posts/:postId",name:"Post",component:function(){return n.e("about").then(n.bind(null,"37d3"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))},beforeEnter:_t}],Pt=new q["a"]({mode:"history",base:"/",routes:wt}),xt=Pt,kt=n("f309");o["a"].use(kt["a"]);var yt=new kt["a"]({theme:{dark:!0}});o["a"].config.productionTip=!1,o["a"].prototype.$http=st.a;var Ot=localStorage.getItem("auth-token");Ot&&(st.a.defaults.headers.common["Authorization"]=Ot),new o["a"]({router:xt,vuetify:yt,store:gt,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.2fc1c6ae.js.map