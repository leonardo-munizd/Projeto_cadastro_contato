//captura o elemento do formulário com o ID....
const form = document.getElementById('form-atividade');
const imgcheck ='<img src="./check.png" alt="Simbolo check"/>';
//Arrays vazios para armazenar, respectivamente, os nomes e números de contatos inseridos pelo usuário. Esses arrays são usados para verificar duplicatas e armazenar os dados temporariamente.
const nomes = [];
const numero = [];
// Uma string que acumula o HTML para as linhas da tabela. Esta variável é usada para construir o conteúdo da tabela dinamicamente.
let linhas = '';
//adiciona um ouvinte de evento que previne o comportamento de envio padrão de envio do formulário e aciona as funções 
form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})
//Função responsável por adicionar uma nova linha com os dados do formulário à variável linhas.
function adicionaLinha (){
    //captura os valores dos campos de entrada 
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    // Verifica se o nome já foi cadastrado
    if (nomes.includes(inputNomeContato.value)) {
        alert(`O nome ${inputNomeContato.value} já foi inserido`);
        return; // Interrompe a execução da função
    }
    // Verifica se o número tem menos de 9 dígitos
    if (inputNumeroContato.value.length <9) {
        alert('O número deve ter pelo menos 9 dígitos');
        return; // Interrompe a execução da função
    }

    // Adiciona o nome e número se ambos os critérios forem atendidos
    nomes.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

    // Constrói uma nova linha da tabela com os valores de entrada
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${imgcheck}</td>`;
    linha += '</tr>';

    linhas += linha;

    // Limpa os campos de entrada
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}
// Função responsável por atualizar o conteúdo da tabela com as novas linhas armazenadas na variável linhas.
function atualizaTabela(){
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML=linhas;
}