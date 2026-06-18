
const button= document.getElementById("add-post");

const formulario= document.getElementById("form");

button.addEventListener("click", function() {
   formulario.classList.remove("hidden");
});

const feed= document.getElementById("feed");

const tit = document.getElementById("titulo");

const content = document.getElementById("conteudo");

const date = document.getElementById("data");

const butt = document.getElementById("sent-post");

butt.addEventListener("click", function() {
   alert(tit.value);
   alert(content.value);
   alert(date.value);


});