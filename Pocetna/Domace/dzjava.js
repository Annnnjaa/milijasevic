function fun(x) {
    switch (x) {
        //pas
        case 1: window.open("pas.html", "", "width=300px, height=200px,left=100px, top=800px"); break;
        case 6: document.getElementsByTagName("audio")[0].play(); break;
        case 11: document.getElementsByTagName("audio")[0].pause();
            document.getElementsByTagName("audio")[0].currentTime = 0; break;
            //pace
        case 2: window.open("pace.html", "", "width=300px, height=200px,left=300px, top=800px"); break;
        case 7: document.getElementsByTagName("audio")[1].play(); break;
        case 12: document.getElementsByTagName("audio")[1].pause();
            document.getElementsByTagName("audio")[1].currentTime = 0; break;
            //macka
        case 3: window.open("macka.html", "", "width=300px, height=200px,left=450px, top=800px"); break;
        case 8: document.getElementsByTagName("audio")[2].play(); break;
        case 13: document.getElementsByTagName("audio")[2].pause();
            document.getElementsByTagName("audio")[2].currentTime = 0; break;
            //petao
        case 4: window.open("pile.html", "", "width=300px, height=200px,left=550px, top=800px"); break;
        case 9: document.getElementsByTagName("audio")[3].play(); break;
        case 14: document.getElementsByTagName("audio")[3].pause();
            document.getElementsByTagName("audio")[3].currentTime = 0; break;
            //krava
        case 5: window.open("krava.html", "", "width=300px, height=200px,left=700px, top=800px"); break;
        case 10: document.getElementsByTagName("audio")[4].play(); break;
        case 15: document.getElementsByTagName("audio")[4].pause();
            document.getElementsByTagName("audio")[4].currentTime = 0; break;
    }
}