var currentPage = "";

function ShowPage(name)
{
	if( currentPage == name ) { return; }

	$(".content").hide();
	
	switch( name ) {
		case "home":
			$(".home-content").show();
			break;
		case "projects":
			$(".projects-content").show();
			break;
		case "resume":
			$(".resume-content").show();
			break;
		case "contact":
			$(".contact-content").show();
			break;
	}
	
	currentPage = name;
}

var slideIndexes = new Object();
var slideTimers = new Object();
function AddSlideshows()
{
	slideIndexes.gallery1 = 1;
	slideTimers.gallery1 = 0;
	ShowSlides('gallery1', 1);
}

// Next/previous controls
function PlusSlides(id, n)
{
  ShowSlides(id, slideIndexes[id] += n);
}

function ShowSlides(id, n)
{
	var slides = $("#" + id + ">.slides");
	var slideIndex = slideIndexes[id];
	
	if (n > slides.length) {
		slideIndex = 1
	}  else if (n < 1) {
		slideIndex = slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	slides[slideIndex-1].style.display = "block";
	slideIndexes[id] = slideIndex;
	
	clearTimeout(slideTimers[id]);
	slideTimers[id] = setTimeout(function() { ShowSlides(id, slideIndexes[id] += 1); }, 2500);
}

function ToggleContent(id)
{
	var content = $("#" + id);
	
	if( content.is(":visible") ) {
		content.hide();
	} else {
		content.show();
	}
	
	content[0].scrollIntoView();
}
function ShowContent(id)
{
	var content = $("#" + id);
	
	content.show();
	
	content[0].scrollIntoView();
}