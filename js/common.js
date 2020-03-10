$(document).ready(function () {
  //console.log("test");
  var countInput = 0;
  var goodsMass = ["code", "name", "count"];
  $(".cell-content").on("click", ".add-goods", function (e) {
    e.preventDefault();
    var cloneObj = $(this).parents(".cell-inner").clone();
    countInput++;

    for (var i = 0; i < goodsMass.length; i++) {
      cloneObj.find(".goods-" + goodsMass[i]).attr("name", "goods-" + goodsMass[i] + "-" + countInput);
    }
    $(this).parents(".cell-inner").after(cloneObj);
    $(this).remove();
  });
  var specialCheckbox = $(".special-checkbox .sc-item");
  specialCheckbox.on("click", function () {
    specialCheckbox.removeClass("active").eq($(this).index()).addClass("active");
  });


  // -----------------
  function createChart(nameCanvas, enterValue, bottomValue) {
    var enterValue = enterValue;

    var bottomValue = bottomValue;

    var enterValueProcent = [];

    var enterValuePosition = [];

    var widthBox = $(nameCanvas).width();
    var heightBox = $(nameCanvas).height();

    var widthGraf = $(nameCanvas).width() - 60;
    var heightGraf = $(nameCanvas).height() - 60;

    var stepWidth = ((widthGraf) / (enterValue.length - 1));

    var stepHeight = (heightGraf / (enterValue.length - 1));

    var enterValueMaximum = 0;

    var canvas = $(nameCanvas)[0];

    var ctx = canvas.getContext('2d');

    canvas.width = widthBox;
    canvas.height = heightBox;

    ctx.beginPath();
    ctx.strokeStyle = "#00b7f4";


    enterValue.forEach(function (item) {
      if (enterValueMaximum < item) {
        enterValueMaximum = item;
      }
    });

    for (var i = 0; i < enterValue.length; i++) {

      enterValueProcent[i] = (Math.round((enterValue[i] * 100) / enterValueMaximum) - 100) * -1;

      enterValuePosition[i] = (heightGraf / 100) * enterValueProcent[i];

      ctx.lineTo((stepWidth * i) + 30, enterValuePosition[i] + 30);


    }

    ctx.stroke();

    enterValue.forEach(function (item, i) {
      ctx.beginPath();
      ctx.strokeStyle = "#eee";
      ctx.lineTo(30, (stepHeight * i) + 30);
      ctx.lineTo(widthGraf + 30, (stepHeight * i) + 30);
      ctx.stroke();
      ctx.textAlign = "center";
      ctx.font = "16px Arial";
      ctx.fillText(bottomValue[i], (stepWidth * i) + 30, heightBox);
    });

    enterValue.forEach(function (item, i) {
      ctx.textAlign = "center";
      ctx.font = "16px Arial";

      ctx.fillText(item, (stepWidth * i) + 30, enterValuePosition[i] + 15);
    });
  }



  $(".graf-js").each(function (index) {
    var grafIndex = index + 1;
    createChart(".canvas-" + grafIndex, $(".canvas-" + grafIndex).data("value"), $(".canvas-" + grafIndex).data("sign"));
  });
});