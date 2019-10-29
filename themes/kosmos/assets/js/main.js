document.addEventListener('click', function (event) {
	if (event.target.matches('#openMenu')) {
		document.getElementById('menuContainer').style.display = "block";
		return;
	}

	if (event.target.matches('#closeMenu')) {
		document.getElementById('menuContainer').style.display = "none";
	}
}, false);


$("#applicationForm").submit(function(e) {
	e.preventDefault();	

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
     	document.getElementById('hideLater').style.display = "none";
		document.getElementById('confirmation').style.display = "block";
    });
});