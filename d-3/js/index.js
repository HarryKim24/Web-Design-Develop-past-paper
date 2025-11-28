const menus = document.querySelectorAll('.nav > ul > li');
const submenus = document.querySelectorAll('.nav > ul > li > ul');
const header = document.querySelector('#header');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    header.classList.add('on');
    submenus.forEach(submenu => {
      submenu.style.display = 'flex';
    })
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    header.classList.remove('on');
    submenus.forEach(submenu => {
      submenu.style.display = 'none';
    })
  })
})


const slides = document.querySelectorAll('#main > .slider > .slide');
let currentIndex = 0;
slides.forEach(slide => {
  slide.style.opacity = '0';
})
slides[0].style.opacity = '1';

setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = '0';
  slides[nextIndex].style.opacity = '1';
  currentIndex = nextIndex;
}, 1500);



const notionBtn = document.querySelector('.notion-gallery .buttonbox .notionBtn');
const galBtn = document.querySelector('.notion-gallery .buttonbox .galBtn');
const notionBox = document.querySelector('.notion-gallery .contentbox .notion');
const galBox = document.querySelector('.notion-gallery .contentbox .gallery');

notionBtn.addEventListener('click', (e) => {
  e.preventDefault();

  galBtn.classList.remove('active')
  notionBtn.classList.add('active');
  galBox.style.display = 'none';
  notionBox.style.display = 'flex';
})

galBtn.addEventListener('click', (e) => {
  e.preventDefault();

  galBtn.classList.add('active')
  notionBtn.classList.remove('active');
  notionBox.style.display = 'none';
  galBox.style.display = 'flex';
})

const popContent = document.querySelector('.popcontent');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');

popContent.addEventListener('click', (e) => {
  e.preventDefault();

  popup.style.display = 'flex';
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  popup.style.display = 'none';
})