const swiperSec4 = new Swiper('.section-4_slider', {
    slidesPerView: "1",
    spaceBetween: 2000,  
    navigation: {
      nextEl: '#section-4_swiper-next',
      prevEl: '#section-4_swiper-prev',
    },
    pagination: {
      el: "#section-4_swiper-pagination",
    },
  });
  const swiperSec5 = new Swiper('#section-5_slider', {
    slidesPerView: "1",
    spaceBetween: 2000,  
    navigation: {
      nextEl: '#section-5_swiper-next',
      prevEl: '#section-5_swiper-prev',
    },
    pagination: {
      el: "#section-5_swiper-pagination",
    },
  });

$(function() {

  $(".section-7_accordion_item_question").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".section-7_accordion_item_content").slideUp(400);
      $(".section-7_accordion_item_question").removeClass("accordion-active");
      $('.section-7_accordion_item_question_trigger').removeClass('accordion__rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.section-7_accordion_item_question_trigger',this).toggleClass('accordion__rotate');
  });
  
});
$(function() {

  $(".section-8_map-container").on("click", function() {
    $(".section-8_map-container").toggleClass("section-8_map-container-2");
    $(".section-8_map-container").removeClass("section-8_map-container");
    console.log("hi");
  });
  
});