// Atividade: Light Mode/Dark Mode
// 1. Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
// 2. Copie o HTML e o CSS deste repositório
// 3. Crie um arquivo chamado scripts.js na sua pasta assets/js
// 4. Selecione os elementos: h1, button, footer e body
// 5. Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original


function darkMode(){
    changeMode()
    changeText()  
}

function changeMode(){
    h1.classList.toggle('dark-mode')
    button.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
}

function changeText(){
    if(h1.classList.contains('dark-mode') && button.classList.contains('dark-mode')){
        h1.innerHTML = 'Light Mode OFF'
        button.innerHTML = 'Light Mode'
        return
    }
    h1.innerHTML = 'Light Mode ON'
    button.innerHTML = 'Dark Mode'
}

const h1 = document.getElementById('page-title')
const button = document.getElementById('mode-selector')
const footer = document.getElementsByTagName('footer')[0]
const body = document.getElementsByTagName('body')[0]

button.addEventListener('click', darkMode)
