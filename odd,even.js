var userNumber=prompt('Enter your number');
userNumber=Number(userNumber);
if (isNaN(userNumber))
 {
                         alert('this is not number');}
else if (userNumber % 2===0) {
                          alert('the number is even');
}

    else{
                         alert('this is odd number')
    }