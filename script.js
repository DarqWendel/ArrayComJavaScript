
// Como criar uma array/lista vazio

const nomes = [];

// Um array do tipo 'String'

const nomePessoas = ['Alberto', 'Pedro', 'Dárquio', 'Rafa'];

// Um array do tipo 'Number'

// Um array misturada (String, Number)

const anos = [12,'25', 24];

// Adicionando novos elementos ao array

nomes.push('Dárquio Wendel');

// console.log(nomes);

nomes.push('Vale');

// console.log(nomes);

nomes.push(2)

// console.log(nomes);

////////////////
const idade = [0, 2, 4, 6, 8, 10];

// console.log(idade);
// console.log(idade [5]);


// Iterar um array

for( let index = 0; index < idade.length; index++ ) {
   // console.log(idade[index]);
}


idade.forEach(function(value, index, idade){
    console.log(value*3);
})
