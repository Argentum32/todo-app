(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),i=c(6),s=c.n(i),r=(c(14),c(9)),l=c(7),a=c(8),u=c(3),d=(c(15),c.p+"static/media/icon-cross.6ee81d30.svg"),m=c(0);var f=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],o=e[1],i=Object(n.useState)(),s=Object(u.a)(i,2),f=(s[0],s[1]),h=Object(n.useState)("all"),j=Object(u.a)(h,2),g=j[0],b=j[1],v=function(){function t(e){Object(l.a)(this,t),this.action=e.todo,this.id=e.id,this.status=!1}return Object(a.a)(t,[{key:"complete",value:function(){this.status=!this.status,f(Math.random())}},{key:"deletion",value:function(){var t=this;o((function(e){return e.filter((function(e){return e.id!==t.id}))}))}},{key:"markup",get:function(){var t=this;return Object(m.jsxs)("div",{className:"todo",children:[Object(m.jsx)("img",{onClick:function(){return t.complete()},className:"check ".concat(this.status?"checkDone":"")}),Object(m.jsx)("div",{className:"action ".concat(this.status&&k?"actionDone":""),children:this.action}),Object(m.jsx)("img",{onClick:function(){return t.deletion()},className:"delete",src:d})]},this.id)}}]),t}(),O=function(t){t.preventDefault(),o((function(t){return[new v({id:Date.now(),todo:document.getElementById("todo").value})].concat(Object(r.a)(t))}))};Object(n.useEffect)((function(){return document.querySelector("form").reset()}),[O]);var L=c.filter((function(t){return!1===t.status})).length,p="active"===g?c.filter((function(t){return!1===t.status})).map((function(t){return t.markup})):"completed"===g?c.filter((function(t){return!0===t.status})).map((function(t){return t.markup})):c.map((function(t){return t.markup}));function y(t){b(t);var e=["all","active","completed"];document.querySelector(".".concat(t)).classList.add("activeFilter"),document.querySelector(".".concat(e.filter((function(e){return e!==t}))[0])).classList.remove("activeFilter"),document.querySelector(".".concat(e.filter((function(e){return e!==t}))[1])).classList.remove("activeFilter")}var S=Object(n.useState)(!0),x=Object(u.a)(S,2),k=x[0],N=x[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"todo"}),Object(m.jsx)("img",{onClick:function(){return N((function(t){return!t}),(document.body.classList.toggle("bodyLight"),document.querySelector(".styleToggler").classList.toggle("moon"),document.querySelector(".form").classList.toggle("todoLight"),document.querySelector(".field").classList.toggle("todoLight"),document.querySelector(".listOfTodos").classList.toggle("todoLight"),document.querySelector(".all").classList.toggle("footerLight"),document.querySelector(".active").classList.toggle("footerLight"),document.querySelector(".completed").classList.toggle("footerLight"),document.querySelector(".clear").classList.toggle("footerLight"),k||(document.querySelectorAll(".action").forEach((function(t){return t.classList.remove("actionLight")})),document.querySelectorAll(".actionDone").forEach((function(t){return t.classList.remove("doneLight")}))),void(k&&(document.querySelectorAll(".action").forEach((function(t){return t.classList.add("actionLight")})),document.querySelectorAll(".actionDone").forEach((function(t){return t.classList.add("doneLight")}))))))},className:"styleToggler"})]}),Object(m.jsxs)("form",{className:"form",onSubmit:O,children:[Object(m.jsx)("img",{className:"check"}),Object(m.jsx)("input",{className:"field",type:"text",minlength:"5",id:"todo",placeholder:"Create your to do action"})]}),Object(m.jsxs)("div",{className:"listOfTodos",children:[p,Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("div",{className:"counter",children:[L," items left"]}),Object(m.jsxs)("div",{className:"filters",children:[Object(m.jsx)("div",{className:"all",onClick:function(){return y("all")},children:"All"}),Object(m.jsx)("div",{className:"active",onClick:function(){return y("active")},children:"Active"}),Object(m.jsx)("div",{className:"completed",onClick:function(){return y("completed")},children:"Completed"})]}),Object(m.jsx)("div",{className:"clear",onClick:function(){return o((function(t){return t.filter((function(t){return!0!==t.status}))}))},children:"Clear Completed"})]})]})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,n=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),n(t),o(t),i(t),s(t)}))};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.139b6b56.chunk.js.map