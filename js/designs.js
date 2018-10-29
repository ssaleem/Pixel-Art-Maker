$(function(){
	const color = $('#colorPicker');
	const clear = $('#clear');
	const table = $('#pixelCanvas');
	const INIT_HEIGHT = 10;
	const INIT_WIDTH = 10;

	function drawcCanvas(h, w) {
		for(let row = 1; row <= h; row++){
	  		table.append("<tr></tr>");
	  		for(let col = 1; col <= w;col++){
	    		table.find('tr').last().append("<td></td>");
			}
	    }
	}

	drawcCanvas(INIT_HEIGHT, INIT_WIDTH);

    clear.on('click', function(){
    	event.preventDefault();
    	table.find('tr').remove();
    	drawcCanvas($('#inputHeight').val(), $('#inputWidth').val());
    });

	//apply color to cell, when clicked
	table.on( "click", "td", function( event ) {
    	event.preventDefault();
    	$( this ).css( "background-color", color.val() );
	});

	// When size is submitted by the user, make grid
	$('#sizePicker').submit(function(event){
	  	// Delete any existing grid
	  	table.find('tr').remove();
	  	drawcCanvas($('#inputHeight').val(), $('#inputWidth').val());
	  	event.preventDefault();
    });

});