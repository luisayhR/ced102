$(document).ready(function () {
  let divWidth = $('#sliderBoard').width();//抓寬度
  let imgCount = $('#mSlider li').length;//抓li有3個
  // alert(imgCount);

  //所以讓contentButton產生三個
  for(let i = 0; i < imgCount; i++ ){
    $('#contentButton').append('<li></li>');
  }
  $('#contentButton li:nth-child(1)').addClass('clickMe');

  $('#mSlider').width(divWidth * imgCount);//ul的寬度
  $('#mSlider li').width(divWidth);//li的寬度


  $('#contentButton li').click(function(){
    //抓到在按哪個ul
    index = $(this).index();

    $('#mSlider').animate({
      left: divWidth * index * -1, //每次往左邊(-1)推一個div的寬
    });
    
    $(this).addClass('clickMe');
    $('#contentButton li').not(this).removeClass('clickMe');
  });
  //分辨會因為resize而變動的因素(:3-:10的都不會變)




});