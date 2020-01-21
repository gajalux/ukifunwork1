SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/729399541',function(sound){
    $('#start-t1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-t1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/741684847',function(sound){
    $('#start-t2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-t2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });

  SC.stream('/tracks/709500637',function(sound){
    $('#start-t3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-t3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
  SC.stream('/tracks/742634620',function(sound){
      $('#start-te1').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-te1').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    SC.stream('/playlists/649716513',function(sound){
        $('#start-te2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-te2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/playlists/276063855',function(sound){
          $('#start-te3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-te3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/679510445',function(sound){
            $('#start-m1').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-m1').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/playlists/115451742',function(sound){
              $('#start-m2').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-m2').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/129345836',function(sound){
                $('#start-m3').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-m3').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });

});
