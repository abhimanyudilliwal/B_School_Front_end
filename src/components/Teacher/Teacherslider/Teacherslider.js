import React,{useEffect} from 'react'
import './slider.css'
import $ from 'jquery'

function Teacherslider(props) {
 useEffect(() => {
     
function updateSliderArrowsStatus(
    cardsContainer,
    containerWidth,
    cardCount,
    cardWidth
  ) {
    if (
      $(cardsContainer).scrollLeft() + containerWidth <
      cardCount * cardWidth + 15
    ) {
      $("#slide-right-container").addClass("active");
    } else {
      $("#slide-right-container").removeClass("active");
    }
    if ($(cardsContainer).scrollLeft() > 0) {
      $("#slide-left-container").addClass("active");
    } else {
      $("#slide-left-container").removeClass("active");
    }
  }
  $(function() {

    let div = $("#cards-container");
    let cardCount = $(div)
      .find(".cards")
      .children(".card").length;
    let speed = 1000;
    let containerWidth = $(".container").width();
    let cardWidth = 250;
  
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  
 
    $("#slide-right-container").click(function(e) {
      if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
        $(div).animate(
          {
            scrollLeft: $(div).scrollLeft() + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
    $("#slide-left-container").click(function(e) {
      if ($(div).scrollLeft() + containerWidth > containerWidth) {
        $(div).animate(
          {
            scrollLeft: "-=" + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
  
    // If resize action ocurred then update the container width value
    $(window).resize(function() {
      try {
        containerWidth = $("#cards-container").width();
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      } catch (error) {
        console.log(
          `Error occured while trying to get updated slider container width: 
              ${error}`
        );
      }
    });
  });
  
   }, [])
    return (
        <div>
            <div class="container">
    <div id="slide-left-container">
      <div class="slide-left">
      </div>
    </div>
    <div id="cards-container">
      <div class="cards">
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Animals" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Animals</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Nature" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Nature</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Architecture" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Architecture</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Technology" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Technology</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="People" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>People</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Animals" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Animals</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Nature" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Nature</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Architecture" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Architecture</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="Technology" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>Technology</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src="http://via.placeholder.com/220x220" alt="People" style={{width:"100%"}} />
          <div class="container">
            <h4>
              <b>People</b>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div id="slide-right-container">
      <div class="slide-right">
      </div>
    </div>

  </div>
        </div>
    )
}

export default Teacherslider
