SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});
  //tamil songs*
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
    SC.stream('/tracks/317969885',function(sound){
      $('#start-t4').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-t4').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });

    SC.stream('/tracks/67875890',function(sound){
      $('#start-t5').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-t5').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });

    SC.stream('/tracks/511333437',function(sound){
      $('#start-t6').click(function(e) {
             e.preventDefault();
             sound.start();
           });
      $('#stop-t6').click(function(e) {
             e.preventDefault();
             sound.stop();
          });
    });
    //telugu songs*
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
    SC.stream('/tracks/256712655',function(sound){
        $('#start-te2').click(function(e) {
               e.preventDefault();
               sound.start();
             });
        $('#stop-te2').click(function(e) {
               e.preventDefault();
               sound.stop();
            });
      });
      SC.stream('/tracks/256712208',function(sound){
          $('#start-te3').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
          $('#stop-te3').click(function(e) {
                 e.preventDefault();
                 sound.stop();
              });
        });
        SC.stream('/tracks/522633336',function(sound){
            $('#start-te4').click(function(e) {
                   e.preventDefault();
                   sound.start();
                 });
            $('#stop-te4').click(function(e) {
                   e.preventDefault();
                   sound.stop();
                });
          });
          SC.stream('/tracks/480614625',function(sound){
              $('#start-te5').click(function(e) {
                     e.preventDefault();
                     sound.start();
                   });
              $('#stop-te5').click(function(e) {
                     e.preventDefault();
                     sound.stop();
                  });
            });
            SC.stream('/tracks/256712492',function(sound){
                $('#start-te6').click(function(e) {
                       e.preventDefault();
                       sound.start();
                     });
                $('#stop-te6').click(function(e) {
                       e.preventDefault();
                       sound.stop();
                    });
              });
        //malayalam songs*
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
          SC.stream('/tracks/208635620',function(sound){
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
              SC.stream('/tracks/337543156',function(sound){
                  $('#start-m4').click(function(e) {
                         e.preventDefault();
                         sound.start();
                       });
                  $('#stop-m4').click(function(e) {
                         e.preventDefault();
                         sound.stop();
                      });
                });
                SC.stream('/tracks/275752671',function(sound){
                    $('#start-m5').click(function(e) {
                           e.preventDefault();
                           sound.start();
                         });
                    $('#stop-m5').click(function(e) {
                           e.preventDefault();
                           sound.stop();
                        });
                  });
                  SC.stream('/tracks/296030957',function(sound){
                      $('#start-m6').click(function(e) {
                             e.preventDefault();
                             sound.start();
                           });
                      $('#stop-m6').click(function(e) {
                             e.preventDefault();
                             sound.stop();
                          });
                    });

});
