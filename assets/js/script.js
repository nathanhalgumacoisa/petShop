//começando com a class Pet
class Pet{
    constructor(tutor, nome, especie, foto, data){
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.data = data;
    }
}
//criando a class ListaPet  para criar o parametro do array
class ListaPets{
    constructor(){
        this.petsarray = [];
    }
    adicionar(pet){
        this.petsarray.push(pet);
    }
}
