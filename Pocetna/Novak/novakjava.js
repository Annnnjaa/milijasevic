var transparentnost = 1;
window.onload = function () {
    document.getElementById("naslov").style.opacity = 1;
}
function fadeout() {
    document.getElementsByTagName("img")[0].style.opacity = transparentnost;
    if (transparentnost <= 0) return;
    transparentnost -= 0.01; //100x
    setTimeout(fadeout, 20); //20ms
}
function fadein() {
    document.getElementsByTagName("img")[0].style.opacity = transparentnost;
    if (trаansparentnost >= 1) return;
    transparentnost += 0.01; //100x
    setTimeout(fadein, 20); //20ms
}