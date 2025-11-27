const menus = document.querySelectorAll('.nav > ul > li');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.querySelector('ul').style.height = '130px';
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    menu.querySelector('ul').style.height = '0';
  })
})

let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider > .slide');
slides.forEach(slide => slide.style.opacity = '0');
slides[0].style.opacity = '1';

setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = '0';
  slides[nextIndex].style.opacity = '1';
  currentIndex = nextIndex;
}, 1500);


const notionBtn = document.querySelector('.notionBtn');
const galleryBtn = document.querySelector('.galleryBtn');
const textBox = document.querySelector('.text-image .text');
const galleryBox = document.querySelector('.text-image .images');

notionBtn.addEventListener('click', (e) => {
  e.preventDefault();

  notionBtn.style.backgroundColor = 'yellowgreen';
  galleryBtn.style.backgroundColor = 'midnightblue';
  galleryBox.style.display = 'none';
  textBox.style.display = 'block';
})

galleryBtn.addEventListener('click', (e) => {
  e.preventDefault();

  notionBtn.style.backgroundColor = 'midnightblue';
  galleryBtn.style.backgroundColor = 'yellowgreen';
  textBox.style.display = 'none';
  galleryBox.style.display = 'flex';
})


const popupText = document.querySelector('.text-image .text a');
const closeBtn = document.querySelector('.popup .button button');
const modal = document.querySelector('.popup');

popupText.addEventListener('click', (e) => {
  e.preventDefault();

  modal.style.display = 'flex';
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  modal.style.display = 'none';
})