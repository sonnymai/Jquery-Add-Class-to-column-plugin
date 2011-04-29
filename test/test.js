if (!window.addTableColumnClass) {var addTableColumnClass = {};}

//Initialise some vars
var numberOfTableBodyRows;
	
/* namespace */
module('namespace check');
test('is addTableColumnClass a global variable.',function(){
    expect(1);
    ok( window.addTableColumnClass, 'addTableColumnClass namespace is present');
});

/*fixture*/
addTableColumnClass.testMarkup = '#qunit-fixture';

//Setup and teardown methods
module(".addTableColumnClass() jQuery Plugin", {
  setup: function() {
    addTableColumnClass.testTable = $('table#people');
	addTableColumnClass.testTable.addTableColumnClass({
		targetColumnClass: 'name',
		classesToAdd: 'highlight center'
	})

	//Get the number of table body rows
	numberOfTableBodyRows = $(addTableColumnClass.testTable.selector + ' tbody tr').length;

  },
  teardown: function() {
    $(addTableColumnClass.testMarkup).empty();
  }
});

//Some helpers


//Start testing!
test("td's in target column contains class", function(){
	var numberOfTableBodyRowsWithAddedClass;

	numberOfTableBodyRowsWithAddedClass = [];
	numberOfTableBodyRowsWithAddedClass.highlight = $(addTableColumnClass.testTable.selector + ' tbody tr .highlight').length;
	numberOfTableBodyRowsWithAddedClass.center = $(addTableColumnClass.testTable.selector + ' tbody tr .center').length;
	
	expect(2);
	equals(numberOfTableBodyRows, numberOfTableBodyRowsWithAddedClass.highlight);
	equals(numberOfTableBodyRows, numberOfTableBodyRowsWithAddedClass.center);
});
