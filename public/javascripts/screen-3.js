var ready = false;
var prof_name = login;
$( document ).ready(function() {
  animations.inbox(0);
});

$(document).keypress(function(e) {
    if(e.which == 13 && ready == true) {
      var login = document.getElementById("login-name");
      if (login.value == 'read 1' || login.value == "'read 1'") {
        // we may proceed 
        window.location = "/4/" + prof_name + "/" + read_1 + read_2 + read_3;
      } else if (login.value == 'read 2' || login.value == "'read 2'" ) {
        window.location = "/5/" + prof_name + "/" + read_1 + read_2 + read_3;
      } else if (login.value == 'read 3' || login.value == "'read 3'" ) {
        window.location = "/6/" + prof_name + "/" + read_1 + read_2 + read_3;
      } else if ((login.value == 'exit' || login.value == "'exit'") && (read_1 == 1 && read_2 == 1 && read_3 == 1)) {
        window.location = "/7/" + prof_name + "/" + read_1 + read_2 + read_3;
      }        
    }
});

var animations = {
  inbox: function animate_inbox(index) {
    var today = new Date();
    today.setDate(today.getDate());
    var prompt = "" +
    "\n ``1) " + today.toDateString();
    if (read_1 == 1) {
      prompt += " = `";
    } else {
      prompt += " ^";
    }
    prompt += " ```FROM: Cpt. A. Zitek (Vessel ID K109)`` SUBJECT: Arecibo Transmission \n" + 
    " ``2) " + today.toDateString();
    if (read_2 == 1) {
      prompt += " = `";
    } else {
      prompt += " ^";
    } 
    prompt += " ```FROM: Cpt. A. Zitek (Vessel ID K109)`` SUBJECT: Arecibo Transmission Decoding: Unusual Features \n" + 
    " ``3) " + today.toDateString();
    if (read_3 == 1) {
      prompt += " *";
    } else {
      prompt += " |";
    } 
    prompt += "``FROM: Cpt. A. Zitek (Vessel ID K109)`` SUBJECT: Automated Distress Signal Near 56x8 - w89 \n" + 
    "`` --> type 'read #' where # is the message you wish to view\n";
    if (read_1 == 1 && read_2 == 1 && read_3 == 1) {
      prompt += "`` --> type 'exit' to leave mailbox\n";    
    }
    prompt += "prof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
     $("#cmd-line").append("<div style='background: #fff; color: #000;'> &nbsp; FICUS 4.3 &nbsp; &nbsp; &nbsp; &nbsp; MAIN MENU<span style='float: right;'>FOLDER: INBOX &nbsp; &nbsp; 3 MESSAGES &nbsp; &nbsp; &nbsp;</span></div>"); 
      $("#cmd-line").append("<br>");      
      line.innerHTML += prompt[0];
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<span style='color: green;'>UNREAD</span>"); 
      } else if (prompt[index] == '=') {
        $("#cmd-line").append("<span style='color: #999;'>READ </span>"); 
      } else if (prompt[index] == '*') {
        $("#cmd-line").append("<span style='color: #999;'>DISTRESS</span>"); 
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