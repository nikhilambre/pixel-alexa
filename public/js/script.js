/*
 *      Theme Pixel Alexa
 *      Designed by PixelCoders
 *      Theme Pixel Alexa - Version 1.1 (2014)
 *      jQuery pluguns for page structure
 *_______________________________________________________________________*/



    /*------------------------------------------------------------*/
    /*  Page preloader 
    /*------------------------------------------------------------*/

    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    });


    $(document).ready(function() {

        /*------------------------------------------------------------*/
        /*  To auto run header scroll event
        /*------------------------------------------------------------*/
        setInterval(function () {

            $('.header').waypoint(function(){
                $('span.next').click();
            },{offset:'100%'});             
            
        }, 7000);


        /*------------------------------------------------------------*/
        /*  Bootstrap carosal 
        /*------------------------------------------------------------*/
        $('#carousel-example-generic').carousel({
            interval: 4000
        })


        /*------------------------------------------------------------*/
        /*  Full width tabs plugin
        /*------------------------------------------------------------*/
        new CBPFWTabs( document.getElementById( 'tabs' ) );
    });


    (function() {


    /*------------------------------------------------------------*/
    /*  Styleswitcher theme selection
    /*------------------------------------------------------------*/           

     $('[data-theme]').on('click', function () {
         $("#lnktheme").attr('href', '../public/stylesheet/css/color_'+ $(this).data('theme') +'.css');
         $("#ielnktheme").attr('href', '../public/stylesheet/css/iecolor_'+ $(this).data('theme') +'.css');
     }); 


    /*------------------------------------------------------------*/
    /*  Styleswitch bar show/hide
    /*------------------------------------------------------------*/

    $("#style-show").click(function () {
        $('.style-switch').toggleClass("show-themes");
    });        


    /*------------------------------------------------------------*/
    /*  Navigation smooths scroll effect
    /*------------------------------------------------------------*/
    $('.link-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    /*------------------------------------------------------------*/
    /*  Page preloader 
    /*------------------------------------------------------------*/
    new BoxesFx( document.getElementById( 'boxgallery' ) ); 



    /*------------------------------------------------------------*/
    /*  Navigation smooths scroll effect
    /*------------------------------------------------------------*/ 

    // Jave script for Animation og header on scroll down
    // detect if IE : from http://stackoverflow.com/a/16657946      
    var ie = (function(){
        var undef,rv = -1; // Return value assumes failure.
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');

        if (msie > 0) {
            // IE 10 or older => return version number
            rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        } else if (trident > 0) {
            // IE 11 (or newer) => return version number
            var rvNum = ua.indexOf('rv:');
            rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
        }

        return ((rv > -1) ? rv : undef);
    }());


    // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179                  
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = [32, 37, 38, 39, 40], wheelIter = 0;

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
        e.preventDefault();
        e.returnValue = false;  
    }

    function keydown(e) {
        for (var i = keys.length; i--;) {
            if (e.keyCode === keys[i]) {
                preventDefault(e);
                return;
            }
        }
    }

    function touchmove(e) {
        preventDefault(e);
    }

    function wheel(e) {
        // for IE 
        //if( ie ) {
            //preventDefault(e);
        //}
    }

    function disable_scroll() {
        window.onmousewheel = document.onmousewheel = wheel;
        document.onkeydown = keydown;
        document.body.ontouchmove = touchmove;
    }

    function enable_scroll() {
        window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;  
    }

    var docElem = window.document.documentElement,
        scrollVal,
        isRevealed, 
        noscroll, 
        isAnimating,
        container = document.getElementById( 'container' ),
        trigger = container.querySelector( 'button.trigger' );

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    
    function scrollPage() {
        scrollVal = scrollY();
        
        if( noscroll && !ie ) {
            if( scrollVal < 0 ) return false;
            // keep it that way
            window.scrollTo( 0, 0 );
        }

        if( classie.has( container, 'notrans' ) ) {
            classie.remove( container, 'notrans' );
            return false;
        }

        if( isAnimating ) {
            return false;
        }
        
        if( scrollVal <= 0 && isRevealed ) {
            toggle(0);
        }
        else if( scrollVal > 0 && !isRevealed ){
            toggle(1);
        }
    }

    function toggle( reveal ) {
        isAnimating = true;
        
        if( reveal ) {
            classie.add( container, 'modify' );
        }
        else {
            noscroll = true;
            disable_scroll();
            classie.remove( container, 'modify' );
        }

        // simulating the end of the transition:
        setTimeout( function() {
            isRevealed = !isRevealed;
            isAnimating = false;
            if( reveal ) {
                noscroll = false;
                enable_scroll();
            }
        }, 1200 );
    }

    // refreshing the page...
    var pageScroll = scrollY();
    noscroll = pageScroll === 0;
    
    disable_scroll();
    
    if( pageScroll ) {
        isRevealed = true;
        classie.add( container, 'notrans' );
        classie.add( container, 'modify' );
    }
    
    window.addEventListener( 'scroll', scrollPage );
    trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );
    
})();
