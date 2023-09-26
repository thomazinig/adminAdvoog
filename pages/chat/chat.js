const mensagens = document.getElementById("mensagens");
const chat = document.getElementById("chat");
function removerClasseChat() {
  chat.classList.remove("chat-mobile");
  mensagens.classList.toggle("mensagens-mobile");
}
function removerClasseMensagens() {
  mensagens.classList.remove("mensagens-mobile");
  chat.classList.toggle("chat-mobile");
}
