function fun() {
    var x = parseInt(document.getElementsByClassName("tekst")[0].value);
    var y = parseInt(document.getElementsByClassName("tekst")[1].value);
    document.getElementsByTagName("input")[3].value = x + y;
}