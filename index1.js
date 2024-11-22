//HOMEWORK 2

let firstString=prompt('Enter something');
let outString='';
for(i=0;i<firstString.length;i++) {
if (firstString[i]===" "){
                        outString +='-';
}else{outString+=firstString[i];
    
}
}

//HOMEWORK 1
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