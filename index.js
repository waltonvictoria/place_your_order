var subtotal = 0;
  $(function() {
    $( "#catalog" ).accordion();
    $( "#catalog li" ).draggable({      
      helper: "clone"
    });
    $( "#cart ol" ).droppable({
      drop: function( event, ui ) {
        var precio = parseInt(ui.draggable.attr("data-precio"));
        subtotal = subtotal + precio;
        $("#subtotal strong").html(subtotal);
        $( "<li></li>" ).html( ui.draggable.text() + " ("+'$'+precio+") " + "<strong data-precio='" + precio + " '><i class='far fa-times-circle'></i></strong>" ).appendTo( this );
      }
    })
  });
    $(document).on("click", "#cart ol li strong", function(){
        let precio = parseInt($(this).attr("data-precio"));
        subtotal = subtotal - precio;
        $("#subtotal strong").html(subtotal);
        $(this).parent("li").remove();
    })