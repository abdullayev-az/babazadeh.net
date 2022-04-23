window.onload=function(){
  document.getElementById('autoplay').play();
}

var headersToAnimate = [" Full Stack Developerəm.", "im güclü bir team'im var","lə işləyin, razı qalın!"];
var startReversAnimationAfter = 500; //ms

function reverseAnimation(headerIndex) {
  var i = headersToAnimate[headerIndex].length - 1, delay = 0;
  for (; i >= 0; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("chngtext").innerHTML = \'' + string + '\';', 100 * delay);
  }

  setTimeout(function () { animateHeaders(headerIndex + 1) }, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex) {
  var i = 0;
  if (headerIndex == headersToAnimate.length) {
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("chngtext").innerHTML += \'' + string + '\';', 100 * i);
  }

  setTimeout(function () { reverseAnimation(headerIndex) }, 100 * i + startReversAnimationAfter);
}

animateHeaders(0)

//For PC

$('#open').click(function () {
  $('#close').css('display', 'inline-flex');
  $('#open').css('display', 'none');
  $('.nav-ul').css({ 'display': 'inline-flex', 'flex-direction': 'column' });
  $('.navbar-nav').css({ 'width': '300px' });
  $('.second').css({ 'margin-left': '100px' });
  $('.second').css({ '-webkit-filter': 'blur(5px)' });
  $('.text-h5').css({ 'opacity': '0' });
  $('#one1').css({ 'width': '30px', 'transform': 'rotate(45deg)', 'top': '5px' });
  $('#two1').css({ 'opacity': '0', 'display': 'none' });
  $('#three1').css({ 'width': '30px', 'transform': 'rotate(-45deg)' });
  $('.home').css({ 'transform': 'translateX(0)', 'opacity': '1' });
  $('.port').css({ 'transform': 'translateX(0)', 'opacity': '1' });
  $('.his').css({ 'transform': 'translateX(0)', 'opacity': '1' });
  $('.blog').css({ 'transform': 'translateX(0)', 'opacity': '1' });
  $('.cont').css({ 'transform': 'translateX(0)', 'opacity': '1' });
});

$('#close').click(function () {
  $('#close').css('display', 'none');
  $('#open').css('display', 'inline-flex');
  $('.navbar-nav').css({ 'width': '80px' });
  $('.second').css({ 'margin-left': '290px  ' });
  $('.second').css({ '-webkit-filter': 'blur(0)' });
  $('#one1').css({ 'width': '30px', 'transform': 'rotate(0deg)', 'top': '0' });
  $('#two1').css({ 'opacity': '1', 'display': 'block' });
  $('#three1').css({ 'width': '10px', 'transform': 'rotate(0deg)' });
  $('.text-h5').css({ 'opacity': '1' });
  $('.home').css({ 'transform': 'translateX(80px)', 'opacity': '0' });
  $('.port').css({ 'transform': 'translateX(70px)', 'opacity': '0' });
  $('.his').css({ 'transform': 'translateX(60px)', 'opacity': '0' });
  $('.blog').css({ 'transform': 'translateX(50px)', 'opacity': '0' });
  $('.cont').css({ 'transform': 'translateX(40px)', 'opacity': '0' });
});

//For Mobile

 $('.profile').click(function(){
   $('#first').css({'display':'block','transform':'translateX(0)'})
   $('.empty').html('<button id="closely" style="background-color:transparent;color:white;border:none;font-size:25px;"><i class="fal fa-window-close"></i></button>')
   $('.empty').css({'position':'fixed','right':'10px','top':'10px'})   
   $('.navbar').hide();
});
$('.empty').click(function(){
  $('.first').css({'transform':'translateX(-290px)'});
  $('.navbar').show();
});


$('.navbar').click(function(){
  $('.mobile-nav').css({'width':'300px'});
  $('.home1').css({'transform':'translateX(0)','opacity':'1'});
  $('.port1').css({'transform':'translateX(0)','opacity':'1'});
  $('.his1').css({'transform':'translateX(0)','opacity':'1'});
  $('.blog1').css({'transform':'translateX(0)','opacity':'1'});
  $('.cont1').css({'transform':'translateX(0)','opacity':'1'});
})
$('#xclose').click(function(){
  $('.mobile-nav').css({'width':'0px'});
  $('.home1').css({'transform':'translateX(150px)','opacity':'1'});
  $('.port1').css({'transform':'translateX(150px)','opacity':'1'});
  $('.his1').css({'transform':'translateX(150px)','opacity':'1'});
  $('.blog1').css({'transform':'translateX(150px)','opacity':'1'});
  $('.cont1').css({'transform':'translateX(150px)','opacity':'1'});
});

$('.team-slider').owlCarousel({
  loop: true,            
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 450,
  margin: 20,
  responsive: {
      0: {
          items: 1
      },
      576: {
          items: 2
      },
      991: {
          items: 2
      },
      1200: {
          items: 3
      },
      1920: {
          items: 3
      }
  }
});


