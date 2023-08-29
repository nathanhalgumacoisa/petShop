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
const petsarray = new ListaPets
//criação da primeira function para pegar os dados dos inputs
function criarPet(){
    const tutor = document.getElementById("tutor").value;
    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const foto = document.getElementById("foto").value;
    const data = document.getElementById("data").value;
//criando  variavel pet para colocar as informações dos inputs pro objeto
    const pet = new Pet(tutor, nome, especie, foto, data);
    petsarray.adicionar(pet);
    console.log(petsarray);
    //chamando as functions
    limparCampos()
}
//criação da função limparCampos para... limpar os campos
function limparCampos(){
     document.getElementById("tutor").value = ""
     document.getElementById("nome").value = ""
     document.getElementById("especie").value = ""
     document.getElementById("foto").value = ""
     document.getElementById("data").value = ""
}
