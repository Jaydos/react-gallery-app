(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),o=(a(22),a(5)),i=a(6),l=a(10),u=a(7),h=a(11),p=a(33),m=a(34),d=a(35),f=(a(24),a(26),a(32)),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={inputValue:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"performSearch",value:function(e){""!==this.state.inputValue&&(this.setState({inputValue:""}),this.props.searchFunc(e))}},{key:"buttonData",value:function(){var e=this;return c.a.createElement("button",{onClick:function(){return e.performSearch(e.state.inputValue)},type:"submit",className:"search-button"},c.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"search-form"},c.a.createElement("input",{value:this.state.inputValue,type:"search",name:"search",placeholder:"Search",onChange:function(t){return e.updateInputValue(t)}}),""!==this.state.inputValue?c.a.createElement(f.a,{to:"/search=".concat(this.state.inputValue)},this.buttonData()):c.a.createElement(f.a,{to:"/search=".concat(this.state.inputValue),className:"disabled",onClick:function(e){return e.preventDefault()}},this.buttonData())))}}]),t}(c.a.Component),E=function(){return c.a.createElement("nav",{className:"main-nav"},c.a.createElement("ul",null,c.a.createElement(f.a,{to:"/cats"},"Cats"),c.a.createElement(f.a,{to:"/dogs"},"Dogs"),c.a.createElement(f.a,{to:"/birds"},"Birds")))},v=function(e){return c.a.createElement("div",null,c.a.createElement(g,{searchFunc:e.searchFunc}),c.a.createElement(E,{searchFunc:e.searchFunc}))},k=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome!"),c.a.createElement("p",null,"Please select one of the links or search for your favourite pictures..."))},b=function(e){return c.a.createElement("li",null,c.a.createElement("img",{src:"https://farm".concat(e.farmID,".staticflickr.com/").concat(e.serverID,"/").concat(e.ID,"_").concat(e.secret,".jpg"),alt:""}))},w=function(e){var t=void 0!==e.data.isLoading&&e.data.isLoading,a=e.data.pictures,n="".concat(e.data.searchTag.charAt(0).toUpperCase()+e.data.searchTag.slice(1));0!==a.length&&(n+=" Pics");var r=e.data.pictures.map(function(e,t){return c.a.createElement(b,{farmID:e.farm,serverID:e.server,ID:e.id,secret:e.secret,key:t})});return c.a.createElement("div",{className:"photo-container"},t?c.a.createElement("p",null,"Loading..."):a.length>0?c.a.createElement("div",{className:"photo-container"},c.a.createElement("h1",null,n),c.a.createElement("ul",null,r)):c.a.createElement("div",null,c.a.createElement("h1",null,"No results found"),c.a.createElement("p",null,n," did not return any results, please try again.")))},y=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Error! '",c.a.createElement("span",{className:"errorLink"},"".concat(window.location)),"' is not recognised!"),c.a.createElement("p",null,"Please select a link or search for pictures."))},j="4132f16750d98c707ac2f53c71a082ed",D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).resetLoadState=function(){e.setState({pictures:[],searchTag:"",isLoading:!0})},e.fetchDynamicData=function(t){e.resetLoadState(),fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(j,"&tags=").concat(t,"&per_page=24&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(a){e.setState({pictures:a.photos.photo,searchTag:t,isLoading:!1})}).catch(function(e){console.log("Error retrieving data",e)})},e.fetchStaticData=function(){Promise.all([fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(j,"&tags=cats&per_page=24&format=json&nojsoncallback=1")),fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(j,"&tags=dogs&per_page=24&format=json&nojsoncallback=1")),fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(j,"&tags=birds&per_page=24&format=json&nojsoncallback=1"))]).then(function(t){Promise.all(t.map(function(e){return e.json()})).then(function(t){e.staticPics.pictures.cats.pictures=t[0].photos.photo,e.staticPics.pictures.cats.isLoading=!1,e.staticPics.pictures.dogs.pictures=t[1].photos.photo,e.staticPics.pictures.dogs.isLoading=!1,e.staticPics.pictures.birds.pictures=t[2].photos.photo,e.staticPics.pictures.birds.isLoading=!1,e.setState({isLoading:!1})})}).catch(function(e){console.log("Oopsie Woopsie",e)})},e.state={pictures:[],searchTag:"",isLoading:!0},e.staticPics={pictures:{cats:{pictures:[],searchTag:"cats",isLoading:!0},dogs:{pictures:[],searchTag:"dogs",isLoading:!0},birds:{pictures:[],searchTag:"birds",isLoading:!0}}},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchStaticData(),window.location.pathname.includes("search")&&""===this.state.searchTag&&this.fetchDynamicData(window.location.pathname.slice(8))}},{key:"render",value:function(){var e=this;return c.a.createElement(p.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(v,{searchFunc:this.fetchDynamicData}),c.a.createElement(m.a,null,c.a.createElement(d.a,{exact:!0,path:"/",component:k}),c.a.createElement(d.a,{exact:!0,path:"/cats",component:function(){return c.a.createElement(w,{data:e.staticPics.pictures.cats})}}),c.a.createElement(d.a,{exact:!0,path:"/dogs",component:function(){return c.a.createElement(w,{data:e.staticPics.pictures.dogs})}}),c.a.createElement(d.a,{exact:!0,path:"/birds",component:function(){return c.a.createElement(w,{data:e.staticPics.pictures.birds})}}),c.a.createElement(d.a,{path:"/search=:query",component:function(){return c.a.createElement(w,{data:e.state})}}),c.a.createElement(d.a,{component:y}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.caf3fb96.chunk.js.map