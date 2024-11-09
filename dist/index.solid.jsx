import{createSignal as e1}from"solid-js";import{For as l1,createSignal as R,onMount as c1}from"solid-js";var S=t=>React.createElement("svg",{class:t.class,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},React.createElement("path",{fill:"currentColor",d:"M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"}));function z(t,e=300){let n;return(...a)=>{clearTimeout(n),n=setTimeout(()=>t(...a),e)}}function E(t){return/(ctrl|control|command|cmd|commandorcontrl|cmdorctrl)/i.test(t)}function M(t){return/(alt|option)/i.test(t)}function B(t){return/(meta|super)/i.test(t)}function T(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var i1="Ctrl",d1="\u2318",p1="Alt",h1="Option",Z=({onClick:t,hotKeys:e,translations:n={}})=>{let{buttonText:a="Search",buttonAriaLabel:c="Search"}=n,[d,p]=R(null),[h,o]=R(null);return c1(()=>{typeof navigator<"u"&&(T()?(p(d1),o(h1)):(p(i1),o(p1)))}),React.createElement("button",{type:"button",class:"docsearch-btn",onClick:t,"aria-label":c},React.createElement("span",{class:"docsearch-btn-icon-container"},React.createElement(S,{class:"docsearch-modal-btn-icon"})),React.createElement("span",{class:"docsearch-btn-placeholder"}," ",a," "),e&&e.length>0&&React.createElement("span",{class:"docsearch-btn-keys"},React.createElement(l1,{each:e[0].split("+")},i=>React.createElement("kbd",{class:"docsearch-btn-key"},E(i)?d():M(i)?h():i[0].toUpperCase()+i.slice(1)))))};import{onCleanup as u1,onMount as m1}from"solid-js";function V({isOpen:t,onOpen:e,onClose:n,onInput:a,hotKeys:c}){function d(o){let i=o.target,l=i.tagName;return i.isContentEditable||l==="INPUT"||l==="SELECT"||l==="TEXTAREA"}function p(o){let i=c&&c.map(l=>l.toLowerCase().split("+"));return i?i.some(l=>{if(l.length===1&&o.key.toLowerCase()===l[0]&&!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!d(o)&&!t())return!0;if(l.length>1){let g=l[l.length-1];if(o.key.toLowerCase()!==g)return!1;let u=(T()?o.metaKey:o.ctrlKey)==l.some(E),m=o.shiftKey==l.includes("shift"),f=o.altKey==l.some(M),L=!T()&&o.metaKey==l.some(B);return u&&m&&f&&L}return!1}):!1}function h(o){if(o.key==="Escape"&&t()||p(o)){if(o.preventDefault(),t())n();else if(!document.body.classList.contains("docsearch--active")){let i=window.getSelection();i&&a(i.toString()),e()}}}m1(()=>window.addEventListener("keydown",h)),u1(()=>window.removeEventListener("keydown",h))}import{createSignal as C,For as A,Match as H,onCleanup as G,onMount as P,Show as y1,Switch as C1}from"solid-js";var O=t=>React.createElement("svg",{class:t.class,"aria-label":t["aria-label"],xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},React.createElement("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1 1 1v11.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1z"}));var K=t=>React.createElement("svg",{class:t.class,"aria-label":t["aria-label"],xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},React.createElement("g",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"},React.createElement("path",{d:"M3 14a1 1 0 0 1 1-1h12a3 3 0 0 0 3-3V6a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H4a1 1 0 0 1-1-1z"}),React.createElement("path",{d:"M3.293 14.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 14l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4z"})));var N=t=>React.createElement("svg",{class:t.class,"aria-label":t["aria-label"],width:"15",height:"15",viewBox:"0 0 15 15",role:"img"},React.createElement("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.2"},React.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"})));var $=t=>React.createElement("svg",{class:t.class,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 216 60",height:26},React.createElement("g",{"data-name":"layer"},React.createElement("g",null,React.createElement("path",{fill:"#2d2d2d",d:"M52.43,17.22h3.75v21.62h-3.75V17.22Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M59.26,38.84l-.03-21.66,14.11,13.25v-13.25h3.69v21.65l-14.12-13.26v13.28h-3.64Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M98.03,17.22h3.75v21.62h-3.75V17.22Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M80.22,17.16h14.61v3.41h-10.86v5.76h9.32v3.43h-9.32v9.08h-3.75V17.16Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M105.19,38.84l-.03-21.66,14.11,13.25v-13.25h3.69v21.65l-14.12-13.26v13.28h-3.64Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M126.08,17.22h3.75v21.62h-3.75V17.22Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M150.37,29.59h-8.02v9.25h-3.47V17.16h11.53s.06,0,.06,0c1.71-.02,3.18,.58,4.4,1.81,1.22,1.22,1.83,2.69,1.83,4.41s-.61,3.19-1.83,4.4c-1.21,1.22-2.67,1.83-4.4,1.83h-.09Zm-8.02-8.97v5.48h8.11c.76,.01,1.41-.25,1.95-.79,.61-.61,.87-1.36,.79-2.27-.05-.5-.25-.99-.57-1.38-.58-.7-1.3-1.05-2.16-1.05h-8.11Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M158.59,17.16h3.78v3.79h-3.78v-3.79Zm3.78,6.18v15.5h-3.78v-15.5h3.78Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M164.69,23.39h12.6l-.21,.41-6.07,11.38h6.09v3.67h-12.58l.21-.41,6.13-11.38h-6.16v-3.67Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M179.48,23.39h12.6l-.21,.41-6.07,11.38h6.09v3.67h-12.58l.21-.41,6.13-11.38h-6.16v-3.67Z"}),React.createElement("path",{fill:"#2d2d2d",d:"M204.03,23.7c.59,.19,1.16,.45,1.71,.79v-1.12h3.67v15.33h-3.67v-1.04c-.54,.33-1.11,.59-1.71,.79-.77,.24-1.55,.36-2.36,.36-1.05,0-2.05-.2-3.01-.6-.93-.39-1.75-.95-2.46-1.66-.72-.71-1.27-1.54-1.66-2.46-.4-.96-.6-1.96-.6-3.01s.2-2.05,.6-3.01c.39-.93,.95-1.75,1.66-2.46,.71-.71,1.54-1.27,2.46-1.66,.96-.4,1.96-.6,3.01-.6,.81,0,1.59,.12,2.36,.36Zm-2.31,3.31c-1.14-.01-2.11,.39-2.92,1.19-.79,.8-1.18,1.75-1.18,2.87s.39,2.08,1.18,2.87c.8,.79,1.75,1.18,2.87,1.18s2.07-.39,2.87-1.18c.8-.79,1.19-1.75,1.19-2.87s-.38-2.03-1.14-2.82-1.8-1.24-2.88-1.25Z"}),React.createElement("path",{fill:"#6b0bea",d:"M45.04,27.9s.2-1.39,.43-3.05l-2.93,2.14h0S8.94,51.47,8.94,51.47l5.69-31.9,.7-3.9h0c.51,.18,1.02,.37,1.52,.57,.12,.05,.23,.09,.35,.14,.51,.21,1.02,.42,1.53,.64h0s-4.69,26.31-4.69,26.31l24.7-17.99,7.44-5.44-1.04-2.44c-1.19-1.27-2.43-2.5-3.72-3.66-5.36-4.85-11.75-8.84-18.46-11.54-1.98-.8-5.85-2.02-6.02-2.07l-.6-.19-2.91,1.96,3.32,.9c.33,.11,.78,.25,1.28,.42,.06,.02,.12,.04,.18,.06,1.25,.41,2.78,.94,3.77,1.34,6.42,2.59,12.55,6.42,17.69,11.06,1.15,1.04,2.28,2.14,3.35,3.27l-25.28,18.42,.91-5.09,11.35-8.27,7.41-5.4-1.24-1.07c-1.32-1.14-2.71-2.23-4.16-3.25-.58-.41-1.17-.81-1.76-1.19-.3-.19-.6-.38-.9-.57-2.41-1.51-4.93-2.83-7.5-3.94-.16-.07-.33-.14-.5-.21-1.82-.77-3.68-1.44-5.55-2-.51-.15-1.02-.3-1.54-.44-.19-.05-.37-.09-.56-.14-.33-.09-.66-.17-.99-.25,0,0-.02,0-.03,0h0c-1.19-.29-2.38-.53-3.58-.73h0s-.89,.6-.89,.6l-.33,1.83L0,51.53l2.38,1.49,.81-4.59h0S10.45,7.77,10.45,7.77c.04,0,.08,.01,.11,.02,.12,.03,.24,.05,.37,.08,.33,.07,.67,.15,1,.22,.15,.03,.3,.07,.44,.11,.32,.08,.64,.16,.96,.24,.13,.04,.27,.07,.4,.11,.44,.12,.89,.25,1.33,.38,1.94,.58,3.88,1.28,5.76,2.1,4.3,1.85,8.46,4.35,12.14,7.29,.08,.06,.16,.12,.24,.19l-3.13,2.28c-.07-.05-.14-.1-.21-.16-.16-.12-.32-.24-.48-.36-.23-.17-.46-.34-.69-.5-.16-.11-.32-.23-.48-.34-.24-.17-.48-.33-.72-.49-.16-.11-.32-.22-.48-.32-.24-.16-.49-.32-.74-.48-.16-.1-.32-.21-.49-.31-.25-.16-.51-.31-.76-.46-.16-.1-.32-.19-.48-.29-.26-.15-.53-.3-.8-.45-.15-.09-.31-.17-.46-.26-.29-.16-.59-.31-.88-.46-.13-.07-.26-.14-.39-.2-.13-.06-.25-.12-.38-.19h0s-.9-.44-.9-.44c0,0,0,0,0,0l-1.53-.72v.03c-1.47-.63-2.98-1.19-4.5-1.67l-1.41-.45L6.14,52.31h0s-.49,2.76-.49,2.76l1.49,.93,1.13-.83L44.25,28.97l.71-.52,.08-.54Zm-25.62,0l1.73-9.72c.32,.17,.64,.33,.96,.51,.03,.02,.06,.03,.09,.05,.36,.2,.71,.4,1.07,.6,.06,.04,.13,.07,.19,.11,.76,.45,1.52,.92,2.25,1.41,.06,.04,.11,.08,.17,.11,.34,.23,.69,.47,1.02,.71,.02,.02,.05,.03,.07,.05,.3,.21,.59,.43,.88,.65l-8.57,6.24,.13-.72Z"}))));var U=t=>React.createElement("svg",{class:t.class,height:26,viewBox:"0 0 133 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},React.createElement("g",{transform:"translate(-1405, -631)",fill:"#FFFFFF","fill-rule":"nonzero"},React.createElement("g",{id:"INFINI-Pizza-logo-color-RGB",transform:"translate(1405, 631)"},React.createElement("polygon",{points:"33.2992216 11.07 35.680913 11.07 35.680913 24.9685714 33.2992216 24.9685714"}),React.createElement("polygon",{points:"37.6370756 24.9685714 37.6180221 11.0442857 46.579533 19.5621429 46.579533 11.0442857 48.9231173 11.0442857 48.9231173 24.9621429 39.9552552 16.4378571 39.9552552 24.975 37.6434268 24.975"}),React.createElement("polygon",{points:"62.2605893 11.07 64.6422807 11.07 64.6422807 24.9685714 62.2605893 24.9685714"}),React.createElement("polygon",{points:"50.9491428 11.0314286 60.2282126 11.0314286 60.2282126 13.2235714 53.3308342 13.2235714 53.3308342 16.9264286 59.2501313 16.9264286 59.2501313 19.1314286 53.3308342 19.1314286 53.3308342 24.9685714 50.9491428 24.9685714"}),React.createElement("polygon",{points:"66.8080321 24.9685714 66.7889786 11.0442857 75.7504895 19.5621429 75.7504895 11.0442857 78.0940738 11.0442857 78.0940738 24.9621429 69.1262117 16.4378571 69.1262117 24.975 66.8143833 24.975"}),React.createElement("polygon",{points:"80.0756411 11.07 82.4573325 11.07 82.4573325 24.9685714 80.0756411 24.9685714 80.0756411 11.07"}),React.createElement("path",{d:"M95.5026503,19.0221429 L90.4090063,19.0221429 L90.4090063,24.9685714 L88.2051478,24.9685714 L88.2051478,11.0314286 L95.528055,11.0314286 C95.528055,11.0314286 95.5661621,11.0314286 95.5661621,11.0314286 C96.6522134,11.0185714 97.5858364,11.4042857 98.36068,12.195 C99.1355236,12.9792857 99.5229454,13.9242857 99.5229454,15.03 C99.5229454,16.1357143 99.1355236,17.0807143 98.36068,17.8585714 C97.5921876,18.6428571 96.6649157,19.035 95.5661621,19.035 L95.5090015,19.035 L95.5026503,19.0221429 Z M90.4090063,13.2557143 L90.4090063,16.7785714 L95.5598109,16.7785714 C96.0425004,16.785 96.4553269,16.6178571 96.7982904,16.2707143 C97.1857122,15.8785714 97.3508428,15.3964286 97.3000334,14.8114286 C97.2682775,14.49 97.141254,14.175 96.9380163,13.9242857 C96.5696481,13.4742857 96.1123633,13.2492857 95.5661621,13.2492857 L90.4153574,13.2492857 L90.4090063,13.2557143 Z",id:"\u5F62\u72B6"}),React.createElement("path",{d:"M100.723318,11.0314286 L103.124063,11.0314286 L103.124063,13.4678571 L100.723318,13.4678571 L100.723318,11.0314286 Z M103.124063,15.0042857 L103.124063,24.9685714 L100.723318,24.9685714 L100.723318,15.0042857 L103.124063,15.0042857 L103.124063,15.0042857 Z",id:"\u5F62\u72B6"}),React.createElement("polygon",{points:"104.597536 15.0364286 112.600019 15.0364286 112.466644 15.3 108.61148 22.6157143 112.479347 22.6157143 112.479347 24.975 104.489566 24.975 104.622941 24.7114286 108.516212 17.3957143 104.603887 17.3957143 104.603887 15.0364286"}),React.createElement("polygon",{points:"113.990927 15.0364286 121.99341 15.0364286 121.860035 15.3 118.004871 22.6157143 121.872738 22.6157143 121.872738 24.975 113.882957 24.975 114.016332 24.7114286 117.909603 17.3957143 113.997278 17.3957143 113.997278 15.0364286"}),React.createElement("path",{d:"M129.583067,15.2357143 C129.957786,15.3578571 130.319803,15.525 130.669118,15.7435714 L130.669118,15.0235714 L133,15.0235714 L133,24.8785714 L130.669118,24.8785714 L130.669118,24.21 C130.326154,24.4221429 129.964137,24.5892857 129.583067,24.7178571 C129.094026,24.8721429 128.598634,24.9492857 128.084189,24.9492857 C127.417315,24.9492857 126.782198,24.8207143 126.172485,24.5635714 C125.581825,24.3128571 125.061029,23.9528571 124.610095,23.4964286 C124.15281,23.04 123.803496,22.5064286 123.5558,21.915 C123.301753,21.2978571 123.174729,20.655 123.174729,19.98 C123.174729,19.305 123.301753,18.6621429 123.5558,18.045 C123.803496,17.4471429 124.159161,16.92 124.610095,16.4635714 C125.061029,16.0071429 125.588176,15.6471429 126.172485,15.3964286 C126.782198,15.1392857 127.417315,15.0107143 128.084189,15.0107143 C128.598634,15.0107143 129.094026,15.0878571 129.583067,15.2421429 L129.583067,15.2357143 Z M128.115945,17.3635714 C127.391911,17.3571429 126.775846,17.6142857 126.261401,18.1285714 C125.759658,18.6428571 125.511962,19.2535714 125.511962,19.9735714 C125.511962,20.6935714 125.759658,21.3107143 126.261401,21.8185714 C126.769495,22.3264286 127.372857,22.5771429 128.084189,22.5771429 C128.795521,22.5771429 129.398883,22.3264286 129.906977,21.8185714 C130.415071,21.3107143 130.662767,20.6935714 130.662767,19.9735714 C130.662767,19.2535714 130.421422,18.6685714 129.938733,18.1607143 C129.456043,17.6528571 128.795521,17.3635714 128.109594,17.3571429 L128.115945,17.3635714 Z",id:"\u5F62\u72B6"}),React.createElement("path",{d:"M28.6057017,17.9357143 C28.6057017,17.9357143 28.7327253,17.0421429 28.8788023,15.975 L27.0179075,17.3507143 L27.0179075,17.3507143 C27.0179075,17.3507143 5.67795234,33.0878571 5.67795234,33.0878571 L9.29177212,12.5807143 L9.73635452,10.0735714 L9.73635452,10.0735714 C10.0602646,10.1892857 10.3841746,10.3114286 10.7017334,10.44 C10.7779476,10.4721429 10.8478105,10.4978571 10.9240246,10.53 C11.2479347,10.665 11.5718447,10.8 11.8957547,10.9414286 L11.8957547,10.9414286 C11.8957547,10.9414286 8.91705267,27.855 8.91705267,27.855 L24.6044601,16.29 L29.3297359,12.7928571 L28.6692135,11.2242857 C27.9134234,10.4078571 27.1258775,9.61714286 26.3065756,8.87142857 C22.9023447,5.75357143 18.8439425,3.18857143 14.5823027,1.45285714 C13.3247696,0.938571429 10.866864,0.154285714 10.758894,0.122142857 L10.3778234,0 L8.52963087,1.26 L10.6382217,1.83857143 C10.8478105,1.90928571 11.1336135,1.99928571 11.4511723,2.10857143 C11.4892794,2.12142857 11.5273865,2.13428571 11.5654935,2.14714286 C12.3593907,2.41071429 13.3311208,2.75142857 13.9598873,3.00857143 C18.037343,4.67357143 21.9306146,7.13571429 25.1951196,10.1185714 C25.925505,10.7871429 26.643188,11.4942857 27.322764,12.2207143 L11.2669882,24.0621429 L11.8449453,20.79 L19.0535313,15.4735714 L23.7597536,12.0021429 L22.9722076,11.3142857 C22.1338523,10.5814286 21.2510386,9.88071429 20.330118,9.225 C19.9617497,8.96142857 19.5870302,8.70428571 19.2123108,8.46 C19.0217755,8.33785714 18.8312402,8.21571429 18.6407048,8.09357143 C17.1100712,7.12285714 15.5095745,6.27428571 13.877322,5.56071429 C13.7757032,5.51571429 13.6677332,5.47071429 13.5597631,5.42571429 C12.4038489,4.93071429 11.22253,4.5 10.0348598,4.14 C9.71094981,4.04357143 9.38703978,3.94714286 9.05677857,3.85714286 C8.9361062,3.825 8.82178502,3.79928571 8.70111265,3.76714286 C8.4915238,3.70928571 8.28193496,3.65785714 8.07234612,3.60642857 C8.07234612,3.60642857 8.05964376,3.60642857 8.05329258,3.60642857 L8.05329258,3.60642857 C7.29750251,3.42 6.54171243,3.26571429 5.77957118,3.13714286 L5.77957118,3.13714286 C5.77957118,3.13714286 5.21431641,3.52285714 5.21431641,3.52285714 L5.00472757,4.69928571 L0,33.1264286 L1.51158015,34.0842857 L2.0260255,31.1335714 L2.0260255,31.1335714 C2.0260255,31.1335714 6.63698009,4.995 6.63698009,4.995 C6.6623848,4.995 6.6877895,5.00142857 6.70684304,5.00785714 C6.78305716,5.02714286 6.85927129,5.04 6.94183659,5.05928571 C7.15142543,5.10428571 7.36736546,5.15571429 7.5769543,5.20071429 C7.67222196,5.22 7.76748961,5.24571429 7.85640609,5.27142857 C8.05964376,5.32285714 8.26288143,5.37428571 8.4661191,5.42571429 C8.5486844,5.45142857 8.63760088,5.47071429 8.72016618,5.49642857 C8.99961797,5.57357143 9.28542094,5.65714286 9.56487274,5.74071429 C10.7970011,6.11357143 12.0291295,6.56357143 13.2231508,7.09071429 C15.9541569,8.28 18.5962466,9.88714286 20.9334798,11.7771429 C20.9842892,11.8157143 21.0350986,11.8542857 21.085908,11.8992857 L19.0979896,13.365 C19.0535313,13.3328571 19.0090731,13.3007143 18.9646149,13.2621429 C18.862996,13.185 18.7613772,13.1078571 18.6597584,13.0307143 C18.5136813,12.9214286 18.3676042,12.8121429 18.2215271,12.7092857 C18.1199083,12.6385714 18.0182895,12.5614286 17.9166706,12.4907143 C17.7642424,12.3814286 17.6118141,12.2785714 17.4593859,12.1757143 C17.3577671,12.105 17.2561482,12.0342857 17.1545294,11.97 C17.0021011,11.8671429 16.8433217,11.7642857 16.6845423,11.6614286 C16.5829235,11.5971429 16.4813046,11.5264286 16.3733346,11.4621429 C16.2145552,11.3592857 16.0494246,11.2628571 15.8906451,11.1664286 C15.7890263,11.1021429 15.6874075,11.0442857 15.5857886,10.98 C15.420658,10.8835714 15.2491763,10.7871429 15.0776945,10.6907143 C14.9824268,10.6328571 14.880808,10.5814286 14.7855403,10.5235714 C14.6013562,10.4207143 14.4108209,10.3242857 14.2266367,10.2278571 C14.1440714,10.1828571 14.0615061,10.1378571 13.9789408,10.0992857 C13.8963755,10.0607143 13.8201614,10.0221429 13.7375961,9.97714286 L13.7375961,9.97714286 C13.7375961,9.97714286 13.1659902,9.69428571 13.1659902,9.69428571 C13.1659902,9.69428571 13.1659902,9.69428571 13.1659902,9.69428571 L12.1942601,9.23142857 L12.1942601,9.25071429 C11.260637,8.84571429 10.3016093,8.48571429 9.33623036,8.17714286 L8.44071439,7.88785714 L3.89962275,33.6278571 L3.89962275,33.6278571 C3.89962275,33.6278571 3.58841507,35.4021429 3.58841507,35.4021429 L4.53474046,36 L5.25242348,35.4664286 L28.1039587,18.6235714 L28.5548923,18.2892857 L28.6057017,17.9421429 L28.6057017,17.9357143 Z M12.333986,17.9357143 L13.4327396,11.6871429 C13.6359773,11.7964286 13.8392149,11.8992857 14.0424526,12.015 C14.0615061,12.0278571 14.0805597,12.0342857 14.0996132,12.0471429 C14.3282556,12.1757143 14.5505468,12.3042857 14.7791892,12.4328571 C14.8172962,12.4585714 14.8617545,12.4778571 14.8998615,12.5035714 C15.382551,12.7928571 15.8652404,13.095 16.3288764,13.41 C16.3669834,13.4357143 16.3987393,13.4614286 16.4368464,13.4807143 C16.6527864,13.6285714 16.8750776,13.7828571 17.0846664,13.9371429 C17.0973688,13.95 17.1164223,13.9564286 17.1291247,13.9692857 C17.31966,14.1042857 17.5038441,14.2457143 17.6880283,14.3871429 L12.2450695,18.3985714 L12.3276348,17.9357143 L12.333986,17.9357143 Z",id:"\u5F62\u72B6"})))));var q=t=>React.createElement("svg",{class:t.class,"aria-label":t["aria-label"],xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},React.createElement("path",{fill:"currentColor",d:"M12 4a1 1 0 0 1 .707.293l6 6a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 12 4z"}));var Y=({translations:t={}})=>{let{selectText:e="to select",selectKeyAriaLabel:n="Enter key",navigateText:a="to navigate",navigateUpKeyAriaLabel:c="Arrow up",navigateDownKeyAriaLabel:d="Arrow down",closeText:p="to close",closeKeyAriaLabel:h="Escape key",poweredByText:o="Powered by"}=t;return React.createElement(React.Fragment,null,React.createElement("span",{class:"docsearch-modal-footer-commands"},React.createElement("li",null,React.createElement("kbd",{class:"docsearch-modal-footer-commands-key"},React.createElement(K,{"aria-label":n})),React.createElement("span",{class:"docsearch-modal-footer-commands-label"},e)),React.createElement("li",null,React.createElement("kbd",{class:"docsearch-modal-footer-commands-key"},React.createElement(O,{"aria-label":d})),React.createElement("kbd",{class:"docsearch-modal-footer-commands-key"},React.createElement(q,{"aria-label":c})),React.createElement("span",{class:"docsearch-modal-footer-commands-label"},a)),React.createElement("li",null,React.createElement("kbd",{class:"docsearch-modal-footer-commands-key"},React.createElement(N,{"aria-label":h})),React.createElement("span",{class:"docsearch-modal-footer-commands-label"},p))),React.createElement("span",{class:"docsearch-modal-footer-logo"},React.createElement("span",{class:"docsearch-modal-footer-logo-label"},o),React.createElement("a",{href:"https://pizza.rs/"},React.createElement(U,{class:"docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-dark"}),React.createElement($,{class:"docsearch-modal-footer-logo-icon docsearch-modal-footer-logo-light"}))))};import{onMount as g1,Show as f1}from"solid-js";var Q=t=>React.createElement("svg",{class:t.class,width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}));var J=t=>React.createElement("svg",{class:t.class,width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg"},React.createElement("path",{fill:"currentColor",d:"M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z"}));var W=({loading:t,query:e,onInput:n,onKeyDown:a,onReset:c,onClose:d,translations:p={}})=>{let{searchDocsPlaceHolder:h="Search",resetButtonTitle:o="Clear the query",resetButtonAriaLabel:i="Clear the query",cancelButtonText:l="Cancel",cancelButtonAriaLabel:g="Cancel"}=p,u;return g1(()=>u?.focus()),React.createElement(React.Fragment,null,React.createElement("form",{class:"docsearch-modal-search-input-form",onSubmit:m=>m.preventDefault(),onReset:c},React.createElement(f1,{when:t(),fallback:React.createElement(S,{class:"docsearch-modal-search-input-icon"})},React.createElement(J,{class:"docsearch-modal-search-input-icon docsearch-modal-search-input-loading-icon"})),React.createElement("input",{type:"search",class:"docsearch-modal-search-input",placeholder:h,value:e(),ref:u,onInput:n,onKeyDown:a}),React.createElement("button",{type:"reset",title:o,class:"docsearch-modal-search-input-reset","aria-label":i,hidden:!e()},React.createElement(Q,{class:"docsearch-modal-search-input-reset-icon"}))),React.createElement("button",{type:"reset","aria-label":g,class:"docsearch-modal-search-cancel-btn",onClick:d},l))};import{onCleanup as lt,onMount as ct}from"solid-js";function L1(t){if(!t||t.length===0)return[[],[]];let e=[],n=new Set;return t.forEach((a,c)=>{let d=a._source||{},p={index:c,category:d.category||"General",subcategory:d.subcategory||"",title:d.title||null,content:d.content||null,url:d.url||null};e.push(p),p.category&&n.add(p.category)}),[e,Array.from(n)]}var X=({searchClient:t,environment:e=window,translations:n={},onClose:a,initialQuery:c})=>{let{linkToTheResultAriaLabel:d="Link to the result"}=n;P(()=>document.body.classList.add("docsearch--active")),G(()=>document.body.classList.remove("docsearch--active"));let p,h;function o(){if(h){let s=window.innerHeight*.01;h.style.setProperty("--docsearch-vh",`${s}px`)}}P(()=>{o(),window.addEventListener("resize",o)}),G(()=>window.removeEventListener("resize",o));let[i,l]=C(!1),[g,u]=C(""),[m,f]=C(0),[L,F]=C([]),[v,I]=C([]),[x,w]=C(3),_=()=>v().length;function o1(s){if(s.key==="ArrowUp"||s.key==="ArrowDown"){s.preventDefault();let r=s.key==="ArrowDown";f(y=>r&&y===_()-1?0:!r&&y===0?_()-1:y+(r?1:-1)),document.getElementById(`docsearch-hit-item-${m()}`)?.scrollIntoView({block:m()===0?"center":"nearest",behavior:"smooth"})}s.key==="Enter"&&(s.preventDefault(),s.ctrlKey||s.metaKey?e.open(v()[m()].url??"","_blank","noopener")?.focus():s.shiftKey?e.open(v()[m()].url??"","_blank","noopener"):e.location.assign(v()[m()].url??""),!s.shiftKey&&!s.ctrlKey&&!s.metaKey&&a&&a())}function b(){l(!1),w(3),I([]),F([]),f(0)}function k(s){l(!0),t&&t().search(s,{attributesToHighlight:["*"],attributesToCrop:["content"],cropLength:30}).catch(r=>{b(),w(2),console.error(r)}).then(r=>{if(!r){b(),w(2);return}if(!r.hits||r.hits.length===0){b(),w(1);return}let[y,s1]=L1(r.hits);l(!1),w(y.length===0?1:0),f(0),I(y),F(s1)})}let n1=z(k,100);c&&P(()=>{u(c),k(c)});function r1(s){let r=s.currentTarget?.value;if(u(r),!r){b();return}n1(r)}return React.createElement("div",{class:"docsearch-modal-container",role:"button",tabIndex:0,ref:h,onMouseDown:s=>s.target===s.currentTarget&&a&&a()},React.createElement("div",{class:"docsearch-modal","use:trapFocus":{environment:e}},React.createElement("header",{class:"docsearch-modal-search-container"},React.createElement(W,{loading:i,query:g,onInput:r1,onKeyDown:o1,onReset:b,onClose:a,translations:n})),React.createElement("main",{class:"docsearch-modal-search-hits-container",ref:p},React.createElement(C1,null,React.createElement(H,{when:x()===3},React.createElement("div",{class:"docsearch-modal-empty-query"})),React.createElement(H,{when:x()===2},React.createElement("div",{class:"docsearch-modal-error"},React.createElement("p",{class:"docsearch-modal-title"},"An error has occured. Please try again..."))),React.createElement(H,{when:x()===1},React.createElement("div",{class:"docsearch-modal-no-search-hits"},React.createElement("p",{class:"docsearch-modal-title"},'No results for "',g(),'"'),React.createElement(y1,{when:L().length>0},React.createElement("div",{class:"docsearch-modal-no-search-hits-suggestions-list"},React.createElement("p",{class:"docsearch-modal-no-search-hits-help-text"},"Try searching for:"),React.createElement("ul",null,React.createElement(A,{each:L()},s=>React.createElement("li",null,React.createElement("button",{class:"docsearch-modal-no-search-hits-suggestion",type:"button",onClick:()=>u(s)},s)))))))),React.createElement(H,{when:x()===0},React.createElement(A,{each:L()},s=>React.createElement("section",null,React.createElement("div",{class:"docsearch-modal-search-hits-category"},s),React.createElement("ul",{role:"listbox"},React.createElement(A,{each:v().filter(r=>r.category===s)},r=>React.createElement("li",{role:"option","aria-selected":r.index===m(),id:`docsearch-hit-item-${r.index}`,onMouseEnter:()=>f(r.index),class:"docsearch-modal-search-hits-item",classList:{"docsearch-modal-search-hits-item--active":r.index===m()}},React.createElement("a",{href:r.url||"#","aria-label":d},React.createElement("span",{class:"docsearch-modal-search-hits-item-text-container"},React.createElement("p",{class:"docsearch-modal-search-hits-item-title",innerHTML:(r.subcategory||"")+(r.subcategory&&r.title&&" | ")+(r.title||"")}),React.createElement("p",{class:"docsearch-modal-search-hits-item-text",innerHTML:r.content||""})),React.createElement("span",{class:"docsearch-modal-search-hits-item-trailing-icon-container","aria-hidden":!0},React.createElement(K,{class:"docsearch-modal-search-hits-item-trailing-icon"}))))))))))),React.createElement("footer",{class:"docsearch-modal-footer"},React.createElement(Y,{translations:n}))))};import{Portal as b1}from"solid-js/web";import{Pizza as v1}from"pizza-wasm";var D=class{pizzaEngine;props;constructor({},e){console.log("Init Pizza Engine."),this.pizzaEngine=v1.new(),this.props=e}async load(e){try{let n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch file from ${e}: ${n.statusText}`);let a=await n.text();this.pizzaEngine.load_json_objects_array(a)?console.log(`Load ${e} and indexed successfully.`):console.error(`Failed to load ${e}`)}catch(n){console.error(`Error loading ${e}:`,n)}}async search(e,n={}){return this.pizzaEngine.search_by_query_string_with_default_operator(e,this?.props?.default_operator??"OR")}};import{createMemo as w1}from"solid-js";var j="0.1.0";function t1({clientAgents:t=[]},e){let n=new D({clientAgents:t.concat(`infini docs-searchbar.js (v${j})`)},e);return n.load("/index.json").then(()=>{console.log("Index loaded and indexed successfully.")}).catch(a=>{console.error("Failed to load index:",a)}),w1(()=>n)}var T1=["ctrl+k","s","/"],qt=t=>{let{environment:e=window,hotKeys:n=T1}=t,[a,c]=e1(!1),[d,p]=e1(),h=()=>c(!0),o=()=>c(!1),i=u=>p(u),l=()=>{let u=window.getSelection();u&&p(u.toString()),c(!0)},g=t1({clientAgents:[]},t);return V({isOpen:a,onOpen:h,onClose:o,onInput:i,hotKeys:n}),React.createElement(React.Fragment,null,React.createElement(Z,{translations:t?.translations?.button,hotKeys:n,onClick:l}),a()&&React.createElement(b1,{mount:e.document.body},React.createElement(X,{...t,searchClient:g,initialQuery:d(),onClose:o,translations:t?.translations?.modal})))};export{qt as DocSearch,Z as DocSearchButton,X as DocSearchModal,L1 as convertHitsToFormattedHits,V as useDocSearchHotKeys};
