(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports={message:"Message_message__289Vm",messageAvatar:"Message_messageAvatar__STDmH",messageAvatarImg:"Message_messageAvatarImg__2hAsK",messageBalloon:"Message_messageBalloon__vgXeH",messageBody:"Message_messageBody__1r54U",messageName:"Message_messageName__1sIKD",messageText:"Message_messageText__O3SZK",messageTime:"Message_messageTime__3DMXP"}},function(e,a,t){e.exports={nav:"Navbar_nav__1QbSS",hidden:"Navbar_hidden__1GB1I",item:"Navbar_item__1SOCJ",activeLink:"Navbar_activeLink__38wKG"}},,,,,,,function(e,a,t){e.exports={affair:"Affair_affair__KiMwl",id:"Affair_id__31rBz",name:"Affair_name__2F2BD",priority:"Affair_priority__2odR5"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2lU5j",error:"Greeting_error__ASJQi",errorText:"Greeting_errorText__2gmFN",counter:"Greeting_counter__1IWnq",container:"Greeting_container__gYoS-"}},,,function(e,a,t){e.exports={page:"pages_page__BKerS"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2e2Z-",errorInput:"SuperInputText_errorInput__152Zs",error:"SuperInputText_error__3LsfM"}},function(e,a,t){e.exports={clock:"Clock_clock__AWjxS",date:"Clock_date__tys4c",dateTimeBox:"Clock_dateTimeBox__32S-z"}},function(e,a,t){e.exports={rangeValue:"HW11_rangeValue__2DssZ",rangeContainer:"HW11_rangeContainer__Ayw6_",doubleRangeContainer:"HW11_doubleRangeContainer__rUCZS"}},,function(e,a,t){e.exports={App:"App_App__2ubi-"}},function(e,a,t){e.exports={affairs:"Affairs_affairs__3ZxAb",buttonsGroup:"Affairs_buttonsGroup__1zM_t"}},function(e,a,t){e.exports={blue:"HW4_blue__1jDe_",column:"HW4_column__2B9RY"}},function(e,a,t){e.exports={default:"SuperButton_default__zQMa1",red:"SuperButton_red__2E1AQ"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1fnpA",spanClassName:"SuperCheckbox_spanClassName__1HvTs"}},function(e,a,t){e.exports={dark:"HW12_dark__1asjO","dark-text":"HW12_dark-text__3ZEez",red:"HW12_red__8sAY9","red-text":"HW12_red-text__EQ1dJ",some:"HW12_some__3e2-0","some-text":"HW12_some-text__1N9hE",blue:"HW12_blue__1qJzB","blue-text":"HW12_blue-text__1F6e1",pink:"HW12_pink__fQHYB","pink-text":"HW12_pink-text__3uCCb"}},,,,,,function(e,a,t){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__2wRlU"}},function(e,a,t){e.exports={people:"HW8_people__15zEd"}},function(e,a,t){e.exports={range:"SuperRange_range__WqlRc"}},function(e,a,t){e.exports={slider:"SuperDoubleRange_slider__2bZ3y"}},function(e,a,t){e.exports={HW5:"HW5_HW5__1b9Hy",nav:"HW5_nav__MLkhm",item:"HW5_item__1Drws",activeLink:"HW5_activeLink__1njNF"}},,,,,,,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=t(14),i=(t(56),t(30)),u=t.n(i);var s=function(){return r.a.createElement("div",null)},m=t(3),d=t(12),E=t.n(d);var v=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.messageAvatar},r.a.createElement("img",{className:E.a.messageAvatarImg,src:e.avatar})),r.a.createElement("div",{className:E.a.messageBalloon},r.a.createElement("div",{className:E.a.messageBody},r.a.createElement("div",{className:E.a.messageName},e.name),r.a.createElement("div",{className:E.a.messageText},e.message)),r.a.createElement("div",{className:E.a.messageTime},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",f="some text",g="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(v,{avatar:_,name:p,message:f,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),C=t(20),k=t.n(C);var N=function(e){return console.log(e),r.a.createElement("div",{className:k.a.affair},r.a.createElement("div",{className:k.a.id},"".concat(e.affair._id)),r.a.createElement("div",{className:k.a.name},"".concat(e.affair.name)),r.a.createElement("div",{className:k.a.priority},"".concat(e.affair.priority)),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},O=t(31),x=t.n(O);var y=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:x.a.affairs},a,r.a.createElement("div",{className:x.a.buttonsGroup},r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low")))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(j),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),i=o[0],u=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"Homework 2",r.a.createElement(y,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(25),H=t(21),A=t.n(H),T=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?A.a.error:"";return r.a.createElement("div",{className:A.a.container},r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:function(e){t(e.currentTarget.value)},className:o})," ",r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:A.a.counter,title:"Total users"},"Total users: ",c),r.a.createElement("div",{className:A.a.errorText},l)))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(b.a)(u,2),m=s[0],d=s[1],E=a.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){i(e),d(null)},addUser:function(){o.trim()?(t(o),i(""),alert("Hello ".concat(o,"!"))):d("Please enter the name")},error:m,totalUsers:E})};var B=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Users in state:"),e.users.map((function(e){return r.a.createElement("div",{key:e._id},e.name)})))},M=t(71);var I=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("header",null,"Homework 3"),r.a.createElement(W,{users:t,addUserCallback:function(e){l([].concat(Object(w.a)(t),[{_id:Object(M.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement(B,{users:t}),r.a.createElement("hr",null))},F=t(6),D=t(26),R=t.n(D),G=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]);console.log(o);var s="".concat(R.a.error," ").concat(i||""),m="".concat(c?R.a.errorInput:R.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},L=t(32),P=t.n(L),J=t(33),z=t.n(J),U=function(e){var a=e.red,t=e.className,n=Object(F.a)(e,["red","className"]),l="".concat(a?z.a.red:z.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},K=t(34),Z=t.n(K),Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Z.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Z.a.spanClassName},l))};var Q=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"):alert(t)},i=Object(n.useState)(!1),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("header",null,"Homework 4"),r.a.createElement("div",{className:P.a.column},r.a.createElement(G,{value:t,onChangeText:l,onEnter:o,error:c,className:P.a.blue}),r.a.createElement(U,{red:""===t,onClick:o},"Alert! "),r.a.createElement(Y,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(Y,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=t(24),V=t.n(q),X=t(41),$=t.n(X),ee=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(b.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,E=m.onDoubleClick,v=(m.className,Object(F.a)(m,["children","onDoubleClick","className"])),_="".concat($.a.superEditableSpan);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(G,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:_},v),d||c.value))};function ae(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function te(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}ae("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homework 6",r.a.createElement("div",null,r.a.createElement(ee,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(U,{onClick:function(){ae("editable-span-value",t)}},"Save"),r.a.createElement(U,{onClick:function(){l(te("editable-span-value",""))}},"Restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var re=function(){return r.a.createElement("div",{className:V.a.page},r.a.createElement(h,null),r.a.createElement(S,null),r.a.createElement(I,null),r.a.createElement(Q,null),r.a.createElement(ne,null))};var le=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var ce=function(){return r.a.createElement("div",null)},oe=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(F.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},ie=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,l){return r.a.createElement("label",{key:a+"-"+l},r.a.createElement("input",{type:"radio",name:a,checked:t[l]===n,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ue=["xxxx","yyyy","zzzz"];var se=function(){var e=Object(n.useState)(ue[1]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"Homework 7",r.a.createElement("div",null,r.a.createElement(oe,{options:ue,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio1",options:ue,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=function(e,a){switch(a.type){case"sort":var t="down"===a.payload?-1:1,n=Object(w.a)(e).sort((function(e,a){return e.name>a.name?t:-1*t}));return console.log(n.map((function(e){return e.name}))),n;case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},de=t(42),Ee=t.n(de),ve=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var _e=function(){var e=Object(n.useState)(ve),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"Homework 8",r.a.createElement("div",{className:Ee.a.people},c),r.a.createElement("div",null,r.a.createElement(U,{onClick:function(){l(me(ve,{type:"sort",payload:"up"}))}},"Sort up")),r.a.createElement("div",null,r.a.createElement(U,{onClick:function(){l(me(ve,{type:"sort",payload:"down"}))}},"Sort down")),r.a.createElement("div",null,r.a.createElement(U,{onClick:function(){l(me(ve,{type:"check",payload:18}))}},"Check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(27),fe=t.n(pe);var ge=function(){var e=Object(n.useState)(0),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(b.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(b.a)(s,2),d=m[0],E=m[1],v=function(){clearInterval(t),u(void 0)},_=i?(null===i||void 0===i?void 0:i.getHours())+":"+("00"+(null===i||void 0===i?void 0:i.getMinutes())).slice(-2)+":"+("00"+(null===i||void 0===i?void 0:i.getSeconds())).slice(-2):"Press start",p=i?("00"+(null===i||void 0===i?void 0:i.getDate())).slice(-2)+"."+("00"+(null===i||void 0===i?void 0:i.getMonth())+1).slice(-2)+"."+(null===i||void 0===i?void 0:i.getFullYear()):void 0;return r.a.createElement("div",null,r.a.createElement("div",{className:fe.a.dateTimeBox},r.a.createElement("div",{className:fe.a.clock,onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},_),d&&r.a.createElement("div",{className:fe.a.date},p)),r.a.createElement(U,{onClick:function(){v();var e=new Date;u(e);var a=window.setInterval((function(){var e=new Date;u(e)}),1e3);l(a),console.log(e)}},"start"),r.a.createElement(U,{onClick:v},"stop"))};var he=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"Homework 9",r.a.createElement(ge,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},be=function(e){return console.log("loadingAC. payload:",e),{type:"SET_LOADING",payload:e}},Ce=function(){return r.a.createElement("svg",{width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:"#e15b64",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})))};var ke=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",null,r.a.createElement(Ce,null)):r.a.createElement("div",null,r.a.createElement(U,{onClick:function(){e(be(!0)),setTimeout((function(){return e(be(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ne=t(43),Oe=t.n(Ne),xe=function(e){e.type;var a=e.onChange,t=e.onChangeRange,n=e.value,l=e.className,c=Object(F.a)(e,["type","onChange","onChangeRange","value","className"]),o="".concat(Oe.a.range," ").concat(l||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){a&&a(e),t&&t(+e.currentTarget.value)},className:o,value:n},c)))},ye=t(70),je=t(44),Se=t.n(je),we=function(e){var a=e.onChangeRange,t=e.value,n=e.min,l=e.max,c=e.step,o=void 0===c?1:c,i=e.disable,u=void 0!==i&&i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{className:Se.a.slider,value:t,onChange:function(e,t){console.log("onchangeCallback: ",t),a&&a(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:n,max:l,step:o,disabled:u}))},He=t(28),Ae=t.n(He);var Te=function(){var e=Object(n.useState)(20),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(80),o=Object(b.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",{className:Ae.a.rangeContainer},r.a.createElement("div",{className:Ae.a.rangeValue},t),r.a.createElement(xe,{onChange:function(e){l(e.currentTarget.value)},value:t})),r.a.createElement("div",{className:Ae.a.doubleRangeContainer},r.a.createElement(we,{value:[+t,+i],onChangeRange:function(e){l(e[0]),u(e[1])},min:0,max:100}),r.a.createElement("div",null,t),r.a.createElement("div",null,i)),r.a.createElement("hr",null),r.a.createElement("hr",null))},We=t(35),Be=t.n(We),Me="dark",Ie=["dark","red","some","blue","pink"];var Fe=function(){var e=Object(o.c)((function(e){return e.theme})),a=Object(o.b)();return r.a.createElement("div",{className:Be.a[e]},r.a.createElement("hr",null),r.a.createElement("div",{className:Be.a[e+"-text"]},"homework 12"),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio2",options:Ie,value:e,onChangeOption:function(e){a({type:"CHANGE_THEME",payload:e})}})),r.a.createElement("hr",null))};var De=function(){return r.a.createElement("div",{className:V.a.page},r.a.createElement(se,null),r.a.createElement(_e,null),r.a.createElement(he,null),r.a.createElement(ke,null),r.a.createElement(Te,null),r.a.createElement(Fe,null))},Re="/pre-junior",Ge="/junior",Le="/junior-plus";var Pe=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:Ge})}}),r.a.createElement(m.b,{path:Re,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(m.b,{path:Ge,render:function(){return r.a.createElement(De,null)}}),r.a.createElement(m.b,{path:Le,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(le,null)}})))},Je=t(16),ze=t(13),Ue=t.n(ze),Ke=function(){var e=Object(n.useState)(!0),a=Object(b.a)(e,2),t=a[0],l=a[1],c=r.a.createElement(r.a.Fragment,null);return t||(c=r.a.createElement("nav",{className:Ue.a.nav},r.a.createElement("div",{className:Ue.a.item},r.a.createElement(Je.b,{to:Re,activeClassName:Ue.a.activeLink},"PreJunior")),r.a.createElement("div",{className:"".concat(Ue.a.item," ").concat(Ue.a.active)},r.a.createElement(Je.b,{to:Ge,activeClassName:Ue.a.activeLink},"Junior")),r.a.createElement("div",{className:Ue.a.item},r.a.createElement(Je.b,{to:Le,activeClassName:Ue.a.activeLink},"JuniorPlus")))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){l(!t)}}," >>")),c)},Ze=t(45),Ye=t.n(Ze);var Qe=function(){return r.a.createElement("div",{className:Ye.a.HW5},r.a.createElement(Je.a,null,r.a.createElement(s,null),r.a.createElement(Ke,null),r.a.createElement(Pe,null)))};var qe=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",{className:u.a.Header},"react homeworks"),r.a.createElement(Qe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ve=t(18),Xe=Object(Ve.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(console.log("in reducer. action:",a),a.type){case"SET_LOADING":return a.payload;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_THEME":return a.payload;default:return e}}}),$e=Object(Ve.c)(Xe),ea=$e;window.store=$e,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:ea},r.a.createElement(qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.db3fb0ba.chunk.js.map