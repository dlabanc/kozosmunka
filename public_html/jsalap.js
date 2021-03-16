var tomb = [];

function feltolt() {
    var ertek = document.getElementById("adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10) + 1; //1 és 10 közötti egész számok generálása
    }
}
function ötteloszthato(){
  feltolt();
  otteloszhato=0;
    for (var i = 0; i < tomb.length; i++) {
      if (tomb %5=== 0) {
          otteloszhato+=1;
}

    }
    document.getElementById("oszthato").innerHTML += tomb + "<br>ötteloszthatok: " +otteloszhato ;
}

function dolgozz() {

    feltolt();
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("szoveg").innerHTML += tomb + "<br>Az összeg: " + osszeg;
    ötteloszthato();
}
function init() {
    console.log("Bejelentkeztem");
    console.log(document.getElementById("adat").value);
    document.getElementById("szamol").addEventListener("click", dolgozz);
}

window.addEventListener("load", init);

