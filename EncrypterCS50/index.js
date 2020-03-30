
const encrypt = () => {
    function UniqueCheck(myArray) {
        return myArray.length === new Set(myArray).size;
    }



let output = document.getElementById("encryption");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
let keyString = document.getElementById("key").value;
if (keyString == false) {
    alert("You must enter a key");
    return;
}
else if (keyString.length != 26){
    alert("Your key must be 26 letters long");
    return;
}
//WORKS FOR THE MOST PART, would like to add new functionality in the future that determines whether the user has entered a valid key or not
/*else if (arr1.from(new Set(alphabet.join(""))).sort("") != arr2.from(new Set(keyString.toUpperCase())).sort("")){
    alert("Your key must contain 26 UNIQUE letters")
    return;
}*/
let key = keyString.toUpperCase().split("");
let lowercaseKey = keyString.toLowerCase().split("");
let message = document.getElementById("message").value.split("");
//The following examples are just for testing
//message = "Aello, how are you today?".toUpperCase().split("");
//exampleKey = "QWERTYUIOPASDFGHJKLZXCVBNM";
//key = exampleKey.split("");

debugger;
for (let x = 0; x < message.length; x++) {
    for (let j = 0; j < alphabet.length; j++) {
        if (message[x] == alphabet[j]) {
            message[x] = key[j];
            break;
        }
        else if (message[x] == lowercaseAlphabet[j]) {
            message[x] = lowercaseKey[j];
            break;
        }
        else {
            continue;
        }
    }
}




 output.innerHTML = message.join("");

 //console.log(key)
}

