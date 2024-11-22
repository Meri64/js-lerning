let yourNumber = prompt("Enter a number");
let result = "";

if (isNaN(yourNumber)) {
  alert("This is not a number");
} else {
  for (let i = 1; i <= 10; i++) {
    result += `${yourNumber} x ${i} = ${yourNumber * i}\n`;//n for writing each result in newline
  }
  alert(result); 
}