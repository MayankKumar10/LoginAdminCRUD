var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");




  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    alert(`Password doesn't have minimum number of LowerCase Letters `);
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    alert(`Password doesn't have minimum number of UpperCase Letter `);
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    alert(`Password doesn't have minimum number of integers `);
  }
  
  if(myInput.value.length >= 8) {
   alert('Password Length is smaller than 8'); 
  
     }

