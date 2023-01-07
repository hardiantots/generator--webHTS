const header_button = document.querySelector('.header__button');
const head_mobile = document.querySelector('.header__mobile');
const head_title = document.querySelector('.header__title');
const nav_mobile = document.querySelector('.mobile__navbar');

header_button.addEventListener('click', () => {
    header_button.classList.toggle('is-active');
    head_mobile.classList.toggle('is-active');
    head_title.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active'); 
});

$(".mobile__navbar ul li").click(function(){
  const id = $(this).data('id');
  if(!$(this).hasClass('active')){
    $(".mobile__navbar ul li").removeClass('active');
    $(".mobile__navbar").removeClass('is-active');
    $(".header__mobile").removeClass('is-active');
    $(".header__title").removeClass('is-active');
    $(".header__button").removeClass('is-active');
    $(this).addClass('active');
    
    if($(".tabcontent").hide()){
      $(`[data-content=${"1"}]`).removeClass('active');
      $(`[data-content=${id}]`).fadeIn();
    }
    }

    if($(this).hasClass('active')){
      $(".mobile__navbar ul li").removeClass('active');
      $(".mobile__navbar").removeClass('is-active');
      $(".header__mobile").removeClass('is-active');
      $(".header__title").removeClass('is-active');
      $(".header__button").removeClass('is-active');
      }
});