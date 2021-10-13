const $shareBtn = document.querySelector('.person__share');
const $sharePopupMobile = document.querySelector('.share__popup-mobile');
const $sharePopup = document.querySelector('.share__popup');


$shareBtn.addEventListener('click', function () {
    console.log('click');
    $sharePopup.classList.toggle('popup');
    $sharePopupMobile.classList.toggle('popup-mobile');
});
