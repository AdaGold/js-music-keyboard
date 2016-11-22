$(document).ready( function() {

  $('.note').on('click', function() {
    var notePicked = $(this).html();
    $('#' + notePicked + 'Audio')[0].play();
  })


  $('body').keydown(function(event) {

    $('#' + event.key + 'Audio')[0].load();
    $('#' + event.key + 'Audio')[0].play();
  })
});
