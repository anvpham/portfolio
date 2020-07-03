let name = document.getElementById('name');
let title = document.getElementById('title');

setInterval(() => {
    name.style.color = '#8c33ff';
    title.style.color = '#8c33ff';
}, 1300);

setInterval(() => {
    name.style.color = 'white';
    title.style.color = 'white';
}, 2600);