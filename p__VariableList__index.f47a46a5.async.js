"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[177],{5966:function(X,R,e){var O=e(1413),P=e(45987),Z=e(85893),n=e(69553),S=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],D="text",f=function(M){var x=M.fieldProps,W=M.proFieldProps,T=(0,P.Z)(M,S);return(0,Z.jsx)(n.Z,(0,O.Z)({valueType:D,fieldProps:x,filedConfig:{valueType:D},proFieldProps:W},T))},g=function(M){var x=M.fieldProps,W=M.proFieldProps,T=(0,P.Z)(M,h);return(0,Z.jsx)(n.Z,(0,O.Z)({valueType:"password",fieldProps:x,proFieldProps:W,filedConfig:{valueType:D}},T))},w=f;w.Password=g,w.displayName="ProFormComponent",R.Z=w},90672:function(X,R,e){var O=e(1413),P=e(45987),Z=e(85893),n=e(67294),S=e(69553),h=["fieldProps","proFieldProps"],D=function(g,w){var A=g.fieldProps,M=g.proFieldProps,x=(0,P.Z)(g,h);return(0,Z.jsx)(S.Z,(0,O.Z)({ref:w,valueType:"textarea",fieldProps:A,proFieldProps:M},x))};R.Z=n.forwardRef(D)},43616:function(X,R,e){e.r(R),e.d(R,{default:function(){return i}});var O=e(12741),P=e.n(O),Z=e(97983),n=e.n(Z),S=e(11281),h=e.n(S),D=e(40794),f=e.n(D),g=e(21159),w=e(24969),A=e(52077),M=e(20397),x=e(62876),W=e(78091),T=e(5966),U=e(90672),Q=e(7338),c=e(36275),y=e(12461),L=e(71577),Y=e(63463),E=e(67294),q=e(83962),$=e(85402),t=e(85893),V=function(a){var s=(0,c.useIntl)();return(0,t.jsx)($.Z,{width:800,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:s.formatMessage({id:"pages.variableList.form.variableConfig",defaultMessage:"\u53D8\u91CF\u7F16\u8F91"}),open:a.updateModalVisible,onCancel:function(){a.onCancel()},footer:null,children:(0,t.jsxs)(q.A,{initialValues:{name:a.values.name,describe:a.values.describe,value:a.values.value},title:s.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),onFinish:function(){var l=f()(n()().mark(function u(r){return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,a.onSubmit(h()(h()({},a.values),r));case 2:return p.abrupt("return",!0);case 3:case"end":return p.stop()}},u)}));return function(u){return l.apply(this,arguments)}}(),submitter:{submitButtonProps:{},render:function(u){return[(0,t.jsx)(L.Z,{type:"primary",onClick:function(){var j,p;return(j=u.form)===null||j===void 0||(p=j.submit)===null||p===void 0?void 0:p.call(j)},children:"\u63D0\u4EA4"},"submit"),(0,t.jsx)(L.Z,{type:"dashed",onClick:function(){var j;return(j=u.form)===null||j===void 0?void 0:j.resetFields()},children:"\u91CD\u7F6E"},"rest"),(0,t.jsx)(L.Z,{type:"dashed",onClick:function(){return a.onCancel()},children:"\u53D6\u6D88"},"cancel")]}},children:[(0,t.jsx)(T.Z,{name:"name",label:s.formatMessage({id:"pages.variableList.form.name",defaultMessage:"\u53D8\u91CF\u540D\u79F0"}),rules:[{required:!0,message:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.ruleName",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u540D\u79F0\uFF01"})}]}),(0,t.jsx)(U.Z,{name:"describe",label:s.formatMessage({id:"pages.variableList.form.describe",defaultMessage:"\u53D8\u91CF\u63CF\u8FF0"}),placeholder:s.formatMessage({id:"pages.variableList.form.describe.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u63CF\u8FF0"}),rules:[{required:!0,message:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.describe.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u63CF\u8FF0\uFF01"}),min:1}]}),(0,t.jsx)(T.Z,{name:"value",label:s.formatMessage({id:"pages.variableList.form.value",defaultMessage:"\u53D8\u91CF\u503C"}),rules:[{required:!0,message:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.value.rule",defaultMessage:"\u8BF7\u8F93\u5165\u53D8\u91CF\u503C\uFF01"})}]})]})})},H=V,K=function(){var o=f()(n()().mark(function a(s){var l,u,r;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return l=y.ZP.loading("Adding"),p.prev=1,u="variable",r="v1",p.next=6,(0,g.kz)(h()(h()({},s),{},{kind:u,apiVersion:r}));case 6:return l(),y.ZP.success("Added successfully"),p.abrupt("return",!0);case 11:return p.prev=11,p.t0=p.catch(1),l(),y.ZP.error("Adding failed, please try again!"),p.abrupt("return",!1);case 16:case"end":return p.stop()}},a,null,[[1,11]])}));return function(s){return o.apply(this,arguments)}}(),ee=function(){var o=f()(n()().mark(function a(s){var l;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=y.ZP.loading("Updating"),r.prev=1,r.next=4,(0,g.cq)({uid:s.uid},s);case 4:return l(),y.ZP.success("Update is successful"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),l(),y.ZP.error("Update failed, please try again!"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},a,null,[[1,9]])}));return function(s){return o.apply(this,arguments)}}(),G=function(){var o=f()(n()().mark(function a(s){var l;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(l=y.ZP.loading("deleting"),s){r.next=3;break}return r.abrupt("return",!0);case 3:return r.prev=3,r.next=6,(0,g.LP)({uid:"-"});case 6:return l(),y.ZP.success("Deleted successfully and will refresh soon"),r.abrupt("return",!0);case 11:return r.prev=11,r.t0=r.catch(3),l(),y.ZP.error("Delete failed, please try again"),r.abrupt("return",!1);case 16:case"end":return r.stop()}},a,null,[[3,11]])}));return function(s){return o.apply(this,arguments)}}(),d=function(){var a=(0,E.useState)(!1),s=P()(a,2),l=s[0],u=s[1],r=(0,E.useState)(!1),j=P()(r,2),p=j[0],J=j[1],le=(0,E.useState)(!1),ae=P()(le,2),re=ae[0],te=ae[1],I=(0,E.useRef)(),de=(0,E.useState)(),se=P()(de,2),C=se[0],k=se[1],oe=(0,E.useState)([]),ne=P()(oe,2),N=ne[0],ue=ne[1],z=(0,c.useIntl)(),ie=[{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(m,v){return(0,t.jsx)("a",{onClick:function(){k(v),te(!0)},children:m})}},{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.variableName.nameLabel",defaultMessage:"Variable name"}),dataIndex:"name"},{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.value",defaultMessage:"variable value"}),dataIndex:"value"},{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.titleDesc",defaultMessage:"Description"}),dataIndex:"describe",valueType:"textarea"},{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.titleCreatedAt",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,t.jsx)(c.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(m,v){return[(0,t.jsx)("a",{onClick:function(){J(!0),k(v)},children:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.variableConfig",defaultMessage:"Configuration"})},"config")]}}];return(0,t.jsxs)(A.ZP,{children:[(0,t.jsx)(M.Z,{headerTitle:z.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:I,rowKey:"uid",search:{labelWidth:120},toolBarRender:function(){return[(0,t.jsxs)(L.Z,{type:"primary",onClick:function(){u(!0)},children:[(0,t.jsx)(w.Z,{})," ",(0,t.jsx)(c.FormattedMessage,{id:"pages.common.new",defaultMessage:"New"})]},"primary")]},request:f()(n()().mark(function b(){var m;return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,g.Xn)();case 2:return m=_.sent,_.abrupt("return",{data:m.items,success:!0});case 4:case"end":return _.stop()}},b)})),columns:ie,rowSelection:{onChange:function(m,v){ue(v)}}}),(N==null?void 0:N.length)>0&&(0,t.jsx)(x.Z,{extra:(0,t.jsxs)("div",{children:[(0,t.jsx)(c.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,t.jsx)("a",{style:{fontWeight:600},children:N.length})," ",(0,t.jsx)(c.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,t.jsx)(L.Z,{onClick:f()(n()().mark(function b(){var m,v;return n()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,G(N);case 2:ue([]),(m=I.current)===null||m===void 0||(v=m.reloadAndRest)===null||v===void 0||v.call(m);case 4:case"end":return B.stop()}},b)})),children:(0,t.jsx)(c.FormattedMessage,{id:"pages.common.batchDeletion",defaultMessage:"Batch deletion"})})}),(0,t.jsxs)(W.Y,{title:z.formatMessage({id:"pages.variableList.form.newVariable",defaultMessage:"New variable"}),width:"400px",visible:l,onVisibleChange:u,onFinish:function(){var b=f()(n()().mark(function m(v){var _;return n()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,K(v);case 2:_=F.sent,_&&(u(!1),I.current&&I.current.reload());case 4:case"end":return F.stop()}},m)}));return function(m){return b.apply(this,arguments)}}(),children:[(0,t.jsx)(T.Z,{rules:[{required:!0,message:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.ruleName",defaultMessage:"Variable name is required"})}],width:"md",name:"name",placeholder:z.formatMessage({id:"pages.variableList.form.name",defaultMessage:"Variable name"})}),(0,t.jsx)(U.Z,{width:"md",name:"describe",placeholder:z.formatMessage({id:"pages.variableList.form.describe",defaultMessage:"Variable describe"})}),(0,t.jsx)(T.Z,{rules:[{required:!0,message:(0,t.jsx)(c.FormattedMessage,{id:"pages.variableList.form.value.rule",defaultMessage:"Variable value is required"})}],width:"md",name:"value",placeholder:z.formatMessage({id:"pages.variableList.form.value.rule",defaultMessage:"Variable value"})})]}),(0,t.jsx)(H,{onSubmit:function(){var b=f()(n()().mark(function m(v){var _;return n()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,ee(v);case 2:_=F.sent,_&&(J(!1),k(void 0),I.current&&I.current.reload());case 4:case"end":return F.stop()}},m)}));return function(m){return b.apply(this,arguments)}}(),onCancel:function(){J(!1),re||k(void 0)},updateModalVisible:p,values:C||{}}),(0,t.jsx)(Y.Z,{width:600,open:re,onClose:function(){k(void 0),te(!1)},closable:!1,children:(C==null?void 0:C.uid)&&(0,t.jsx)(Q.vY,{column:2,title:C==null?void 0:C.uid,request:f()(n()().mark(function b(){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",{data:C||{}});case 1:case"end":return v.stop()}},b)})),params:{id:C==null?void 0:C.uid},columns:ie})})]})},i=d},21159:function(X,R,e){e.d(R,{LP:function(){return Y},Xn:function(){return H},cq:function(){return y},kz:function(){return T}});var O=e(97548),P=e.n(O),Z=e(97983),n=e.n(Z),S=e(11281),h=e.n(S),D=e(40794),f=e.n(D),g=e(36275),w=null,A=["uid"],M=["uid"],x=null,W=null;function T(d,i){return U.apply(this,arguments)}function U(){return U=f()(n()().mark(function d(i,o){return n()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,g.request)("/api/apps/v1/variable",h()({method:"POST",headers:{"Content-Type":"application/json"},data:i},o||{})));case 1:case"end":return s.stop()}},d)})),U.apply(this,arguments)}function Q(d,i){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function d(i,o){var a,s;return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a=i.uid,s=_objectWithoutProperties(i,w),u.abrupt("return",request("/api/apps/v1/variable/".concat(a),_objectSpread({method:"GET",params:_objectSpread({},s)},o||{})));case 2:case"end":return u.stop()}},d)})),c.apply(this,arguments)}function y(d,i,o){return L.apply(this,arguments)}function L(){return L=f()(n()().mark(function d(i,o,a){var s,l;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=i.uid,l=P()(i,A),r.abrupt("return",(0,g.request)("/api/apps/v1/variable/".concat(s),h()({method:"PUT",headers:{"Content-Type":"application/json"},params:h()({},l),data:o},a||{})));case 2:case"end":return r.stop()}},d)})),L.apply(this,arguments)}function Y(d,i){return E.apply(this,arguments)}function E(){return E=f()(n()().mark(function d(i,o){var a,s;return n()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a=i.uid,s=P()(i,M),u.abrupt("return",(0,g.request)("/api/apps/v1/variable/".concat(a),h()({method:"DELETE",params:h()({},s)},o||{})));case 2:case"end":return u.stop()}},d)})),E.apply(this,arguments)}function q(d,i,o){return $.apply(this,arguments)}function $(){return $=_asyncToGenerator(_regeneratorRuntime().mark(function d(i,o,a){var s,l;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=i.uid,l=_objectWithoutProperties(i,x),r.abrupt("return",request("/api/apps/v1/variable/".concat(s),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},l),data:o},a||{})));case 2:case"end":return r.stop()}},d)})),$.apply(this,arguments)}function t(d,i){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime().mark(function d(i,o){var a,s;return _regeneratorRuntime().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return a=i.uid,s=_objectWithoutProperties(i,W),u.abrupt("return",request("/api/apps/v1/variable/".concat(a,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},s)},o||{})));case 2:case"end":return u.stop()}},d)})),V.apply(this,arguments)}function H(d){return K.apply(this,arguments)}function K(){return K=f()(n()().mark(function d(i){return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,g.request)("/api/apps/v1/variable/list",h()({method:"GET"},i||{})));case 1:case"end":return a.stop()}},d)})),K.apply(this,arguments)}function ee(d){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime().mark(function d(i){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/apps/v1/variable/watch",_objectSpread({method:"GET"},i||{})));case 1:case"end":return a.stop()}},d)})),G.apply(this,arguments)}}}]);