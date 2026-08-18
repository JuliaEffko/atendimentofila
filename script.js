const fila = [];

function cadastrar() {
const inputNome = document.getElementById("nomePaciente");
const inputId = document.getElementById("posicaoPaciente");

let nome = inputNome.value;
let id = Number(inputId.value);

const pacienteData = {
    id: id,
    nome: nome
};
 
 fila.push(pacienteData);

atualizarTela();

inputNome.value = "";
inputId.value = "";

}

 function atualizarTela() {
const tabela = document.getElementById("tabelaFila");

 tabela.innerHTML = "";
fila.forEach((paciente, index) => {
    tabela.innerHTML += `
        <tr>
            <td>${paciente.id}</td>
            <td>${paciente.nome}</td>
        </tr>
    `;
 });

}

 function consultar() {
 const inputId = document.getElementById("posicaoPaciente");
const resultado = document.getElementById("resultado");

let id = Number(inputId.value);

let paciente = fila[id];

resultado.innerHTML = `
    <h3>Paciente encontrado:</h3>
    <p>ID: ${paciente.id}</p>
    <p>Nome: ${paciente.nome}</p>
`;

}

function alterar() {
 const inputNome = document.getElementById("nomePaciente");
 const inputId = document.getElementById("posicaoPaciente");

let id = Number(inputId.value);
  let nome = inputNome.value;

 fila[id].nome = nome;

atualizarTela();

inputNome.value = "";
inputId.value = "";

}

function deletar() {
 const inputId = document.getElementById("posicaoPaciente");

 let id = Number(inputId.value);

fila.splice(id, 1);

 atualizarTela();

inputId.value = "";

}