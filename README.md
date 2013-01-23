#jQuery XML Plugin v0.2
used on and developed for http://anycook.de

Copyright (c) 2011 Jan Grassegger
Licensed under the MIT license.
http://jquery.org/license
 
##Recent Changes:
------------------ v0.2 ------------------------------
 - fixed error with double <br>'s
 
 
##Installation
1. download latest version from github (min version is recommended)
2. include it like any other script on your website (like:<script type="text/javascript" src="/scripts/lib/jquery.xml-0.3.js"></script>

##Usage
1. write a xml file. currently the file has to use this scheme:
	
	<templates>
		<template id="an_id">
		 the content you want to use on your website
		</template>
		<template id="another_id">
		 the other content you want to use on your website
		</template>
	<templates>
	
2. use init when initializing script. 
	```javascript
		$("import_xml_content_here").xml("init", options)
	```
	options: 
		xml : xml file
		async : if false xml file is stored in cache (faster!!) else xml file reloads every time your requesting data (dynamically)
3. use append to append xml content.
	```javascript
		$("import_xml_content_here").xml("append", "an_id")
	```
	contentName: id of the XML container you want to import 	
	
BROWSER COMPATIBILITY
working in all current versions of Firefox, Chrome, Opera and IE
not working in IE<v9.0
