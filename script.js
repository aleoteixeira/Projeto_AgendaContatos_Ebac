function adicionarContato() {
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  if (nome && telefone) {
    var tabela = document.getElementById("contatosAdiciona");
    var novaLinha = tabela.insertRow();

    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;

    
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
