  $(document).ready(function() {
    $('#nav .hamburger-menu i').on('click', function() {
      $('.menu-items').toggleClass('hidden');
      $('body').toggleClass('nav-active');
    });

    $('#nav ul li').click(function (e) {
      $('.menu-items').toggleClass('hidden');
      $('body').toggleClass('nav-active');
    });
  });