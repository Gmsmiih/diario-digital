console.log("script loaded!");


const button= document.getElementById("add-post");

button.addEventListener("click", function() {
   formulario.classList.remove("hidden");
});

const feed= document.getElementById("feed");

button.addEventListener("click", function() {
    alert("Deu certo!");
});

const formulario= document.getElementById("form");

formulario.classList.remove("hidden");