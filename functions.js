function mainInput(task, str) {
    var returnStr = "";
    var inputStr = document.getElementById("textbox").value;
    var task  = document.getElementById("dropdown").value;
    
    switch(task) {
        case "palindrome":
            var isOrisNot = (palindrome(inputStr)) ? "is" : "is not";
            returnStr = `${inputStr} ${isOrisNot} a palindrome`;
            break;

        case "roman" :
            var inputNum = Number(inputStr);
            if(inputNum) {
                returnStr = convertToRoman(inputStr);
            }
            else {
                returnStr = "Invalid input";
            }
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

function convertToRoman(num) {
    const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
    var ret = "";

    while(num > 0) {
        for(var i=0;i<decimalValue.length;i++) {
            if(decimalValue[i] <= num) {
                ret += romanNumeral[i];
                num -= decimalValue[i];
                break;
            }
        }
    }
    return ret;
}
