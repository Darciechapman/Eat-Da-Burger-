$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
        };
            $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new burger");
            location.reload();
        });
    });
  
    $(".eatburger").on("click", function(event) {
        event.preventDefault();
  
        let id = $(this).data("id");
  
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: 1
            }
        }).then(
            function() {
            console.log("burger eated");
            //page reloaded for update
            location.reload();
        });
    });
  
    $(".trashburger").on("click", function(event) {
  
        let id = $(this).data("id");
  
        $.ajax({url: "/api/burgers/" + id,
            type: "DELETE"
        }).then(
            function() {
            console.log("deleted burger", id);
            location.reload();
        });
    });
})

