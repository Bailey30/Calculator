(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{57:function(e,t,n){},67:function(e,t){},68:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(37),r=n.n(a),i=(n(57),n(12)),s=n(22),o=n(2),u=n(70),j=n(23),l=function(){var e=Object(c.useState)(["square","sqrt","clear","back",7,8,9,"*",4,5,6,"-",1,2,3,"+",".",0,"=","/"]),t=Object(s.a)(e,1)[0],n=Object(c.useState)([]),a=Object(s.a)(n,2),r=a[0],l=a[1],b=Object(c.useState)([]),f=Object(s.a)(b,2),O=f[0],h=f[1],g=function(){if(r.length>0){var e=Object(i.a)(r).join(""),t=Object(o.Te)(e).toString().split("");l(t);var n=Object(i.a)(O);n.push("\xb2"),h(n)}},p=function(){if(r.length>0){var e=Object(i.a)(r).join(""),t=Object(o.Re)(e).toFixed(2).toString().split("");l(t);var n=Object(i.a)(O);n.unshift("\u221a"),h(n)}},v=function(){l(""),h("")},d=function(){if(r.length>1){var e=Object(i.a)(r).join(""),t=Object(u.a)(e).toString().split("");l(t);var n=Object(i.a)(O);n.push(")"),n.unshift("("),h(n)}};return Object(j.jsxs)("div",{className:"calculator",children:[Object(j.jsxs)("div",{className:"screen",children:[r,Object(j.jsx)("div",{className:"sum",children:O})]}),Object(j.jsx)("div",{className:"container",children:t.map((function(e,n){return Object(j.jsx)("button",{className:"btn",onClick:function(e){return function(e,n){if("="===n.target.innerHTML&&r)d();else if("square"===n.target.innerHTML)g();else if("sqrt"===n.target.innerHTML)p();else if("clear"===n.target.innerHTML)v();else if("back"===n.target.innerHTML){var c=Object(i.a)(r);c.pop(),l(c);var a=Object(i.a)(O);a.pop(),h(a)}else if("error"===r)l("error");else{var s=Object(i.a)(r);s.push(t[e]),l(s);var o=Object(i.a)(O);o.push(t[e]),h(o)}}(n,e)},children:e},n)}))})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};r.a.render(Object(j.jsx)(l,{}),document.getElementById("root")),b()}},[[68,1,2]]]);
//# sourceMappingURL=main.293fa69b.chunk.js.map