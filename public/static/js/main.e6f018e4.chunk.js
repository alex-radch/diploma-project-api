(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=a(29),i=a(111),s=a(13),u=a(31),m=a(15),d=a(30),h=a(55);var p=a(19),f=a(20),g=a(22),E=a(21),v=a(23),b=a(113),w=a(106),y=a(114),k=a(107);var O=function(){return r.a.createElement("header",null,r.a.createElement(b.a,{expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(w.a,null,r.a.createElement(k.a,{className:"navbar-brand",to:"/"},r.a.createElement("span",{className:"brand medium"},"6061")),r.a.createElement(y.a,{className:"mr-xl-auto"},r.a.createElement(k.a,{className:"nav-link",to:"/"},"Home"),r.a.createElement(k.a,{className:"nav-link",to:"/products"},"Products"),r.a.createElement(k.a,{className:"nav-link",to:"/contacts"},"Contact")))))},j=a(117),x=a(63),C=a(116),N=a(110),S=a(108),H=a(61);var T=function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",null,"WELCOME!"),r.a.createElement(S.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("p",null,"Established in 2016, 6061 Forged Rims has been at the forefront of wheel customization. Beginning as a wheel specific workshop, and then transitioning into a online shop offering refinishing and resizing services, we are now dedicated to offering the highest quality aftermarket wheel parts at a wholesale and retail level. We have extensive knowledge of all things related to a multi-piece wheel down to the aesthetics and technical aspects. Based in Rostov-on-Don, we have built direct relationships with today's leading manufacturers and decorative finishers. This allows us to provide our customers with the highest quality products and service."))),r.a.createElement(S.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:"img/bg_main.jpg",className:"img-fluid",alt:"Home"})))))},W=a(115);var M=function(e){var t=e.item;return r.a.createElement(W.a,{style:{width:"18rem",marginBottom:"2rem"}},r.a.createElement(W.a.Img,{variant:"top",src:t.src}),r.a.createElement(W.a.Body,null,r.a.createElement(W.a.Title,null,t.title),r.a.createElement(W.a.Text,null,"Price ",t.cost,"$")))};var R=function(e){return r.a.createElement(S.a,null,e.items&&e.items.length>0?e.items.map(function(e){return r.a.createElement(H.a,{className:"centered",key:e.id.toString()},r.a.createElement(M,{item:e}))}):r.a.createElement("p",{style:{margin:"0 auto"}},"Loading"))},L=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(R,{items:this.props.items})}}]),t}(n.Component),A=Object(c.b)(function(e){return{items:e.products}})(L),B=a(62),F=a(112),P=a(109),U=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",message:"",showMessage:!1},a.submitHandler=function(e){e.preventDefault(),a.setState({message:"",showMessage:!0},function(){setTimeout(function(){a.state.showMessage&&a.closeHandler()},3e3)})},a.changeHandler=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(B.a)({},r,n))},a.closeHandler=function(e){a.setState({showMessage:!1})},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.showMessage&&r.a.createElement("div",{className:"alert alert-success",role:"alert"},"Message has been successfuly sent!",r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.closeHandler},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement(F.a,{onSubmit:this.submitHandler},r.a.createElement(F.a.Group,{controlId:"name"},r.a.createElement(F.a.Label,null,"Name"),r.a.createElement(F.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.changeHandler})),r.a.createElement(F.a.Group,{controlId:"email"},r.a.createElement(F.a.Label,null,"Email"),r.a.createElement(F.a.Control,{type:"email",name:"email",value:this.state.email,placeholder:"example@example.com",onChange:this.changeHandler,required:!0})),r.a.createElement(F.a.Group,{controlId:"message"},r.a.createElement(F.a.Label,null,"Message"),r.a.createElement(F.a.Control,{as:"textarea",name:"message",value:this.state.message,onChange:this.changeHandler,required:!0})),r.a.createElement(P.a,{disabled:this.state.showMessage,variant:"primary",type:"submit"},"Send")))}}]),t}(n.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Looking to up your wheel game?"),r.a.createElement("p",null,"We'd love to work with you!"),r.a.createElement("p",null,"Give us a detailed message explaining the kind of rims you'd like to get."),r.a.createElement("p",null,"Or feel free to email us ",r.a.createElement("a",{href:"mailto: support@6061.com"},"support@6061.com")))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(H.a,{xs:12},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("hr",null))),r.a.createElement(S.a,null,r.a.createElement(H.a,{xs:12,lg:5},r.a.createElement(D,null)),r.a.createElement(H.a,{xs:12,lg:7},r.a.createElement(U,null))))};var q=Object(N.a)(function(){return r.a.createElement("main",null,r.a.createElement(w.a,null,r.a.createElement(j.a,null,r.a.createElement(x.a,{exact:!0,path:"/",component:T}),r.a.createElement(x.a,{path:"/products",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(x.a,{path:"/contacts",component:I}),r.a.createElement(C.a,{from:"*",to:"/"}))))});var G=function(){return r.a.createElement("footer",{className:"page-footer font-small blue"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("span",null,"6061 Forged Rims \xa9 ",(new Date).getFullYear())))},_=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(O,null),r.a.createElement(q,null),r.a.createElement(G,null))}}]),t}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var $=a(65),Y=a.n($),K=(a(102),[]),Q=Object(m.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCTS_SET":return Object(u.a)(t.payload);default:return e}},router:d.b}),V="pushState"in window.history,X=Object(s.a)({basename:"/",forceRefresh:!V}),Z=function(e,t){var a=[Object(d.a)(e),h.a];return Object(m.d)(t,{},m.a.apply(void 0,Object(u.a)(a)))}(X,Q);Z.dispatch(function(e){return Y.a.get("/api/products").then(function(t){e({type:"PRODUCTS_SET",payload:t.data})}).catch(function(e){console.log(e)})}),o.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(i.a,{history:X},r.a.createElement(_,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");z?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):J(t,e)})}}()},66:function(e,t,a){e.exports=a(103)}},[[66,1,2]]]);
//# sourceMappingURL=main.e6f018e4.chunk.js.map