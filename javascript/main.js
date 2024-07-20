$(document).ready(function(){
    $('.menu').click(function(){
        $('nav').toggleClass('active');  // Adiciona ou remove a classe 'active' do <nav>
    });

    $('.carrosel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});
