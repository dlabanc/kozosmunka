var tomb = [];


function feltolt() {
    var alsohatar = Number(document.getElementById("also").value);
    var felsohatar = Number(document.getElementById("felso").value);
    console.log(alsohatar + felsohatar);
    var ertek = document.getElementById("adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * (felsohatar - alsohatar)) + alsohatar; //1 és 10 közötti egész számok generálása
    }
}
function ötteloszthato(){
  feltolt();
  otteloszhato=0;
    for (var i = 0; i < tomb.length; i++) {
      if (tomb %5=== 0) {
          otteloszhato+=1;
}

<<<<<<< HEAD
    }
    document.getElementById("oszthato").innerHTML += tomb + "<br>ötteloszthatok: " +otteloszhato ;
}
=======
function paros() {
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            document.getElementById("paros").innerHTML += tomb[i]+", ";
        }
>>>>>>> 4ea4d365a3baed811c0f8f19b35a9d3fb4bd1f12

    }
}

function dolgozz() {
    feltolt();
    paros();
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

