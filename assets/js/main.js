// MENU SHOW AND HIDDEN
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// HIDDEN MENU
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu')
})

// SHOW MENU
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__item')
const linkAction = () => { 
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => { 
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// =================== FILTERS PROJECTS ===================
const tabsProjects = document.querySelectorAll('[data-target]')
const tabContentsProjects = document.querySelectorAll('[data-content]')

tabsProjects.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContentsProjects.forEach(tabContent => {
      tabContent.classList.remove('filters__active')
    })
    target.classList.add('filters__active')

    tabsProjects.forEach(tab => {
      tab.classList.remove('filter-tab-active')
    })
    tab.classList.add('filter-tab-active')
  })
})