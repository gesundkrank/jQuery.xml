/*!
 * jQuery XML Plugin v0.4
 * http://anycook.de
 *
 * Copyright (c) 2011, 2013 Jan Grassegger
 * Released under the MIT license.
 * http://jquery.org/license
 */

;(function ( $, window, document, undefined ) {
	$.fn.xml = function(options){
		var dfd = $.Deferred();
      	var $this = $(this),
     	 	 data = $.xml._settings();
         
         // If the plugin hasn't been initialized yet
        if ( ! data ) {     
    		var settings = {
			      xml   : '/xml/template.xml',
			      async : false,
			      tagName : "template",
			      error : function(event){ console.log(event);}
        	};
    	 
		    // If options exist, lets merge them
		    // with our default settings
		    if ( options ) { 
		      $.extend( settings, options );
	      	}
	      
	      
	      	if(settings.target === null)
	      		console.error("no target given"); 
	      
	      	var $xmlDoc = null;
	      	if(settings.async == false){
	    	  	$.when($.xml.loadXml(settings.xml)).then(function($xmlDoc){
	    	  		$.xml._settings({
		               target : $this,
		               $xmlDoc : $xmlDoc,
		               settings : settings
		         	});
		         	dfd.resolve();
	    	  	});
	    	}else{
	    		$.xml._settings({
	               target : $this,
	               settings : settings
	         	});
	         	dfd.resolve();
	    	}
	      
	      	
         }
         return dfd.promise();
	}
	
	$.xml = {
		_settings : function(settings){
			if(settings)
				$(document).data("jquery.xml", settings);			
			else
				return $(document).data("jquery.xml");
		},
		append : function(contentName, callback){
			if(!contentName)
				contentName = "home";
				
				
			var data = $.xml._settings();
				$el = data.target,
				$xmlDoc = data.$xmlDoc,
				tagName = data.settings.tagName;
	            
	        if(data.settings.async === true){
		    	$.when($.xml.loadXml(data.settings.xml)).then(function($xmlDoc){
		    		$.xml._append_xml($xmlDoc, data,contentName, callback);
		    	});
		    }else{
		    	$.xml._append_xml($xmlDoc,data, contentName, callback);
		    }
	             
		   
		},
		_append_xml: function($xmlDoc, data, contentName, callback){
			var $template = $xmlDoc.find(tagName+"#"+contentName).first();
		    if($template.length == 0){
		    	var event = $.Event("error", {type:404});
		     	if(!data.settings.error.apply(data.target, [event]))
		     		return;
	     	}
	             
	             
	        var access = $template.attr("access");
	        if(access){
	        	var event = $.Event("error", {type:403, access:access});
	        	if(!data.settings.error.apply(data.target, [event]))
	        		return;
	        }
	         	
	        var obj = $template.clone().contents();
	        var $div = $("<div/>").append(obj);
	             
	        //fixes bug with double br's
	        $div.find("br").replaceWith("<br/>");
	        $el.append($div.html());
	             
	        if(callback)
	        	callback.apply($el);
		},
		loadXml : function(xml){
			var xmlDoc =null;
			var dfd = $.Deferred();
			
			$.ajax({
				url: xml,
				dataType: "text",
				success: function(data){
					var xmlDoc = $.parseXML(data);
					dfd.resolve($(xmlDoc));
				},
				error: function(jqXHR, textStatus, errorThrown){
					console.error(jqXHR.responseText);
				}
    		});
		  	
			$xmlDoc = $(xmlDoc);
			return dfd.promise();
  		}
  }
  
})( jQuery, window, document );