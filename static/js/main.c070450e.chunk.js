(this.webpackJsonpgoogleclone=this.webpackJsonpgoogleclone||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(11),a=n.n(o),l=(n(40),n(33)),r=n(19),i=(n.p,n(41),n(2)),j=function(){var e=(new Date).getFullYear();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("footer",{children:Object(i.jsxs)("p",{children:["copyright \u24b8 ",e]})})})},s=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("img",{className:"logo",src:"logo.png",alt:"image loading"}),Object(i.jsx)("h1",{children:"Google Keep Clone"})]})})},u=n(23),b=n(26),O=n(31),d=n.n(O),x=n(64),h=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),o=n[0],a=n[1],l=Object(c.useState)({title:"",content:""}),j=Object(r.a)(l,2),s=j[0],O=j[1],h=function(e){var t=e.target,n=t.name,c=t.value;O((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"main_note",onDoubleClick:function(){a(!1)},children:Object(i.jsxs)("form",{children:[o?Object(i.jsx)("input",{type:"text",name:"title",value:s.title,onChange:h,placeholder:"Title",autocomplete:"off"}):null,Object(i.jsx)("textarea",{rows:"",name:"content",value:s.content,onChange:h,column:"",onClick:function(){a(!0)},placeholder:"write a note......"}),o?Object(i.jsx)(x.a,{onClick:function(){e.passNote(s),O({title:"",content:""})},children:Object(i.jsx)(d.a,{className:"plus_sign"})}):null]})})})},m=n(32),f=n.n(m),g=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"note",children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:e.content}),Object(i.jsx)("button",{className:"btn",onClick:function(){e.deleteItem(e.id)},children:Object(i.jsx)(f.a,{className:"deleteIcon"})})]})})};var p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],a=function(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(s,{}),Object(i.jsx)(h,{passNote:function(e){o((function(t){return[].concat(Object(l.a)(t),[e])}))}}),n.map((function(e,t){return Object(i.jsx)(g,{id:t,title:e.title,content:e.content,deleteItem:a},t)})),Object(i.jsx)(j,{})]})};a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c070450e.chunk.js.map