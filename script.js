var reverse_counter = 0;
var given_Points = 0;

var reload_Counter = 0;

function reset1() {
  document.getElementById("pbar").value = 0;
  document.getElementById("counting").innerHTML = 0;
  reload_Counter += 1;
  if (reload_Counter >= 2) {
    window.location.reload()
  }
}

function clickTest(){
  
  document.getElementById("pbar").value = 0;
  document.getElementById("counting").innerHTML = 0;
  
  var click_counter = 0;
  let inputVal = document.getElementById("inputId").value;

  // Check for Characters
  var char_left = 8 - inputVal.length
  if (inputVal.length < 8) {
    document.getElementById("eightChar_Hint").innerText = "Need " + char_left + " More Characters"
  } else {
    document.getElementById("eightChar_Hint").innerText = "";
  }
  given_Points = inputVal.length * 3;

  // Check if Password Contains Capital
  let regExp = /[A-Z]/;
  let isMatch = regExp.test(inputVal)
  let result = isMatch ? "Yes" : "No";
  if (result == "Yes") {
    document.getElementById('cap_Hint').innerText = ""
    given_Points += 15;
  }

  var specialChar = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); 
    if (specialChar.test(inputVal)) {
      document.getElementById('specialC_Hint').innerText = ""
      given_Points += 15;  
    }

  var numbers = new RegExp(/[1234567890]/); 
    if (numbers.test(inputVal)) {
      document.getElementById('num_Hint').innerText = ""
      given_Points += 15;  
    }
  
  if (document.getElementById("pbar").value < 100) {
    // Interval for Animation
    setInterval(function(){
      if (document.getElementById("pbar").value < given_Points && click_counter < given_Points && document.getElementById("pbar").value < 100) {
        document.getElementById("pbar").value = 0 + ++reverse_counter;
        document.getElementById("counting").innerHTML = reverse_counter;
      }
  },50);
    document.getElementById("pbar").value = 0 - --reverse_counter;
    document.getElementById("counting").innerHTML = reverse_counter;
  }
  
}
