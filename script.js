const arrow = document.getElementById("features-arrow");
const arrow1 = document.getElementById("company-arrow");
const close = document.querySelector(".close-menu");
const open = document.querySelector(".open-menu");
const arrows = document.getElementById("arrow-features");
const arrows1 = document.getElementById("arrow-company");

arrow.addEventListener('click', function(){
    const element = document.querySelector(".content-features");
    element.classList.toggle('close-features-dropdown');
    arrow.classList.toggle('arrow-open');
});
arrow1.addEventListener('click', function(){
    const element1 = document.querySelector(".company-dropdown");
    element1.classList.toggle('open-company-dropdown');
    arrow1.classList.toggle('arrow-open')
});
close.addEventListener('click', function(){
    const collapsed = document.querySelector('.collapsed-menu');
    collapsed.style.display = 'none';
    const dark = document.querySelector('.dark-overlay');
    dark.style.backgroundColor = 'white';
});
open.addEventListener('click', function(){
    const opened = document.querySelector('.collapsed-menu');
    opened.style.display = 'block';
    const dark = document.querySelector('.dark-overlay');
    dark.style.backgroundColor = 'rgba(0, 0, 0, 50%)';
});
arrows.addEventListener('click', function(){
    const elements = document.querySelector(".content-1");
    elements.classList.toggle('show-content-1');
    arrows.classList.toggle('arrow-open');
});
arrows1.addEventListener('click', function(){
    const elements1 = document.querySelector(".content-2");
    elements1.classList.toggle('show-content-2');
    arrows1.classList.toggle('arrow-open');
});