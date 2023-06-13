var input = prompt("Kérem, írja be az adatot:");
console.log("Bevitel: " + input);








function felfedes(index){
    for(var i=0 ; i<4;i++)
    {document.getElementById("f"+i).style.display="none"}

    if(index==1)
    {document.getElementById("f1").style.display="block";
     document.getElementById("0").checked = false;

}

    if(index==2)
    {document.getElementById("f2").style.display="block";
    document.getElementById("1").checked = false;
}

    if(index==3)
    {document.getElementById("f3").style.display="block";
    document.getElementById("2").checked = false;
}

    if(index==0)
    {document.getElementById("f0").style.display="block";
    document.getElementById("3").checked = false;

}






}




// JavaScript source code

var egyik, masik, muvelet;
function gomb(szam) {
    document.szgprm.kijelzo.value += szam;
}
function szoroz() {
    egyik = document.szgprm.kijelzo.value * 1;
    document.szgprm.kijelzo.value = "";
    muvelet = '*';
}
function oszt() {
    egyik = document.szgprm.kijelzo.value * 1;
    document.szgprm.kijelzo.value = "";
    muvelet = '/';
}
function kivon() {
    egyik = document.szgprm.kijelzo.value * 1;
    document.szgprm.kijelzo.value = "";
    muvelet = '-';
}
function meg() {
    egyik = document.szgprm.kijelzo.value * 1;
    document.szgprm.kijelzo.value = "";
    muvelet = '+';
}
function eredmeny() {
    masik = document.szgprm.kijelzo.value * 1;
    if (muvelet == '+') {
        eredmeny = egyik + masik;
        document.szgprm.kijelzo.value = eredmeny;
    }
    if (muvelet == '-') {
        eredmeny = egyik - masik;
        document.szgprm.kijelzo.value = eredmeny;
    }
    if (muvelet == '*') {
        eredmeny = egyik * masik;
        document.szgprm.kijelzo.value = eredmeny;
    }
    if (muvelet == '/') {
        eredmeny = egyik / masik;
        document.szgprm.kijelzo.value = eredmeny;
    }
}

function negyzet() {
    egyik = document.szgprm.kijelzo.value * 1;
    eredmeny = egyik * egyik;
    document.szgprm.kijelzo.value = eredmeny;
}

function gyok() {
    egyik = document.szgprm.kijelzo.value * 1;
    eredmeny = Math.sqrt(egyik);
    document.szgprm.kijelzo.value = eredmeny;
}