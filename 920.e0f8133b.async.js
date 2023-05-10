"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[920],{62266:function(F,E,n){var P=n(97983),W=n.n(P),T=n(40794),h=n.n(T),y=n(80242),j=n(20397),l=n(36275),b=n(20550),g=n(67294),i=n(85893),M=function(v){var f=(0,g.useRef)();g.useEffect(function(){var c;(c=f.current)===null||c===void 0||c.reload()},[v.uid]);var C=[{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.name",defaultMessage:"Event name"}),dataIndex:"name"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.common.state",defaultMessage:"Type"}),dataIndex:"type",renderText:function(p){return(0,i.jsx)(b.Z,{color:p=="Warning"?"orange":"blue",children:p})}},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.reason",defaultMessage:"Reason"}),dataIndex:"reason"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.message",defaultMessage:"Message"}),dataIndex:"message"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.count",defaultMessage:"Count"}),dataIndex:"count"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.source",defaultMessage:"Source"}),dataIndex:"source",renderText:function(p){return"".concat(p.component?p.component:""," ").concat(p.host?p.host:"")}},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.firstTimestamp",defaultMessage:"First time"}),dataIndex:"firstTimestamp",valueType:"dateTime"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.lastTimestamp",defaultMessage:"Last time"}),dataIndex:"lastTimestamp",valueType:"dateTime"},{title:(0,i.jsx)(l.FormattedMessage,{id:"pages.eventList.eventTime",defaultMessage:"Event time"}),dataIndex:"eventTime",valueType:"dateTime"}];return(0,i.jsx)(j.Z,{rowKey:"uid",search:!1,actionRef:f,request:h()(W()().mark(function c(){var p;return W()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,y.A3)({uid:v.uid});case 2:return p=m.sent,m.abrupt("return",{data:p.items,success:!0});case 4:case"end":return m.stop()}},c)})),columns:C})};E.Z=M},80242:function(F,E,n){n.d(E,{A3:function(){return D},oQ:function(){return w}});var P=n(97548),W=n.n(P),T=n(97983),h=n.n(T),y=n(11281),j=n.n(y),l=n(40794),b=n.n(l),g=n(36275),i=null,M=null,L=null,v=null,f=null;function C(u,e){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/apps/v1/event",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:e},r||{})));case 1:case"end":return t.stop()}},u)})),c.apply(this,arguments)}function p(u,e){return R.apply(this,arguments)}function R(){return R=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r){var a,t;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=e.uid,t=_objectWithoutProperties(e,i),_.abrupt("return",request("/api/apps/v1/event/".concat(a),_objectSpread({method:"GET",params:_objectSpread({},t)},r||{})));case 2:case"end":return _.stop()}},u)})),R.apply(this,arguments)}function m(u,e,r){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r,a){var t,s;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.uid,s=_objectWithoutProperties(e,M),o.abrupt("return",request("/api/apps/v1/event/".concat(t),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},s),data:r},a||{})));case 2:case"end":return o.stop()}},u)})),x.apply(this,arguments)}function I(u,e){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r){var a,t;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=e.uid,t=_objectWithoutProperties(e,L),_.abrupt("return",request("/api/apps/v1/event/".concat(a),_objectSpread({method:"DELETE",params:_objectSpread({},t)},r||{})));case 2:case"end":return _.stop()}},u)})),U.apply(this,arguments)}function S(u,e,r){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r,a){var t,s;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.uid,s=_objectWithoutProperties(e,v),o.abrupt("return",request("/api/apps/v1/event/".concat(t),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},s),data:r},a||{})));case 2:case"end":return o.stop()}},u)})),G.apply(this,arguments)}function A(u,e){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime().mark(function u(e,r){var a,t;return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=e.uid,t=_objectWithoutProperties(e,f),_.abrupt("return",request("/api/apps/v1/event/".concat(a,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},t)},r||{})));case 2:case"end":return _.stop()}},u)})),K.apply(this,arguments)}function w(u){return B.apply(this,arguments)}function B(){return B=b()(h()().mark(function u(e){return h()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,g.request)("/api/apps/v1/event/list",j()({method:"GET"},e||{})));case 1:case"end":return a.stop()}},u)})),B.apply(this,arguments)}function D(u,e){return O.apply(this,arguments)}function O(){return O=b()(h()().mark(function u(e,r){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/apps/v1/event/list/kind",j()({method:"GET",params:j()({},e)},r||{})));case 1:case"end":return t.stop()}},u)})),O.apply(this,arguments)}function k(u){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function u(e){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/apps/v1/event/watch",_objectSpread({method:"GET"},e||{})));case 1:case"end":return a.stop()}},u)})),$.apply(this,arguments)}},6463:function(F,E,n){n.d(E,{qE:function(){return O}});var P=n(97548),W=n.n(P),T=n(97983),h=n.n(T),y=n(11281),j=n.n(y),l=n(40794),b=n.n(l),g=n(36275),i=null,M=null,L=null,v=null,f=null,C=null;function c(e,r){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a){return _regeneratorRuntime().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/apps/v1/job",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return s.stop()}},e)})),p.apply(this,arguments)}function R(e,r){return m.apply(this,arguments)}function m(){return m=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a){var t,s;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.uid,s=_objectWithoutProperties(r,i),o.abrupt("return",request("/api/apps/v1/job/".concat(t),_objectSpread({method:"GET",params:_objectSpread({},s)},a||{})));case 2:case"end":return o.stop()}},e)})),m.apply(this,arguments)}function x(e,r,a){return I.apply(this,arguments)}function I(){return I=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a,t){var s,_;return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=r.uid,_=_objectWithoutProperties(r,M),d.abrupt("return",request("/api/apps/v1/job/".concat(s),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},_),data:a},t||{})));case 2:case"end":return d.stop()}},e)})),I.apply(this,arguments)}function U(e,r){return S.apply(this,arguments)}function S(){return S=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a){var t,s;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.uid,s=_objectWithoutProperties(r,L),o.abrupt("return",request("/api/apps/v1/job/".concat(t),_objectSpread({method:"DELETE",params:_objectSpread({},s)},a||{})));case 2:case"end":return o.stop()}},e)})),S.apply(this,arguments)}function G(e,r,a){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a,t){var s,_;return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=r.uid,_=_objectWithoutProperties(r,v),d.abrupt("return",request("/api/apps/v1/job/".concat(s),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},_),data:a},t||{})));case 2:case"end":return d.stop()}},e)})),A.apply(this,arguments)}function K(e,r,a){return w.apply(this,arguments)}function w(){return w=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a,t){var s,_;return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return s=r.uid,_=_objectWithoutProperties(r,f),d.abrupt("return",request("/api/apps/v1/job/".concat(s,"/state"),_objectSpread({method:"PUT",headers:{"Content-Type":"application/json"},params:_objectSpread({},_),data:a},t||{})));case 2:case"end":return d.stop()}},e)})),w.apply(this,arguments)}function B(e,r){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function e(r,a){var t,s;return _regeneratorRuntime().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=r.uid,s=_objectWithoutProperties(r,C),o.abrupt("return",request("/api/apps/v1/job/".concat(t,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},s)},a||{})));case 2:case"end":return o.stop()}},e)})),D.apply(this,arguments)}function O(e){return k.apply(this,arguments)}function k(){return k=b()(h()().mark(function e(r){return h()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/apps/v1/job/list",j()({method:"GET"},r||{})));case 1:case"end":return t.stop()}},e)})),k.apply(this,arguments)}function $(e){return u.apply(this,arguments)}function u(){return u=_asyncToGenerator(_regeneratorRuntime().mark(function e(r){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/apps/v1/job/watch",_objectSpread({method:"GET"},r||{})));case 1:case"end":return t.stop()}},e)})),u.apply(this,arguments)}}}]);
