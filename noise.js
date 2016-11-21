// This line ( $(document).ready( function() { ) waits for the HTML document to be
// completely loaded by the browser, then runs the function. This is important because
// if you start manipulating the DOM before it's finished loading, all sorts of
// crazy things might happen. You can do setup work outside of $(document).ready,
//  but anything that touches the DOM needs to be in (or called by) that callback.

$(document).ready( function() {
  // var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  $('.instrument').on('click', 'button', function(event) {
    stopPlayback($(this).html());
    //Play the clicked note
    document.getElementById($(this).html() + "Audio").play();
  });

  $('body').keydown( function(event) {
    stopPlayback(event.key);
    //Play the note of the pressed key
    document.getElementById(event.key + "Audio").play();
   });

  //  $('.instrument').append('<button class="song">twinkleTwinkle</button>');

});

var stopPlayback = function(note) {
  // This will stop the current playback so you dont have to wait until it's done to hit it again
  var mediaElement = document.getElementById(note + "Audio");
  mediaElement.removeAttribute("src");
  mediaElement.load();
}

var twinkleTwinkle = 'ccggaagffeeddcggffeedggffeedccggaagffeeddc';
