const fila=[];

function cadastrar(){

const nomePaciente=document.getElementById("nomePaciente");
const tabelaFila=document.getElementById("tabelaFila");

let nome=nomePaciente.value;

if(nome==""){
return;
}

let numero=fila.length+1;

const paciente={
numero:numero,
nome:nome
};
fila.push(paciente);

mostrar();
nomePaciente.value="";
}

function mostrar(){

const tabelaFila=document.getElementById("tabelaFila");

tabelaFila.innerHTML="";

for(let i=0;i<fila.length;i++){

tabelaFila.innerHTML+=`
<tr>
<td>${fila[i].numero}</td>
<td>${fila[i].nome}</td>
</tr>
`;
}
}

function consultar(){

const nomePaciente=document.getElementById("nomePaciente");
const resultado=document.getElementById("resultado");

let nome=nomePaciente.value;

for(let i=0;i<fila.length;i++){

if(fila[i].nome.toLowerCase()==nome.toLowerCase()){

resultado.innerHTML=`
<h3>Paciente encontrado:</h3>
<p><strong>Número:</strong> ${fila[i].numero}</p>
<p><strong>Nome:</strong> ${fila[i].nome}</p>
`;

return;
}
}

resultado.innerHTML="<h3>Paciente não encontrado.</h3>";
}

function alterar(){

const nomePaciente=document.getElementById("nomePaciente");
const alterarNome=document.getElementById("alterarNome");

let nome=nomePaciente.value;

for(let i=0;i<fila.length;i++){

if(fila[i].nome.toLowerCase()==nome.toLowerCase()){

alterarNome.innerHTML=`
<input type="text" id="novoNome" placeholder="Novo nome">
<button onclick="salvar(${i})">Salvar</button>
`;
return;
}
}
}

function salvar(i){

const novoNome=document.getElementById("novoNome");

let nome=novoNome.value;

if(nome!=""){

fila[i].nome=nome;

mostrar();
document.getElementById("alterarNome").innerHTML="";
document.getElementById("nomePaciente").value="";
}
}

function deletar(){
const nomePaciente=document.getElementById("nomePaciente");
let nome=nomePaciente.value;

for(let i=0;i<fila.length;i++){

if(fila[i].nome.toLowerCase()==nome.toLowerCase()){

fila.splice(i,1);

for(let j=0;j<fila.length;j++){

fila[j].numero=j+1;
}

mostrar();
nomePaciente.value="";
return;
}
}
}