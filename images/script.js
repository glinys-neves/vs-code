const form = document.getElementById("formul");
const nome = document.getElementById("nome");
const numero = document.getElementById("numero");
const data = document.getElementById("datanascimento");
const cartao = document.getElementById("numerocartao");
const mensagem = document.getElementById("mensagem");
const exibirdados = document.getElementById("exibirdados");
const exibirnome = document.getElementById("exibirnome");
const exibirnumero = document.getElementById("exibirnumero");
const exibirdata = document.getElementById("exibirdata");
const  exibircvc = document.getElementById("exibircvc");
const titulo = document.getElementById("titulo");
const titulo2 = document.getElementById("titulo2");
const titulo3 = document.getElementById("titulo3");
const mensagem2 = document.getElementById("mensagem2");
const butao2 = document.getElementById("butao2");
form.addEventListener("submit" , (event) =>{
    event.preventDefault();

    const user = nome.value; 
    const numer = numero.value;
    const date = datanascimento.value;
    const card = numerocartao.value;

    
    exibirnome.textContent = user;
    exibirnumero.textContent = numer;
    exibirdata.textContent = date;
    exibircvc.textContent = card;
    titulo.remove();
    titulo2.remove();
    titulo3.remove();
    butao2.style.display ="block";
    mensagem2.style.display = "block";
    mensagem.style.display = "block";
    form.style.display = "none";
    exibirdados.style.display = "block";
        
})

