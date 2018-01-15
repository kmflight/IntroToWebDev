function rollDice(){
    return Math.ceil(Math.random() * (1+ 6-1));
}

function clearErrors(){
    for(var loopCounter=0; loopCounter < document.forms["lucky"].elements.length; loopCounter++){
        if(document.forms["lucky"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
            document.forms["lucky"].element[loopCounter].parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["lucky"]["bet"].value="";
    document.getElementById("results").style.display = "none";
    document.getElementById("playButton").innerText = "Play";
    document.forms["lucky"]["bet"].focus();
}

function validateForm(){
    clearErrors();
    var bet = document.forms["lucky"]["bet"].value;
    if(bet == "" || bet <= 0 ){
        alert("You must enter a starting bet greater than $0");
        document.forms["lucky"]["bet"].parentElement.className = "form-group has-error";
        document.forms["lucky"]["bet"].focus();
        return false;
    }
    var total = bet;
    var rollsToBroke = 0;
    var rollsToMax = 0;
    var max = bet; 

    for(rollsToBroke=0; total > 0; rollsToBroke++){
        var dice1 = rollDice();
        var dice2 = rollDice();
        var sum = Number(dice1) + Number(dice2);
        if(sum == 7){
            total = total + 4;
        }
        else{
            total = total - 1;
        }
        if(total > max){
            max = total;
            rollsToMax = rollsToBroke;
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("playButton").innerText = "Play Again!";
    document.getElementById("start").innerText = bet;
    document.getElementById("rollToBroke").innerText = rollsToBroke;
    document.getElementById("max").innerText = max;
    document.getElementById("rollToMax").innerText = rollsToMax;
    return false;
}


