"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[899],{34461:function(q,$,t){var N=t(55559),B=t.n(N),V=t(45223),D=t.n(V),H=t(65609),E=t(51851),x=t(95952),L=t(60331),S=t(67294),g=t(85893),v=function(F){var k=(0,S.useRef)();S.useEffect(function(){var T;(T=k.current)===null||T===void 0||T.reload()},[F.uid]);var J=[{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.name",defaultMessage:"Event name"}),dataIndex:"name"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.common.state",defaultMessage:"Type"}),dataIndex:"type",renderText:function(b){return(0,g.jsx)(L.Z,{color:b=="Warning"?"orange":"blue",children:b})}},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.reason",defaultMessage:"Reason"}),dataIndex:"reason"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.message",defaultMessage:"Message"}),dataIndex:"message"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.count",defaultMessage:"Count"}),dataIndex:"count"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.source",defaultMessage:"Source"}),dataIndex:"source",renderText:function(b){return"".concat(b.component?b.component:""," ").concat(b.host?b.host:"")}},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.firstTimestamp",defaultMessage:"First time"}),dataIndex:"firstTimestamp",valueType:"dateTime"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.lastTimestamp",defaultMessage:"Last time"}),dataIndex:"lastTimestamp",valueType:"dateTime"},{title:(0,g.jsx)(x.FormattedMessage,{id:"pages.eventList.eventTime",defaultMessage:"Event time"}),dataIndex:"eventTime",valueType:"dateTime"}];return(0,g.jsx)(E.Z,{rowKey:"uid",search:!1,actionRef:k,request:B()(D().mark(function T(){var b;return D().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,H.A3)({uid:F.uid});case 2:return b=R.sent,R.abrupt("return",{data:b.items,success:!0});case 4:case"end":return R.stop()}},T)})),columns:J})};$.Z=v},45224:function(q,$,t){t.r($),t.d($,{default:function(){return he}});var N=t(55559),B=t.n(N),V=t(80164),D=t.n(V),H=t(45223),E=t.n(H),x=t(34461),L=t(56307),S=t(74411),g=t.n(S),v=t(95952),z=null,F=null,k=null,J=null,T=null,b=null,Z=null;function R(n,a){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l){return _regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",request("/api/apps/v1/stage",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:a},l||{})));case 1:case"end":return i.stop()}},n)})),C.apply(this,arguments)}function ue(n,a){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l){var s,i;return _regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=a.uid,i=_objectWithoutProperties(a,z),m.abrupt("return",request("/api/apps/v1/stage/".concat(s),_objectSpread({method:"GET",params:_objectSpread({},i)},l||{})));case 2:case"end":return m.stop()}},n)})),W.apply(this,arguments)}function ie(n,a,l){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l,s){var i,f;return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=a.uid,f=_objectWithoutProperties(a,F),c.abrupt("return",request("/api/apps/v1/stage/".concat(i),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},f),data:l},s||{})));case 2:case"end":return c.stop()}},n)})),O.apply(this,arguments)}function oe(n,a){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l){var s,i;return _regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=a.uid,i=_objectWithoutProperties(a,k),m.abrupt("return",request("/api/apps/v1/stage/".concat(s),_objectSpread({method:"DELETE",params:_objectSpread({},i)},l||{})));case 2:case"end":return m.stop()}},n)})),U.apply(this,arguments)}function X(n,a,l){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l,s){var i,f;return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=a.uid,f=_objectWithoutProperties(a,J),c.abrupt("return",request("/api/apps/v1/stage/".concat(i),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},f),data:l},s||{})));case 2:case"end":return c.stop()}},n)})),G.apply(this,arguments)}function ee(n,a,l){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l,s){var i,f;return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=a.uid,f=_objectWithoutProperties(a,T),c.abrupt("return",request("/api/apps/v1/stage/".concat(i,"/binding"),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},f),data:l},s||{})));case 2:case"end":return c.stop()}},n)})),A.apply(this,arguments)}function de(n,a,l){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l,s){var i,f;return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return i=a.uid,f=_objectWithoutProperties(a,b),c.abrupt("return",request("/api/apps/v1/stage/".concat(i,"/list"),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},f),data:l},s||{})));case 2:case"end":return c.stop()}},n)})),K.apply(this,arguments)}function o(n,a){return r.apply(this,arguments)}function r(){return r=_asyncToGenerator(_regeneratorRuntime.mark(function n(a,l){var s,i;return _regeneratorRuntime.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=a.uid,i=_objectWithoutProperties(a,Z),m.abrupt("return",request("/api/apps/v1/stage/".concat(s,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},i)},l||{})));case 2:case"end":return m.stop()}},n)})),r.apply(this,arguments)}function _(n){return u.apply(this,arguments)}function u(){return u=B()(E().mark(function n(a){return E().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,v.request)("/api/apps/v1/stage/list",g()({method:"GET"},a||{})));case 1:case"end":return s.stop()}},n)})),u.apply(this,arguments)}function d(n){return y.apply(this,arguments)}function y(){return y=_asyncToGenerator(_regeneratorRuntime.mark(function n(a){return _regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/apps/v1/stage/watch",_objectSpread({method:"GET"},a||{})));case 1:case"end":return s.stop()}},n)})),y.apply(this,arguments)}var h=t(48705),P=t(51851),le=t(60415),ce=t(60331),pe=t(25084),me=t(50146),Q=t(67294),te={table:"table___cW0qD"},e=t(85893),_e=function(){var a=(0,Q.useState)(!1),l=D()(a,2),s=l[0],i=l[1],f=(0,Q.useRef)(),m=(0,Q.useState)(),c=D()(m,2),j=c[0],Y=c[1],ge=(0,Q.useState)(!1),ae=D()(ge,2),ve=ae[0],re=ae[1],fe=function(){re(!0)},ne=function(){Y(void 0),re(!1)},je=(0,v.useIntl)(),se=[{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(M,p){return(0,e.jsx)("a",{onClick:function(){Y(p),i(!0)},children:M})}},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.stageList.name",defaultMessage:"Stage name"}),dataIndex:"name"},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.stageList.uids",defaultMessage:"UIDs"}),width:500,render:function(M,p){return(0,e.jsx)("table",{className:te.table,children:(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"WorkerUID"}),(0,e.jsx)("td",{children:p.workerUID})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"WorkflowUID"}),(0,e.jsx)("td",{children:p.workflowUID})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"JobUID"}),(0,e.jsx)("td",{children:p.jobUID})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"DagUID"}),(0,e.jsx)("td",{children:p.dagUID})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"NodeID"}),(0,e.jsx)("td",{children:p.nodeID})]})]})})}},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.state",defaultMessage:"State"}),dataIndex:"state",renderText:function(M){return(0,e.jsx)(ce.Z,{color:M=="failed"?"orange":M=="success"?"green":"blue",children:M})}},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.stageList.code",defaultMessage:"Code"}),width:500,render:function(M,p){return(0,e.jsx)("table",{className:te.table,children:(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Runtime"}),(0,e.jsx)("td",{children:p.runtime})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"CodeUID"}),(0,e.jsx)("td",{children:p.code})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Connections"}),(0,e.jsx)("td",{children:p.connections})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Variables"}),(0,e.jsx)("td",{children:p.variables})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Input"}),(0,e.jsx)("td",{children:p.input})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Output"}),(0,e.jsx)("td",{children:p.output})]})]})})}},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.stageList.dependNodeId",defaultMessage:"Depend NodeId"}),dataIndex:"dependNodeId"},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.creationTimestamp",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",width:100,render:function(M,p){return[(0,e.jsx)("a",{onClick:function(){Y(p),fe()},children:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"})},"events")]}}];return(0,e.jsxs)(h._z,{children:[(0,e.jsx)(P.Z,{headerTitle:je.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:f,rowKey:"uid",search:{labelWidth:120},request:B()(E().mark(function w(){var M;return E().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,_();case 2:return M=I.sent,I.abrupt("return",{data:M.items,success:!0});case 4:case"end":return I.stop()}},w)})),columns:se}),(0,e.jsx)(pe.Z,{width:600,visible:s,onClose:function(){Y(void 0),i(!1)},closable:!1,children:j?.uid&&(0,e.jsx)(le.vY,{column:2,title:j?.uid,request:B()(E().mark(function w(){return E().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",{data:j||{}});case 1:case"end":return p.stop()}},w)})),params:{id:j?.uid},columns:se})}),(0,e.jsx)(me.Z,{title:(0,e.jsx)(v.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"}),width:1500,visible:ve,onOk:ne,onCancel:ne,children:j?.uid&&(0,e.jsx)(x.Z,{uid:j?.uid})})]})},he=_e},65609:function(q,$,t){t.d($,{A3:function(){return ee},oQ:function(){return X}});var N=t(56307),B=t.n(N),V=t(74411),D=t.n(V),H=t(55559),E=t.n(H),x=t(45223),L=t.n(x),S=t(95952),g=null,v=null,z=null,F=null,k=null;function J(o,r){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_){return _regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/api/apps/v1/event",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},_||{})));case 1:case"end":return d.stop()}},o)})),T.apply(this,arguments)}function b(o,r){return Z.apply(this,arguments)}function Z(){return Z=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_){var u,d;return _regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return u=r.uid,d=_objectWithoutProperties(r,g),h.abrupt("return",request("/api/apps/v1/event/".concat(u),_objectSpread({method:"GET",params:_objectSpread({},d)},_||{})));case 2:case"end":return h.stop()}},o)})),Z.apply(this,arguments)}function R(o,r,_){return C.apply(this,arguments)}function C(){return C=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_,u){var d,y;return _regeneratorRuntime.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=r.uid,y=_objectWithoutProperties(r,v),P.abrupt("return",request("/api/apps/v1/event/".concat(d),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},y),data:_},u||{})));case 2:case"end":return P.stop()}},o)})),C.apply(this,arguments)}function ue(o,r){return W.apply(this,arguments)}function W(){return W=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_){var u,d;return _regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return u=r.uid,d=_objectWithoutProperties(r,z),h.abrupt("return",request("/api/apps/v1/event/".concat(u),_objectSpread({method:"DELETE",params:_objectSpread({},d)},_||{})));case 2:case"end":return h.stop()}},o)})),W.apply(this,arguments)}function ie(o,r,_){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_,u){var d,y;return _regeneratorRuntime.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=r.uid,y=_objectWithoutProperties(r,F),P.abrupt("return",request("/api/apps/v1/event/".concat(d),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},y),data:_},u||{})));case 2:case"end":return P.stop()}},o)})),O.apply(this,arguments)}function oe(o,r){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime.mark(function o(r,_){var u,d;return _regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return u=r.uid,d=_objectWithoutProperties(r,k),h.abrupt("return",request("/api/apps/v1/event/".concat(u,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},d)},_||{})));case 2:case"end":return h.stop()}},o)})),U.apply(this,arguments)}function X(o){return G.apply(this,arguments)}function G(){return G=E()(L().mark(function o(r){return L().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,S.request)("/api/apps/v1/event/list",D()({method:"GET"},r||{})));case 1:case"end":return u.stop()}},o)})),G.apply(this,arguments)}function ee(o,r){return A.apply(this,arguments)}function A(){return A=E()(L().mark(function o(r,_){return L().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,S.request)("/api/apps/v1/event/list/kind",D()({method:"GET",params:D()({},r)},_||{})));case 1:case"end":return d.stop()}},o)})),A.apply(this,arguments)}function de(o){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function o(r){return _regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",request("/api/apps/v1/event/watch",_objectSpread({method:"GET"},r||{})));case 1:case"end":return u.stop()}},o)})),K.apply(this,arguments)}}}]);