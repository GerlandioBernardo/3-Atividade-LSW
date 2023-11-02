let nomeEvento= document.querySelector("#evento");
let horaEvento= document.querySelector("#hora");
let lista= document.querySelector("#listaDeEventos"); 
let button= document.querySelector("#button");
function ImprimirEOrdenarArray(){
let arrayEventos=[];
let nome_do_evento= String(nomeEvento.value);
let hora_do_evento= String(horaEvento.value);
    let passaParaArray={
        Evento: nome_do_evento,
        Hora: hora_do_evento,
    }
arrayEventos.push(passaParaArray);
arrayEventos.sort((a,b)=> new Date(a.Hora) < new Date(b.Hora));
arrayEventos.forEach(Element=>{
    let nome= document.createElement("p");
    nome.textContent=`Nome do Evento: ${Element.Evento} `; 
    let horario=document.createElement("p");
    horario.textContent=`Horario: ${Element.Hora}`;
    lista.appendChild(nome);
    lista.appendChild(horario);

})
}
button.addEventListener("click", function(){
    ImprimirEOrdenarArray();
})