// This line ( $(document).ready( function() { ) waits for the HTML document to be
// completely loaded by the browser, then runs the function. This is important because
// if you start manipulating the DOM before it's finished loading, all sorts of
// crazy things might happen. You can do setup work outside of $(document).ready,
//  but anything that touches the DOM needs to be in (or called by) that callback.

var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

var songs = ['twinkleTwinkle', 'littleLamb'];
var twinkleTwinkle = 'ccggaagxffeeddcxggffeedxggffeedxccggaagxffeeddcx'; //The 'x' essentially makes the note before it a half note instead of a quarter note
var littleLamb = 'edcdeeexdddxeggxedcdeeeeddedcx';
var lullaby = 'eegxxeegxxegbxbxaaxgxdefxdxdefxdxdfbagxbxcxxbxbxafgxecfxgfexdxcx';
var yankeeDoodle = 'ccdecedcccdecxcxccdefedcbgabbxbx';
var rowBoat = 'dxdxdefxfefgaxxbbaaggffagfedx';
var oldMac = 'eeecddcxeeddcxgeeecddcxeeddcx';
var sunshine = 'ccdexexedecxcxcdefxaxagfexcdefxaxagfexcxcdexfdxdecx';
var frere = 'cdeccdecefgxefgxgagfexcxgagfexcxcxgxcxxcxgxcx';
var spider = 'gcccdexeedcdecxxexexfgxgxfefgexxcxcxdexexdcdecxggxcccdexeedcdec';
var notesInSong = '';


$(document).ready( function() {

  $('.instrument').on('click', 'button', function(event) {
    if (notes.includes($(this).html())) {
      stopPlayback($(this).html());
      //Play the clicked note
      document.getElementById($(this).html() + "Audio").play();

      // Display the most recently played note
      $( ".notesPlayed" ).html( $(this).html() );
      ////// THis is a poorly understood Googled trick (that i had to play around with/modify) to reload a css animation for with jquery: https://css-tricks.com/restart-css-animation/
        var el = $( ".notesPlayed" ).html( $(this).html() );
        newone = el.clone(true);
        el.before(newone);
        $(".notesPlayed" + ":last").remove();
      //////////////////////////////////////////////////////////////////
    }
    // if you click on a song...
    else if ($(this).html() == '🌟') {
      notesInSong = Array.from(twinkleTwinkle);
      playSong(); //I was passing notesInSong, but it's a global variable so I dont have to
    }
    else if ($(this).html() == '🐏') {
      notesInSong = Array.from(littleLamb);
      playSong();
    }
    else if ($(this).html() == '💤') {
      notesInSong = Array.from(lullaby);
      playSong();
    }
    // else if ($(this).html() == '🇺🇸') {
    //   notesInSong = Array.from(yankeeDoodle);
    //   playSong();
    // }
    // else if ($(this).html() == '🚣') {
    //   notesInSong = Array.from(rowBoat);
    //   playSong();
    // }
    else if ($(this).html() == '🐖') {
      notesInSong = Array.from(oldMac);
      playSong();
    }
    else if ($(this).html() == '🌦') {
      notesInSong = Array.from(sunshine);
      playSong();
    }
    else if ($(this).html() == '🇫🇷') {
      notesInSong = Array.from(frere);
      playSong();
    }
    else if ($(this).html() == '🕷') {
      notesInSong = Array.from(spider);
      playSong();
    }
    // console.log($(this));
    // console.log($(this)[0].innerHTML);
    // Array.from(word);
  });

  $('body').keydown( function(event) {
    if (notes.includes(event.key)) { //So it doesn't error if you hit a key that is not a note
      stopPlayback(event.key);
      //Play the note of the pressed key
      document.getElementById(event.key + "Audio").play();

      // Display the most recently played note
      $( ".notesPlayed" ).html( event.key); //so that it doesn't pring the x's
      ////// THis is a barely understood Googled trick (that i had to play around with/modify) to reload a css animation for with jquery: https://css-tricks.com/restart-css-animation/
      var el = $( ".notesPlayed" ).html( event.key );
      newone = el.clone(true);
      el.before(newone);
      $(".notesPlayed" + ":last").remove();
      //////////////////////////////////////////////////////////////////
    }
   });

   // Add in song buttons
   $('.instrument').append('<button class="note song">🌟</button>');
   $('.instrument').append('<button class="note song">🐏</button>');
   $('.instrument').append('<button class="note song">💤</button>');
  //  $('.instrument').append('<button class="note song">🇺🇸</button>');
  //  $('.instrument').append('<button class="note song">🚣</button>');
   $('.instrument').append('<button class="note song">🐖</button>');
   $('.instrument').append('<button class="note song">🌦</button>');
   $('.instrument').append('<button class="note song">🇫🇷</button>');
   $('.instrument').append('<button class="note song">🕷</button>');
    $('body').append('<div class="notesPlayed"> </button>');
});

var playSong = function(notesInSong) {
  var intervalID = setInterval(function() { playNote(intervalID); }, 400);
};

var playNote = function(intervalID) {
  console.log(notesInSong[0]);

  // Display the most recently played note
  if (notesInSong[0] != 'x') {
    $( ".notesPlayed" ).html( notesInSong[0]); //so that it doesn't pring the x's
    ////// THis is a barely understood Googled trick (that i had to play around with/modify) to reload a css animation for with jquery: https://css-tricks.com/restart-css-animation/
    var el = $( ".notesPlayed" ).html( notesInSong[0] );
    newone = el.clone(true);
    el.before(newone);
    $(".notesPlayed" + ":last").remove();
  //////////////////////////////////////////////////////////////////
  }

  if (notes.includes(notesInSong[0])) {
    stopPlayback(notesInSong[0]);
    var played = document.getElementById(notesInSong[0] + "Audio").play();
  }
  notesInSong.splice(0, 1);

  if (notesInSong.length === 0) {
    clearInterval(intervalID);
  }
};

var stopPlayback = function(note) {
  // This will stop the current playback so you dont have to wait until it's done to hit it again
  var mediaElement = document.getElementById(note + "Audio");
  mediaElement.removeAttribute("src");
  mediaElement.load();
};
