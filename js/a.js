const button = document.getElementById("button");
const checkbox1 = document.getElementById("movie1");
const checkbox2 = document.getElementById("movie2");
const checkbox3 = document.getElementById("movie3");
const checkbox4 = document.getElementById("movie4");
const checkbox5 = document.getElementById("movie5");

var count = 0;
function checkCount() {
    count = 0;
    if (checkbox1.checked === true) {
        count = count + 1;
    }
    if (checkbox2.checked === true) {
        count = count + 1;
    }
    if (checkbox3.checked === true) {
        count = count + 1;
    }
    if (checkbox4.checked === true) {
        count = count + 1;
    }
    if (checkbox5.checked === true) {
        count = count + 1;
    }
}

function clickButton() {
    const name = document.getElementById("visit").value;
    checkCount();
    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

button.addEventListener("click", clickButton);