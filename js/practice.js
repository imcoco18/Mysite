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