app.directive("bkImg", function(){
  return function(scope, element, attrs){
      attrs.$observe('bkImg',function(value){
          element.css({
              "background-image":"url("+value+")"
          })
      });
  }
});