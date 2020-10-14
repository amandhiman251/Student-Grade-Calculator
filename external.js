function aman() {
  var a = parseInt(document.getElementById("i1").value);
  var b = parseInt(document.getElementById("i2").value);
  var c = parseInt(document.getElementById("i3").value);
  var d = parseInt(document.getElementById("i4").value);
  var e = a + b + c + d;
  var f = (e*100)/400;
  var g;
  var h;
  if (f <= 25 && e >0) {
	  g = "D";
  }
  if (f <=50 && e >25) {
	  g = "C";
  }
  if (f <=75 && e >50) {
	  g = "B"
  }
  if (f <= 100 && e >75) {
	  g = "A";
  }
  if ( f< 33.33) {
	  h = "Fail";
  }
  if ( f >= 33.33) {
	  h = "Pass";
  }
    document.getElementById("result").innerHTML = "Out of 400 your total is " + e + " and percentage is " + f +"%. Your grade is " + g + ". You are " + h ;
 }
