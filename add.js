const resultElement = document.getElementById("result")
const inputOne = document.getElementById("inputOne")
const inputTwo = document.getElementById("inputTwo")
const submitBtn = document.getElementById("submit")
const btnPlus = document.getElementById("plus")
const btnMinus = document.getElementById("minus")
const btnMult = document.getElementById("multiplication")
const btnDivis = document.getElementById("division")
let action = "+"



btnPlus.onclick= function () {
    action = "+"
}
btnMinus.onclick= function () {
    action = "-"
}
btnMult.onclick = function () {
    action = "*"
}
btnDivis.onclick = function () {
    action = "/"
}

function printResult(result) {
    if (result<0) {
        resultElement.style.color ="red"
    } 
    else if (result>0) {
        resultElement.style.color = "green"
    }
    resultElement.textContent= result
}




submitBtn.onclick= function() {
    if (action == "+") {
        const sum =Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }

    else if (action == "-") {
        const sum =Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
        
    }
    else if (action == "*") {
        const sum =Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }

    else if (action == "/" ) {
        const sum =Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    }
}

