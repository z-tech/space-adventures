var ready = false;

$( document ).ready(function() {
  animations.login(0);
});

$(document).keypress(function(e) {

    if(e.which == 13 && ready == true) {
      var login = document.getElementById("login-name");

      if (login.value.length > 0) {
        // we may proceed 
        window.location = "./2/" + login.value;
      }
    }
});

var animations = {
  login: function animate_login(index) {
    var prompt = "Enter login name ... ";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
      line.innerHTML = prompt[0];
    } else {
      line.innerHTML += prompt[index];      
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.login(index + 1);
      }, 25);
    } else {
      $("#cmd-line").append("<input type='text' id='login-name' placeholder='> Full Name'>");
      $("#login-name").focus();
      ready = true;
    }
  }
}