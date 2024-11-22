var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
switch(operation){
    case '+':
        alert(num1+num2);
        break;
    case '-':
        alert(num1-num2);
        break;
    case '*':
        alert(num1*num2);
        break;
    case '/':
        alert(num1/num2); 
        break;
    default:
        alert('invalid operator')

}