"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[177],{5966:function(X,w,a){var x=a(1413),P=a(44925),L=a(85893),h=a(2123),Z=["fieldProps","proFieldProps"],f=["fieldProps","proFieldProps"],E="text",u=function(M){var D=M.fieldProps,F=M.proFieldProps,R=(0,P.Z)(M,Z);return(0,L.jsx)(h.Z,(0,x.Z)({valueType:E,fieldProps:D,filedConfig:{valueType:E},proFieldProps:F},R))},g=function(M){var D=M.fieldProps,F=M.proFieldProps,R=(0,P.Z)(M,f);return(0,L.jsx)(h.Z,(0,x.Z)({valueType:"password",fieldProps:D,proFieldProps:F,filedConfig:{valueType:E}},R))},T=u;T.Password=g,T.displayName="ProFormComponent",w.Z=T},90672:function(X,w,a){var x=a(1413),P=a(44925),L=a(85893),h=a(67294),Z=a(2123),f=["fieldProps","proFieldProps"],E=function(g,T){var O=g.fieldProps,M=g.proFieldProps,D=(0,P.Z)(g,f);return(0,L.jsx)(Z.Z,(0,x.Z)({ref:T,valueType:"textarea",fieldProps:O,proFieldProps:M},D))};w.Z=h.forwardRef(E)},7809:function(X,w,a){a.r(w),a.d(w,{default:function(){return l}});var x=a(80164),P=a.n(x),L=a(74411),h=a.n(L),Z=a(55559),f=a.n(Z),E=a(45223),u=a.n(E),g=a(26904),T=a(49101),O=a(48705),M=a(51851),D=a(20761),F=a(5966),R=a(90672),I=a(60415),p=a(95952),j=a(48086),A=a(71577),B=a(25084),S=a(67294),$=a(63436),J=a(50146),r=a(85893),Q=function(n){var t=(0,p.useIntl)();return(0,r.jsx)(J.Z,{width:800,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:t.formatMessage({id:"pages.variableList.form.variableConfig",defaultMessage:"\u53D8\u91CF\u7F16\u8F91"}),visible:n.updateModalVisible,onCancel:function(){n.onCancel()},footer:null,children:(0,r.jsxs)($.A,{initialValues:{name:n.values.name,describe:n.values.describe,value:n.values.value},title:t.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),onFinish:function(){var s=f()(u().mark(function d(e){return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.onSubmit(h()(h()({},n.values),e));case 2:return c.abrupt("return",!0);case 3:case"end":return c.stop()}},d)}));return function(d){return s.apply(this,arguments)}}(),submitter:{submitButtonProps:{},render:function(d){return[(0,r.jsx)(A.Z,{type:"primary",onClick:function(){var o,c;return(o=d.form)===null||o===void 0||(c=o.submit)===null||c===void 0?void 0:c.call(o)},children:"\u63D0\u4EA4"},"submit"),(0,r.jsx)(A.Z,{type:"dashed",onClick:function(){var o;return(o=d.form)===null||o===void 0?void 0:o.resetFields()},children:"\u91CD\u7F6E"},"rest"),(0,r.jsx)(A.Z,{type:"dashed",onClick:function(){return n.onCancel()},children:"\u53D6\u6D88"},"cancel")]}},children:[(0,r.jsx)(F.Z,{name:"name",label:t.formatMessage({id:"pages.variableList.form.name",defaultMessage:"\u53D8\u91CF\u540D\u79F0"}),rules:[{required:!0,message:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.ruleName",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u540D\u79F0\uFF01"})}]}),(0,r.jsx)(R.Z,{name:"describe",label:t.formatMessage({id:"pages.variableList.form.describe",defaultMessage:"\u53D8\u91CF\u63CF\u8FF0"}),placeholder:t.formatMessage({id:"pages.variableList.form.describe.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u63CF\u8FF0"}),rules:[{required:!0,message:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.describe.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u63CF\u8FF0\uFF01"}),min:1}]}),(0,r.jsx)(F.Z,{name:"value",label:t.formatMessage({id:"pages.variableList.form.value",defaultMessage:"\u53D8\u91CF\u503C"}),rules:[{required:!0,message:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.value.rule",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C\uFF01"})}]})]})})},V=Q,Y=function(){var i=f()(u().mark(function n(t){var s,d,e;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return s=j.ZP.loading("Adding"),c.prev=1,d="variable",e="v1",c.next=6,(0,g.kz)(h()(h()({},t),{},{kind:d,apiVersion:e}));case 6:return s(),j.ZP.success("Added successfully"),c.abrupt("return",!0);case 11:return c.prev=11,c.t0=c.catch(1),s(),j.ZP.error("Adding failed, please try again!"),c.abrupt("return",!1);case 16:case"end":return c.stop()}},n,null,[[1,11]])}));return function(t){return i.apply(this,arguments)}}(),K=function(){var i=f()(u().mark(function n(t){var s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=j.ZP.loading("Updating"),e.prev=1,e.next=4,(0,g.cq)({uid:t.uid},t);case 4:return s(),j.ZP.success("Update is successful"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),s(),j.ZP.error("Update failed, please try again!"),e.abrupt("return",!1);case 14:case"end":return e.stop()}},n,null,[[1,9]])}));return function(t){return i.apply(this,arguments)}}(),q=function(){var i=f()(u().mark(function n(t){var s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=j.ZP.loading("deleting"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,e.next=6,(0,g.LP)({uid:"-"});case 6:return s(),j.ZP.success("Deleted successfully and will refresh soon"),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(3),s(),j.ZP.error("Delete failed, please try again"),e.abrupt("return",!1);case 16:case"end":return e.stop()}},n,null,[[3,11]])}));return function(t){return i.apply(this,arguments)}}(),G=function(){var n=(0,S.useState)(!1),t=P()(n,2),s=t[0],d=t[1],e=(0,S.useState)(!1),o=P()(e,2),c=o[0],H=o[1],ue=(0,S.useState)(!1),ee=P()(ue,2),ae=ee[0],re=ee[1],W=(0,S.useRef)(),le=(0,S.useState)(),te=P()(le,2),y=te[0],k=te[1],de=(0,S.useState)([]),se=P()(de,2),N=se[0],ne=se[1],z=(0,p.useIntl)(),ie=[{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(m,v){return(0,r.jsx)("a",{onClick:function(){k(v),re(!0)},children:m})}},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.variableName.nameLabel",defaultMessage:"Variable name"}),dataIndex:"name"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.value",defaultMessage:"variable value"}),dataIndex:"value"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.titleDesc",defaultMessage:"Description"}),dataIndex:"describe",valueType:"textarea"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.titleCreatedAt",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,r.jsx)(p.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(m,v){return[(0,r.jsx)("a",{onClick:function(){H(!0),k(v)},children:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.variableConfig",defaultMessage:"Configuration"})},"config")]}}];return(0,r.jsxs)(O._z,{children:[(0,r.jsx)(M.Z,{headerTitle:z.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:W,rowKey:"uid",search:{labelWidth:120},toolBarRender:function(){return[(0,r.jsxs)(A.Z,{type:"primary",onClick:function(){d(!0)},children:[(0,r.jsx)(T.Z,{})," ",(0,r.jsx)(p.FormattedMessage,{id:"pages.common.new",defaultMessage:"New"})]},"primary")]},request:f()(u().mark(function b(){var m;return u().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,g.Xn)();case 2:return m=_.sent,_.abrupt("return",{data:m.items,success:!0});case 4:case"end":return _.stop()}},b)})),columns:ie,rowSelection:{onChange:function(m,v){ne(v)}}}),N?.length>0&&(0,r.jsx)(O.Sc,{extra:(0,r.jsxs)("div",{children:[(0,r.jsx)(p.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,r.jsx)("a",{style:{fontWeight:600},children:N.length})," ",(0,r.jsx)(p.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,r.jsx)(A.Z,{onClick:f()(u().mark(function b(){var m,v;return u().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,q(N);case 2:ne([]),(m=W.current)===null||m===void 0||(v=m.reloadAndRest)===null||v===void 0||v.call(m);case 4:case"end":return U.stop()}},b)})),children:(0,r.jsx)(p.FormattedMessage,{id:"pages.common.batchDeletion",defaultMessage:"Batch deletion"})})}),(0,r.jsxs)(D.Y,{title:z.formatMessage({id:"pages.variableList.form.newVariable",defaultMessage:"New variable"}),width:"400px",visible:s,onVisibleChange:d,onFinish:function(){var b=f()(u().mark(function m(v){var _;return u().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Y(v);case 2:_=C.sent,_&&(d(!1),W.current&&W.current.reload());case 4:case"end":return C.stop()}},m)}));return function(m){return b.apply(this,arguments)}}(),children:[(0,r.jsx)(F.Z,{rules:[{required:!0,message:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.ruleName",defaultMessage:"Variable name is required"})}],width:"md",name:"name",placeholder:z.formatMessage({id:"pages.variableList.form.name",defaultMessage:"Variable name"})}),(0,r.jsx)(R.Z,{width:"md",name:"describe",placeholder:z.formatMessage({id:"pages.variableList.form.describe",defaultMessage:"Variable describe"})}),(0,r.jsx)(F.Z,{rules:[{required:!0,message:(0,r.jsx)(p.FormattedMessage,{id:"pages.variableList.form.value.rule",defaultMessage:"Variable value is required"})}],width:"md",name:"value",placeholder:z.formatMessage({id:"pages.variableList.form.value.rule",defaultMessage:"Variable value"})})]}),(0,r.jsx)(V,{onSubmit:function(){var b=f()(u().mark(function m(v){var _;return u().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,K(v);case 2:_=C.sent,_&&(H(!1),k(void 0),W.current&&W.current.reload());case 4:case"end":return C.stop()}},m)}));return function(m){return b.apply(this,arguments)}}(),onCancel:function(){H(!1),ae||k(void 0)},updateModalVisible:c,values:y||{}}),(0,r.jsx)(B.Z,{width:600,visible:ae,onClose:function(){k(void 0),re(!1)},closable:!1,children:y?.uid&&(0,r.jsx)(I.vY,{column:2,title:y?.uid,request:f()(u().mark(function b(){return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",{data:y||{}});case 1:case"end":return v.stop()}},b)})),params:{id:y?.uid},columns:ie})})]})},l=G},26904:function(X,w,a){a.d(w,{LP:function(){return S},Xn:function(){return Y},cq:function(){return A},kz:function(){return R}});var x=a(56307),P=a.n(x),L=a(74411),h=a.n(L),Z=a(55559),f=a.n(Z),E=a(45223),u=a.n(E),g=a(95952),T=null,O=["uid"],M=["uid"],D=null,F=null;function R(l,i){return I.apply(this,arguments)}function I(){return I=f()(u().mark(function l(i,n){return u().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,g.request)("/api/apps/v1/variable",h()({method:"POST",headers:{"Content-Type":"application/json"},data:i},n||{})));case 1:case"end":return s.stop()}},l)})),I.apply(this,arguments)}function p(l,i){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime.mark(function l(i,n){var t,s;return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.uid,s=_objectWithoutProperties(i,T),e.abrupt("return",request("/api/apps/v1/variable/".concat(t),_objectSpread({method:"GET",params:_objectSpread({},s)},n||{})));case 2:case"end":return e.stop()}},l)})),j.apply(this,arguments)}function A(l,i,n){return B.apply(this,arguments)}function B(){return B=f()(u().mark(function l(i,n,t){var s,d;return u().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return s=i.uid,d=P()(i,O),o.abrupt("return",(0,g.request)("/api/apps/v1/variable/".concat(s),h()({method:"PUT",headers:{"Content-Type":"application/json"},params:h()({},d),data:n},t||{})));case 2:case"end":return o.stop()}},l)})),B.apply(this,arguments)}function S(l,i){return $.apply(this,arguments)}function $(){return $=f()(u().mark(function l(i,n){var t,s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.uid,s=P()(i,M),e.abrupt("return",(0,g.request)("/api/apps/v1/variable/".concat(t),h()({method:"DELETE",params:h()({},s)},n||{})));case 2:case"end":return e.stop()}},l)})),$.apply(this,arguments)}function J(l,i,n){return r.apply(this,arguments)}function r(){return r=_asyncToGenerator(_regeneratorRuntime.mark(function l(i,n,t){var s,d;return _regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return s=i.uid,d=_objectWithoutProperties(i,D),o.abrupt("return",request("/api/apps/v1/variable/".concat(s),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},d),data:n},t||{})));case 2:case"end":return o.stop()}},l)})),r.apply(this,arguments)}function Q(l,i){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime.mark(function l(i,n){var t,s;return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.uid,s=_objectWithoutProperties(i,F),e.abrupt("return",request("/api/apps/v1/variable/".concat(t,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},s)},n||{})));case 2:case"end":return e.stop()}},l)})),V.apply(this,arguments)}function Y(l){return K.apply(this,arguments)}function K(){return K=f()(u().mark(function l(i){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,g.request)("/api/apps/v1/variable/list",h()({method:"GET"},i||{})));case 1:case"end":return t.stop()}},l)})),K.apply(this,arguments)}function q(l){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime.mark(function l(i){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/api/apps/v1/variable/watch",_objectSpread({method:"GET"},i||{})));case 1:case"end":return t.stop()}},l)})),G.apply(this,arguments)}}}]);
