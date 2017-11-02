  $(document).ready(function() {
      // if ($(window).width() < 1000) {
      //   // $('#search-details').hide();
      //   $('.search-service').on('click', function(e){
      //     $('.search-details').slideToggle();
      //     return false;
      //   });
      // }

    $('#nav .hamburger-menu i').on('click', function() {
      $('.nav-bar').addClass('hidden');
      $('.menu-items').toggleClass('hidden');
      $('.container, #footer').addClass('hidden');
    });

    $('#nav ul li, .menu-items i').click(function (e) {
      $('.menu-items').toggleClass('hidden');
      $('.nav-bar').removeClass('hidden');
      $('.container, #footer').removeClass('hidden');
    });

  });

   $(document).ready(function() {
    $('#fullpage').fullpage({
      anchors:['home', 'about', 'portfolio', 'contact', 'footer'],
      scrollOverflow: true,
      normalScrollElements: '.modal'
    });

    $('[data-toggle="tooltip"]').tooltip();

   });
