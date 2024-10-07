const imagemShow = document.querySelector(".slide");
const menuHamburguer = document.querySelector(".container-menu-hamburgue");
const piperMenu = document.querySelectorAll(".piper-menu");
const main = document.querySelector("main");
const div = document.createElement("div");

menuHamburguer.addEventListener("click", (e) => {
  piperMenu[0].classList.toggle("hamburgerPiece1");
  piperMenu[1].classList.toggle("hamburgerPiece2");
  piperMenu[2].classList.toggle("hamburgerPiece3");
  if (piperMenu[0].classList.contains("hamburgerPiece1")) {
    div.classList.add("menuOpition");
    main.appendChild(div);
  } else {
    div.remove();
  }
  const botãoProjeto = document.querySelector(".botão-menu");
  botãoProjeto.addEventListener("click", () => {
    piperMenu[0].classList.remove("hamburgerPiece1");
    piperMenu[1].classList.remove("hamburgerPiece2");
    piperMenu[2].classList.remove("hamburgerPiece3");
    main.classList.add("main");
    main.innerHTML = "";
    carregaProjetos();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const containerNeve = document.querySelector(".container-neve");
  for (let i = 0; i <= 100; i++) {
    const div = document.createElement("div");
    div.classList.add("floco-de-neve");
    containerNeve.append(div);
  }
  flocoDeNeve();
});

function flocoDeNeve() {
  const flocos = document.querySelectorAll(".floco-de-neve");
  flocos.forEach((floco, index) => {
    floco.style.setProperty("--duracao", getRandomDuration());
    floco.style.setProperty("--atraso", getRandomDelay(index));
  });

  function getRandomDuration() {
    return Math.floor(Math.random() * 18 + 1) + "s";
  }

  function getRandomDelay(index) {
    return -Math.floor(Math.random() * index) + "s";
  }
}

function carregaProjetos() {
  const bancoProjetos = [
    { titulo: "Naruto Project", link: "https://projetonaturo.web.app/" },
    { titulo: "Store Games", link: "https://store-games-c8a0a.web.app/" },
    { titulo: "All List", link: "https://tudo-list-58b64.web.app/" },
    {
      titulo: " IMC Calculator",
      link: "https://calculadoraimc-61af7.web.app/",
    },
    {
      titulo: "Countdown of the Year",
      link: "https://contagemregressiva-aa313.web.app/",
    },
    { titulo: "Filme Flix", link: "https://filmesflix-f574e.web.app/" },
    { titulo: "Music Player", link: "https://playdemusica-b178a.web.app/" },
    { titulo: "CPF Validator", link: "https://validadorcpf.web.app" },
    { titulo: "Personal Assistant", link: "https://selenia-e972b.web.app/" },
    { titulo: "Api CEP", link: "https://apicep-b57cb.web.app/" },
    { titulo: "Game Browser", link: "https://game-navegador.web.app/" },
  ];

  bancoProjetos.forEach((itemProjeto) =>
    criaProjetos(itemProjeto.titulo, itemProjeto.link)
  );
}

div.innerHTML = `<button class="botão-menu">Projetos</button>`;

function criaProjetos(titulo, link) {
  const div = document.createElement("div");
  div.classList.add("div-molde-projetos");
  div.innerHTML = `
    <iframe class="iframe" src="${link}"></iframe>
    <div class="descrição-projeto">
   <h2>${titulo}</h2>
    <a href="${link}" target="_blank" ><button class="projeto-button">See Project</button></a>
 </div>
   `;
  main.appendChild(div);
}

const fotos = [
  { imagem: "assets/img/1.jpg" },
  { imagem: "assets/img/2.jpg" },
  { imagem: "assets/img/3.jpg" },
];

let currentIndex = 0;

function mudaFotoShow(imagem) {
  imagemShow.setAttribute("src", imagem);
}

function mostrarProximaImagem() {
  mudaFotoShow(fotos[currentIndex].imagem);
  currentIndex = (currentIndex + 1) % fotos.length;
}

mostrarProximaImagem();

setInterval(mostrarProximaImagem, 2000);
