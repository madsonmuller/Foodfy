const modalIframe = document.querySelector('#modal');
const cards = document.querySelectorAll('.list-recipes__item');


for(let card of cards) {
    card.addEventListener("click", () => {
        let cardImage = card.querySelector(".list-recipes__image").src;
        let cardText = card.querySelector(".list-recipes__title").textContent;
        let cardOwner = card.querySelector(".list-recipes__text").textContent;
        modalIframe.classList.add('maximize');
        modalIframe.querySelector("#modalImage").src = cardImage;
        modalIframe.querySelector("#modalTitle").innerHTML = cardText;
        modalIframe.querySelector("#modalText").innerHTML = cardOwner;
    })
}

document.querySelector('.modal-box__close').addEventListener("click", function(){
    modalIframe.classList.remove('maximize');
});