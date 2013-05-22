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
