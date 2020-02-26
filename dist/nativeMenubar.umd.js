(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nativeMenubar"] = factory();
	else
		root["nativeMenubar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "149a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemSeparator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f43c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemSeparator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemSeparator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemSeparator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1f0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "460d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1f0b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menubar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "971e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d796");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_submenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9bd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemFunctional_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1d6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemFunctional_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemFunctional_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemFunctional_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9d3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("460d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menuItemTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");


/***/ }),

/***/ "d1d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d796":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f43c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76cc857b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menubar.vue?vue&type=template&id=20fc17ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:"menubar",staticClass:"native-menubar",on:{"!keydown":function($event){return _vm.keydownDelegationCallback($event)}}},[_vm._l((_vm.rootMenuItems),function(itemWrapper,index){return _c('menu-item-top',{key:itemWrapper.uid,attrs:{"uid":itemWrapper.uid,"item":itemWrapper.item,"vars":_vm.vars},nativeOn:{"click":function($event){return _vm.topItemClickCallback(itemWrapper.uid)},"mouseenter":function($event){return _vm.topItemMouseenterCallback(itemWrapper.uid)}}})}),_vm._l((_vm.activeSubmenus),function(submenuWrapper,index){return _c('sub-menu',{key:'sm'+index,attrs:{"id":submenuWrapper.parentUid,"menu":submenuWrapper.menu,"submenuIndex":index,"funcs":{itemMouseenterCallback: _vm.itemMouseenterCallback, itemClickCallback: _vm.itemClickCallback,  keydownCallback: _vm.keydownCallback},"vars":_vm.vars,"showAccelerators":_vm.showAccelerators}})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.vue?vue&type=template&id=20fc17ce&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.menubarActivation.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ var menubar_methods_menubarActivation = ({
  methods: {
    toggleMenuActive: function toggleMenuActive(uid) {
      if (this.isMenuActive === false) {
        this.activateMenu(uid);
      } else {
        this.deactivateMenu();
      }
    },
    activateMenu: function () {
      var _activateMenu = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(uid) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isMenuActive = true;
                _context.next = 3;
                return this.showSubmenu(uid);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function activateMenu(_x) {
        return _activateMenu.apply(this, arguments);
      }

      return activateMenu;
    }(),
    deactivateMenu: function () {
      var _deactivateMenu = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isMenuActive = false;
                _context2.next = 3;
                return this.hideAllSubmenus();

              case 3:
                this.resetMenuState();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deactivateMenu() {
        return _deactivateMenu.apply(this, arguments);
      }

      return deactivateMenu;
    }(),
    resetMenuState: function resetMenuState() {
      this.switchInputMode(null);
      this.previousCursorItem = null;
      this.currentCursorItem = null;
      this.previousCursorItemUid = null;
      this.currentCursorItemUid = null;
      this.indexActiveItemInSubmenu = null;
      this.indexActiveSubmenu = null;
    }
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.initialisation.js
/* harmony default export */ var menubar_methods_initialisation = ({
  methods: {
    buildMenuFromTemplate: function buildMenuFromTemplate(_menu) {
      var menuSource = _menu;
      var menuItemsTarget = this.menuItemsFlat;
      var index = this.index;
      var id = 1;

      function recur(source, target, idx) {
        for (var x = 0, xx = source.length; x < xx; x++) {
          var item = source[x];
          var i = target.push({
            uid: id,
            submenu: [],
            item: item
          }) - 1;
          idx[id] = i;
          id++;

          if (item.submenu && item.submenu.length > 0) {
            recur(item.submenu, target, idx);
          }
        }
      }

      function getItem(item, arr) {
        for (var i = 0, ii = arr.length; i < ii; i++) {
          if (arr[i].item === item) {
            return arr[i];
          }
        }
      }

      recur(menuSource, menuItemsTarget, index);
      menuItemsTarget.forEach(function (itemWrapper, idx) {
        if (itemWrapper.item.submenu === undefined) {
          return;
        }

        itemWrapper.item.submenu.forEach(function (subitem) {
          var subItemWrappr = getItem(subitem, menuItemsTarget);
          menuItemsTarget[idx].submenu.push(subItemWrappr);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.keyboardInteraction.js


function menubar_methods_keyboardInteraction_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function menubar_methods_keyboardInteraction_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { menubar_methods_keyboardInteraction_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { menubar_methods_keyboardInteraction_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ var menubar_methods_keyboardInteraction = ({
  methods: {
    keydownDelegationCallback: function keydownDelegationCallback(event) {
      var item = this.getItemByUid(this.currentCursorItemUid);
      var hasSubmenu = item.submenu.length > 0;
      var isTopLevel = this.menu.indexOf(item.item) > -1;
      this.switchInputMode("keyboard");

      if (!isTopLevel) {
        this.keydownCallback(event, item, this.indexActiveItemInSubmenu, this.indexActiveSubmenu, hasSubmenu);
      } else {
        this.topItemKeydownCallback(event, item);
      }
    },
    keydownCallback: function keydownCallback(event, item, indexActiveItemInSubmenu, indexActiveSubmenu, hasSubmenu) {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowUp":
          this.goVerticalMenu(event.key, item, indexActiveItemInSubmenu);
          break;

        case "ArrowRight":
          this.goRight(item, indexActiveSubmenu, hasSubmenu);
          break;

        case "ArrowLeft":
          this.goLeft(item);
          break;

        case "Enter":
          this.dispatchItemEvent(event, item.item);
          this.deactivateMenu();
          break;

        default:
          return;
      }

      event.preventDefault();
    },
    topItemKeydownCallback: function topItemKeydownCallback(event, item) {
      var key = event.key;

      if (!key.startsWith("Arrow")) {
        return;
      }

      event.preventDefault();

      if (key === "ArrowDown" || key === "ArrowUp") {
        this.goVerticalTopLevel(key, item);
      } else if (key === "ArrowRight") {
        this.goRightTopLevel();
      } else if (key === "ArrowLeft") {
        this.goLeftTopLevel();
      }
    },
    //
    // Common top and menu level
    //		
    setKeyboardCursor: function setKeyboardCursor(uid) {
      this.setCursor(uid);
      this.indexActiveItemInSubmenu = this.getIndexOfItemInMenuByUid(uid);
      this.indexActiveSubmenu = this.getSubmenuIndexByMemberUid(uid);
    },
    getUidThatIsNotSeparator: function getUidThatIsNotSeparator(submenu, startingIndex, direction) {
      var itemWrapper = submenu[startingIndex];
      var candidateIndex = startingIndex;
      var i = 0,
          ii = submenu.length;

      while (itemWrapper.item.type === "separator" && i < ii) {
        var _this$getElementAtNex = this.getElementAtNextIndex(submenu, candidateIndex, direction),
            item = _this$getElementAtNex.item,
            index = _this$getElementAtNex.index;

        itemWrapper = item;
        candidateIndex = index;
        i++;
      }

      return i < ii ? itemWrapper.uid : null;
    },
    getActiveSubmenu: function getActiveSubmenu() {
      return this.activeSubmenus[this.activeSubmenus.length - 1];
    },
    getElementAtNextIndex: function getElementAtNextIndex(array, startingIndex, direction) {
      var nextIndex = startingIndex + direction;

      if (nextIndex < 0) {
        nextIndex = array.length - 1;
      }

      if (array[nextIndex] === undefined) {
        nextIndex = 0;
      }

      return {
        item: array[nextIndex],
        index: nextIndex
      };
    },
    // Top level with submenu opened
    // Top level without submenu opened
    // Menu level with ArrowLeft and 1 submenu opened
    // Menu level with ArrowRight and item has no submenu / has already opened submenu
    goHorizontalTopLevel: function () {
      var _goHorizontalTopLevel = menubar_methods_keyboardInteraction_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(deltaIndex) {
        var isAnySubmenuOpen, rootUid, item, nextItem, nextRootUid, nextPreselectedUid;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isAnySubmenuOpen = this.activeSubmenusIds.length > 0;
                rootUid = isAnySubmenuOpen ? this.activeSubmenusIds[0] : this.currentCursorItemUid;
                item = this.getItemByUid(rootUid);
                nextItem = this.getElementAtNextIndex(this.rootMenuItems, this.rootMenuItems.indexOf(item), deltaIndex);
                nextRootUid = nextItem.item.uid;

                if (!isAnySubmenuOpen) {
                  _context.next = 12;
                  break;
                }

                _context.next = 8;
                return this.gotoSubmenuRoot(nextRootUid);

              case 8:
                nextPreselectedUid = this.activeSubmenus[0].menu[0].uid;
                this.setKeyboardCursor(nextPreselectedUid);
                _context.next = 13;
                break;

              case 12:
                this.setKeyboardCursor(nextRootUid);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function goHorizontalTopLevel(_x) {
        return _goHorizontalTopLevel.apply(this, arguments);
      }

      return goHorizontalTopLevel;
    }(),
    //
    // Menu level
    //	
    goVerticalMenu: function goVerticalMenu(eventKey, item, indexActiveItemInSubmenu) {
      //if mouse over parent item with submenu, cursor must move into submenu; i.e. do not increment index but use loopAroundIndex
      var activeSubmenu = this.getActiveSubmenu();
      var isMoveIntoNewSubmenu = activeSubmenu.menu.indexOf(item) === -1;
      var isArrowDown = eventKey === "ArrowDown";
      var deltaNext = isArrowDown ? 1 : -1;
      var loopAroundIndex = isArrowDown ? 0 : activeSubmenu.menu.length - 1;
      var nextItemIndex = indexActiveItemInSubmenu + deltaNext;

      if (activeSubmenu.menu[nextItemIndex] === undefined || isMoveIntoNewSubmenu) {
        nextItemIndex = loopAroundIndex;
      }

      var nextUid = this.getUidThatIsNotSeparator(activeSubmenu.menu, nextItemIndex, deltaNext);

      if (nextUid !== null) {
        this.setKeyboardCursor(nextUid);
      }
    },
    goRight: function () {
      var _goRight = menubar_methods_keyboardInteraction_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(item, indexActiveSubmenu, hasSubmenu) {
        var lastIdx, submenuOpened, newActiveSubmenu, nextUid;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lastIdx = this.activeSubmenus.length - 1;
                submenuOpened = hasSubmenu && indexActiveSubmenu + 1 === lastIdx;

                if (!(hasSubmenu && !submenuOpened)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 5;
                return this.showSubmenu(item.uid);

              case 5:
                newActiveSubmenu = this.getActiveSubmenu();
                nextUid = newActiveSubmenu.menu[0].uid;
                this.setKeyboardCursor(nextUid);
                _context2.next = 11;
                break;

              case 10:
                this.goHorizontalTopLevel(1);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function goRight(_x2, _x3, _x4) {
        return _goRight.apply(this, arguments);
      }

      return goRight;
    }(),
    goLeft: function () {
      var _goLeft = menubar_methods_keyboardInteraction_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(item) {
        var activeSubmenu, isItemInSubmenuThatIsGonnaClose, nextUid;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.activeSubmenusIds.length > 1)) {
                  _context3.next = 9;
                  break;
                }

                activeSubmenu = this.getActiveSubmenu();
                isItemInSubmenuThatIsGonnaClose = activeSubmenu.menu.indexOf(item) > -1;
                nextUid = isItemInSubmenuThatIsGonnaClose ? activeSubmenu.parentUid : item.uid;
                _context3.next = 6;
                return this.hideLastSubmenu();

              case 6:
                this.setKeyboardCursor(nextUid);
                _context3.next = 10;
                break;

              case 9:
                this.goHorizontalTopLevel(-1);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function goLeft(_x5) {
        return _goLeft.apply(this, arguments);
      }

      return goLeft;
    }(),
    //
    // Top level
    //		
    goVerticalTopLevel: function () {
      var _goVerticalTopLevel = menubar_methods_keyboardInteraction_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(eventKey, item) {
        var key, activeSubmenu, menu, nextIndex, nextUid;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                key = eventKey; //if no submenu opened, behaviour is equal to ArrowDown with submenu opened

                if (!(this.activeSubmenus.length === 0)) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 4;
                return this.gotoSubmenuRoot(item.uid);

              case 4:
                key = "ArrowDown";

              case 5:
                activeSubmenu = this.activeSubmenus[0];
                menu = activeSubmenu.menu;
                nextIndex = key === "ArrowDown" ? 0 : menu.length - 1;
                nextUid = menu[nextIndex].uid;
                this.setKeyboardCursor(nextUid);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function goVerticalTopLevel(_x6, _x7) {
        return _goVerticalTopLevel.apply(this, arguments);
      }

      return goVerticalTopLevel;
    }(),
    goRightTopLevel: function goRightTopLevel() {
      this.goHorizontalTopLevel(1);
    },
    goLeftTopLevel: function goLeftTopLevel() {
      this.goHorizontalTopLevel(-1);
    } //keyboardInputModeEnter() {},
    //keyboardInputModeExit() {}

  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.mouseInteraction.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ var menubar_methods_mouseInteraction = ({
  methods: {
    setHighlightedItems: function setHighlightedItems(uid, indexActiveSubmenu) {
      this.focusedUid = uid;
      this.highlightedUids.splice(0, this.highlightedUids.length);

      for (var i = indexActiveSubmenu; i >= 0; i--) {
        this.highlightedUids.unshift(this.activeSubmenusIds[i]);
      }
    },
    setMouseCursor: function setMouseCursor(uid, indexActiveItemInSubmenu, indexActiveSubmenu) {
      this.setCursor(uid);
      this.indexActiveItemInSubmenu = indexActiveItemInSubmenu;
      this.indexActiveSubmenu = indexActiveSubmenu;
    },
    handleRenderNewSubmenu: function handleRenderNewSubmenu(itemUid, hasItemSubmenu) {
      //console.log(this.activeSubmenusIds.indexOf(itemUid) === -1) //#todo is this still possible??!
      if (hasItemSubmenu && this.activeSubmenusIds.indexOf(itemUid) === -1) {
        this.showSubmenu(itemUid);
      }
    },
    handleDestroySubmenu: function handleDestroySubmenu(submenuIdx, transists) {
      var activeMenu = this.activeSubmenus[submenuIdx];
      var isMouseMovingBack = transists < 0;
      var isMouseOverLastSubmenu = submenuIdx === this.activeSubmenus.length - 1;

      if (isMouseMovingBack) {
        var parentUid = activeMenu.parentUid;
        this.hideSubmenusAfterThisId(parentUid);
      } else if (!isMouseOverLastSubmenu) {
        this.hideLastSubmenu();
      }
    },
    openCloseSubmenu: function openCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {
      var previousSubmenuIndex = this.indexActiveSubmenu;
      var transists = this.getSubmenuTransitVector(previousSubmenuIndex, submenuIndex);
      this.setMouseCursor(uid, itemIndexInSubmenu, submenuIndex);
      this.handleDestroySubmenu(submenuIndex, transists);
      this.handleRenderNewSubmenu(uid, hasSubmenu);
    },
    delayOpenCloseSubmenu: function delayOpenCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {
      var _this = this;

      this.currentSubmenuTimeout = setTimeout(function () {
        if (!_this.isMenuActive) {
          return;
        }

        _this.openCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu);
      }, this.menuShowTimeoutMs);
    },
    cancelOpenCloseSubmenu: function cancelOpenCloseSubmenu() {
      clearTimeout(this.currentSubmenuTimeout);
    },
    syncHighlightedWithActiveItems: function syncHighlightedWithActiveItems() {
      var _this$highlightedUids;

      this.highlightedUids.splice(0, this.highlightedUids.length);

      (_this$highlightedUids = this.highlightedUids).push.apply(_this$highlightedUids, _toConsumableArray(this.activeSubmenusIds));
    },
    itemClickCallback: function itemClickCallback(event, item) {
      this.dispatchItemEvent(event, item);
      this.deactivateMenu();
    },
    itemMouseenterCallback: function itemMouseenterCallback(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu) {
      this.switchInputMode("mouse");
      this.setHighlightedItems(uid, submenuIndex);
      this.cancelOpenCloseSubmenu();
      this.delayOpenCloseSubmenu(uid, itemIndexInSubmenu, submenuIndex, hasSubmenu);
    },
    topItemClickCallback: function topItemClickCallback(uid) {
      this.toggleMenuActive(uid);

      if (this.isMenuActive) {
        this.switchInputMode("mouse");
        this.setMouseCursor(uid);
        this.setHighlightedItems(uid, -1);
      }
    },
    topItemMouseenterCallback: function topItemMouseenterCallback(uid) {
      if (this.isMenuActive) {
        this.switchInputMode("mouse");
        this.gotoSubmenuRoot(uid);
        this.setMouseCursor(uid);
        this.setHighlightedItems(uid, -1);
        this.cancelOpenCloseSubmenu();
      }
    },
    //mouseInputModeEnter() {},
    mouseInputModeExit: function mouseInputModeExit() {
      this.cancelOpenCloseSubmenu();
      this.syncHighlightedWithActiveItems();
      this.setCursor(this.focusedUid);
      this.focusedUid = null;
    }
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.submenusAddRemove.js


function menubar_methods_submenusAddRemove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function menubar_methods_submenusAddRemove_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { menubar_methods_submenusAddRemove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { menubar_methods_submenusAddRemove_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ var menubar_methods_submenusAddRemove = ({
  methods: {
    showSubmenu: function () {
      var _showSubmenu = menubar_methods_submenusAddRemove_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(uid) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.activeSubmenusIds.push(uid);
                _context.next = 3;
                return this.$nextTick();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function showSubmenu(_x) {
        return _showSubmenu.apply(this, arguments);
      }

      return showSubmenu;
    }(),
    hideLastSubmenu: function () {
      var _hideLastSubmenu = menubar_methods_submenusAddRemove_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.activeSubmenusIds.pop();
                _context2.next = 3;
                return this.$nextTick();

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function hideLastSubmenu() {
        return _hideLastSubmenu.apply(this, arguments);
      }

      return hideLastSubmenu;
    }(),
    hideAllSubmenus: function () {
      var _hideAllSubmenus = menubar_methods_submenusAddRemove_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.activeSubmenusIds.splice(0, this.activeSubmenusIds.length);
                _context3.next = 3;
                return this.$nextTick();

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function hideAllSubmenus() {
        return _hideAllSubmenus.apply(this, arguments);
      }

      return hideAllSubmenus;
    }(),
    hideSubmenusAfterThisId: function () {
      var _hideSubmenusAfterThisId = menubar_methods_submenusAddRemove_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(uid) {
        var activeUids, index;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                activeUids = this.activeSubmenusIds;
                index = activeUids.indexOf(uid);
                activeUids.splice(index + 1, activeUids.length - 1);
                _context4.next = 5;
                return this.$nextTick();

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function hideSubmenusAfterThisId(_x2) {
        return _hideSubmenusAfterThisId.apply(this, arguments);
      }

      return hideSubmenusAfterThisId;
    }(),
    gotoSubmenuRoot: function () {
      var _gotoSubmenuRoot = menubar_methods_submenusAddRemove_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(uid) {
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.hideAllSubmenus();
                this.showSubmenu(uid);
                _context5.next = 4;
                return this.$nextTick();

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function gotoSubmenuRoot(_x3) {
        return _gotoSubmenuRoot.apply(this, arguments);
      }

      return gotoSubmenuRoot;
    }()
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.methods.queries.js
/* harmony default export */ var menubar_methods_queries = ({
  methods: {
    getIndexOfItemInMenuByUid: function getIndexOfItemInMenuByUid(uid) {
      var activeSubmenus = this.activeSubmenus;
      var item = this.getItemByUid(uid);

      for (var j = 0, jj = activeSubmenus.length; j < jj; j++) {
        var activeSubmenu = this.activeSubmenus[j];
        var i = activeSubmenu.menu.indexOf(item);

        if (i > -1) {
          return i;
        }
      }

      return null;
    },
    getItemByUid: function getItemByUid(uid) {
      var item = this.menuItemsFlat[this.index[uid]];
      return item !== undefined ? item : null;
    },
    getParentItemUidByUid: function getParentItemUidByUid(uid) {
      var item = this.getItemByUid(uid);

      for (var i = 0, ii = this.activeSubmenus.length; i < ii; i++) {
        if (this.activeSubmenus[i].menu.indexOf(item) > -1) {
          return this.activeSubmenus[i].parentUid;
        }
      }

      return null;
    },
    getSubmenuIndexByMemberUid: function getSubmenuIndexByMemberUid(currentUid) {
      return this.activeSubmenusIds.indexOf(this.getParentItemUidByUid(currentUid));
    },
    getSubmenuTransitVector: function getSubmenuTransitVector(previousIndex, currentIndex) {
      var bothValid = previousIndex !== null && currentIndex !== null;
      return bothValid ? currentIndex - previousIndex : 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76cc857b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue?vue&type=template&id=0773e522&
var menuItemTopvue_type_template_id_0773e522_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:'i'+_vm.uid,staticClass:"native-menubar_item native-menubar_item--toplevel",class:{'native-menubar_item--active': _vm.isActive},attrs:{"id":_vm.vars.itemIdPrefix+_vm.uid,"tabindex":"0"}},[_vm._v(_vm._s(_vm.label))])}
var menuItemTopvue_type_template_id_0773e522_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue?vue&type=template&id=0773e522&

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemCommonMixins.js
/* harmony default export */ var menuItemCommonMixins = ({
  computed: {
    isFocused: function isFocused() {
      return this.uid === this.vars.focusedUid;
    },
    isActive: function isActive() {
      return this.vars.highlightedUids.indexOf(this.uid) > -1;
    },
    label: function label() {
      var label;
      label = this.item.label;

      if (label) {
        return label;
      }

      label = this.item.role;

      if (label) {
        return label[0].toUpperCase() + label.substring(1, label.length);
      }

      label = this.item.id;

      if (label) {
        return label[0].toUpperCase() + label.substring(1, label.length);
      }

      return "Unnamed";
    }
  },
  watch: {
    isFocused: function isFocused(itIs) {
      if (itIs) {
        this.$refs["i" + this.uid].focus();
      } else {
        this.$refs["i" + this.uid].blur();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var menuItemTopvue_type_script_lang_js_ = ({
  name: "menu-item-top",
  mixins: [menuItemCommonMixins],
  props: ["uid", "item", "vars"]
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_menuItemTopvue_type_script_lang_js_ = (menuItemTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue?vue&type=style&index=0&lang=css&
var menuItemTopvue_type_style_index_0_lang_css_ = __webpack_require__("9d3e");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemTop.vue






/* normalize component */

var component = normalizeComponent(
  ui_menuItemTopvue_type_script_lang_js_,
  menuItemTopvue_type_template_id_0773e522_render,
  menuItemTopvue_type_template_id_0773e522_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menuItemTop = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76cc857b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/submenu.vue?vue&type=template&id=15f4a74c&
var submenuvue_type_template_id_15f4a74c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"native-menubar_submenu",style:(_vm.style)},_vm._l((_vm.menu),function(itemWrapper,index){return _c(_vm.getComponentType(itemWrapper.item),{key:itemWrapper.uid,tag:"component",attrs:{"uid":itemWrapper.uid,"item":itemWrapper.item,"funcs":_vm.funcs,"vars":_vm.vars,"itemIndexInSubmenu":index,"itemParentIndexInActiveMenus":_vm.submenuIndex,"showAccelerators":_vm.showAccelerators}})}),1)}
var submenuvue_type_template_id_15f4a74c_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/submenu.vue?vue&type=template&id=15f4a74c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76cc857b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue?vue&type=template&id=36178564&
var menuItemFunctionalvue_type_template_id_36178564_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:'i'+_vm.uid,staticClass:"native-menubar_item native-menubar_item--functional",class:{'native-menubar_item--active': _vm.isActive},attrs:{"id":_vm.vars.itemIdPrefix+_vm.uid,"tabindex":"0"},on:_vm._d({"mouseenter":_vm.notifyParentMouseEnteredItem},[_vm.hasClickListner,_vm.clickItem])},[_c('div',{staticClass:"native-menubar_item--content native-menubar_item--left"}),_c('div',{staticClass:"native-menubar_item--content native-menubar_item--middle"},[_vm._v(_vm._s(_vm.label))]),_c('div',{staticClass:"native-menubar_item--content native-menubar_item--right"},[(_vm.item.accelerator && _vm.showAccelerators)?_c('span',[_vm._v(_vm._s(_vm.item.accelerator))]):_vm._e(),(_vm.hasSubmenu)?_c('img',{attrs:{"alt":">","src":"data:image/png;base64,R0lGODlhBAAHAIABACMtMP///yH5BAEAAAEALAAAAAAEAAcAAAIIRA4WaeyrVCgAOw=="}}):_vm._e()])])}
var menuItemFunctionalvue_type_template_id_36178564_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue?vue&type=template&id=36178564&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var menuItemFunctionalvue_type_script_lang_js_ = ({
  name: "menu-item-functional",
  mixins: [menuItemCommonMixins],
  props: ["uid", "item", "funcs", "vars", "itemParentIndexInActiveMenus", "itemIndexInSubmenu", "showAccelerators"],
  computed: {
    hasSubmenu: function hasSubmenu() {
      return this.item.submenu !== undefined && this.item.submenu.length > 0;
    },
    hasClickListner: function hasClickListner() {
      return this.hasSubmenu === false ? "click" : null;
    }
  },
  methods: {
    clickItem: function clickItem(event) {
      if (typeof this.item.click === "function") {//this.item.click(this.item, null, event);
      }

      this.funcs.itemClickCallback(event, this.item);
    },
    notifyParentMouseEnteredItem: function notifyParentMouseEnteredItem() {
      this.funcs.itemMouseenterCallback(this.uid, this.itemIndexInSubmenu, this.itemParentIndexInActiveMenus, this.hasSubmenu);
    }
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_menuItemFunctionalvue_type_script_lang_js_ = (menuItemFunctionalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue?vue&type=style&index=0&lang=css&
var menuItemFunctionalvue_type_style_index_0_lang_css_ = __webpack_require__("9bd4");

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemFunctional.vue






/* normalize component */

var menuItemFunctional_component = normalizeComponent(
  ui_menuItemFunctionalvue_type_script_lang_js_,
  menuItemFunctionalvue_type_template_id_36178564_render,
  menuItemFunctionalvue_type_template_id_36178564_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menuItemFunctional = (menuItemFunctional_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"76cc857b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue?vue&type=template&id=2003ea5d&
var menuItemSeparatorvue_type_template_id_2003ea5d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('hr',{staticClass:"native-menubar_item native-menubar_item--separator",attrs:{"id":_vm.vars.itemIdPrefix+_vm.uid}})}
var menuItemSeparatorvue_type_template_id_2003ea5d_staticRenderFns = []


// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue?vue&type=template&id=2003ea5d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var menuItemSeparatorvue_type_script_lang_js_ = ({
  name: "menu-item-separator",
  props: ["uid", "vars"]
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_menuItemSeparatorvue_type_script_lang_js_ = (menuItemSeparatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue?vue&type=style&index=0&lang=css&
var menuItemSeparatorvue_type_style_index_0_lang_css_ = __webpack_require__("149a");

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menuItemSeparator.vue






/* normalize component */

var menuItemSeparator_component = normalizeComponent(
  ui_menuItemSeparatorvue_type_script_lang_js_,
  menuItemSeparatorvue_type_template_id_2003ea5d_render,
  menuItemSeparatorvue_type_template_id_2003ea5d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menuItemSeparator = (menuItemSeparator_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./projects/plugins/nativeMenubar/src/ui/submenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var submenuvue_type_script_lang_js_ = ({
  name: "sub-menu",
  props: ["menu", "id", "funcs", "vars", "submenuIndex", "showAccelerators"],
  computed: {
    style: function style() {
      ;
      var el = document.getElementById(this.vars.itemIdPrefix + this.id);
      var rect = el.getBoundingClientRect();
      var isTopLevel = this.submenuIndex === 0;
      var left = !isTopLevel ? rect.x + rect.width : rect.x;
      var top = !isTopLevel ? rect.y : rect.y + rect.height;
      return {
        left: left + "px",
        top: top + "px"
      };
    }
  },
  methods: {
    getComponentType: function getComponentType(item) {
      if (item.type === "separator") {
        return "menu-item-separator";
      }

      return "menu-item-functional";
    }
  },
  components: {
    "menu-item-separator": menuItemSeparator,
    "menu-item-functional": menuItemFunctional
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_submenuvue_type_script_lang_js_ = (submenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/nativeMenubar/src/ui/submenu.vue?vue&type=style&index=0&lang=css&
var submenuvue_type_style_index_0_lang_css_ = __webpack_require__("971e");

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/submenu.vue






/* normalize component */

var submenu_component = normalizeComponent(
  ui_submenuvue_type_script_lang_js_,
  submenuvue_type_template_id_15f4a74c_render,
  submenuvue_type_template_id_15f4a74c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var submenu = (submenu_component.exports);
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/node_modules/@joe_kerr/stackthemmodals/src/index.js
const modalStack = [];

// https://stackoverflow.com/a/384380
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
	);
}

function isClickOnOrInsideModal(modalEl, clickTarget) {
	let node = clickTarget;
	while(node != null) {
		//console.log({node, modalEl})
		if(node == modalEl) {
			return true;
		}			
		node = node.parentNode;
	}	
	return false;
}

function modalListenerCallback(event) {
	const index = modalStack.length - 1;
	const modalEl =  modalStack[index].element;
	
	if(isClickOnOrInsideModal(modalEl, event.target)) {
		return;		
	}
	
	if(modalStack[index].stop === true) {
		event.stopPropagation();
	}
	
	modalStack[index].callback(event);
	modalStack.pop();
	
	if(modalStack.length === 0) {
		cleanup();
	}
	else if(index > 0) {
		modalListenerCallback(event);
	}

}

function cleanup() {
	document.removeEventListener("mousedown", modalListenerCallback, true);
}

function enable(element, callback, config={}) {	
	if(!isElement(element)) {
		throw new Error("'element' parameter is not an HTML element.");
	}
	
	const stop = (typeof config.stopPropagation === "boolean") ? config.stopPropagation : true;
	
	modalStack.push({element, callback, stop});
	
	if(modalStack.length === 1) {
		document.addEventListener("mousedown", modalListenerCallback, {capture: true});
	}
}

function cancel(stack=false) {
	modalStack.pop();
	
	if(modalStack.length === 0) {
		cleanup();	
	}
	else if(stack) {
		modalStack.splice(0, modalStack.length);
		cleanup();
	}
}

/* harmony default export */ var src = ({
	push: enable,
	forcePop: cancel
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./projects/plugins/nativeMenubar/src/ui/menubar.js?vue&type=script&lang=js&


function menubarvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function menubarvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { menubarvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { menubarvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var keyListener = null;
/* harmony default export */ var menubarvue_type_script_lang_js_ = ({
  name: "menu-bar",
  mixins: [menubar_methods_menubarActivation, menubar_methods_initialisation, menubar_methods_keyboardInteraction, menubar_methods_mouseInteraction, menubar_methods_submenusAddRemove, menubar_methods_queries],
  props: {
    menu: {
      type: Array,
      required: true
    },
    menuShowTimeoutMs: {
      type: Number,
      default: 200
    },
    showAccelerators: {
      type: Boolean,
      default: false
    },
    modalServiceUser: {
      type: Object,
      validator: function validator(_service) {
        var service = _service || {};
        return typeof service.push === "function" && typeof service.forcePop === "function";
      }
    }
    /*//#todo
    enableKeyboardCursor: {type: Boolean, default: false},
    enableEscapeClose: {type: Boolean, default: false},		
    enableAltShortcut: {type: Boolean, default: false},	
    systemKeyBehavior: "default|prevent|doubleTap",
    /*/
    //??
    //environment: {type: String, default: "any", validator: function(val) {return ["any", "browser", "electron"].indexOf(val) > -1;}},
    //os: {type: String, default: "any", validator: function(val) {return ["any", "windows", "darwin", "linux"].indexOf(val) > -1;}},	

  },
  computed: {
    //Each submenu has a parent item. "activeSubmenus" is build from "this.activeSubmenusIds", i.e. an array of parent item uids (that have a submenu).
    //So, each member in "activeSubmenus" holds all the items in a parent item's "submenu" property.
    //A parent item uid can be set as a submenu's id.
    activeSubmenus: function activeSubmenus() {
      var _this = this;

      var activeSubmenus = [];
      this.activeSubmenusIds.forEach(function (uid) {
        var parentItem = _this.getItemByUid(uid);

        if (parentItem && parentItem.submenu.length > 0) {
          activeSubmenus.push({
            menu: parentItem.submenu,
            parentUid: parentItem.uid,
            id: parentItem.uid
          }); //#todo deprecate parentUid
        }
      });
      return activeSubmenus;
    },
    rootMenuItems: function rootMenuItems() {
      var _this2 = this;

      return this.menuItemsFlat.filter(function (itemWrapper) {
        return _this2.menu.indexOf(itemWrapper.item) > -1;
      });
    },
    modalService: function modalService() {
      return this.modalServiceUser || src;
    },
    vars: function vars() {
      var isMouseMode = this.inputMode === "mouse";
      return {
        focusedUid: isMouseMode ? this.focusedUid : this.currentCursorItemUid,
        highlightedUids: isMouseMode ? this.highlightedUids : this.activeSubmenusIds,
        itemIdPrefix: "native-menubar_item--"
      };
    }
  },
  data: function data() {
    return {
      isMenuActive: false,
      inputMode: "mouse",
      menuItemsFlat: [],
      index: {},
      activeSubmenusIds: [],
      previousCursorItem: null,
      currentCursorItem: null,
      previousCursorItemUid: null,
      currentCursorItemUid: null,
      indexActiveItemInSubmenu: null,
      indexActiveSubmenu: null,
      focusedUid: null,
      highlightedUids: [],
      currentSubmenuTimeout: null
    };
  },
  watch: {
    isMenuActive: function isMenuActive(opening) {
      var _this3 = this;

      if (opening) {
        this.modalService.push(this.$refs.menubar, function () {
          _this3.deactivateMenu();
        }); //this.activateESCListener();
      } else {
        this.modalService.forcePop(true); //this.deactivateESCListener();
      }
    }
  },
  methods: {
    //
    // Cursor movement
    //				
    setCursor: function setCursor(uid) {
      this.previousCursorItem = this.currentCursorItem;
      this.previousCursorItemUid = this.currentCursorItemUid;
      this.currentCursorItemUid = uid;
      this.currentCursorItem = this.getItemByUid(uid);
    },
    //
    // ??
    //			
    switchInputMode: function switchInputMode(newMode) {
      if (this.inputMode === newMode) {
        return false;
      }

      var MODES = [null, "mouse", "keyboard"];

      if (MODES.indexOf(newMode) === -1) {
        throw new Error("switchInputMode was called with an undefined mode: " + newMode);
      }

      var oldMode = this.inputMode;
      var fnExit = oldMode + "InputModeExit";
      var fnEnter = newMode + "InputModeEnter";

      if (typeof this[fnExit] === "function") {
        this[fnExit]();
      }

      if (typeof this[fnEnter] === "function") {
        this[fnEnter]();
      }

      this.inputMode = newMode;
    },
    dispatchItemEvent: function dispatchItemEvent(eventSource, item) {
      if (typeof item.click === "function") {
        item.click(item, null, eventSource);
      }

      this.$emit("itemExecute", {
        eventSource: eventSource,
        item: item
      });
    },
    //
    // Currently not in use.
    //		
    activateESCListener: function activateESCListener(event) {
      var _this4 = this;

      keyListener =
      /*#__PURE__*/
      function () {
        var _ref = menubarvue_type_script_lang_js_asyncToGenerator(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(event) {
          var ESC, nextUid;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ESC = 27;

                  if (!(event.keyCode === ESC)) {
                    _context.next = 9;
                    break;
                  }

                  if (!(_this4.activeSubmenusIds.length > 0)) {
                    _context.next = 8;
                    break;
                  }

                  nextUid = _this4.activeSubmenusIds[_this4.activeSubmenusIds.length - 1];
                  _context.next = 6;
                  return _this4.hideLastSubmenu();

                case 6:
                  _context.next = 9;
                  break;

                case 8:
                  if (_this4.isMenuActive === true) {
                    _this4.deactivateMenu();
                  }

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function keyListener(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      document.addEventListener("keyup", keyListener);
    },
    deactivateESCListener: function deactivateESCListener() {
      document.removeEventListener("keyup", keyListener);
      keyListener = null;
    }
  },
  created: function created() {
    this.buildMenuFromTemplate(this.menu);
  },
  mounted: function mounted() {
    window.addEventListener("blur", this.deactivateMenu); //

    window.aaa = this; //
  },
  destroyed: function destroyed() {
    this.deactivateMenu();
    window.removeEventListener("blur", this.deactivateMenu);
  },
  components: {
    "sub-menu": submenu,
    "menu-item-top": menuItemTop
  }
});
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.js?vue&type=script&lang=js&
 /* harmony default export */ var ui_menubarvue_type_script_lang_js_ = (menubarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.vue?vue&type=style&index=0&lang=css&
var menubarvue_type_style_index_0_lang_css_ = __webpack_require__("7e6c");

// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/ui/menubar.vue






/* normalize component */

var menubar_component = normalizeComponent(
  ui_menubarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menubar = (menubar_component.exports);
// CONCATENATED MODULE: ./projects/plugins/nativeMenubar/src/index.js


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport component */__webpack_require__.d(__webpack_exports__, "component", function() { return menubar; });




/***/ })

/******/ });
});