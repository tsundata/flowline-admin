"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[905],{24969:function(ce,_,s){s.d(_,{Z:function(){return $}});var C=s(1413),B=s(67294),Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Ce=Se,Ie=s(84089),xe=function(E,ue){return B.createElement(Ie.Z,(0,C.Z)((0,C.Z)({},E),{},{ref:ue,icon:Ce}))};xe.displayName="PlusOutlined";var $=B.forwardRef(xe)},57179:function(ce,_,s){var C=s(67226),B=s(56887)},17997:function(ce,_,s){var C=s(67226),B=s(75800),Se=s(42840),Ce=s(47873)},42840:function(ce,_,s){var C=s(67226),B=s(13817)},56887:function(ce,_,s){var C=s(67226)},47873:function(ce,_,s){var C=s(67226)},96619:function(ce,_,s){s.d(_,{Z:function(){return ma}});var C=s(4942),B=s(87462),Se=s(97937),Ce=s(89705),Ie=s(24969),xe=s(94184),$=s.n(xe),F=s(1413),E=s(97685),ue=s(71002),Ee=s(45987),t=s(67294),Zt=s(31131),Ue=s(21770),Pt=s(82225),Te=(0,t.createContext)(null),Nt=t.forwardRef(function(e,a){var o=e.prefixCls,n=e.className,r=e.style,i=e.id,l=e.active,c=e.tabKey,u=e.children;return t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(c),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(c),"aria-hidden":!l,style:r,className:$()(o,l&&"".concat(o,"-active"),n),ref:a},u)}),Fe=Nt,kt=["key","forceRender","style","className"];function Rt(e){var a=e.id,o=e.activeKey,n=e.animated,r=e.tabPosition,i=e.destroyInactiveTabPane,l=t.useContext(Te),c=l.prefixCls,u=l.tabs,g=n.tabPane,T="".concat(c,"-tabpane");return t.createElement("div",{className:$()("".concat(c,"-content-holder"))},t.createElement("div",{className:$()("".concat(c,"-content"),"".concat(c,"-content-").concat(r),(0,C.Z)({},"".concat(c,"-content-animated"),g))},u.map(function(d){var x=d.key,k=d.forceRender,R=d.style,I=d.className,O=(0,Ee.Z)(d,kt),A=x===o;return t.createElement(Pt.ZP,(0,B.Z)({key:x,visible:A,forceRender:k,removeOnLeave:!!i,leavedClassName:"".concat(T,"-hidden")},n.tabPaneMotion),function(M,Z){var W=M.style,z=M.className;return t.createElement(Fe,(0,B.Z)({},O,{prefixCls:T,id:a,tabKey:x,animated:g,active:A,style:(0,F.Z)((0,F.Z)({},R),W),className:$()(I,z),ref:Z}))})})))}var He=s(74902),Ge=s(48555),It=s(66680),Xe=s(75164),wt=s(42550),Ye={width:0,height:0,left:0,top:0};function At(e,a,o){return(0,t.useMemo)(function(){for(var n,r=new Map,i=a.get((n=e[0])===null||n===void 0?void 0:n.key)||Ye,l=i.left+i.width,c=0;c<e.length;c+=1){var u=e[c].key,g=a.get(u);if(!g){var T;g=a.get((T=e[c-1])===null||T===void 0?void 0:T.key)||Ye}var d=r.get(u)||(0,F.Z)({},g);d.right=l-d.left-d.width,r.set(u,d)}return r},[e.map(function(n){return n.key}).join("_"),a,o])}function Qe(e,a){var o=t.useRef(e),n=t.useState({}),r=(0,E.Z)(n,2),i=r[1];function l(c){var u=typeof c=="function"?c(o.current):c;u!==o.current&&a(u,o.current),o.current=u,i({})}return[o.current,l]}var Lt=.1,Je=.01,Ze=20,qe=Math.pow(.995,Ze);function Mt(e,a){var o=(0,t.useState)(),n=(0,E.Z)(o,2),r=n[0],i=n[1],l=(0,t.useState)(0),c=(0,E.Z)(l,2),u=c[0],g=c[1],T=(0,t.useState)(0),d=(0,E.Z)(T,2),x=d[0],k=d[1],R=(0,t.useState)(),I=(0,E.Z)(R,2),O=I[0],A=I[1],M=(0,t.useRef)();function Z(f){var h=f.touches[0],v=h.screenX,N=h.screenY;i({x:v,y:N}),window.clearInterval(M.current)}function W(f){if(r){f.preventDefault();var h=f.touches[0],v=h.screenX,N=h.screenY;i({x:v,y:N});var p=v-r.x,S=N-r.y;a(p,S);var G=Date.now();g(G),k(G-u),A({x:p,y:S})}}function z(){if(r&&(i(null),A(null),O)){var f=O.x/x,h=O.y/x,v=Math.abs(f),N=Math.abs(h);if(Math.max(v,N)<Lt)return;var p=f,S=h;M.current=window.setInterval(function(){if(Math.abs(p)<Je&&Math.abs(S)<Je){window.clearInterval(M.current);return}p*=qe,S*=qe,a(p*Ze,S*Ze)},Ze)}}var w=(0,t.useRef)();function P(f){var h=f.deltaX,v=f.deltaY,N=0,p=Math.abs(h),S=Math.abs(v);p===S?N=w.current==="x"?h:v:p>S?(N=h,w.current="x"):(N=v,w.current="y"),a(-N,-N)&&f.preventDefault()}var D=(0,t.useRef)(null);D.current={onTouchStart:Z,onTouchMove:W,onTouchEnd:z,onWheel:P},t.useEffect(function(){function f(p){D.current.onTouchStart(p)}function h(p){D.current.onTouchMove(p)}function v(p){D.current.onTouchEnd(p)}function N(p){D.current.onWheel(p)}return document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",v,{passive:!1}),e.current.addEventListener("touchstart",f,{passive:!1}),e.current.addEventListener("wheel",N),function(){document.removeEventListener("touchmove",h),document.removeEventListener("touchend",v)}},[])}var Ot=s(8410);function _e(e){var a=(0,t.useState)(0),o=(0,E.Z)(a,2),n=o[0],r=o[1],i=(0,t.useRef)(0),l=(0,t.useRef)();return l.current=e,(0,Ot.o)(function(){var c;(c=l.current)===null||c===void 0||c.call(l)},[n]),function(){i.current===n&&(i.current+=1,r(i.current))}}function Bt(e){var a=(0,t.useRef)([]),o=(0,t.useState)({}),n=(0,E.Z)(o,2),r=n[1],i=(0,t.useRef)(typeof e=="function"?e():e),l=_e(function(){var u=i.current;a.current.forEach(function(g){u=g(u)}),a.current=[],i.current=u,r({})});function c(u){a.current.push(u),l()}return[i.current,c]}var et={width:0,height:0,left:0,top:0,right:0};function zt(e,a,o,n,r,i,l){var c=l.tabs,u=l.tabPosition,g=l.rtl,T,d,x;return["top","bottom"].includes(u)?(T="width",d=g?"right":"left",x=Math.abs(o)):(T="height",d="top",x=-o),(0,t.useMemo)(function(){if(!c.length)return[0,0];for(var k=c.length,R=k,I=0;I<k;I+=1){var O=e.get(c[I].key)||et;if(O[d]+O[T]>x+a){R=I-1;break}}for(var A=0,M=k-1;M>=0;M-=1){var Z=e.get(c[M].key)||et;if(Z[d]<x){A=M+1;break}}return[A,R]},[e,a,n,r,i,x,u,c.map(function(k){return k.key}).join("_"),g])}function tt(e){var a;return e instanceof Map?(a={},e.forEach(function(o,n){a[n]=o})):a=e,JSON.stringify(a)}var Dt="TABS_DQ";function at(e){return String(e).replace(/"/g,Dt)}function Kt(e,a){var o=e.prefixCls,n=e.editable,r=e.locale,i=e.style;return!n||n.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(o,"-nav-add"),style:i,"aria-label":(r==null?void 0:r.addAriaLabel)||"Add tab",onClick:function(c){n.onEdit("add",{event:c})}},n.addIcon||"+")}var nt=t.forwardRef(Kt),Vt=t.forwardRef(function(e,a){var o=e.position,n=e.prefixCls,r=e.extra;if(!r)return null;var i,l={};return(0,ue.Z)(r)==="object"&&!t.isValidElement(r)?l=r:l.right=r,o==="right"&&(i=l.right),o==="left"&&(i=l.left),i?t.createElement("div",{className:"".concat(n,"-extra-content"),ref:a},i):null}),rt=Vt,Wt=s(60057),ot=s(97868),X=s(15105);function $t(e,a){var o=e.prefixCls,n=e.id,r=e.tabs,i=e.locale,l=e.mobile,c=e.moreIcon,u=c===void 0?"More":c,g=e.moreTransitionName,T=e.style,d=e.className,x=e.editable,k=e.tabBarGutter,R=e.rtl,I=e.removeAriaLabel,O=e.onTabClick,A=e.getPopupContainer,M=e.popupClassName,Z=(0,t.useState)(!1),W=(0,E.Z)(Z,2),z=W[0],w=W[1],P=(0,t.useState)(null),D=(0,E.Z)(P,2),f=D[0],h=D[1],v="".concat(n,"-more-popup"),N="".concat(o,"-dropdown"),p=f!==null?"".concat(v,"-").concat(f):null,S=i==null?void 0:i.dropdownAriaLabel;function G(m,K){m.preventDefault(),m.stopPropagation(),x.onEdit("remove",{key:K,event:m})}var fe=t.createElement(ot.ZP,{onClick:function(K){var Y=K.key,U=K.domEvent;O(Y,U),w(!1)},prefixCls:"".concat(N,"-menu"),id:v,tabIndex:-1,role:"listbox","aria-activedescendant":p,selectedKeys:[f],"aria-label":S!==void 0?S:"expanded dropdown"},r.map(function(m){var K=x&&m.closable!==!1&&!m.disabled;return t.createElement(ot.sN,{key:m.key,id:"".concat(v,"-").concat(m.key),role:"option","aria-controls":n&&"".concat(n,"-panel-").concat(m.key),disabled:m.disabled},t.createElement("span",null,m.label),K&&t.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(N,"-menu-item-remove"),onClick:function(U){U.stopPropagation(),G(U,m.key)}},m.closeIcon||x.removeIcon||"\xD7"))}));function ee(m){for(var K=r.filter(function(le){return!le.disabled}),Y=K.findIndex(function(le){return le.key===f})||0,U=K.length,te=0;te<U;te+=1){Y=(Y+m+U)%U;var ve=K[Y];if(!ve.disabled){h(ve.key);return}}}function H(m){var K=m.which;if(!z){[X.Z.DOWN,X.Z.SPACE,X.Z.ENTER].includes(K)&&(w(!0),m.preventDefault());return}switch(K){case X.Z.UP:ee(-1),m.preventDefault();break;case X.Z.DOWN:ee(1),m.preventDefault();break;case X.Z.ESC:w(!1);break;case X.Z.SPACE:case X.Z.ENTER:f!==null&&O(f,m);break}}(0,t.useEffect)(function(){var m=document.getElementById(p);m&&m.scrollIntoView&&m.scrollIntoView(!1)},[f]),(0,t.useEffect)(function(){z||h(null)},[z]);var q=(0,C.Z)({},R?"marginRight":"marginLeft",k);r.length||(q.visibility="hidden",q.order=1);var me=$()((0,C.Z)({},"".concat(N,"-rtl"),R)),ie=l?null:t.createElement(Wt.Z,{prefixCls:N,overlay:fe,trigger:["hover"],visible:r.length?z:!1,transitionName:g,onVisibleChange:w,overlayClassName:$()(me,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:A},t.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":v,id:"".concat(n,"-more"),"aria-expanded":z,onKeyDown:H},u));return t.createElement("div",{className:$()("".concat(o,"-nav-operations"),d),style:T,ref:a},ie,t.createElement(nt,{prefixCls:o,locale:i,editable:x}))}var jt=t.memo(t.forwardRef($t),function(e,a){return a.tabMoving});function Ut(e){var a,o=e.prefixCls,n=e.id,r=e.active,i=e.tab,l=i.key,c=i.label,u=i.disabled,g=i.closeIcon,T=e.closable,d=e.renderWrapper,x=e.removeAriaLabel,k=e.editable,R=e.onClick,I=e.onFocus,O=e.style,A="".concat(o,"-tab"),M=k&&T!==!1&&!u;function Z(w){u||R(w)}function W(w){w.preventDefault(),w.stopPropagation(),k.onEdit("remove",{key:l,event:w})}var z=t.createElement("div",{key:l,"data-node-key":at(l),className:$()(A,(a={},(0,C.Z)(a,"".concat(A,"-with-remove"),M),(0,C.Z)(a,"".concat(A,"-active"),r),(0,C.Z)(a,"".concat(A,"-disabled"),u),a)),style:O,onClick:Z},t.createElement("div",{role:"tab","aria-selected":r,id:n&&"".concat(n,"-tab-").concat(l),className:"".concat(A,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(l),"aria-disabled":u,tabIndex:u?null:0,onClick:function(P){P.stopPropagation(),Z(P)},onKeyDown:function(P){[X.Z.SPACE,X.Z.ENTER].includes(P.which)&&(P.preventDefault(),Z(P))},onFocus:I},c),M&&t.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(A,"-remove"),onClick:function(P){P.stopPropagation(),W(P)}},g||k.removeIcon||"\xD7"));return d?d(z):z}var Ft=Ut,de=function(a){var o=a.current||{},n=o.offsetWidth,r=n===void 0?0:n,i=o.offsetHeight,l=i===void 0?0:i;return[r,l]},Pe=function(a,o){return a[o?0:1]};function Ht(e,a){var o,n=t.useContext(Te),r=n.prefixCls,i=n.tabs,l=e.className,c=e.style,u=e.id,g=e.animated,T=e.activeKey,d=e.rtl,x=e.extra,k=e.editable,R=e.locale,I=e.tabPosition,O=e.tabBarGutter,A=e.children,M=e.onTabClick,Z=e.onTabScroll,W=(0,t.useRef)(),z=(0,t.useRef)(),w=(0,t.useRef)(),P=(0,t.useRef)(),D=(0,t.useRef)(),f=(0,t.useRef)(),h=(0,t.useRef)(),v=I==="top"||I==="bottom",N=Qe(0,function(y,b){v&&Z&&Z({direction:y>b?"left":"right"})}),p=(0,E.Z)(N,2),S=p[0],G=p[1],fe=Qe(0,function(y,b){!v&&Z&&Z({direction:y>b?"top":"bottom"})}),ee=(0,E.Z)(fe,2),H=ee[0],q=ee[1],me=(0,t.useState)([0,0]),ie=(0,E.Z)(me,2),m=ie[0],K=ie[1],Y=(0,t.useState)([0,0]),U=(0,E.Z)(Y,2),te=U[0],ve=U[1],le=(0,t.useState)([0,0]),be=(0,E.Z)(le,2),we=be[0],Ae=be[1],Le=(0,t.useState)([0,0]),pe=(0,E.Z)(Le,2),Me=pe[0],Oe=pe[1],L=Bt(new Map),ae=(0,E.Z)(L,2),he=ae[0],ba=ae[1],Ne=At(i,he,te[0]),Be=Pe(m,v),ye=Pe(te,v),ze=Pe(we,v),ct=Pe(Me,v),ut=Be<ye+ze,Q=ut?Be-ct:Be-ze,pa="".concat(r,"-nav-operations-hidden"),ne=0,se=0;v&&d?(ne=0,se=Math.max(0,ye-Q)):(ne=Math.min(0,Q-ye),se=0);function De(y){return y<ne?ne:y>se?se:y}var dt=(0,t.useRef)(),ha=(0,t.useState)(),vt=(0,E.Z)(ha,2),ke=vt[0],ft=vt[1];function Ke(){ft(Date.now())}function Ve(){window.clearTimeout(dt.current)}Mt(P,function(y,b){function V(j,oe){j(function(J){var Pa=De(J+oe);return Pa})}return ut?(v?V(G,y):V(q,b),Ve(),Ke(),!0):!1}),(0,t.useEffect)(function(){return Ve(),ke&&(dt.current=window.setTimeout(function(){ft(0)},100)),Ve},[ke]);var ya=zt(Ne,Q,v?S:H,ye,ze,ct,(0,F.Z)((0,F.Z)({},e),{},{tabs:i})),mt=(0,E.Z)(ya,2),ga=mt[0],Sa=mt[1],bt=(0,It.Z)(function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T,b=Ne.get(y)||{width:0,height:0,left:0,right:0,top:0};if(v){var V=S;d?b.right<S?V=b.right:b.right+b.width>S+Q&&(V=b.right+b.width-Q):b.left<-S?V=-b.left:b.left+b.width>-S+Q&&(V=-(b.left+b.width-Q)),q(0),G(De(V))}else{var j=H;b.top<-H?j=-b.top:b.top+b.height>-H+Q&&(j=-(b.top+b.height-Q)),G(0),q(De(j))}}),Re={};I==="top"||I==="bottom"?Re[d?"marginRight":"marginLeft"]=O:Re.marginTop=O;var pt=i.map(function(y,b){var V=y.key;return t.createElement(Ft,{id:u,prefixCls:r,key:V,tab:y,style:b===0?void 0:Re,closable:y.closable,editable:k,active:V===T,renderWrapper:A,removeAriaLabel:R==null?void 0:R.removeAriaLabel,onClick:function(oe){M(V,oe)},onFocus:function(){bt(V),Ke(),P.current&&(d||(P.current.scrollLeft=0),P.current.scrollTop=0)}})}),ht=function(){return ba(function(){var b=new Map;return i.forEach(function(V){var j,oe=V.key,J=(j=D.current)===null||j===void 0?void 0:j.querySelector('[data-node-key="'.concat(at(oe),'"]'));J&&b.set(oe,{width:J.offsetWidth,height:J.offsetHeight,left:J.offsetLeft,top:J.offsetTop})}),b})};(0,t.useEffect)(function(){ht()},[i.map(function(y){return y.key}).join("_")]);var We=_e(function(){var y=de(W),b=de(z),V=de(w);K([y[0]-b[0]-V[0],y[1]-b[1]-V[1]]);var j=de(h);Ae(j);var oe=de(f);Oe(oe);var J=de(D);ve([J[0]-j[0],J[1]-j[1]]),ht()}),Ca=i.slice(0,ga),xa=i.slice(Sa+1),yt=[].concat((0,He.Z)(Ca),(0,He.Z)(xa)),Ea=(0,t.useState)(),gt=(0,E.Z)(Ea,2),Ta=gt[0],Za=gt[1],re=Ne.get(T),St=(0,t.useRef)();function Ct(){Xe.Z.cancel(St.current)}(0,t.useEffect)(function(){var y={};return re&&(v?(d?y.right=re.right:y.left=re.left,y.width=re.width):(y.top=re.top,y.height=re.height)),Ct(),St.current=(0,Xe.Z)(function(){Za(y)}),Ct},[re,v,d]),(0,t.useEffect)(function(){bt()},[T,ne,se,tt(re),tt(Ne),v]),(0,t.useEffect)(function(){We()},[d]);var xt=!!yt.length,ge="".concat(r,"-nav-wrap"),$e,je,Et,Tt;return v?d?(je=S>0,$e=S!==se):($e=S<0,je=S!==ne):(Et=H<0,Tt=H!==ne),t.createElement(Ge.Z,{onResize:We},t.createElement("div",{ref:(0,wt.x1)(a,W),role:"tablist",className:$()("".concat(r,"-nav"),l),style:c,onKeyDown:function(){Ke()}},t.createElement(rt,{ref:z,position:"left",extra:x,prefixCls:r}),t.createElement("div",{className:$()(ge,(o={},(0,C.Z)(o,"".concat(ge,"-ping-left"),$e),(0,C.Z)(o,"".concat(ge,"-ping-right"),je),(0,C.Z)(o,"".concat(ge,"-ping-top"),Et),(0,C.Z)(o,"".concat(ge,"-ping-bottom"),Tt),o)),ref:P},t.createElement(Ge.Z,{onResize:We},t.createElement("div",{ref:D,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(S,"px, ").concat(H,"px)"),transition:ke?"none":void 0}},pt,t.createElement(nt,{ref:h,prefixCls:r,locale:R,editable:k,style:(0,F.Z)((0,F.Z)({},pt.length===0?void 0:Re),{},{visibility:xt?"hidden":null})}),t.createElement("div",{className:$()("".concat(r,"-ink-bar"),(0,C.Z)({},"".concat(r,"-ink-bar-animated"),g.inkBar)),style:Ta})))),t.createElement(jt,(0,B.Z)({},e,{removeAriaLabel:R==null?void 0:R.removeAriaLabel,ref:f,prefixCls:r,tabs:yt,className:!xt&&pa,tabMoving:!!ke})),t.createElement(rt,{ref:w,position:"right",extra:x,prefixCls:r})))}var it=t.forwardRef(Ht),Gt=["renderTabBar"],Xt=["label","key"];function Yt(e){var a=e.renderTabBar,o=(0,Ee.Z)(e,Gt),n=t.useContext(Te),r=n.tabs;if(a){var i=(0,F.Z)((0,F.Z)({},o),{},{panes:r.map(function(l){var c=l.label,u=l.key,g=(0,Ee.Z)(l,Xt);return t.createElement(Fe,(0,B.Z)({tab:c,key:u,tabKey:u},g))})});return a(i,it)}return t.createElement(it,o)}var Na=s(80334);function Qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=(0,F.Z)({inkBar:!0},(0,ue.Z)(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var Jt=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],lt=0;function qt(e,a){var o,n=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,u=e.direction,g=e.activeKey,T=e.defaultActiveKey,d=e.editable,x=e.animated,k=e.tabPosition,R=k===void 0?"top":k,I=e.tabBarGutter,O=e.tabBarStyle,A=e.tabBarExtraContent,M=e.locale,Z=e.moreIcon,W=e.moreTransitionName,z=e.destroyInactiveTabPane,w=e.renderTabBar,P=e.onChange,D=e.onTabClick,f=e.onTabScroll,h=e.getPopupContainer,v=e.popupClassName,N=(0,Ee.Z)(e,Jt),p=t.useMemo(function(){return(c||[]).filter(function(L){return L&&(0,ue.Z)(L)==="object"&&"key"in L})},[c]),S=u==="rtl",G=Qt(x),fe=(0,t.useState)(!1),ee=(0,E.Z)(fe,2),H=ee[0],q=ee[1];(0,t.useEffect)(function(){q((0,Zt.Z)())},[]);var me=(0,Ue.Z)(function(){var L;return(L=p[0])===null||L===void 0?void 0:L.key},{value:g,defaultValue:T}),ie=(0,E.Z)(me,2),m=ie[0],K=ie[1],Y=(0,t.useState)(function(){return p.findIndex(function(L){return L.key===m})}),U=(0,E.Z)(Y,2),te=U[0],ve=U[1];(0,t.useEffect)(function(){var L=p.findIndex(function(he){return he.key===m});if(L===-1){var ae;L=Math.max(0,Math.min(te,p.length-1)),K((ae=p[L])===null||ae===void 0?void 0:ae.key)}ve(L)},[p.map(function(L){return L.key}).join("_"),m,te]);var le=(0,Ue.Z)(null,{value:n}),be=(0,E.Z)(le,2),we=be[0],Ae=be[1];(0,t.useEffect)(function(){n||(Ae("rc-tabs-".concat(lt)),lt+=1)},[]);function Le(L,ae){D==null||D(L,ae);var he=L!==m;K(L),he&&(P==null||P(L))}var pe={id:we,activeKey:m,animated:G,tabPosition:R,rtl:S,mobile:H},Me,Oe=(0,F.Z)((0,F.Z)({},pe),{},{editable:d,locale:M,moreIcon:Z,moreTransitionName:W,tabBarGutter:I,onTabClick:Le,onTabScroll:f,extra:A,style:O,panes:null,getPopupContainer:h,popupClassName:v});return t.createElement(Te.Provider,{value:{tabs:p,prefixCls:i}},t.createElement("div",(0,B.Z)({ref:a,id:n,className:$()(i,"".concat(i,"-").concat(R),(o={},(0,C.Z)(o,"".concat(i,"-mobile"),H),(0,C.Z)(o,"".concat(i,"-editable"),d),(0,C.Z)(o,"".concat(i,"-rtl"),S),o),l)},N),Me,t.createElement(Yt,(0,B.Z)({},Oe,{renderTabBar:w})),t.createElement(Rt,(0,B.Z)({destroyInactiveTabPane:z},pe,{animated:G}))))}var _t=t.forwardRef(qt),ea=_t,ta=ea,aa=s(53124),na=s(97647),ra=s(33603),oa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ia(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},o;return a===!1?o={inkBar:!1,tabPane:!1}:a===!0?o={inkBar:!0,tabPane:!0}:o=(0,B.Z)({inkBar:!0},(0,ue.Z)(a)==="object"?a:{}),o.tabPane&&(o.tabPaneMotion=(0,B.Z)((0,B.Z)({},oa),{motionName:(0,ra.mL)(e,"switch")})),o}var la=s(50344),sa=function(e,a){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function ca(e){return e.filter(function(a){return a})}function ua(e,a){if(e)return e;var o=(0,la.Z)(a).map(function(n){if(t.isValidElement(n)){var r=n.key,i=n.props,l=i||{},c=l.tab,u=sa(l,["tab"]),g=(0,B.Z)((0,B.Z)({key:String(r)},u),{label:c});return g}return null});return ca(o)}var da=function(){return null},va=da,fa=function(e,a){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function st(e){var a=e.type,o=e.className,n=e.size,r=e.onEdit,i=e.hideAdd,l=e.centered,c=e.addIcon,u=e.children,g=e.items,T=e.animated,d=fa(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),x=d.prefixCls,k=d.moreIcon,R=k===void 0?t.createElement(Ce.Z,null):k,I=t.useContext(aa.E_),O=I.getPrefixCls,A=I.direction,M=I.getPopupContainer,Z=O("tabs",x),W;a==="editable-card"&&(W={onEdit:function(f,h){var v=h.key,N=h.event;r==null||r(f==="add"?N:v,f)},removeIcon:t.createElement(Se.Z,null),addIcon:c||t.createElement(Ie.Z,null),showAdd:i!==!0});var z=O(),w=ua(g,u),P=ia(Z,T);return t.createElement(na.Z.Consumer,null,function(D){var f,h=n!==void 0?n:D;return t.createElement(ta,(0,B.Z)({direction:A,getPopupContainer:M,moreTransitionName:"".concat(z,"-slide-up")},d,{items:w,className:$()((f={},(0,C.Z)(f,"".concat(Z,"-").concat(h),h),(0,C.Z)(f,"".concat(Z,"-card"),["card","editable-card"].includes(a)),(0,C.Z)(f,"".concat(Z,"-editable-card"),a==="editable-card"),(0,C.Z)(f,"".concat(Z,"-centered"),l),f),o),editable:W,moreIcon:R,prefixCls:Z,animated:P}))})}st.TabPane=va;var ma=st}}]);
