//Desafio 6 - número 1
const pessoa = {
    nome: "Wellington",
    idade: 18,
    corPreferida: "Azul"
}

//Desafio 6 - número 2

pessoa.filmePreferido = "Velozes e Furiosos"


//Desafio 6 - número 3

delete pessoa.idade


//Desafio 6 - número 4

console.log(pessoa)

//Desafio 6 - número 5, número 6 e número 7

let cadastros = [
    {
        nome: "João",
        idade: 15,
        telefone: 2191234-5678,
        amigos: ["Hiago", "Vanessa", "César", "Augusto"]
   },
    {
        nome: "Amanda",
        idade: 13,
        telefone: 2199999-9999,
        amigos: ["Júlio", "Armando", "Marcelo", "Carlos"]
    },
    {
        nome: "Thiago",
        idade: 17,
        telefone: 2191011-1213,
        amigos: ["Maria Julia", "Douglas", "Pablo", "Simone"]
    },
    {
        nome: "Gabriel",
        idade: 16,
        telefone: 2190401-7689,
        amigos: ["César", "Guilherme", "Tatiane", "Jorge"]
    },
    {
        nome: "Arthur",
        idade: 11,
        telefone: 2191807-8695,
        amigos: ["Thelma", "Priscila", "Daniel", "Bruno"]
    },
]

//Desafio 6 - número 8

console.log(cadastros[0].amigos[1])
console.log(cadastros[1].amigos[1])
console.log(cadastros[2].amigos[1])
console.log(cadastros[3].amigos[1])
console.log(cadastros[4].amigos[1])