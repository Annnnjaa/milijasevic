function fun(x) {
    var url = "https://naslovi.net/vremenska-prognoza/" + x;
    document.getElementsByTagName("iframe")[0].src = url;
    switch (x) {
        case "beograd": window.open("beograd.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "nis": window.open("nis.html", "", "width=400px, height=300px,top=600px, left=900px"); break;
        case "valjevo": window.open("valjevo.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "bor": window.open("bor.html", "", "width=400px, height=300px,top=600px, left=900px"); break;
        case "pancevo": window.open("pancevo.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "subotica": window.open("subotica.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "vranje": window.open("vranje.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "ruma": window.open("ruma.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "cacak": window.open("cacak.html", "", "width=400px,height=300px, top=600px, left=900px"); break;
        case "jagodina": window.open("jagodina.html", "", "width=400,height=300px, top=600px, left=900px"); break;
    }
}