document.addEventListener('click', function (event) {
	if (event.target.matches('#openMenu')) {
		document.getElementById('menuContainer').style.display = "flex";
		return;
	}

	if (event.target.matches('#closeMenu')) {
		document.getElementById('menuContainer').style.display = "none";
	}

	if (event.target.matches('#formButton')) {
		event.preventDefault();
		document.getElementById('hideLater').style.display = "none";
		document.getElementById('confirmation').style.display = "block";
	}

}, false);


