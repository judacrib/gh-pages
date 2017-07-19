$(document).ready(function () {
  var section = '';
  var sectionPath = '../html/about.html';
  var sectionId = '';

  // initial page
  addSection(sectionPath);

  // nav click event to add html to section
  $('li a').click(function (event) {
    section = $(this).attr('id');
    sectionPath = "../html/" + section + ".html";
    sectionId = $('section div').attr('id');

    if ((section + "Sect") !== sectionId) {
      addSection(sectionPath);
    }
  });
});


/* Adds html from path to section tags */
function addSection(path) {
  $.get(path, function (data) {
    $('section').html(data);
  });
}
