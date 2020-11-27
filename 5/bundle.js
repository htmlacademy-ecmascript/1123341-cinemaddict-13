/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/dayjs/plugin/relativeTime.js":
/*!***************************************************!*\
  !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(r,t){ true?module.exports=t():undefined}(this,function(){"use strict";return function(r,t,e){r=r||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};e.en.relativeTime=o;var d=function(t,n,d,i){for(var u,a,s,f=d.$locale().relativeTime||o,l=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=l.length,m=0;m<h;m+=1){var c=l[m];c.d&&(u=i?e(t).diff(d,c.d,!0):d.diff(t,c.d,!0));var y=(r.rounding||Math.round)(Math.abs(u));if(s=u>0,y<=c.r||!c.r){y<=1&&m>0&&(c=l[m-1]);var p=f[c.l];a="string"==typeof p?p.replace("%d",y):p(y,n,c.l,s);break}}return n?a:(s?f.future:f.past).replace("%s",a)};n.to=function(r,t){return d(r,t,this,!0)},n.from=function(r,t){return d(r,t,this)};var i=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(i(this),r)},n.fromNow=function(r){return this.from(i(this),r)}}});


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: allComments, ages, allEmojies, moviesTitles, genres, descriptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allComments", function() { return allComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ages", function() { return ages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allEmojies", function() { return allEmojies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesTitles", function() { return moviesTitles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genres", function() { return genres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descriptions", function() { return descriptions; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");


const allComments = [
  {
    text: `Booooooooooring`,
    author: `John Doe`,
    emoji: `sleeping`,
    day: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRecordDay"])()
  },
  {
    text: `Hello! Nice`,
    author: `Gelo Bortelli`,
    emoji: `smile`,
    day: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRecordDay"])()
  },
  {
    text: `What's wrong with you? Guys!`,
    author: `Arturo Gutti`,
    emoji: `angry`,
    day: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRecordDay"])()
  },
  {
    text: `Fuck it`,
    author: `Tyo Sergey`,
    emoji: `angry`,
    day: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRecordDay"])()
  },
  {
    text: `Oh no! My eyes!!!!`,
    author: `Conor Gregor`,
    emoji: `puke`,
    day: Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["generateRecordDay"])()
  }
];

const ages = [`0+`, `6+`, `12+`, `16+`, `18+`];

const allEmojies = [`angry`, `puke`, `sleeping`, `smile`];

const moviesTitles = [
  `Made for each other.png`,
  `Popeye meets sinbad.png`,
  `Sagebrush trail.jpg`,
  `Santa claus conquers the martians.jpg`,
  `The dance of life.jpg`,
  `The great flamarion.jpg`,
  `The man with the golden arm.jpg`
];

const genres = [
  `Musical`,
  `Western`,
  `Drama`,
  `Cartoon`,
  `Mystery`,
  `Comedy`,
  `Horror`
];

const descriptions = [
  `In rutrum ac purus sit amet tempus`,
  `Nunc fermentum tortor ac porta dapibus`,
  `Aliquam erat volutpat`,
  `Sed sed nisi sed augue convallis suscipit in sed felis`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante`,
  `Aliquam id orci ut lectus varius viverra`,
  `Fusce tristique felis at fermentum pharetra`,
  `Cras aliquet varius magna, non porta ligula feugiat eget`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
];



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_user_rank_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/user-rank.js */ "./src/view/user-rank.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sorting.js */ "./src/view/sorting.js");
/* harmony import */ var _view_movies_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/movies-all.js */ "./src/view/movies-all.js");
/* harmony import */ var _view_movie_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/movie-card.js */ "./src/view/movie-card.js");
/* harmony import */ var _view_movie_edit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/movie-edit.js */ "./src/view/movie-edit.js");
/* harmony import */ var _view_show_more_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/show-more.js */ "./src/view/show-more.js");
/* harmony import */ var _mock_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/card.js */ "./src/mock/card.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");











const EXTRA_CARD_COUNT = 2;
const COMMON_CARD_COUNT = 22;
const CARD_COUNT_STEP = 5;

const cards = new Array(COMMON_CARD_COUNT).fill().map(_mock_card_js__WEBPACK_IMPORTED_MODULE_7__["generateCard"]);
const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_8__["generateFilter"])(cards);

const body = document.querySelector(`body`);
const siteHeaderElement = body.querySelector(`.header`);
const siteMainElement = body.querySelector(`.main`);

Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteHeaderElement, new _view_user_rank_js__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement());
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, new _view_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](filters).getElement());
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, new _view_sorting_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement());

const films = new _view_movies_all_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(siteMainElement, films.getElement());

const filmsLists = films.getElement().querySelectorAll(`.films-list`);

filmsLists.forEach((list, index) => {
  const container = list.querySelector(`.films-list__container`);
  const count = index === 0 ? CARD_COUNT_STEP : EXTRA_CARD_COUNT;

  for (let i = 0; i < Math.min(cards.length, count); i++) {
    renderCard(container, cards[i]);
  }
});

if (cards.length > CARD_COUNT_STEP) {
  let renderedCardsCount = CARD_COUNT_STEP;

  const showMoreButton = new _view_show_more_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(filmsLists[0], showMoreButton.getElement());

  showMoreButton.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const container = films.getElement().querySelector(`.films-list`).querySelector(`.films-list__container`);
    cards
      .slice(renderedCardsCount, renderedCardsCount + CARD_COUNT_STEP)
      .forEach((card) => renderCard(container, card));

    renderedCardsCount += CARD_COUNT_STEP;

    if (renderedCardsCount >= cards.length) {
      showMoreButton.getElement().remove(); // удаляем со свизуализируемого DOM-дерева
      showMoreButton.removeElement();
    }
  });
}


function renderCard(container, card) {
  const cardComponent = new _view_movie_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](card);
  const cardEditComponent = new _view_movie_edit_js__WEBPACK_IMPORTED_MODULE_5__["default"](card);

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["render"])(container, cardComponent.getElement());

  const showPopup = () => {
    body.appendChild(cardEditComponent.getElement());
  };

  const deletePopup = () => {
    body.removeChild(cardEditComponent.getElement());
  };

  Array.of(`.film-card__poster`, `.film-card__title`, `.film-card__comments`)
  .forEach((elementInCard) => {
    cardComponent.getElement().querySelector(elementInCard).addEventListener(`click`, () => {
      showPopup();
      body.classList.toggle(`hide-overflow`, true);
    });
  });

  cardEditComponent.getElement().querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      deletePopup();
      body.classList.toggle(`hide-overflow`, false);
    });
}




/***/ }),

/***/ "./src/mock/card.js":
/*!**************************!*\
  !*** ./src/mock/card.js ***!
  \**************************/
/*! exports provided: generateCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCard", function() { return generateCard; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");



const generateRating = () => {
  const integer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 10);
  const fractional = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 9);

  return `${integer}.${fractional}`;
};

const generateDuration = () => {
  const duration = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(80, 150);
  const hours = Math.trunc(duration / 60) !== 0 ? `${Math.trunc(duration / 60)}h` : ``;
  const minutes = duration % 60 !== 0 ? `${duration % 60}m` : ``;

  return hours + ` ` + minutes;
};

const generateAgeLimits = () => {
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["ages"].length - 1);
  return _const__WEBPACK_IMPORTED_MODULE_1__["ages"][randomIndex];
};

const generateTitle = () => {
  const randomIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["moviesTitles"].length - 1);
  return _const__WEBPACK_IMPORTED_MODULE_1__["moviesTitles"][randomIndex];
};

const generateGenres = () => {
  const titles = new Set();
  for (let i = 0; i < Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5); i++) {
    titles.add(_const__WEBPACK_IMPORTED_MODULE_1__["genres"][Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["genres"].length - 1)]);
  }

  return [...titles];
};

const generateDescription = () => {
  const sentences = new Set();
  for (let i = 0; i < Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 5); i++) {
    sentences.add(_const__WEBPACK_IMPORTED_MODULE_1__["descriptions"][Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const__WEBPACK_IMPORTED_MODULE_1__["descriptions"].length - 1)]);
  }

  const description = sentences.size !== 0 ? `${[...sentences].join(`. `)}.` : ``;

  return description;
};

const generatedate = () => {
  const milliseconds = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(315522000000, 1577739600000);

  return new Date(milliseconds);
};

const generateCard = () => {
  const title = generateTitle();

  return {
    poster: title.toLowerCase().replace(/\s+/g, `-`),
    title: title.slice(0, title.length - 4),
    rating: generateRating(),
    releaseDate: generatedate(),
    duration: generateDuration(),
    genres: generateGenres(),
    description: generateDescription(),
    commentsSum: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 5),
    watchPlan: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    hasWatched: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    ageLimit: generateAgeLimits()
  };
};



/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const cardToFilterMap = {
  all: (cards) => cards.length,
  watchlist: (cards) => cards
    .filter((card) => card.watchPlan).length,
  history: (cards) => cards
    .filter((card) => card.hasWatched).length,
  favorites: (cards) => cards
    .filter((card) => card.isFavorite).length
};

const generateFilter = (cards) => {
  return Object.entries(cardToFilterMap).map(([filterName, countCards]) => {
    return {
      name: filterName,
      count: countCards(cards),
    };
  });
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, generateRecordDay, RenderPosition, render, renderTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRecordDay", function() { return generateRecordDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);


dayjs__WEBPACK_IMPORTED_MODULE_0___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default.a);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateRecordDay = () => {
  const daysAgo = getRandomInteger(0, 14);

  if (daysAgo <= 7 && !!daysAgo) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(daysAgo, `day`).fromNow();
  }

  return daysAgo ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract(daysAgo, `day`).format(`YYYY/MM/DD HH:mm`) : `today`;
};

const RenderPosition = {
  AFTERBEGIN: `afterBegin`,
  BEFOREEND: `beforeEnd`,
  BEFOREBEGIN: `beforeBegin`,
  AFTEREND: `afterEnd`
};

const render = (container, element, place) => {
  // в элемент уже записан готовый DOM-элемент, а не строковый шаблон
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
    default:
      container.append(element);
  }
};

const renderTemplate = (container, template, place = RenderPosition.BEFOREEND) => {
  // template в качестве строки, а не DOM-элемента
  container.insertAdjacentHTML(place, template);
};

// Принцип работы прост:
// 1. создаём пустой div-блок
// 2. берём HTML в виде строки и вкладываем в этот div-блок, превращая в DOM-элемент
// 3. возвращаем этот DOM-элемент
const createElement = (template) => {
  const newElement = document.createElement(`div`); // 1
  newElement.innerHTML = template; // 2

  return newElement.firstChild; // 3
};
// Единственный нюанс, что HTML в строке должен иметь общую обёртку,
// то есть быть чем-то вроде <nav><a>Link 1</a><a>Link 2</a></nav>,
// а не просто <a>Link 1</a><a>Link 2</a>



/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilterItemTemplate = (filter) => {
  const {name, count} = filter;
  const filterName = name !== `all`
    ? `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`
    : `All movies`;

  return `<a href="#${name}" class="main-navigation__item">
      ${filterName} <span class="main-navigation__item-count">${count}</span>
    </a>`;
};

const createMenuTemplate = (filters) => {
  const filterItems = filters
    .map((filter) => createFilterItemTemplate(filter))
    .join(``);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filterItems}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

class Menu {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createMenuTemplate(this._filters);
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/movie-card.js":
/*!********************************!*\
  !*** ./src/view/movie-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieCard; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



const createMovieCardTemplate = (card) => {
  const {
    poster,
    title,
    rating,
    releaseDate,
    duration,
    genres,
    description,
    commentsSum,
    watchPlan,
    hasWatched,
    isFavorite
  } = card;

  const year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(releaseDate).format(`YYYY`);


  const planClassName = watchPlan ? `film-card__controls-item--active` : ``;
  const watchedClassName = hasWatched ? `film-card__controls-item--active` : ``;
  const favoriteClassName = isFavorite ? `film-card__controls-item--active` : ``;

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${commentsSum} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${planClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

class MovieCard {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createMovieCardTemplate(this._card);
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/movie-edit.js":
/*!********************************!*\
  !*** ./src/view/movie-edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieEdit; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");




const createCommentsTemplate = (count) => {
  return new Array(count)
    .fill()
    .map((_comment, index) => {
      return `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${_const__WEBPACK_IMPORTED_MODULE_2__["allComments"][index].emoji}.png" width="55" height="55" alt="emoji-${_const__WEBPACK_IMPORTED_MODULE_2__["allComments"][index].emoji}">
        </span>
        <div>
          <p class="film-details__comment-text">${_const__WEBPACK_IMPORTED_MODULE_2__["allComments"][index].text}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${_const__WEBPACK_IMPORTED_MODULE_2__["allComments"][index].author}</span>
            <span class="film-details__comment-day">${_const__WEBPACK_IMPORTED_MODULE_2__["allComments"][index].day}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;
    })
    .join(``);
};

const createEmojiesTemplate = (emojies) => {
  return emojies
    .map((emoji) => {
      return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emoji}" value="${emoji}">
        <label class="film-details__emoji-label" for="emoji-${emoji}">
          <img src="./images/emoji/${emoji}.png" width="30" height="30" alt="emoji">
        </label>`;
    })
    .join(``);
};

const generateGenresTemplate = (genres) => {
  return genres
    .map((genre) => {
      return `<span class="film-details__genre">${genre}</span>`;
    })
    .join(``);
};

const createMovieEditTemplate = (card = {}) => {
  const {
    poster: image,
    title,
    rating,
    releaseDate,
    duration,
    description,
    commentsSum,
    ageLimit,
    genres
  } = card;

  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(releaseDate).format(`D MMMM YYYY`);
  const comments = createCommentsTemplate(commentsSum);
  const emojies = createEmojiesTemplate(_const__WEBPACK_IMPORTED_MODULE_2__["allEmojies"]);
  const actualGenres = generateGenresTemplate(genres);

  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${image}" alt="${title}">

            <p class="film-details__age">${ageLimit}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: ${title}</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Anthony Mann</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${date}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${duration}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">${actualGenres}</td>
              </tr>
            </table>

            <p class="film-details__film-description">${description}</p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsSum}</span></h3>

          <ul class="film-details__comments-list">
            ${comments}
          </ul>

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              ${emojies}
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

class MovieEdit {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createMovieEditTemplate(this._card);
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/movies-all.js":
/*!********************************!*\
  !*** ./src/view/movies-all.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllMovies; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createAllMoviesTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
    </section>
  </section>`;
};

class AllMovies {
  constructor() {
    this._element = null;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createAllMoviesTemplate();
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more.js":
/*!*******************************!*\
  !*** ./src/view/show-more.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMore; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createShowMoreTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMore {
  constructor() {
    this._element = null;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createShowMoreTemplate();
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sorting.js":
/*!*****************************!*\
  !*** ./src/view/sorting.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createSortTemplate();
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/user-rank.js":
/*!*******************************!*\
  !*** ./src/view/user-rank.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRank; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createUserRankTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class UserRank {
  constructor() {
    this._element = null;
  }

  getTemplate() { // метод создает строковый шаблон, а ниже превращает в DOM-элемент
    return createUserRankTemplate();
  }

  getElement() { // метод превращает в DOM-элемент полученную строку сверху
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map