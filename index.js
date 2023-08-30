const leftHandNumber = +prompt("type left hand number");
const operator = prompt("type operator : + , - , * , /");
const rightHandNumber = +prompt("type right hand number");

//                                  Bedoone dar nazar gereftan isNaN

// if (operator === "+") {
//     console.log(leftHandNumber + rightHandNumber)
// } else if (operator === "-"){
//     console.log(leftHandNumber - rightHandNumber)
// } else if (operator === "*"){
//     console.log(leftHandNumber * rightHandNumber) 
// } else if (operator === "/"){
//     console.log(leftHandNumber / rightHandNumber)
// } else{
//     console.log("error 404 ! its dari vari ...")
// }

//                                  Ba dar nazar gereftane isNaN
if (isNaN (leftHandNumber && rightHandNumber)) {
    console.log("!!ERROR!!")
    if (operator === "+") {
        console.log(leftHandNumber + rightHandNumber)
    } else if (operator === "-"){
        console.log(leftHandNumber - rightHandNumber)
    } else if (operator === "*"){
        console.log(leftHandNumber * rightHandNumber) 
    } else if (operator === "/"){
        console.log(leftHandNumber / rightHandNumber)
    } else{
        console.log("error 404 ! its dari vari ...")
    }
}
