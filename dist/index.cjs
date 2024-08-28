"use strict";var u1=Object.defineProperty;var Re=Object.getOwnPropertyDescriptor;var Pe=Object.getOwnPropertyNames;var Ze=Object.prototype.hasOwnProperty;var Ve=(e,t)=>{for(var r in t)u1(e,r,{get:t[r],enumerable:!0})},Be=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pe(t))!Ze.call(e,n)&&n!==r&&u1(e,n,{get:()=>t[n],enumerable:!(o=Re(t,n))||o.enumerable});return e};var Oe=e=>Be(u1({},"__esModule",{value:!0}),e);var wt={};Ve(wt,{default:()=>$t,docsearch:()=>He});module.exports=Oe(wt);var L1=require("solid-js/web"),m1=require("solid-js"),Ke=require("solid-js/web");var Se=require("solid-js/web"),w1=require("solid-js/web"),d1=require("solid-js/web"),b1=require("solid-js");var r1=require("solid-js/web"),Z1=require("solid-js/web"),t1=require("solid-js/web"),F=require("solid-js/web"),f1=require("solid-js/web"),V1=require("solid-js/web"),B1=require("solid-js/web"),D=require("solid-js");var z1=require("solid-js/web"),I1=require("solid-js/web"),F1=require("solid-js/web"),Ne=(0,z1.template)('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path fill=currentColor d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z">'),X=e=>(()=>{var t=Ne();return(0,F1.effect)(()=>(0,I1.setAttribute)(t,"class",e.class)),t})();function R1(e,t=300){let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>e(...o),t)}}function j(e){return/(ctrl|control|command|cmd|commandorcontrl|cmdorctrl)/i.test(e)}function e1(e){return/(alt|option)/i.test(e)}function P1(e){return/(meta|super)/i.test(e)}function B(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var qe=(0,r1.template)("<button type=button class=docsearch-btn><span class=docsearch-btn-icon-container></span><span class=docsearch-btn-placeholder> <!> "),Qe=(0,r1.template)("<span class=docsearch-btn-keys>"),We=(0,r1.template)("<kbd class=docsearch-btn-key>"),Je="Ctrl",Ye="\u2318",Ge="Alt",Xe="Option",O1=({onClick:e,hotKeys:t,translations:r={}})=>{let{buttonText:o="Search",buttonAriaLabel:n="Search"}=r,[u,m]=(0,D.createSignal)(null),[f,s]=(0,D.createSignal)(null);return(0,D.onMount)(()=>{typeof navigator<"u"&&(B()?(m(Ye),s(Xe)):(m(Je),s(Ge)))}),(()=>{var i=qe(),a=i.firstChild,v=a.nextSibling,p=v.firstChild,c=p.nextSibling,h=c.nextSibling;return(0,B1.addEventListener)(i,"click",e,!0),(0,V1.setAttribute)(i,"aria-label",n),(0,F.insert)(a,(0,f1.createComponent)(X,{class:"docsearch-modal-btn-icon"})),(0,F.insert)(v,o,c),(0,F.insert)(i,(()=>{var C=(0,t1.memo)(()=>!!(t&&t.length>0));return()=>C()&&(()=>{var E=Qe();return(0,F.insert)(E,(0,f1.createComponent)(D.For,{get each(){return t[0].split("+")},children:_=>(()=>{var k=We();return(0,F.insert)(k,(()=>{var K=(0,t1.memo)(()=>!!j(_));return()=>K()?u():(()=>{var H=(0,t1.memo)(()=>!!e1(_));return()=>H()?f():_[0].toUpperCase()+_.slice(1)})()})()),k})()})),E})()})(),null),i})()};(0,Z1.delegateEvents)(["click"]);var o1=require("solid-js");function N1({isOpen:e,onOpen:t,onClose:r,onInput:o,hotKeys:n}){function u(s){let i=s.target,a=i.tagName;return i.isContentEditable||a==="INPUT"||a==="SELECT"||a==="TEXTAREA"}function m(s){let i=n&&n.map(a=>a.toLowerCase().split("+"));return i?i.some(a=>{if(a.length===1&&s.key.toLowerCase()===a[0]&&!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!u(s)&&!e())return!0;if(a.length>1){let v=a[a.length-1];if(s.key.toLowerCase()!==v)return!1;let p=(B()?s.metaKey:s.ctrlKey)==a.some(j),c=s.shiftKey==a.includes("shift"),h=s.altKey==a.some(e1),C=!B()&&s.metaKey==a.some(P1);return p&&c&&h&&C}return!1}):!1}function f(s){if(s.key==="Escape"&&e()||m(s)){if(s.preventDefault(),e())r();else if(!document.body.classList.contains("docsearch--active")){let i=window.getSelection();i&&o(i.toString()),t()}}}(0,o1.onMount)(()=>window.addEventListener("keydown",f)),(0,o1.onCleanup)(()=>window.removeEventListener("keydown",f))}var M=require("solid-js/web"),we=require("solid-js/web"),be=require("solid-js/web"),q=require("solid-js/web"),x=require("solid-js/web"),w=require("solid-js/web"),i1=require("solid-js/web"),l=require("solid-js");var C1=require("solid-js/web"),L=require("solid-js/web"),z=require("solid-js/web");var U1=require("solid-js/web"),h1=require("solid-js/web"),q1=require("solid-js/web"),je=(0,U1.template)('<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 1 1v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1z">'),Q1=e=>(()=>{var t=je();return(0,q1.effect)(r=>{var o=e.class,n=e["aria-label"];return o!==r.e&&(0,h1.setAttribute)(t,"class",r.e=o),n!==r.t&&(0,h1.setAttribute)(t,"aria-label",r.t=n),r},{e:void 0,t:void 0}),t})();var W1=require("solid-js/web"),p1=require("solid-js/web"),J1=require("solid-js/web"),et=(0,W1.template)('<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><g fill=currentColor fill-rule=evenodd clip-rule=evenodd><path d="M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"></path><path d="M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z">'),n1=e=>(()=>{var t=et();return(0,J1.effect)(r=>{var o=e.class,n=e["aria-label"];return o!==r.e&&(0,p1.setAttribute)(t,"class",r.e=o),n!==r.t&&(0,p1.setAttribute)(t,"aria-label",r.t=n),r},{e:void 0,t:void 0}),t})();var Y1=require("solid-js/web"),g1=require("solid-js/web"),G1=require("solid-js/web"),tt=(0,Y1.template)('<svg width=15 height=15 viewBox="0 0 15 15"role=img><g fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.2><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956">'),X1=e=>(()=>{var t=tt();return(0,G1.effect)(r=>{var o=e.class,n=e["aria-label"];return o!==r.e&&(0,g1.setAttribute)(t,"class",r.e=o),n!==r.t&&(0,g1.setAttribute)(t,"aria-label",r.t=n),r},{e:void 0,t:void 0}),t})();var j1=require("solid-js/web"),ee=require("solid-js/web"),te=require("solid-js/web"),rt=(0,j1.template)('<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 216 60"height=26><g data-name=layer><g><path fill=#2d2d2d d=M52.43,17.22h3.75v21.62h-3.75V17.22Z></path><path fill=#2d2d2d d=M59.26,38.84l-.03-21.66,14.11,13.25v-13.25h3.69v21.65l-14.12-13.26v13.28h-3.64Z></path><path fill=#2d2d2d d=M98.03,17.22h3.75v21.62h-3.75V17.22Z></path><path fill=#2d2d2d d=M80.22,17.16h14.61v3.41h-10.86v5.76h9.32v3.43h-9.32v9.08h-3.75V17.16Z></path><path fill=#2d2d2d d=M105.19,38.84l-.03-21.66,14.11,13.25v-13.25h3.69v21.65l-14.12-13.26v13.28h-3.64Z></path><path fill=#2d2d2d d=M126.08,17.22h3.75v21.62h-3.75V17.22Z></path><path fill=#2d2d2d d=M150.37,29.59h-8.02v9.25h-3.47V17.16h11.53s.06,0,.06,0c1.71-.02,3.18,.58,4.4,1.81,1.22,1.22,1.83,2.69,1.83,4.41s-.61,3.19-1.83,4.4c-1.21,1.22-2.67,1.83-4.4,1.83h-.09Zm-8.02-8.97v5.48h8.11c.76,.01,1.41-.25,1.95-.79,.61-.61,.87-1.36,.79-2.27-.05-.5-.25-.99-.57-1.38-.58-.7-1.3-1.05-2.16-1.05h-8.11Z></path><path fill=#2d2d2d d=M158.59,17.16h3.78v3.79h-3.78v-3.79Zm3.78,6.18v15.5h-3.78v-15.5h3.78Z></path><path fill=#2d2d2d d=M164.69,23.39h12.6l-.21,.41-6.07,11.38h6.09v3.67h-12.58l.21-.41,6.13-11.38h-6.16v-3.67Z></path><path fill=#2d2d2d d=M179.48,23.39h12.6l-.21,.41-6.07,11.38h6.09v3.67h-12.58l.21-.41,6.13-11.38h-6.16v-3.67Z></path><path fill=#2d2d2d d=M204.03,23.7c.59,.19,1.16,.45,1.71,.79v-1.12h3.67v15.33h-3.67v-1.04c-.54,.33-1.11,.59-1.71,.79-.77,.24-1.55,.36-2.36,.36-1.05,0-2.05-.2-3.01-.6-.93-.39-1.75-.95-2.46-1.66-.72-.71-1.27-1.54-1.66-2.46-.4-.96-.6-1.96-.6-3.01s.2-2.05,.6-3.01c.39-.93,.95-1.75,1.66-2.46,.71-.71,1.54-1.27,2.46-1.66,.96-.4,1.96-.6,3.01-.6,.81,0,1.59,.12,2.36,.36Zm-2.31,3.31c-1.14-.01-2.11,.39-2.92,1.19-.79,.8-1.18,1.75-1.18,2.87s.39,2.08,1.18,2.87c.8,.79,1.75,1.18,2.87,1.18s2.07-.39,2.87-1.18c.8-.79,1.19-1.75,1.19-2.87s-.38-2.03-1.14-2.82-1.8-1.24-2.88-1.25Z></path><path fill=#6b0bea d=M45.04,27.9s.2-1.39,.43-3.05l-2.93,2.14h0S8.94,51.47,8.94,51.47l5.69-31.9,.7-3.9h0c.51,.18,1.02,.37,1.52,.57,.12,.05,.23,.09,.35,.14,.51,.21,1.02,.42,1.53,.64h0s-4.69,26.31-4.69,26.31l24.7-17.99,7.44-5.44-1.04-2.44c-1.19-1.27-2.43-2.5-3.72-3.66-5.36-4.85-11.75-8.84-18.46-11.54-1.98-.8-5.85-2.02-6.02-2.07l-.6-.19-2.91,1.96,3.32,.9c.33,.11,.78,.25,1.28,.42,.06,.02,.12,.04,.18,.06,1.25,.41,2.78,.94,3.77,1.34,6.42,2.59,12.55,6.42,17.69,11.06,1.15,1.04,2.28,2.14,3.35,3.27l-25.28,18.42,.91-5.09,11.35-8.27,7.41-5.4-1.24-1.07c-1.32-1.14-2.71-2.23-4.16-3.25-.58-.41-1.17-.81-1.76-1.19-.3-.19-.6-.38-.9-.57-2.41-1.51-4.93-2.83-7.5-3.94-.16-.07-.33-.14-.5-.21-1.82-.77-3.68-1.44-5.55-2-.51-.15-1.02-.3-1.54-.44-.19-.05-.37-.09-.56-.14-.33-.09-.66-.17-.99-.25,0,0-.02,0-.03,0h0c-1.19-.29-2.38-.53-3.58-.73h0s-.89,.6-.89,.6l-.33,1.83L0,51.53l2.38,1.49,.81-4.59h0S10.45,7.77,10.45,7.77c.04,0,.08,.01,.11,.02,.12,.03,.24,.05,.37,.08,.33,.07,.67,.15,1,.22,.15,.03,.3,.07,.44,.11,.32,.08,.64,.16,.96,.24,.13,.04,.27,.07,.4,.11,.44,.12,.89,.25,1.33,.38,1.94,.58,3.88,1.28,5.76,2.1,4.3,1.85,8.46,4.35,12.14,7.29,.08,.06,.16,.12,.24,.19l-3.13,2.28c-.07-.05-.14-.1-.21-.16-.16-.12-.32-.24-.48-.36-.23-.17-.46-.34-.69-.5-.16-.11-.32-.23-.48-.34-.24-.17-.48-.33-.72-.49-.16-.11-.32-.22-.48-.32-.24-.16-.49-.32-.74-.48-.16-.1-.32-.21-.49-.31-.25-.16-.51-.31-.76-.46-.16-.1-.32-.19-.48-.29-.26-.15-.53-.3-.8-.45-.15-.09-.31-.17-.46-.26-.29-.16-.59-.31-.88-.46-.13-.07-.26-.14-.39-.2-.13-.06-.25-.12-.38-.19h0s-.9-.44-.9-.44c0,0,0,0,0,0l-1.53-.72v.03c-1.47-.63-2.98-1.19-4.5-1.67l-1.41-.45L6.14,52.31h0s-.49,2.76-.49,2.76l1.49,.93,1.13-.83L44.25,28.97l.71-.52,.08-.54Zm-25.62,0l1.73-9.72c.32,.17,.64,.33,.96,.51,.03,.02,.06,.03,.09,.05,.36,.2,.71,.4,1.07,.6,.06,.04,.13,.07,.19,.11,.76,.45,1.52,.92,2.25,1.41,.06,.04,.11,.08,.17,.11,.34,.23,.69,.47,1.02,.71,.02,.02,.05,.03,.07,.05,.3,.21,.59,.43,.88,.65l-8.57,6.24,.13-.72Z>'),re=e=>(()=>{var t=rt();return(0,te.effect)(()=>(0,ee.setAttribute)(t,"class",e.class)),t})();var oe=require("solid-js/web"),ne=require("solid-js/web"),ae=require("solid-js/web"),ot=(0,oe.template)('<svg height=26 viewBox="0 0 133 36"version=1.1 xmlns=http://www.w3.org/2000/svg><g stroke=none stroke-width=1 fill=none fill-rule=evenodd><g transform="translate(-1405, -631)"fill=#FFFFFF fill-rule=nonzero><g id=INFINI-Pizza-logo-color-RGB transform="translate(1405, 631)"><polygon points="33.2992216 11.07 35.680913 11.07 35.680913 24.9685714 33.2992216 24.9685714"></polygon><polygon points="37.6370756 24.9685714 37.6180221 11.0442857 46.579533 19.5621429 46.579533 11.0442857 48.9231173 11.0442857 48.9231173 24.9621429 39.9552552 16.4378571 39.9552552 24.975 37.6434268 24.975"></polygon><polygon points="62.2605893 11.07 64.6422807 11.07 64.6422807 24.9685714 62.2605893 24.9685714"></polygon><polygon points="50.9491428 11.0314286 60.2282126 11.0314286 60.2282126 13.2235714 53.3308342 13.2235714 53.3308342 16.9264286 59.2501313 16.9264286 59.2501313 19.1314286 53.3308342 19.1314286 53.3308342 24.9685714 50.9491428 24.9685714"></polygon><polygon points="66.8080321 24.9685714 66.7889786 11.0442857 75.7504895 19.5621429 75.7504895 11.0442857 78.0940738 11.0442857 78.0940738 24.9621429 69.1262117 16.4378571 69.1262117 24.975 66.8143833 24.975"></polygon><polygon points="80.0756411 11.07 82.4573325 11.07 82.4573325 24.9685714 80.0756411 24.9685714 80.0756411 11.07"></polygon><path d="M95.5026503,19.0221429 L90.4090063,19.0221429 L90.4090063,24.9685714 L88.2051478,24.9685714 L88.2051478,11.0314286 L95.528055,11.0314286 C95.528055,11.0314286 95.5661621,11.0314286 95.5661621,11.0314286 C96.6522134,11.0185714 97.5858364,11.4042857 98.36068,12.195 C99.1355236,12.9792857 99.5229454,13.9242857 99.5229454,15.03 C99.5229454,16.1357143 99.1355236,17.0807143 98.36068,17.8585714 C97.5921876,18.6428571 96.6649157,19.035 95.5661621,19.035 L95.5090015,19.035 L95.5026503,19.0221429 Z M90.4090063,13.2557143 L90.4090063,16.7785714 L95.5598109,16.7785714 C96.0425004,16.785 96.4553269,16.6178571 96.7982904,16.2707143 C97.1857122,15.8785714 97.3508428,15.3964286 97.3000334,14.8114286 C97.2682775,14.49 97.141254,14.175 96.9380163,13.9242857 C96.5696481,13.4742857 96.1123633,13.2492857 95.5661621,13.2492857 L90.4153574,13.2492857 L90.4090063,13.2557143 Z"id=\u5F62\u72B6></path><path d="M100.723318,11.0314286 L103.124063,11.0314286 L103.124063,13.4678571 L100.723318,13.4678571 L100.723318,11.0314286 Z M103.124063,15.0042857 L103.124063,24.9685714 L100.723318,24.9685714 L100.723318,15.0042857 L103.124063,15.0042857 L103.124063,15.0042857 Z"id=\u5F62\u72B6></path><polygon points="104.597536 15.0364286 112.600019 15.0364286 112.466644 15.3 108.61148 22.6157143 112.479347 22.6157143 112.479347 24.975 104.489566 24.975 104.622941 24.7114286 108.516212 17.3957143 104.603887 17.3957143 104.603887 15.0364286"></polygon><polygon points="113.990927 15.0364286 121.99341 15.0364286 121.860035 15.3 118.004871 22.6157143 121.872738 22.6157143 121.872738 24.975 113.882957 24.975 114.016332 24.7114286 117.909603 17.3957143 113.997278 17.3957143 113.997278 15.0364286"></polygon><path d="M129.583067,15.2357143 C129.957786,15.3578571 130.319803,15.525 130.669118,15.7435714 L130.669118,15.0235714 L133,15.0235714 L133,24.8785714 L130.669118,24.8785714 L130.669118,24.21 C130.326154,24.4221429 129.964137,24.5892857 129.583067,24.7178571 C129.094026,24.8721429 128.598634,24.9492857 128.084189,24.9492857 C127.417315,24.9492857 126.782198,24.8207143 126.172485,24.5635714 C125.581825,24.3128571 125.061029,23.9528571 124.610095,23.4964286 C124.15281,23.04 123.803496,22.5064286 123.5558,21.915 C123.301753,21.2978571 123.174729,20.655 123.174729,19.98 C123.174729,19.305 123.301753,18.6621429 123.5558,18.045 C123.803496,17.4471429 124.159161,16.92 124.610095,16.4635714 C125.061029,16.0071429 125.588176,15.6471429 126.172485,15.3964286 C126.782198,15.1392857 127.417315,15.0107143 128.084189,15.0107143 C128.598634,15.0107143 129.094026,15.0878571 129.583067,15.2421429 L129.583067,15.2357143 Z M128.115945,17.3635714 C127.391911,17.3571429 126.775846,17.6142857 126.261401,18.1285714 C125.759658,18.6428571 125.511962,19.2535714 125.511962,19.9735714 C125.511962,20.6935714 125.759658,21.3107143 126.261401,21.8185714 C126.769495,22.3264286 127.372857,22.5771429 128.084189,22.5771429 C128.795521,22.5771429 129.398883,22.3264286 129.906977,21.8185714 C130.415071,21.3107143 130.662767,20.6935714 130.662767,19.9735714 C130.662767,19.2535714 130.421422,18.6685714 129.938733,18.1607143 C129.456043,17.6528571 128.795521,17.3635714 128.109594,17.3571429 L128.115945,17.3635714 Z"id=\u5F62\u72B6></path><path d="M28.6057017,17.9357143 C28.6057017,17.9357143 28.7327253,17.0421429 28.8788023,15.975 L27.0179075,17.3507143 L27.0179075,17.3507143 C27.0179075,17.3507143 5.67795234,33.0878571 5.67795234,33.0878571 L9.29177212,12.5807143 L9.73635452,10.0735714 L9.73635452,10.0735714 C10.0602646,10.1892857 10.3841746,10.3114286 10.7017334,10.44 C10.7779476,10.4721429 10.8478105,10.4978571 10.9240246,10.53 C11.2479347,10.665 11.5718447,10.8 11.8957547,10.9414286 L11.8957547,10.9414286 C11.8957547,10.9414286 8.91705267,27.855 8.91705267,27.855 L24.6044601,16.29 L29.3297359,12.7928571 L28.6692135,11.2242857 C27.9134234,10.4078571 27.1258775,9.61714286 26.3065756,8.87142857 C22.9023447,5.75357143 18.8439425,3.18857143 14.5823027,1.45285714 C13.3247696,0.938571429 10.866864,0.154285714 10.758894,0.122142857 L10.3778234,0 L8.52963087,1.26 L10.6382217,1.83857143 C10.8478105,1.90928571 11.1336135,1.99928571 11.4511723,2.10857143 C11.4892794,2.12142857 11.5273865,2.13428571 11.5654935,2.14714286 C12.3593907,2.41071429 13.3311208,2.75142857 13.9598873,3.00857143 C18.037343,4.67357143 21.9306146,7.13571429 25.1951196,10.1185714 C25.925505,10.7871429 26.643188,11.4942857 27.322764,12.2207143 L11.2669882,24.0621429 L11.8449453,20.79 L19.0535313,15.4735714 L23.7597536,12.0021429 L22.9722076,11.3142857 C22.1338523,10.5814286 21.2510386,9.88071429 20.330118,9.225 C19.9617497,8.96142857 19.5870302,8.70428571 19.2123108,8.46 C19.0217755,8.33785714 18.8312402,8.21571429 18.6407048,8.09357143 C17.1100712,7.12285714 15.5095745,6.27428571 13.877322,5.56071429 C13.7757032,5.51571429 13.6677332,5.47071429 13.5597631,5.42571429 C12.4038489,4.93071429 11.22253,4.5 10.0348598,4.14 C9.71094981,4.04357143 9.38703978,3.94714286 9.05677857,3.85714286 C8.9361062,3.825 8.82178502,3.79928571 8.70111265,3.76714286 C8.4915238,3.70928571 8.28193496,3.65785714 8.07234612,3.60642857 C8.07234612,3.60642857 8.05964376,3.60642857 8.05329258,3.60642857 L8.05329258,3.60642857 C7.29750251,3.42 6.54171243,3.26571429 5.77957118,3.13714286 L5.77957118,3.13714286 C5.77957118,3.13714286 5.21431641,3.52285714 5.21431641,3.52285714 L5.00472757,4.69928571 L0,33.1264286 L1.51158015,34.0842857 L2.0260255,31.1335714 L2.0260255,31.1335714 C2.0260255,31.1335714 6.63698009,4.995 6.63698009,4.995 C6.6623848,4.995 6.6877895,5.00142857 6.70684304,5.00785714 C6.78305716,5.02714286 6.85927129,5.04 6.94183659,5.05928571 C7.15142543,5.10428571 7.36736546,5.15571429 7.5769543,5.20071429 C7.67222196,5.22 7.76748961,5.24571429 7.85640609,5.27142857 C8.05964376,5.32285714 8.26288143,5.37428571 8.4661191,5.42571429 C8.5486844,5.45142857 8.63760088,5.47071429 8.72016618,5.49642857 C8.99961797,5.57357143 9.28542094,5.65714286 9.56487274,5.74071429 C10.7970011,6.11357143 12.0291295,6.56357143 13.2231508,7.09071429 C15.9541569,8.28 18.5962466,9.88714286 20.9334798,11.7771429 C20.9842892,11.8157143 21.0350986,11.8542857 21.085908,11.8992857 L19.0979896,13.365 C19.0535313,13.3328571 19.0090731,13.3007143 18.9646149,13.2621429 C18.862996,13.185 18.7613772,13.1078571 18.6597584,13.0307143 C18.5136813,12.9214286 18.3676042,12.8121429 18.2215271,12.7092857 C18.1199083,12.6385714 18.0182895,12.5614286 17.9166706,12.4907143 C17.7642424,12.3814286 17.6118141,12.2785714 17.4593859,12.1757143 C17.3577671,12.105 17.2561482,12.0342857 17.1545294,11.97 C17.0021011,11.8671429 16.8433217,11.7642857 16.6845423,11.6614286 C16.5829235,11.5971429 16.4813046,11.5264286 16.3733346,11.4621429 C16.2145552,11.3592857 16.0494246,11.2628571 15.8906451,11.1664286 C15.7890263,11.1021429 15.6874075,11.0442857 15.5857886,10.98 C15.420658,10.8835714 15.2491763,10.7871429 15.0776945,10.6907143 C14.9824268,10.6328571 14.880808,10.5814286 14.7855403,10.5235714 C14.6013562,10.4207143 14.4108209,10.3242857 14.2266367,10.2278571 C14.1440714,10.1828571 14.0615061,10.1378571 13.9789408,10.0992857 C13.8963755,10.0607143 13.8201614,10.0221429 13.7375961,9.97714286 L13.7375961,9.97714286 C13.7375961,9.97714286 13.1659902,9.69428571 13.1659902,9.69428571 C13.1659902,9.69428571 13.1659902,9.69428571 13.1659902,9.69428571 L12.1942601,9.23142857 L12.1942601,9.25071429 C11.260637,8.84571429 10.3016093,8.48571429 9.33623036,8.17714286 L8.44071439,7.88785714 L3.89962275,33.6278571 L3.89962275,33.6278571 C3.89962275,33.6278571 3.58841507,35.4021429 3.58841507,35.4021429 L4.53474046,36 L5.25242348,35.4664286 L28.1039587,18.6235714 L28.5548923,18.2892857 L28.6057017,17.9421429 L28.6057017,17.9357143 Z M12.333986,17.9357143 L13.4327396,11.6871429 C13.6359773,11.7964286 13.8392149,11.8992857 14.0424526,12.015 C14.0615061,12.0278571 14.0805597,12.0342857 14.0996132,12.0471429 C14.3282556,12.1757143 14.5505468,12.3042857 14.7791892,12.4328571 C14.8172962,12.4585714 14.8617545,12.4778571 14.8998615,12.5035714 C15.382551,12.7928571 15.8652404,13.095 16.3288764,13.41 C16.3669834,13.4357143 16.3987393,13.4614286 16.4368464,13.4807143 C16.6527864,13.6285714 16.8750776,13.7828571 17.0846664,13.9371429 C17.0973688,13.95 17.1164223,13.9564286 17.1291247,13.9692857 C17.31966,14.1042857 17.5038441,14.2457143 17.6880283,14.3871429 L12.2450695,18.3985714 L12.3276348,17.9357143 L12.333986,17.9357143 Z"id=\u5F62\u72B6>'),se=e=>(()=>{var t=ot();return(0,ae.effect)(()=>(0,ne.setAttribute)(t,"class",e.class)),t})();var le=require("solid-js/web"),v1=require("solid-js/web"),ie=require("solid-js/web"),nt=(0,le.template)('<svg xmlns=http://www.w3.org/2000/svg width=15 height=15 viewBox="0 0 24 24"><path fill=currentColor d="M12 4a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 12 4z">'),ce=e=>(()=>{var t=nt();return(0,ie.effect)(r=>{var o=e.class,n=e["aria-label"];return o!==r.e&&(0,v1.setAttribute)(t,"class",r.e=o),n!==r.t&&(0,v1.setAttribute)(t,"aria-label",r.t=n),r},{e:void 0,t:void 0}),t})();var at=(0,C1.template)("<span class=docsearch-modal-footer-commands><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label></span></li><li><kbd class=docsearch-modal-footer-commands-key></kbd><span class=docsearch-modal-footer-commands-label>"),st=(0,C1.template)("<span class=docsearch-modal-footer-logo><span class=docsearch-modal-footer-logo-label></span><a href=https://www.infinilabs.com/>"),de=({translations:e={}})=>{let{selectText:t="to select",selectKeyAriaLabel:r="Enter key",navigateText:o="to navigate",navigateUpKeyAriaLabel:n="Arrow up",navigateDownKeyAriaLabel:u="Arrow down",closeText:m="to close",closeKeyAriaLabel:f="Escape key",poweredByText:s="Powered by"}=e;return[(()=>{var i=at(),a=i.firstChild,v=a.firstChild,p=v.nextSibling,c=a.nextSibling,h=c.firstChild,C=h.nextSibling,E=C.nextSibling,_=c.nextSibling,k=_.firstChild,K=k.nextSibling;return(0,L.insert)(v,(0,z.createComponent)(n1,{"aria-label":r})),(0,L.insert)(p,t),(0,L.insert)(h,(0,z.createComponent)(Q1,{"aria-label":u})),(0,L.insert)(C,(0,z.createComponent)(ce,{"aria-label":n})),(0,L.insert)(E,o),(0,L.insert)(k,(0,z.createComponent)(X1,{"aria-label":f})),(0,L.insert)(K,m),i})(),(()=>{var i=st(),a=i.firstChild,v=a.nextSibling;return(0,L.insert)(a,s),(0,L.insert)(v,(0,z.createComponent)(se,{class:"docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-dark"}),null),(0,L.insert)(v,(0,z.createComponent)(re,{class:"docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-light"}),null),i})()]};var y1=require("solid-js/web"),_e=require("solid-js/web"),a1=require("solid-js/web"),ye=require("solid-js/web"),_1=require("solid-js/web"),O=require("solid-js/web"),N=require("solid-js/web"),U=require("solid-js/web"),s1=require("solid-js");var me=require("solid-js/web"),ue=require("solid-js/web"),fe=require("solid-js/web"),lt=(0,me.template)('<svg width=20 height=20 xmlns=http://www.w3.org/2000/svg><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"stroke=currentColor fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round>'),he=e=>(()=>{var t=lt();return(0,fe.effect)(()=>(0,ue.setAttribute)(t,"class",e.class)),t})();var pe=require("solid-js/web"),ge=require("solid-js/web"),ve=require("solid-js/web"),it=(0,pe.template)('<svg width=24 height=24 xmlns=http://www.w3.org/2000/svg><path fill=currentColor d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z">'),Ce=e=>(()=>{var t=it();return(0,ve.effect)(()=>(0,ge.setAttribute)(t,"class",e.class)),t})();var ct=(0,y1.template)("<form class=docsearch-modal-search-input-form><input type=search class=docsearch-modal-search-input><button type=reset class=docsearch-modal-search-input-reset>"),dt=(0,y1.template)("<button type=reset class=docsearch-modal-search-cancel-btn>"),$e=({loading:e,query:t,onInput:r,onKeyDown:o,onReset:n,onClose:u,translations:m={}})=>{let{searchDocsPlaceHolder:f="Search",resetButtonTitle:s="Clear the query",resetButtonAriaLabel:i="Clear the query",cancelButtonText:a="Cancel",cancelButtonAriaLabel:v="Cancel"}=m,p;return(0,s1.onMount)(()=>p?.focus()),[(()=>{var c=ct(),h=c.firstChild,C=h.nextSibling;(0,U.addEventListener)(c,"reset",n),c.addEventListener("submit",_=>_.preventDefault()),(0,a1.insert)(c,(0,N.createComponent)(s1.Show,{get when(){return e()},get fallback(){return(0,N.createComponent)(X,{class:"docsearch-modal-search-input-icon"})},get children(){return(0,N.createComponent)(Ce,{class:"docsearch-modal-search-input-icon docsearch-modal-search-input-loading-icon"})}}),h),(0,U.addEventListener)(h,"keydown",o,!0),(0,U.addEventListener)(h,"input",r,!0);var E=p;return typeof E=="function"?(0,ye.use)(E,h):p=h,(0,O.setAttribute)(h,"placeholder",f),(0,O.setAttribute)(C,"title",s),(0,O.setAttribute)(C,"aria-label",i),(0,a1.insert)(C,(0,N.createComponent)(he,{class:"docsearch-modal-search-input-reset-icon"})),(0,_1.effect)(()=>C.hidden=!t()),(0,_1.effect)(()=>h.value=t()),c})(),(()=>{var c=dt();return(0,U.addEventListener)(c,"click",u,!0),(0,O.setAttribute)(c,"aria-label",v),(0,a1.insert)(c,a),c})()]};(0,_e.delegateEvents)(["input","keydown","click"]);var l1=require("solid-js");function $1(e,t){let{environment:r=window}=t();(0,l1.onMount)(()=>{let o=e.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),n=o[0],u=o[o.length-1];function m(f){f.key==="Tab"&&(f.shiftKey?r.document.activeElement===n&&(f.preventDefault(),u.focus()):r.document.activeElement===u&&(f.preventDefault(),n.focus()))}e.addEventListener("keydown",m),(0,l1.onCleanup)(()=>e.removeEventListener("keydown",m))})}var mt=(0,M.template)("<div class=docsearch-modal-empty-query>"),ut=(0,M.template)("<div class=docsearch-modal-error><p class=docsearch-modal-title>An error has occured. Please try again..."),ft=(0,M.template)("<div class=docsearch-modal-no-search-hits-suggestions-list><p class=docsearch-modal-no-search-hits-help-text>Try searching for:</p><ul>"),ht=(0,M.template)('<div class=docsearch-modal-no-search-hits><p class=docsearch-modal-title>No results for "<!>"'),pt=(0,M.template)("<div class=docsearch-modal-container role=button tabindex=0><div class=docsearch-modal><header class=docsearch-modal-search-container></header><main class=docsearch-modal-search-hits-container></main><footer class=docsearch-modal-footer>"),gt=(0,M.template)("<li><button class=docsearch-modal-no-search-hits-suggestion type=button>"),vt=(0,M.template)("<section><div class=docsearch-modal-search-hits-category></div><ul role=listbox>"),Ct=(0,M.template)("<li role=option class=docsearch-modal-search-hits-item><a><span class=docsearch-modal-search-hits-item-text-container><p class=docsearch-modal-search-hits-item-title></p><p class=docsearch-modal-search-hits-item-text></p></span><span class=docsearch-modal-search-hits-item-trailing-icon-container aria-hidden>");function _t(e){if(!e||e.length===0)return[[],[]];let t=[],r=new Set;return e.forEach((o,n)=>{let u=o._source||{},m={index:n,category:u.category||"General",subcategory:u.subcategory||"",title:u.title||null,content:u.content||null,url:u.url||null};t.push(m),m.category&&r.add(m.category)}),[t,Array.from(r)]}var b=function(e){return e[e.Results=0]="Results",e[e.NoResults=1]="NoResults",e[e.Error=2]="Error",e[e.EmptyQuery=3]="EmptyQuery",e}(b||{}),Le=({searchClient:e,environment:t=window,translations:r={},onClose:o,initialQuery:n})=>{let{linkToTheResultAriaLabel:u="Link to the result"}=r;(0,l.onMount)(()=>document.body.classList.add("docsearch--active")),(0,l.onCleanup)(()=>document.body.classList.remove("docsearch--active"));let m,f;function s(){if(f){let d=window.innerHeight*.01;f.style.setProperty("--docsearch-vh",`${d}px`)}}(0,l.onMount)(()=>{s(),window.addEventListener("resize",s)}),(0,l.onCleanup)(()=>window.removeEventListener("resize",s));let[i,a]=(0,l.createSignal)(!1),[v,p]=(0,l.createSignal)(""),[c,h]=(0,l.createSignal)(0),[C,E]=(0,l.createSignal)([]),[_,k]=(0,l.createSignal)([]),[K,H]=(0,l.createSignal)(b.EmptyQuery),x1=()=>_().length;function De(d){if(d.key==="ArrowUp"||d.key==="ArrowDown"){d.preventDefault();let g=d.key==="ArrowDown";h(A=>g&&A===x1()-1?0:!g&&A===0?x1()-1:A+(g?1:-1)),document.getElementById(`docsearch-hit-item-${c()}`)?.scrollIntoView({block:c()===0?"center":"nearest",behavior:"smooth"})}d.key==="Enter"&&(d.preventDefault(),d.ctrlKey||d.metaKey?t.open(_()[c()].url??"","_blank","noopener")?.focus():d.shiftKey?t.open(_()[c()].url??"","_blank","noopener"):t.location.assign(_()[c()].url??""),!d.shiftKey&&!d.ctrlKey&&!d.metaKey&&o&&o())}function R(){a(!1),H(b.EmptyQuery),k([]),E([]),h(0)}function E1(d){a(!0),e&&e().search(d,{attributesToHighlight:["*"],attributesToCrop:["content"],cropLength:30}).catch(g=>{R(),H(b.Error),console.error(g)}).then(g=>{if(!g){R(),H(b.Error);return}if(!g.hits||g.hits.length===0){R(),H(b.NoResults);return}let[A,I]=_t(g.hits);a(!1),H(A.length===0?b.NoResults:b.Results),h(0),k(A),E(I)})}let ze=R1(E1,100);n&&(0,l.onMount)(()=>{p(n),E1(n)});function Ie(d){let g=d.currentTarget?.value;if(p(g),!g){R();return}ze(g)}return(()=>{var d=pt(),g=d.firstChild,A=g.firstChild,I=A.nextSibling,Fe=I.nextSibling;d.$$mousedown=T=>T.target===T.currentTarget&&o&&o();var A1=f;typeof A1=="function"?(0,i1.use)(A1,d):f=d,(0,i1.use)($1,g,()=>({environment:t})),(0,x.insert)(A,(0,w.createComponent)($e,{loading:i,query:v,onInput:Ie,onKeyDown:De,onReset:R,onClose:o,translations:r}));var T1=m;return typeof T1=="function"?(0,i1.use)(T1,I):m=I,(0,x.insert)(I,(0,w.createComponent)(l.Switch,{get children(){return[(0,w.createComponent)(l.Match,{get when(){return K()===b.EmptyQuery},get children(){return mt()}}),(0,w.createComponent)(l.Match,{get when(){return K()===b.Error},get children(){return ut()}}),(0,w.createComponent)(l.Match,{get when(){return K()===b.NoResults},get children(){var T=ht(),P=T.firstChild,Q=P.firstChild,W=Q.nextSibling,y=W.nextSibling;return(0,x.insert)(P,v,W),(0,x.insert)(T,(0,w.createComponent)(l.Show,{get when(){return C().length>0},get children(){var S=ft(),Z=S.firstChild,J=Z.nextSibling;return(0,x.insert)(J,(0,w.createComponent)(l.For,{get each(){return C()},children:V=>(()=>{var Y=gt(),G=Y.firstChild;return G.$$click=()=>p(V),(0,x.insert)(G,V),Y})()})),S}}),null),T}}),(0,w.createComponent)(l.Match,{get when(){return K()===b.Results},get children(){return(0,w.createComponent)(l.For,{get each(){return C()},children:T=>(()=>{var P=vt(),Q=P.firstChild,W=Q.nextSibling;return(0,x.insert)(Q,T),(0,x.insert)(W,(0,w.createComponent)(l.For,{get each(){return _().filter(y=>y.category===T)},children:y=>(()=>{var S=Ct(),Z=S.firstChild,J=Z.firstChild,V=J.firstChild,Y=V.nextSibling,G=J.nextSibling;return S.addEventListener("mouseenter",()=>h(y.index)),(0,q.setAttribute)(Z,"aria-label",u),(0,x.insert)(G,(0,w.createComponent)(n1,{class:"docsearch-modal-search-hits-item-trailing-icon"})),(0,be.effect)($=>{var S1=y.index===c(),M1=`docsearch-hit-item-${y.index}`,k1=y.index===c(),K1=y.url||"#",H1=(y.subcategory||"")+(y.subcategory&&y.title&&" | ")+(y.title||""),D1=y.content||"";return S1!==$.e&&(0,q.setAttribute)(S,"aria-selected",$.e=S1),M1!==$.t&&(0,q.setAttribute)(S,"id",$.t=M1),k1!==$.a&&S.classList.toggle("docsearch-modal-search-hits-item--active",$.a=k1),K1!==$.o&&(0,q.setAttribute)(Z,"href",$.o=K1),H1!==$.i&&(V.innerHTML=$.i=H1),D1!==$.n&&(Y.innerHTML=$.n=D1),$},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),S})()})),P})()})}})]}})),(0,x.insert)(Fe,(0,w.createComponent)(de,{translations:r})),d})()};(0,we.delegateEvents)(["mousedown","click"]);var Me=require("solid-js/web");var xe=require("pizza-wasm"),c1=class{pizzaEngine;constructor({}){console.log("Init Pizza Engine."),this.pizzaEngine=xe.Pizza.new()}async load(t){try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch file from ${t}: ${r.statusText}`);let o=await r.text();this.pizzaEngine.load_json_objects_array(o)?console.log(`Load ${t} and indexed successfully.`):console.error(`Failed to load ${t}`)}catch(r){console.error(`Error loading ${t}:`,r)}}async search(t,r={}){let o=this.pizzaEngine.search_by_query_string(t);return o}};var Ae=require("solid-js");var Ee="0.1.0";function Te({clientAgents:e=[]}){let t=new c1({clientAgents:e.concat(`infini docs-searchbar.js (v${Ee})`)});return t.load("/index.json").then(()=>{console.log("Index loaded and indexed successfully.")}).catch(r=>{console.error("Failed to load index:",r)}),(0,Ae.createMemo)(()=>t)}var yt=["ctrl+k","s","/"],ke=e=>{let{environment:t=window,hotKeys:r=yt}=e,[o,n]=(0,b1.createSignal)(!1),[u,m]=(0,b1.createSignal)(),f=()=>n(!0),s=()=>n(!1),i=p=>m(p),a=()=>{let p=window.getSelection();p&&m(p.toString()),n(!0)},v=Te({clientAgents:[]});return N1({isOpen:o,onOpen:f,onClose:s,onInput:i,hotKeys:r}),[(0,d1.createComponent)(O1,{get translations(){return e?.translations?.button},hotKeys:r,onClick:a}),(0,w1.memo)(()=>(0,w1.memo)(()=>!!o())()&&(0,d1.createComponent)(Me.Portal,{get mount(){return t.document.body},get children(){return(0,d1.createComponent)(Le,(0,Se.mergeProps)(e,{searchClient:v,get initialQuery(){return u()},onClose:s,get translations(){return e?.translations?.modal}}))}}))]};function He(e){let[t,r]=(0,m1.createSignal)(!0);return(0,Ke.render)(()=>(0,L1.createComponent)(m1.Show,{get when(){return t()},get children(){return(0,L1.createComponent)(ke,e)}}),typeof e.container=="string"?(e.environment??window).document.querySelector(e.container):e.container),()=>r(!1)}var $t=He;0&&(module.exports={docsearch});