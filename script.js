function button1() {
   document.getElementById("fee").innerHTML = "there are " + document.querySelectorAll("p").length + " paragraph tags on this page";
}

function button2() {
   document.getElementById("fi").innerHTML = "there are " + document.querySelectorAll("#demo p").length + " paragraph tags in the first ID";
}

function button3() {
  document.getElementById("fum").innerHTML = "there are " + document.querySelectorAll("#demo2 p").length + " paragraph tags in the second ID";
}
