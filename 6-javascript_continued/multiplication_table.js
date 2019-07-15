<!DOCTYPE html>
<html>
<body>
  <input type = "button" id = "button" onclick="myFunction()" value="Add multiplication table" backgroundColor=#A9A9A9>
  <input type = "button" id = "button" onclick="myFunction2()" value="Remove multiplication table" backgroundColor=#A9A9A9>
<script>
  var a = 1;
  var b = a;
  document.getElementById("button").style.background='yellow';
  function myFunction(){
    while (a < 13) {
      while (b <= a * 10){
        console.log(b)
        var b = b + a
        }
      a++;
      var b = a;
      }
  function myFunction2(){
    console.clear();
  } 
</script>
</body>
</html>
