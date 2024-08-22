/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.

BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato
*/

console.log('JS OK');
//palindroma

//creo una funzione dove
function isPalindrome(word){
//rendo la stringa tutto in minuscolo nel caso servisse
const lowerWord = word.toLowerCase();
//specchio la parola
const mirrorWord = lowerWord.split('').reverse().join('');
//confronto la parola specchiata con la prima inserita
return lowerWord === mirrorWord;
}

//faccio inserire una aprola all'utente
const userWord = prompt('inserisci una parola:');

//vedo se la parola è palindroma
let message = 'la parola non è palindroma';

if (isPalindrome(userWord)) message = 'la parola è palindroma';

console.log(message);