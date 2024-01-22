document.getElementById("yesButton").addEventListener("click", function() {
  var messageElement = document.getElementById("message");
  var yesButton = document.getElementById("yesButton");
  var noButton = document.getElementById("noButton");

  messageElement.innerHTML = "Tyssmmmm Kya h password!";
  
  noButton.disabled = false;
  
  yesButton.disabled = true;
});


  