//Random number generating
function generatePin(){
    var generatedPinNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("ShowRandomNumber").value = generatedPinNumber;
    
    //extra try left works
    document.getElementById("submitButton").style.display = "inline-block";
    document.getElementById("giveMessage").style.display = "none";
    document.getElementById("tryLeft").innerHTML = 3;
    //hiding pin matching messages
    document.getElementById("pinMatched").style.display = "none";
    document.getElementById("pinDidntMatch").style.display = "none";
}

// getting input using button and showing it on input section
function insert(num){
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value + num;
}

//function to clear input section
function cleanScreen(){
    document.getElementById("screen").value = "";
}

//backspace function to delete last character of string shown on input section
function backSpace(){
    var screenValue = document.getElementById("screen").value;
    document.getElementById("screen").value = screenValue.substr(0, screenValue.length - 1);
}



//checking pin macth or not
function pinMatchOrNot(){
    var generatedPinNumber = document.getElementById("ShowRandomNumber").value;
    var inputNumber = document.getElementById("screen").value;
    
    if(generatedPinNumber == inputNumber){
        document.getElementById("pinMatched").style.display = "block";
        document.getElementById("pinDidntMatch").style.display = "none";
    }
    else{
        document.getElementById("pinDidntMatch").style.display = "block";
        document.getElementById("pinMatched").style.display = "none";
    }
    
    //counting how many try left
    var tryLeft = document.getElementById("tryLeft").innerHTML;
    if(tryLeft > 1){
        tryLeft--;
        document.getElementById("tryLeft").innerHTML = tryLeft;
    }
    else if(tryLeft > 0){
        tryLeft--;
        document.getElementById("tryLeft").innerHTML = tryLeft;
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("giveMessage").style.display = "block";
    }
}





