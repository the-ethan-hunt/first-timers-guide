function disabler() {
	document.getElementById("tempBG").style.display = "none";
}

window.onload = function() {
	disabler();
}

document.onkeyup = function(keyPressed) {
	if (keyPressed.keyCode == 27) {
    	disabler();
   	} else if (keyPressed.keyCode == 13) {
   		searchNow();
   	}
}

function searchNow() {
	var searchText, mainList, l_elements, i, fetch_txt, tempString;
	document.getElementById("tempBG").style.display = "";
	searchText = document.getElementById("searchText");
	searchText = searchText.value.toUpperCase();
	mainList = document.getElementById("tempBG");
	l_elements = mainList.getElementsByTagName("li");
	for (i = 0; i < l_elements.length; i++) {
		fetch_txt = l_elements[i].getElementsByTagName("a")[0];
		tempString = fetch_txt.textContent;
		if (tempString.toUpperCase().indexOf(searchText) > -1) {
			l_elements[i].style.display = "";
		} else {
			l_elements[i].style.display = "none";
		}
	}
}
