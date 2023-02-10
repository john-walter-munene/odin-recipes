var $main_options_container = $('.options__first');
var $main_options = $main_options_container.children('li');
var $selected_option;
var $debug = $('#debug');
var $types = $('[data-type]');
var $code = $('#code');
var $pre = $code.parent();

var code_examples = {
  hex: '.example {\n  background: #333;\n}',
  name: '.example {\n  background: rebeccapurple;\n}',
  opacity: '.example {\n  background: rgba(0, 129, 182, 0.7);\n}',
  positioned: '.example {\n  background: url(...);\n  background-position: 100px 0;\n}',
  sprite: '.example:after {\n  content: "";\n  background: url(...);\n  height: 100px;\n  width: 100px;\n  display: block;\n}',
  repeating: '.example {\n  background: url(...);\n  background-repeat: repeat;\n  background-size: 50%;\n}',
  multiple: '.example {\n  background: url(...), url(...);\n  background-size: 210%, 200%;\n  background-repeat: no-repeat, no-repeat;\n  background-position: 145% 0, 0 0;\n}',
  image_opacity: '.example:after {\n  content: "";\n  background: url(...);\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: block;\n  opacity: 0.5;\n}',
  linear: '.example {\n  background: linear-gradient(to top, white, black);\n}',
  radial: '.example {\n  background: radial-gradient(80% 40%, white, black);\n}',
  striped: '.example {\n  background: linear-gradient(white 50%, black 50%);\n}',
  repeating: '.example {\n  background: linear-gradient(white 50%, black 50%);\n  background-size: 100% 50px;\n}'
}

$types.click(function() {
  var attr = $(this).attr('data-type');
  var html = code_examples[attr];
  $code.html(html);
  $pre.removeClass('hide');
  return false;
});

$main_options.click(function() {
  var $this = $(this);
  $pre.addClass('hide');
  
  if ($selected_option) {
    $selected_option.find('.options__second').addClass('hidden');
  }
  
  $selected_option = $this;
  
  $main_options_container.removeClass('left-selected right-selected');

  if ($main_options.index(this) == 0) {
    $main_options_container.addClass('left-selected');
  }
  if ($main_options.index(this) == 2) {
    $main_options_container.addClass('right-selected');
  }
  $this.find('.options__second').removeClass('hidden');

});

