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
        window.location = "/3/" + prof_name + "/" + 1 + read_2 + read_3;
      }
    }
});

var animations = {
  inbox: function animate_inbox(index) {
    var today = new Date();
    today.setDate(today.getDate());
    var prompt = "" +
    "\n ```Prof. " + prof_name + ", \n\n" + " `` Hot damn, another Arecibo! Picking it up out here out in 8934edj3. \n\n ```This makes three fresh contacts with extraterrestrial life in two years -- oughta be some sort of record for that? " +
    "\n\n ```Decoding update and contact documents to come." +
    "\n\n ```Best," +
    "\n ```Capt. A. Zitek" +
    "\n\n\n ``--> type 'back' to return to inbox " +
    "\n\nprof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
     $("#cmd-line").append("<div style='background: #fff; color: #000;'> &nbsp; FICUS 4.3 &nbsp; &nbsp; &nbsp; &nbsp; MESSSAGE BODY <span style='float: right;'>FROM: Captain A. Zitek (Vessel ID 8485) &nbsp; &nbsp; TITLE: Arecibo Transmission &nbsp; &nbsp; &nbsp;</span></div>"); 
      $("#cmd-line").append("<br>");      
      line.innerHTML += prompt[0];
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<span style='color: green;'>UNREAD</span>"); 
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