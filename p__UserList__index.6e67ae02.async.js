"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[978],{5966:function(ie,K,r){var V=r(1413),b=r(45987),N=r(85893),s=r(69553),Q=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],A="text",M=function(U){var I=U.fieldProps,B=U.proFieldProps,k=(0,b.Z)(U,Q);return(0,N.jsx)(s.Z,(0,V.Z)({valueType:A,fieldProps:I,filedConfig:{valueType:A},proFieldProps:B},k))},L=function(U){var I=U.fieldProps,B=U.proFieldProps,k=(0,b.Z)(U,P);return(0,N.jsx)(s.Z,(0,V.Z)({valueType:"password",fieldProps:I,proFieldProps:B,filedConfig:{valueType:A}},k))},$=M;$.Password=L,$.displayName="ProFormComponent",K.Z=$},72330:function(ie,K,r){r.r(K),r.d(K,{default:function(){return Me}});var V=r(12741),b=r.n(V),N=r(97983),s=r.n(N),Q=r(11281),P=r.n(Q),A=r(40794),M=r.n(A),L=r(62417),$=r(63606),X=r(97937),U=r(24969),I=r(52077),B=r(20397),k=r(62876),q=r(78091),D=r(5966),Y=r(1413),ue=r(45987),e=r(85893),E=r(67294),ee=r(69553),oe=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],re=E.forwardRef(function(y,i){var t=y.fieldProps,v=y.unCheckedChildren,w=y.checkedChildren,a=y.proFieldProps,G=(0,ue.Z)(y,oe);return(0,e.jsx)(ee.Z,(0,Y.Z)({valueType:"switch",fieldProps:(0,Y.Z)({unCheckedChildren:v,checkedChildren:w},t),ref:i,valuePropName:"checked",proFieldProps:a,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},G))}),le=re,ae=r(7338),d=r(36275),C=r(12461),H=r(71577),se=r(63463),u=r(53912),n=r(83962),h=r(85402),l=r(80737),c=r(34041),S=function(i){var t=(0,d.useIntl)(),v=E.useState(),w=b()(v,2),a=w[0],G=w[1];return E.useEffect(function(){(0,u.Uy)().then(function(p){var T=[];p!=null&&p.items!=null&&p.items.forEach(function(O){T.push({label:O.name,value:O.name})}),G(T)})},[]),(0,e.jsx)(h.Z,{width:800,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:t.formatMessage({id:"pages.userList.form.userConfig",defaultMessage:"\u7528\u6237\u7F16\u8F91"}),visible:i.updateModalVisible,onCancel:function(){i.onCancel()},footer:null,children:(0,e.jsxs)(n.A,{initialValues:{name:i.values.name,email:i.values.email,password:i.values.password,active:i.values.active,avatar:i.values.avatar,roles:i.values.roles},title:t.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),onFinish:function(){var p=M()(s()().mark(function T(O){return s()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,i.onSubmit(P()(P()({},i.values),O));case 2:return _.abrupt("return",!0);case 3:case"end":return _.stop()}},T)}));return function(T){return p.apply(this,arguments)}}(),submitter:{submitButtonProps:{},render:function(T){return[(0,e.jsx)(H.Z,{type:"primary",onClick:function(){var x,_;return(x=T.form)===null||x===void 0||(_=x.submit)===null||_===void 0?void 0:_.call(x)},children:"\u63D0\u4EA4"},"submit"),(0,e.jsx)(H.Z,{type:"dashed",onClick:function(){var x;return(x=T.form)===null||x===void 0?void 0:x.resetFields()},children:"\u91CD\u7F6E"},"rest"),(0,e.jsx)(H.Z,{type:"dashed",onClick:function(){return i.onCancel()},children:"\u53D6\u6D88"},"cancel")]}},children:[(0,e.jsx)(D.Z,{rules:[{required:!0,message:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.ruleName",defaultMessage:"User name is required"})}],name:"name",disabled:!0,placeholder:t.formatMessage({id:"pages.userList.form.name",defaultMessage:"User name"}),label:t.formatMessage({id:"pages.userList.form.name",defaultMessage:"User name"})}),(0,e.jsx)(D.Z,{name:"email",placeholder:t.formatMessage({id:"pages.userList.form.email.placeholder",defaultMessage:"User email"}),label:t.formatMessage({id:"pages.userList.form.email",defaultMessage:"User email"})}),(0,e.jsx)(D.Z.Password,{rules:[{required:!0,message:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.password.rule",defaultMessage:"User password is required"})}],name:"password",placeholder:t.formatMessage({id:"pages.userList.form.password.placeholder",defaultMessage:"User password"}),label:t.formatMessage({id:"pages.userList.form.password",defaultMessage:"User password"})}),(0,e.jsx)(le,{name:"active",placeholder:t.formatMessage({id:"pages.userList.form.active.placeholder",defaultMessage:"User active"}),label:t.formatMessage({id:"pages.userList.form.active",defaultMessage:"User active"})}),(0,e.jsx)(D.Z,{name:"avatar",placeholder:t.formatMessage({id:"pages.userList.form.avatar.placeholder",defaultMessage:"User avatar"}),label:t.formatMessage({id:"pages.userList.form.avatar",defaultMessage:"User avatar"})}),(0,e.jsx)(l.Z.Item,{name:"roles",label:t.formatMessage({id:"pages.userList.form.roles",defaultMessage:"Roles"}),children:(0,e.jsx)(c.Z,{mode:"multiple",options:a,placeholder:t.formatMessage({id:"pages.userList.form.roles.placeholder",defaultMessage:"Roles"})})})]})})},f=S,F=function(){var y=M()(s()().mark(function i(t){var v,w,a;return s()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return v=C.ZP.loading("Adding"),p.prev=1,w="user",a="v1",p.next=6,(0,L.g_)(P()(P()({},t),{},{kind:w,apiVersion:a}));case 6:return v(),C.ZP.success("Added successfully"),p.abrupt("return",!0);case 11:return p.prev=11,p.t0=p.catch(1),v(),C.ZP.error("Adding failed, please try again!"),p.abrupt("return",!1);case 16:case"end":return p.stop()}},i,null,[[1,11]])}));return function(t){return y.apply(this,arguments)}}(),he=function(){var y=M()(s()().mark(function i(t){var v;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return v=C.ZP.loading("Updating"),a.prev=1,a.next=4,(0,L.pf)({uid:t.uid},t);case 4:return v(),C.ZP.success("Update is successful"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),v(),C.ZP.error("Update failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},i,null,[[1,9]])}));return function(t){return y.apply(this,arguments)}}(),ve=function(){var y=M()(s()().mark(function i(t){var v;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(v=C.ZP.loading("deleting"),t){a.next=3;break}return a.abrupt("return",!0);case 3:return a.prev=3,a.next=6,(0,L.DZ)({uid:"-"});case 6:return v(),C.ZP.success("Deleted successfully and will refresh soon"),a.abrupt("return",!0);case 11:return a.prev=11,a.t0=a.catch(3),v(),C.ZP.error("Delete failed, please try again"),a.abrupt("return",!1);case 16:case"end":return a.stop()}},i,null,[[3,11]])}));return function(t){return y.apply(this,arguments)}}(),ge=function(){var i=(0,E.useState)(!1),t=b()(i,2),v=t[0],w=t[1],a=(0,E.useState)(!1),G=b()(a,2),p=G[0],T=G[1],O=(0,E.useState)(!1),x=b()(O,2),_=x[0],de=x[1],z=(0,E.useRef)(),je=(0,E.useState)(),ce=b()(je,2),R=ce[0],te=ce[1],Pe=(0,E.useState)([]),pe=b()(Pe,2),ne=pe[0],me=pe[1],W=(0,d.useIntl)(),fe=[{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(o,m){return(0,e.jsx)("a",{onClick:function(){te(m),de(!0)},children:o})}},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.userName.nameLabel",defaultMessage:"User name"}),dataIndex:"name"},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.roles",defaultMessage:"roles"}),dataIndex:"roles",renderText:function(o){return o&&o.join(", ")}},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.email",defaultMessage:"user email"}),dataIndex:"email"},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.active",defaultMessage:"active"}),dataIndex:"active",renderText:function(o){return o?(0,e.jsx)($.Z,{}):(0,e.jsx)(X.Z,{})}},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.avatar",defaultMessage:"avatar"}),dataIndex:"avatar",valueType:"image"},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.titleCreatedAt",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,e.jsx)(d.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(o,m){return[(0,e.jsx)("a",{onClick:function(){T(!0),te(m)},children:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.userConfig",defaultMessage:"Configuration"})},"config")]}}];return(0,e.jsxs)(I.ZP,{children:[(0,e.jsx)(B.Z,{headerTitle:W.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:z,rowKey:"uid",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsxs)(H.Z,{type:"primary",onClick:function(){w(!0)},children:[(0,e.jsx)(U.Z,{})," ",(0,e.jsx)(d.FormattedMessage,{id:"pages.common.new",defaultMessage:"New"})]},"primary")]},request:M()(s()().mark(function g(){var o;return s()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,(0,L.Lh)();case 2:return o=j.sent,j.abrupt("return",{data:o.items,success:!0});case 4:case"end":return j.stop()}},g)})),columns:fe,rowSelection:{onChange:function(o,m){me(m)}}}),(ne==null?void 0:ne.length)>0&&(0,e.jsx)(k.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(d.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:ne.length})," ",(0,e.jsx)(d.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,e.jsx)(H.Z,{onClick:M()(s()().mark(function g(){var o,m;return s()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,ve(ne);case 2:me([]),(o=z.current)===null||o===void 0||(m=o.reloadAndRest)===null||m===void 0||m.call(o);case 4:case"end":return J.stop()}},g)})),children:(0,e.jsx)(d.FormattedMessage,{id:"pages.common.batchDeletion",defaultMessage:"Batch deletion"})})}),(0,e.jsxs)(q.Y,{title:W.formatMessage({id:"pages.userList.form.newUser",defaultMessage:"New user"}),width:"400px",visible:v,onVisibleChange:w,onFinish:function(){var g=M()(s()().mark(function o(m){var j;return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,F(m);case 2:j=Z.sent,j&&(w(!1),z.current&&z.current.reload());case 4:case"end":return Z.stop()}},o)}));return function(o){return g.apply(this,arguments)}}(),children:[(0,e.jsx)(D.Z,{rules:[{required:!0,message:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.ruleName",defaultMessage:"User name is required"})}],width:"md",name:"name",placeholder:W.formatMessage({id:"pages.userList.form.name",defaultMessage:"User name"})}),(0,e.jsx)(D.Z,{width:"md",name:"email",placeholder:W.formatMessage({id:"pages.userList.form.email.placeholder",defaultMessage:"User email"})}),(0,e.jsx)(D.Z.Password,{rules:[{required:!0,message:(0,e.jsx)(d.FormattedMessage,{id:"pages.userList.form.password.rule",defaultMessage:"User password is required"})}],width:"md",name:"password",placeholder:W.formatMessage({id:"pages.userList.form.password.placeholder",defaultMessage:"User password"})}),(0,e.jsx)(le,{width:"md",name:"active",placeholder:W.formatMessage({id:"pages.userList.form.active.placeholder",defaultMessage:"User active"}),label:W.formatMessage({id:"pages.userList.form.active",defaultMessage:"Active"})}),(0,e.jsx)(D.Z,{width:"md",name:"avatar",placeholder:W.formatMessage({id:"pages.userList.form.avatar.placeholder",defaultMessage:"User avatar"})})]}),(0,e.jsx)(f,{onSubmit:function(){var g=M()(s()().mark(function o(m){var j;return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,he(m);case 2:j=Z.sent,j&&(T(!1),te(void 0),z.current&&z.current.reload());case 4:case"end":return Z.stop()}},o)}));return function(o){return g.apply(this,arguments)}}(),onCancel:function(){T(!1),_||te(void 0)},updateModalVisible:p,values:R||{}}),(0,e.jsx)(se.Z,{width:600,open:_,onClose:function(){te(void 0),de(!1)},closable:!1,children:(R==null?void 0:R.uid)&&(0,e.jsx)(ae.vY,{column:2,title:R==null?void 0:R.uid,request:M()(s()().mark(function g(){return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",{data:R||{}});case 1:case"end":return m.stop()}},g)})),params:{id:R==null?void 0:R.uid},columns:fe})})]})},Me=ge},53912:function(ie,K,r){r.d(K,{Fe:function(){return E},Uy:function(){return d},v9:function(){return k},vh:function(){return ue}});var V=r(97548),b=r.n(V),N=r(97983),s=r.n(N),Q=r(11281),P=r.n(Q),A=r(40794),M=r.n(A),L=r(36275),$=null,X=["uid"],U=["uid"],I=null,B=null;function k(u,n){return q.apply(this,arguments)}function q(){return q=M()(s()().mark(function u(n,h){return s()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,L.request)("/api/apps/v1/role",P()({method:"POST",headers:{"Content-Type":"application/json"},data:n},h||{})));case 1:case"end":return c.stop()}},u)})),q.apply(this,arguments)}function D(u,n){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime().mark(function u(n,h){var l,c;return _regeneratorRuntime().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=n.uid,c=_objectWithoutProperties(n,$),f.abrupt("return",request("/api/apps/v1/role/".concat(l),_objectSpread({method:"GET",params:_objectSpread({},c)},h||{})));case 2:case"end":return f.stop()}},u)})),Y.apply(this,arguments)}function ue(u,n,h){return e.apply(this,arguments)}function e(){return e=M()(s()().mark(function u(n,h,l){var c,S;return s()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return c=n.uid,S=b()(n,X),F.abrupt("return",(0,L.request)("/api/apps/v1/role/".concat(c),P()({method:"PUT",headers:{"Content-Type":"application/json"},params:P()({},S),data:h},l||{})));case 2:case"end":return F.stop()}},u)})),e.apply(this,arguments)}function E(u,n){return ee.apply(this,arguments)}function ee(){return ee=M()(s()().mark(function u(n,h){var l,c;return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=n.uid,c=b()(n,U),f.abrupt("return",(0,L.request)("/api/apps/v1/role/".concat(l),P()({method:"DELETE",params:P()({},c)},h||{})));case 2:case"end":return f.stop()}},u)})),ee.apply(this,arguments)}function oe(u,n,h){return re.apply(this,arguments)}function re(){return re=_asyncToGenerator(_regeneratorRuntime().mark(function u(n,h,l){var c,S;return _regeneratorRuntime().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return c=n.uid,S=_objectWithoutProperties(n,I),F.abrupt("return",request("/api/apps/v1/role/".concat(c),_objectSpread({method:"PATCH",headers:{"Content-Type":"application/merge-patch+json"},params:_objectSpread({},S),data:h},l||{})));case 2:case"end":return F.stop()}},u)})),re.apply(this,arguments)}function le(u,n){return ae.apply(this,arguments)}function ae(){return ae=_asyncToGenerator(_regeneratorRuntime().mark(function u(n,h){var l,c;return _regeneratorRuntime().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=n.uid,c=_objectWithoutProperties(n,B),f.abrupt("return",request("/api/apps/v1/role/".concat(l,"/watch"),_objectSpread({method:"GET",params:_objectSpread({},c)},h||{})));case 2:case"end":return f.stop()}},u)})),ae.apply(this,arguments)}function d(u){return C.apply(this,arguments)}function C(){return C=M()(s()().mark(function u(n){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,L.request)("/api/apps/v1/role/list",P()({method:"GET"},n||{})));case 1:case"end":return l.stop()}},u)})),C.apply(this,arguments)}function H(u){return se.apply(this,arguments)}function se(){return se=_asyncToGenerator(_regeneratorRuntime().mark(function u(n){return _regeneratorRuntime().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",request("/api/apps/v1/role/watch",_objectSpread({method:"GET"},n||{})));case 1:case"end":return l.stop()}},u)})),se.apply(this,arguments)}}}]);
