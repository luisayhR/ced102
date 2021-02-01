    //觸發function
  var controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      triggerElement : '#trigger02',
      offset: 500,
  }).on('enter', function(){
      console.log('enter 進入');
      $('.trainingZone').css('background-color' , 'grey')
  }).on('leave', function(){
      console.log('leave 離開');
      $('.trainingZone').css('background-color' , 'blue')
  })
  .addIndicators().addTo(controller);