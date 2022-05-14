var Links = {
  aTagColor: function(color1) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color1);
  }
}
var Set = {
  backgroundColor: function(color2) {
    // document.querySelector('body').style.backgroundColor = color2;
    $('body').css('backgroundColor', color2);
  },
  bodyColor: function(color3) {
    // document.querySelector('body').style.color = color3;
    $('body').css('color', color3);
  },
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Set.backgroundColor('black');
    Set.bodyColor('white');
    self.value = 'day';
    Links.aTagColor('red');
  } else {
    Set.backgroundColor('white');
    Set.bodyColor('black');
    self.value = 'night';
    Links.aTagColor('blue');
  }
}
