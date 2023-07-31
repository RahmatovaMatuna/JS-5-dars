/*  localStorage(mahalliy ombor) */

/*localStorage.setItem('ism','Madina')*/
/*localStorage.setItem('familya','Abdullajonova')*/
/*localStorage.setItem('yoshi','18 yoshda')*/
/*localStorage['ism'] = 'Muzdalifa';*/
/*localStorage['familya'] = 'Raxmatova';*/
/*localStorage.removeItem('ism')*/
/*localStorage.removeItem('familya')*/
/*localStorage.removeItem('yoshi')*/
/*localStorage.clear();*/
/*let uningIsmi = localStorage.getItem('ism')*/
/*let uningFamilyasi = localStorage.getItem('familya')*/
/*let uningYoshi = localStorage.getItem('yoshi')*/
/*console.log(uningIsmi,uningFamilyasi,uningYoshi)*/


/* HTTPS request (https so'rovlari) */

/*let sorov = new XMLHttpRequest();*/
/*sorov.open('get','https://getty.uz/serverdan/malumot/olish');*/
/*sorov.send();*/
/*sorov.onload = function (){
    console.log(sorov.responseText)
}*/


/* JSON in JS */

/*let jsFile = {'ism':'Barno','yoshi':15}*/
/*let jsonFile = '{"ism": "Aida","yoshi":2}';*/
/*console.log(JSON.stringify(jsFile))*/      /* JSni JSONga aylantirish */
/*console.log(JSON.parse(jsonFile)) */      /* JSONni JSga aylantirish */



/*let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json');
sorov.send();
sorov.onload = function (){
    console.log(JSON.parse(sorov.responseText));
}*/
let sorov = new XMLHttpRequest();
sorov.open('get','jsFile.js');
sorov.send();
sorov.onload = function (){
    console.log(JSON.stringify(sorov.responseText));
}







