//começando com a class Pet
class Pet{
    constructor(tutor, nome, especie, foto, nascimento){
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.nascimento = nascimento;
    }
    criarIdade(){
        let hoje = new Date();
        let nascimento = new Date(this.nascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        let mes = hoje.getMonth() - nascimento.getMonth();
        if(mes < 0 || (mes === 0 && hoje.getDate()< nascimento.getDate())){
            idade--;
        }
        return idade;
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
    const nascimento = document.getElementById("data").value;
//criando  variavel pet para colocar as informações dos inputs pro objeto
    const pet = new Pet(tutor, nome, especie, foto, nascimento);
    petsarray.adicionar(pet);
    console.log(petsarray);
    //chamando as functions
    limparCampos();
}
//criação da function limparCampos para... limpar os campos
function limparCampos(){
     document.getElementById("tutor").value = "";
     document.getElementById("nome").value = "";
     document.getElementById("especie").value = "";
     document.getElementById("foto").value = "";
     document.getElementById("data").value = "";
}
//criação da function arrumarData para deixar as datas no padrão br
function arrumarData(data){
    let dataGringa = data.split("-");
    let dataBr = dataGringa[2] + "/" + dataGringa[1] + "/" + dataGringa[0];
    return dataBr
}
//criação da function mensagemDeErro para aparecer
function mensagemDeErro(msg){
    document.getElementById("erro").innerHTML = msg;
    document.getElementById("erro").classList.remove("hidden");
    setTimeout(function(){
        document.getElementById("erro").classList.add("hidden")
    },4000);
}
//criação da function mostrarCadastro para  colocar as  informações no html
function mostrarCadastro(){

}