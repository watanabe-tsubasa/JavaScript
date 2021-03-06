// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {

  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({1:[function(require,module,exports) {
console.log('Loaded...');

// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the "main-nav" element
        var $target = document.getElementById('main-nav');

        // Toggle the class on "main-nav"
        $target.classList.toggle('hidden');
      });
    });
  }

  var versionSwithcer = document.querySelector('[data-version-switcher]');
  if (versionSwithcer) {
    versionSwithcer.addEventListener('change', function (e) {
      location.href = '/calendars/' + e.target.value;
    });
  }
});
},{}]},{},[1], null)
//# sourceMappingURL=/app.map
console.log('success_1');
// ??????????????????
(script = document.createElement('script')).src = 'https://unpkg.com/ml5@latest/dist/ml5.min.js'
document.getElementsByTagName('head')[0].appendChild(script)

console.log('success');
(async function colorChange() {
    const imageModelURL = 'https://teachablemachine.withgoogle.com/models/OZcdfxibS/';
    const gold = `linear-gradient(45deg, #B67B03 0%, #DAAF08 45%, #FEE9A0 70%, #DAAF08 85%, #B67B03 90% 100%)`;
    const green = `linear-gradient(45deg, #00FF00 0%, #CCFF00 45%, #33CC66 70%, #66CC33 85%, #00CC00 90% 100%)`;
    const body = document.querySelector('article');
    const nav = document.querySelector('nav');
   
  // ?????????????????????????????????????????????
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  console.log('success_2');
  // ???id="webcam"?????????????????????????????????video??????????????????
  const video = document.getElementById('webcam');
  // video?????????????????????????????????????????????
  video.srcObject = stream;
  console.log('success_3');
  // Google???????????????????????????????????????????????????????????????????????????????????????
  classifier = ml5.imageClassifier(imageModelURL + 'model.json', video, () => {
    // ??????????????????????????????????????????????????????
    console.log('?????????????????????????????????????????????');
  }); 
  // ??????????????????
  function loop() {
    // ??????????????????????????????????????????err???????????????results??????????????????
    // ????????????????????? { } ???????????????????????????
    console.log('success_4');
    classifier.classify(async (err, results) => {
      if (results[0].label === 'gold'){
        document.body.style.background = gold;
        body.style.background = gold;
        nav.style.background = gold;      
      } else if (results[0].label === 'green'){
        document.body.style.background = green;
        body.style.background = green;
        nav.style.background = green;        
      } else{
        document.body.style.background = '#d0d0d1';
        body.style.background = '#FFFFFF';
        nav.style.background = '#FFFFFF';
      }
      // ????????????1?????????????????????????????????????????????????????????
      setTimeout(loop, 1000);
    });
  }
  loop();
})();