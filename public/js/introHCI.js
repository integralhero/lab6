'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	$('#colorBtn').click(getColor);
}

function clickProject(result) {
	//console.log(result);
	var id = result["id"];
	var insert = 
		'<h3>' + result.title + '</h3> ' + 
		'<img src="' + result.image + '" class="detailsImage">' +
		'<p><small>' + result.date + '</small></p>' +
		'<p>' + result.summary + '</p>';
	$("div#project" + id + " div.details").html(insert);
}

function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	
	var id = $(this).closest('.project').attr('id');
	var idNumber = id.substr('project'.length);

	$.get("/project/" + idNumber, clickProject);
}

function getColor(e) {
	$.get("/palette", function(result) {
		var colors = result.colors.hex;
		console.log(colors.length);
		$('body').css('background-color', colors[0]);
		$('.thumbnail').css('background-color', colors[1]);
		$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
		$('p').css('color', colors[3]);
		$('.project img').css('opacity', .75);
	});

}

