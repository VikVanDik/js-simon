// 1. Creare un randomizer che mi stampi in pagina 5 numeri casuali
const messageSpot = document.querySelector('h1')
function randomizer (max) {
  return Math.ceil(Math.random() * max)
}

randomizer (10)

console.log(randomizer(10));

// 2. Inserire in un array i 5 numeri casuali
// 3. Creare una funzione che mandi i prompt all'utente.
// 4. Creare un setTimeout che, passati 5 secondi, faccia scomparire i 5 numeri casuali e faccia partire la funzione con i prompt.
// 5. Inserire i 5 numeri scritti dall'utente in un array e confrontare gli array.
// 6. Comparare gli elementi dei due array e scoprire così quali elementi ha indovinato l'utente.
// 7. Stampare i risultati in pagina.