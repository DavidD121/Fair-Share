(this["webpackJsonpfair-share"]=this["webpackJsonpfair-share"]||[]).push([[0],{104:function(e,t,s){},105:function(e,t,s){},107:function(e,t,s){},218:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(49),a=s.n(c),l=(s(104),s(15)),o=(s(105),s(51)),r=(s(107),s(2));var d=function(e){var t=e.avg,s=e.max,i=e.min,n=s-i;function c(e){return(e-i)/n*400}var a=Object(o.useSpring)({height:t||i,from:{height:i}}),l=0;(t?c(t):0)>368&&(document.getElementById("meter").classList.add("filled"),l=-20);var d={top:a.height.interpolate((function(e){return c(e)+l}))};return Object(r.jsxs)("div",{className:"avgbar",children:[Object(r.jsxs)("h2",{className:"label",children:["Budget: $",s]}),Object(r.jsx)("div",{className:"bar",style:{height:400},children:Object(r.jsx)(o.animated.div,{className:"meter",id:"meter",style:{height:a.height.interpolate((function(e){return c(e)}))},children:Object(r.jsx)(o.animated.p,{className:"meter-label",style:d,children:a.height.interpolate((function(e){return e.toFixed(2)}))})})}),Object(r.jsx)("h2",{className:"label",children:i})]})},m=s(37),j=s.n(m),b=s(38),u=s(12),h=s(99),p="David",x={David:100,Blake:100,Rob:100},v=[{description:"groceries",cost:100,roommate:"David"},{description:"groceries",cost:100,roommate:"Blake"},{description:"groceries",cost:100,roommate:"Rob"}],O=[{name:"Groceries",list:[{item:"Eggs",cost:""},{item:"Ham",cost:""},{item:"Milk",cost:""},{item:"Chicken",cost:""}]},{name:"Wishlist",list:[{item:"New Toaster",cost:50},{item:"4k TV",cost:350}]}],g=Object.values(x).reduce((function(e,t){return e+t})),f=1e3;function N(){var e=Object(i.useState)({David:100,Blake:100,Rob:100}),t=Object(l.a)(e,2),s=(t[0],t[1],Object(i.useState)(100)),n=Object(l.a)(s,2),c=n[0],a=n[1];g=Object.values(x).reduce((function(e,t){return e+t}));var o={labels:Object.keys(x),datasets:[{label:"Spending",data:Object.values(x),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]};return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"left-cols",children:[Object(r.jsxs)("div",{className:"spending col",children:[Object(r.jsx)("div",{className:"chart-container",children:Object(r.jsx)(h.a,{data:o})}),Object(r.jsx)("button",{className:"balance-button",onClick:function(){window.confirm("David owes Rob X\nBlake owes Rob Y\n\nPlease pay each other accordingly and press OK, if you cannot pay at the moment, press Cancel")&&(x.David=g/3,x.Blake=g/3,x.Rob=g/3,a(c+1))},children:"Balance"}),Object(r.jsx)("div",{className:"balance-tab",id:"balanceConfirmation"})]}),Object(r.jsxs)("div",{className:"add-expense col",children:[Object(r.jsx)("button",{className:"add-expense-div",onClick:function(){document.getElementById("expenseForm").style.visibility="visible"},children:"Add Expense"}),Object(r.jsxs)("form",{id:"expenseForm",className:"hidden-form",children:[Object(r.jsxs)("div",{className:"add-expense-div",children:[Object(r.jsx)("label",{for:"description",children:"Description: "}),Object(r.jsx)("input",{required:!0,type:"text",name:"description",id:"description"})]}),Object(r.jsxs)("div",{className:"add-expense-div",children:[Object(r.jsx)("label",{for:"cost",style:{"margin-left":"40px"},children:"Cost: $"}),Object(r.jsx)("input",{required:!0,type:"number",placeholder:"1.00",step:"0.01",name:"cost",id:"cost"})]}),Object(r.jsx)("button",{type:"button",className:"add-expense-div",onClick:function(){var e=j()("#expenseForm").serializeArray();if(console.log(e),isNaN(parseFloat(e[1].value)))alert("Please enter a valid number");else{document.getElementById("expenseForm").reset();var t=x;t.David=x.David+parseFloat(e[1].value),v.push({description:e[0].value,cost:parseFloat(e[1].value),roommate:p}),console.log(t),x=t,a(c+1),document.getElementById("expenseForm").style.visibility="hidden",console.log("in addexpense")}},children:"Add"})]})]})]}),Object(r.jsxs)("div",{className:"budget col",children:[Object(r.jsx)(d,{avg:g,max:f,min:0}),Object(r.jsx)("button",{className:"set-budget",onClick:function(){document.getElementById("budgetForm").style.visibility="visible"},children:"Set Budget"}),Object(r.jsxs)("form",{id:"budgetForm",className:"hidden-form",children:[Object(r.jsxs)("div",{className:"add-expense-div",children:[Object(r.jsx)("label",{for:"description",children:"New Budget: "}),"$",Object(r.jsx)("input",{required:!0,type:"text",name:"description",id:"description"})]}),Object(r.jsx)("button",{type:"button",className:"add-expense-div",onClick:function(){var e=j()("#budgetForm").serializeArray();console.log(e);var t=parseFloat(e[0].value);if(isNaN(t))alert("Please enter a valid number");else{var s=document.getElementById("budgetForm");s.reset(),f=t,a(c+1),s.style.visibility="hidden",console.log("in setBudget")}},children:"Confirm"})]})]})]})}function y(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),s=t[0],n=t[1];return g=Object.values(x).reduce((function(e,t){return e+t})),console.log(O),Object(r.jsxs)("div",{className:"shopping",children:[Object(r.jsx)("h1",{className:"shopping-title",children:"Shopping Lists"}),Object(r.jsxs)("h2",{children:["Budget Left: $",f-g]}),"Press the checkbox to remove an item",Object(r.jsxs)("div",{className:"shopping-lists",children:[O.map((function(e,t){return Object(r.jsxs)("div",{className:"shopping-list",children:[Object(r.jsx)("h3",{className:"list-name",children:e.name}),Object(r.jsxs)("div",{className:"list-items",children:[e.list.map((function(e,i){return Object(r.jsxs)("div",{className:"list-item",children:[Object(r.jsx)("input",{type:"checkbox",className:"remove-item-button",onClick:function(){return function(e,t){O[e].list.splice(t,1),n(s+1)}(t,i)}}),Object(r.jsxs)("text",{className:"item-name",children:[e.item," ",console.log(isNaN(e.cost))]}),Object(r.jsxs)("text",{className:"item-cost",children:[0==e.cost.length||isNaN(e.cost)?"":"$"+e.cost," ",console.log(e.cost)]})]})})),Object(r.jsx)("button",{className:"add-item",onClick:function(){return function(e){document.getElementById("form"+e).style.visibility="visible"}(t)},children:"+"}),Object(r.jsxs)("form",{id:"form"+t,className:"hidden-form",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{for:"description",children:"Item: "}),Object(r.jsx)("input",{required:!0,type:"text",name:"description",id:"description"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{for:"cost",children:"Cost: $"}),Object(r.jsx)("input",{type:"number",step:"0.01",name:"cost",id:"cost"})]}),Object(r.jsx)("button",{className:"add-expense-div",onClick:function(){return function(e){var t=j()("#form"+e).serializeArray();console.log(t),document.getElementById("form"+e).reset(),O[e].list.push({item:t[0].value,cost:t[1].value}),n(s+1),console.log("in addItem"),document.getElementById("form"+e).style.visibility="hidden"}(t)},children:"Add Item"})]})]})]})})),Object(r.jsxs)("div",{className:"add-list",children:[Object(r.jsx)("button",{onClick:function(){document.getElementById("addListForm").style.visibility="visible"},children:"Add List"}),Object(r.jsxs)("form",{id:"addListForm",className:"hidden-form",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{for:"description",children:"Title: "}),Object(r.jsx)("input",{required:!0,type:"text",name:"description",id:"description"})]}),Object(r.jsx)("button",{className:"add-expense-div",onClick:function(){var e=j()("#addListForm").serializeArray();console.log(e);var t=document.getElementById("addListForm");t&&(t.reset(),O.push({name:e[0].value,list:[]}),n(s+1),console.log("in addItem"),t.style.visibility="hidden")},children:"Add List"})]})]})]})]})}function k(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(r.jsxs)("div",{className:"payments",children:[Object(r.jsx)("h1",{className:"payments-title",children:"Expense List"}),Object(r.jsx)("div",{className:"payments-list",children:v.map((function(e,t){return Object(r.jsx)("div",{className:"payments-item",children:Object(r.jsxs)("div",{className:"payment-attributes",children:[Object(r.jsxs)("text",{className:"payment-attribute",children:["Description: ",e.description]}),Object(r.jsxs)("text",{className:"payment-attribute",children:["Cost: ",e.cost]}),Object(r.jsxs)("text",{className:"payment-attribute",children:["Roommate: ",e.roommate]}),Object(r.jsx)("button",{className:"remove-payment-button",onClick:function(){return function(e){console.log(v),x[v[e].roommate]=x[v[e].roommate]-v[e].cost,v.splice(e,1),n(s+1)}(t)},children:"remove"})]})})}))})]})}var B=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{children:Object(r.jsxs)(b.a,{children:[Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(b.b,{className:"nav-link",to:"/",children:Object(r.jsx)("div",{className:"nav-text",children:"Home"})}),Object(r.jsx)(b.b,{className:"nav-link",to:"/shopping/",children:Object(r.jsx)("div",{className:"nav-text",children:"Shopping"})}),Object(r.jsx)(b.b,{className:"nav-link",to:"/payments/",children:Object(r.jsx)("div",{className:"nav-text",children:"Payments"})})]}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,component:N}),Object(r.jsx)(u.a,{path:"/payments",component:k}),Object(r.jsx)(u.a,{path:"/shopping",component:y})]})]})})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,219)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),C()}},[[218,1,2]]]);
//# sourceMappingURL=main.d5c4d951.chunk.js.map