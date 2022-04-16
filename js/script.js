const burgerBtn = document.querySelector('.burger-btn');
const navigation = document.querySelector('.nav');
const allNavigationItem = document.querySelectorAll(`.nav__item`);
const navBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const showNav = () => {
    navigation.classList.toggle('nav--active');
    navBars.classList.remove('black-bars-color')
    allNavigationItem.forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('nav--active')
        })
    })
}

const burgerColor = () => {
    let scrollSection = window.scrollY;

    allSections.forEach(section => {
            if (section.classList.contains('white') && section.offsetTop <= scrollSection + 60) {
                navBars.classList.add('black-bars-color')
            } else if (!section.classList.contains('white') && section.offsetTop <= scrollSection + 60) {
                navBars.classList.remove('black-bars-color')
            }
        }
    )
}

const showYear = () => {
    let currentYear = (new Date).getFullYear();
    footerYear.innerText = `${currentYear} `
}

showYear();
burgerBtn.addEventListener('click', showNav);
window.addEventListener('scroll', burgerColor)

