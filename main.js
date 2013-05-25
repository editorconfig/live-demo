(function($) {

  var editorconfig = require('./node_modules/editorconfig/editorconfig.js');

  function createFiles() {
    return [{
      name: $.get('.editorconfig input').value,
      contents: $.get('.editorconfig textarea').value
    }];
  }

  var setTextAreaHeight = function (el) {
    // Set textarea height
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 16 + 'px';

    // Get maximum section height
    var maxHeight = 0;
    $.byTag('section').forEach(function(el) {
      el.style.height = 'auto';
      if (el.clientHeight > maxHeight) maxHeight = el.clientHeight;
    });

    // Set section height
    $.byTag('section').forEach(function(el) { el.style.height = maxHeight; });
  };

  $.byTag('textarea').forEach(function(el) {
    var textareaInput = function () { setTextAreaHeight(el); };
    el.on('input', textareaInput);
    textareaInput();
  });

  $('input, textarea').forEach(function (el) {
    var updateDemo = function () {
      var configFiles = createFiles();
      $('.output [name=filename]').forEach(function (el) {
        var output = "";
        var config = editorconfig.parseFromFiles(el.value, configFiles);
        for (var key in config) {
          output += key + " = " + config[key] + "\n";
        }
        $.get('.output pre').innerText = output;
      });
    };
    el.on('input', updateDemo);
    updateDemo();
  });

}(vQuery));
