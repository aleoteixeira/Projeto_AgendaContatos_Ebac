// Função chamada adicionarContato
function adicionarContato() {
  // Pega os valores dos campos de entrada com os IDs "nome" e "telefone"
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  // Verifica se ambos os campos estão preenchidos
  if (nome && telefone) {
    // Obtém a referência da tabela com o ID "contatosAdiciona"
    var tabela = document.getElementById("contatosAdiciona");
    // Adiciona uma nova linha à tabela
    var novaLinha = tabela.insertRow();

    // Insere células na nova linha para o nome e telefone
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    // Define o conteúdo das células como os valores obtidos dos campos de entrada
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;

    // Limpa os campos de entrada após adicionar o contato

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
  } else {
    // Se algum dos campos estiver vazio, exibe um alerta
    alert("Por favor, preencha todos os campos.");
  }
}
