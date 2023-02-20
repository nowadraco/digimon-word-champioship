// Seleciona todos os elementos ul que contêm listas
var listas = document.querySelectorAll("ul > li > ul");

// Adiciona um manipulador de eventos de clique a cada lista
listas.forEach(function(lista) {
  lista.style.display = "none"; // oculta a lista inicialmente
  lista.parentElement.firstElementChild.addEventListener("click", function() {
    if (lista.style.display === "none") {
      lista.style.display = "block";
    } else {
      lista.style.display = "none";
    }
  });
});
