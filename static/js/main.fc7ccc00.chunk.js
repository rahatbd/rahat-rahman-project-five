(this["webpackJsonprahat-rahman-project-five"]=this["webpackJsonprahat-rahman-project-five"]||[]).push([[0],{17:function(e,a,t){e.exports=t(40)},22:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(11),o=t.n(s),r=(t(22),t(12)),c=t(13),i=t(16),m=t(15),u=t(14),d=t.n(u),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).state={globalCases:{},canadaCases:{}},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;d()({method:"GET",url:"https://api.covid19api.com/summary",dataResponse:"json"}).then((function(a){console.log(a),console.log(a.data.Global),console.log(a.data.Countries[30]);var t=a.data.Global,n=a.data.Countries[30];for(var l in t)t[l]=t[l].toLocaleString();for(var s in n)n[s]=n[s].toLocaleString();e.setState({globalCases:t,canadaCases:n})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Covid-19 Tracker"),l.a.createElement("section",{className:"wrapper"},l.a.createElement("div",{className:"global"},l.a.createElement("h2",null,"Global Cases"),l.a.createElement("p",null,"New Confirmed: ",l.a.createElement("span",null,this.state.globalCases.NewConfirmed)),l.a.createElement("p",null,"New Deaths: ",l.a.createElement("span",null,this.state.globalCases.NewDeaths)),l.a.createElement("p",null,"New Recovered: ",l.a.createElement("span",null,this.state.globalCases.NewRecovered)),l.a.createElement("p",null,"Total Confirmed: ",l.a.createElement("span",null,this.state.globalCases.TotalConfirmed)),l.a.createElement("p",null,"Total Deaths: ",l.a.createElement("span",null,this.state.globalCases.TotalDeaths)),l.a.createElement("p",null,"Total Recovered: ",l.a.createElement("span",null,this.state.globalCases.TotalRecovered))),l.a.createElement("div",{className:"canada"},l.a.createElement("h2",null,"Canadian Cases"),l.a.createElement("p",null,"New Confirmed: ",l.a.createElement("span",null,this.state.canadaCases.NewConfirmed)),l.a.createElement("p",null,"New Deaths: ",l.a.createElement("span",null,this.state.canadaCases.NewDeaths)),l.a.createElement("p",null,"New Recovered: ",l.a.createElement("span",null,this.state.canadaCases.NewRecovered)),l.a.createElement("p",null,"Total Confirmed: ",l.a.createElement("span",null,this.state.canadaCases.TotalConfirmed)),l.a.createElement("p",null,"Total Deaths: ",l.a.createElement("span",null,this.state.canadaCases.TotalDeaths)),l.a.createElement("p",null,"Total Recovered: ",l.a.createElement("span",null,this.state.canadaCases.TotalRecovered)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.fc7ccc00.chunk.js.map