(this["webpackJsonpintro-to-react"]=this["webpackJsonpintro-to-react"]||[]).push([[0],{37:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(29),i=a.n(c),n=(a(36),a(37),a(5)),r=a(2),l=a(4),j=a.n(l),d=a(11),o=a(8),h=a(12),m=a.n(h),b=a(0),x=function(e){var t=e.character,a=e.quotes;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"title is-size-1 has-text-white has-text-weight-normal animate__animated animate__slow animate__slideInLeft",children:t.name.toUpperCase()}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"columns",children:[Object(b.jsx)("div",{className:"column is-one-third-desktop is-one-half-tablet animate__animated animate__slow animate__slideInDown",children:Object(b.jsx)("figure",{className:"image",id:"character-id",children:Object(b.jsx)("img",{src:t.img_url,alt:t.name})})}),Object(b.jsx)("div",{className:"column is-two-thirds-desktop is-one-half-tablet animate__animated animate__slow animate__slideInRight",children:Object(b.jsxs)("div",{className:"tile is-ancestor is-vertical",children:[Object(b.jsxs)("div",{className:"tile is-parent",children:[Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child notification is-info is-light",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-user-secret"})," Aliases:"]}),t.alias.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))]})}),Object(b.jsxs)("div",{className:"tile is-parent is-vertical",children:[Object(b.jsxs)("div",{className:"tile is-child notification is-link is-light",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fab fa-reddit-alien"}),"  Species:"]}),Object(b.jsx)("p",{className:"subtitle",children:t.species}),Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-globe-europe"})," Origin:"]}),Object(b.jsx)("p",{className:"subtitle",children:t.origin}),Object(b.jsx)("p",{className:"title has-text-weight-normal",children:"Gender:"}),Object(b.jsx)("p",{className:"subtitle",children:t.gender}),Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-hat-wizard"})," Hair:"]}),Object(b.jsx)("p",{className:"subtitle",children:t.hair})]}),Object(b.jsxs)("div",{className:"tile is-child notification is-danger is-light",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-trophy"})," Abilities"]}),t.abilities.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))]})]})]}),Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child notification is-warning is-light",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-quote-left"})," Quotes ",Object(b.jsx)("i",{className:"fas fa-quote-right"})]}),a.filter((function(e){return e.by===t.name})).map((function(e,t){return Object(b.jsx)("li",{children:e.quote},t)}))]})})]})})]})]})},u=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(r.f)().id,n=Object(s.useState)([]),l=Object(o.a)(n,2),h=l[0],u=l[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://finalspaceapi.com/api/v0/character/".concat(i));case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://finalspaceapi.com/api/v0/quote");case 3:t=e.sent,a=t.data,u(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[i]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"section has-background-link-dark",id:"character-detail",children:Object(b.jsx)("div",{className:"container",children:a?Object(b.jsx)(x,{character:a,quotes:h}):Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fa-solid fa-hourglass"}),"...Loading"]})})})})},O=function(e){var t=e.index,a=e.value,s=e.item;return Object(b.jsx)("div",{className:"column is-one-third",children:Object(b.jsx)(n.b,{to:"/".concat(s,"/").concat(a.id),children:Object(b.jsxs)("div",{className:"card animate__animated animate__headShake",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image ".concat("characters"===s?"is-square":"is-2by1"),children:Object(b.jsx)("img",{src:a.img_url,alt:a.name})})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title has-background-dark is-centered",children:Object(b.jsx)("p",{className:"title is-5 has-text-white",children:a.name})})})]})})},t)},p=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(""),n=Object(o.a)(i,2),r=n[0],l=n[1],h=Object(s.useState)([]),x=Object(o.a)(h,2),u=x[0],p=x[1];Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://finalspaceapi.com/api/v0/character/");case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(s.useEffect)((function(){!function(){var e=new RegExp(r,"i"),t=a.filter((function(t){return e.test(t.name)}));p(t)}()}),[r]);return Object(b.jsxs)("section",{className:"section columns",children:[Object(b.jsx)("div",{className:"column  is-narrow",children:Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{className:"input is-rounded is-hovered",placeholder:"Search characters",onChange:function(e){l(e.target.value)},type:"search"}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search"})})]})}),Object(b.jsx)("div",{className:"container column",children:Object(b.jsx)("div",{className:"columns is-multiline",children:u.length?u.map((function(e,t){return Object(b.jsx)(O,{value:e,item:"characters"},t)})):a.map((function(e,t){return Object(b.jsx)(O,{value:e,item:"characters"},t)}))})})]})},f=function(e){var t=e.index,a=e.address,c=e.url,i=Object(s.useState)(null),r=Object(o.a)(i,2),l=r[0],h=r[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(c));case 3:t=e.sent,a=t.data,s=[a.name,a.img_url],h(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(b.jsx)(b.Fragment,{children:l?Object(b.jsx)("div",{className:"column is-one-quarter",children:Object(b.jsx)(n.b,{to:"/characters/".concat(a),className:"card",children:Object(b.jsxs)("div",{className:"card-content has-background-primary-dark",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-square",children:Object(b.jsx)("img",{src:l[1]})})}),Object(b.jsx)("div",{className:"content has-text-centered has-text-light",children:Object(b.jsx)("p",{className:"title is-5 has-text-weight-normal",children:l[0]})})]})})},t):Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fa-solid fa-hourglass"}),"Loading.."]})})},v=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(r.f)().id;return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://finalspaceapi.com/api/v0/episode/".concat(i));case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(b.jsx)("section",{className:"section has-background-info-dark",children:Object(b.jsx)("div",{className:"container",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"title has-text-white has-text-weight-normal is-size-1 animate__animated animate__slow animate__slideInLeft",children:a.name}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"columns",children:[Object(b.jsx)("div",{className:"column is-half animate__animated animate__slow animate__slideInLeft",children:Object(b.jsx)("figure",{className:"image",id:"episode-image",children:Object(b.jsx)("img",{src:a.img_url,alt:a.name})})}),Object(b.jsx)("div",{className:"column is-half animate__animated animate__slow animate__slideInRight",children:Object(b.jsxs)("div",{className:"tile is-ancestor is-vertical",children:[Object(b.jsxs)("div",{className:"tile is-parent",children:[Object(b.jsxs)("div",{className:"tile is-child box",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal is-6",children:[Object(b.jsx)("i",{className:"fas fa-video"})," Directed by:"]}),Object(b.jsx)("p",{children:a.director})]}),Object(b.jsxs)("div",{className:"tile is-child box",children:[Object(b.jsxs)("p",{className:"title has-text-weight-normal is-6",children:[Object(b.jsx)("i",{className:"fas fa-broadcast-tower"})," Air Date"]}),Object(b.jsx)("p",{children:a.air_date})]})]}),Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child box",children:[Object(b.jsxs)("p",{className:"title is-6 has-text-weight-normal",children:[Object(b.jsx)("i",{className:"fas fa-pencil-alt"})," Written By"]}),Object(b.jsx)("p",{children:a.writer})]})})]})})]})]}),Object(b.jsx)("div",{className:"tile is-ancestor animate__animated animate__slow animate__slideInUp",children:Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child notification is-primary-light px-5",children:[Object(b.jsx)("p",{className:"title has-text-weight-normal has-text-centered",children:"Characters in Episode"}),Object(b.jsx)("div",{className:"columns is-multiline is-justify-content-center",children:a.characters.map((function(e,t){var a=e.split("/").pop();return Object(b.jsx)(f,{address:a,url:e},t)}))})]})})})]}):Object(b.jsx)("h1",{children:"Loading"})})})},N=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://finalspaceapi.com/api/v0/episode");case 3:t=e.sent,a=t.data,c(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("section",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"columns is-multiline",children:a.map((function(e,t){return Object(b.jsx)(O,{value:e,item:"episodes"},t)}))})})})},g=function(){return Object(b.jsx)("section",{className:"hero is-fullheight",children:Object(b.jsx)("div",{className:"hero-body",children:Object(b.jsx)("div",{className:"container has-text-centered is-flex is-justify-content-center animate__animated animate__fadeInDown",id:"hero-container",children:Object(b.jsxs)("div",{className:"content p-5",id:"hero-text",children:[Object(b.jsx)("p",{className:"title has-text-centered has-text-white",children:"Final Space"}),Object(b.jsx)("p",{className:"subtitle has-text-white",children:"An epic animated sci-fi comedy about a spaceman named Gary"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(n.b,{to:"/characters",children:Object(b.jsx)("button",{className:"button is-primary m-5",children:"Go to Characters"})}),Object(b.jsx)(n.b,{to:"/episodes",children:Object(b.jsx)("button",{className:"button is-primary m-5",children:"See the list of Episodes"})})]})]})})})})},_=a.p+"static/media/logo.4132b8fc.png",w=function(){return Object(b.jsxs)("nav",{className:"navbar is-dark is-spaced",children:[Object(b.jsx)("div",{className:"navbar-brand",children:Object(b.jsx)("span",{role:"img",className:"title",children:Object(b.jsx)(n.b,{to:"/",children:Object(b.jsx)("img",{src:_,width:"96",height:"96"})})})}),Object(b.jsx)("div",{className:"navbar-menu is-dark is-active",id:"nav-menu",children:Object(b.jsxs)("div",{className:"navbar-end",children:[Object(b.jsx)(n.b,{to:"/",className:"navbar-item has-text-white is-size-3",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-meteor"})," Home"]})}),Object(b.jsx)(n.b,{to:"/characters",className:"navbar-item has-text-white is-size-3",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-users"})," Characters"]})}),Object(b.jsx)(n.b,{to:"/episodes",className:"navbar-item has-text-white is-size-3",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-film"})," Episodes"]})})]})})]})},k=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(n.a,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(r.a,{exact:!0,path:"/characters",component:p}),Object(b.jsx)(r.a,{exact:!0,path:"/characters/:id",component:u}),Object(b.jsx)(r.a,{exact:!0,path:"/episodes",component:N}),Object(b.jsx)(r.a,{exact:!0,path:"/episodes/:id",component:v})]})]})})};a(63);i.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.92985d22.chunk.js.map