//header-page-link
$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;

  $('html,body').animate({
    'scrollTop':position
  },500);
});

//page-top
$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function(){
    $('body,html').animate({
      'scrollTop':0
    },500);
    return false;
  });
});

//portfolio modal
$('.portfolio-contents a').click(function(){
  var imgSrc = $(this).children().attr('src');
  $('.big_img').children().attr('src', imgSrc);
  $('.modal').fadeIn();
  $('body, html').css('overflow-y','hidden');
  $('#page_top').css('display','none');
  return false
});
$('.close_btn').click(function() {
  $('.modal').fadeOut();
  $('body, html').css('overflow-y', 'visible');
  return false
});