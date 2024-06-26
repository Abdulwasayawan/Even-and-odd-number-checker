var userNumber =+ prompt("Enter any number to your number is either Even or Odd!");
var numbers = [1,2,3,4,5];
 numbers = numbers.concat(userNumber);
var evenNumber = [];
var oddNumber = [];
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
       evenNumber.push(numbers[i]);
    }else{
   oddNumber.push(numbers[i]);
    }
}
document.write("Numbers are "+ numbers + "<br />");
document.write("Even Numbers are "+ evenNumber + "<br />" );
document.write("Odd Numbers are "+ oddNumber + "<br />");