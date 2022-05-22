const links = document.querySelectorAll(".header-menu a");

const url = location.href;

function ativarLink(link) {
  const href = link.href;
  url.includes(href) ? link.classList.add("ativo") : null;
}
links.forEach(ativarLink);

const parametros = new URLSearchParams(location.search);

function checkedProduto(parametro) {
  const produto = document.querySelector(`#${parametro}`);
  if (produto) produto.checked = true;
}

parametros.forEach(checkedProduto);

const buttonPerguntas = document.querySelectorAll(".lista-perguntas button");

function ExpandirPergunta(pergunta) {
  //MINHA LOGICA
  const valorExpanded = pergunta.target.attributes["aria-expanded"].value;
  const valorControls = pergunta.target.attributes["aria-controls"].value;
  const resposta = document.getElementById(valorControls);
  if (valorExpanded === "true") {
    pergunta.target.attributes["aria-expanded"].value = false;
    resposta.classList.remove("ativo");
  } else {
    pergunta.target.attributes["aria-expanded"].value = true;
    resposta.classList.add("ativo");
  }
}

buttonPerguntas.forEach((button) => {
  button.addEventListener("click", ExpandirPergunta);
});

const imgPrimaria = document.querySelector(".bicicleta-imagem img");
const imgOutras = document.querySelectorAll(".bicicleta-imagem-outros img");

function handleImgPrimaria(event) {
  const srcImgPrimaria = imgPrimaria.getAttribute("src");
  const srcImg = event.srcElement.getAttribute("src");

  const media1000 = matchMedia("(min-width:940px)").matches;
  const media800 = matchMedia("(max-width:800px)").matches;
  if (media1000 || media800) {
    imgPrimaria.setAttribute("src", srcImg);
    event.srcElement.setAttribute("src", srcImgPrimaria);
  }
}

imgOutras.forEach((img) => {
  img.addEventListener("click", handleImgPrimaria);
});
