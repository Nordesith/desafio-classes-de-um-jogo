class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){

        let tipoAtaque = [
          {classe: "mago", ataque: "magia"},
          {classe: "guerreiro", ataque: "espada"},
          {classe: "monge", ataque: "artes marciais"},
          {classe: "ninja", ataque: "shuriken"}
        ];
        
        let ataque;
        for(let i = 0; i < tipoAtaque.length; i++){
          if(this.tipo == tipoAtaque[i].classe){
            ataque = tipoAtaque[i].ataque;
          }
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }


}

let goku = new heroi("Goku", 35, "monge");
goku.atacar();

let merlin = new heroi("Merlin", 60, "mago")
merlin.atacar();

let zoro = new heroi("Zoro", 21, "guerreiro");
zoro.atacar();

let naruto = new heroi("Naruto", 18, "ninja");
naruto.atacar();