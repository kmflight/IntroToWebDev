//Practice with If/Else Statements
var n = 25;
var result = 0;
if (n % 2 == 0){
    result += 10;
    console.log(result);
}
else{
    result -= n;
    console.log(result);
}

//Practice with For Loops

var n=25;

for(var sum=0; sum < n; sum++){
    console.log(sum);
}

//Practice Defining Functions
function addTwoNumbers(firstNumber, secondNumber){
    var total = firstNumber + secondNumber;
    alert("The sum of your numbers is: " + total);
}

addTwoNumbers(5,7);

//Practice Find Max
function findMax(testArray){
    var maxNumber = testArray[0];
    for(var arrayPosition=0; arrayPosition < testArray.length; arrayPosition++){
        if(testArray[arrayPosition] > maxNumber){
            maxNumber = testArray[arrayPosition];
        }
    }
    alert("The max number in the array is: " + maxNumber);
}

findMax([5,2,9,11]);
