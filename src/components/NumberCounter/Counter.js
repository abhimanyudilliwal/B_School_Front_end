import React,{useEffect} from 'react'
import './counter.css';
import $ from 'jquery'

function Counter() {
 useEffect(() => {
    function inVisible(element) {
        //Checking if the element is
        //visible in the viewport
        var WindowTop = $(window).scrollTop();
        var WindowBottom = WindowTop + $(window).height();
        var ElementTop = element.offset().top;
        var ElementBottom = ElementTop + element.height();
        //animating the element if it is
        //visible in the viewport
        if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
          animate(element);
      }
      
      function animate(element) {
        //Animating the element if not animated before
        if (!element.hasClass('ms-animated')) {
          var maxval = element.data('max');
          var html = element.html();
          element.addClass("ms-animated");
          $({
            countNum: element.html()
          }).animate({
            countNum: maxval
          }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
              element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
              element.html(this.countNum + html);
            }
          });
        }
      
      }
      
      //When the document is ready
      $(function() {
        //This is triggered when the
        //user scrolls the page
        $(window).scroll(function() {
          //Checking if each items to animate are 
          //visible in the viewport
          $("h2[data-max]").each(function() {
            inVisible($(this));
          });
        })
      });
      
    }, [])
    return (
        <div class="container-fluid text-center">
  <h1>Some cool facts</h1>
  <div class="row">
    <div class="col-sm-3">
      <i class="fa fa-user"></i>
      <h2 data-max="50">+ Happy Customers</h2>
    </div>
    <div class="col-sm-3">
      <i class="fa fa-code"></i>
      <h2 data-max="25000">+ Lines of code</h2>
    </div>
    <div class="col-sm-3">
      <i class="fa fa-lock"></i>
      <h2 data-max="10">+ Projects</h2>
    </div>
    <div class="col-sm-3">
      <i class="fa fa-briefcase"></i>
      <h2 data-max="30" id="test">+ Developers</h2>
    </div>
  </div>
</div>
    )
}

export default Counter
