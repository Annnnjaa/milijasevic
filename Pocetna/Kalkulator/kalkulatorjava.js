function fun() {
    var x = parseInt(document.getElementById("broj1").value);
    var y = parseInt(document.getElementById("broj2").value);
    var operacija = document.getElementById("operacija").value;
    if ((y == 0) && (operacija = "/"))
        alert("Nije moguce deljenje sa nulom")
    else
        switch (operacija) {
            case "+": document.getElementById("rez").value = x + y; break;
            case "-": document.getElementById("rez").value = x - y; break;
            case "*": document.getElementById("rez").value = x * y; break;
            case "/": document.getElementById("rez").value = (x / y).toFixed(2);
                break;
            default: alert("Niste izabrali operaciju!!!");
        }
    setTimeout(brisi, 2000);
}
function brisi() {
    document.getElementById("broj1").value = "";
    document.getElementById("broj2").value = "";
    document.getElementById("operacija").value = "nista";
    document.getElementById("rez").value = "";
}