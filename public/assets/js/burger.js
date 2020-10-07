$(function () {

    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#newburger").val().trim(),
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("Burger added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".eat-burger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      var devouredState = {
        devoured: true
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function () {
          console.log("Burger devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("Deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });