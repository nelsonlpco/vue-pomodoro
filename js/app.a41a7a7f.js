(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-pomodoro/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20b7":function(t,e,n){"use strict";n("882a")},"254e":function(t,e,n){"use strict";n("7e9a")},"3fc4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("99af"),n("a9e3"),n("a925")),s={"pt-BR":{work:"Trabalho",interval:"Intervalo",pomodoro:"Pomodoro",configurations:"Configurações",workTime:"Tempo de trabalho",intervalTime:"Tempo de Intervalo",timeTo:"Tempo de "},"en-US":{work:"Work",interval:"Interval",pomodoro:"Pomodoro",configurations:"Configurations",workTime:"Work Time",intervalTime:"Interval Time",timeTo:"Time to "}};i["a"].use(a["a"]);var c=navigator.language||navigator.userLanguage;console.log(c);var l=new a["a"]({locale:c in s?c:"pt-BR",messages:s});function u(t){try{return l.messages[l.locale][t]}catch(e){return""}}var f=l,p=(n("7db0"),n("96cf"),n("1da1")),m={granted:"granted",denied:"denied"};function d(){return"Notification"in window||(console.warn("O Browser não possui suporte a notificações"),!1)}function h(){return g.apply(this,arguments)}function g(){return g=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(d()){t.next=2;break}return t.abrupt("return");case 2:if(!(Notification.permission in m)){t.next=4;break}return t.abrupt("return");case 4:Notification.requestPermission();case 5:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return y=Object(p["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(d()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Notification.requestPermission();case 4:try{new Notification(e)}catch(n){console.error("error",n)}case 5:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}var C={requestPermission:h,notify:v},k={isValid:function(t){return t.state.isStarted&&t.state.isWorking&&!t.state.isInterval},process:function(t){t.state.isWorking=!1,t.state.isInterval=!0,t.state.currentTime=t.state.intervalTime,t.state.legend=u("interval"),C.notify("".concat(u("timeTo")," ").concat(u("interval")))}},b={isValid:function(t){return t.state.isStarted&&!t.state.isWorking&&!t.state.isInterval},process:function(t){t.state.isWorking=!0,t.state.currentTime=t.state.workTime,t.state.legend=u("work"),C.notify("".concat(u("timeTo")," ").concat(u("work")))}},w={isValid:function(t){return t.state.isStarted&&t.state.isLoop&&!t.state.isWorking&&t.state.isInterval},process:function(t){t.state.isInterval=!1,b.process(t)}},S={isValid:function(t){return t.state.isStarted&&!t.state.isWorking&&t.state.isInterval&&!t.state.currentTime&&!t.state.isLoop},process:function(t){t.stop()}},T=[w,b,k,S];function _(t){var e=T.find((function(e){return e.isValid(t)}));e&&e.process(t)}var x={getStrategy:_},$={charge:"charge",recharge:"recharge"},B=null,I={state:{workTime:10,intervalTime:5,currentTime:0,isWorking:!1,isInterval:!1,isLoop:!0,isStarted:!1,animation:{animation:""},legend:u("work"),playConfig:{middleOfContainer:0,configAnimation:{transform:void 0,opacity:1,transition:void 0},playAnimation:{transform:void 0,transition:void 0}}},processPomodoro:function(){this.state.currentTime-=1,this.state.currentTime||x.getStrategy(this)},setWorkTime:function(t){this.state.workTime=t},setIntervalTime:function(t){this.state.intervalTime=t},setPlayConfigMiddleOfContainer:function(t){this.state.playConfig.middleOfContainer=t},setDisplayAnimation:function(){this.state.animation={animation:"".concat(this.state.isWorking?$.charge:$.recharge," ").concat(this.state.time,"s linear forwards")}},playConfigAnimation:function(){this.state.playConfig.configAnimation={transform:"translateX(".concat((this.state.isStarted?1:0)*this.state.playConfig.middleOfContainer,"px)"),opacity:this.state.isStarted?0:1,transition:"transform 0.500s, opacity 0.500s"},this.state.playConfig.playAnimation={transform:"translateX(".concat((this.state.isStarted?-1:0)*this.state.playConfig.middleOfContainer,"px)"),transition:"transform 0.500s"}},start:function(){var t=this;this.state.isStarted=!0,this.state.isWorking=!0,this.state.isInterval=!1,this.state.currentTime=this.state.workTime,this.state.legend=u("work"),this.setDisplayAnimation(),this.playConfigAnimation(),B=setInterval((function(){return t.processPomodoro()}),1e3)},stop:function(){this.state.currentTime=0,this.state.isWorking=!1,this.state.isInterval=!1,this.state.isStarted=!1,clearInterval(B),this.state.animation={animation:""},this.playConfigAnimation()},startStop:function(){this.state.isStarted?this.stop():this.start()},saveConfig:function(){localStorage.setItem("workTime",this.state.workTime),localStorage.setItem("intervalTime",this.state.intervalTime)},loadConfig:function(){var t=localStorage.getItem("workTime"),e=localStorage.getItem("intervalTime");this.state.workTime=t?Number(t):60,this.state.intervalTime=e?Number(e):30}},O={colors:{primary:"#DB5435",primaryDark:"#9C3C25",textColor:"#FFFBFA",primaryBackground:"#2E2E2E"},fontSize:{title:"34px",subtitle:"24px",text:"18px",timerText:"60px"}};I.loadConfig();var j={name:"App",provide:function(){return{store:this.store,theme:O}},data:function(){return{store:I}}},P=j,N=(n("5c0b"),n("2877")),E=Object(N["a"])(P,o,r,!1,null,null,null),M=E.exports,W=n("9483");Object(W["a"])("".concat("/vue-pomodoro/","service-worker.js"),{ready:function(){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB");case 1:case"end":return t.stop()}}),t)})))()},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var A=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Clock"),n("Container",{attrs:{margin:"26px 0 0 0"}},[n("PlayConfig",{on:{click:t.onClick}})],1)],1)},D=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("DisplayCircleTimer",{attrs:{animationStyle:t.store.state.animation}},[n("TimeDisplay",{attrs:{isStarted:t.store.state.isStarted,legend:t.store.state.legend,seconds:t.store.state.currentTime}})],1)],1)},L=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Title",{staticClass:"title--absolute",class:{upTitle:t.isStarted,downTitle:!t.isStarted}},[t._v(" Pomodoro ")]),n("Container",{class:{upDisplay:t.isStarted,downDisplay:!t.isStarted}},[n("Time",{attrs:{minutes:t.onlyMinutes,seconds:t.onlySeconds}}),n("Subtitle",[t._v(t._s(t.legend))])],1)],1)},F=[],V=(n("d3b7"),n("25f0"),n("4d90"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style},[t._t("default")],2)}),q=[],U={name:"Container",props:{direction:{type:String,default:"column"},justifyContent:{type:String,default:"center"},alignItems:{type:String,default:"center"},flex:{type:Number,default:1},margin:{type:String,default:"0 0 0 0"},width:{type:String,required:!1}},data:function(){return{style:{display:"flex",justifyContent:this.$props.justifyContent,alignItems:this.$props.alignItems,flex:this.$props.flex,flexDirection:this.$props.direction,margin:this.$props.margin,width:this.$props.width}}}},G=U,J=Object(N["a"])(G,V,q,!1,null,null,null),K=J.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"subtitle"},[t._t("default")],2)},Y=[],Q={},Z=Object(N["a"])(Q,X,Y,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title",style:t.style},[t._t("default")],2)},nt=[],it={name:"Title",props:{margin:{type:String}},data:function(){return{style:{margin:this.$props.margin}}}},ot=it,rt=Object(N["a"])(ot,et,nt,!1,null,null,null),at=rt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"timer-text"},[t._v(" "+t._s(t.minutes)+":"+t._s(t.seconds)+" ")])},ct=[],lt={name:"Time",props:{minutes:{type:String,default:"00"},seconds:{type:String,default:"00"}}},ut=lt,ft=Object(N["a"])(ut,st,ct,!1,null,null,null),pt=ft.exports,mt={name:"TimeDisplay",components:{Container:K,Subtitle:tt,Title:at,Time:pt},props:{seconds:{type:Number,default:0},isStarted:{type:Boolean,default:!1},legend:{type:String,default:""}},computed:{onlyMinutes:function(){var t=Math.floor(this.$props.seconds/60);return this.getPaddedTime(t)},onlySeconds:function(){var t=Math.floor(this.$props.seconds%60);return this.getPaddedTime(t)}},methods:{getPaddedTime:function(t){return t.toString().padStart(2,"0")}}},dt=mt,ht=(n("254e"),Object(N["a"])(dt,R,F,!1,null,"5bf2849d",null)),gt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer"},[n("div",{staticClass:"timer-container"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMid",width:t.size,height:t.size}},[n("defs",[n("filter",{attrs:{id:"f1",x:"0",y:"0"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"3"}})],1)]),n("circle",{attrs:{cx:t.cx,cy:t.cy,r:t.r,stroke:t.bgColor,"stroke-linecap":"round","stroke-width":"10",fill:"none"}}),n("circle",{style:t.animationStyle,attrs:{filter:"url(#f1)",cx:t.cx,cy:t.cy,r:t.r,stroke:"#da755e","stroke-linecap":"round","stroke-width":"10",fill:"none","stroke-dasharray":"754","stroke-dashoffset":"754"}}),n("circle",{style:t.animationStyle,attrs:{cx:t.cx,cy:t.cy,r:t.r,stroke:t.actionColor,"stroke-linecap":"round","stroke-width":"10",fill:"none","stroke-dasharray":"754","stroke-dashoffset":"754"}})])]),n("div",{staticClass:"timer-display"},[t._t("default")],2)])},yt=[],Ct={name:"DisplayCircleTimer",props:{bgColor:{type:String,default:O.colors.primaryDark},actionColor:{type:String,default:O.colors.primary},size:{type:Number,default:260},animationStyle:{type:Object,default:function(){return{animation:""}}}},computed:{cx:function(){return this.$props.size/2},cy:function(){return this.$props.size/2},r:function(){return this.$props.size/2-10}}},kt=Ct,bt=(n("ccbd"),Object(N["a"])(kt,vt,yt,!1,null,"e4d9c030",null)),wt=bt.exports,St={name:"Clock",components:{TimeDisplay:gt,DisplayCircleTimer:wt,Container:K},inject:["store"]},Tt=St,_t=Object(N["a"])(Tt,z,L,!1,null,null,null),xt=_t.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{ref:"container",attrs:{width:"100%",direction:"row"}},[n("Container",{attrs:{margin:"0 79px 0 0"}},[n("ButtonConfig",{style:t.store.state.playConfig.configAnimation,on:{click:t.configHandler}})],1),n("ButtonStartStop",{style:t.store.state.playConfig.playAnimation,attrs:{isStarted:t.store.state.isStarted},on:{click:t.startStopHandler}})],1)},Bt=[],It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconConfig")],1)},Ot=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconConfig",viewPortHeight:318,viewPortWidth:318}},[n("path",{attrs:{d:"M129.185 42.302V3.032A3.033 3.033 0 01132.217 0h52.644a3.034 3.034\n    0 013.032 3.032v39.27a120.138 120.138 0 0133.278 13.71l28.479-28.32a3.034\n    3.034 0 014.289.013l37.119 37.33a3.034 3.034 0 01-.012 4.288L262.318\n    97.89c7.476 13.106 12.338 27.783 13.909 43.38l38.476 6.813a3.034 3.034\n    0 012.457 3.515l-9.18 51.837a3.034 3.034 0 01-3.515 2.457l-38.187-6.763c-6.02\n    12.742-14.421 24.23-24.655 33.94l20.175 33.214a3.033 3.033 0 01-1.018\n    4.166l-44.993 27.33a3.034 3.034 0 01-4.166-1.017l-21.298-35.063c-10.115\n    2.71-20.775 4.157-31.784 4.157-8.145 0-16.098-.793-23.774-2.3l-20.463\n    33.69a3.034 3.034 0 01-4.166 1.016l-44.994-27.33a3.034 3.034 0\n    01-1.017-4.166l17.27-28.43c-13.258-10.975-23.956-24.727-31.109-40.31l-34.057\n    8.308a3.032 3.032 0 01-3.664-2.227L.087 152.962a3.032 3.032 0\n    012.227-3.664l38.688-9.439c1.62-14.222 5.979-27.658 12.556-39.809L24.827\n    73.663a3.035 3.035 0 01-.182-4.285l35.61-38.772a3.034 3.034 0 014.285-.182l29.266\n    26.88a120.172 120.172 0 0135.379-15.002zm31.634 53.73c31.646 0 57.338 25.691 57.338\n    57.337 0 31.645-25.692 57.337-57.338 57.337-31.645 0-57.337-25.692-57.337-57.337\n    0-31.646 25.692-57.338 57.337-57.338z"}})])},Pt=[],Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.viewPortWidth+" "+t.viewPortHeight,preserveAspectRatio:"none","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:t.width,height:t.height,"aria-labelledby":t.iconName}},[n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},Et=[],Mt={props:{viewPortWidth:{type:Number,default:200},viewPortHeight:{type:Number,default:250},iconName:{type:String,default:"box"},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},iconColor:{type:String,default:O.colors.primaryBackground}}},Wt=Mt,At=Object(N["a"])(Wt,Nt,Et,!1,null,null,null),Ht=At.exports,Dt={name:"IconConfig",components:{IconBase:Ht}},zt=Dt,Lt=Object(N["a"])(zt,jt,Pt,!1,null,null,null),Rt=Lt.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",on:{click:function(e){return t.onClick()}}},[n("div",{style:{width:t.width,height:t.height}},[t._t("default")],2)])},Vt=[],qt={name:"ButtonBase",props:{width:{type:[Number,String],default:"40px"},height:{type:[Number,String],default:"40px"}},methods:{onClick:function(){this.$emit("click")}}},Ut=qt,Gt=(n("ba75"),Object(N["a"])(Ut,Ft,Vt,!1,null,"e68ca320",null)),Jt=Gt.exports,Kt={name:"ButtonConfig",components:{ButtonBase:Jt,IconConfig:Rt},methods:{onClick:function(){this.$emit("click")}}},Xt=Kt,Yt=Object(N["a"])(Xt,It,Ot,!1,null,null,null),Qt=Yt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene"},[n("div",{staticClass:"card",class:{"is-flipped":t.isStarted}},[n("div",{staticClass:"card__face card__face--front"},[n("ButtonPlay",{on:{click:t.onClick}})],1),n("div",{staticClass:"card__face card__face--back"},[n("ButtonStop",{on:{click:t.onClick}})],1)])])},te=[],ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconPlay",{attrs:{width:"33"}})],1)},ne=[],ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconPlay"}},[n("path",{attrs:{d:"M197.78 128.628a2.97 2.97 0 001.388-2.535 2.97 2.97 0 00-1.389-2.535C171.996\n    107.458 31.852 19.897 4.601 2.874a3.05 3.05 0 00-3.054-.086A3.064 3.064 0 000\n    5.438v241.31c0 1.095.595 2.103 1.547 2.621.952.548 2.102.519 3.054-.057\n    27.251-17.023 167.395-104.584 193.178-120.684z"}})])},oe=[],re={name:"IconPlay",components:{IconBase:Ht}},ae=re,se=Object(N["a"])(ae,ie,oe,!1,null,null,null),ce=se.exports,le={name:"ButtonPlay",components:{ButtonBase:Jt,IconPlay:ce},methods:{onClick:function(){this.$emit("click")}}},ue=le,fe=Object(N["a"])(ue,ee,ne,!1,null,null,null),pe=fe.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconStop")],1)},de=[],he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconStop",width:35,height:35,viewPortHeight:254,viewPortWidth:254}},[n("path",{attrs:{d:"M252.918 8.59a8.093 8.093 0 00-8.09-8.09H8.59A8.093 8.093 0 00.5\n          8.59v236.238a8.094 8.094 0\n          008.09 8.09h236.237a8.094 8.094 0 008.09-8.09V8.589z",stroke:"#000","stroke-width":"1.000701"}})])},ge=[],ve={name:"IconStop",components:{IconBase:Ht}},ye=ve,Ce=Object(N["a"])(ye,he,ge,!1,null,null,null),ke=Ce.exports,be={name:"ButtonConfig",components:{ButtonBase:Jt,IconStop:ke},methods:{onClick:function(){this.$emit("click")}}},we=be,Se=Object(N["a"])(we,me,de,!1,null,null,null),Te=Se.exports,_e={name:"ButtonStartStop",components:{ButtonPlay:pe,ButtonStop:Te},props:{isStarted:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}},xe=_e,$e=(n("20b7"),Object(N["a"])(xe,Zt,te,!1,null,"52b23274",null)),Be=$e.exports,Ie={name:"PlayConfig.vue",components:{Container:K,ButtonConfig:Qt,ButtonStartStop:Be},inject:["store"],methods:{getWindowWidth:function(){var t=this.$refs.container.$el.scrollWidth/2-40;this.store.setPlayConfigMiddleOfContainer(t)},startStopHandler:function(){this.$emit("click")},configHandler:function(){this.$router.push("Configurations")}},mounted:function(){this.getWindowWidth()}},Oe=Ie,je=Object(N["a"])(Oe,$t,Bt,!1,null,null,null),Pe=je.exports,Ne={name:"Pomodoro",components:{Container:K,Clock:xt,PlayConfig:Pe},inject:["store"],computed:{isStarted:function(){return this.store.state.isStarted}},methods:{onClick:function(){this.store.startStop()}}},Ee=Ne,Me=Object(N["a"])(Ee,H,D,!1,null,null,null),We=Me.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Container",{attrs:{margin:"0 0 78px 0",width:"100%"}},[n("Title",[t._v(t._s(t.$t("configurations")))])],1),n("Container",{attrs:{margin:"0 0 58px 0"}},[n("Subtitle",[t._v(t._s(t.$t("workTime")))]),n("TimeInput",{attrs:{minutes:t.minutes,seconds:t.seconds},on:{keyup:t.changeWorkTime}})],1),n("Container",{attrs:{margin:"0 0 58px 0"}},[n("Subtitle",[t._v(t._s(t.$t("intervalTime")))]),n("TimeInput",{attrs:{minutes:t.intervalMinutes,seconds:t.intervalSeconds},on:{keyup:t.changeIntervalTime}})],1),n("Container",{attrs:{direction:"row"}},[n("Container",{attrs:{margin:"0 79px 0 0"}},[n("ButtonCancel",{on:{click:t.cancelHandler}})],1),n("ButtonConfirm",{on:{click:t.confirmHandler}})],1)],1)},He=[],De=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClickHandler}},[n("IconCancel")],1)},ze=[],Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"IconCancel",viewPortHeight:254,viewPortWidth:285}},[n("path",{attrs:{d:"M141.177 90.523L243.909 1.596c2.73-2.365 6.87-2.067 9.24.666l27.61\n    31.896c2.36 2.733 2.07 6.872-.67 9.238l-96.68 83.686 96.68 83.686c2.74\n    2.365 3.03 6.505.67 9.238l-27.61 31.896c-2.37 2.732-6.51\n    3.031-9.24.665l-102.732-88.926-102.733 88.926a6.553 6.553\n    0 01-9.238-.665L1.597 220.006a6.552 6.552 0 01.665-9.238l96.68-83.686-96.68-83.686a6.552\n    6.552 0 01-.665-9.238L29.206 2.262a6.553 6.553 0 019.238-.666l102.733 88.927z"}})])},Re=[],Fe={name:"IconCancel",components:{IconBase:Ht}},Ve=Fe,qe=Object(N["a"])(Ve,Le,Re,!1,null,null,null),Ue=qe.exports,Ge={name:"ButtonCancel",components:{ButtonBase:Jt,IconCancel:Ue},methods:{onClickHandler:function(){this.$emit("click")}}},Je=Ge,Ke=Object(N["a"])(Je,De,ze,!1,null,null,null),Xe=Ke.exports,Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ButtonBase",{on:{click:t.onClick}},[n("IconConfirm")],1)},Qe=[],Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("IconBase",{attrs:{iconName:"Ok",viewPortHeight:230,viewPortWidth:313}},[n("path",{attrs:{d:"M109.885 155.95L263.918 1.917a6.552 6.552 0 019.262 0l29.83 29.83a6.553\n    6.553 0 010 9.261L114.962 229.056a6.517 6.517 0 01-4.024 1.888 6.534 6.534\n    0 01-5.3-1.825L1.969 127.744a6.551 6.551 0 01-.104-9.26l29.494-30.162a6.551\n    6.551 0 019.261-.104l69.265 67.732z"}})])},tn=[],en={name:"Ok",components:{IconBase:Ht}},nn=en,on=Object(N["a"])(nn,Ze,tn,!1,null,null,null),rn=on.exports,an={name:"ButtonConfirm",components:{ButtonBase:Jt,IconConfirm:rn},methods:{onClick:function(){this.$emit("click")}}},sn=an,cn=Object(N["a"])(sn,Ye,Qe,!1,null,null,null),ln=cn.exports,un=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{attrs:{direction:"row"}},[n("NumberInput",{attrs:{value:t.dataMinutes},on:{change:t.onChangeMinutes}}),n("span",{staticClass:"timer-text"},[t._v(":")]),n("NumberInput",{attrs:{value:t.dataSeconds},on:{change:t.onChangeSeconds}})],1)},fn=[],pn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"time-input",attrs:{type:"text",placeholder:"00",maxlength:"2"},domProps:{value:t.paddedNumber},on:{focus:t.onFocus,keyup:t.onKeyUp}})},mn=[],dn={name:"NumberInput",props:{value:{type:Number,default:0}},computed:{paddedNumber:function(){return this.$props.value.toString().padStart(2,"0")}},methods:{onFocus:function(t){t.target.select()},onKeyUp:function(t){this.$emit("change",t.target.value)}}},hn=dn,gn=(n("d50c"),Object(N["a"])(hn,pn,mn,!1,null,"5e61818e",null)),vn=gn.exports,yn=null,Cn=null,kn={components:{Container:K,NumberInput:vn},props:{minutes:{type:Number,default:0},seconds:{type:Number,default:0}},data:function(){return{dataMinutes:0,dataSeconds:0}},methods:{onChangeMinutes:function(t){var e=this,n=60*Number(t)+Number(this.$props.seconds);yn&&clearTimeout(yn),yn=setTimeout((function(){e.$emit("keyup",n.toString())}),400)},onChangeSeconds:function(t){var e=this;this.$emit("keyup",Number(t)),Cn&&clearTimeout(Cn),Cn=setTimeout((function(){e.$emit("keyup",t.toString())}),400)}},mounted:function(){this.dataMinutes=this.$props.minutes,this.dataSeconds=this.$props.seconds}},bn=kn,wn=Object(N["a"])(bn,un,fn,!1,null,null,null),Sn=wn.exports,Tn={name:"Configurations",inject:["store"],components:{Container:K,Title:at,Subtitle:tt,ButtonCancel:Xe,ButtonConfirm:ln,TimeInput:Sn},computed:{minutes:function(){return Math.floor(this.store.state.workTime/60)},seconds:function(){return Math.floor(this.store.state.workTime%60)},intervalMinutes:function(){return Math.floor(this.store.state.intervalTime/60)},intervalSeconds:function(){return Math.floor(this.store.state.intervalTime%60)}},data:function(){return{inputedTime:0}},methods:{cancelHandler:function(){this.store.setWorkTime(this.inputedTime),this.$router.push("/")},confirmHandler:function(){this.store.saveConfig(),this.$router.push("/")},changeWorkTime:function(t){this.store.setWorkTime(Number(t))},changeIntervalTime:function(t){this.store.setIntervalTime(Number(t))}},mounted:function(){this.inputedTime=this.store.state.workTime}},_n=Tn,xn=Object(N["a"])(_n,Ae,He,!1,null,null,null),$n=xn.exports;i["a"].use(A["a"]);var Bn={pomodoro:"Pomodoro",configurations:"Configurations"},In=[{path:"/",name:Bn.pomodoro,component:We},{path:"/configurations",name:Bn.configurations,component:$n}],On=new A["a"]({mode:"history",base:"/vue-pomodoro/",routes:In}),jn=On;i["a"].config.productionTip=!1,new i["a"]({router:jn,i18n:f,render:function(t){return t(M)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7e9a":function(t,e,n){},"882a":function(t,e,n){},"9c0c":function(t,e,n){},ba75:function(t,e,n){"use strict";n("be12")},bc63:function(t,e,n){},be12:function(t,e,n){},ccbd:function(t,e,n){"use strict";n("3fc4")},d50c:function(t,e,n){"use strict";n("bc63")}});
//# sourceMappingURL=app.a41a7a7f.js.map