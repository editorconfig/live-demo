/* vQuery library
 *
 * Exposes uQuery and vQuery objects
 *
 * uQuery function and uQuery methods (except get) return NodeList of matches
 * uQuery: Selector and optional node -> NodeList
 * uQuery.byTag: Tag name and optional node -> NodeList
 * uQuery.byClass: Class name and optional node -> NodeList
 * uQuery.get: Selector and optional node -> first matching node
 *
 * vQuery function and vQuery methods (except get) return Array of matches
 * vQuery: Selector and optional node -> Array of matches
 * vQuery.byTag: Tag name and optional node -> Array of matches
 * vQuery.byClass: Class name and optional node -> Array of matches
 * vQuery.get: Selector and optional node -> first matching node
*
 */
(function() {

  var nodeOrDocument = function (arg) {
    var func = document[arg];
    return function(selector, node) {
      return func.call(node || document, selector);
    };
  };

  var toArray = function (func) {
    return function () {
      var listLikeObj = func.apply(window, arguments);
      return Array.prototype.slice.call(listLikeObj, 0);
    };
  };

  Element.prototype.on = Element.prototype.addEventListener;

  var $ = nodeOrDocument('querySelectorAll');
  $.byTag = nodeOrDocument('getElementsByTagName');
  $.byClass = nodeOrDocument('getElementsByClassName');
  $.get = nodeOrDocument('querySelector');
  $.getByClass = function (s) { return $.byClass(s)[0]; };
  $.getByTag = function (s) { return $.byTag(s)[0]; };

  var $$ = toArray($);
  $$.byTag = toArray($.byTag);
  $$.byClass = toArray($.byClass);
  $$.get = $.get;

  window.uQuery = $;
  window.vQuery = $$;

}());
