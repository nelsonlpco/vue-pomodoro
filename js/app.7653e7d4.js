(function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-pomodoro/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20b7":function(t,e,n){"use strict";n("882a")},"254e":function(t,e,n){"use strict";n("7e9a")},"3fc4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("99af"),10),s=5,l={charge:"charge",recharge:"recharge"},c=null,u={state:{time:0,currentTime:0,isWorking:!1,isStarted:!1,animation:{animation:""},legend:"Trabalho",playConfig:{middleOfContainer:0,configAnimation:{transform:void 0,opacity:1,transition:void 0},playAnimation:{transform:void 0,transition:void 0}}},setPlayConfigMiddleOfContainer:function(t){this.state.playConfig.middleOfContainer=t},playConfigAnimation:function(){this.state.playConfig.configAnimation={transform:"translateX(".concat((this.state.isStarted?1:0)*this.state.playConfig.middleOfContainer,"px)"),opacity:this.state.isStarted?0:1,transition:"transform 0.500s, opacity 0.500s"},this.state.playConfig.playAnimation={transform:"translateX(".concat((this.state.isStarted?-1:0)*this.state.playConfig.middleOfContainer,"px)"),transition:"transform 0.500s"}},setLegend:function(){this.state.legend=this.state.isWorking?"Trabalho":"Intervalo"},setTimer:function(){var t=this.state.isWorking?s:a;this.state.isWorking=!this.state.isWorking,this.state.currentTime=t,this.state.time=t},setDisplayAnimation:function(){this.state.animation={animation:"".concat(this.state.isWorking?l.charge:l.recharge," ").concat(this.state.time,"s linear forwards")}},updateState:function(){this.setTimer(),this.setLegend(),this.setDisplayAnimation(),this.playConfigAnimation()},start:function(){var t=this;this.state.isStarted=!0,this.updateState(),c=setInterval((function(){t.state.currentTime?t.state.currentTime-=1:(t.updateState(),t.state.isStarted||clearInterval(c))}),1e3)},stop:function(){clearInterval(c),this.state.animation={animation:""},this.state.currentTime=0,this.state.isWorking=!1,this.state.isStarted=!1,this.playConfigAnimation()},startStop:function(){this.state.isStarted?this.stop():this.start()}},f={colors:{primary:"#DB5435",primaryDark:"#9C3C25",textColor:"#FFFBFA",primaryBackground:"#2E2E2E"},fontSize:{title:"34px",subtitle:"24px",text:"18px",timerText:"60px"}},p={name:"App",provide:function(){return{store:this.store,theme:f}},data:function(){return{store:u}}},d=p,m=(n("5c0b"),n("2877")),h=Object(m["a"])(d,o,r,!1,null,null,null),g=h.exports,y=n("9483");Object(y["a"])("".concat("/vue-pomodoro/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Clock"),n("Container",{attrs:{margin:"26px 0 0 0"}},[n("PlayConfig",{on:{click:t.onClick}})],1)],1)},b=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("DisplayCircleTimer",{attrs:{animationStyle:t.store.state.animation}},[n("TimeDisplay",{attrs:{isStarted:t.store.state.isStarted,legend:t.store.state.legend,seconds:t.store.state.currentTime}})],1)],1)},S=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Title",{staticClass:"title--absolute",class:{upTitle:t.isStarted,downTitle:!t.isStarted}},[t._v(" Pomodoro ")]),n("Container",{class:{upDisplay:t.isStarted,downDisplay:!t.isStarted}},[n("Time",{attrs:{minutes:t.onlyMinutes,seconds:t.onlySeconds}}),n("Subtitle",[t._v(t._s(t.legend))])],1)],1)},w=[],x=(n("a9e3"),n("d3b7"),n("25f0"),n("4d90"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style},[t._t("default")],2)}),B=[],$={name:"Container",props:{direction:{type:String,default:"column"},justifyContent:{type:String,default:"center"},alignItems:{type:String,default:"center"},flex:{type:Number,default:1},margin:{type:String,default:"0 0 0 0"},width:{type:String,required:!1}},data:function(){return{style:{display:"flex",justifyContent:this.$props.justifyContent,alignItems:this.$props.alignItems,flex:this.$props.flex,flexDirection:this.$props.direction,margin:this.$props.margin,width:this.$props.width}}}},O=$,j=Object(m["a"])(O,x,B,!1,null,null,null),T=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"subtitle"},[t._t("default")],2)},I=[],E={},A=Object(m["a"])(E,P,I,!1,null,null,null),N=A.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title",style:t.style},[t._t("default")],2)},M=[],D={name:"Title",props:{margin:{type:String}},data:function(){return{style:{margin:this.$props.margin}}}},H=D,z=Object(m["a"])(H,W,M,!1,null,null,null),L=z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"timer-text"},[t._v(" "+t._s(t.minutes)+":"+t._s(t.seconds)+" ")])},q=[],G={name:"Time",props:{minutes:{type:String,default:"00"},seconds:{type:String,default:"00"}}},J=G,R=Object(m["a"])(J,F,q,!1,null,null,null),V=R.exports,X={name:"TimeDisplay",components:{Container:T,Subtitle:N,Title:L,Time:V},props:{seconds:{type:Number,default:0},isStarted:{type:Boolean,default:!1},legend:{type:String,default:""}},computed:{onlyMinutes:function(){var t=Math.floor(this.$props.seconds/60);return this.getPaddedTime(t)},onlySeconds:function(){var t=Math.floor(this.$props.seconds%60);return this.getPaddedTime(t)}},methods:{getPaddedTime:function(t){return t.toString().padStart(2,"0")}}},Y=X,K=(n("254e"),Object(m["a"])(Y,k,w,!1,null,"5bf2849d",null)),Q=K.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer"},[n("div",{staticClass:"timer-container"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMid",width:t.size,height:t.size}},[n("defs",[n("filter",{attrs:{id:"f1",x:"0",y:"0"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"3"}})],1)]),n("circle",{attrs:{cx:t.cx,cy:t.cy,r:t.r,stroke:t.bgColor,"stroke-linecap":"round","stroke-width":"10",fill:"none"}}),n("circle",{style:t.animationStyle,attrs:{filter:"url(#f1)",cx:t.cx,cy:t.cy,r:t.r,stroke:"#da755e","stroke-linecap":"round","stroke-width":"10",fill:"none","stroke-dasharray":"754","stroke-dashoffset":"754"}}),n("circle",{style:t.animationStyle,attrs:{cx:t.cx,cy:t.cy,r:t.r,stroke:t.actionColor,"stroke-linecap":"round","stroke-width":"10",fill:"none","stroke-dasharray":"754","stroke-dashoffset":"754"}})])]),n("div",{staticClass:"timer-display"},[t._t("default")],2)])},Z=[],tt={name:"DisplayCircleTimer",props:{bgColor:{type:String,default:f.colors.primaryDark},actionColor:{type:String,default:f.colors.primary},size:{type:Number,default:260},animationStyle:{type:Object,default:function(){return{animation:""}}}},computed:{cx:function(){return this.$props.size/2},cy:function(){return this.$props.size/2},r:function(){return this.$props.size/2-10}}},et=tt,nt=(n("ccbd"),Object(m["a"])(et,U,Z,!1,null,"e4d9c030",null)),it=nt.exports,ot={name:"Clock",components:{TimeDisplay:Q,DisplayCircleTimer:it,Container:T},inject:["store"]},rt=ot,at=Object(m["a"])(rt,_,S,!1,null,null,null),st=at.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{ref:"container",attrs:{width:"100%",direction:"row"}},[n("Container",{attrs:{margin:"0 79px 0 0"}},[n("ButtonConfig",{style:t.store.state.playConfig.configAnimation,on:{click:t.configHandler}})],1),n("ButtonStartStop",{style:t.store.state.playConfig.playAnimation,attrs:{isStarted:t.store.state.isStarted},on:{click:t.startStopHandler}})],1)},ct=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconConfig")],1)},ft=[],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconConfig",viewPortHeight:318,viewPortWidth:318}},[n("path",{attrs:{d:"M129.185 42.302V3.032A3.033 3.033 0 01132.217 0h52.644a3.034 3.034\n    0 013.032 3.032v39.27a120.138 120.138 0 0133.278 13.71l28.479-28.32a3.034\n    3.034 0 014.289.013l37.119 37.33a3.034 3.034 0 01-.012 4.288L262.318\n    97.89c7.476 13.106 12.338 27.783 13.909 43.38l38.476 6.813a3.034 3.034\n    0 012.457 3.515l-9.18 51.837a3.034 3.034 0 01-3.515 2.457l-38.187-6.763c-6.02\n    12.742-14.421 24.23-24.655 33.94l20.175 33.214a3.033 3.033 0 01-1.018\n    4.166l-44.993 27.33a3.034 3.034 0 01-4.166-1.017l-21.298-35.063c-10.115\n    2.71-20.775 4.157-31.784 4.157-8.145 0-16.098-.793-23.774-2.3l-20.463\n    33.69a3.034 3.034 0 01-4.166 1.016l-44.994-27.33a3.034 3.034 0\n    01-1.017-4.166l17.27-28.43c-13.258-10.975-23.956-24.727-31.109-40.31l-34.057\n    8.308a3.032 3.032 0 01-3.664-2.227L.087 152.962a3.032 3.032 0\n    012.227-3.664l38.688-9.439c1.62-14.222 5.979-27.658 12.556-39.809L24.827\n    73.663a3.035 3.035 0 01-.182-4.285l35.61-38.772a3.034 3.034 0 014.285-.182l29.266\n    26.88a120.172 120.172 0 0135.379-15.002zm31.634 53.73c31.646 0 57.338 25.691 57.338\n    57.337 0 31.645-25.692 57.337-57.338 57.337-31.645 0-57.337-25.692-57.337-57.337\n    0-31.646 25.692-57.338 57.337-57.338z"}})])},dt=[],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.viewPortWidth+" "+t.viewPortHeight,preserveAspectRatio:"none","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:t.width,height:t.height,"aria-labelledby":t.iconName}},[n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},ht=[],gt={props:{viewPortWidth:{type:Number,default:200},viewPortHeight:{type:Number,default:250},iconName:{type:String,default:"box"},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},iconColor:{type:String,default:f.colors.primaryBackground}}},yt=gt,vt=Object(m["a"])(yt,mt,ht,!1,null,null,null),Ct=vt.exports,bt={name:"IconConfig",components:{IconBase:Ct}},_t=bt,St=Object(m["a"])(_t,pt,dt,!1,null,null,null),kt=St.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:function(e){return t.onClick()}}},[n("div",{style:{width:t.width,height:t.height}},[t._t("default")],2)])},xt=[],Bt={name:"ButtonBase",props:{width:{type:[Number,String],default:"40px"},height:{type:[Number,String],default:"40px"}},methods:{onClick:function(){this.$emit("click")}}},$t=Bt,Ot=(n("ba75"),Object(m["a"])($t,wt,xt,!1,null,"e68ca320",null)),jt=Ot.exports,Tt={name:"ButtonConfig",components:{ButtonBase:jt,IconConfig:kt},methods:{onClick:function(){this.$emit("click")}}},Pt=Tt,It=Object(m["a"])(Pt,ut,ft,!1,null,null,null),Et=It.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene"},[n("div",{staticClass:"card",class:{"is-flipped":t.isStarted}},[n("div",{staticClass:"card__face card__face--front"},[n("ButtonPlay",{on:{click:t.onClick}})],1),n("div",{staticClass:"card__face card__face--back"},[n("ButtonStop",{on:{click:t.onClick}})],1)])])},Nt=[],Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconPlay",{attrs:{width:"33"}})],1)},Mt=[],Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconPlay"}},[n("path",{attrs:{d:"M197.78 128.628a2.97 2.97 0 001.388-2.535 2.97 2.97 0 00-1.389-2.535C171.996\n    107.458 31.852 19.897 4.601 2.874a3.05 3.05 0 00-3.054-.086A3.064 3.064 0 000\n    5.438v241.31c0 1.095.595 2.103 1.547 2.621.952.548 2.102.519 3.054-.057\n    27.251-17.023 167.395-104.584 193.178-120.684z"}})])},Ht=[],zt={name:"IconPlay",components:{IconBase:Ct}},Lt=zt,Ft=Object(m["a"])(Lt,Dt,Ht,!1,null,null,null),qt=Ft.exports,Gt={name:"ButtonPlay",components:{ButtonBase:jt,IconPlay:qt},methods:{onClick:function(){this.$emit("click")}}},Jt=Gt,Rt=Object(m["a"])(Jt,Wt,Mt,!1,null,null,null),Vt=Rt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconStop")],1)},Yt=[],Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconStop",width:35,height:35,viewPortHeight:254,viewPortWidth:254}},[n("path",{attrs:{d:"M252.918 8.59a8.093 8.093 0 00-8.09-8.09H8.59A8.093 8.093 0 00.5\n          8.59v236.238a8.094 8.094 0\n          008.09 8.09h236.237a8.094 8.094 0 008.09-8.09V8.589z",stroke:"#000","stroke-width":"1.000701"}})])},Qt=[],Ut={name:"IconStop",components:{IconBase:Ct}},Zt=Ut,te=Object(m["a"])(Zt,Kt,Qt,!1,null,null,null),ee=te.exports,ne={name:"ButtonConfig",components:{ButtonBase:jt,IconStop:ee},methods:{onClick:function(){this.$emit("click")}}},ie=ne,oe=Object(m["a"])(ie,Xt,Yt,!1,null,null,null),re=oe.exports,ae={name:"ButtonStartStop",components:{ButtonPlay:Vt,ButtonStop:re},props:{isStarted:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}},se=ae,le=(n("20b7"),Object(m["a"])(se,At,Nt,!1,null,"52b23274",null)),ce=le.exports,ue={name:"PlayConfig.vue",components:{Container:T,ButtonConfig:Et,ButtonStartStop:ce},inject:["store"],methods:{getWindowWidth:function(){var t=this.$refs.container.$el.scrollWidth/2-40;console.log("aqui",t),this.store.setPlayConfigMiddleOfContainer(t)},startStopHandler:function(){this.$emit("click")},configHandler:function(){this.$router.push("Configurations")}},mounted:function(){this.getWindowWidth()}},fe=ue,pe=Object(m["a"])(fe,lt,ct,!1,null,null,null),de=pe.exports,me={name:"Pomodoro",components:{Container:T,Clock:st,PlayConfig:de},inject:["store"],computed:{isStarted:function(){return this.store.state.isStarted}},methods:{onClick:function(){this.store.startStop()}}},he=me,ge=Object(m["a"])(he,C,b,!1,null,null,null),ye=ge.exports,ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Container",{attrs:{margin:"0 0 78px 0",width:"100%"}},[n("Title",[t._v("Configurações")])],1),n("Container",{attrs:{margin:"0 0 58px 0"}},[n("Subtitle",[t._v("Tempo de trabalho")]),n("Time",[t._v("00:00")])],1),n("Container",{attrs:{margin:"0 0 58px 0"}},[n("Subtitle",[t._v("Tempo de descanso")]),n("Time",[t._v("00:00")])],1),n("Container",{attrs:{direction:"row"}},[n("Container",{attrs:{margin:"0 79px 0 0"}},[n("ButtonCancel",{on:{click:t.cancelHandler}})],1),n("ButtonConfirm")],1)],1)},Ce=[],be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClickHandler}},[n("IconCancel")],1)},_e=[],Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconCancel",viewPortHeight:254,viewPortWidth:285}},[n("path",{attrs:{d:"M141.177 90.523L243.909 1.596c2.73-2.365 6.87-2.067 9.24.666l27.61\n    31.896c2.36 2.733 2.07 6.872-.67 9.238l-96.68 83.686 96.68 83.686c2.74\n    2.365 3.03 6.505.67 9.238l-27.61 31.896c-2.37 2.732-6.51\n    3.031-9.24.665l-102.732-88.926-102.733 88.926a6.553 6.553\n    0 01-9.238-.665L1.597 220.006a6.552 6.552 0 01.665-9.238l96.68-83.686-96.68-83.686a6.552\n    6.552 0 01-.665-9.238L29.206 2.262a6.553 6.553 0 019.238-.666l102.733 88.927z"}})])},ke=[],we={name:"IconCancel",components:{IconBase:Ct}},xe=we,Be=Object(m["a"])(xe,Se,ke,!1,null,null,null),$e=Be.exports,Oe={name:"ButtonCancel",components:{ButtonBase:jt,IconCancel:$e},methods:{onClickHandler:function(){this.$emit("click")}}},je=Oe,Te=Object(m["a"])(je,be,_e,!1,null,null,null),Pe=Te.exports,Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",[n("IconConfirm")],1)},Ee=[],Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"Ok",viewPortHeight:230,viewPortWidth:313}},[n("path",{attrs:{d:"M109.885 155.95L263.918 1.917a6.552 6.552 0 019.262 0l29.83 29.83a6.553\n    6.553 0 010 9.261L114.962 229.056a6.517 6.517 0 01-4.024 1.888 6.534 6.534\n    0 01-5.3-1.825L1.969 127.744a6.551 6.551 0 01-.104-9.26l29.494-30.162a6.551\n    6.551 0 019.261-.104l69.265 67.732z"}})])},Ne=[],We={name:"Ok",components:{IconBase:Ct}},Me=We,De=Object(m["a"])(Me,Ae,Ne,!1,null,null,null),He=De.exports,ze={name:"ButtonConfirm",components:{ButtonBase:jt,IconConfirm:He}},Le=ze,Fe=Object(m["a"])(Le,Ie,Ee,!1,null,null,null),qe=Fe.exports,Ge={name:"Configurations",components:{Container:T,Title:L,Subtitle:N,Time:V,ButtonCancel:Pe,ButtonConfirm:qe},methods:{cancelHandler:function(){this.$router.push("/")}}},Je=Ge,Re=Object(m["a"])(Je,ve,Ce,!1,null,null,null),Ve=Re.exports;i["a"].use(v["a"]);var Xe={pomodoro:"Pomodoro",configurations:"Configurations"},Ye=[{path:"/",name:Xe.pomodoro,component:ye},{path:"/configurations",name:Xe.configurations,component:Ve}],Ke=new v["a"]({mode:"history",base:"/vue-pomodoro/",routes:Ye}),Qe=Ke;i["a"].config.productionTip=!1,new i["a"]({router:Qe,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7e9a":function(t,e,n){},"882a":function(t,e,n){},"9c0c":function(t,e,n){},ba75:function(t,e,n){"use strict";n("be12")},be12:function(t,e,n){},ccbd:function(t,e,n){"use strict";n("3fc4")}});
//# sourceMappingURL=app.7653e7d4.js.map