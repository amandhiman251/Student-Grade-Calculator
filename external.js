function aman() {
  var a = parseFloat(document.getElementById("i1").value);
  var b = parseFloat(document.getElementById("i2").value);
  var c = parseFloat(document.getElementById("i3").value);
  var d = parseFloat(document.getElementById("i4").value);
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
