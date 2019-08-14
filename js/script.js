$('.presentation__slider').slick({
	slidesToShow: 3,
	focusOnSelect: true,
	variableWidth: true,
	centerMode: true,
	centerPadding: 0,
	prevArrow: '<span class="presentation__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="presentation__arrow next fa-arrow-right"></span>'
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

$('.reviews__slider').slick({
	slidesToShow: 3,
	prevArrow: '<span class="reviews__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="reviews__arrow next fa-arrow-right"></span>'
})
$('.faq__item').click(function(){
	$(this).toggleClass('open').siblings().removeClass('open');
})
$('.partners__slider').slick({
	slidesToShow: 4,
	prevArrow: '<span class="partners__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="partners__arrow next fa-arrow-right"></span>'
})