// seleciona o botão
const btn = document.querySelector('btn');

// adiciona evento de clique ao botão
btn.addEventListener('click', () => {
  // adiciona classe "animate" ao botão
  btn.classList.add('animate');

  // remove a classe "animate" após 500ms (tempo da animação)
  setTimeout(() => {
    btn.classList.remove('animate');
  }, 500);
});

function clicar(){
    var d = document.getElementById ('data')
    var o = document.getElementById ('obs')
    var c = document.getElementById ('btn')
    window.alert('Seu agendamento foi concluído com sucesso')
    
} 

var d = document.getElementById ('data')
VarDate = FormDataEvent