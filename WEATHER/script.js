function hide() {
    document.querySelector(".cookies").remove();
}

function myFunction() {
    if (document.getElementById("temperature").value == "C") {
        convertc();
    } else {
        convertf();
    }
}

function convertc() {
    var x;
    document.getElementById("temperature").innerHTML = " C ";
    x = (document.getElementById("high").value - 32) * 5 / 9;
    document.getElementById("low").value = Math.round(x);
}

function convertf() {
    var x;
    document.getElementById("temperature").innerHTML = " F ";
    x = (document.getElementById("high").value * 9 / 5 = 32;
    document.getElementById("low").value = Math.round(x);
}