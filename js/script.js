/* Author: Frank Stallone III

*/


// make code pretty
$(function () {
	prettyPrint();
});


$('.subnav').scrollspy({
  offset: 200
});



// fix sub nav on scroll
var $win = $(window)
  , $nav = $('.subnav')
  , navTop = $('.subnav').length && $('.subnav').offset().top - 40
  , isFixed = 0

processScroll()

$win.on('scroll', processScroll)

function processScroll() {
  var i, scrollTop = $win.scrollTop()
  if (scrollTop >= navTop && !isFixed) {
    isFixed = 1
    $nav.addClass('subnav-fixed')
  } else if (scrollTop <= navTop && isFixed) {
    isFixed = 0
    $nav.removeClass('subnav-fixed')
  }
}

// Twitter Bootstrap Alert 
$(".alert").alert();

$('[data-spy="scroll"]').each(function () {
  var $spy = $('body').scrollspy('refresh')
});