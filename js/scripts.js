$(document).ready(function() {
            $(".design,#design").click(function() {
              $("#design").toggle();
              $(".design").toggle();
            });

            //RECIEVING INPUTS
            $("#submit").click(function(){
              var name = $("input[id=Name]").val();
              var email = $("input[id=email]").val();
              var message = $("textarea[id=textarea][name=message]").val();
              if(message && email && name !== null){
                alert("Hello " + name + ", We Have Recieved Your Message");
              }else{
                alert("You must fill all the required fields")
              }
            })
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
                  $(".blue").hover(function(){
                      $(".2").slideToggle();
                    })
                    $(".red").hover(function(){
                        $(".3").slideToggle();
                      })
                    $(".green").hover(function(){
                    $(".4").slideToggle();
                        })
                    $(".yellow").hover(function(){
                    $(".5").slideToggle();
                          })
                    $(".marron").hover(function(){
                    $(".6").slideToggle();
                            })
                    $(".orange").hover(function(){
                      $(".7").slideToggle();
                              })
                      $(".light").hover(function(){
                      $(".8").slideToggle();
                                })
                });
