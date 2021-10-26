(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__294Gu",label:"ContactForm_label__3ZsY1",input:"ContactForm_input__2s0Fx",button__wrapper:"ContactForm_button__wrapper__Z8oUI",button:"ContactForm_button__3fiMu"}},,,,function(t,e,n){t.exports={title:"App_title__1gpzx",close:"App_close__2oxR1"}},,,function(t,e,n){t.exports={label:"Filter_label__3ccji",input:"Filter_input__2zGJa"}},function(t,e,n){t.exports={name:"ContactItem_name__3ccC5",number:"ContactItem_number__2OPTN",button:"ContactItem_button__3Svqp"}},function(t,e,n){t.exports={list:"ContactList_list__1rI8j",item:"ContactList_item__1Kpy1"}},,,function(t,e,n){t.exports={container:"Container_container__1rw7q"}},function(t,e,n){t.exports={IconButton:"IconButton_IconButton__30_xU"}},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),o=n.n(r),l=n(16),i=n(3),s=n(14),u=n.n(s),b=n(0),m=function(t){var e=t.children;return Object(b.jsx)("div",{className:u.a.container,children:e})};m.defaultProps={children:[]};var p=m,j=n(28),d=n(2),f=n.n(d),h=function(t){t.contacts;var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],p=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},d=function(){o(""),m("")};return Object(b.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault();var n={id:Object(j.a)(),name:r,number:u};e(n),d()},children:[Object(b.jsxs)("label",{className:f.a.label,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Contact name","aria-label":"input to you name",className:f.a.input,value:r,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:f.a.label,children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number","aria-label":"input to you phone number",className:f.a.input,value:u,onChange:p,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("div",{className:f.a.button__wrapper,children:Object(b.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})})]})},O=n(9),_=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:_.a.label,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"filter",placeholder:"Find?",className:_.a.input,value:e,onChange:n})]})};x.defaultProps={value:""};var C=x,v=n(10),g=n.n(v),y=n(12),w=n(17),N=n(7),k=n.n(N),I=n(15),S=n.n(I),F=["children","onClick"],P=function(t){var e=t.children,n=t.onClick,a=Object(w.a)(t,F);return Object(b.jsx)("button",Object(y.a)(Object(y.a)({type:"button",className:S.a.IconButton,onClick:n},a),{},{children:e}))};P.defaultProps={onClick:function(){return null},children:null},P.protoTypes={onClick:k.a.func,children:k.a.node,"aria-label":k.a.string.isRequired};var A,E,Z=P,B=["title","titleId"];function z(){return z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},z.apply(this,arguments)}function D(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function J(t,e){var n=t.title,c=t.titleId,r=D(t,B);return a.createElement("svg",z({width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,A||(A=a.createElement("path",{d:"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z",fill:"black"})),E||(E=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",fill:"black"})))}var M=a.forwardRef(J),q=(n.p,function(t){var e=t.contact,n=t.onDeleteContact;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:g.a.name,children:[e.name,": "]}),Object(b.jsx)("a",{href:"tel:".concat(e.number),className:g.a.number,children:e.number}),Object(b.jsx)(Z,{onClick:n,"aria-label":"Delete contact",children:Object(b.jsx)(M,{width:"20px",height:"20px",fill:"#a9a1a1"})})]})}),L=n(11),R=n.n(L),T=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:R.a.list,children:e.map((function(t){return Object(b.jsx)("li",{className:R.a.item,children:Object(b.jsx)(q,{contact:t,onDeleteContact:function(){n(t.id)}})},t.id)}))})},G=n(6),H=n.n(G),U="contacts",K=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],u=o[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem(U));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem(U,JSON.stringify(n))}),[n]);return Object(b.jsxs)(p,{children:[Object(b.jsx)("h1",{className:H.a.title,children:"Phonebook"}),Object(b.jsx)(h,{onSubmit:function(t){n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("This already in contacts"):c([].concat(Object(l.a)(n),[t]))},contacts:n}),Object(b.jsx)("h2",{className:H.a.title,children:"Contacts"}),Object(b.jsx)(C,{value:s,onChange:function(t){u(t.target.value.toLowerCase())}}),Object(b.jsx)(T,{contacts:n,onDeleteContact:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)}})]})};n(25);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c7e1b056.chunk.js.map