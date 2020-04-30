"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

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
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _objectSpread2;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/04.png);"></div>'); // /добавляет подложку для pixel perfect
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
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = {};
	var swiper4 = new Swiper('.color-slider', _objectSpread({}, defaultSl, (_objectSpread2 = {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true
	}, _defineProperty(_objectSpread2, "watchOverflow", true), _defineProperty(_objectSpread2, "slidesPerGroup", 3), _defineProperty(_objectSpread2, "loop", true), _defineProperty(_objectSpread2, "loopFillGroupWithBlank", true), _defineProperty(_objectSpread2, "touchRatio", 0.2), _defineProperty(_objectSpread2, "slideToClickedSlide", true), _defineProperty(_objectSpread2, "freeModeMomentum", true), _defineProperty(_objectSpread2, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _objectSpread2))); // modal window

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function (e) {
		e.preventDefault();
		var th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data
		}).done(function (data) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () {});
	}); //my custom code

	function CustomTabsScoped(tabGroupArr) {
		var _iterator = _createForOfIteratorHelper(tabGroupArr),
				_step;

		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var tabGroupItem = _step.value;
				var scopeNode = void 0;
				var selector = void 0;

				if (typeof tabGroupItem === 'string') {
					scopeNode = [document];
					selector = tabGroupItem;
				} else {
					scopeNode = document.querySelectorAll(tabGroupItem.scopeElementSelect);
					selector = tabGroupItem.tabGroup;
					if (!scopeNode) return;
				}

				var _iterator2 = _createForOfIteratorHelper(scopeNode),
						_step2;

				try {
					var _loop = function _loop() {
						var node = _step2.value;
						var tabPills = node.querySelectorAll('[data-tab-pill="' + selector + '"]');
						var tabContent = node.querySelectorAll('[data-tab-content="' + selector + '"]');

						if (tabPills != [] && tabContent != []) {
							var _iterator3 = _createForOfIteratorHelper(tabPills),
									_step3;

							try {
								for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
									var tab = _step3.value;
									tab.addEventListener('click', function () {
										var thisTab;

										var _iterator4 = _createForOfIteratorHelper(tabPills),
												_step4;

										try {
											for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
												var _tab = _step4.value;

												_tab.classList.remove('active');
											}
										} catch (err) {
											_iterator4.e(err);
										} finally {
											_iterator4.f();
										}

										var _iterator5 = _createForOfIteratorHelper(tabContent),
												_step5;

										try {
											for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
												var contItem = _step5.value;
												contItem.classList.remove('active');

												if (contItem.getAttribute('data-tab-for') === this.getAttribute('data-tab-for')) {
													thisTab = contItem;
												}
											}
										} catch (err) {
											_iterator5.e(err);
										} finally {
											_iterator5.f();
										}

										this.classList.add('active');
										thisTab.classList.add('active');
									});
								}
							} catch (err) {
								_iterator3.e(err);
							} finally {
								_iterator3.f();
							}
						}
					};

					for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
						_loop();
					}
				} catch (err) {
					_iterator2.e(err);
				} finally {
					_iterator2.f();
				}
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
	}

	function breakStringAfterWords() {
		var allElemsToBeBroken = document.querySelectorAll('[data-break-after]');

		var _iterator6 = _createForOfIteratorHelper(allElemsToBeBroken),
				_step6;

		try {
			for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
				var elem = _step6.value;
				var amountOfWords = elem.getAttribute('data-break-after');
				var newSpanClass = 'break-words';
				var mediaModificator = elem.getAttribute('data-media');

				if (mediaModificator) {
					newSpanClass += '-' + mediaModificator;
				}

				var innerWordsArr = elem.innerHTML.split(' ');
				var wordsToBeInSpan = innerWordsArr.splice(0, amountOfWords);
				var newSpan = document.createElement('span');
				newSpan.classList.add(newSpanClass);
				newSpan.innerHTML = wordsToBeInSpan.join(' ') + ' '; //elem.innerHTML = newSpan + innerWordsArr.join(' ');

				elem.innerHTML = '';
				elem.appendChild(newSpan);
				elem.innerHTML += innerWordsArr.join(' ');
			}
		} catch (err) {
			_iterator6.e(err);
		} finally {
			_iterator6.f();
		}
	}

	breakStringAfterWords(); //product

	CustomTabsScoped([{
		tabGroup: 'product-colors-var',
		scopeElementSelect: '.square-card-item'
	}]); //top-nav js

	var closeOnMissClick;

	function toggleDropDownItem(targetSlideToggle) {
		document.body.removeEventListener('click', closeOnMissClick);
		this.classList.toggle('collapsed');
		$(targetSlideToggle).slideToggle(function () {
			//
			this.classList.toggle('visiable');
		});
		event.stopPropagation();

		if (this.classList.contains('collapsed')) {
			closeOnMissClick = closeTopNav.bind(undefined, targetSlideToggle, this);
			document.body.addEventListener('click', closeOnMissClick);
		} else {
			window.addEventListener('resize', removeInlineStyle, {
				passive: true
			});
		}
	}

	function closeTopNav(closestParent, toggleBtn) {
		if (!event.target.closest(closestParent) && window.matchMedia("(max-width: 768px)").matches) {
			$(toggleBtn).click();
			document.body.removeEventListener('click', closeOnMissClick);
		}
	}

	function customTabsToggle(slidesArr) {
		var _loop2 = function _loop2() {
			var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
					index = _Object$entries$_i[0],
					tab = _Object$entries$_i[1];

			$(tab['toggleBtn']).click(function () {
				for (var _i2 = 0, _Object$entries2 = Object.entries(slidesArr); _i2 < _Object$entries2.length; _i2++) {
					var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
							Subindex = _Object$entries2$_i[0],
							_tab2 = _Object$entries2$_i[1];

					if (index !== Subindex) {
						$(_tab2['toggleBtn']).removeClass('collapsed');
						$(_tab2['toggleTarget']).slideUp(function () {
							this.classList.remove('visiable');
						});
					}
				}

				toggleDropDownItem.call(this, tab['toggleTarget']);
			});
		};

		for (var _i = 0, _Object$entries = Object.entries(slidesArr); _i < _Object$entries.length; _i++) {
			_loop2();
		}
	}

	var customTabsArr = [{
		toggleBtn: '.top-nav__burger-cont',
		toggleTarget: '.top-nav__inline-catalog-block'
	}, {
		toggleBtn: '.top-nav__mobile-search-icon-cont',
		toggleTarget: '.top-nav__search-col'
	}];
	customTabsToggle(customTabsArr); //tiny fix

	function removeInlineStyle() {
		if (window.matchMedia("(min-width: 768px)").matches) {
			var _iterator7 = _createForOfIteratorHelper(customTabsArr),
					_step7;

			try {
				for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
					var tab = _step7.value;
					document.querySelector(tab['toggleTarget']).style = '';
				}
			} catch (err) {
				_iterator7.e(err);
			} finally {
				_iterator7.f();
			}

			window.removeEventListener('resize', removeInlineStyle, {
				passive: true
			});
		}
	}

	$('.top-nav__catalog-txt').click(function () {
		$('.top-nav__burger-cont').click();
	}); // sCatalog

	var clotherSlider = new Swiper('.clother-slider', {
		slidesPerView: 1,
		lazy: {
			loadPrevNext: true
		},
		//pagination
		pagination: {
			el: $(this).find('.clother-slider-pugin'),
			clickable: true
		}
	}); //product card js

	var breadSl = new Swiper('.breadcrumb-slider-js-prod-card03', {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		freeMode: true,
		freeModeMomentum: true,
		// spaceBetween: 30,
		watchOverflow: true
	}); //photo-galery silders

	var photoGaleryThumb = new Swiper('.slider-card-bl__foto-galery-thumb-slider', {
		breakpoints: {
			1: {
				//slidesPerView: 'auto',
				direction: 'horizontal',
				spaceBetween: 10
			},
			576: {
				//slidesPerView: 'auto',
				direction: 'vertical',
				spaceBetween: 10
			}
		},
		//loop: true,
		slidesPerView: 3,
		//nav
		navigation: {
			nextEl: '.thumb-swiper-next',
			prevEl: '.thumb-swiper-prev'
		},
		//on click js
		on: {
			click: function click() {
				photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				photoGaleryThumb.updateSlidesClasses();
				photoGalery.updateSlidesClasses();
			}
		}
	});
	var photoGalery = new Swiper('.slider-card-bl__foto-galery-big-img-slider', {
		thumbs: {
			swiper: photoGaleryThumb
		},
		lazy: {
			loadPrevNext: true
		},
		loop: true,
		on: {
			click: function click() {
				//photoGaleryThumb.slideTo(photoGaleryThumb.clickedIndex - 1, 700, false);
				photoGaleryThumb.updateSlidesClasses();
				photoGalery.updateSlidesClasses();
			}
		}
	}); //alt menu js

	$('.sCategory__burger-cont').click(function () {
		this.classList.toggle('collapsed');
		$('.sCategory__catalot-col .catalog-menu-cont').slideToggle(function () {
			this.classList.toggle('active');
		});
		event.stopPropagation();

		if (this.classList.contains('collapsed')) {
			//console.log('open');
			document.body.addEventListener('click', hideAltMenuOnMissCL);
		} else {
			//console.log('close');
			document.body.removeEventListener('click', hideAltMenuOnMissCL);
		}
	});

	function hideAltMenuOnMissCL() {
		if (!event.target.closest('.catalog-menu-cont')) {
			$('.sCategory__burger-cont').click();
			document.body.removeEventListener('click', hideAltMenuOnMissCL);
		}
	} //


	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}