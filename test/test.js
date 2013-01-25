$(document).ready(function(){
	 var options ={
	 	xml : "template.xml"
	 };
	$.when($("body").xml(options)).then(function(){
			$.xml.append("home");
		}
	);
	
});
