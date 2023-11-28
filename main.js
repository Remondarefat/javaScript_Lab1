function personalData() {
  var firstName = prompt("please enter your first name");
  var lastName = prompt("please enter your last name");
 confirm(`${firstName} ${lastName}`);

  if (confirm) {
    var birthYear = Number(prompt("please enter your birth year"));
    var age = calculateAge(birthYear);
    alert(`welcome ${firstName} ${lastName} your age is ${age}`);
  } else {
    alert("please enter your name again");
    personalData();
  }
}
personalData();

function calculateAge(birthYear) {
  const currentDate = new Date();
  const curretYear = currentDate.getFullYear();
  return curretYear - birthYear;
}

// ---------------Q2-------------------

alert("the first release of a calculator that only has a summation feature. ");
var num1=Number(prompt("please enter first number"));
var num2=Number(prompt("please enter secound number"));
var result=num1+num2 ;
alert(`${num1} +${num2} =${result}`);