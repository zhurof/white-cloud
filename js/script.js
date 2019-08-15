function is_mobile(){
	return $(window).width()<992
}
$('.presentation__slider').slick({
	slidesToShow: 3,
	useCss: false,
	useTransform: false,
	focusOnSelect: true,
	variableWidth: true,
	centerMode: true,
	centerPadding: 0,
	prevArrow: '<span class="presentation__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="presentation__arrow next fa-arrow-right"></span>',
	customPaging: function(){return ''},
	dotsClass: 'slick-dots presentation__dots',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				useCss: true,
				useTransform: true,
				centerMode: false,
				variableWidth: false,
				focusOnSelect: false,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				useCss: true,
				useTransform: true,
				centerMode: false,
				variableWidth: false,
				focusOnSelect: false,
				arrows: false,
				dots: true
			}
		}
	]
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
			currentIndex = triggers.index('.active');
		
	if(currentIndex == -1){
		currentIndex = 0;
		triggers.eq(0).addClass('active');
	}
	
	elements.hide().eq(currentIndex).show();
	
	triggers.click(function(e){
		e.preventDefault();
		
		if(!$(this).is('.active')){
			var index = triggers.index(this);
			$(this).addClass('active');
			triggers.not(this).removeClass('active');
			elements.hide().eq(index).fadeIn(300);
		}
	})
}
$('.advantages').tabs({
	trigger: '.advantages__trigger',
	element: '.advantages__item'
})
$('.security').tabs({
	trigger: '.security__trigger',
	element: '.security__item'
})

$('.reviews__slider').slick({
	slidesToShow: 3,
	prevArrow: '<span class="reviews__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="reviews__arrow next fa-arrow-right"></span>',
	customPaging: function(){return ''},
	dotsClass: 'slick-dots reviews__dots',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				slidesToShow: 2,
				dots: true
			}
		},{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1,
				dots: true
			}
		}
	]
})
$('.faq__item').click(function(){
	$(this).toggleClass('open').siblings().removeClass('open');
})
$('.partners__slider').slick({
	slidesToShow: 4,
	prevArrow: '<span class="partners__arrow prev fa-arrow-left"></span>',
	nextArrow: '<span class="partners__arrow next fa-arrow-right"></span>',
	customPaging: function(){return ''},
	dotsClass: 'slick-dots partners__dots',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		}
	]
})

//Мобильное меню
$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__bottomline').toggleClass('open');
})

function openSubMenu(link,menu){
	$('.header__menu.clone').remove();
	menu.clone().addClass('clone header__menu').insertBefore('.header__menu').prepend('<li class="back"><a href="#">Назад</a></li>');
	//дублирование родительской ссылки в открывающемся подменю. При необходимости раскоментировать
	//link.clone().insertAfter('.header__menu.clone .back').wrap('<li />');
}
function closeSubMenu(){
	$('.header__menu.clone').remove();
}
$('.header__bottomline').on('click','.header__menu .has-children>a',function(e){
	if(is_mobile()){
		e.preventDefault(); //отключаем переход по ссылкам родительских пунктов в мобильной версии
		var menu = $(this).siblings('ul'),
				link = $(this);
		openSubMenu(link,menu);
	}
})
$('.header__bottomline').on('click','.back',function(e){
	e.preventDefault();
	closeSubMenu();
})