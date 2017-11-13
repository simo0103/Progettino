/*(function() {
    
      if (typeof $M === 'undefined') {
        $M = {};
      }
      var $subMenu;
      function setup() {
    
        $subMenu = $('.subMenu');
      
      }
    
      function init() {
        try {
          setup();
    
        } catch (e) {
          console.error(e.message);
          console.error(e);
        }
     }
    
      $M.nomeModulo = init;
      
      $(".subMenu").on('transitionend webkitTransitionEnd oTransitionEnd', function () {
           console.log("ok");
      });
      }());
    
    
    $(document).on('ytosReady', function() {
    
      $M.nomeModulo();
    });

    */
    
    $(document).ready(function(){
     $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
           $(brand).slice(0,data.length) 
           .each(function(i,el){
               $(this).append(data[i].name);
              $(this).prop("title",data[i].address.city );
          });
    
            });
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
          $('.descr')
          .each(function(i,el){
              $(this).append(data[i].address.street);
            
          });
    
            });

            $.getJSON('https://jsonplaceholder.typicode.com/users', function(data) {
              $('.price').each(function(i,el){
                  $(this).append(data[i].address.suite);
                
              });
             
                });

    })
     


    $(function(){  
      $('.vetrina').fadeIn('slow');
    });
    
    $(document).ready(function() {
   
        $(window).scroll( function(){
     
            $('.image').each( function(i){
                
                var sottoImm = $(this).position().top + $(this).outerHeight();
                var fineFinestra = $(window).scrollTop() + $(window).height();
     
                if( fineFinestra > sottoImm ){
                    
                    $(this).animate({'opacity':'1'},1500);
                        
                }
                
            }); 
        
        });
       
    });

    


 