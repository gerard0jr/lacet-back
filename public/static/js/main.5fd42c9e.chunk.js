(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){e.exports=a(375)},219:function(e,t,a){},220:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(219),a(29)),s=a(30),i=a(32),u=a(31),m=a(33),d=(a(220),a(378)),h=a(377),p=a(16),g=a(133),E=a.n(g),f=function(e){var t=e.clearSearch;return r.a.createElement("div",null,r.a.createElement(p.a,{color:"secondary",position:"static"},r.a.createElement(p.h,null,r.a.createElement("img",{onClick:t,style:{cursor:"pointer",marginLeft:"1rem",width:"90px"},src:"/img/small-logo.png",alt:"navbar-logo"}),r.a.createElement("div",{className:"grow"}),r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search-icon"},r.a.createElement(E.a,null)),r.a.createElement(p.f,{placeholder:"Buscar",className:"input-input"})))))},v=function(e){var t=e.searchNow,a=e.handleChange,n=e.searchInput,l=e.logoWidth;return r.a.createElement("div",{className:"main-search"},r.a.createElement("img",{width:l,src:"/img/logo.png",alt:"bdLogo"}),r.a.createElement("p",null,"Un buscador de ",r.a.createElement("b",null,"algas "),"pensado para fic\xf3logos y no tan fic\xf3logos"),r.a.createElement("form",{className:"input-flex"},r.a.createElement(p.g,{className:"text-field",label:"T\xe9rmino a buscar...",variant:"outlined",name:"input",value:n.input,onChange:a}),r.a.createElement(p.b,{onClick:t,variant:"contained",color:"primary"},"Buscar")))},b=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("small",null,"Laboratorio de Algas Continentales - Ecolog\xeda y Taxonom\xeda, Facultad de Ciencias, UNAM. Todos los derechos reservados. \xa0 Colaboraci\xf3n de Gerardo y Rodrigo"))},y=a(134),w=a.n(y),N=function(e){var t=e.results,a=e.searched;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"transition-test",style:{margin:"1rem 0 3rem 0"}},t?r.a.createElement("div",{className:"results-quantity"},t.length," resultados"):"",t&&t!==[]?t.map(function(e,t){return r.a.createElement(p.c,{style:{width:"80%",margin:"0 auto",backgroundColor:"#f7f7f7",marginBottom:"10px"}},r.a.createElement(p.e,{expandIcon:r.a.createElement(w.a,null)},r.a.createElement(p.i,null,e?e.title.slice(1,-1):"")),r.a.createElement(p.d,null,r.a.createElement(p.i,{style:{textAlign:"left"}},r.a.createElement("p",null,"Notas: ",e.notes.slice(1,-1)))))}):""):"")},C=a(50),O=a.n(C),j=function(e){return O.a.post("".concat("http://localhost:3000","/searchNow"),e,{}).then(function(e){return e}).catch(function(e){return e.response})},x=a(138),k=a(135),I=a.n(k),S=a(136),F=a.n(S),T=function(e){var t=e.searched,a=Object(n.useState)(!1),l=Object(x.a)(a,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("div",{className:"toggle-filters",onClick:function(){return o(!c)}},r.a.createElement("p",null,c?r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},"Ocultar filtros ",r.a.createElement(I.a,null)):r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},"Mostrar filtros ",r.a.createElement(F.a,null)))),r.a.createElement("div",null,c?r.a.createElement("div",null,"Pr\xf3ximamente"):"")):"")},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:{},results:[],searched:!1,logoWidth:"30%"},a.handleChange=function(e){var t=a.state.searchInput;t[e.target.name]=e.target.value,a.setState({searchInput:t})},a.searchNow=function(e){e.preventDefault();var t=a.state.searchInput;j(t).then(function(e){a.setState({results:e.data,logoWidth:"15%",searched:!0})}).catch(function(e){return console.log(e)})},a.clearSearch=function(){return a.setState({searchInput:{input:""},results:[],searched:!1,logoWidth:"30%"})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchInput,a=e.results,n=e.logoWidth,l=e.searched,c=this.handleChange,o=this.searchNow,s=this.clearSearch;return console.log(a),r.a.createElement("div",{className:"background",style:{height:"100%"}},r.a.createElement(f,{handleChange:c,searchNow:o,clearSearch:s}),r.a.createElement(v,{searchInput:t,handleChange:c,searchNow:o,logoWidth:n}),r.a.createElement(T,{searched:l}),r.a.createElement(N,{searchInput:t,results:a,searched:l}),r.a.createElement(b,null))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loaded:0,message:"",registers:null,xml:{}},a.handleFile=function(e){var t,n=a.state.xml;t=e.target.files[0];var r=new FileReader;r.readAsText(t,"UTF-8"),r.onload=function(e){n.data=e.target.result,a.setState({xml:n,loaded:0})}},a.sendFile=function(e){e.preventDefault();var t=a.state.xml;O.a.post("http://localhost:3000/upload",t,{onUploadProgress:function(e){a.setState({loaded:e.loaded/e.total*100})}}).then(function(e){return a.setState({registers:e,message:"Subido correctamente"},function(){return console.log(e)})}).catch(function(e){return e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.message,n=e.registers,l=this.handleFile,c=this.sendFile;return console.log(n),r.a.createElement("div",null,r.a.createElement("h1",null,"Subir archivo de base de datos"),r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:l}),r.a.createElement("button",{onClick:c},"Enviar")),r.a.createElement("div",null," ",Math.round(t,2)," %"),r.a.createElement("div",null,a||""))}}]),t}(n.Component),B=function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:W}),r.a.createElement(h.a,{path:"/upload",component:A}))},M=a(19),U=a(49),L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(M.createMuiTheme)({palette:{primary:U.teal,secondary:{main:"#355C57"}}});return r.a.createElement("div",{className:"App"},r.a.createElement(M.MuiThemeProvider,{theme:e},r.a.createElement(B,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(376);c.a.render(r.a.createElement(function(){return r.a.createElement(P.a,null,r.a.createElement(L,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.5fd42c9e.chunk.js.map