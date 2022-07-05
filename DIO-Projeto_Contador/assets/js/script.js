var CurrentNumberW = document.getElementById('CurrentNumber')
var CurrentNumber = 0

function increment(){
    CurrentNumber += 100
    CurrentNumberW.innerHTML = CurrentNumber
}

function decrement(){
    CurrentNumber -= 100
    CurrentNumberW.innerHTML = CurrentNumber
}