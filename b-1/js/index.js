const menus = document.querySelectorAll('.nav > ul > li');
const submenus = document.querySelectorAll('.nav > ul > li > ul');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
      submenus.forEach(submenu => {
        submenu.style.height = '200px';
        submenu.style.transition = '.7s ease';
      })
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
      submenus.forEach(submenu => {
        submenu.style.height = '0px';
        submenu.style.transition = '.7s ease';
      })
  })
})

const slide = document.querySelector('#slide > ul');
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  slide.style.marginLeft = -currentIndex * 100 + '%';
  slide.style.transition = '1s ease';

  if (currentIndex == 3) {
    setTimeout(() => {
      currentIndex = 0;
      slide.style.marginLeft = '0';
      slide.style.transition = '0s';
    }, 1000);
  }
}, 1500);


const notionBtn = document.querySelector('.notiontitle');
const galleryBtn = document.querySelector('.gallerytitle');

const notionContent = document.querySelector('.notion');
const galleryContent = document.querySelector('.gallery');

notionBtn.addEventListener('click', () => {
  galleryContent.style.display = 'none';
  notionContent.style.display = 'block';
})

galleryBtn.addEventListener('click', () => {
  notionContent.style.display = 'none';
  galleryContent.style.display = 'flex';
})


const pop = document.querySelector('.pop');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

pop.addEventListener('click', () => {
  popup.style.display = 'flex';
})

close.addEventListener('click', () => {
  popup.style.display = 'none';
})