$(document).ready(function () {
  var objWrap = $(".main-slider");
  var objEl = $(".main-item");

  var stopFlag = 1;

  var slider = {
    objEl: $(".main-item"),
    count: 0,
    maxSize: objEl.length - 1,
    timeAnimation: 750,
    movementFlag: 1,
    increaseCount: function () {
      if (this.maxSize > this.count) {
        this.count++;
      } else {
        this.count = 0;
      }
    },
    decreaseCount: function () {
      if (this.count > 0) {
        this.count--;
      } else {
        this.count = this.maxSize;
      }
    },
    movementNext: function () {

      if (stopFlag == 1) {
        this.increaseCount();
        this.movementFlag = 1;
        this.changeSlider();

        objWrap.removeClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }
    },
    movementPrev: function () {

      if (stopFlag == 1) {
        this.decreaseCount();
        this.movementFlag = 0;
        this.changeSlider();

        objWrap.addClass("move-right");

        setTimeout(function () {
          stopFlag = 1;
        }, 750);
      }

    },
    changeSlider: function () {

      stopFlag = 0;
      $(".main-item.active").addClass("active-prev");

      objEl.removeClass("active").eq(this.count).addClass("active");

      clearTimeout(removeActive);

      var removeActive = setTimeout(function () {

        objEl.removeClass("active-prev");

        console.log(stopFlag)
      }, this.timeAnimation);
    }
  }



  //slider.movementNext();
  var windowWidth = $(window).width();
  $(".img-item,.main-topic").width(windowWidth);
  $(".main-topic").width(windowWidth);


  $(".arr-next").on("click", function () {
    slider.movementNext();
  });
  $(".arr-prev").on("click", function () {
    slider.movementPrev();
  });
});