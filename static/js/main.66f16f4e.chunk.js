(this["webpackJsonpkth9192.github.io"]=this["webpackJsonpkth9192.github.io"]||[]).push([[0],{29:function(n,t,e){n.exports=e(44)},44:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(13),i=e.n(o),c=e(1),l=e(8),u=e(9),s=e(11),d=e(10),m=e(12),f=e(2),b=e(14),p=e(6);function h(){var n=Object(c.a)(["\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  width: 300px;\n  border-top: 3px solid #e7e7e7;\n  text-align: center;\n"]);return h=function(){return n},n}function g(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 60vh;\n  background-color: #f8f8f8;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n  text-align: center;\n  margin-top: 10px;\n  h1 {\n    font-size: 30px;\n    text-align: center;\n  }\n"]);return g=function(){return n},n}var x=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this,n))).state={},e}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(v,{className:"about"},a.a.createElement("h1",null,"About"),a.a.createElement(j,null),a.a.createElement("div",null,a.a.createElement("p",null,"KIM TAE HOON"),a.a.createElement("p",null,"\uc81c\uc8fc\ub300\ud559\uad50 \ucef4\ud4e8\ud130\uacf5\ud559\uc804\uacf5 \ud559\uc0ac \uc878\uc5c5 "),a.a.createElement("p",null,"Email : kth9193@gmail.com"),a.a.createElement("p",null,"Github : https://github.com/kth9192")))}}]),t}(r.Component),v=f.b.section(g()),j=f.b.hr(h()),E=x,O=[{id:0,name:"\uc720\ud29c\ube0c \ud074\ub9bd \uc800\uc7a5\uc18c",img:["youtube-cutter.png","youtube-cutter2.png","youtube-cutter3.png"],description:"\uc720\ud29c\ube0c \uc601\uc0c1\uc758 \ud2b9\uc815 \uc2dc\uac04\ub300\ub97c \uc800\uc7a5\ud558\uace0 \ud558\ub098\uc758 \ubaa9\ub85d\uc73c\ub85c \ubd84\ub958\ud574 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \ud398\uc774\uc9c0. ",stack:"create react app, nodejs , graphQL , react router, react hook , grahql apollo, JWT",url:"http://youtube-cutter.herokuapp.com/"},{id:1,name:"SquardMaker",img:["squardmaker.png","squardmaker2.png","squardmaker3.png","squardmaker4.png"],description:"\ucd95\uad6c\ud300\uc744 \uc704\ud55c \uba85\ub2e8 \uc81c\uc791 \uc0ac\uc774\ud2b8. \ud300 \uba85\ub2e8\uc744 \ub9cc\ub4e4\uace0 \ud3ec\uba54\uc774\uc158\uacfc \ub4f1\ubc88\ud638\ub97c \uc815\ud560 \uc218 \uc788\ub2e4. \ubcf8\uc778\uc758 \ud300 \uba85\ub2e8\uc744 \ubc14\ub451\ub3cc\ucc98\ub7fc \ud65c\uc6a9\ud574 \uc804\uc220 \uad6c\uc0c1\ub3c4 \ud574\ubcfc\uc218 \uc788\ub2e4.",stack:"vanila js, nodejs redis session , passport, axios ",url:"http://squardmaker.herokuapp.com/"}],k=e(5),w=e(21);function y(){var n=Object(c.a)(["\n  width: 50px;\n  height: 100%;\n  background: none;\n  border: none;\n  cursor: pointer;\n"]);return y=function(){return n},n}function N(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n"]);return N=function(){return n},n}function z(){var n=Object(c.a)(["\n  bottom: 0;\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: flex;\n"]);return C=function(){return n},n}var S=f.b.div(C()),q=f.b.div(z()),B=f.b.img(N()),M=f.b.button(y()),P=function(n){var t=Object(r.useState)("black"),e=Object(k.a)(t,2),o=e[0],i=e[1],c=Object(r.useState)("black"),l=Object(k.a)(c,2),u=l[0],s=l[1];return Object(r.useEffect)((function(){"front"===n.limitObj?(i("gray"),s("black")):"end"===n.limitObj?(i("black"),s("gray")):(i("black"),s("black"))}),[u,n.limitObj]),a.a.createElement(S,null,a.a.createElement(M,{id:"frontIndicator",onClick:n.moveFront},a.a.createElement(w.a,{size:40,color:o})),a.a.createElement(q,null,a.a.createElement(B,{src:n.img,alt:n.title})),a.a.createElement(M,{id:"endIndicator",onClick:n.moveEnd},a.a.createElement(w.b,{size:40,color:u})))};function I(){var n=Object(c.a)(["\n  margin: 0;\n  margin-top: 8px;\n  button {\n    width: 100%;\n    padding: 12px 0;\n    border-radius: 0 0 10px 10px;\n    background-color: #ad7cef;\n    font-size: 13px;\n    color: white;\n    border: 0;\n    cursor: pointer;\n    &:hover {\n      background-color: #7f49c8;\n    }\n    &:active {\n      background-color: #7e49c8;\n    }\n  }\n"]);return I=function(){return n},n}function G(){var n=Object(c.a)(["\n  width: 100%;\n  height: fit-content;\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n"]);return G=function(){return n},n}function L(){var n=Object(c.a)(["\n  font-weight: bold;\n  color: #333;\n  text-align: center;\n  font-size: 22px;\n"]);return L=function(){return n},n}function F(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  flex-direction: column;\n  width: 100%;\n  height: 80%;\n  margin: 0;\n"]);return F=function(){return n},n}function T(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #bebebe;\n  height: 10%;\n"]);return T=function(){return n},n}function _(){var n=Object(c.a)(["\n  position: flex;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  /* & > * {\n    &:first-child {\n      margin-top: 16px;\n    }\n    margin-left: 16px;\n    margin-right: 16px;\n  } */\n"]);return _=function(){return n},n}function A(){var n=Object(c.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 60rem;\n  height: 40rem;\n  /* min-width: 400px;\n  min-height: 300px; */\n  transform: translate(-50%, -50%);\n"]);return A=function(){return n},n}function D(){var n=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0px auto;\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n"]);return D=function(){return n},n}var H=f.b.div(D()),J=f.b.div(A()),Y=f.b.div(_()),K=f.b.div(T()),R=f.b.div(F()),Q=f.b.p(L()),W=f.b.div(G()),X=f.b.div(I()),U=function(n){var t=Object(r.useRef)();!function(n,t){Object(r.useEffect)((function(){var e=function(e){if(!n.current||n.current.contains(e.target))return console.log("===================================="),console.log(n),void console.log("====================================");t(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}(t,n.closeModal);var e=Object(r.useState)(0),o=Object(k.a)(e,2),c=o[0],l=o[1],u=Object(r.useState)(n.data[0]),s=Object(k.a)(u,2),d=s[0],m=s[1],f=Object(r.useState)("front"),b=Object(k.a)(f,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){console.log("===================================="),console.log("idx?",c),console.log("===================================="),m(n.data[c])}),[c,n.data]),i.a.createPortal(a.a.createElement(r.Fragment,null,n.isOpen?a.a.createElement(H,{className:"close",onClick:function(t){return n.closeModal(t)}},a.a.createElement(J,null,a.a.createElement(Y,{ref:t},a.a.createElement(K,null,a.a.createElement(Q,null,n.title)),a.a.createElement(R,null,a.a.createElement(P,{img:d,moveFront:function(n){n.stopPropagation(),n.preventDefault(),c-1>=0?(l(c-1),h(null)):h("front")},moveEnd:function(t){t.stopPropagation(),t.preventDefault(),c+1<n.data.length?(l(c+1),h(null)):h("end")},title:n.title,limitObj:p})),a.a.createElement(W,null,a.a.createElement(X,null,a.a.createElement("button",{className:"close",onClick:function(t){return n.closeModal(t)}},"\ub2eb\uae30")))))):null),document.getElementById("modal"))};function V(){var n=Object(c.a)(['\n  display: flex;\n  width: 100px;\n  height: 50px;\n  justify-content: center;\n  background-color: #ad7cef;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  transition: all 0.4s;\n\n  p {\n    text-align: center;\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  &:link,\n  &:visited {\n    text-transform: uppercase;\n    text-decoration: none;\n    padding: 15px 40px;\n    display: inline-block;\n    border-radius: 100px;\n    transition: all 0.2s;\n    position: absolute;\n  }\n\n  &:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n    transition: all 0.4s;\n  }\n\n  &:active {\n    transform: translateY(-1px);\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  &::after {\n    content: "";\n    display: inline-block;\n\n    width: 100px;\n    height: 50px;\n    border-radius: 100px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    transition: all 0.4s;\n  }\n\n  &:hover {\n    &::after {\n      background-color: #ad7cef;\n\n      transform: scaleX(1.4) scaleY(1.6);\n      opacity: 0;\n    }\n  }\n']);return V=function(){return n},n}function Z(){var n=Object(c.a)(["\n  display: flex;\n  width: 100px;\n  height: 50px;\n  margin: 8px;\n\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n"]);return Z=function(){return n},n}var $=f.b.div(Z()),nn=f.b.button(V()),tn=function(n){var t=Object(r.useState)(!1),e=Object(k.a)(t,2),o=e[0],i=e[1];return a.a.createElement($,{onClick:function(){return i(!0)}},a.a.createElement(nn,null,a.a.createElement("p",null,"\uc790\uc138\ud788"),a.a.createElement(U,{isOpen:o,closeModal:function(n){n.stopPropagation(),n.preventDefault(),n.target.classList.contains("close")&&i(!1)},url:n.url,title:n.title,data:n.data})))};function en(){var n=Object(c.a)(["\n  width: 80%;\n  height: fit-content;\n  border-bottom: 1px solid black;\n  margin: 1rem 10px;\n  img {\n    width: 18.75rem;\n    height: 14.0625rem;\n  }\n"]);return en=function(){return n},n}var rn=f.b.div(en()),an=function(n){n.id;var t=n.name,e=n.img,r=n.description,o=n.stack,i=n.url;return a.a.createElement(rn,null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r),a.a.createElement("h4",null,"- STACK"),a.a.createElement("p",null,o),a.a.createElement(tn,{title:t,data:e}),a.a.createElement("p",null,"\ub9c1\ud06c -",a.a.createElement("a",{href:i},i)))};function on(){var n=Object(c.a)(["\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  width: 300px;\n  border-top: 3px solid #e7e7e7;\n  text-align: center;\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  flex-direction: column;\n  float: left;\n  h1 {\n    font-size: 30px;\n    text-align: center;\n  }\n  margin-bottom: 5rem;\n"]);return cn=function(){return n},n}var ln=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this,n))).state={},e}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(un,{className:"projects"},a.a.createElement("h1",null,"Project"),a.a.createElement(sn,null),O.map((function(n){return a.a.createElement(an,{key:n.id,id:n.id,name:n.name,img:n.img,description:n.description,stack:n.stack,url:n.url})})))}}]),t}(r.Component),un=f.b.section(cn()),sn=f.b.hr(on()),dn=ln;function mn(){var n=Object(c.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  color: #fff;\n"]);return mn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  display: flex;\n  width: 40%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  .linkBox__txt {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n"]);return fn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  display: flex;\n  width: 80%;\n  height: fit-content;\n  border: 2px white solid;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.5s ease;\n\n  &:hover {\n    color: black;\n    background-color: white;\n    border: 1px black solid;\n    font-weight: bold;\n    img {\n      filter: invert(0);\n    }\n    p {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin: 4px;\n    filter: invert(1);\n  }\n"]);return bn=function(){return n},n}function pn(){var n=Object(c.a)(['\n  display: flex;\n  width: 100%;\n  height: 25rem;\n  float: left;\n  flex-direction: column;\n  align-items: center;\n  background-image: url("intro-bg.png");\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n']);return pn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  width: 50%;\n  text-align: center;\n  color: white;\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    height: 2rem;\n    &:hover {\n      background-color: #fff;\n      color: #000;\n      font-weight: bold;\n      transition: 400ms ease;\n      transition-property: background-color;\n    }\n  }\n"]);return hn=function(){return n},n}function gn(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: fit-content;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    color: white;\n    font-weight: bold;\n    font-size: 50px;\n    border-bottom: 1px solid;\n  }\n"]);return gn=function(){return n},n}var xn=f.b.div(gn()),vn=f.b.div(hn()),jn=f.b.section(pn()),En=f.b.button(bn()),On=f.b.div(fn()),kn=Object(f.b)(b.b)(mn()),wn=Object(p.f)((function(){return a.a.createElement(jn,{className:"cover"},a.a.createElement((function(){return a.a.createElement(xn,{className:"menu"},a.a.createElement("p",{className:"linkBox__txt"},"PORTPOILO"),a.a.createElement(vn,null,a.a.createElement(kn,{to:"/"},a.a.createElement("div",{className:"about"},"\uc18c\uac1c")),a.a.createElement(kn,{to:"/projects"},a.a.createElement("div",{className:"projects"},"\ud504\ub85c\uc81d\ud2b8"))))}),null),a.a.createElement(On,null,a.a.createElement(En,{onClick:function(n){window.location="https://github.com/kth9192"}},a.a.createElement("img",{src:"gitHub-Mark-32px.png",alt:"github"}),a.a.createElement("p",null,"GitHub\ub85c \uc774\ub3d9\ud558\uae30"))))}));function yn(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return yn=function(){return n},n}f.b.div(yn());var Nn=function(){return a.a.createElement(b.a,null,a.a.createElement(wn,null),a.a.createElement(p.c,null,a.a.createElement(p.a,{exact:!0,path:"/",component:E}),a.a.createElement(p.a,{path:"/projects",component:dn})))};function zn(){var n=Object(c.a)(["\n  @font-face {\n       font-family: \"NanumBarunGothic\";\n       src: url('font/NanumBarunGothic.ttf') format('truetype');\n     }\n \n    html,body,#root {\n        padding: 0;\n        margin: 0;\n        height:100vh;\n        z-index:1;\n        font-family:\ub098\ub214\uace0\ub515, NanumBarunGothic, ng;\n    }\n\n"]);return zn=function(){return n},n}var Cn=function(n){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(Sn,null),a.a.createElement(Nn,null))}}]),t}(r.Component),Sn=Object(f.a)(zn()),qn=Cn;i.a.render(a.a.createElement(qn,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.66f16f4e.chunk.js.map