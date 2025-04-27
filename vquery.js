/* vQuery library
 *
 * Copyright 2013 Trey Hunner.  Released under MIT license.
 *
 * Exposes vQuery objects and extends Element and NodeList
 *
 * vQuery function and vQuery methods (except get) return NodeList of matches
 * vQuery: Selector and optional node -> NodeList of matches
 * vQuery.byTag: Tag name and optional node -> NodeList of matches
 * vQuery.byClass: Class name and optional node -> NodeList of matches
 * vQuery.get: Selector and optional node -> first matching node
 *
 * Extensions of the DOM:
 * - Adds "on" method to Element
 * - Adds "forEach" method to NodeList
 *
 */
(function() {
    NodeList.prototype.forEach = Array.prototype.forEach;
    HTMLCollection.prototype.forEach = Array.prototype.forEach;

    var nodeOrDocument = function (arg) {
    return function(selector, node) {
      if (!node) node = document;
      return node[arg].call(node, selector);
    };
  };

  var toArray = function (func) {
    return function () {
      var listLikeObj = func.apply(window, arguments);
      return Array.prototype.slice.call(listLikeObj, 0);
    };
  };

  NodeList.prototype.forEach = Array.prototype.forEach;
  Element.prototype.on = Element.prototype.addEventListener;

  var $ = nodeOrDocument('querySelectorAll');
  $.byTag = nodeOrDocument('getElementsByTagName');
  $.byClass = nodeOrDocument('getElementsByClassName');
  $.get = nodeOrDocument('querySelector');
  $.getByClass = function (s) { return $.byClass(s)[0]; };
  $.getByTag = function (s) { return $.byTag(s)[0]; };
  $.getById = nodeOrDocument('getElementById');

  window.vQuery = $;

}());
