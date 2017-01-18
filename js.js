$('document').ready(function(){
	$('.tabs .tabs_header').on('click', function (){
		$('.tabs .tabs_header') .not(this) .next() .slideUp(700);
		$(this) .next() .slideToggle(1000);
		$('.tabs .tabs_header') .css('color', '#4999af')
		$(this) .css('color', '#f1715e')
	});

	$.getJSON('events.json', function(data) {
		for(var i = 0, len = data.events.length; i < len; i++){
			$('#events').append(
				'<div class="event_block">' + 
				'<a href="#">' + 
				'<img src="' + data.events[i]["img"] + '" alt="img">' + 
				'<h2 class="event_title">' + data.events[i]["event_title"] + ' <span class="data">' + data.events[i]["data"] + '<span class="norm">th</span><br>' + data.events[i]["month"] + '</span></h2>' +   
				'</a>' + 
				'</div>'
			);
		}
	});

	$.getJSON('shop.json', function(data) {
		for(var i = 0, len = data.shop.length; i < len; i++){
			$('#shop').append(
				'<div class="shop_block">' + 
				'<a href="#">' + 
				'<img src="' + data.shop[i]["img"] + '" alt="img">' + 
				'<h2 class="shop_title">' + data.shop[i]["shop_title"] + ' <span class="price">' + data.shop[i]["price"] + '</span></h2>' +   
				'</a>' + 
				'</div>'
			);
			
		}
	});






});



