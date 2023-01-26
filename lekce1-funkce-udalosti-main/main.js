// tady je místo pro náš program



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function napsatvysledek(){
  document.querySelector('#vysledek').innerHTML = secti(4, 5)
}

function secti(a, b) {
  let c = a + b;
  return c;
}
/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = 'green';
  ctverecek.innerHTML = 'gratulace'
  console.log('Gratuluji k splnění této funkce!')
}
