(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{170:function(t,e,c){"use strict";var n=c(28),r=c(29),a=c(32),i=c(30),o=c(31),s=c(0);e.a=function(t){return function(e){return function(c){function u(){return Object(n.a)(this,u),Object(a.a)(this,Object(i.a)(u).apply(this,arguments))}return Object(o.a)(u,c),Object(r.a)(u,[{key:"componentDidMount",value:function(){t(this.props)}},{key:"render",value:function(t){return Object(s.c)(e,t)}}]),u}(s.a)}}},207:function(t,e,c){},474:function(t,e,c){},489:function(t,e,c){"use strict";c.r(e);var n=c(3),r=c.n(n),a=c(6),i=c(0),o=c(86),s=c(41),u=c.n(s),l=c(83),f=c(23),b=c(15),O=c(46),j=c(33),p=(c(474),c(207),c(170)),h=function(t){return"https://static.runelite.net/cache/item/icon/".concat(t,".png")},d=function(){var t=Object(a.a)(r.a.mark(function t(e){var c,n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.fetchReleases,n=e.fetchItemInfo,a=e.itemIds,t.next=3,c();case 3:return t.next=5,n(a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();e.default=Object(j.b)(function(t,e){var c=e.csv.split(",");return{name:c.shift(),icon:c.shift(),itemIds:c=c.map(function(t){return Math.abs(parseInt(t,10))}).sort(function(t,e){return t-e}),items:t.item||[],version:Object(b.f)(t)}},function(t){return Object(f.b)({fetchReleases:b.c,fetchItemInfo:O.b},t)})(Object(p.a)(d)(function(t){var e=t.name,c=t.icon,n=t.itemIds,r=t.items,a=(t.version,t.csv);return Object(i.c)("div",null,Object(i.c)(l.a,{title:"".concat(e," tag tab - ").concat(u.a.title)}),Object(i.c)(o.a,{class:"tag-container"},Object(i.c)("h1",null,Object(i.c)("img",{alt:"",src:h(c)})," ",e),Object(i.c)("hr",null),Object(i.c)("div",{class:"row"},Object(i.c)("pre",{class:"pre-select"},a),n.map(function(t){var e=r.find(function(e){return e.id===t})||{},c=e.name||"",n=e.examine||"",a=c.replace(" ","_");return Object(i.c)("div",{class:"card"},Object(i.c)("div",{class:"tooltip-tag"},Object(i.c)("a",{href:"https://oldschool.runescape.wiki/w/".concat(a)},Object(i.c)("img",{class:"card-img-top",alt:c,src:h(t)})),Object(i.c)("div",{class:"tooltip-tag-text"},Object(i.c)("b",null,e.name||"Loading..."),Object(i.c)("br",null),Object(i.c)("small",null,n))))}))))}))},83:function(t,e,c){"use strict";var n=c(28),r=c(29),a=c(32),i=c(30),o=c(31),s=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(o.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.title,c=t.description,n=t.author;document.querySelector("title").text=e||"",document.querySelector("meta[name=description]").setAttribute("content",c||""),document.querySelector("meta[name=author]").setAttribute("content",n||"")}},{key:"render",value:function(){return null}}]),e}(c(0).a);e.a=s},85:function(t,e,c){"use strict";function n(t,e){if(null==t)return{};var c,n,r=function(t,e){if(null==t)return{};var c,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)c=a[n],e.indexOf(c)>=0||(r[c]=t[c]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)c=a[n],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(t,c)&&(r[c]=t[c])}return r}c.d(e,"a",function(){return n})},86:function(t,e,c){"use strict";var n=c(1),r=c(85),a=c(0),i=function(){return Object(a.c)("div",null,Object(a.c)("hr",null),"Developed with ",Object(a.c)("i",{class:"fas fa-heart"})," and ",Object(a.c)("i",{class:"fas fa-coffee"})," ","using ",Object(a.c)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(a.c)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(a.c)("a",{href:"https://fontawesome.com/"},"Font Awesome"))};e.a=function(t){var e=t.children,c=t.fullWidth,o=Object(r.a)(t,["children","fullWidth"]);return o.class=o.class?"container "+o.class:"container",o.style=Object(n.a)({},o.style||{},{maxWidth:c?"100%":""}),Object(a.c)("div",Object.assign({},o,{id:"layout"}),e,Object(a.c)(i,null))}}}]);
//# sourceMappingURL=9.75f5a8ff.chunk.js.map