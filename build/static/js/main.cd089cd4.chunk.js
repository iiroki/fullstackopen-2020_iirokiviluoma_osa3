(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(15),c=t.n(u),l=(t(6),t(4)),o=t(2),i=t(3),m=t.n(i),d="/api/persons",f=function(){return m.a.get(d).then((function(e){return e.data}))},h=function(e){return m.a.post(d,e).then((function(e){return e.data}))},s=function(e){var n="".concat(d,"/").concat(e);return m.a.delete(n).then((function(e){return e}))},b=function(e,n){var t="".concat(d,"/").concat(e);return m.a.put(t,n).then((function(e){return e.data}))},E=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,"Search: ",r.a.createElement("input",{value:e.filter,onChange:e.handleChange})))},v=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add new number"),r.a.createElement("form",{onSubmit:e.add},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.name,onChange:e.handleNameChange})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:e.number,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add new number"))))},p=function(e){var n=e.name,t=e.number,a=e.handleDel;return r.a.createElement("li",null,n,": ",t,r.a.createElement("button",{onClick:a},"Delete"))},g=function(e){var n=e.persons,t=e.delHandler;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(p,{key:e.name,name:e.name,number:e.number,handleDel:function(){return t(e.id)}})}))))},O=0,j=1,C=function(e){var n=e.msg,t=e.type;return null===n?null:t===O?r.a.createElement("div",{className:"notification_good"},n):t===j?r.a.createElement("div",{className:"notification_bad"},n):void 0},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),m=i[0],d=i[1],p=Object(a.useState)(""),w=Object(o.a)(p,2),N=w[0],S=w[1],y=Object(a.useState)(""),k=Object(o.a)(y,2),D=k[0],A=k[1],x=Object(a.useState)(null),H=Object(o.a)(x,2),J=H[0],L=H[1],M=Object(a.useState)(O),_=Object(o.a)(M,2),B=_[0],I=_[1];Object(a.useEffect)((function(){f().then((function(e){u(e)}))}),[]);var P=function(){d(""),S("")},R=function(e,n){I(n),L(e),setTimeout((function(){L(null)}),3e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{msg:J,type:B}),r.a.createElement(E,{filter:D,handleChange:function(e){A(e.target.value)}}),r.a.createElement(v,{add:function(e){if(e.preventDefault(),t.some((function(e){return e.name===m}))){if(!window.confirm("".concat(m," is already in the phonebook!\nReplace the old number?")))return;var n=t.find((function(e){return e.name===m})),a=Object(l.a)(Object(l.a)({},n),{},{number:N});b(a.id,a).then((function(e){u(t.map((function(n){return n.id!==e.id?n:e}))),P(),R("Modified: ".concat(a.name),O)}))}else h({name:m,number:N}).then((function(e){u(t.concat(e)),P(),R("Added: ".concat(m),O)})).catch((function(e){R("Error: Name must be at least 3 characters and number 8 characters long!",j)}))},name:m,handleNameChange:function(e){d(e.target.value)},number:N,handleNumberChange:function(e){S(e.target.value)}}),r.a.createElement(g,{persons:""===D?t:t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(D.toLowerCase())})),delHandler:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(s(e).then((function(e){R("Deleted: ".concat(n.name),O)})).catch((function(e){R("Error: ".concat(n.name," is already deleted from server."),j)})),u(t.filter((function(n){return n.id!==e}))))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},6:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.cd089cd4.chunk.js.map