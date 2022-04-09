const burgerBtn = document.querySelector('.burger-btn');
const navigation = document.querySelector('.nav');
const allNavigationItem = document.querySelectorAll(`.nav__item`)

const showNav = () => {
    navigation.classList.toggle('nav--active');

    allNavigationItem.forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('nav--active')
        })
    })
}

burgerBtn.addEventListener('click', showNav);
