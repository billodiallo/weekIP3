$(document).ready(function() {
            $(".design,#design").click(function() {
              $("#design").toggle();
              $(".design").toggle();
            });
          });

$(document).ready(function() {
            $(".development,#development").click(function() {
            $(".development").slideToggle();
            $("#development").slideToggle();
                      });
                    });

  $(document).ready(function() {
              $(".product,#product").click(function() {
              $(".product").toggle();
              $("#product").toggle();
                });
                $(".black").hover(function(){
                    $(".1").slideToggle();
                  })
                  $(".black").hover(function(){
                      $(".2").slideToggle();
                    })
                    $(".black").hover(function(){
                        $(".3").slideToggle();
                      })
                    $(".black").hover(function(){
                    $(".4").slideToggle();
                        })
                    $(".black").hover(function(){
                    $(".5").slideToggle();
                          })
                    $(".black").hover(function(){
                    $(".6").slideToggle();
                            })
                    $(".black").hover(function(){
                      $(".7").slideToggle();
                              })
                      $(".black").hover(function(){
                      $(".8").slideToggle();
                                })
                });




      $(document).ready(function() {
      $("#blanks form").submit(function() {
      $(".name").append("blah blah");
        $(".email").append("blah blah");
    $(".textarea").append("blah blah");

    console.log("name"+"email"+"thank them for contacting you ");

        });
       });
