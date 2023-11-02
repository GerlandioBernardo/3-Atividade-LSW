let tipo_contra= document.querySelector("#contra");
let senha = document.querySelector("#senha");
let mensagem= document.querySelector("#descrição");
let valor = document.querySelector("#valor");
let exibir_tipo_contra= document.querySelector("#tipo_contra");
let valor_transação = document.querySelector("#valor_transação");
let total_de_saldo= document.querySelector("#total_soma");
let button = document.querySelector("#button");
let total=0;
class Transação{
    constructor(tipo_contra,mensagem,valor){
        this.tipo_contra=tipo_contra;
        this.mensagem=mensagem;
        this.valor=valor;
    }
}
function preencherClasse(){
    let preencher= new Transação(tipo_contra.value,mensagem.value,valor.value);
}
function Adicionar(){
    let valorDigitado=Number(valor.value);
    if(valorDigitado>=0){
        total+=Number(valor.value);
        let p1= document.createElement("p");
        p1.textContent="Contra: " + String(tipo_contra.value);
        let numero= document.createElement("p");
        numero.textContent="Valor da Transação: " + Number(valor.value);
        let totalsoma= document.createElement("p");
        totalsoma.textContent="Saldo: " + total;
        numero.style.backgroundColor="green";
        exibir_tipo_contra.appendChild(p1);
        valor_transação.appendChild(numero);
        total_de_saldo.appendChild(totalsoma);
    }
    if(valorDigitado<0){
        total+=Number(valor.value);
        let p2= document.createElement("p");
        p2.textContent="Contra: " + String(tipo_contra.value);
        let numero2= document.createElement("p");
        numero2.textContent="Valor da Transação: " + Number(valor.value);
        let totalsoma2= document.createElement("p");
        totalsoma2.textContent="Saldo: " + total;
        numero2.style.backgroundColor="brown";
        exibir_tipo_contra.appendChild(p2);
        valor_transação.appendChild(numero2);
        total_de_saldo.appendChild(totalsoma2);

    }

}
button.addEventListener("click", function(){
    preencherClasse();
    Adicionar();
})