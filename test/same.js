// documentation on writing tests here: http://docs.jquery.com/QUnit
// source : https://github.com/jquery/qunit

// global var htmlsrc for namespace
if (!window.htmlsrc) {var htmlsrc = {};}
/*
 * .searchText() testing user interaction with form input behaviors
 */

/* namespace */
module('namespace check');
test('is htmlsrc a global variable',function(){
	expect(1);
	ok( window.htmlsrc, 'htmlsrc namespace is present');
});

/* fixture */
htmlsrc.testMarkup = '#qunit-fixture';

module(".searchText() jQuery Plugin", {
  setup: function() {
    htmlsrc.testForm = '<form action="submit" method="get" accept-charset="utf-8" id="searchform"><input type="text" name="s" value="" id="s" /><input type="submit" val="&rarr;" name="submit" /></form>';
  },
  teardown: function() {
    $(htmlsrc.testMarkup).empty();
  }
});

test("Search form value empty prior to using searchText plugin", function() {

  // Arrange
  var _Form, _Selector, _Value;  
  _Form = $(htmlsrc.testForm).appendTo(htmlsrc.testMarkup);

  // Act
  _Selector = 'input[type="text"]';
  _Value = $(_Selector,_Form).val();

  // Assert
  expect(1);
  same(_Value,"", "text input field should have be empty, value is empty string");
});

test("searchText jQuery Plugin With No Parameters", function() {

  // Arrange
  var _Form, _Selector, _Value = {};  
  _Form = $(htmlsrc.testForm).appendTo(htmlsrc.testMarkup);

  // Act
  _Form.searchText();
  _Selector = 'input[type="text"]';
  _Value.a = $(_Selector, _Form).val();
  _Value.b = $(_Selector, _Form).focus().val();
  _Value.c = $(_Selector, _Form).focus().blur().val();
  $(_Selector, _Form).blur();
  _Value.c = $(_Selector, _Form).val();

  // Assert
  expect(3);
  same(_Value.a, "Search", "text input field should have the text 'Search'");
  same(_Value.b, "", "text input field should not have any text on focus event");
  same(_Value.c, "Search", "text 'Search' is devault after blur event");
});

test("searchText jQuery Plugin With helperText Parameter", function() {

  // Arrange
  var _Form, _Selector, _Value = {};
  _Form = $(htmlsrc.testForm).appendTo(htmlsrc.testMarkup);
  _Selector = 'input[type="text"]';

  // Act
  _Form.searchText({ 
    helperText	: "Search our site..."
  });
  // get values at different stages of user interaction with text input field
  _Value.a = $(_Selector, _Form).val();
  // simulate user entering text within input field
  $(_Selector, _Form).focus();
  _Value.b = $(_Selector, _Form).val();
  $(_Selector, _Form).val("find it please");
  // simulate user leaving input field
  $(_Selector, _Form).blur();
  _Value.c = $(_Selector, _Form).val();
  // simulate user re-entering input
  $(_Selector, _Form).focus();
  _Value.d = $(_Selector, _Form).val();

  // Assert
  expect(4);
  same(_Value.a, "Search our site...", "text input field should have the custom text 'Search our site...'");
  same(_Value.b, "", "text input field should not have any text on focus event");
  same(_Value.c, "find it please", "new text value is kept after blur event");
  same(_Value.d, "find it please", "new text value is not reset after re-entering input field");
});

test("searchText jQuery Plugin With forceReset Parameter", function() {

  // Arrange
  var _Form, _Selector, _Value = {};
  _Form = $(htmlsrc.testForm).appendTo(htmlsrc.testMarkup);
  _Selector = 'input[type="text"]';

  // Act
  _Form.searchText({ 
    forceReset : true
  });
  // get values at different stages of user interaction with text input field
  _Value.a = $(_Selector, _Form).val();
  // simulate user entering text within input field
  $(_Selector, _Form).focus();
  _Value.b = $(_Selector, _Form).val();
  $(_Selector, _Form).val("I am looking for cheese");
  // simulate user leaving input field
  $(_Selector, _Form).blur();
  _Value.c = $(_Selector, _Form).val();
  // simulate user re-entering input
  $(_Selector, _Form).focus();
  _Value.d = $(_Selector, _Form).val();

  // Assert
  expect(4);
  same(_Value.a, "Search", "text input field should have the default text 'Search'");
  same(_Value.b, "", "text input field should not have any text on focus event");
  same(_Value.c, "I am looking for cheese", "new text value is kept after blur event");
  same(_Value.d, "", "new text value is forced to reset after re-entering (focus) input");
});