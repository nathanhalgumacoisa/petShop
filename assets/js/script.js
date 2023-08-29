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
    let tutor = document.getElementById("tutor").value;
    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let nascimento = document.getElementById("data").value;
//criando  variavel pet para colocar as informações dos inputs pro objeto
    let pet = new Pet(tutor, nome, especie, foto, nascimento);
    petsarray.adicionar(pet);
    console.log(petsarray);
    //chamando as functions
    limparCampos();
    mensagemDeErro()
    arrumarData()
    mostrarCadastro()
    algumInputVazio()
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
//criação da function algumInputVazio
function algumInputVazio(){
    let tutor = document.getElementById("tutor").value;
    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let nascimento = document.getElementById("data").value;
    if(tutor == "" || nome == "" || especie == "" || foto == "" || nascimento == ""){
        mensagemDeErro("Preencha todos os campos");
        return;
    }else{
        mostrarCadastro();
    }
}
//criação da function mostrarCadastro para  colocar as  informações no html
function mostrarCadastro(){
        let html = "";
        petsarray.forEach((pet)=> {
            html += `
                <div id="cadastro-pet">
                    <h3>Pet: ${pet.nome}</h3>
                    <p>Tutor: ${pet.tutor}</p>
                    <p>Especie: ${pet.especie}</p>
                    <p>Idade: ${pet.idade}<p>
                    <p>Data de nascimento: ${arrumarData(pet.nascimento)}</p>
                    <img src="${pet.foto}"
                </div>
            `;
        });
        document.getElementById("content-container").innerHTML = html;
        console.log(html);
    }
