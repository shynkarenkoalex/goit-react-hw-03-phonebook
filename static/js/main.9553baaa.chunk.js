(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){t.exports=n(26)},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(10),r=n.n(o),l=n(12),i=n(1),s=n(2),u=n(4),m=n(5),h=n(11),f=n.n(h),b=(n(20),function(t){var e=t.children;return c.a.createElement("div",{className:"Layout"},e)}),d=(n(21),function(t){var e=t.nameItem,n=t.numberItem,a=t.onRemove;return c.a.createElement("li",{className:"Contact-item"},c.a.createElement("p",{className:"Contact-text"},e,": ",n),c.a.createElement("section",{className:"Contact-actions"},c.a.createElement("button",{type:"button",className:"Contact-button",onClick:a},"Remove")))}),v=(n(22),function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",{className:"ContactList"},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(d,{key:e,nameItem:a,numberItem:o,onRemove:function(){return n(e)}})})))}),p=n(3),C=n(6),g=(n(23),{name:"",number:""}),E=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(C.a)({},g),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.state.name.trim().length>0?t.props.onAddContact(Object(C.a)({},t.state)):alert("Field Name is required"),t.reset()},t.reset=function(){t.setState(Object(C.a)({},g))},t}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{className:"ContactForm",onSubmit:this.handleSubmit},c.a.createElement("label",{className:"ContactForm-label"},"Name",c.a.createElement("input",{className:"ContactForm-input",type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),c.a.createElement("label",{className:"ContactForm-label"},"Number",c.a.createElement("input",{className:"ContactForm-input",type:"text",name:"number",value:this.state.number,onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"ContactForm-button"},"Add contact"))}}]),n}(a.Component),y=(n(24),function(t){var e=t.valueFilter,n=t.onChangeFilter;return c.a.createElement("label",{className:"Filter-label"},"Find contacts by name",c.a.createElement("input",{type:"text",className:"Filter-input",value:e,onChange:function(t){return n(t.target.value)}}))}),N=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e.name}));if(t.state.contacts.length>0&&n)alert("contact with name ".concat(e.name," is allready exist"));else{var a={id:f()(),name:e.name,number:e.number};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))}},t.handleChangeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=localStorage.getItem("contacts");null!==t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e,n){console.log("componentDidUpdate"),e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return c.a.createElement(b,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(E,{onAddContact:this.handleAddContact}),c.a.createElement("h2",null,"Contacts"),e.length>1&&c.a.createElement(y,{valueFilter:n,onChangeFilter:this.handleChangeFilter}),a.length>0&&c.a.createElement(v,{contacts:a,onRemoveContact:this.handleRemoveContact}))}}]),n}(a.Component);n(25);r.a.render(c.a.createElement(N,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.9553baaa.chunk.js.map