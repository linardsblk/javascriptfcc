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

        case "caesar" :
            returnStr = rot13(inputStr);
            break;

        case "telephone" :
            var isOrisNot = telephoneCheck((inputStr)) ? "is" : "is not";
            returnStr = `${inputStr} ${isOrisNot} a valid telephone number`;
            break;
    }

    document.getElementById("output").innerHTML = returnStr;

    return false;
}

function dropdownChange() {
    var task = document.getElementById("dropdown").value;

    switch(task) {
        case "palindrome":
            document.getElementById("descTitle").innerHTML = "Palindrome cheker";
            document.getElementById("descText").innerHTML = `Return true if the given string is a palindrome. Otherwise, return false.
            <br>
            A <i>palindrome</i> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.`;
            document.getElementById("descTests").innerHTML = `<li>eye should return true.</li>
            <li>_eye should return true.</li>
            <li>_eye should return true.</li>
            <li>not a palindrome should return false.</li>
            <li>A man, a plan, a canal. Panama should return true.</li>
            <li>never odd or even should return true.</li>
            <li>nope should return false.</li>
            <li>almostomla should return false.</li>
            <li>My age is 0, 0 si ega ym. should return true.</li>
            <li>1 eye for of 1 eye. should return false.</li>
            <li>0_0 (: /-\ :) 0-0 should return true.</li>
            <li>five|\_/|four should return false.</li>`;
            break;

        case "roman" :
            document.getElementById("descTitle").innerHTML = "Roman number converter";
            document.getElementById("descText").innerHTML = "Convert the given number into a roman numeral.";
            document.getElementById("descTests").innerHTML = `<li>2 should return "II".</li>
            <li>3 should return "III".</li>
            <li>4 should return "IV".</li>
            <li>5 should return "V".</li>
            <li>9 should return "IX".</li>
            <li>12 should return "XII".</li>
            <li>16 should return "XVI".</li>
            <li>29 should return "XXIX".</li>
            <li>44 should return "XLIV".</li>
            <li>45 should return "XLV"</li>
            <li>68 should return "LXVIII"</li>
            <li>83 should return "LXXXIII"</li>
            <li>97 should return "XCVII"</li>
            <li>99 should return "XCIX"</li>
            <li>400 should return "CD"</li>
            <li>500 should return "D"</li>
            <li>501 should return "DI"</li>
            <li>649 should return "DCXLIX"</li>
            <li>798 should return "DCCXCVIII"</li>
            <li>891 should return "DCCCXCI"</li>
            <li>1000 should return "M"</li>
            <li>1004 should return "MIV"</li>
            <li>1006 should return "MVI"</li>
            <li>1023 should return "MXXIII"</li>
            <li>2014 should return "MMXIV"</li>
            <li>3999 should return "MMMCMXCIX"</li>`;
            break;

        case "caesar" :
            document.getElementById("descTitle").innerHTML = "Caesars cipher";
            document.getElementById("descText").innerHTML = `One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
            <br>
            A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
            `;
            document.getElementById("descTests").innerHTML = `<li>"SERR PBQR PNZC" should decode to FREE CODE CAMP</li>
            <li>"SERR CVMMN!" should decode to FREE PIZZA!</li>
            <li>"SERR YBIR?" should decode to FREE LOVE?</li>
            <li>"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</li>`;
            break;

        case "telephone" :
            document.getElementById("descTitle").innerHTML = "Telephone number validator";
            document.getElementById("descText").innerHTML = `Return true if the passed string looks like a valid US phone number.
            <br>
            The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
            <br>
            <pre><code>
            555-555-5555
            (555)555-5555
            (555) 555-5555
            555 555 5555
            5555555555
            1 555 555 5555
            </code></pre>
            <br>
            For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
            
            `
            document.getElementById("descTests").innerHTML = `
            <li>"1 555-555-5555" should return true.</li>
            <li>"1 (555) 555-5555" should return true.</li>
            <li>"5555555555" should return true.</li>
            <li>"555-555-5555" should return true.</li>
            <li>"(555)555-5555" should return true.</li>
            <li>"1(555)555-5555" should return true.</li>
            <li>"555-5555" should return false.</li>
            <li>"5555555" should return false.</li>
            <li>"1 555)555-5555" should return false.</li>
            <li>"1 555 555 5555" should return true.</li>
            <li>"1 456 789 4444" should return true.</li>
            <li>"123**&!!asdf#" should return false.</li>
            <li>"55555555" should return false.</li>
            <li>"(6054756961)" should return false</li>
            <li>"2 (757) 622-7382" should return false.</li>
            <li>"0 (757) 622-7382" should return false.</li>
            <li>"-1 (757) 622-7382" should return false</li>
            <li>"2 757 622-7382" should return false.</li>
            <li>"10 (757) 622-7382" should return false.</li>
            <li>"27576227382" should return false.</li>
            <li>"(275)76227382" should return false.</li>
            <li>"2(757)6227382" should return false.</li>
            <li>"2(757)622-7382" should return false.</li>
            <li>"555)-555-5555" should return false.</li>
            <li>"(555-555-5555" should return false.</li>
            <li>"(555)5(55?)-5555" should return false.</li>`
            break;
    }
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

function rot13(str) { // LBH QVQ VG!
var ret = "";
var regex = /[A-Z]/;

for(var i=0;i<str.length;i++) {
    var char = str[i];
    if(char.match(regex)) {
        var charCode = 13 + char.charCodeAt();

        
        if(charCode > 90) {
            charCode = charCode - 26;
        }
        ret += String.fromCharCode(charCode);
        }
        else {
            ret += char;
        }
    }
    return ret;
}

function telephoneCheck(str) {
    var regex = /^(1\s?)?[\s-]?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;

    return regex.test(str);
}