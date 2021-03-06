Jquery - Add class to column plugin
===================================

This plugin lets you add any number of classes to a specific column in a table. Sometimes you might need to add particular styles to a
specific column of values, but the [CSS standards](http://www.w3.org/TR/CSS21/tables.html#columns) only allow a limited set of properties. So you can get around this by adding a class to every `<td>` in the column you wanted to style; but this gets messy quickly. This plugin lets you specify the classes you want to add to a particular column and automatically appends them to each `<td>`. Example below.

	<table id="people">
	  <colgroup>
	    <col class="name"/>
	    <col class="age"/>
	    <col class="gender"/>
	  </colgroup>
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>Age</th>
	      <th>Gender</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>John</td>
	      <td>30</td>
	      <td>Male</td>
	    </tr>
	    <tr>
	      <td>Jane</td>
	      <td>22</td>
	      <td>Female</td>
	    </tr>
	    <tr>
	      <td>Darth</td>
	      <td>132</td>
	      <td>Male</td>
	    </tr>
	</table>

	<script>
		$(document).ready(function() {
			$('#people').addTableColumnClass({
			  targetColumnClass: 'name',
			  classesToAdd: 'name center'
			});
		}
	</script>

The above would render something like this.

	<table id="people">
	  <colgroup>
	    <col class="name"/>
	    <col class="age"/>
	    <col class="gender"/>
	  </colgroup>
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>Age</th>
	      <th>Gender</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td class="name center">John</td>
	      <td>30</td>
	      <td>Male</td>
	    </tr>
	    <tr>
	      <td class="name center">Jane</td>
	      <td>22</td>
	      <td>Female</td>
	    </tr>
	    <tr>
	      <td class="name center">Darth</td>
	      <td>132</td>
	      <td>Male</td>
	    </tr>
	</table>
