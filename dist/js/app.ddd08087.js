(function(e){function t(t){for(var n,r,i=t[0],l=t[1],c=t[2],b=0,d=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"01db":function(e,t,o){"use strict";var n=o("3b4d"),a=o.n(n);a.a},"034f":function(e,t,o){"use strict";var n=o("85ec"),a=o.n(n);a.a},1055:function(e,t,o){},1198:function(e,t,o){},"154d":function(e,t,o){},"1f53":function(e,t,o){e.exports=o.p+"img/cat.230789f7.png"},2789:function(e,t,o){},"294b":function(e,t,o){e.exports=o.p+"img/book3.e495c5b7.jpg"},"32e8":function(e,t,o){"use strict";var n=o("154d"),a=o.n(n);a.a},"3b4d":function(e,t,o){},"51a2":function(e,t,o){"use strict";var n=o("6909"),a=o.n(n);a.a},"56d7":function(e,t,o){"use strict";o.r(t);o("0fae");var n=o("9e2f"),a=o.n(n),s=(o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("2b0e")),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("header-library"),o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("section",{staticClass:"header__aligned"},[o("img",{staticClass:"header__image",attrs:{src:e.cat}}),o("h2",[e._v("Картотека домашней библиотеки")]),o("br"),o("div",{staticClass:"header__links"},[o("router-link",{staticClass:"header__button",attrs:{to:{name:"Home"}}},[e._v(" Главная ")]),o("router-link",{staticClass:"header__button",attrs:{to:{name:"Inventory"}}},[e._v(" Инвентаризация ")]),o("router-link",{staticClass:"header__button",attrs:{to:{name:"Library"}}},[e._v(" В библиотеку ")])],1)])])},c=[],u={name:"headerLibrary",data:function(){return{cat:o("1f53")}}},b=u,d=(o("01db"),o("2877")),p=Object(d["a"])(b,l,c,!1,null,"391e3e72",null),f=p.exports,k={components:{HeaderLibrary:f}},m=k,h=(o("034f"),Object(d["a"])(m,r,i,!1,null,null,null)),_=h.exports,v=o("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h2",[e._v("Последние добавленные книги")]),o("section",{staticClass:"home__main"},e._l(e.lastBooks,(function(t,n){return o("div",{key:t.id,staticClass:"home__card"},[o("book-card",{attrs:{book:t,image:e.images[n]},on:{openModal:function(o){return e.detailBook(t)}}})],1)})),0),o("transition",{attrs:{name:"fade",mode:"out-in"}},[e.modalVisible?o("book-detail",{staticClass:"home__modal",attrs:{book:e.book},on:{closeModal:function(t){e.modalVisible=!e.modalVisible}}}):e._e()],1)],1)},y=[],w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"book",on:{click:e.openModal}},[o("div",{staticClass:"book__header"},[o("img",{staticClass:"book__image",attrs:{src:e.image}})]),o("div",{staticClass:"book__footer"},[e._v(" "+e._s(e.book.author)+" ")]),o("el-button",{staticClass:"book__title",attrs:{type:"text"}},[e._v(" "+e._s(e.book.name)+" ")])],1)},j=[],x={name:"BookCard",props:{book:{type:Object,default:function(){}},image:{type:String,default:""}},methods:{openModal:function(){this.$emit("openModal")}}},B=x,C=(o("b277"),Object(d["a"])(B,w,j,!1,null,"09331aca",null)),S=C.exports,O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"detail"},[o("p",[e._v(" Автор: "),o("span",[e._v(e._s(e.book.author))])]),o("p",[e._v(" Жанр: "),o("span",[e._v(e._s(e.book.genre.join(", ")))])]),o("p",[e._v(" Описание: "),o("span",[e._v(e._s(e.book.description))])]),o("p",[e._v(" Субьективная оценка: "),o("span",[e._v(e._s(e.book.rating))])]),o("p",[e._v(" Издательство: "),o("span",[e._v(e._s(e.book.publisher))])]),o("p",[e._v(" Происхождение: "),o("span",[e._v(e._s(e.book.origin))])]),o("p",[e._v(" В наличии: "),o("span",[e._v(e._s(e.book.inStock?"да":"нет"))])])])},$=[],E={name:"BookDetail",props:{book:{type:Object,default:function(){}}}},V=E,M=(o("32e8"),Object(d["a"])(V,O,$,!1,null,"3a37cd9d",null)),R=M.exports,L={name:"Home",data:function(){return{images:[o("5c34"),o("71de"),o("294b")],modalVisible:!1,book:{}}},components:{BookDetail:R,BookCard:S},computed:{lastBooks:function(){return this.$store.getters["books/lastBooks"]}},methods:{detailBook:function(e){this.book=e,this.modalVisible=!0}}},I=L,A=(o("cccb"),Object(d["a"])(I,g,y,!1,null,null,null)),G=A.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"library"},[o("el-input",{staticClass:"library__search",attrs:{placeholder:"Поиск по названию или автору",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),"detail"===e.modalVisible?o("modal-book",{key:e.modalVisible,staticClass:"library__modal",on:{closeModal:function(t){e.modalVisible=!1}},scopedSlots:e._u([{key:"header",fn:function(){return[o("h2",[e._v(e._s(e.book.name))])]},proxy:!0}],null,!1,4247005602)},[o("book-detail",{attrs:{book:e.book}})],1):e._e(),"edit"===e.modalVisible||"new"===e.modalVisible?o("modal-book",{key:e.modalVisible,staticClass:"library__modal",on:{closeModal:function(t){e.modalVisible=!1}}},["new"===e.modalVisible?o("book-edit",{attrs:{genres:e.genres},on:{saveBook:e.saveBook}}):o("book-edit",{attrs:{book:e.book,genres:e.genres},on:{saveBook:e.saveBook}})],1):e._e(),o("div",{staticClass:"library__table"},[o("el-button",{staticClass:"library__table-add",attrs:{type:"success",icon:"el-icon-circle-plus-outline",circle:""},on:{click:e.openModalAdd}}),o("el-table",{attrs:{data:e.filteredBooks,border:""}},[o("el-table-column",{attrs:{prop:"name",label:"Название",fixed:"","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return e.detailBook(t.row)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),o("el-table-column",{attrs:{prop:"author",label:"Автор","min-width":"100","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{label:"Жанр","min-width":"70","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.joinGenre(t.row.genre))+" ")]}}])}),o("el-table-column",{attrs:{type:"expand",label:"Описание",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("p",[e._v(e._s(t.row.description))])]}}])}),o("el-table-column",{attrs:{prop:"rating",label:"Оценка",width:"75"}}),o("el-table-column",{attrs:{prop:"publisher",label:"Издательство","min-width":"100"}}),o("el-table-column",{attrs:{prop:"origin",label:"Происхождение","min-width":"100","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{prop:"inStock",label:"Наличие",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.inStock?o("i",{staticClass:"el-icon-check"}):e._e(),t.row.inStock?e._e():o("i",{staticClass:"el-icon-close"})]}}])}),o("el-table-column",{attrs:{fixed:"right",label:"Действия",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return e.openModalEdit(t.row)}}},[e._v(" Edit ")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return e.deleteBook(t.row)}}},[e._v(" Delete ")])]}}])})],1)],1)],1)},T=[],D=(o("4de4"),o("caad"),o("a15b"),o("b0c0"),o("ac1f"),o("2532"),o("841c"),o("b85c")),F=o("5530"),N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal__mask",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[o("el-card",{staticClass:"modal__body",attrs:{"body-style":{padding:"0px"}}},[o("header",{staticClass:"modal__header"},[e._t("header"),o("el-button",{attrs:{type:"text"},on:{click:e.close}},[e._v("✖")])],2),o("main",{staticClass:"modal__main"},[e._t("default")],2),o("footer",{staticClass:"modal__footer"},[e._t("footer")],2)])],1)])},H=[],z={name:"modalBook",methods:{close:function(){this.$emit("closeModal")},hotkeys:function(e){"Escape"===e.key&&this.close()}},mounted:function(){document.addEventListener("keydown",this.hotkeys)},beforeDestroy:function(){document.removeEventListener("keydown",this.hotkeys)}},J=z,K=(o("c256"),Object(d["a"])(J,N,H,!1,null,"1a544b64",null)),W=K.exports,q=o("2f62"),U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"book"},[o("div",{staticClass:"book__left"},[o("label",{staticClass:"book__label"},[o("span",[e._v("Название")]),o("el-input",{staticClass:"book__input",model:{value:e.obj.name,callback:function(t){e.$set(e.obj,"name",t)},expression:"obj.name"}})],1),o("label",{staticClass:"book__label"},[o("span",[e._v("Автор")]),o("el-input",{staticClass:"book__input",model:{value:e.obj.author,callback:function(t){e.$set(e.obj,"author",t)},expression:"obj.author"}})],1),o("label",{staticClass:"book__label"},[o("span",[e._v("Субьективная оценка")]),o("el-select",{staticClass:"book__input",model:{value:e.obj.rating,callback:function(t){e.$set(e.obj,"rating",t)},expression:"obj.rating"}},e._l(e.rating,(function(e){return o("el-option",{key:e.value,attrs:{value:e.value}})})),1)],1),o("label",{staticClass:"book__label"},[o("span",[e._v("Издательство")]),o("el-input",{staticClass:"book__input",model:{value:e.obj.publisher,callback:function(t){e.$set(e.obj,"publisher",t)},expression:"obj.publisher"}})],1)]),o("div",{staticClass:"book__right"},[o("label",{staticClass:"book__label"},[o("span",[e._v("Происхождение")]),o("el-input",{staticClass:"book__input",model:{value:e.obj.origin,callback:function(t){e.$set(e.obj,"origin",t)},expression:"obj.origin"}})],1),o("label",{staticClass:"book__label"},[o("span",[e._v("Жанр")]),o("el-select",{staticClass:"book__input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Choose tags for your article"},model:{value:e.obj.genre,callback:function(t){e.$set(e.obj,"genre",t)},expression:"obj.genre"}},e._l(e.genres,(function(e){return o("el-option",{key:e.id,attrs:{value:e.name}})})),1)],1),o("label",{staticClass:"book__label-checkbox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.obj.inStock,expression:"obj.inStock"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.obj.inStock)?e._i(e.obj.inStock,null)>-1:e.obj.inStock},on:{change:function(t){var o=e.obj.inStock,n=t.target,a=!!n.checked;if(Array.isArray(o)){var s=null,r=e._i(o,s);n.checked?r<0&&e.$set(e.obj,"inStock",o.concat([s])):r>-1&&e.$set(e.obj,"inStock",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(e.obj,"inStock",a)}}}),e._v(" В наличии ")])]),o("label",{staticClass:"book__description"},[o("span",[e._v("Описание")]),o("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5}},model:{value:e.obj.description,callback:function(t){e.$set(e.obj,"description",t)},expression:"obj.description"}})],1),o("el-button",{staticClass:"book__button",attrs:{round:""},on:{click:e.saveBook}},[e._v(" Сохранить ")])],1)},X=[],Q={name:"BookEdit",data:function(){return{obj:this.book,rating:[{value:"5"},{value:"4"},{value:"3"},{value:"2"},{value:"1"}]}},props:{book:{type:Object,default:function(){return{name:"",author:"",genre:[],description:"",rating:"",publisher:"",origin:"",inStock:!0}}},genres:{type:Array,default:function(){return[]}}},methods:{close:function(){this.$emit("closeModal")},saveBook:function(){this.$emit("saveBook",this.obj)}}},Y=Q,Z=(o("51a2"),Object(d["a"])(Y,U,X,!1,null,"63d36e2c",null)),ee=Z.exports,te={name:"Library",components:{BookEdit:ee,BookDetail:R,ModalBook:W},data:function(){return{book:{},modalVisible:!1,search:""}},computed:{books:function(){return this.$store.getters["books/books"]},genres:function(){return this.$store.getters["genres/genres"]},filteredBooks:function(){var e=this;return this.books.filter((function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())||t.author.toLowerCase().includes(e.search.toLowerCase())}))}},methods:Object(F["a"])(Object(F["a"])({},Object(q["b"])(["books/removeBook","books/addNewBook","books/updateBook"])),{},{joinGenre:function(e){return e.join(", ")},detailBook:function(e){this.book=e,this.modalVisible="detail"},openModalEdit:function(e){this.book=e,this.modalVisible="edit"},openModalAdd:function(){this.book={},this.modalVisible="new"},saveBook:function(e){var t,o=Object(D["a"])(e.genre);try{for(o.s();!(t=o.n()).done;){var n=t.value;this.$store.getters["genres/genresArray"].includes(n)||this.$store.dispatch("books/newGenre",n)}}catch(a){o.e(a)}finally{o.f()}e.id?this.$store.dispatch("books/updateBook",e):this.$store.dispatch("books/addNewBook",e),this.modalVisible=!1},deleteBook:function(e){var t=this;this.$confirm("Книга ".concat(e.name," будет удалена, продолжить?"),"Warning",{confirmButtonText:"Удалить",cancelButtonText:"Отмена",type:"warning"}).then((function(){t.$store.dispatch("books/removeBook",e.id),t.$message({type:"success",message:"Удалено!"})})).catch((function(){t.$message({type:"info",message:"Отмена"})}))}})},oe=te,ne=(o("b358"),Object(d["a"])(oe,P,T,!1,null,"e1f939cc",null)),ae=ne.exports,se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"inventory"},[0===e.notFoundBooks.length?o("span",[e._v("*Отмечаем найденные")]):[o("span",[e._v("Не найдены:")]),o("transition-group",{attrs:{name:"boom"}},e._l(e.notFoundBooks,(function(t){return o("ul",{key:t},[o("li",[e._v(e._s(t))])])})),0)],o("el-table",{ref:"multipleTable",attrs:{data:e.books},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),o("el-table-column",{attrs:{label:"Название","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),o("el-table-column",{attrs:{property:"author",label:"Автор","min-width":"120"}}),o("el-table-column",{attrs:{property:"publisher",label:"Издательство","show-overflow-tooltip":"","min-width":"70"}})],1),o("div",[o("el-button",{on:{click:e.toggleSelection}},[e._v("Очистить")]),o("el-button",{on:{click:e.endInventory}},[e._v("Закончить инвентаризацию")])],1)],2)},re=[],ie={name:"Inventory",data:function(){return{multipleSelection:[],notFoundBooks:[]}},computed:{books:function(){return this.$store.getters["books/books"]}},methods:{toggleSelection:function(){this.$refs.multipleTable.clearSelection(),this.notFoundBooks=[]},handleSelectionChange:function(e){this.multipleSelection=e},endInventory:function(){var e=this;this.notFoundBooks=[],this.books.filter((function(t){if(!e.multipleSelection.includes(t))return e.notFoundBooks.push(t.name),t.name})),0===this.notFoundBooks.length&&this.$notify.success({message:"Все книги найдены!",type:"success"})}}},le=ie,ce=(o("5794"),Object(d["a"])(le,se,re,!1,null,"2b88a7fe",null)),ue=ce.exports;s["default"].use(v["a"]);var be=[{path:"/",name:"Home",component:G},{path:"/library/",name:"Library",component:ae},{path:"/inventory/",name:"Inventory",component:ue}],de=new v["a"]({base:"",routes:be}),pe=de,fe=o("0e44"),ke=(o("4160"),o("b64b"),o("159b"),o("96cf"),o("1da1")),me=o("59ca"),he=o.n(me),_e=o("d4ec"),ve=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(_e["a"])(this,e),this.name=t,this.id=o},ge={namespaced:!0,state:{genres:[]},mutations:{setGenres:function(e,t){e.genres=t},newGenre:function(e,t){e.genres.push(t)}},actions:{setGenres:function(e){return Object(ke["a"])(regeneratorRuntime.mark((function t(){var o,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,he.a.database().ref("genres").once("value");case 3:n=t.sent,a=n.val(),s=[],Object.keys(a).forEach((function(e){s.push(new ve(a[e],e))})),o("setGenres",s);case 8:case"end":return t.stop()}}),t)})))()},newGenre:function(e,t){return Object(ke["a"])(regeneratorRuntime.mark((function o(){var n,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,he.a.database().ref("genres").push(t);case 3:a=o.sent,n("newGenre",a);case 5:case"end":return o.stop()}}),o)})))()}},getters:{genres:function(e){return e.genres},genresArray:function(e){var t,o=[],n=Object(D["a"])(e.genres);try{for(n.s();!(t=n.n()).done;){var a=t.value;o.push(a.name)}}catch(s){n.e(s)}finally{n.f()}return o}}},ye=(o("a4d3"),o("e01a"),o("c740"),o("a434"),o("07ac"),function e(t,o,n,a,s,r,i,l){var c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(_e["a"])(this,e),this.name=t,this.author=o,this.genre=n,this.description=a,this.rating=s,this.publisher=r,this.origin=i,this.inStock=l,this.id=c}),we={namespaced:!0,state:{books:[]},mutations:{addNewBook:function(e,t){e.books.push(t)},removeBook:function(e,t){var o=e.books.findIndex((function(e){return e["id"]===t}));e.books.splice(o,1)},updateBook:function(e,t){var o=e.books.findIndex((function(e){return e.id===t.id}));e.books.splice(o,1,t)},setBooks:function(e,t){e.books=t}},getters:{books:function(e){return e.books},lastBooks:function(e){return[e.books[e.books.length-1],e.books[e.books.length-2],e.books[e.books.length-3]]}},actions:{removeBook:function(e,t){return Object(ke["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,he.a.database().ref("books").child(t).remove();case 3:n("removeBook",t);case 4:case"end":return o.stop()}}),o)})))()},updateBook:function(e,t){return Object(ke["a"])(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,o.next=3,he.a.database().ref("books").child(t.id).update({name:t.name,author:t.author,genre:t.genre,description:t.description,rating:t.rating,publisher:t.publisher,origin:t.origin,inStock:t.inStock});case 3:n("updateBook",t);case 4:case"end":return o.stop()}}),o)})))()},addNewBook:function(e,t){return Object(ke["a"])(regeneratorRuntime.mark((function o(){var n,a,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=e.commit,a=new ye(t.name,t.author,t.genre,t.description,t.rating,t.publisher,t.origin,t.inStock),o.next=4,he.a.database().ref("books").push(a);case 4:s=o.sent,n("addNewBook",Object(F["a"])(Object(F["a"])({},a),{},{id:s.key}));case 6:case"end":return o.stop()}}),o)})))()},setBooks:function(e){return Object(ke["a"])(regeneratorRuntime.mark((function t(){var o,n,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,t.next=3,he.a.database().ref("books").once("value");case 3:n=t.sent,a=n.val(),s=[],Object.keys(a).forEach((function(e){var t=a[e];s.push(new ye(t.name,t.author,t.genre,t.description,t.rating,t.publisher,t.origin,t.inStock,e))})),r=Object.values(s),o("setBooks",r);case 9:case"end":return t.stop()}}),t)})))()}}};s["default"].use(q["a"]);var je=new q["a"].Store({modules:{genres:ge,books:we},plugins:[Object(fe["a"])()]}),xe=o("dccd"),Be=o.n(xe);o("ea7b"),o("66ce"),o("741f"),o("588e");s["default"].config.productionTip=!1,s["default"].use(a.a,{locale:Be.a}),he.a.initializeApp({apiKey:"AIzaSyDtflI4eNq7r9LEnHL8IgkWslHVbbiKXcc",authDomain:"apiforlibrary.firebaseapp.com",databaseURL:"https://apiforlibrary.firebaseio.com",projectId:"apiforlibrary",storageBucket:"apiforlibrary.appspot.com",messagingSenderId:"1078259620321",appId:"1:1078259620321:web:f0e2ba80bd977894fbdaa0"}),new s["default"]({router:pe,store:je,render:function(e){return e(_)}}).$mount("#app")},5794:function(e,t,o){"use strict";var n=o("1055"),a=o.n(n);a.a},"5c34":function(e,t,o){e.exports=o.p+"img/book1.d3f00422.jpg"},"5ced":function(e,t,o){},6909:function(e,t,o){},"71de":function(e,t,o){e.exports=o.p+"img/book2.2c6d2f18.jpg"},"85ec":function(e,t,o){},a819:function(e,t,o){},b277:function(e,t,o){"use strict";var n=o("a819"),a=o.n(n);a.a},b358:function(e,t,o){"use strict";var n=o("1198"),a=o.n(n);a.a},c256:function(e,t,o){"use strict";var n=o("2789"),a=o.n(n);a.a},cccb:function(e,t,o){"use strict";var n=o("5ced"),a=o.n(n);a.a}});
//# sourceMappingURL=app.ddd08087.js.map