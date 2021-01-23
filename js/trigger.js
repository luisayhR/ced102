    //觸發function
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement : '#trigger02',
      duration: '100%'
  }).on('enter', function(){
      console.log('enter 進入');
      $('.trainingZone').css('background-color' , 'red')
  }).on('leave', function(){
      console.log('leave 離開');
      $('.trainingZone').css('background-color' , 'black')
  })
  .addIndicators().addTo(controller);