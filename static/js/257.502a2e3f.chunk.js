"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,r,o=t(439),c=t(478),a=t(791),s=t(689),l=t(87),d=t(766),h=t(444),u=h.ZP.div(i||(i=(0,d.Z)(["\n  & button {\n    margin-bottom: 10px;\n  }\n\n  & > div {\n    display: flex;\n    gap: 20px;\n\n    & > img {\n      width: 240px;\n      height: auto;\n      background: lightgray;\n      flex-shrink: 0;\n    }\n\n    & > div > ul {\n      display: flex;\n      gap: 10px;\n\n      list-style: none;\n    }\n  }\n"]))),g=h.ZP.div(r||(r=(0,d.Z)(["\n  flex-direction: column;\n"]))),f=t(565),p=t(184),j=function(){var n,e,t,i,r,d,h=(0,s.s0)(),j=(0,a.useState)({}),m=(0,o.Z)(j,2),v=m[0],x=m[1],b=(0,a.useState)(!1),y=(0,o.Z)(b,2),I=y[0],k=y[1],w=(0,s.UO)().id,N=(0,s.TH)(),S=null!==(n=null===(e=N.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",_=f.X.imagUrl;(0,a.useEffect)((function(){k(!0),f.X.getDetails(w).then((function(n){x(n),k(!1)})).catch((function(n){return console.error(n)}))}),[w]);return(0,p.jsx)(c.N,{$marginTop:!0,children:I?(0,p.jsx)(p.Fragment,{children:"Loading..."}):(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u,{children:[(0,p.jsx)("button",{type:"button",onClick:function(){h(S)},children:"back"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"".concat(_).concat(v.poster_path),alt:""}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[v.original_title,(0,p.jsx)("span",{children:v.release_date&&"(".concat(v.release_date.slice(0,4),")")})]}),(0,p.jsxs)("p",{children:["user score:",(0,p.jsx)("span",{children:"".concat(Math.round(10*v.vote_average),"%")})]}),(0,p.jsx)("h3",{children:"overview"}),(0,p.jsx)("p",{children:v.overview}),(0,p.jsx)("h3",{children:"genres"}),(0,p.jsx)("ul",{children:v.genres&&v.genres.map((function(n){return(0,p.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,p.jsxs)(g,{children:[(0,p.jsx)("h3",{children:"additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",state:{from:null!==(t=null===(i=N.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",state:{from:null!==(r=null===(d=N.state)||void 0===d?void 0:d.from)&&void 0!==r?r:"/"},children:"Reviews"})})]}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading page..."}),children:(0,p.jsx)(s.j3,{})})]})]})})})}},565:function(n,e,t){t.d(e,{X:function(){return r}});var i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTI1YzAwN2Q3NzBjMmI2YTk2YTY5NGEyYWIxOWRjZSIsInN1YiI6IjY0NmNkNTE4MmJjZjY3MDE1NTg0Y2I0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1zl0yET6waSnMi-_6LNcanZOg8qB1GH_Q87VGSPFtqc"}},r={imagUrl:"https://image.tmdb.org/t/p/w500",getTrending:function(n){return fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=".concat(n),i).then((function(n){return n.json()}))},getSerch:function(n,e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(n.get("query"),"&include_adult=false&language=en-US&page=").concat(e),i).then((function(n){return n.json()}))},getDetails:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),i).then((function(n){return n.json()}))},getCast:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),i).then((function(n){return n.json()}))},getReviews:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),i).then((function(n){return n.ok?n.json():{results:[]}}))}}}}]);
//# sourceMappingURL=257.502a2e3f.chunk.js.map