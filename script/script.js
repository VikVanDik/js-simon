// 1. Creare un randomizer che mi crei 5 numeri casuali
const messageSpot = document.querySelector('h1')
function randomizer (max) {
  return Math.ceil(Math.random() * max)
}

// 2. Inserire in un array i 5 numeri casuali
const arrNumRandom = []
for (let i = 0; i < 5; i++) {
  let randomNum = randomizer(100)
  console.log(randomNum);
  arrNumRandom.push(`${randomNum}`)
}
console.log(arrNumRandom);

// 3. Stampare in pagina i 5 numeri
messageSpot.innerHTML = arrNumRandom.join(' - ')

// 4. Creare una funzione che mandi i prompt all'utente.
// 5. Creare un setTimeout che, passati 5 secondi, faccia scomparire i 5 numeri casuali e faccia partire la funzione con i prompt.
// 6. Inserire i 5 numeri scritti dall'utente in un array e confrontare gli array.
// 7. Comparare gli elementi dei due array e scoprire così quali elementi ha indovinato l'utente.
// 8. Stampare i risultati in pagina.