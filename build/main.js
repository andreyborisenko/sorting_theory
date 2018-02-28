require('source-map-support/register')
module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports.default = function (a) {
  return a.length;
};

module.exports.words = function (a) {
  return a.split(/\s/).map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s.length > 0;
  }).length;
};

module.exports.and = function (a) {
  return a.split(/\s/).map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s === 'and';
  }).length;
};

module.exports.upperA = function (a) {
  return a.split('').map(function (s) {
    return s.trim();
  }).filter(function (c) {
    return c.length > 0 && c === 'A';
  }).length;
};

module.exports.longestWord = function (a) {
  return Math.max.apply(Math, _toConsumableArray(a.split(/\s/).map(function (s) {
    return s.trim().length;
  })));
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(4);





var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(11);
config.dev = !("production" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_university_204_03_Borisenko_algorithms_theory_sorting_theory_node_modules_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_university_204_03_Borisenko_algorithms_theory_sorting_theory_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_university_204_03_Borisenko_algorithms_theory_sorting_theory_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perf_hooks__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_perf_hooks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_perf_hooks__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var i = 0;
var express = __webpack_require__(0);
var router = express.Router();
var parser = __webpack_require__(9);
var methods = __webpack_require__(10);
var comparers = __webpack_require__(1);

router.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

router.get('/methods', function (req, res, next) {
  console.log('here');
  res.send({
    routes: Object.keys(methods),
    comparers: Object.keys(comparers)
  });
});

router.post('/sort/:method', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_university_204_03_Borisenko_algorithms_theory_sorting_theory_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
    var method, data, out;
    return __WEBPACK_IMPORTED_MODULE_0_D_university_204_03_Borisenko_algorithms_theory_sorting_theory_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = req.params.method;

            console.log(method + ' exists in methods ? ' + (method in methods));

            if (method in methods) {
              data = parser(req.body);


              __WEBPACK_IMPORTED_MODULE_2_perf_hooks__["performance"].mark('s');
              out = methods[method](data);

              __WEBPACK_IMPORTED_MODULE_2_perf_hooks__["performance"].mark('e');
              __WEBPACK_IMPORTED_MODULE_2_perf_hooks__["performance"].measure('t', 's', 'e');

              if (out instanceof Array) {
                out = {
                  array: out,
                  time: __WEBPACK_IMPORTED_MODULE_2_perf_hooks__["performance"].getEntriesByName('t')[i].duration
                };
              } else {
                out['time'] = __WEBPACK_IMPORTED_MODULE_2_perf_hooks__["performance"].getEntriesByName('t')[i].duration;
              }

              res.send(out);
              i++;
            }

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/comparer/:comparer', function (req, res) {
  if (req.body.array === undefined) {
    res.end('You have to send an array of strings');
  }
  if (req.params.comparer in comparers) {
    res.send({
      array: req.body.array.map(comparers[req.params.comparer])
    });
  }
});

router.use(function (req, res) {
  res.end();
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("perf_hooks");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var comparers = __webpack_require__(1);

module.exports = function (_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === undefined ? 'Example. Test? Text!' : _ref$text,
      _ref$comparer = _ref.comparer,
      comparer = _ref$comparer === undefined ? 'default' : _ref$comparer,
      _ref$raw = _ref.raw,
      raw = _ref$raw === undefined ? false : _ref$raw;

  if (typeof text !== 'string') text = 'Example. Test? Text!';

  var sentences = text.split(/[.?!]/).map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s.length > 0;
  });

  return {
    array: sentences,
    cmp: comparer in comparers ? comparers[comparer] : comparers['default'],
    raw: raw
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

Array.prototype.swap = function (i, j) {
  var _ref = [this[j], this[i]];
  this[i] = _ref[0];
  this[j] = _ref[1];
};

module.exports.bubble = function (_ref2) {
  var array = _ref2.array,
      cmp = _ref2.cmp,
      raw = _ref2.raw;

  var steps = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (cmp(array[j]) - cmp(array[j + 1]) > 0) {
        if (!raw) {
          steps.push([j, j + 1]);
        }
        array.swap(j, j + 1);
      }
    }
  }

  return raw ? array : {
    array: array,
    steps: steps
  };
};

module.exports.insert = function (_ref3) {
  var array = _ref3.array,
      cmp = _ref3.cmp,
      raw = _ref3.raw;

  var steps = [];

  for (var i = 1; i < array.length; i++) {
    for (var j = i; j > 0 && cmp(array[j]) - cmp(array[j - 1]) < 0; j--) {
      if (!raw) steps.push([j, j - 1]);
      array.swap(j, j - 1);
    }
  }

  return raw ? array : {
    array: array,
    steps: steps
  };
};

module.exports.select = function (_ref4) {
  var array = _ref4.array,
      cmp = _ref4.cmp,
      raw = _ref4.raw;

  var steps = [];

  for (var i = 0; i < array.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < array.length; j++) {
      if (cmp(array[j]) < cmp(array[min])) min = j;
    }
    if (i !== min) {
      if (!raw) steps.push([i, min]);
      array.swap(i, min);
    }
  }

  return raw ? array : {
    array: array,
    steps: steps
  };
};

module.exports.merge = function merge(_ref5) {
  var array = _ref5.array,
      cmp = _ref5.cmp,
      raw = _ref5.raw;

  if (array.length === 1) {
    return array;
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return mergeArrays(merge({ array: left, cmp: cmp, raw: raw }), merge({ array: right, cmp: cmp, raw: raw }), cmp);
};

var mergeArrays = function mergeArrays(left, right, cmp) {
  var result = [];
  var li = 0;
  var ri = 0;

  while (li < left.length && ri < right.length) {
    if (cmp(left[li]) < cmp(right[ri])) {
      result.push(left[li]);
      li++;
    } else {
      result.push(right[ri]);
      ri++;
    }
  }

  return result.concat(left.slice(li)).concat(right.slice(ri));
};

module.exports.shell = function (_ref6) {
  var array = _ref6.array,
      cmp = _ref6.cmp,
      raw = _ref6.raw;

  var steps = [];

  for (var h = parseInt(array.length / 2); h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < array.length; i++) {
      var k = array[i];
      var j = i;

      for (; j >= h && cmp(k) < cmp(array[j - h]); j -= h) {
        array[j] = array[j - h];
      }

      if (!raw) steps.push([i, j]);
      array[j] = k;
    }
  }

  return raw ? array : {
    array: array,
    steps: steps
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  modules: ['bootstrap-vue/nuxt'],
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map