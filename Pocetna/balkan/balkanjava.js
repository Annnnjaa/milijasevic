function fun(x) {
    switch (x) {
        case 1:
            var x = window.open("", "", "height=200px, width=400px,top=500,left=500" );
        x.document.write("<p><b>Naziv drzave :</b> Republika Srbija</p>");
            x.document.write("<p><b>Glavni grad :</b> Beograd</p>");
            x.document.write("<p><b>Broj stanovnika :</b> 9.024.734</p>");
            x.document.write("<p><b>Povrsina :</b> 88,361km<sup>2</sup></p>");
            x.document.body.style.color = "#ffffff";
            x.document.body.style.backgroundColor = "#ff0000";
            break;
        case 2: document.getElementsByTagName("audio")[0].play(); break;
        case 3: document.getElementsByTagName("audio")[0].pause();
            document.getElementsByTagName("audio")[0].currentTime = 0;
            break;
    }
}