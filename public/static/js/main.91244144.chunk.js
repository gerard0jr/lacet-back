(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(401)},228:function(e,t,a){},229:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=(a(228),a(23)),s=a(24),o=a(26),m=a(25),u=a(27),d=(a(229),a(404)),h=a(403),g=a(157),f=a(5),E=a(152),p=a.n(E),b=function(e){var t=e.clearSearch,a=e.handleChange,n=e.handleKeyPress,r=e.searchNow;return l.a.createElement("div",null,l.a.createElement(f.a,{color:"secondary",position:"static"},l.a.createElement(f.j,null,l.a.createElement("img",{onClick:t,style:{cursor:"pointer",marginLeft:"1rem",width:"90px"},src:"/img/small-logo.png",alt:"navbar-logo"}),l.a.createElement("div",{className:"grow"}),l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"search-icon"},l.a.createElement(p.a,{style:{cursor:"pointer"},onClick:r})),l.a.createElement(f.h,{id:"search-navbar",name:"input",placeholder:"Buscar",className:"input-input",autoComplete:"off",onChange:a,onKeyPress:n})))))},v=function(e){var t=e.searchNow,a=e.handleChange,n=e.filterSubmitted,r=e.logoWidth,c=e.searched,i=e.searchedWord,s=e.handleKeyPress,o=e.handleDelete;return l.a.createElement("div",{className:"main-search"},l.a.createElement("img",{width:r,src:"/img/logo.png",alt:"bdLogo"}),c?l.a.createElement("div",null,"Resultados relacionados a ",l.a.createElement("b",null,"'",i,"'")):l.a.createElement("div",null,l.a.createElement("p",null,"Un buscador de ",l.a.createElement("b",null,"algas "),"pensado para fic\xf3logos y no tan fic\xf3logos"),l.a.createElement("div",{className:"input-flex"},l.a.createElement(f.i,{className:"text-field",label:"T\xe9rmino a buscar...",variant:"outlined",name:"input",id:"main-search",onChange:a,onKeyPress:s}),l.a.createElement(f.b,{onClick:t,variant:"contained",color:"primary"},"Buscar"))),Object.keys(n).length>0?l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"1rem"}},n.distribution&&n.distribution.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("distribution")},label:"Distribuci\xf3n: ".concat(n.distribution)})):"",n.lifeForms&&n.lifeForms.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("lifeForms")},label:"Formas de vida: ".concat(n.lifeForms)})):"",n.references&&n.references.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("references")},label:"Referencias: ".concat(n.references)})):"",n.others&&n.others.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("others")},label:"Otros registros: ".concat(n.others)})):"",n.ambient&&n.ambient.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("ambient")},label:"Ambiente: ".concat(n.ambient)})):"",n.taxonomic&&n.taxonomic.length>0?l.a.createElement("div",{style:{margin:"0 1rem"}},l.a.createElement(f.c,{deleteIcon:"default",onDelete:function(){return o("taxonomic")},label:"Comentario taxon\xf3mico: ".concat(n.taxonomic)})):""," "):"")},y=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("small",null,"Laboratorio de Algas Continentales - Ecolog\xeda y Taxonom\xeda, Facultad de Ciencias, UNAM. Todos los derechos reservados. \xa0 Colaboraci\xf3n de Gerardo y Rodrigo"))},C=a(62),x=a.n(C),P=function(e){return x.a.post("".concat("http://bdlacet.mx","/searchNow"),e,{}).then(function(e){return e}).catch(function(e){return e.response})},w=a(156),k=a(153),O=a.n(k),S=a(154),I=a.n(S),F=function(e){var t=e.searched,a=e.handleFilters,r=e.applyFilters,c=Object(n.useState)(!1),i=Object(w.a)(c,2),s=i[0],o=i[1];return l.a.createElement(l.a.Fragment,null,t?l.a.createElement("div",{style:{marginTop:"1rem"}},l.a.createElement("div",{className:"toggle-filters",onClick:function(){return o(!s)}},l.a.createElement("p",null,s?l.a.createElement("span",{style:{display:"flex",alignItems:"center"}},"Ocultar filtros ",l.a.createElement(O.a,null)):l.a.createElement("span",{style:{display:"flex",alignItems:"center"}},"Mostrar filtros ",l.a.createElement(I.a,null)))),l.a.createElement("div",null,s?l.a.createElement("div",{className:"filtros"},l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"distribution",label:"Distribuci\xf3n"}))),l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"ambient",label:"Ambientes"}))),l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"lifeForms",label:"Formas de vida"}))),l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"references",label:"Referencias"}))),l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"others",label:"Otros registros"}))),l.a.createElement(f.g,{container:!0,alignItems:"flex-end"},l.a.createElement(f.g,{item:!0},l.a.createElement(f.i,{onChange:a,id:"taxonomic",label:"C. taxon\xf3mico"}))),l.a.createElement("div",{style:{margin:"10px",width:"100%"}},l.a.createElement(f.b,{onClick:r,variant:"contained"},"Filtrar"))):"")):"")},j=a(17),N=a(57),B=a.n(N),D=a(58),W=a.n(D),A=a(45),R=a.n(A),M=a(59),T=a.n(M),L=a(60),K=a.n(L),U=a(32),J=a.n(U),q=a(22),G=a.n(q),X=a(97),$=a.n(X),z=a(99),H=a.n(z),Q=a(98),V=a.n(Q),Y=a(96),Z=a.n(Y),_=a(100),ee=a.n(_),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,0)},a.handleBackButtonClick=function(e){a.props.onChangePage(e,a.props.page-1)},a.handleNextButtonClick=function(e){a.props.onChangePage(e,a.props.page+1)},a.handleLastPageButtonClick=function(e){a.props.onChangePage(e,Math.max(0,Math.ceil(a.props.count/a.props.rowsPerPage)-1))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.count,n=e.page,r=e.rowsPerPage,c=e.theme;return l.a.createElement("div",{className:t.root},l.a.createElement(G.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===c.direction?l.a.createElement(Z.a,null):l.a.createElement($.a,null)),l.a.createElement(G.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===c.direction?l.a.createElement(V.a,null):l.a.createElement(H.a,null)),l.a.createElement(G.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"Next Page"},"rtl"===c.direction?l.a.createElement(H.a,null):l.a.createElement(V.a,null)),l.a.createElement(G.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/r)-1,"aria-label":"Last Page"},"rtl"===c.direction?l.a.createElement($.a,null):l.a.createElement(Z.a,null)))}}]),t}(l.a.Component),ae=Object(j.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(te),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={page:0,rowsPerPage:5},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({page:0,rowsPerPage:e.target.value})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.results,n=e.searched,r=e.filterSubmitted,c=void 0===r?{}:r,i=this.state,s=i.rowsPerPage,o=i.page,m=s-Math.min(s,a.length-o*s),u=a.filter(function(e){return c?(!c.distribution||e.custom2.includes(c.distribution))&&(!c.lifeForms||e.custom4.includes(c.lifeForms))&&(!c.references||e.custom1.includes(c.references))&&(!c.others||e.custom5.includes(c.others))&&(!c.ambient||e.custom3.includes(c.ambient))&&(!c.taxonomic||e.misc1.includes(c.taxonomic)):e});return l.a.createElement(l.a.Fragment,null,n?l.a.createElement("div",{className:"transition-test",style:{margin:"1rem 0 3rem 0"}},a?l.a.createElement("div",{className:"results-quantity"},Object.keys(c).length>0?a.filter(function(e){return(!c.distribution||e.custom2.includes(c.distribution))&&(!c.lifeForms||e.custom4.includes(c.lifeForms))&&(!c.references||e.custom1.includes(c.references))&&(!c.others||e.custom5.includes(c.others))&&(!c.ambient||e.custom3.includes(c.ambient))&&(!c.taxonomic||e.misc1.includes(c.taxonomic))}).length:a.length," resultados"):"",l.a.createElement("div",{className:t.tableWrapper},l.a.createElement(B.a,null,l.a.createElement(W.a,null,Object.keys(c).length>0?a.filter(function(e){return(!c.distribution||e.custom2.includes(c.distribution))&&(!c.lifeForms||e.custom4.includes(c.lifeForms))&&(!c.references||e.custom1.includes(c.references))&&(!c.others||e.custom5.includes(c.others))&&(!c.ambient||e.custom3.includes(c.ambient))&&(!c.taxonomic||e.misc1.includes(c.taxonomic))}).slice(o*s,o*s+s).map(function(e){return l.a.createElement(J.a,{key:e.title},l.a.createElement(f.d,{className:"panel-responsive"},l.a.createElement(f.f,{expandIcon:l.a.createElement(ee.a,null)},l.a.createElement(f.k,null,l.a.createElement("b",null,e?e.title.slice(1,-1):""))),l.a.createElement(f.e,{style:{backgroundColor:"#f7f7f7"}},l.a.createElement(f.k,{style:{textAlign:"left"}},l.a.createElement("p",null,l.a.createElement("b",null,"Nombre de la especie:")," ",e.title.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Divisi\xf3n, Orden:")," ",e.notes.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Comentarios taxon\xf3micos:")," ",e.misc1.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Selecci\xf3n:")," ",e.misc2.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Descripci\xf3n:")," ",e.misc3.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Referencias:"),e.custom1.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Distribuci\xf3n, Localidades:")," ",e.custom2.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Ambientes:")," ",e.custom3.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Formas de vida:")," ",e.custom4.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Otros registros:")," ",e.custom5.slice(1,-1))))))}):a.slice(o*s,o*s+s).map(function(e){return l.a.createElement(J.a,{key:e.title},l.a.createElement(f.d,{className:"panel-responsive"},l.a.createElement(f.f,{expandIcon:l.a.createElement(ee.a,null)},l.a.createElement(f.k,null,l.a.createElement("b",null,e?e.title.slice(1,-1):""))),l.a.createElement(f.e,{style:{backgroundColor:"#f7f7f7"}},l.a.createElement(f.k,{style:{textAlign:"left"}},l.a.createElement("p",null,l.a.createElement("b",null,"Nombre de la especie:")," ",e.title.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Divisi\xf3n, Orden:")," ",e.notes.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Comentarios taxon\xf3micos:")," ",e.misc1.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Selecci\xf3n:")," ",e.misc2.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Descripci\xf3n:")," ",e.misc3.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Referencias:"),e.custom1.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Distribuci\xf3n, Localidades:")," ",e.custom2.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Ambientes:")," ",e.custom3.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Formas de vida:")," ",e.custom4.slice(1,-1)),l.a.createElement("p",null,l.a.createElement("b",null,"Otros registros:")," ",e.custom5.slice(1,-1))))))}),m>0&&l.a.createElement(J.a,{style:{height:48*m}},l.a.createElement(R.a,{colSpan:6}))),l.a.createElement(T.a,null,l.a.createElement(J.a,null,l.a.createElement(K.a,{className:"pagination",rowsPerPageOptions:[5,10,25],count:Object.keys(c).length>0?u.length:a.length,rowsPerPage:s,page:o,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:ae,labelRowsPerPage:"Resultados por p\xe1gina:",labelDisplayedRows:function(){return"".concat(o*s+1,"-").concat(Object.keys(c).length>0?o*s+parseInt(s)<u.length?o*s+parseInt(s):u.length:o*s+parseInt(s)<a.length?o*s+parseInt(s):a.length," de ").concat(Object.keys(c).length>0?u.length:a.length)}})))))):"")}}]),t}(l.a.Component),le=Object(j.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},tableWrapper:{overflowX:"auto"}}})(ne),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={searchInput:{},searchedWord:"",results:[],searched:!1,logoWidth:"30%",filters:{},filterSubmitted:{}},a.handleChange=function(e){var t=a.state.searchInput;t[e.target.name]=e.target.value,a.setState({searchInput:t})},a.searchNow=function(e){e.preventDefault();var t=a.state.searchInput;document.getElementById("main-search")&&""!==document.getElementById("main-search").value&&P(t).then(function(e){a.setState({results:e.data,logoWidth:"20%",searched:!0,searchedWord:t.input,searchInput:{input:""}})}).catch(function(e){return console.log(e)}),""!==document.getElementById("search-navbar").value&&P(t).then(function(e){a.setState({results:e.data,logoWidth:"20%",searched:!0,searchedWord:t.input,searchInput:{input:""}})}).catch(function(e){return console.log(e)})},a.handleKeyPress=function(e){"Enter"===e.key&&a.searchNow(e)},a.clearSearch=function(){document.getElementById("search-navbar").value="",a.setState({searchInput:{input:""},results:[],searched:!1,logoWidth:"30%",searchedWord:""})},a.handleFilters=function(e){var t=a.state.filters;t[e.target.id]=e.target.value,a.setState({filters:t})},a.applyFilters=function(){var e=a.state.filters;a.setState({filterSubmitted:Object(g.a)({},e)})},a.handleDelete=function(e){var t=a.state,n=t.filterSubmitted,l=t.filters;switch(e){case"distribution":return document.getElementById("distribution").value="",l.distribution="",n.distribution="",void a.setState({filterSubmitted:n,filters:l});case"lifeForms":return document.getElementById("lifeForms").value="",l.lifeForms="",n.lifeForms="",void a.setState({filterSubmitted:n,filters:l});case"references":return document.getElementById("references").value="",l.references="",n.references="",void a.setState({filterSubmitted:n,filters:l});case"others":return document.getElementById("others").value="",l.others="",n.others="",void a.setState({filterSubmitted:n,filters:l});case"ambient":return document.getElementById("ambient").value="",l.ambient="",n.ambient="",void a.setState({filterSubmitted:n,filters:l});case"taxonomic":return document.getElementById("taxonomic").value="",l.taxonomic="",n.taxonomic="",void a.setState({filterSubmitted:n,filters:l});default:return}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchInput,a=e.results,n=e.logoWidth,r=e.searched,c=e.searchedWord,i=e.filterSubmitted,s=this.handleChange,o=this.searchNow,m=this.clearSearch,u=this.handleKeyPress,d=this.handleFilters,h=this.applyFilters,g=this.handleDelete;return l.a.createElement("div",{className:"background",style:{height:"100%"}},l.a.createElement(b,{handleKeyPress:u,searchInput:t,handleChange:s,searchNow:o,clearSearch:m}),l.a.createElement(v,{searchInput:t,handleChange:s,searchNow:o,logoWidth:n,searched:r,searchedWord:c,handleKeyPress:u,filterSubmitted:i,handleDelete:g}),l.a.createElement(F,{handleFilters:d,applyFilters:h,searched:r}),l.a.createElement(le,{filterSubmitted:i,results:a,searched:r,searchInput:t}),l.a.createElement(y,null))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loaded:0,message:"",registers:null,xml:{}},a.handleFile=function(e){var t,n=a.state.xml;t=e.target.files[0];var l=new FileReader;l.readAsText(t,"UTF-8"),l.onload=function(e){n.data=e.target.result,a.setState({xml:n,loaded:0})}},a.sendFile=function(e){e.preventDefault();var t=a.state.xml;x.a.post("http://bdlacet.mx/upload",t,{onUploadProgress:function(e){a.setState({loaded:e.loaded/e.total*100})}}).then(function(e){return a.setState({registers:e,message:"Subido correctamente"},function(){return console.log(e)})}).catch(function(e){return e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaded,a=e.message,n=e.registers,r=this.handleFile,c=this.sendFile;return console.log(n),l.a.createElement("div",null,l.a.createElement("h1",null,"Subir archivo de base de datos"),l.a.createElement("form",null,l.a.createElement("input",{type:"file",onChange:r}),l.a.createElement("button",{onClick:c},"Enviar")),l.a.createElement("div",null," ",Math.round(t,2)," %"),l.a.createElement("div",null,a||""))}}]),t}(n.Component),ie=function(){return l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:re}),l.a.createElement(h.a,{path:"/upload",component:ce}))},se=a(61),oe=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(j.createMuiTheme)({palette:{primary:se.teal,secondary:{main:"#355C57"}}});return l.a.createElement("div",{className:"App"},l.a.createElement(j.MuiThemeProvider,{theme:e},l.a.createElement(ie,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(402);c.a.render(l.a.createElement(function(){return l.a.createElement(me.a,null,l.a.createElement(oe,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[223,1,2]]]);
//# sourceMappingURL=main.91244144.chunk.js.map