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
const arrNumUser = []
function promptSend (){
  const firstNum = prompt ('inserisci qui il primo numero della lista')
  arrNumUser.push(`${firstNum}`)
  const secondNum = prompt ('inserisci qui il secondo numero della lista')
  arrNumUser.push(`${secondNum}`)
  const thirdNum = prompt ('inserisci qui il terzo numero della lista')
  arrNumUser.push(`${thirdNum}`)
  const fourthNum = prompt ('inserisci qui il quarto numero della lista')
  arrNumUser.push(`${fourthNum}`)
  const fifthNum = prompt ('inserisci qui il quinto numero della lista')
  arrNumUser.push(`${fifthNum}`)
}


// 5. Creare un setTimeout che, passati 5 secondi, faccia scomparire i 5 numeri casuali e faccia partire la funzione con i prompt.
setTimeout(function(){
  messageSpot.innerHTML = ``
}, 5000)


const arrNumFound = []
const result = document.getElementById('result')
setTimeout(function(){
  promptSend ()
  console.log(arrNumUser);
  let counter = 0
  let c = 0
  while (c<5){
    // 6. Confrontare i due array e vedere se all'interno di uno ci sono gli elementi dell'altro.
    if (arrNumRandom.includes(arrNumUser[c])) {
      const numFound = arrNumUser[c]
      arrNumFound.push(numFound)
      counter++
      result.innerHTML = `Hai indovinato ${counter} numero/i su 5. <br>`
    }
    c++
  }
  console.log(counter);
  console.log(arrNumFound);
  result.innerHTML += arrNumFound.join(' - ')
}, 5100)






// 7. 
// 8. Stampare i risultati in pagina.