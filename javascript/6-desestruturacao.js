const frutas = ['laranja', 'banana', 'uva']

let [fruta1, , fruta3, fruta4] = frutas

//console.log(frutas)
//console.log(fruta1)
//console.log(fruta3)

const pessoa = {
  nome: 'João',
  idade: 20,
  pais: 'Brasil',
  idioma: 'Português'
}

let { n, idioma } = pessoa

console.log(n)
console.log(idioma)


const localidade = (pessoa) => `Você mora no ${pessoa.pais} e fala ${pessoa.idioma}`
console.log( localidade(pessoa) )


