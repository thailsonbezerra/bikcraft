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
