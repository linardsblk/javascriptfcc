function mainInput(task, str) {
    var returnStr = "";
    var inputStr = document.getElementById("textbox").value;
    var task  = document.getElementById("dropdown").value;
    
    switch(task) {
        case "palindrome":
            var isOrisNot = (palindrome(inputStr)) ? "is" : "is not";
            returnStr = `${inputStr} ${isOrisNot} a palindrome`;
            break;
    }

    document.getElementById("output").innerHTML = returnStr;

    return false;
}


function palindrome(str) {
    // Remove special chars from str and changes to lowercase
    str = str.replace(/[^\w\d]|_/gi, '').toLowerCase();

    for(var i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

