var prof_name = login;
var ready = false;

$( document ).ready(function() {
  animations.permission(0);
});

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

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
      } else if (login.value == 'ls'|| login.value == "'ls'") {
        animations.list(0);
      } else if (login.value == 'clear'|| login.value == "'clear'") {
        clear();
      } else if (login.value == 'inspect transmission_binary_file'|| login.value == "'inspect transmission_binary_file'") {
        animations.inspector(0);
      } else if (login.value == 'view transmission_binary_file 23 73'|| login.value == "'view transmission_binary_file 23 73'") {
        window.open("/8");
        $("#cmd-line").append(login.value); 
        document.getElementById("login-name").remove();
        $("#cmd-line").append("<br>prof@system ~$<br>"); 
        $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
        $("#login-name").focus();
      } else if (login.value == 'view transmission_binary_file 73 23'|| login.value == "'view transmission_binary_file 73 23'") {
        window.open("/9");
        $("#cmd-line").append(login.value); 
        document.getElementById("login-name").remove();
        $("#cmd-line").append("<br>prof@system ~$<br>"); 
        $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
        $("#login-name").focus();
      }
    }
});

function inspectorg(l) {
  $("#cmd-line").append(l + "<br><span style='color: yellow;'>inspecting... </span><br>");
  var lil_string = "1.) Binary file length";
  $("#cmd-line").append(" &nbsp;&nbsp;");
  var i = 0;
  var target = document.getElementById("cmd-line");
  while( i < lil_string.length - 1) {
    target.innerHTML += (lil_string[i]);
    i++;
  }
  $("#cmd-line").append("&nbsp; &nbsp; <span style='background: green;'>&nbsp;1679 bits&nbsp;</span><br>");
  $("#cmd-line").append(" &nbsp;&nbsp; 2.) Is length semiprime? &nbsp; <span style='background: green;'>&nbsp;Yes&nbsp;</span><br>");
  $("#cmd-line").append(" &nbsp;&nbsp; 3.) Prime factors: &nbsp; &nbsp; &nbsp; &nbsp; <span style='background: green;'>&nbsp;23, 73&nbsp;</span>");
  $("#cmd-line").append("<br><br> &nbsp;&nbsp; <span style='background: blue;'>&nbsp;SUMMARY:&nbsp;</span> This file likely contains a visual message encoded in binary. Expect the image to be of dimension 23x73 bits or dimension 73x23 bits.<br>");  
  $("#cmd-line").append("<br> &nbsp;&nbsp; --> type 'view transmission_binary_file 23 73' for dimensions 23x73<br>");   
  $("#cmd-line").append(" &nbsp;&nbsp; --> type 'view transmission_binary_file 73 23' for dimensions 73x23<br>"); 
  $("#cmd-line").append("<br> prof@system ~$<br>");   
  document.getElementById("login-name").remove();
  $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
  $("#login-name").focus();

}

function list(l) {
  var add_str = "<br> &nbsp;&nbsp; --> type 'inspect transmission_binary_file' to run inspector<br>";
  $("#cmd-line").append(l + "<br><span style='color: blue;'>transmission_binary_file </span>"+ add_str +"prof@system ~$<br>"); 
  document.getElementById("login-name").remove();
  $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
  $("#login-name").focus();
}

function clear() {
  $("#cmd-line").html("");
  $("#cmd-line").append("<br>prof@system ~$<br>"); 
  $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
  $("#login-name").focus();
}

var animations = {
  permission: function animate_permission(index) {
    var prompt = "LOGGED IN AS :: Professor " + login;

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
  list: function animate_list(index) {

    var prompt = " ";
    prompt += " ```--> type 'inspect transmission_binary_file' to run inspector \n prof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {  
      document.getElementById("login-name").remove();  
      $("#cmd-line").append("ls"); 
      $("#cmd-line").append("<br>"); 
      $("#cmd-line").append("<span style='background: blue;'>&nbsp;transmission_binary_file&nbsp;</span><br>");
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<span style='background: green; padding-left: 10px; padding-right: 5px;'> 1679 bits </span><br>"); 
      } else if (prompt[index] == '|') {
        $("#cmd-line").append("<span style='background: green; padding-left: 10px; padding-right: 5px;'> Yes </span><br>");
      } else if (prompt[index] == '*') {
      } else {
        line.innerHTML += prompt[index];     
      } 
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.list(index + 1);
      }, 3);
    } else {
      $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
      $("#login-name").focus();
    }
  },
  inspector: function animate_inspector(index) {

    var prompt = " \n Running inspector...\n\n 1.) Binary file length ``` ^ 2.) Is length semiprime? ``| 3.) Prime factors: ````````<";
    prompt += "\n * This file likely contains a visual message encoded in binary. Expect the image to be of dimensions 23x73 or 73x23 bits."; 
    prompt += "\n ```--> type 'view transmission_binary_file 23 73' for dimensions 23x73";
    prompt += "\n ```--> type 'view transmission_binary_file 73 23' for dimensions 73x23";    
    prompt += " \n prof@system ~$\n";
    var line = document.getElementById("cmd-line");

    if(index == 0) {  
      document.getElementById("login-name").remove();  
      $("#cmd-line").append("inspect transmission_binary_file"); 
      $("#cmd-line").append("<br>"); 
      line.innerHTML += prompt[0];
    } else {
      if (prompt[index] == '\n') {
        $("#cmd-line").append("<br>"); 
      } else if (prompt[index] == '`') {
        $("#cmd-line").append("<span style='color: #000;'>_</span>"); 
      } else if (prompt[index] == '^') {
        $("#cmd-line").append("<span style='background: green; padding-left: 10px; padding-right: 5px;'> 1679 bits </span><br>"); 
      } else if (prompt[index] == '|') {
        $("#cmd-line").append("<span style='background: green; padding-left: 10px; padding-right: 5px;'> Yes </span><br>");
      } else if (prompt[index] == '<') {
        $("#cmd-line").append("<span style='background: green; padding-left: 10px; padding-right: 5px;'> 23, 73 </span><br>");
      } else if (prompt[index] == '*') {
        $("#cmd-line").append("<span style='background: blue;'>&nbsp;SUMMARY:&nbsp;</span>");
      } else {
        line.innerHTML += prompt[index];     
      } 
    }

    if(index < prompt.length - 1) {
      setTimeout(function () {
        animations.inspector(index + 1);
      }, 3);
    } else {
      $("#cmd-line").append("<input type='text' id='login-name' placeholder='>'>");
      $("#login-name").focus();
    }
  },
  welcome: function animate_welcome(index) {
    var day_ago = new Date();
    day_ago.setDate(day_ago.getDate()-1);
    var prompt = "prof@system ~$\n " +
    "\n System Status:\n" + 
    "``CPU Load ````````````````" + rIFI(10,13) + "." + rIFI(1,9) + "% ^\n " +
    "``Disk reads/sec `````````" + rIFI(391,723) +" KB ^\n " +
    "``Disk written/sec ``````" + rIFI(28,53) + ".3 KB ^\n " +
    "``Network received/sec " + rIFI(334,788) + " Bytes ^\n" +
    "``Network sent/sec ````" + rIFI(234,501) + " Bytes ^\n\n" +
    "`` --> type 'ls' to files in this folder\n" +    
    "`` --> type 'inbox' to view mail\n" +
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