jQuery(function() {

	'use strict';

 	// Activate top home page carousel
	jQuery('#slider-fullwidth').carousel('cycle');

	// Activate tooltips
	jQuery('[data-toggle="tooltip"]').tooltip();

	jQuery('#gallery-slider').slick({
		arrows: true,
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed:5000,
		swipeToSlide: true,
		responsive: [
			{
			  breakpoint: 1400,
			  settings: {
			    slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 990,
			  settings: {
			    slidesToShow: 2,
			  }
			},
	        {
	          breakpoint: 490,
	          settings: {
	            slidesToShow: 1,
	          }
	        }
		]
	});

	// Clients carousel settings
	jQuery("#clients-carousel").slick({
		arrows: false,
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplaySpeed:500,
	  	autoplay:true,
        responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 4,
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 3,
	          }
	        }
		]
	});

	// News carousel settings
	jQuery("#news-carousel").slick({
	    useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    swipeToSlide: true,
	    responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2,
	            infinite: true,
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
		]
	});

	// Testimonials carousel settings
	jQuery("#testimonial-carousel").slick({
		useTransform: true,
        cssEase: 'cubic-bezier(0.250, 0.250, 0.515, 0.975)',
		slidesToShow: 2,
		speed: 300,
	    swipeToSlide: true,
	    responsive: [
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
		]
	   	});

	// Mobile nav button
	jQuery('#menu-btn').on("click", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
			if(jQuery(this).attr("aria-expanded","false")) {
				jQuery('#nav-secondary-mobile').css("display","none");
			}
		} else {
			jQuery(this).addClass('toggled');
			if(jQuery(this).attr("aria-expanded","true")) {
				jQuery('#nav-secondary-mobile').css("display","block");
				jQuery('#nav-secondary-mobile').addClass("fadeIn");
			}
		}
	})

	jQuery('#menu-btn').on("tap", function() {
		if (jQuery(this).hasClass('toggled')) {
			jQuery(this).removeClass('toggled');
		} else {
			jQuery(this).addClass('toggled');
		}
	})

	// Mobile nav submenu dropdown: add toggle
	jQuery('#mainmenu li.menu-item-has-children').each(function() {
	    jQuery(this).append('<div class="nav-toggle-mobile-submenu"><i class="fa fa-angle-down"></i></div>');
	})

	jQuery('.disabled a').each(function() {
		jQuery(this).attr("href", "#");
	})

	// Mobile nav submenu dropdown: add toggle button class
	jQuery('.nav-toggle-mobile-submenu').on("click", function() {
		if ( jQuery(this).hasClass('opened') ) {
			jQuery(this).removeClass('opened');
			jQuery(this).parent('li').children('.sub-menu').css("display", "none");
		} else {
			jQuery(this).addClass('opened');
	    	jQuery(this).parent('li').children('.sub-menu').css("display", "block");
	    }
	})

	// Add proper height for the .header-wrapper for a smooth affix transition
	jQuery(window).on('resize', function(){
		var headerHeight = jQuery('#header').css("height");
		jQuery('.header-wrapper').css("min-height", headerHeight);
	// initiate the function on load
	});
	jQuery(function() {
		var headerHeight = jQuery('#header').css("height");
		jQuery('.header-wrapper').css("min-height", headerHeight);
	})

	// Gallery filters
	jQuery('#filters a').on('click', function() {
		var $this = jQuery(this);
		if ( $this.hasClass('selected') ) {
			return false;
		}
		jQuery(this).parent().parent().find('.selected').removeClass('selected');
		$this.addClass('selected');
	});

	var $container = jQuery('#gallery');
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector: '.item',
			filter: '*'
		});
	});

	jQuery('#filters a').on("click", function() {
		var selector = jQuery(this).attr('data-filter');
		$container.isotope({ 
			filter: selector
		});
	return false;
	});
	
	jQuery(window).on('resize', function(){
	    $container.isotope('layout');
	    $container.isotope('layout');
	});

	jQuery(function() {
		$container.isotope('layout');
	})

	//Scroll linked animation
	jQuery(document).on("scroll", function () {
		var pageTop = jQuery(document).scrollTop()
		var pageBottom = pageTop + jQuery(window).height()
		var tags = jQuery(".animate")

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i]

			if (jQuery(tag).position().top < pageBottom) {
			  jQuery(tag).addClass("visible")
			} else {
			  jQuery(tag).removeClass("visible")
			}
		}
	})

	// Accordion
    jQuery(function(){
	    if(jQuery('.panel-collapse').hasClass('in')) {
	    	jQuery(this).parent().parent().attr("aria-expanded","true");
	    }
	});
    jQuery(function(){
		jQuery('.accordion-toggle.in').attr("aria-expanded","true");
	});

    // Content layout corrections
	jQuery('.content .subtitle').parent().addClass('no-mrg');
	jQuery('.content .panel-group').parent().addClass('no-mrg');
	jQuery('.section-gallery').parent().parent().css('padding-top', '0');
	jQuery('.shadow-box').closest('.vc_column-inner').css('z-index', '2');
	jQuery('.shadow-box').parents('.vc_row').css('overflow', 'visible');
	jQuery('.feature-box').closest('.vc_row').css('overflow', 'visible');

	// Navigation smooth scroll to div
	jQuery(document).on('click', '#mainmenu a[href^="#"]', function(e) {
	    // target element id
	    var id = jQuery(this).attr('href');

	    // target element
	    var $id = jQuery(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;
	    pos = pos-100;

	    // animated top scrolling
	    jQuery('body, html').animate({scrollTop: pos}, 800 );
	});

	// Scroll to top button
	var btn = jQuery('#btnTop');
	jQuery(window).on("scroll", function() {
	    if (jQuery(window).scrollTop() > 600) {
	    	btn.addClass('show');
	    } else {
	    	btn.removeClass('show');
	    }
	});
	btn.on('click', function(e) {
	    e.preventDefault();
	    jQuery('html, body').animate({scrollTop:0}, '300');
	});

	/**
	 * File skip-link-focus-fix.js.
	 *
	 * Helps with accessibility for keyboard only users.
	 *
	 * Learn more: https://git.io/vWdr2
	 */
	( function() {
		var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
		    isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
		    isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

		if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
			window.addEventListener( 'hashchange', function() {
				var id = location.hash.substring( 1 ),
					element;

				if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
					return;
				}

				element = document.getElementById( id );

				if ( element ) {
					if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
						element.tabIndex = -1;
					}

					element.focus();
				}
			}, false );
		}
	})();

});

// Preloader
jQuery(window).on('load', function(){
	'use strict';
    jQuery('.preloader-wrapper').addClass('animated fadeOut');
    jQuery('body').removeClass('preloader-site');
    jQuery('.content').addClass('animated fadeIn');
    jQuery('body').addClass('preloader-hide');
    jQuery('.preloader-wrapper').fadeOut();
});
