var indexslider = 0;
var opacity = 0;
fun();
function fun() {
    var slika = document.getElementsByTagName("img");
    var indikator = document.getElementsByTagName("span");
    for (var i = 0; i < slika.length; i++) {
        slika[i].style.display = "none";
        indikator[i].style.backgroundColor = "#808080";
    }
    fadein();
    indexslider++;
    if (indexslider > slika.length) indexslider = 1;
    tekst(indexslider);
    slika[indexslider - 1].style.display = "block";
    indikator[indexslider - 1].style.backgroundColor = "#009933";
    setTimeout(fun, 3000);
}
function fadein() {
    document.getElementById("slike").style.opacity = opacity;
    opacity += 0.002;
    if (opacity >= 1) {
        opacity = 0;
        return;
    }
    setTimeout(fadein, 2);
}
function tekst(x) {
    switch (x) {
        case 1: document.getElementById("tekstnaslov").innerHTML = "Стари гитариста";
            document.getElementById("tekstgodina").innerHTML = "1903. - 1904.";
            document.getElementById("tekstopis").innerHTML = "Слика која се чува у Институту за уметност у Чикагу, настала током 1903-04, године једна је од најтужнијих композиција у читавој историји сликарства. Фигура сувоњавог свирача, прекрштених ногу, делује измучено док се овај надвија над својом гитаром браон боје.";
            break;
        case 2: document.getElementById("tekstnaslov").innerHTML = "Дечак са лулом";
            document.getElementById("tekstgodina").innerHTML = "1905.";
            document.getElementById("tekstopis").innerHTML = "Насликана током 1905. године, ова слика која је део приватне колекције одражава Пикасову далеко живахнију 'ружичасту фазу'. Тако, док је портрет дечака насликан техником уља на платну у одећи плаве боје, позадином композиције доминирају окер и розе нијансе. Иако слика не одише претерано срећном атмосфером, испуњена је мноштвом цвећа и то, како у позадини фигуре дечака тако и на његовој глави, у облику цветног венца.";
            break;
        case 3: document.getElementById("tekstnaslov").innerHTML = "Гертруда Стајн";
            document.getElementById("tekstgodina").innerHTML = "1905. - 1906.";
            document.getElementById("tekstopis").innerHTML = "Пикасо и америчка списатељица Стајн постали су пријатељи убрзо након што се сликар преселио у Париз. Чувена по својим недељним салонима на којима је угошћавала људе из различитих  друштва, Штајнова је уживала утицај који је увелико превазилазио књижевни свет. Уз то, списатељица је била и страствени колекционар уметничких дела, те је припадност њеном кружоку представљала одскочну даску за сликарев даљи развој каријере.";
            break;
        case 4: document.getElementById("tekstnaslov").innerHTML = "Госпођице из Авињона";
            document.getElementById("tekstgodina").innerHTML = "1907.";
            document.getElementById("tekstopis").innerHTML = "Настала током 1907. године, ова слика је скоро десет година чекала на своје јавно приказивање 1916. године, којим је шокирала читав уметнички свет. Почев од свог предмета, насликаних жена из бордела, преко раног кубистичког стила којег одликују искривљене фигуре женских тела и њихове очи које готово да сусрећу поглед гледаоца, ефекат који је ово дело изазвало био је без преседана за дотадашњу уметнички сцену.";
            break;
        case 5: document.getElementById("tekstnaslov").innerHTML = "Девојска пред огледалом";
            document.getElementById("tekstgodina").innerHTML = "1932.";
            document.getElementById("tekstopis").innerHTML = "Ако за неко дело може дa  се каже да је типично 'пикасовско' онда је то 'Девојка пред огледалом' из 1932. године,  са својим живахним колоритом, дахом еротицизма и заводљивим облицима који кубизам  претварају у екстрем. Стога није ни чудо што је и сам Пикасо ово своје дело издвајао у односу на друга.";
            break;
    }
}