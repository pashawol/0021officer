const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {

				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});
				_this.menuMobile.classList.toggle("active");
				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {

	}
	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 3,

		// centeredSlides: true,
		loop: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	// modal window

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form


	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });

	});


	//my custom code
	function CustomTabs2(selectorsArr) {
		for (let selector of selectorsArr) {
			let tabPills = document.querySelectorAll('[data-tab-pill="' + selector + '"]');
			let tabContent = document.querySelectorAll('[data-tab-content="' + selector + '"]');
			if (tabPills != [] && tabContent != []) {
				for (let tab of tabPills) {
					tab.addEventListener('click', function () {
						let thisTab;
						for (let tab of tabPills) {
							tab.classList.remove('active');
						}
						for (let contItem of tabContent) {
							contItem.classList.remove('active');
							if (contItem.getAttribute('data-tab-for') === this.getAttribute('data-tab-for')) {
								thisTab = contItem;
							}
						}
						this.classList.add('active');
						thisTab.classList.add('active');
					});
				}
			}
		}
	}
	//CustomTabs2(['props', 'user-acc', 'change-data-forms', 'catalog-goods-display', 'foto-gallery', 'prod-descr-tabs']);


	//top-nav js
	let closeOnMissClick;
	function toggleDropDownItem(targetSlideToggle) {
		document.body.removeEventListener('click', closeOnMissClick);

		this.classList.toggle('collapsed');
		$(targetSlideToggle).slideToggle(function () { //
			this.classList.toggle('visiable');
		});
		event.stopPropagation();
		if (this.classList.contains('collapsed')){
			closeOnMissClick = closeTopNav.bind(undefined, targetSlideToggle, this);
			document.body.addEventListener('click', closeOnMissClick);
		}
		else{
			window.addEventListener('resize', removeInlineStyle, {passive: true});
		}
	}
	function closeTopNav(closestParent, toggleBtn) {
		if (!event.target.closest(closestParent) && window.matchMedia("(max-width: 768px)").matches){
			$(toggleBtn).click();
			document.body.removeEventListener('click', closeOnMissClick);
		}
	}
	function customTabsToggle(slidesArr){
		for (let [index, tab] of Object.entries(slidesArr)){
			$(tab['toggleBtn']).click(function () {

				for (let [Subindex, tab] of Object.entries(slidesArr)){
					if (index !== Subindex){
						$(tab['toggleBtn']).removeClass('collapsed');
						$(tab['toggleTarget']).slideUp(function () {
							this.classList.remove('visiable');
						});
					}
				}

				toggleDropDownItem.call(this, tab['toggleTarget']);
			});

		}
	}
	let customTabsArr = [
		{
			toggleBtn : '.top-nav__burger-cont',
			toggleTarget: '.top-nav__inline-catalog-block',
		},
		{
			toggleBtn : '.top-nav__mobile-search-icon-cont',
			toggleTarget: '.top-nav__search-col',
		},
	];
	customTabsToggle(customTabsArr);
	//tiny fix
	function removeInlineStyle() {
		if (window.matchMedia("(min-width: 768px)").matches){
			for (let tab of customTabsArr){
				document.querySelector(tab['toggleTarget']).style = '';
			}
			window.removeEventListener('resize', removeInlineStyle, {passive: true});
		}
	}
	// sCatalog

	const clotherSlider = new Swiper('.clother-slider', {
		slidesPerView: 1,

		lazy: {
			loadPrevNext: true,
		},

		//pagination
		pagination: {
			el: $(this).find('.clother-slider-pugin'),
			clickable: true,
		},
		//...defaultSl,
		//slidesPerView: 'auto',
		//watchOverflow: true,
		//spaceBetween: 0,
		//freeMode: true,
		//watchOverflow: true,
		//slidesPerGroup: 3,

		// centeredSlides: true,
		//loop: true,
		//loopFillGroupWithBlank: true,
		//touchRatio: 0.2,
		//slideToClickedSlide: true,
		//freeModeMomentum: true,
		//navigation: {
		//	nextEl: '.swiper-button-next',
		//	prevEl: '.swiper-button-prev',
		//},
	});
	//
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

		}

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	};
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
