$(document).ready(function () {
  // init Isotope
  let $grid = $(".projects_item_container").isotope({
    // options
  });
  // filter items on button click
  $(".projects_btn").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  $(".projects_btn button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});
