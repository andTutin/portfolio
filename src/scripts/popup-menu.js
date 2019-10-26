;(function() {
    var hamburger = document.querySelector('.hamburger');
    var popupMenu = document.querySelector('.popup-menu');
    var popupMenuLink = document.querySelectorAll('.popup-menu__menu .menu__link');
    var close = document.querySelector('.close');
        
    hamburger.addEventListener('click', function(event) {
      event.preventDefault();
      hamburger.style.display = 'none';
      popupMenu.style.display = 'flex';
      close.addEventListener('click', function(event) {
        event.preventDefault();
          popupMenu.style.display = '';
          hamburger.style.display = '';
        });
      });

      for (var i = 0; i < popupMenuLink.length; i++) {
        popupMenuLink[i].addEventListener('click', function() {
            popupMenu.style.display = '';
            hamburger.style.display = '';
        });
      };

  })()