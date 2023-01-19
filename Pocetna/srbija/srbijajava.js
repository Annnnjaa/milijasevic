function fun(x) {
    switch (x) {
        case 1:
            window.open("https://sr.wikipedia.org/wiki/%D0%A1%D1%80%D0%B1%D0%B8%D1%98%D0%B0");
            break;
        case 2: document.getElementById("srbijazvuk").play(); break;
        case 3: document.getElementById("srbijazvuk").pause();
            document.getElementById("srbijazvuk").currentTime = 0;
            break;
    }
}