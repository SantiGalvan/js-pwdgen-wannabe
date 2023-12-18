console.log('JS OK')

/*
## Scompongo il problema
- 1 Prendo l'elemento dal DOM
- 2 Chiediamo all'utente Il suo nome
- 3 Chiediamo all'utente il suo cognome
- 4 Chiediamo all'utente il suo colore preferito
- 5 Variabile per generare la password
- 6 Inseriamo il risultato in HTML
*/

// 1
const paragraph = document.getElementById('content');
console.log('id:', paragraph);

// 2
const firstName = prompt('Come ti chiami?', 'Santiago');
console.log('Il tuo nome é', firstName);

// 3
const lastName = prompt('Qual è il tuo cognome', 'Galvan');
console.log('Il tuo cognome é', lastName);

// 4
const color = prompt('Qual è il tuo colore preferito?', 'Blu');
console.log('Il tuo colore preferito é', color);

// 5
const password = firstName + lastName + color + '23';
console.log('La tua password é', password);

// 6
paragraph.innerHTML = `La tua password è:  <strong>${password}</strong>`;