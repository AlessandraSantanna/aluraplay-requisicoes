import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca =await conectaApi.buscaVideo(dadosDePesquisa);

    console.log(busca);

const lista= document.querySelector("[data-lista]");
busca.forEach(elemento =>lista.appendChild (
    constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))); 
}

const botaoDePesquisa= document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento=>buscarVideo(evento)) 