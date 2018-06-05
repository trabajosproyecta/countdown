

function  to_form() {
	window.location.replace(inscription_link);
}


function to_form_if(){
	const time  = new Date()
	const inscription = Date.parse(inscription_string)
	if(time > inscription) {
		to_form()
	}
	
}

to_form_if()
