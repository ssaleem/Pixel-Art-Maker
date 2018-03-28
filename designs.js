$(function(){
	const color = $('#colorPicker');
	const table = $('#pixelCanvas');

	//apply color to cell, when clicked
	table.on( "click", "td", function( event ) {
    	event.preventDefault();
    	$( this ).css( "background-color", color.val() );
	});

	// When size is submitted by the user, make grid
	$('#sizePicker').submit(function(event){
	  	let width = $('#inputWidth').val();
	  	let height = $('#inputHeight').val();
	  	// Delete any existing grid
	  	table.find('tr').remove();
	  	for(let row = 1; row <= height; row++){
	  		table.append("<tr></tr>");
	  		// console.log(table.children()); //logs <tbody>
	  		// hence use 'find' to get to <tr>
	  		for(let col = 1; col <= width;col++){
	    		table.find('tr').last().append("<td></td>");
			}
	    }
	  	event.preventDefault();
    });

});

	// update paint color on events: {change, input}
	// redundant function [var color is color value not object]
	// $('#colorPicker').on('change input',function(){
	// 	color = $('#colorPicker').val();
	// });