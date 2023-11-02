let nome= document.querySelector("#nome")
let documento= document.querySelector("#documento")
let dadosCliente= document.querySelector("#informações_cliente")
let button = document.querySelector("#button");
class ClienteBanco{
    constructor(nome,documento,saldo){
        this.nome=nome;
        this.documento=documento;
        this.saldo=saldo;
    }
    Depositar100(){
        return this.saldo+=100;
    }
    Sacar100(){
        if(this.saldo==0){
            alert("A contra está com o saldo zerado");
        }
        else{
            return this.saldo-=100;
        }
    }
}
let arraz_informacoes_Cliente=[]
let saldo=0
function preencherClasse(){
    let nomeCliente=String(nome.value);
    let documentoCliente=Number(documento.value);
    let informacoesCliente= new ClienteBanco(nomeCliente,documentoCliente,0);
    arraz_informacoes_Cliente.push(informacoesCliente)
}
function criaContra(){
    dadosCliente.textContent=" ";
    arraz_informacoes_Cliente.forEach((v, i)=>{
        let nomeExibir=document.createElement("p");
        let documentoExibir= document.createElement("p");
        let saldoExibir= document.createElement("p");
        let buttonDepositar100=document.createElement("button");
        let buttonSacar100=document.createElement("button");
        buttonDepositar100.textContent="Depositar 100";
        buttonSacar100.textContent="Sacar 100";
        buttonDepositar100.addEventListener("click", function(){
            arraz_informacoes_Cliente[i].Depositar100();
            criaContra();
        })
         buttonSacar100.addEventListener("click", function(){
            arraz_informacoes_Cliente[i].Sacar100();
            criaContra();
         })
            nomeExibir.textContent=`Nome do cliente: ${v.nome}`;
            documentoExibir.textContent=`Documento do cliente: ${v.documento}`;
            saldoExibir.textContent=`Saldo em contra: ${v.saldo}`;
            dadosCliente.appendChild(nomeExibir);
            dadosCliente.appendChild(documentoExibir);
            dadosCliente.appendChild(saldoExibir);
            dadosCliente.appendChild(buttonDepositar100);
            dadosCliente.appendChild(buttonSacar100);

    })
}
button.addEventListener("click", function(){
    preencherClasse();
    criaContra();
})
