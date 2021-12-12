var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
console.log(txtInput);

function clickHandler() {
    console.log('clicked!');
    var txtInputValue = txtInput.value;
    console.log("input", txtInputValue);
};

btnTranslate.addEventListener('click', clickHandler);
// btnTranslate.addEventListener("click", function clickEventHandler() {
//     console.log("Clicked!")
// })

