let firstString=prompt('Enter something');
let outString='';
for(i=0;i<firstString.length;i++) {
if (firstString[i]===" "){
                        outString +='-';
}else{outString+=firstString[i];
    
}
}