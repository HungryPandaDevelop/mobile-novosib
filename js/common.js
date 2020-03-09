$(document).ready(function () {
  console.log("test");
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
});