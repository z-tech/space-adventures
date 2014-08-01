var prof_name = login;
var ready = false;

$( document ).ready(function() {
  animations.validating(0);
});

function rIFI(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).keypress(function(e) {
    if(e.which == 13 && ready == true) {
      var login = document.getElementById("login-name");
      if (login.value == 'inbox'|| login.value == "'inbox'") {
        // we may proceed 
        window.location = "/3/" + prof_name + "/000";
      }
    }
});

var animations = {
  validating: function animate_validation(index) {
    var prompt = "Authenticating ... ";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
      line.innerHTML = prompt[0];
    } else {
      line.innerHTML += prompt[index];      
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.validating(index + 1);
      }, 25);
    } else {
      animations.permission(0);
    }
  },
  permission: function animate_permission(index) {
    var prompt = "ACCESS GRANTED :: Professor " + login;

    if(index == 0) {
      $("#cmd-line").append("<br><span id='access' style='color: #FF99FF;'>"); 
      var line = document.getElementById("access");     
      line.innerHTML += prompt[0];
    } else {
      var line = document.getElementById("access");        
      line.innerHTML += prompt[index];      
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.permission(index + 1);
      }, 5);
    } else {       
      animations.welcome(0)
    }
  },
  welcome: function animate_welcome(index) {
    var day_ago = new Date();
    day_ago.setDate(day_ago.getDate()-1);
    var prompt = "prof@system ~$\n Welcome back to space exploration system x" +
    "\n\n System Status:\n" + 
    "``CPU Load ````````````````" + rIFI(10,13) + "." + rIFI(1,9) + "% ^\n " +
    "``Disk reads/sec `````````" + rIFI(391,723) +" KB ^\n " +
    "``Disk written/sec ``````" + rIFI(28,53) + ".3 KB ^\n " +
    "``Network received/sec " + rIFI(334,788) + " Bytes ^\n" +
    "``Network sent/sec ````" + rIFI(234,501) + " Bytes ^\n\n" +
    "Last Login: " + day_ago + "\n\n" +
    "You have 3 UNREAD COMMUNICATIONS (1 |)\n" +
    "`` --> type 'inbox' to view\n" +
    "prof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {
      $("#cmd-line").append("<br>");      
      line.innerHTML += prompt[0];
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<span style='color: green;'>NORMAL</span>"); 
      } else if (prompt[index] == '|') {
        $("#cmd-line").append("<span style='color: red;'>URGENT</span>");
      } else {
        line.innerHTML += prompt[index];     
      } 
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.welcome(index + 1);
      }, 3);
    } else {
      $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
      $("#login-name").focus();
      ready = true;
    }
  }
}