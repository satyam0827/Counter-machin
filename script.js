let incrementEl = document.getElementById("increment--btn")
let savebtn = document.getElementById("save--btn")
let count = 0;
let countEl = document.getElementById("count--el")
let saveEl = document.getElementById("save--el")

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let prevEntery = count +' - ';
    saveEl.textContent += prevEntery
    countEl.textContent = 0;
    count = 0
}

function clearBtn(){
    saveEl.textContent  ="Previous entry : "
}