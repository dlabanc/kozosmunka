var tomb = [];


function feltolt() {
    var alsohatar = Number(document.getElementById("also").value);
    var felsohatar = Number(document.getElementById("felso").value);
    console.log(alsohatar + felsohatar);
    var ertek = document.getElementById("adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * (felsohatar-alsohatar)) + alsohatar; //1 és 10 közötti egész számok generálása
    }
}

function paros() {
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            document.getElementById("paros").innerHTML += tomb[i]+", ";
        }

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

}



function init() {
    console.log("Bejelentkeztem");
    console.log(document.getElementById("adat").value);
    document.getElementById("szamol").addEventListener("click", dolgozz);
}

window.addEventListener("load", init);

