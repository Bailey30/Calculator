(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{58:function(t,e,n){},79:function(t,e){},80:function(t,e,n){"use strict";n.r(e);var c=n(24),a=n(37),i=n.n(a),r=(n(58),n(12)),s=n(23),o=n(2),u=n(82),j=n(38),l=n(22),b=function(){var t=Object(c.useState)(["square","sqrt","clear","back",7,8,9,"*",4,5,6,"-",1,2,3,"+",".",0,"=","/"]),e=Object(s.a)(t,1)[0],n=["/","*","+","-","."],a=Object(c.useState)([]),i=Object(s.a)(a,2),b=i[0],O=i[1],f=Object(c.useState)([]),h=Object(s.a)(f,2),d=h[0],g=h[1],p=function(t){var n=Object(r.a)(b);n.push(e[t]),O(n);var c=Object(r.a)(d);c.push(e[t]),g(c)},v=function(){var t=Object(r.a)(b);t.pop(),O(t);var e=Object(r.a)(d);e.pop(),g(e)},m=function(){if(b.length>0){var t=Object(r.a)(b);O(Object(o.Te)(t.join("")).toString().split(""));var e=Object(r.a)(d);e.push("\xb2"),g(e)}},x=function(){if(b.length>0){var t=Object(r.a)(b);O(Object(o.Re)(t.join("")).toFixed(2).toString().split(""));var e=Object(r.a)(d);e.unshift("\u221a"),g(e)}},T=function(){O(""),g("")},L=function(){if(b.length>1){var t=Object(r.a)(b);O(Object(u.a)(t.join("")).toString().split(""));var e=Object(r.a)(d);e.push(")"),e.unshift("("),g(e)}};return Object(l.jsxs)("div",{className:"calculator",children:[Object(l.jsxs)(j.Textfit,{mode:"single",max:"42",min:20,className:"screen",children:[Object(l.jsx)("div",{className:"num",children:b}),Object(l.jsx)("div",{className:"sum",children:d})]}),Object(l.jsx)("div",{className:"container",children:e.map((function(t,e){return Object(l.jsx)("button",{className:"btn",onClick:function(c){return function(t,e,c){n.includes(c)&&n.includes(b[b.length-1])?console.log("don't do that"):"="===e.target.innerHTML&&b?L():"square"===e.target.innerHTML?m():"sqrt"===e.target.innerHTML?x():"clear"===e.target.innerHTML?T():"back"===e.target.innerHTML?v():p(t)}(e,c,t)},children:t},e)}))})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};i.a.render(Object(l.jsx)(b,{}),document.getElementById("root")),O()}},[[80,1,2]]]);
//# sourceMappingURL=main.2827d59a.chunk.js.map