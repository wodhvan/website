$(function(){


/*FIXED HEADER*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize", function(){
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    });


/*SMOOTH SCROLL*/

$("[data-scroll]").on("click", function(){
    event.preventDefault();

    let elementID = $(this).data('scroll');

    let elementOfSet = $(elementID).offset().top;

    $("html, body").animate({
        scrollTop:elementOfSet - 75
    }, 800);

});

    /*REVIEWS https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");
   slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
});

});
