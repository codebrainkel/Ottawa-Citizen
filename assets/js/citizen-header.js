$(function () {

	var $mobileMenu = $('.mobile-menu');
	var $headerContainer = $('.header-container');
	var $subnav = $('.subnav');

	var toggleMobileMenu = function () {

		if (!$mobileMenu.hasClass('showing')) {
			$mobileMenu.addClass('showing');
		} else {
			$mobileMenu.removeClass('showing');
		}

	};

	var showSubNav = function () {

		var windowWidth = $(window).width();

		if (!$headerContainer.hasClass('nav-fixed') && windowWidth > 992) {

			$('.subnav').removeClass('showing');

			$(this)
				.find('.subnav')
				.addClass('showing');
		}

	};

	var toggleBottomMenu = function () {

		$('.subnav').removeClass('showing');

		if ($(document).scrollTop() >= 50) {
			$headerContainer.addClass('nav-fixed');
		} else {
			$headerContainer.removeClass('nav-fixed');
		}

	};

	var toggleSearch = function () {

		var $subNavButtons = $('.sub-nav-buttons');
		var $searchBar = $('.search-bar');

		if (!$searchBar.hasClass('showing')) {

			$subNavButtons.hide();
			$searchBar.addClass('showing');

		} else {

			$subNavButtons.show();
			$searchBar.removeClass('showing');
		}

	};

	$('.js-button-menu, .js-closer').on('click', toggleMobileMenu);

	$(window).on('scroll', toggleBottomMenu);

	$('.main-navigation > li').on('mouseenter', showSubNav);

	$('.js-search').on('click', toggleSearch);

	$('.close-search-button').on('click', toggleSearch);

});
