  $(document).ready(function() {
    $(".menu-toggle").on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass("on");
      $('.menu-section').toggleClass("on");
      $("nav ul").toggleClass('hidden');
    });
    $(".menu-section nav ul li a").on('click', function(e) {
        $('nav ul').toggleClass('hidden');
        $('.menu-section').toggleClass('on');
        $('.menu-toggle').toggleClass('on');
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
