$(document).ready(function () {
  $("#send_message").click(function () {
    var data = {
      first_name: $("#first_name").val(),
      email: $("#email").val(),
    };
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: data,
      success: function () {
        $(".success").fadeIn(1000);
        alert("message sent");
      },
    });
  });
});
