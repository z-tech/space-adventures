/* assume we have some means to paste in these CGI
  defined parameters */
var prof_name = login;
/* end CGI params */

var ready = false;

$( document ).ready(function() {
  animations.inbox(0);
});

$(document).keypress(function(e) {
    if(e.which == 13 && ready == true) {
      var login = document.getElementById("login-name");
      if (login.value == 'back' || login.value == "'back'" || login.value == "exit") {
        // we may proceed 
        window.location = "/3/" + prof_name + "/" + read_1 + read_2 + 1;
      }
    }
});

var animations = {
  inbox: function animate_inbox(index) {
    var today = new Date();
    today.setDate(today.getDate());
    var prompt = "" +
    "\n" + " ``This is an automated distress message from vessel 9a-c570 near supergalactic coordinates (47.37°, +6.32°, 11.7).\n" +
    "\n" + " ``^ Video Clip Attachment" +
    "\n ``--> type 'play v' to play video " +
    "\n ``--> type 'back' to return to inbox " +
    "\n\nprof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
     $("#cmd-line").append("<div style='background: #fff; color: #000;'> &nbsp; FICUS 4.3 &nbsp; &nbsp; &nbsp; &nbsp; MESSSAGE BODY <span style='float: right;'>FROM: Captain A. Zitek (Vessel ID 8485) &nbsp; &nbsp;</span></div>"); 
      $("#cmd-line").append("<br>");      
      line.innerHTML += prompt[0];
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<i style='color: #fff;' class='fa fa-file-video-o'></i>"); 
      } else if (prompt[index] == '|') {
        $("#cmd-line").append("<span style='color: red;'>DISTRESS</span>");
      } else {
        line.innerHTML += prompt[index];     
      } 
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.inbox(index + 1);
      }, 3);
    } else {
      $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
      $("#login-name").focus();
      ready = true;
    }
  }
}