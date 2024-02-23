/*
Chiedere all utentequanti  colori vuole stampare
chiedere di inserirli uno per volta 
e stamparli in pagina in una lista 
*/


/*
1 creare un arrey vuoto
2 prompt che salva il numero di colori da stampare
3 creare il ciclo in base al numero dei colori
4 prompt che pusch il colore nella array 
5 inserire in html una lista e inseriamogli con un ciclo dell array dei colori
*/


const listaColori = [];
const numeroEstrazioni = prompt("quanti colori stampiamo");

for (let i = 0; i < numeroEstrazioni; i++) {
  const colore = prompt("Inserisci il colore numero: " + (i + 1) + " su " + numeroEstrazioni)
  listaColori.push(colore);
}

for (let i = 0; i < listaColori.length; i++) {

  document.querySelector("ul").innerHTML += `
  <li>${listaColori[i]} </li>

  `
  
}
console.log(listaColori);


