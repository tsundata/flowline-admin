"use strict";(self.webpackChunkflowline_admin=self.webpackChunkflowline_admin||[]).push([[16],{5156:function(Z,m,e){e.r(m);var O=e(55559),c=e.n(O),p=e(80164),u=e.n(p),T=e(45223),_=e.n(T),P=e(34461),C=e(19126),j=e(48705),I=e(51851),x=e(60415),a=e(95952),L=e(60331),R=e(25084),U=e(50146),l=e(67294),t=e(85893),b=function(){var A=(0,l.useState)(!1),M=u()(A,2),W=M[0],E=M[1],K=(0,l.useRef)(),B=(0,l.useState)(),v=u()(B,2),s=v[0],r=v[1],w=(0,l.useState)(!1),f=u()(w,2),S=f[0],g=f[1],y=function(){g(!0)},D=function(){r(void 0),g(!1)},F=(0,a.useIntl)(),h=[{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.uid",defaultMessage:"UID"}),dataIndex:"uid",tip:"The uid is the unique key",render:function(n,d){return(0,t.jsx)("a",{onClick:function(){r(d),E(!0)},children:n})}},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.jobList.name",defaultMessage:"Job name"}),dataIndex:"name"},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.state",defaultMessage:"State"}),dataIndex:"state",renderText:function(n){return(0,t.jsx)(L.Z,{color:n=="failed"?"orange":n=="success"?"green":"blue",children:n})}},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.jobList.workflowUID",defaultMessage:"Workflow UID"}),dataIndex:"workflowUID"},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.jobList.completionTimestamp",defaultMessage:"Completion time"}),sorter:!0,dataIndex:"completionTimestamp",valueType:"dateTime"},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.creationTimestamp",defaultMessage:"Created time"}),sorter:!0,dataIndex:"creationTimestamp",valueType:"dateTime"},{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",width:100,render:function(n,d){return[(0,t.jsx)("a",{onClick:function(){r(d),y()},children:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"})},"events")]}}];return(0,t.jsxs)(j._z,{children:[(0,t.jsx)(I.Z,{headerTitle:F.formatMessage({id:"pages.common.tableTitle",defaultMessage:"Enquiry form"}),actionRef:K,rowKey:"uid",search:{labelWidth:120},request:c()(_().mark(function o(){var n;return _().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,C.qE)();case 2:return n=i.sent,i.abrupt("return",{data:n.items,success:!0});case 4:case"end":return i.stop()}},o)})),columns:h}),(0,t.jsx)(R.Z,{width:600,visible:W,onClose:function(){r(void 0),E(!1)},closable:!1,children:s?.uid&&(0,t.jsx)(x.vY,{column:2,title:s?.uid,request:c()(_().mark(function o(){return _().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",{data:s||{}});case 1:case"end":return d.stop()}},o)})),params:{id:s?.uid},columns:h})}),(0,t.jsx)(U.Z,{title:(0,t.jsx)(a.FormattedMessage,{id:"pages.common.events",defaultMessage:"Events"}),width:1500,visible:S,onOk:D,onCancel:D,children:s?.uid&&(0,t.jsx)(P.Z,{uid:s?.uid})})]})};m.default=b}}]);