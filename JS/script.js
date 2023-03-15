//creazione di un array
let shopList =[
    'maglione',
    'pantalone',
    'maglietta',
    'felpa',
    'camicia',
    'cappello'
];
//controllo lunghezza array
console.log(shopList.length);

//recupero il luogo di stampa
const stamp = document.querySelector('ul');
//controllo contenuto
console.log(stamp);

//variabili n° giri stampa
let numberCicles = 0;
let counter=0;

//ciclo stampa
while(numberCicles < shopList.length){
    stamp.innerHTML += `
    <li>${shopList[counter]}</li>
    `;
    numberCicles++;
    counter++;
};
