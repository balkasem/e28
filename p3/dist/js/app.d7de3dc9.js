(function(t){function e(e){for(var r,s,a=e[0],c=e[1],i=e[2],f=0,l=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(l.length)l.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function s(t){return a.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa9e3":"13d2d3b5","chunk-2d0ac37c":"44f10bc8","chunk-2d0bac30":"c97ec5dd","chunk-476b2b14":"1af16f8c","chunk-6ddeb97a":"75a9d997"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var i=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,n[1](i)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1112:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o}));var o=n("bc3a").create({baseURL:null!==(r="http://e28-api.sikabalkasem.xyz/")&&void 0!==r?r:"http://e28-api.sikabalkasem.loc",responseType:"json",withCredentials:!0})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("nav",[r("ul",[r("li",t._l(t.links,(function(e){return r("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e)+" ")])})),1)])]),r("router-view",{attrs:{posts:t.posts}})],1)},u=[],s={name:"",data:function(){return{links:["Home","Posts","Account","CreatePost"],paths:{Home:"/",Posts:"/posts",Categories:"/categories",CreatePost:"/posts/new",Account:"/account"}}},mounted:function(){this.$store.dispatch("fetchPosts"),this.$store.dispatch("authUser")},computed:{posts:function(){return this.$store.state.posts}},watch:{user:function(){this.user&&(console.log(this.user),this.$store.dispatch("fetchPosts"))}}},a=s,c=(n("034f"),n("2877")),i=Object(c["a"])(a,o,u,!1,null,null,null),f=i.exports,p=n("8c4f"),l=(n("4de4"),n("2f62")),d=n("1112");r["a"].use(l["a"]);var h=new l["a"].Store({state:{posts:[],user:null},mutations:{setPosts:function(t,e){t.posts=e},setUser:function(t,e){t.user=e}},actions:{fetchPosts:function(t){d["a"].get("/post").then((function(e){t.commit("setPosts",e.data.post)}))},authUser:function(t){d["a"].post("auth").then((function(e){e.data.authenticated&&t.commit("setUser",e.data.user)}))}},getters:{getPosts:function(t){return function(e){return t.posts.filter((function(t){return t.id==e}),this.id)[0]}}}}),m=(n("45fc"),n("d3b7"),n("96cf"),n("1da1")),b=[{path:"/",component:function(){return n.e("chunk-2d0bac30").then(n.bind(null,"391e"))}},{path:"/posts",component:function(){return n.e("chunk-2d0ac37c").then(n.bind(null,"1931"))}},{path:"/account",component:function(){return n.e("chunk-6ddeb97a").then(n.bind(null,"8fdc"))}},{path:"/posts/new",component:function(){return n.e("chunk-476b2b14").then(n.bind(null,"93bd"))},meta:{requiresAuth:!0}},{path:"/denied",component:function(){return n.e("chunk-2d0aa9e3").then(n.bind(null,"127c"))}}],v=new p["a"]({routes:b,mode:"history"});v.beforeEach(function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e.matched.some((function(t){return t.meta.requiresAuth})),o&&!h.state.user?r("/denied"):r();case 2:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}());var g=v;r["a"].config.productionTip=!1,r["a"].use(p["a"]),new r["a"]({router:g,store:h,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d7de3dc9.js.map