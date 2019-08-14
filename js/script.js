$('.presentation__slider').slick({
	slidesToShow: 3,
	focusOnSelect: true,
	variableWidth: true,
	centerMode: true,
	centerPadding: 0,
	arrows: false
})

//Самописный "плагин" для табов
$.fn.tabs = function(options){
	var defaultSettings = {
		trigger: '.tabs__trigger',
		element: '.tabs__item'
	}
	var settings = $.extend(defaultSettings,options);
	
	var tabs = this,
			triggers = tabs.find(settings.trigger),
			elements = tabs.find(settings.element),
			currentIndex = triggers.index('.active') || 0;
	
	elements.hide().eq(currentIndex).show();
	
	triggers.click(function(e){
		e.preventDefault();
		
		if(!$(this).is('.active')){
			var index = triggers.index(this);
			console.log(index);
			$(this).addClass('active');
			triggers.not(this).removeClass('active');
			elements.hide().eq(index).fadeIn(300);
		}
	})
}

$('.security').tabs({
	trigger: '.security__trigger',
	element: '.security__item'
})