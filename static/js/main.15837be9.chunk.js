(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(16),i=n.n(s),r=n(8),c=n(17),l=n(18),u=n(22),d=n(20),o=n(19),h=n(6),j=n(12),b=n(15),p=n(14),f=n(21),O=n(13),v=n(4),m=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={userInput:"",list:[],help:!1,try:""},a}return Object(l.a)(n,[{key:"updateInput",value:function(t){this.setState({userInput:t})}},{key:"addItem",value:function(t){if(13==t.keyCode&&""!==this.state.userInput){var e={id:Math.random(),value:this.state.userInput},n=Object(r.a)(this.state.list);n.push(e),this.setState({list:n,userInput:""})}}},{key:"deleteItem",value:function(t){var e=Object(r.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"helpMe",value:function(){var t=Object(r.a)(this.state.list),e=Math.floor(Math.random()*t.length);console.log(e);var n=t[e].value;this.setState({help:!0,try:n})}},{key:"render",value:function(){var t=this,e=null;return this.state.help&&(e=Object(v.jsxs)("div",{children:["Maybe try to...",this.state.try]})),Object(v.jsxs)(o.a,{children:[Object(v.jsx)(h.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3rem",fontWeight:"bolder"},children:"TODO LIST"}),Object(v.jsx)("hr",{}),Object(v.jsx)(h.a,{children:Object(v.jsxs)(j.a,{md:{span:5,offset:4},children:[Object(v.jsxs)(p.a,{className:"mb-3",children:[Object(v.jsx)(f.a,{placeholder:"add item . . . ",size:"lg",value:this.state.userInput,onChange:function(e){return t.updateInput(e.target.value)},"aria-label":"add something","aria-describedby":"basic-addon2",onKeyDown:function(e){return t.addItem(e)}}),Object(v.jsxs)(p.a.Append,{children:[Object(v.jsx)(b.a,{variant:"dark",size:"lg",onClick:function(){return t.addItem()},children:"ADD"}),Object(v.jsx)(b.a,{variant:"light",size:"lg",onClick:function(){return t.helpMe()},children:"Help me !"})]})]}),e]})}),Object(v.jsx)(h.a,{children:Object(v.jsx)(j.a,{md:{span:5,offset:4},children:Object(v.jsx)(O.a,{children:this.state.list.map((function(e){return Object(v.jsx)(O.a.Item,{variant:"dark",action:!0,onClick:function(){return t.deleteItem(e.id)},children:e.value},e.id)}))})})})]})}}]),n}(a.Component);n(32);i.a.render(Object(v.jsx)(m,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.15837be9.chunk.js.map