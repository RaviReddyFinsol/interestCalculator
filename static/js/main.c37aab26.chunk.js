(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{85:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),l=a.n(c),r=(a(85),a(33)),o=a(12),s=a(32),j=a(126),d=a(130),m=a(95),u=a(152),b=a(131),O=a(150),g=a(154),h=(a(135),a(149),a(156),a(137)),x=a(68),f=a(3);var y=a(65),p=a(66),v=a(141),T=a(142),C=a(136),w=a(143),W=a(144),S=a(145),z=a(146),N=a(132),k=a(147),D=a(148),F=a(153),L=a(139),B=a(140),I=a(138),P=a(44),A=a.n(P),H=Object(I.a)((function(e){return{fieldControl:{width:"80%",maxWidth:300},buttonControl:{width:"40%"},container:{width:500,height:650,minHeight:"100%",margin:10}}}));var E=function(e){var t=e.details,a=e.closeDialog,c=e.addStrategy,l=e.updateStrategy,y=Object(n.useState)({teamOne:"",teamTwo:"",legs:[{legType:"Leg 1",legName:"",legSide:"1",ratio:0,amount:0},{legType:"Leg 2",legName:"",legSide:"2",ratio:0,amount:0},{legType:"Leg 3",legName:"",legSide:"2",ratio:0,amount:0}],teamOneWin:0,teamTwoWin:0}),p=Object(s.a)(y,2),v=p[0],T=p[1];Object(n.useEffect)((function(){t.strategyDetails&&T(t.strategyDetails)}),[t.strategyDetails]);var C=function(e){T(Object(o.a)(Object(o.a)({},v),{},Object(r.a)({},e.target.name,e.target.value)))},w=function(e,t){var a=v.legs.filter((function(e){return e.legType!==t.legType})),n=Object(o.a)({},t);n[e.target.name]=e.target.value,a.push(n),T(Object(o.a)(Object(o.a)({},v),{},{legs:A.a.orderBy(a,"legType")}))},W=H();return Object(f.jsx)("div",{className:W.container,children:Object(f.jsxs)(F.a,{open:t.state,onClose:a,children:[Object(f.jsxs)(L.a,{children:[t.strategyDetails?"Update":"Add"," Strategy"]}),Object(f.jsxs)(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,className:W.container,children:[Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsx)(g.a,{variant:"outlined",label:"Team 1 name",size:"small",fullWidth:!0,name:"teamOne",value:v.teamOne,onChange:C})}),Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsx)(g.a,{variant:"outlined",label:"Team 2 name",size:"small",fullWidth:!0,name:"teamTwo",value:v.teamTwo,onChange:C})}),v.legs.map((function(e){return Object(f.jsxs)(i.a.Fragment,{children:[Object(f.jsxs)(j.a,{item:!0,xs:12,children:[Object(f.jsx)(B.a,{}),Object(f.jsx)(x.a,{color:"secondary",children:e.legType})]}),Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsxs)(d.a,{component:"fieldset",children:[Object(f.jsx)(m.a,{component:"legend",children:"My Team"}),Object(f.jsxs)(u.a,{"aria-label":"team",name:"legSide",value:e.legSide,row:!0,onChange:function(t){return w(t,e)},children:[Object(f.jsx)(b.a,{value:"1",control:Object(f.jsx)(O.a,{}),label:"Team1"}),Object(f.jsx)(b.a,{value:"2",control:Object(f.jsx)(O.a,{}),label:"Team2"})]})]})}),Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsx)(g.a,{variant:"outlined",label:"Leg Name",size:"small",fullWidth:!0,name:"legName",value:e.legName,onChange:function(t){return w(t,e)}})}),Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsx)(g.a,{variant:"outlined",label:"Ratio",size:"small",fullWidth:!0,name:"ratio",value:e.ratio,onChange:function(t){return w(t,e)}})}),Object(f.jsx)(j.a,{item:!0,xs:6,children:Object(f.jsx)(g.a,{variant:"outlined",label:"Invested",size:"small",fullWidth:!0,name:"amount",value:e.amount,onChange:function(t){return w(t,e)}})})]},e.legType)})),Object(f.jsx)(j.a,{item:!0,container:!0,justify:"space-around",alignItems:"center",direction:"row",children:Object(f.jsxs)(f.Fragment,{children:[t.strategyDetails?Object(f.jsx)(h.a,{variant:"contained",color:"primary",size:"small",className:W.buttonControl,onClick:function(){return l(v)},children:"Update"}):Object(f.jsx)(h.a,{variant:"contained",color:"primary",size:"small",className:W.buttonControl,onClick:function(){return c(v)},children:"Save"}),Object(f.jsx)(h.a,{variant:"contained",color:"secondary",size:"small",className:W.buttonControl,onClick:a,children:"Cancel"})]})})]})]})})},J=a(5),M=Object(I.a)({tableContainer:{maxHeight:500,margin:7,width:"95%"},fieldControl:{width:"80%",maxWidth:300,marginTop:10}}),U=Object(J.a)((function(e){return{head:{backgroundColor:"dodgerBlue",color:e.palette.common.white},body:{fontSize:12,fontWeight:"600"}}}))(v.a),R=Object(J.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(T.a);var q=function(){var e=Object(n.useState)({state:!1,strategyDetails:null}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),r=Object(s.a)(l,2),j=r[0],d=r[1],m=function(){c({state:!1,strategyDetails:null})},u=function(e){e.teamOneWin=0,e.teamTwoWin=0;var t,a=Object(y.a)(e.legs);try{for(a.s();!(t=a.n()).done;){var n=t.value,i=n.amount*n.ratio;"1"===n.legSide?(e.teamOneWin+=i,e.teamTwoWin-=n.amount):(e.teamOneWin-=n.amount,e.teamTwoWin+=i)}}catch(c){a.e(c)}finally{a.f()}},b=M();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(h.a,{variant:"contained",color:"primary",size:"small",onClick:function(){c(Object(o.a)(Object(o.a)({},a),{},{state:!0}))},style:{marginTop:"10px",marginLeft:"20px"},children:"Add Team"}),Object(f.jsx)(C.a,{children:Object(f.jsx)(w.a,{component:C.a,className:b.tableContainer,children:Object(f.jsxs)(W.a,{stickyHeader:!0,size:"small",children:[Object(f.jsx)(S.a,{children:Object(f.jsxs)(T.a,{children:[Object(f.jsx)(U,{children:"Teams"}),Object(f.jsx)(U,{children:"Team 1 Profit"}),Object(f.jsx)(U,{children:"Team 2 Profit"}),j.length>0&&j[0].legs.map((function(e){return Object(f.jsx)(i.a.Fragment,{children:Object(f.jsx)(U,{children:e.legType})},e.legType)})),Object(f.jsx)(U,{children:"Actions"})]})}),Object(f.jsx)(z.a,{children:j.map((function(e){return Object(f.jsxs)(R,{children:[Object(f.jsxs)(U,{children:[e.teamOne," vs ",e.teamTwo]}),Object(f.jsx)(U,{style:e.teamOneWin<0?{color:"red"}:{color:"blue"},children:e.teamOneWin}),Object(f.jsx)(U,{style:e.teamTwoWin<0?{color:"red"}:{color:"blue"},children:e.teamTwoWin}),e.legs.map((function(t){return Object(f.jsx)(i.a.Fragment,{children:Object(f.jsxs)(U,{children:["1"===t.legSide?e.teamOne:e.teamTwo," / ",t.ratio," / ",t.amount," / ",t.legName]})},t.legType)})),Object(f.jsxs)(U,{children:[Object(f.jsx)(N.a,{size:"small",onClick:function(){return function(e){c({strategyDetails:Object(o.a)({},e),state:!0})}(e)},children:Object(f.jsx)(k.a,{size:"small",color:"primary"})}),Object(f.jsx)(N.a,{size:"small",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));d(t)}(e.id)},children:Object(f.jsx)(D.a,{size:"small",color:"secondary"})})]})]},e.id)}))})]})})})]}),a.state&&Object(f.jsx)(E,{details:a,closeDialog:m,addStrategy:function(e){var t=Object(o.a)({},e);t.id=t.teamOne+t.teamTwo,u(t),d(A.a.orderBy([].concat(Object(p.a)(j),[t]),"id")),m()},updateStrategy:function(e){var t=j.filter((function(t){return t.id!==e.id})),a=Object(o.a)({},e);u(a),t.push(a),d(A.a.orderBy(t,"id")),m()}})]})};var G=function(){return Object(f.jsx)(q,{})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),c(e),l(e)}))};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(G,{})}),document.getElementById("root")),K()}},[[94,1,2]]]);
//# sourceMappingURL=main.c37aab26.chunk.js.map