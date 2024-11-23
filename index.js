let ahref = document.querySelectorAll('a');
let text = document.querySelectorAll('p');
let h1 = document.querySelectorAll('h1');
let header = document.querySelector('header');
let main = document.querySelector('main');
let btn = document.querySelector('.change_theme');
let footer = document.querySelector('footer');
let phoneinput = document.querySelector('.type-phone');
let submButton = document.querySelector('.subm');


btn.addEventListener('click', function() {
    ahref.forEach(function(element) {
        element.style.color = 'white';
    });
    text.forEach(function(element) {
        element.style.color = 'white';
    });
    h1.forEach(function(element) {
        element.style.color = 'white';
    });
    phoneinput.style.border = '2px solid white';
    phoneinput.style.color = 'white';
    submButton.style.backgroundColor = 'white';
    submButton.style.color = 'white';
    header.style.backgroundColor = '#414141'
    main.style.backgroundColor = '#4A4A4A'
    footer.style.backgroundColor = '#414141'
})
