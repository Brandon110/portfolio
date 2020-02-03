jQuery(function ($) {
    // Scroll to section
    $('.scroll-link').click(function (e) {
        e.preventDefault();

        const section = $(this.hash);

        if (section.length) {
            const offset = section.offset().top - $('.menu').height();

            $('html, body').stop(true, false).animate({
                scrollTop: offset
            }, 210);

            // Close dropdown if visible
            if ($('#menu-nav').is(':visible')) {
                $('#menu-nav').slideUp(200);
            }

            return false;
        }
    });

    $(window).scroll(function () {
        const menuHeight = Math.round($('.menu').innerHeight() / 10) * 10;
        const windowScrollTop = $(window).scrollTop() + menuHeight;

        // Adds fixed class to header when top of window reaches bottom of <section class="home-section">
        if (windowScrollTop >= $('.home-section').position().top + $('.home-section').height()) {
            $('.menu').addClass('fixed');
        }
        else {
            $('.menu').removeClass('fixed');
        }

        // Adds active class to nav-menu links when top of window view reaches section
        $('section').each(function (i) {
            const link = $(`a[href='#${$(this).attr('id')}']`).parent(); // Select link by href with current sections id

            if (windowScrollTop >= $(this).position().top + $(this)[0].scrollHeight ||
                windowScrollTop < $(this).position().top) {
                link.removeClass('active');
            }
            else {
                link.not($('.nav-menu li.active')).addClass('active');
            }

        });
    });

    // Toggle mobile menu
    $('#toggle-nav-menu').click(function () {
        const navMenu = $('#menu-nav');

        if (!navMenu.is(':visible')) {
            navMenu.slideDown(200);
        }
        else {
            navMenu.slideUp(200);
        }
    });

    // Preload images
    function preload(imgs) {
        $(imgs).each(function () {
            $('<img/>').attr('src', this).appendTo('body').css('display', 'none');
        });
    }

    preload([
        './images/site/me.jpg',
        './images/site/saint-john-nb.jpg',
        './images/projects/blackwellcreations.png',
        './images/projects/portfolio.png',
        './images/projects/pubg-stat-tracker.png'
    ]);
});