function callFunc()
{
	alert(1);
	
	  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
	  alert(xhttp.readyState + " - "+xhttp.status);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
	  
    }
  };
  xhttp.open("GET", "http://www.w3schools.com/ajax/ajax_info.txt", true);
  xhttp.send();	
  
  alert("after ajax");
}