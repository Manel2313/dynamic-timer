(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(14),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),v=(n(15),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).timer=function(t){e.setState({value:t.target.value}),console.log(t.target.value)},e.msToTime=function(e){var t=parseInt(e/1e3%60),n=parseInt(e/6e4%60),a=parseInt(e/36e5%24);return(a=a<10?"0"+a:a)+" : "+(n=n<10?"0"+n:n)+" : "+(t=t<10?"0"+t:t)},e.state={value:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Merci de saisir le nombre \xe0 convertir !"),r.a.createElement("input",{type:"text",name:"fname",value:this.state.value,onChange:this.timer}),r.a.createElement("div",{className:"result"},r.a.createElement("p",{className:"resultat"},this.msToTime(e)),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Hour"),r.a.createElement("p",null,"Minute"),r.a.createElement("p",null,"Second"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.0de386c2.chunk.js.map