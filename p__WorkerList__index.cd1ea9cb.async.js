"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[74],{62266:function(ne,W,e){var I=e(97983),E=e.n(I),G=e(40794),P=e.n(G),U=e(80242),C=e(20397),f=e(36275),A=e(20550),k=e(67294),h=e(85893),g=function(S){var O=(0,k.useRef)();k.useEffect(function(){var j;(j=O.current)===null||j===void 0||j.reload()},[S.uid]);var H=[{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.name",defaultMessage:"Event name"}),dataIndex:"name"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.common.state",defaultMessage:"Type"}),dataIndex:"type",renderText:function(T){return(0,h.jsx)(A.Z,{color:T=="Warning"?"orange":"blue",children:T})}},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.reason",defaultMessage:"Reason"}),dataIndex:"reason"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.message",defaultMessage:"Message"}),dataIndex:"message"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.count",defaultMessage:"Count"}),dataIndex:"count"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.source",defaultMessage:"Source"}),dataIndex:"source",renderText:function(T){return"".concat(T.component?T.component:""," ").concat(T.host?T.host:"")}},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.firstTimestamp",defaultMessage:"First time"}),dataIndex:"firstTimestamp",valueType:"dateTime"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.lastTimestamp",defaultMessage:"Last time"}),dataIndex:"lastTimestamp",valueType:"dateTime"},{title:(0,h.jsx)(f.FormattedMessage,{id:"pages.eventList.eventTime",defaultMessage:"Event time"}),dataIndex:"eventTime",valueType:"dateTime"}];return(0,h.jsx)(C.Z,{rowKey:"uid",search:!1,actionRef:O,request:P()(E()().mark(function j(){var T;return E()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,(0,U.A3)({uid:S.uid});case 2:return T=M.sent,M.abrupt("return",{data:T.items,success:!0});case 4:case"end":return M.stop()}},j)})),columns:H})};W.Z=g},23288:function(ne,W,e){e.r(W),e.d(W,{default:function(){return me}});var I=e(97983),E=e.n(I),G=e(40794),P=e.n(G),U=e(12741),C=e.n(U),f=e(62266),A=e(97548),k=e(11281),h=e.n(k),g=e(36275),Z=null,S=null,O=null,H=null,j=null,T=null;function K(n,t){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/apps/v1/worker",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},d||{})));case 1:case"end":return s.stop()}},n)})),M.apply(this,arguments)}function V(n,t){return Q.apply(this,arguments)}function Q(){return Q=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d){var i,s;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i=t.uid,s=_objectWithoutProperties(t,Z),p.abrupt("return",request("/api/apps/v1/worker/".concat(i),_objectSpread({method:"GET",params:_objectSpread({},s)},d||{})));case 2:case"end":return p.stop()}},n)})),Q.apply(this,arguments)}function Y(n,t,d){return z.apply(this,arguments)}function z(){return z=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d,i){var s,w;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return s=t.uid,w=_objectWithoutProperties(t,S),_.abrupt("return",request("/api/apps/v1/worker/".concat(s),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},w),data:d},i||{})));case 2:case"end":return _.stop()}},n)})),z.apply(this,arguments)}function J(n,t){return N.apply(this,arguments)}function N(){return N=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d){var i,s;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i=t.uid,s=_objectWithoutProperties(t,O),p.abrupt("return",request("/api/apps/v1/worker/".concat(i),_objectSpread({method:"DELETE",params:_objectSpread({},s)},d||{})));case 2:case"end":return p.stop()}},n)})),N.apply(this,arguments)}function X(n,t,d){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d,i){var s,w;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return s=t.uid,w=_objectWithoutProperties(t,H),_.abrupt("return",request("/api/apps/v1/worker/".concat(s),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},w),data:d},i||{})));case 2:case"end":return _.stop()}},n)})),$.apply(this,arguments)}function q(n,t,d){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d,i){var s,w;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return s=t.uid,w=_objectWithoutProperties(t,j),_.abrupt("return",request("/api/apps/v1/worker/".concat(s,"/heartbeat"),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},w),data:d},i||{})));case 2:case"end":return _.stop()}},n)})),F.apply(this,arguments)}function ee(n,t){return te.apply(this,arguments)}function te(){return te=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d){var i,s;return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return i=t.uid,s=_objectWithoutProperties(t,T),p.abrupt("return",request("/api/apps/v1/worker/".concat(i,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},s)},d||{})));case 2:case"end":return p.stop()}},n)})),te.apply(this,arguments)}function B(n){return r.apply(this,arguments)}function r(){return r=P()(E()().mark(function n(t){return E()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,g.request)("/api/apps/v1/worker/list",h()({method:"GET"},t||{})));case 1:case"end":return i.stop()}},n)})),r.apply(this,arguments)}function a(n,t){return l.apply(this,arguments)}function l(){return l=_asyncToGenerator(_regeneratorRuntime().mark(function n(t,d){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/apps/v1/worker/register",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},d||{})));case 1:case"end":return s.stop()}},n)})),l.apply(this,arguments)}function o(n){return u.apply(this,arguments)}function u(){return u=_asyncToGenerator(_regeneratorRuntime().mark(function n(t){return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",request("/api/apps/v1/worker/watch",_objectSpread({method:"GET"},t||{})));case 1:case"end":return i.stop()}},n)})),u.apply(this,arguments)}var R=e(52077),c=e(20397),b=e(7338),de=e(20550),le=e(63463),pe=e(85402),re=e(67294),m=e(85893),ce=function(){var t=(0,re.useState)(!1),d=C()(t,2),i=d[0],s=d[1],w=(0,re.useRef)(),p=(0,re.useState)(),_=C()(p,2),v=_[0],ae=_[1],_e=(0,re.useState)(!1),se=C()(_e,2),he=se[0],ue=se[1],ve=function(){ue(!0)},ie=function(){ae(void 0),ue(!1)},ge=(0,g.useIntl)(),oe=[{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(y,D){return(0,m.jsx)("a",{onClick:function(){ae(D),s(!0)},children:y})}},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.workerList.name",defaultMessage:"Worker name"}),dataIndex:"name"},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.state",defaultMessage:"State"}),dataIndex:"state",renderText:function(y){return(0,m.jsx)(de.Z,{color:y=="no_ready"?"orange":y=="ready"?"green":"blue",children:y})}},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.workerList.hostname",defaultMessage:"Hostname"}),dataIndex:"hostname"},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.workerList.runtimes",defaultMessage:"Runtimes"}),dataIndex:"runtimes",renderText:function(y){return"".concat(y.join(", "))}},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.creationTimestamp",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",width:100,render:function(y,D){return[(0,m.jsx)("a",{onClick:function(){ae(D),ve()},children:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"})},"events")]}}];return(0,m.jsxs)(R.ZP,{children:[(0,m.jsx)(c.Z,{headerTitle:ge.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:w,rowKey:"uid",search:{labelWidth:120},request:P()(E()().mark(function x(){var y;return E()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,B();case 2:return y=L.sent,L.abrupt("return",{data:y.items,success:!0});case 4:case"end":return L.stop()}},x)})),columns:oe}),(0,m.jsx)(le.Z,{width:600,open:i,onClose:function(){ae(void 0),s(!1)},closable:!1,children:(v==null?void 0:v.uid)&&(0,m.jsx)(b.vY,{column:2,title:v==null?void 0:v.uid,request:P()(E()().mark(function x(){return E()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",{data:v||{}});case 1:case"end":return D.stop()}},x)})),params:{id:v==null?void 0:v.uid},columns:oe})}),(0,m.jsx)(pe.Z,{title:(0,m.jsx)(g.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"}),width:1500,visible:he,onOk:ie,onCancel:ie,children:(v==null?void 0:v.uid)&&(0,m.jsx)(f.Z,{uid:v==null?void 0:v.uid})})]})},me=ce},80242:function(ne,W,e){e.d(W,{A3:function(){return F},oQ:function(){return $}});var I=e(97548),E=e.n(I),G=e(97983),P=e.n(G),U=e(11281),C=e.n(U),f=e(40794),A=e.n(f),k=e(36275),h=null,g=null,Z=null,S=null,O=null;function H(r,a){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l){return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/api/apps/v1/event",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},l||{})));case 1:case"end":return u.stop()}},r)})),j.apply(this,arguments)}function T(r,a){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l){var o,u;return _regeneratorRuntime().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=a.uid,u=_objectWithoutProperties(a,h),c.abrupt("return",request("/api/apps/v1/event/".concat(o),_objectSpread({method:"GET",params:_objectSpread({},u)},l||{})));case 2:case"end":return c.stop()}},r)})),K.apply(this,arguments)}function M(r,a,l){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l,o){var u,R;return _regeneratorRuntime().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return u=a.uid,R=_objectWithoutProperties(a,g),b.abrupt("return",request("/api/apps/v1/event/".concat(u),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},R),data:l},o||{})));case 2:case"end":return b.stop()}},r)})),V.apply(this,arguments)}function Q(r,a){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l){var o,u;return _regeneratorRuntime().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=a.uid,u=_objectWithoutProperties(a,Z),c.abrupt("return",request("/api/apps/v1/event/".concat(o),_objectSpread({method:"DELETE",params:_objectSpread({},u)},l||{})));case 2:case"end":return c.stop()}},r)})),Y.apply(this,arguments)}function z(r,a,l){return J.apply(this,arguments)}function J(){return J=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l,o){var u,R;return _regeneratorRuntime().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return u=a.uid,R=_objectWithoutProperties(a,S),b.abrupt("return",request("/api/apps/v1/event/".concat(u),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},R),data:l},o||{})));case 2:case"end":return b.stop()}},r)})),J.apply(this,arguments)}function N(r,a){return X.apply(this,arguments)}function X(){return X=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,l){var o,u;return _regeneratorRuntime().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=a.uid,u=_objectWithoutProperties(a,O),c.abrupt("return",request("/api/apps/v1/event/".concat(o,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},u)},l||{})));case 2:case"end":return c.stop()}},r)})),X.apply(this,arguments)}function $(r){return q.apply(this,arguments)}function q(){return q=A()(P()().mark(function r(a){return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,k.request)("/api/apps/v1/event/list",C()({method:"GET"},a||{})));case 1:case"end":return o.stop()}},r)})),q.apply(this,arguments)}function F(r,a){return ee.apply(this,arguments)}function ee(){return ee=A()(P()().mark(function r(a,l){return P()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,k.request)("/api/apps/v1/event/list/kind",C()({method:"GET",params:C()({},a)},l||{})));case 1:case"end":return u.stop()}},r)})),ee.apply(this,arguments)}function te(r){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime().mark(function r(a){return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",request("/api/apps/v1/event/watch",_objectSpread({method:"GET"},a||{})));case 1:case"end":return o.stop()}},r)})),B.apply(this,arguments)}}}]);
