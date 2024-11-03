const numeros = [1,2,3,4]

// SPREAD
const novosNumeros = [...numeros, 5]

novosNumeros.push(6)

console.log(numeros)
console.log(novosNumeros)

//--------------------------------------

const rex = {
  nome: 'Rex'
}

const max = { ...rex, idade: 2, familia: 'Carnívoro' }

console.log(rex)
console.log(max)

//--------------------------------------
// REST
const somar = (...numeros) => { return numeros.reduce((a, b) => a + b, 0) }
console.log(somar(1,2,3,4))
