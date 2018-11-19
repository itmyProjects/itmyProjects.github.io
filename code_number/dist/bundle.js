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
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code.js":
/*!*****************!*\
  !*** ./code.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("alert(\"O‘zbekistonda barcha telefon raqamlari “7 raqamli” tizimdan “9 raqamli” tizimga o‘tkaziladi\")\r\n    alert(\"Bu sizga “7 raqamli” tizimdan “9 raqamli” tizimga moslashingiz uchun yordam beradi\")\r\n    var app = new Vue({\r\n      el: '#app',\r\n      data: {\r\n        number: '',\r\n        code: '',\r\n        num : ''\r\n      },\r\n      watch: {\r\n        number: function() {\r\n          this.code = ''\r\n          this.num = this.number.substring(0,3)\r\n          if (this.num.length == 3  ) {\r\n            this.lookupCode()\r\n          }\r\n        },\r\n      },\r\n      methods: {\r\n        lookupCode: _.debounce(function(){\r\n          var app = this\r\n          app.code = \"Searching...\"\r\n          if(this.num==805||this.num==\t122\t||\tthis.num==\t123\t||\tthis.num==\t124\t\t||\tthis.num==\t126\t||\tthis.num==\t127\t||\tthis.num==\t128\t||\tthis.num==\t129\t||\tthis.num==\t130\t||\tthis.num==\t131\t||\tthis.num==\t132\t||\tthis.num==\t133\t||\tthis.num==\t134\t||\tthis.num==\t135\t||\tthis.num==\t136\t||\tthis.num==\t137\t||\tthis.num==\t138\t||\tthis.num==\t139\t||this.num==\t174\t||\tthis.num==\t175\t||\tthis.num==\t176\t||\tthis.num==\t177\t||\tthis.num==\t178\t||this.num==\t185\t||\tthis.num==\t186\t||\tthis.num==\t187\t||\tthis.num==\t188\t||\tthis.num==\t189\t||this.num==\t315\t||\tthis.num==\t316\t||\tthis.num==\t317\t||\tthis.num==\t318\t||\tthis.num==\t319\t||\tthis.num==\t320\t||\tthis.num==\t321\t||\tthis.num==\t322\t||\tthis.num==\t323\t||\tthis.num==\t324\t||\tthis.num==\t325\t||\tthis.num==\t326\t||\tthis.num==\t327\t||\tthis.num==\t328\t||\tthis.num==\t329\t||this.num==\t345\t||\tthis.num==\t346\t||\tthis.num==\t347\t||\tthis.num==\t348\t||\tthis.num==\t349\t||\tthis.num==\t350\t||\tthis.num==\t351\t||\tthis.num==\t352\t||\tthis.num==\t353\t||\tthis.num==\t354\t||\tthis.num==\t355\t||\tthis.num==\t356\t||\tthis.num==\t357\t||\tthis.num==\t358\t||\tthis.num==\t359\t||this.num==\t370\t||\tthis.num==\t371\t||\tthis.num==\t372\t||\tthis.num==\t373\t||\tthis.num==\t374\t||this.num==\t900\t||\tthis.num==\t901\t||\tthis.num==\t902\t||\tthis.num==\t903\t||\tthis.num==\t904\t||\tthis.num==\t905\t||\tthis.num==\t906\t||\tthis.num==\t907\t||\tthis.num==\t908\t||\tthis.num==\t909\t||\tthis.num==\t910\t||\tthis.num==\t911\t||\tthis.num==\t912\t||\tthis.num==\t913\t||\tthis.num==\t914\t||\tthis.num==\t915\t||\tthis.num==\t916\t||\tthis.num==\t917\t||\tthis.num==\t918\t||\tthis.num==\t919\t||\tthis.num==\t920\t||\tthis.num==\t921\t||\tthis.num==\t922\t||\tthis.num==\t923\t||\tthis.num==\t924\t||\tthis.num==\t925\t||\tthis.num==\t926\t||\tthis.num==\t927\t||\tthis.num==\t928\t||\tthis.num==\t929\t||\tthis.num==\t930\t||\tthis.num==\t931\t||\tthis.num==\t932\t||\tthis.num==\t933\t||\tthis.num==\t934\t||\tthis.num==\t935\t||\tthis.num==\t936\t||\tthis.num==\t937\t||\tthis.num==\t938\t||\tthis.num==\t939\t||\tthis.num==\t940\t||\tthis.num==\t941\t||\tthis.num==\t942\t||\tthis.num==\t943\t||\tthis.num==\t944\t||\tthis.num==\t945\t||\tthis.num==\t946\t||\tthis.num==\t947\t||\tthis.num==\t948\t||\tthis.num==\t949\t||\tthis.num==\t950\t||\tthis.num==\t951\t||\tthis.num==\t952\t||\tthis.num==\t953\t||\tthis.num==\t954\t||\tthis.num==\t955\t||\tthis.num==\t956\t||\tthis.num==\t957\t||\tthis.num==\t958\t||\tthis.num==\t959\t||\tthis.num==\t960\t||\tthis.num==\t961\t||\tthis.num==\t962\t||\tthis.num==\t963\t||\tthis.num==\t964\t||\tthis.num==\t965\t||\tthis.num==\t966\t||\tthis.num==\t967\t||\tthis.num==\t968\t||\tthis.num==\t969\t||\tthis.num==\t970\t||\tthis.num==\t971\t||\tthis.num==\t972\t||\tthis.num==\t973\t||\tthis.num==\t974\t||\tthis.num==\t975\t||\tthis.num==\t976\t||\tthis.num==\t977\t||\tthis.num==\t978\t||\tthis.num==\t979\t||\tthis.num==\t980\t||\tthis.num==\t981\t||\tthis.num==\t982\t||\tthis.num==\t983\t||\tthis.num==\t984\t||\tthis.num==\t985\t||\tthis.num==\t986\t||\tthis.num==\t987\t||\tthis.num==\t988\t||\tthis.num==\t989\t||\tthis.num==\t990\t||\tthis.num==\t991\t||\tthis.num==\t992\t||\tthis.num==\t993\t||\tthis.num==\t994\t||\tthis.num==\t995\t||\tthis.num==\t996\t||\tthis.num==\t997\t||\tthis.num==\t998\t||\tthis.num==\t999\t||this.num==\t162\t||\tthis.num==\t163\t||\tthis.num==\t164\t||\tthis.num==\t165\t||\tthis.num==\t166\t||this.num==\t190\t||\tthis.num==\t191\t||\tthis.num==\t192\t ){\r\n            this.code='Beeline +998 90 '+this.number\r\n            return code\r\n          }\r\n          if(this.num==\t375\t||\tthis.num==\t376\t||\tthis.num==\t377\t||\tthis.num==\t378\t||\tthis.num==\t379 || this.num==\t384\t||\tthis.num==\t385\t||\tthis.num==\t386\t|| this.num==\t391\t||\tthis.num==\t392\t||\tthis.num==\t393\t||\tthis.num==\t394\t||\tthis.num==\t395\t||\tthis.num==\t396\t||this.num==\t506\t||\tthis.num==\t507\t||\tthis.num==\t508\t||\tthis.num==\t509\t||\tthis.num==\t510\t||\tthis.num==\t511\t||\tthis.num==\t512\t||\tthis.num==\t513\t||\tthis.num==\t514\t||\tthis.num==\t515\t||\tthis.num==\t516\t||\tthis.num==\t517\t||\tthis.num==\t518\t||\tthis.num==\t519\t||\tthis.num==\t520\t|| this.num==\t527\t||\tthis.num==\t528\t||\tthis.num==\t529\t||\tthis.num==\t530\t||\tthis.num==\t531\t||\tthis.num==\t532\t||\tthis.num==\t533\t||\tthis.num==\t534\t||\tthis.num==\t535\t||\tthis.num==\t536\t||\tthis.num==\t537\t||\tthis.num==\t538\t||\tthis.num==\t539\t||\tthis.num==\t540\t||\tthis.num==\t541\t||\tthis.num==\t542\t||\tthis.num==\t543\t||\tthis.num==\t544\t||\tthis.num==\t545\t||\tthis.num==\t546\t||\tthis.num==\t547\t||\tthis.num==\t548\t||\tthis.num==\t549\t|| this.num==\t551\t||\tthis.num==\t552\t||\tthis.num==\t553\t||\tthis.num==\t554\t||\tthis.num==\t555\t||\tthis.num==\t556\t||\tthis.num==\t557\t||\tthis.num==\t558\t||\tthis.num==\t559||\tthis.num==\t564||(this.num<601)&&this.num>700){\r\n            this.code='Ucell +998 93 '+this.number\r\n            return code\r\n          }\r\n          if((this.num>122 && this.num<129)||(this.num>301 && this.num<315)||(this.num>361 && this.num<370)){\r\n            this.code='Perfectum +998 98 '+this.number\r\n            return code\r\n          }\r\n          if((this.num>143 && this.num<146)||(this.num>1194 && this.num<201)||(this.num>803 && this.num<805)||\tthis.num==\t807||\tthis.num==\t811||\tthis.num==\t880||\tthis.num==\t838||\tthis.num==\t833 || this.num==830|| this.num==828|| this.num==826 ){\r\n            this.code='UzMobile +998 95 '+this.number\r\n            return code\r\n          }\r\n          if ((this.num>156 && this.num<158)||(this.num>401 && this.num<405)||(this.num>431 && this.num<500)||(this.num>701 && this.num<785)||\tthis.num==343||\tthis.num==130||\tthis.num==131||\tthis.num==330||\tthis.num==333||\tthis.num==343||\tthis.num==414||\tthis.num==420||\tthis.num==422||\tthis.num==424){\r\n            this.code='UMS +998 97 '+this.number\r\n            return  code\r\n          }\r\n          else{\r\n              this.code='Syntax Error or Not in the Datebase yet Please if Some Huge Problem Contact Me 98 125 17 39'\r\n              alert(\"if Some Huge Problem Contact Me 98 125 17 39\")\r\n          }\r\n        },500\r\n      )},\r\n    })\n\n//# sourceURL=webpack:///./code.js?");

/***/ })

/******/ });