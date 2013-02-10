#jQuery XML Plugin
used on and developed for http://anycook.de

Copyright (c) 2013 Jan Grassegger  
Licensed under the MIT license.  
http://jquery.org/license 

## About
jQuery XML is a plugin to dynamically import html content from xml files. It helps you to import your templates from external xml files. It`s very fast, simple and crossbrowser compatible. 

##Recent Changes
###v0.4
- changed API 
- name of tags to search for in xml-file is now changeable
- compatible to jQuery >= 1.9 (no use of $.browser anymore)
- switched async to true in xml ajax request

###v0.3
- "append" method supports callback
- added option to submit error method for settings on init
- error method is called if access to template is restricted (403) or template doesn't exist (404)
- restricted access is detected if template tag has an "access" attribute. value is submitted in event.access

###v0.2
- fixed error with double ```<br>```'s
 
 
##Installation
1. Download latest version (minified version is recommended)
	- [jquery.xml-0.4.min.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.4.min.js) (recommended)
	- [jquery.xml-0.4.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.4.js)
	- [jquery.xml-0.3.min.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.3.min.js)
	- [jquery.xml-0.3.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.3.js)
	- [jquery.xml-0.2.min.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.2.min.js)
	- [jquery.xml-0.2.js](https://s3-eu-west-1.amazonaws.com/jquery.xml/jquery.xml-0.2.js)
2. Include it like any other script on your website:

	```html
	<script type="text/javascript" src="/scripts/lib/jquery.xml-0.4.1.min.js"></script>
	```

##Usage
###Write a xml file.	
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
	
###Initialize the plugin.
```
$("import_xml_content_here").xml(options, callback) → deferred;
```
**Parameters**
```
options :
	xml : path to your xml-file
	async (optional default=false): if false xml file is stored in cache (faster!!) 
		else xml file reloads every time you are requesting data (dynamically)
	error (optional): function called if errors occur
	tagName (optional default="template"): name of the tags you want to include
callback (optional): callback function 
```
	
###Use ```append``` to append xml content to the initialized element.
```
$.xml.append(contentName, callback) → undefined;
```
**Parameters**
```
contentName: id of the XML container you want to import
callback (optional): your callback function
```

###Error handler
With the error handler you can handle errors that occurs when appending xml content to your website content.

```javascript
function(event){
	switch(event.type){
		case 403:
			// if template tag has attribte "access"
			if(!user.checkLogin())){
				console.log("access only for logged-in users");
				return false;
			}
			break;
		case 404:
			// if template does not exist
			goto404Page();
	}
}
return true;
```

## Browser Compability
Working with all current versions of Firefox, Chrome, Opera and IE  
Not working with IE < v9.0
