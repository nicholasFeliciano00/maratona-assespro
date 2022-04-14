//document

/**
 * document.querySelector("")   => Seleciona um elemento HTML e trás pro JS
 * document.createElement()     => Cria um elemento html novo
 * 
 * elemento.classList           => Mostra a lista de classes do elemento
 * elemento.classList.add()     => Adiciona classes no elemento
 * elemento.append()            => Colocar um novo elemento dentro do elemento selecionado
 * 
 * elemento.innerText           => Muda o texto dentro do elemento
 * elemento.innerHTML           => Muda o HTML dentro do elemento
 */


//Responsabilidade dela é criar um container de post
function createPostContainer(mensagem) {
    const postCreator = document.querySelector(".post_creator");
    const postContainer = document.createElement("div");
    postContainer.classList.add("post_container");

    const profileDiv = createProfileRow();
    const postDescription = createPostDescription(mensagem);
    const postFooter = createPostFooter();


    postContainer.append(profileDiv, postDescription, postFooter);
    // main.append(postContainer);
    postCreator.after(postContainer)
}

function createPostFooter() {
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const numbers = createPostNumber();
    const icons = createPostIcons();

    postRow.append(numbers, icons);

    return postRow;
}

function createPostIcons() {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade_icons");

    //Likes
    const divLikes = document.createElement("div");
    const iconLike = document.createElement("img");
    iconLike.src = "./assets/img/like.png";

    divLikes.append(iconLike);
    divLikes.innerHTML = divLikes.innerHTML + " Like";

    //Comments
    const divComments = document.createElement("div");
    const iconComments = document.createElement("img");
    iconComments.src = "./assets/img/comments.png";

    divComments.append(iconComments);
    divComments.innerHTML = divComments.innerHTML + " Comment"

    //Share
    const divShare = document.createElement("div");
    const iconShare = document.createElement("img");
    iconShare.src = "./assets/img/share.png";

    divShare.append(iconShare);
    divShare.innerHTML = divShare.innerHTML + " Share"



    atividade.append(divLikes, divComments, divShare);

    return atividade;
}

function createPostNumber() {
    const number = document.createElement("div");
    number.classList.add("numbers");

    const numbersLeft = document.createElement("div");
    numbersLeft.classList.add("numbers_left");

    const numbersRight = document.createElement("div");
    numbersRight.classList.add("numbers_right");
    
    const spanComentarios = document.createElement("span");
    const spanCompartilhamentos = document.createElement("span");

    spanComentarios.innerText = "0 Comments";
    spanCompartilhamentos.innerText = "0 Shares"

    numbersRight.append(spanComentarios, spanCompartilhamentos);

    number.append(numbersLeft, numbersRight);

    return number;
}

function createPostDescription(mensagem) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("post_description");

    paragraph.innerText = mensagem

    return paragraph;
}

function createProfileRow() {
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const userProfile = document.createElement("div");
    userProfile.classList.add("user_profile");

    const img = document.createElement("img");
    img.src = "./assets/img/perfil.jpeg"

    const info = document.createElement("div");
    const usuario = document.createElement("p");
    const span = document.createElement("span");

    usuario.innerText = "Oswaldo Lima";
    span.innerText = "14 de Abril às 19:30";

    info.append(usuario, span);
    userProfile.append(img, info);
    postRow.append(userProfile);

    return postRow;
}

/*
    Event Listener => Coloca um ouvinte para escutar o evento.

    elemento.addEventListener("click", function(evento) {})

    evento.target => o alvo do evento
*/

const postInput = document.querySelector("#post_input");
postInput.addEventListener("keydown", function(evento) {
    //evento.code for igual a "Enter"
    //evento.code for igual a "NumpadEnter"

    if (evento.code === "Enter" || evento.code === "NumpadEnter") {
        const texto = evento.target.value;

        createPostContainer(texto);

        evento.target.value = ""
    }
    
})