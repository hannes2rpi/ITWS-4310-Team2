// from underscore.js
function _debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// run plugins
$(document).ready(function () {
    var win = $(window);
    var narrow = win.width() < 1080;

    // drop down menu
    $('.nav').navgoco({
        accordion:true,
        caretHtml: '<i class="material-icons">&#xE313;</i>', // down arrow
        onToggleAfter: function(e, isOpening) {
            if (isOpening) {
                // open submenu
                $('.material-icons', e.context).html('&#xE316;'); // up arrow
            }
            else {
                // close submenu and all children
                $('.material-icons', e.parent()).html('&#xE313;');
            }
        }
    });

    // initialize to correct caret
    [].slice.call($('.nav li.open > a > span > i')).forEach(function(icon) {
        $(icon).text('keyboard_arrow_up');
    });

    // adjust window size
    var resizeNav = _debounce(function() {
        var offset = $('.main').offset().top;

        var y = $('.nav').offset().top + $('.nav').height();

        $('.main').css('min-height',  y - offset );
    }, 400);
    resizeNav();
    $('.nav').bind('DOMSubtreeModified', resizeNav);

    // sliders
    $('.galleria').bxSlider({
        infiniteLoop:false,
        hideControlOnEnd:true,
        onSliderLoad: function() {
            lightbox.init();
        }
    });

    $('.video-slider').bxSlider({
        video:true,
        pagerCustom:'.video-thumbs'
    });
    $('.thumb-slider').bxSlider({
        minSlides:2,
        maxSlides:3,
        slideWidth:300,
        slideMargin:0,
        infiniteLoop:false,
        hideControlOnEnd:true
    });


    // map
    $('.map-pane-toggle').on('click', function() {
        $(this).toggleClass('visible');
        $('.map-pane').toggleClass('visible');
    })

    var resizeMap = function() {
        $('.map-pane-toggle').toggleClass('visible', win.width() > 780)
        $('.map-pane').toggleClass('visible', win.width() > 780)
    }
    resizeMap();

    // taxonomy
    $('.narrative-taxonomy .taxonomy-dropdown').on('click', function() {
        var parent = $(this).parent().parent();
        var bool = parent.hasClass('active');
        $('.narrative-taxonomy .active').toggleClass('active',false);
        parent.toggleClass('active', !bool);
    });

    // sidebar
    toggleSidebar = function(show) {
        $('.menu').toggleClass('slide-left', show);
        if (show) { 
            $('.fixed-backdrop-overlay').fadeIn();
            document.body.style.overflow = 'hidden';
        }
        else {
            $('.fixed-backdrop-overlay').fadeOut();
            document.body.style.overflow = 'visible';
        }
    }
    $('#nav-dropdown-button').on('click', function() {
        toggleSidebar(true);
    })
    // slide in nav
    var slideinNav = function() {
        if (win.width() >= 1080) {
            if (narrow) {
                toggleSidebar(false);
                $('.nav').navgoco('toggle', false);
                narrow = false;
             }
        }
        else {
            if (!narrow) {
                $('.nav').navgoco('toggle', false);
                narrow = true;
            }
        }
    }
    $('#close-nav').on('click', function() {
        toggleSidebar(false);
    });
    slideinNav();
    $('.fixed-backdrop-overlay').on('click', function() {
        toggleSidebar(false);
    })

    // resize listener
    var debouncedResize = _debounce(function() {
        resizeMap();
        slideinNav();
    }, 200);
    win.on('resize', debouncedResize);

});

