const menus = document.querySelectorAll('.nav > ul > li');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.querySelector('.submenu').style.height = '200px';
    menu.querySelector('.submenu').style.transition = '.7s ease'
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () => {
    menu.querySelector('.submenu').style.height = '0';
    menu.querySelector('.submenu').style.transition = '.7s ease'
  })
})


let currentIndex = 0;
const slide = document.querySelector('#slide > ul');

setInterval(() => {
  currentIndex++;
  slide.style.marginLeft = -currentIndex * 100 + '%';
  slide.style.transition = '1s ease';

  if (currentIndex == 3) {
    setTimeout(() => {
      slide.style.marginLeft = '0';
      slide.style.transition = '0s';
      currentIndex = 0;
    }, 1000);
  }
}, 1500);


const popBtn = document.querySelector('#contents .notice ul li .pop');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup .close');

popBtn.addEventListener('click', (e) => {
  e.preventDefault();

  popup.style.display = 'block';
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  popup.style.display = 'none';
})

