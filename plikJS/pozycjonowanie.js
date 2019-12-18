//gracze
var name1 = "Raczek Piotrowicz"
var name2 = "Piotr Raczkowski"
var name3 = "Czesiek"
//liczba punktów
var liczbaPunktow1 = 30000;
var liczbaPunktow2 = 1700;
var liczbaPunktow3 = 800;
//kolory ramek
var kolor1="green";
var kolor2="red";
var kolor3="purple";
//czas trwania
var czasOdliczania = 3000;
var czasInterval = 30;
// obliczenia skoku punktowego
var dzielnik=czasOdliczania/czasInterval
var skokPunktowy3 = liczbaPunktow3/dzielnik
var skokPunktowy2 = liczbaPunktow2/dzielnik
var skokPunktowy1 = liczbaPunktow1/dzielnik
//ustawienie klawisza "z"
przycisk=90;

//tworzenie paragrafu z nazwa gracza z 1 miejsca
var tab1=document.getElementById('gracz1');
var newText1 = document.createTextNode(name1);
var newP1 = document.createElement("P");
tab1.appendChild(newP1).appendChild(newText1);

//tworzenie paragrafu z nazwa gracza z 2 miejsca
var tab2=document.getElementById('gracz2');
var newText2 = document.createTextNode(name2);
var newP2 = document.createElement("P");
tab2.appendChild(newP2).appendChild(newText2);

//tworzenie paragrafu z nazwa gracza z 3 miejsca
var tab3=document.getElementById('gracz3');
var newText3 = document.createTextNode(name3);
var newP3 = document.createElement("P");
tab3.appendChild(newP3).appendChild(newText3);


//ustawienie zdarzenia pod przyciskiem "z"
var zmienna=1;
   document.addEventListener('keydown', logKey);
   function logKey(e) {
      if(event.keyCode === przycisk){       //ustawienie zdarzenia pod przyciskiem "z"    
       zmienna +=1;
     
       if(zmienna===2){
         document.getElementById("position3").classList.remove('position30');  //zmiana klasy; transcription; pojawienie sie ramek
         document.getElementById("position3").classList.add('position3');
         setTimeout(function(){    // funkcja setTimeout opóźnia o 2 sekundy odliczanie wyniku od pojawiennia sie ramki
           let i = 0;
           const time = setInterval(function() {  //funkcja setInterval; odliczanie punktów o skok punktowy dla miejsca 3 (trzeciego)
              i+=skokPunktowy3;
           document.getElementById('punkty3').textContent=parseInt(i);
             if (i+skokPunktowy3 > liczbaPunktow3) {
               var roznica= i+skokPunktowy3-liczbaPunktow3;
               var skokBezNadwyzki=skokPunktowy3-roznica
               var suma=i+skokBezNadwyzki
               document.getElementById('punkty3').textContent=parseInt(suma)
                   clearInterval(time);
              }
           }, czasInterval);
           },2000);
       }
      if(zmienna===3){
         document.getElementById("position2").classList.remove('position20'); //zmiana klasy; transcription; pojawienie sie ramek
         document.getElementById("position2").classList.add('position2');
         setTimeout(function(){
           let i = 0;
           const time = setInterval(function() {  //funkcja setInterval; odliczanie punktów o skok punktowy dla miejsca 2 (drugiego)
              i+=skokPunktowy2;
           document.getElementById('punkty2').textContent=parseInt(i);
             if (i+skokPunktowy2 > liczbaPunktow2) {
               var roznica= i+skokPunktowy2-liczbaPunktow2;
               var skokBezNadwyzki=skokPunktowy2-roznica
               var suma=i+skokBezNadwyzki
               document.getElementById('punkty2').textContent=parseInt(suma)
                   clearInterval(time);
              }
           }, czasInterval);
           },2000);
      }
      if(zmienna===4){
         document.getElementById("position1").classList.remove('position10'); //zmiana klasy; transcription; pojawienie sie ramek
         document.getElementById("position1").classList.add('position1');
         setTimeout(function(){
           let i = 0;
           const time = setInterval(function() { //funkcja setInterval; odliczanie punktów o skok punktowy dla miejsca 1 (pierwszego)
              i+=skokPunktowy1;
           document.getElementById('punkty1').textContent=parseInt(i);
             if (i+skokPunktowy1 > liczbaPunktow1) {
               var roznica= i+skokPunktowy1-liczbaPunktow1;
               var skokBezNadwyzki=skokPunktowy1-roznica
               var suma=i+skokBezNadwyzki
               document.getElementById('punkty1').textContent=parseInt(suma)
                   clearInterval(time);
              }
           }, czasInterval);
        },2000);
      }
      
   }}
 

   //ustawienie koloru ramki i miejsca
   document.getElementById('ramka1').style.color = kolor1;
   document.getElementById('miejsce1').style.color = kolor1;
   document.getElementById('ramka2').style.color = kolor2;
   document.getElementById('miejsce2').style.color = kolor2;
   document.getElementById('ramka3').style.color = kolor3;
   document.getElementById('miejsce3').style.color = kolor3;


