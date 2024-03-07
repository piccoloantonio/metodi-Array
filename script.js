import { prodotti } from "./prodotti.js";


// FILTER
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pari = array.filter(cercaPari);

function cercaPari(num) {
    return num % 2 == 0;
}

console.log(array);
console.log(pari);


// MAP
const modelli = prodotti.map((prodotto) => {
    return prodotto.modello;
});
console.log(modelli);


// FOREACH
const select = document.createElement('select');
prodotti.forEach((prodotto) => {
    const option = document.createElement('option');
    option.innerHTML = prodotto.modello;
    option.value = prodotto.prezzo;
    select.appendChild(option);
})

document.body.appendChild(select);

select.addEventListener('change', function () {
    alert(`Questo prodotto costa ${this.value} euro`);
})