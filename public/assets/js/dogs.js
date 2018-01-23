// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-spayed").on("click", function(event) {
      var id = $(this).data("id");
      var newSpayed = $(this).data("newspayed");
      // console.log(id);
  
      var newSpayedState = {
        spayed: newSpayed
      };
  
      // Send the PUT request.
      $.ajax("/api/dogs/" + id, {
        type: "PUT",
        data: newSpayedState
      }).then(
        function() {
          console.log("changed Spayed to", newSpayed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDog = {
        name: $("#ca").val().trim(),
        spayed: $("[name=spayed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/dogs", {
        type: "POST",
        data: newDog
      }).then(
        function() {
          console.log("created new dog");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-dog").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/dogs/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted dog", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  