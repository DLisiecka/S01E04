(function($) {
	
    $(document).ready(function () {
		
		var form = $("form"),
			input = $("input"),
			button = $("button"),
			list = $("<ul></ul>").insertAfter(form);
			

        form.on("submit",function(e){
		   
			e.preventDefault();
		   
			var textValue = $.trim(input.val());
		   
			if(textValue !== ""){
				
				list.append("<li>"+textValue+"</li>");
			};
			
			input.val(''); 
		   
	   });
	   
	});


	
})(jQuery);
