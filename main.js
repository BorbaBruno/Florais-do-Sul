
let time = 3500,
    currentImageIndex = 0,
    images = document.querySelectorAll('#home .slider img'),
    max = images.length;

window.addEventListener('load', start)

function nextImage() {

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(products)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {

  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha // 
  // Quais dados vou precisar? //

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute("id")
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove("active")
  if(sectionBoundaries) {
    menuElement.classList.add("active")
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navegacao.classList.add('scroll')
  } else {
    navegacao.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

window.addEventListener('scroll', onScroll)
onScroll()

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 975
}).reveal(`
#home, 
#home img, 
#home 
.stats, 
#products,
#products header,
#products .card,
#about,
#about header,
#about content,
#contact`)



