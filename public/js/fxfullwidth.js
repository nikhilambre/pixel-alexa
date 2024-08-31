(function() {
	var support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		effectSel = document.getElementById( 'fxselect' ),
		component = document.getElementById( 'component' ),
		items = component.querySelector( 'ul.itemwrap' ).children,
		current = 0,
		itemsCount = items.length,
		nav = component.querySelector( 'nav' ),
		navNext = nav.querySelector( '.forward' ),
		navPrev = nav.querySelector( '.before' ),
		isAnimating = false;

	function init() {

		changeEffect();
		navNext.addEventListener( 'click', function( ev ) { ev.preventDefault(); navigate( 'forward' ); } );
		navPrev.addEventListener( 'click', function( ev ) { ev.preventDefault(); navigate( 'before' ); } );
		changeEffect();
	}

	function hideNav() {
		nav.style.display = 'block';
	}

	function showNav() {
		nav.style.display = 'block';
	}

	function changeEffect() {
		component.className = component.className.replace(/\bfx.*?\b/g, '');
		if( 1 ) {
			classie.addClass( component, 'fxFortuneWheel' );
			showNav();
		}
		else {
			hideNav();
		}
	}

	function navigate( dir ) {
		if( isAnimating || !effectSel.selectedIndex ) return false;
		isAnimating = true;
		var cntAnims = 0;


		var currentItem = items[ current ];

		if( dir === 'forward' ) {
			current = current < itemsCount - 1 ? current + 1 : 0;
		}
		else if( dir === 'before' ) {
			current = current > 0 ? current - 1 : itemsCount - 1;
		}

		var nextItem = items[ current ];

		var onEndAnimationCurrentItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
			classie.removeClass( this, 'current' );
			classie.removeClass( this, dir === 'forward' ? 'navOutNext' : 'navOutPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}

		var onEndAnimationNextItem = function() {
			this.removeEventListener( animEndEventName, onEndAnimationNextItem );
			classie.addClass( this, 'current' );
			classie.removeClass( this, dir === 'forward' ? 'navInNext' : 'navInPrev' );
			++cntAnims;
			if( cntAnims === 2 ) {
				isAnimating = false;
			}
		}

		if( support.animations ) {
			currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
			nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
		}
		else {
			onEndAnimationCurrentItem();
			onEndAnimationNextItem();
		}

		classie.addClass( currentItem, dir === 'forward' ? 'navOutNext' : 'navOutPrev' );
		classie.addClass( nextItem, dir === 'forward' ? 'navInNext' : 'navInPrev' );
	}

	init();
})();