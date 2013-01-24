#jQuery XML Plugin
used on and developed for http://anycook.de

Copyright (c) 2013 Jan Grassegger  
Licensed under the MIT license.  
http://jquery.org/license 

## About
jQuery XML is a plugin to dynamically import html content from xml files. It helps you importing your templates from external xml files. It`s very fast, simple and crossbrowser compatible. 

##Recent Changes
###v0.3
 - "append" method supports callback
 - added option to submit error method for settings on init
 - error method is called if access to template is restricted (403) or template doesn't exist (404)
 - restricted access is detected if template tag has an "access" attribute. value is submitted in event.access

###v0.2
- fixed error with double ```<br>```'s
 
 
##Installation
1. Download latest version from github (min version is recommended)
2. Include it like any other script on your website:

	```html
	<script type="text/javascript" src="/scripts/lib/jquery.xml-0.3.min.js"></script>
	```

##Usage
1. Write a xml file. Currently the file has to use this scheme:
	
	```html
	<templates>
		<template id="an_id">
		 the content you want to use on your website
		</template>
		<template id="another_id">
		 the other content you want to use on your website
		</template>
	<templates>
	```
	
2. Use ```init``` when initializing script. 
	```javascript
	$("import_xml_content_here").xml("init", options)
	
	options:{
		xml : "xml file", 
		async : "if false xml file is stored in cache (faster!!) 
			else xml file reloads every time your requesting data (dynamically)",  
		error : "function called if error occurs"
	}
	```
3. Use ```append``` to append xml content.
	```javascript
	$("import_xml_content_here").xml("append", contentName, callback)
	
	contentName: id of the XML container you want to import
	callback: your callback function
	```
	
	
## Browser Compability
Working with all current versions of Firefox, Chrome, Opera and IE  
Not working with IE<v9.0
