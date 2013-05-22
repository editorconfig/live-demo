;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function() {

  Element.prototype.on = Element.prototype.addEventListener;
  var $ = document.querySelectorAll.bind(document);
  var $$ = function(selector) {
    return Array.prototype.slice.call($(selector), 0);
  };

  var setTextAreaHeight = function (el) {
    // Set textarea height
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 16 + 'px';

    // Get maximum section height
    var maxHeight = 0;
    $$('section').forEach(function(el) {
      el.style.height = 'auto';
      if (el.clientHeight > maxHeight) maxHeight = el.clientHeight;
    });

    // Set section height
    $$('section').forEach(function(el) { el.style.height = maxHeight; });
  };

  $$('textarea').forEach(function(el) {
    el.on('input', function () {
      setTextAreaHeight(el);
    });
    setTextAreaHeight(el);
  });

}());

},{}]},{},[1])
;