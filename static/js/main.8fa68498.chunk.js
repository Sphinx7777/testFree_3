(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,t,a){e.exports={wrap:"Lists_wrap__2i1iT",up:"Lists_up__2ECOn",down:"Lists_down__3NlVs",add:"Lists_add__LOHCF",remove:"Lists_remove__3hKRM",sublist:"Lists_sublist__GAQbe",showDesc:"Lists_showDesc__1QzGp"}},10:function(e,t,a){e.exports={app:"App_app__2kcmo"}},14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(9),l=a.n(i);a(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(13),u=a(2),c=a(10),o=a.n(c),m=a(1),d=a.n(m),p=function(e){var t=e.dispatch,a=e.name,n=e.id;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:d.a.up},"\u2191"),s.a.createElement("button",{className:d.a.down},"\u2193"),s.a.createElement("button",{className:d.a.add,onClick:function(){return t({type:"addSublistInSublist",id:n})}},"Add Sublist"),s.a.createElement("button",{className:d.a.remove,onClick:function(){return t({type:"removeSublist",id:n})}},"Remove ",s.a.createElement("b",null,a)))},b=function(e){var t=e.name,a=e.id,n=e.dispatch;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:d.a.add,onClick:function(){return n({type:"addSublist",payload:{id:a}})}},"Add Sublist"),s.a.createElement("button",{className:d.a.remove},"Remove ",s.a.createElement("b",null,t)))},h=function(e){var t=e.name;return s.a.createElement("div",{className:d.a.showDesc},s.a.createElement("div",{className:d.a.showDescName},t),s.a.createElement("div",{className:d.a.showDescEmail},"\u2709 123@gmail.com"),s.a.createElement("div",{className:d.a.showDescPhone},"\u2706 066 395 24 88"),s.a.createElement("div",{className:d.a.closeDesc},"X"))},E=function(e){var t=e.listSub,a=e.dispatch;return s.a.createElement("li",{className:d.a.sublist},s.a.createElement("span",{onDoubleClick:function(){return a({type:"toggleValues",id:t.id})}},t.name),t.valuesShow&&s.a.createElement(h,{name:t.name}),s.a.createElement(p,{name:t.name,id:t.id,dispatch:a}))},v=function(e){var t=e.name,a=e.dispatch,n=e.id,i=e.subId;return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:d.a.up},"\u2191"),s.a.createElement("button",{className:d.a.down},"\u2193"),s.a.createElement("button",{className:d.a.add,onClick:function(){return a({type:"addSublistInSublist",id:n})}},"Add Sublist"),s.a.createElement("button",{className:d.a.remove,onClick:function(){return a({type:"removeSublistFromSublist",payload:{id:n,subId:i}})}},"Remove ",s.a.createElement("b",null,t)))},S=function(e){var t=e.listSub,a=e.dispatch,n=e.subSub;return s.a.createElement("li",null,s.a.createElement("span",null,n.name),s.a.createElement(v,{dispatch:a,name:n.name,id:t.id,subId:n.id}))},f=function(e){e.listSub;var t=Object(n.useState)(null),a=Object(u.a)(t,2),i=a[0],l=a[1];return s.a.createElement("div",null,s.a.createElement("input",{type:"text",maxLength:"20",onChange:function(e){l(e.target.value)},placeholder:"New Sublist in sublist"}),s.a.createElement("button",{disabled:!i},"Add"))},w=function(e){var t=e.list,a=e.dispatch,i=Object(n.useState)(null),l=Object(u.a)(i,2),r=l[0],c=l[1];return s.a.createElement("div",null,s.a.createElement("input",{type:"text",maxLength:"20",onChange:function(e){c(e.target.value)},placeholder:"New Sublist"}),s.a.createElement("button",{disabled:!r,onClick:function(){return a({type:"addSublist",payload:{id:t.id,name:r}})}},"Add"))},g=function(e){e.dispatch;var t=Object(n.useState)(null),a=Object(u.a)(t,2),i=a[0],l=a[1];return s.a.createElement("div",null,s.a.createElement("input",{type:"text",maxLength:"20",onChange:function(e){l(e.target.value)},placeholder:"New list"}),s.a.createElement("button",{disabled:!i},"Add"))},L=function(e){var t=e.listsArr,a=e.dispatch;return s.a.createElement("ul",{className:d.a.wrap},t&&t.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement("span",null,e.name),s.a.createElement(b,{name:e.name,id:e.id,dispatch:a}),s.a.createElement("ul",null,e.sublist&&e.sublist.map((function(t){return t.sublist&&t.sublist.length&&t.sublistShow?s.a.createElement("li",{key:t.id,className:d.a.sublist},s.a.createElement("span",{onDoubleClick:function(){return a({type:"toggleValues",id:t.id})}},t.name),t.valuesShow&&s.a.createElement(h,{name:t.name}),s.a.createElement(p,{dispatch:a,name:t.name,id:t.id}),s.a.createElement("ul",null,t.sublist&&t.sublist.map((function(e){return s.a.createElement(S,Object.assign({key:e.id},{listSub:t,subSub:e,dispatch:a}))})),s.a.createElement(f,{listSub:t,dispatch:a}))):s.a.createElement(E,Object.assign({key:t.id},{listSub:t,list:e,dispatch:a}))})),s.a.createElement(w,{list:e,dispatch:a})))})),s.a.createElement(g,{dispatch:a}))},y=function(e){var t=e.listsArr,a=e.dispatch;return s.a.createElement(L,{listsArr:t,dispatch:a})},N=function(e){localStorage.setItem("listsArray",JSON.stringify(e))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.random().toString(36).substr(2,5);return{id:Math.random(),name:e,valuesShow:!1,valuesEdit:!1,sublistShow:!0,sublist:!1,values:{phone:12345,email:"new@gmail.com"}}},W=function(e,t){switch(t.type){case"addSublistInSublist":return{ListsWrap:e.ListsWrap.map((function(a){return a.sublist.map((function(a){return a.id===t.id?(a.sublist?(a.sublist.push(_()),N(e.ListsWrap)):(a.sublist=[],a.sublist.push(_()),N(e.ListsWrap)),a):a})),a}))};case"removeSublistFromSublist":return{ListsWrap:e.ListsWrap.map((function(a){return a.sublist.map((function(a){return a.id===t.payload.id?(a.sublist=a.sublist.filter((function(e){return e.id!==t.payload.subId})),N(e.ListsWrap),a):a})),a}))};case"removeSublist":return{ListsWrap:e.ListsWrap.map((function(a){return a.sublist=a.sublist.filter((function(e){return e.id!==t.id})),N(e.ListsWrap),a}))};case"addSublist":return{ListsWrap:e.ListsWrap.map((function(a){return a.id===t.payload.id&&a.sublist.push(_(t.payload.name)),N(e.ListsWrap),a}))};case"toggleValues":return{ListsWrap:e.ListsWrap.map((function(a){return a.sublist.map((function(a){return a.id===t.id?(a.valuesShow=!a.valuesShow,N(e.ListsWrap),a):a})),a}))};default:throw new Error}},k=[{id:1,name:"List_1",valuesShow:!1,valuesEdit:!1,sublist:[{id:11,name:"1/1",valuesShow:!1,valuesEdit:!1,sublistShow:!0,sublist:!1,values:{phone:11,email:"11@gmail.com"}},{id:12,name:"1/2",valuesShow:!1,valuesEdit:!1,sublistShow:!0,sublist:!1,values:{phone:12,email:"12@gmail.com"}},{id:13,name:"1/3",valuesShow:!1,valuesEdit:!1,sublistShow:!0,sublist:!1,values:{phone:13,email:"13@gmail.com"}},{id:14,name:"1/4",valuesShow:!1,valuesEdit:!1,sublistShow:!0,sublist:!1,values:{phone:14,email:"14@gmail.com"}}]}];l.a.render(s.a.createElement(r.a,null,s.a.createElement((function(){var e=JSON.parse(localStorage.getItem("listsArray")),t=e?{ListsWrap:e}:{ListsWrap:k},a=Object(n.useReducer)(W,t),i=Object(u.a)(a,2),l=i[0],r=i[1];return s.a.createElement("div",{className:o.a.app},s.a.createElement(y,{listsArr:l.ListsWrap,dispatch:r}))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8fa68498.chunk.js.map