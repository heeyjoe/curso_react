class Animal {
  constructor(f){
    this.familia = f
  }

  andar = () => 'andando ...'
}


class Cachorro extends Animal{
  constructor(n,i){
    super('Carnívoros')
    this.nome = n
    this.idade = i
  }
  
  latir = () =>`${this.nome}: au! au!`
}

let rex = new Cachorro('Rex', 2)
console.log(rex)
console.log(rex.latir())

let max = new Cachorro('Max', 1)
console.log(max)
console.log(max.latir())
console.log(max.andar())
console.log(max.familia)
