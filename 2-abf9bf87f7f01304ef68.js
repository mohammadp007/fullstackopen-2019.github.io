(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return D}),t.d(a,"StaticQueryContext",function(){return l}),t.d(a,"StaticQuery",function(){return u});var n=t(0),M=t.n(n),i=t(4),r=t.n(i),s=t(150),N=t.n(s);t.d(a,"Link",function(){return N.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var c=t(230),o=t.n(c);t.d(a,"PageRenderer",function(){return o.a});var g=t(31);t.d(a,"parsePath",function(){return g.a});var l=M.a.createContext({}),u=function(e){return M.a.createElement(l.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):M.a.createElement("div",null,"Loading (StaticQuery)")})};function D(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,a,t){"use strict";t(28);var n=t(148),M=t.n(n),i=(t(253),t(4)),r=t.n(i),s=t(0),N=t.n(s),c=function(e){var a=e.Tag,t=e.children,n=e.className,i=e.flex,r=e.dirColumn,s=e.spaceAround,c=e.spaceBetween,o=e.centered,g=e.autoMargin,l=e.autoBottomMargin,u=e.horizontalHalf,D=e.flexStart,T=e.noWrap,j=e.centeredInDesktop,z=e.relative,w=M()(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),I=[];return i&&I.push("element--flex"),g&&I.push("element--auto-margin"),l&&I.push("element--auto-bottom-margin"),r&&I.push("element--column"),s&&I.push("element--space-around"),c&&I.push("element--space-between"),o&&I.push("element--centered"),u&&I.push("element--horizontal-half"),D&&I.push("element--flex-start"),T&&I.push("element--no-wrap"),j&&I.push("element--centered-in-desktop"),z&&I.push("element--relative"),N.a.createElement(a,Object.assign({className:n+" "+I.join(" ")},w),t)};c.defaultProps={className:"",Tag:"div"},c.propTypes={Tag:r.a.string,children:r.a.node,className:r.a.string,flex:r.a.bool,spaceAround:r.a.bool,spaceBetween:r.a.bool,dirColumn:r.a.bool,centered:r.a.bool,horizontalHalf:r.a.bool,autoMargin:r.a.bool,autoBottomMargin:r.a.bool,flexStart:r.a.bool,noWrap:r.a.bool,centeredInDesktop:r.a.bool,relative:r.a.bool},a.a=c},149:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28),t(237);var n=t(148),M=t.n(n),i=(t(255),t(4)),r=t.n(i),s=t(0),N=t.n(s),c=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),i=e.overlay,r=e.contain,s=e.circle,c=e.extraSmall,o=e.small,g=e.medium,l=e.large,u=e.fullWidth,D=e.actualSize,T=e.squareBig,j=M()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),z=[];return r&&z.push("image--contain"),u&&z.push("image--full-width"),s&&z.push("image--circle"),c&&z.push("image--extra-small"),o&&z.push("image--small"),g&&z.push("image--medium"),l&&z.push("image--large"),T&&z.push("image--square-big"),D&&z.push("image--acctual-size"),N.a.createElement("div",Object.assign({className:"image "+n+" "+z.join(" ")},j),N.a.createElement("div",{className:"image__container"},N.a.createElement("img",{style:{backgroundColor:i,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};c.defaultProps={src:"",alt:"",overlay:"",className:""},c.propTypes={overlay:r.a.string,src:r.a.oneOfType([r.a.string,r.a.object]),alt:r.a.oneOfType([r.a.string,r.a.array]),hover:r.a.string,className:r.a.string,contain:r.a.bool,circle:r.a.bool,extraSmall:r.a.bool,small:r.a.bool,medium:r.a.bool,large:r.a.bool,squareBig:r.a.bool,fullWidth:r.a.bool,actualSize:r.a.bool}},153:function(e,a,t){e.exports=t.p+"static/uoh_centre-3689cf9983a2ebc8089c8f078a9c4769.svg"},155:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ3cHgiIGhlaWdodD0iODJweCIgdmlld0JveD0iMCAwIDI0NyA4MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxvZ28vaG91c3RvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuODA1MTI5OCwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwyNS41MzY1NTA5IEw4NS45OTM2MjksMTMuNTA2NjYwMyBMOTAuNDA2NTQ5MywxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEwLjQ0NTY3ODQgTDc4LjM3NTEwMzYsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDEzLjUwNjY2MDMgWiBNOTYuNDkxMDQ5NSwxNy45NjM2ODg1IEM5Ni40OTEwNDk1LDIwLjU1OTU1NzIgOTguMzE3ODU1NywyMi43MDc5ODQyIDEwMC44ODYxNTcsMjIuNzA3OTg0MiBDMTAzLjQ1NDg4MiwyMi43MDc5ODQyIDEwNS4yNDcxOTQsMjAuNTk1NDY1NyAxMDUuMjQ3MTk0LDE4LjAxNzk3NTMgTDEwNS4yNDcxOTQsMTguMDAwMDIxMSBDMTA1LjI0NzE5NCwxNS40MDQyOTM3IDEwMy40MjA1MjksMTMuMjU1ODY2NyAxMDAuODUyMjI4LDEzLjI1NTg2NjcgQzk4LjI4MzUwMjMsMTMuMjU1ODY2NyA5Ni40OTEwNDk1LDE1LjM2ODM4NTMgOTYuNDkxMDQ5NSwxNy45NDU3MzQzIEw5Ni40OTEwNDk1LDE3Ljk2MzY4ODUgWiBNOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE3Ljk4MjA2NjkgQzkzLjE0NzA0MTMsMTMuNjg1NDk1NiA5Ni40MDQ4MTI3LDEwLjE3NjkzMDYgMTAwLjg4NjE1NywxMC4xNzY5MzA2IEMxMDUuMzY3OTI1LDEwLjE3NjkzMDYgMTA4LjU5MTM0MywxMy42NDk3Mjg1IDEwOC41OTEzNDMsMTcuOTQ1NzM0MyBMMTA4LjU5MTM0MywxNy45NjM2ODg1IEMxMDguNTkxMzQzLDIyLjI2MDI1OTggMTA1LjMzMzU3MiwyNS43Njg4MjQ3IDEwMC44NTIyMjgsMjUuNzY4ODI0NyBDOTYuMzcwMzE4LDI1Ljc2ODgyNDcgOTMuMTQ3MDQxMywyMi4zMTQxMjI0IDkzLjE0NzA0MTMsMTguMDE3OTc1MyBMOTMuMTQ3MDQxMywxOC4wMTc5NzUzIFogTTcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBDNjguNzU2ODc0MiwyMi43OTcwNDg1IDY3LjM3ODIxNjYsMjIuMDgxMjgzMSA2Ni4wNjg0MDcsMjAuOTcxNzk3NCBMNjQuMTcyMTg3MiwyMy4zMTY0NDg0IEM2NS45MTMxODA4LDI0LjkyNzk0NTQgNjguMTM2Njc2MiwyNS43MzMzNDA0IDcwLjM0MzA2NTYsMjUuNzMzMzQwNCBDNzMuNDgwMTA1NSwyNS43MzMzNDA0IDc1LjY2OTI0NzYsMjQuMDUwMTY4IDc1LjY2OTI0NzYsMjEuMDYxMDAzIEw3NS42NjkyNDc2LDIxLjAyNTA5NDUgQzc1LjcyMTEzMSwxOC4zOTM0NTg4IDc0LjA0ODU2MTUsMTcuMzAxNzg1OCA3MS4xMDExMDExLDE2LjQ5NTgyNTMgQzY4LjU4NDY4MzQsMTUuODMzOTIyNiA2Ny45NjM5MTk5LDE1LjUxMTMxMjIgNjcuOTYzOTE5OSwxNC41MDg5ODYyIEw2Ny45NjM5MTk5LDE0LjQ3MzA3NzggQzY3Ljk2MzkxOTksMTMuNzM4OTM0MSA2OC42MDIyMTM1LDEzLjE2NjY2MTEgNjkuODI1NjQ0OSwxMy4xNjY2NjExIEM3MS4wNDk2NDE4LDEzLjE2NjY2MTEgNzIuMzA3OTkyMSwxMy43MjA5Nzk5IDczLjYwMDgzNywxNC42NTIwNTQ1IEw3NS4yNTU1OTM4LDEyLjE0NTk1NjkgQzczLjc4OTk5MjUsMTAuOTEwNjUwMiA3MS45ODA3MTY0LDEwLjIzMDM2OTIgNjkuODYwNTYzNywxMC4yMzAzNjkyIEM2Ni44OTU3MTQ3LDEwLjIzMDM2OTIgNjQuNzc1NTYyLDEyLjAzODY1NTcgNjQuNzc1NTYyLDE0Ljc3NzU5MjYgTDY0Ljc3NTU2MiwxNC44MTMwNzY5IEM2NC43NzU1NjIsMTcuODAyNjY2MSA2Ni42NzEwNzQ5LDE4LjY0NDUzNSA2OS41ODQxODE5LDE5LjQzMjExNzMgQzcyLjAxNDY0NTYsMjAuMDc2NjMxMiA3Mi41MTQ2Nzc2LDIwLjUwNjI2MDEgNzIuNTE0Njc3NiwyMS4zNDc3MDQ5IEw3Mi41MTQ2Nzc2LDIxLjM4MzA0NzkgQzcyLjUxNDY3NzYsMjIuMjYwMjU5OCA3MS43MjIyODg4LDIyLjc5NzA0ODUgNzAuNDExOTEzNywyMi43OTcwNDg1IEw3MC40MTE5MTM3LDIyLjc5NzA0ODUgWiBNMzEuMzM2NDY5NywxNy45NjM2ODg1IEMzMS4zMzY0Njk3LDIwLjU1OTU1NzIgMzMuMTYzNywyMi43MDc5ODQyIDM1LjczMTg1OTksMjIuNzA3OTg0MiBDMzguMzAwMTYxMSwyMi43MDc5ODQyIDQwLjA5MjQ3MjYsMjAuNTk1NDY1NyA0MC4wOTI0NzI2LDE4LjAxNzk3NTMgTDQwLjA5MjQ3MjYsMTguMDAwMDIxMSBDNDAuMDkyNDcyNiwxNS40MDQyOTM3IDM4LjI2NTI0MjMsMTMuMjU1ODY2NyAzNS42OTY5NDEsMTMuMjU1ODY2NyBDMzMuMTI5MjA1MywxMy4yNTU4NjY3IDMxLjMzNjQ2OTcsMTUuMzY4Mzg1MyAzMS4zMzY0Njk3LDE3Ljk0NTczNDMgTDMxLjMzNjQ2OTcsMTcuOTYzNjg4NSBaIE0yOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTcuOTgyMDY2OSBDMjguMDA5NzA4OSwxMy42ODU0OTU2IDMxLjI2NzQ4MDMsMTAuMTc2OTMwNiAzNS43NDg4MjQ1LDEwLjE3NjkzMDYgQzQwLjIzMDczNDIsMTAuMTc2OTMwNiA0My40MzYxOTgsMTMuNjQ5NzI4NSA0My40NTQwMTA5LDE3Ljk0NTczNDMgTDQzLjQ1NDAxMDksMTcuOTYzNjg4NSBDNDMuNDU0MDEwOSwyMi4yNjAyNTk4IDQwLjE5NjIzOTUsMjUuNzY4ODI0NyAzNS43MTQ4OTUzLDI1Ljc2ODgyNDcgQzMxLjIzMjU2MTUsMjUuNzY4ODI0NyAyOC4wMDk3MDg5LDIyLjMxNDEyMjQgMjguMDA5NzA4OSwxOC4wMTc5NzUzIEwyOC4wMDk3MDg5LDE4LjAxNzk3NTMgWiBNNTMuODMwNDE3MSwyNS43MzMzNDA0IEM1Ny43NDI4ODEyLDI1LjczMzM0MDQgNjAuMjA3ODM5NywyMy40OTU4NDkyIDYwLjIwNzgzOTcsMTguOTMwNjcxNSBMNjAuMjA3ODM5NywxMC40MjcxNTg3IEw1Ny4wMDE4MTAzLDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTkuMDczNzM5OCBDNTcuMDAxODEwMywyMS40NzI2Nzc2IDU1LjgxMjMwODEsMjIuNjkwMDMgNTMuODY0NzcwNCwyMi42OTAwMyBDNTEuOTE3Mzc0MSwyMi42OTAwMyA1MC43Mjc3MzA1LDIxLjQxODk1NjMgNTAuNzI3NzMwNSwxOC45NjY1OCBMNTAuNzI3NzMwNSwxMC40MjcxNTg3IEw0Ny41Mzg2NjU4LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTkuMDM3ODMxMyBDNDcuNTM4NjY1OCwyMy40Nzc4OTUgNDkuOTE3OTUzLDI1LjczMzM0MDQgNTMuODMwNDE3MSwyNS43MzMzNDA0IEw1My44MzA0MTcxLDI1LjczMzM0MDQgWiBNMy4xNTQ1NywzMy4xOTgxOTQ4IEwxMzUuMDM2NjMyLDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMy4zMDI0NDQ4OCBMMy4xNTQ1NywzLjMwMjQ0NDg4IEwzLjE1NDU3LDMzLjE5ODE5NDggWiBNMCwzNi40NzM5MjA0IEwxMzguMjA4MTY3LDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMC4wMjY3MTkyNjczIEwwLDAuMDI2NzE5MjY3MyBMMCwzNi40NzM5MjA0IFogTTE0LjgyMzExNDMsMTkuNDg1NDE0NCBMMjAuNzE4NjAwNSwxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDI1LjUzNjU1MDkgTDIzLjkwNzY2NTIsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwxMC40NDU2Nzg0IEwyMC43MTg2MDA1LDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTYuNDA2MDU0MiBMMTQuODIzMTE0MywxNi40MDYwNTQyIEwxNC44MjMxMTQzLDEwLjQ0NTY3ODQgTDExLjYzNDc1NjUsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwyNS41MzY1NTA5IEwxNC44MjMxMTQzLDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMTkuNDg1NDE0NCBaIE0xMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDEyMi44OTc2MDIsMjUuNTM2NTUwOSBMMTI1LjYyMDk4OCwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDEwLjQ0NTY3ODQgTDEyMi40NjY0MTgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxOS43MzYyMDggTDExNS42NTgzNzcsMTAuNDQ1Njc4NCBMMTEyLjcxMDkxNywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDI1LjUzNjU1MDkgTDExNS44NjQ5MjIsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwxNS45NDE1MDY1IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDEwNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},158:function(e,a,t){"use strict";t.d(a,"a",function(){return s});t(28),t(262);var n=t(4),M=t.n(n),i=t(0),r=t.n(i),s=function(e){var a=e.children,t=e.largeMargin,n=e.className,M=e.childrenClassName,i=e.backgroundColor,s=e.props,N=e.hover;return r.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:N?{backgroundColor:"black",color:"white",padding:t?"":"0.2em"}:{padding:t?"":"0.2em"}},s),r.a.createElement("div",{className:"triple-border__container "+M,style:{backgroundColor:i,zIndex:10}},a))};s.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"},s.propTypes={children:M.a.node.isRequired,className:M.a.string,childrenClassName:M.a.string,largeMargin:M.a.bool,backgroundColor:M.a.string,hover:M.a.bool}},160:function(e,a,t){"use strict";var n=t(265),M=t(146),i=t(321),r=t.n(i),s=t(4),N=t.n(s),c=t(0),o=t.n(c),g=t(240),l=t.n(g),u=t(291),D=t.n(u);function T(e){var a=e.description,t=e.lang,i=e.meta,s=e.image,N=e.keywords,c=e.title,g=s||l.a;return o.a.createElement(M.StaticQuery,{query:j,render:function(e){var n=a||e.site.siteMetadata.description;return o.a.createElement(r.a,{htmlAttributes:{lang:t},title:c,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{name:"og:image",content:D.a.resolve(g)},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n},{name:"twitter:image",content:D.a.resolve(g)},{name:"google-site-verification",content:"ds9pQKiK3kjhRSHHbf5ccoG-oJggn7Lq4A8uHxM3Mkw"}].concat(N.length>0?{name:"keywords",content:N.join(", ")}:[]).concat(i)})},data:n})}T.defaultProps={lang:"fi",image:null,meta:[],keywords:[]},T.propTypes={description:N.a.string,lang:N.a.string,meta:N.a.array,image:N.a.string,keywords:N.a.array,title:N.a.string.isRequired},a.a=T;var j="1025518380"},161:function(e,a,t){"use strict";var n=t(6),M=t.n(n),i=(t(258),t(259),t(0)),r=t.n(i),s=(t(260),t(4)),N=t.n(s),c=function(e){var a=e.dismissed;return r.a.createElement("div",{className:"release-message"},r.a.createElement("div",null,r.a.createElement("p",null,"This course is now available in English.",r.a.createElement("a",{href:"/en"},"Click here")," ","to change the language.")),r.a.createElement("button",{className:"release-message__button",onClick:function(){return a(!0)}},r.a.createElement("span",null,"x")))};c.propTypes={dismissed:N.a.func.isRequired};var o=c,g=(t(261),t(146)),l=t(211),u=t(158),D=function(e){function a(a){var t;return(t=e.call(this,a)||this).header=r.a.createRef(),t.handleScroll=function(){var e=window.scrollY;t.setState({top:e,headerClass:t.state.top>10&&e>t.state.top?"header--small":""})},t.state={top:0,headerClass:""},t}M()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.state.headerClass;return r.a.createElement("div",{ref:this.header,className:"header "+e,style:{backgroundColor:""!==e?"transparent":"white"}},r.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},r.a.createElement(g.Link,{to:"en"===this.props.lang?"/en":"/",className:"header__logo"},""===e?r.a.createElement(u.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):r.a.createElement(u.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header--small"!==this.state.headerClass&&r.a.createElement(l.a,{lang:this.props.lang})))},a}(i.Component),T=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),M=0;M<t;M++)n[M]=arguments[M];return(a=e.call.apply(e,[this].concat(n))||this).state={siteLanguage:"fi",notificationDismissed:!1},a.dismissMessage=function(e){a.setState({notificationDismissed:e},function(){window.localStorage.setItem("notificationDismissed",e)})},a}M()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=-1!==window.location.pathname.indexOf("/en")?"en":"fi",a=window.localStorage.getItem("notificationDismissed");this.setState({siteLanguage:e,notificationDismissed:a})},t.render=function(){var e=this,a=this.state,t=a.siteLanguage,n=a.notificationDismissed;return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(D,{lang:this.state.siteLanguage}),"fi"===t&&!n&&r.a.createElement(o,{dismissed:function(a){return e.dismissMessage(a)}}),this.props.children)},a}(i.Component);T.propTypes={children:N.a.node.isRequired};a.a=T},211:function(e,a,t){"use strict";t(28);var n=t(6),M=t.n(n),i=(t(256),t(0)),r=t.n(i),s=(t(257),t(4)),N=t.n(s),c=function(e){var a=e.language,t=e.active;return a===t?r.a.createElement("span",{className:"language-switcher__active-language"},a):r.a.createElement("a",{target:"_self",className:"language-switcher__language",href:"en"===t?"/":"/en"},a)},o=function(e){var a=e.lang;return r.a.createElement("div",{className:"language-switcher"},r.a.createElement(c,{language:"fi",active:a}),r.a.createElement(c,{language:"en",active:a}))};o.defaultProps={lang:"fi"},o.propTypes={lang:N.a.string.isRequired};var g=o,l=t(148),u=t.n(l),D=t(146),T=function(e){var a=e.text,t=e.path,n=e.className,M=u()(e,["text","path","className"]);return r.a.createElement("li",Object.assign({},M,{className:"navigation__item "+n}),r.a.createElement(D.Link,{className:"nav-item-hover",to:t},a))};T.propTypes={text:N.a.string.isRequired,path:N.a.string.isRequired,className:N.a.string},T.defaultProps={className:""},t.d(a,"b",function(){return j});var j={en:[{text:"About course",path:"/en/about"},{text:"Course contents",path:"/en#course-contents"},{text:"FAQ",path:"/en/faq"},{text:"Partners",path:"/en/companies"},{text:"Challenge",path:"/en/challenge"}],fi:[{text:"Kurssista",path:"/about"},{text:"Kurssin sisältö",path:"#course-contents"},{text:"FAQ",path:"/faq"},{text:"Kurssilla mukana",path:"/companies"},{text:"Haaste",path:"/challenge"}]},z=function(){return document.body.classList.remove("is-open--navigation")},w=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navigationOpen:!1},t}return M()(a,e),a.prototype.render=function(){var e=this,a=this.props.className;return r.a.createElement("div",{className:"navigation__wrapper "+a},r.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},r.a.createElement("div",{className:"navigation__toggle-icon"})),r.a.createElement("nav",null,r.a.createElement("ul",{className:"navigation"},j[this.props.lang].map(function(e){return r.a.createElement(T,Object.assign({key:e.path},e,{onClick:z}))}),r.a.createElement(g,{lang:this.props.lang}))))},a}(i.Component);w.propTypes={className:N.a.string},w.defaultProps={className:""};a.a=w},230:function(e,a,t){var n;e.exports=(n=t(254))&&n.default||n},240:function(e,a,t){e.exports=t.p+"static/seo_image-939e8e249cf62a835ed560f6da4200ad.jpg"},253:function(e,a,t){},254:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),M=t.n(n),i=t(4),r=t.n(i),s=t(47),N=t(2),c=function(e){var a=e.location,t=N.default.getResourcesForPathnameSync(a.pathname);return M.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=c},255:function(e,a,t){},256:function(e,a,t){},257:function(e,a,t){},258:function(e,a,t){},259:function(e,a,t){},260:function(e,a,t){},261:function(e,a,t){},262:function(e,a,t){},265:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Open 2019",description:"",author:"Houston Inc. Consulting oy"}}}}}}]);
//# sourceMappingURL=2-abf9bf87f7f01304ef68.js.map