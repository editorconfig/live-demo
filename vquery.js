(function(d) {

  var toArray = function (func) {
    return function (s) { return Array.prototype.slice.call(func(s), 0); };
  };

  Element.prototype.on = Element.prototype.addEventListener;

  var $ = d.querySelectorAll.bind(d);
  $.byTag = d.getElementsByTagName.bind(d);
  $.byClass = d.getElementsByClassName.bind(d);
  $.get = d.querySelector.bind(d);
  $.getByClass = function (s) { return $.byClass(s)[0]; };
  $.getByTag = function (s) { return $.byTag(s)[0]; };

  var $$ = toArray($);
  $$.byTag = toArray($.byTag);
  $$.byClass = toArray($.byClass);

  window.vQuery = $;
  window.wQuery = $$;
}(document));
