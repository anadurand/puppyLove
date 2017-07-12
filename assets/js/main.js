var lastScrollTop = 0;
//cambiar el estilo del header cuando avanza el scroll
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > 600){
     $('.header').addClass("header__change");
     $('.logo').addClass("logo__change");

   }
   if(currentScroll<=600){
     $('.header').removeClass("header__change");
     $('.logo').removeClass("logo__change");

   }
   lastScrollTop = currentScroll;
}, false);


$(document).ready(function(){
      $('.parallax').parallax();

      $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'right'
      });
      $('.close').on('click',(e)=>{
        $('#slide-out').sideNav('hide');
      });


});
