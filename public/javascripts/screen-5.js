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
        window.location = "/3/" + prof_name + "/" + read_1 + 1 + read_3;
      }
    }
});

var animations = {
  inbox: function animate_inbox(index) {
    var today = new Date();
    today.setDate(today.getDate());
    var prompt = "" +
    "\n ``Prof. " + prof_name + ", \n\n" + " ``A fraud !!! ??? !!! \n\n  ``Someone thought it would be funny to hack up an arecibo with some choice features: \n\n ``They're claiming to have computed Ramsey's number R(9ac570) -- the hex value of my ship identification number. \n\n ``There's also a mention of the formula 8 = D?? ...actually clever. What if aliens sent us dick jokes? Hahahah. " +
    "\n\n ``Now I'm just wondering how in the hell they got the message out here? How many people know my ship #? \n\n ``The end of the message looks like a calling card but I never got a response. \n\n ``ZITS " 
    + "\n\n ``--> type 'back' to return to inbox "
    + "\nprof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
     $("#cmd-line").append("<div style='background: #fff; color: #000;'> &nbsp; FICUS 4.3 &nbsp; &nbsp; &nbsp; &nbsp; MESSSAGE BODY <span style='float: right;'>FROM: Captain A. Zitek (Vessel 9a-c570) &nbsp; &nbsp; &nbsp;</span></div>"); 
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