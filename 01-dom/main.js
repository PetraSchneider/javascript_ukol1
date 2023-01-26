// tady je místo pro náš program
let nadpis = document.querySelector('h1') //Změnit barvu nadpisu
nadpis.style.color = 'yellow';

let odstavec = document.querySelector('p')
odstavec.style.fontSize = '30px'
odstavec.style.fontWeight = 'bold'
odstavec.style.fontStyle = 'italic';

let znemaObrazku = document.querySelector('.obrazek')
znemaObrazku.src = 'pes.jpg';

let posunCtverecek = document.querySelector('.ctverecek')
posunCtverecek.style.marginLeft = '180px'
posunCtverecek.style.transform =  'rotate(90deg)';



/*//Prvni cast
document.querySelector("h1").style.color = "orange";
document.querySelector("h2").style.color = "red";

//Druha cast
document.querySelector(".odstavec").style.fontSize = "20px";

//Treti cast
document.querySelector(".obrazek").src = "assets/pes.jpg";

//Ctvrta cast
document.querySelector(".obrazek").style.marginLeft = "80px";
*/