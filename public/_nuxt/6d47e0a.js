(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{262:function(t,e,r){"use strict";r.r(e);r(20),r(13),r(17),r(31),r(16),r(32);var n=r(7),o=r(66);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"news",data:function(){return{}},methods:v({},Object(o.b)({getList:"posts/getList",filterUser:"posts/filterUser"})),mounted:function(){this.getList(this.categories)},computed:v({},Object(o.c)({viewList:function(t){return t.posts.viewList},length:function(t){return t.posts.length}}))},f=r(26),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",[r("div",[r("button",{on:{click:function(e){return t.filterUser(1)}}},[t._v("user 1")]),t._v(" "),r("button",{on:{click:function(e){return t.filterUser(2)}}},[t._v("user 2")]),t._v(" "),r("button",{on:{click:function(e){return t.filterUser(3)}}},[t._v("user 3")]),t._v(" "),r("div",[r("p",[t._v("記事の数: "+t._s(t.length))])])]),t._v(" "),r("div",[r("div",t._l(t.viewList,(function(article,i){return r("div",{key:i},[r("div",[r("p",[t._v("userId:"+t._s(article.userId))]),t._v(" "),r("div",[t._v(t._s(article.title))]),t._v(" "),r("div",[t._v(t._s(article.body))])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);