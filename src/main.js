import './style.css'

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle')
const navLinks = document.querySelector('.nav-links')

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    navLinks.classList.toggle('active')
  })
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('active')) {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove('active')
    }
  }
})

// Close mobile menu when a link is clicked
if (navLinks) {
  const links = navLinks.querySelectorAll('.nav-link')
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
    })
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Add animation to buttons
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-2px)'
  })
  
  button.addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)'
  })
})

// Add animation to component cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

// Observe all component cards and steps
const cardsAndSteps = document.querySelectorAll('.component-card, .step, .result-card, .stat-card')
cardsAndSteps.forEach(element => {
  element.style.opacity = '0'
  element.style.transform = 'translateY(20px)'
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  observer.observe(element)
})

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]')
  const scrollPosition = window.scrollY + 100
  
  sections.forEach(section => {
    if (section.offsetTop <= scrollPosition && 
        section.offsetTop + section.offsetHeight > scrollPosition) {
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active')
        }
      })
    }
  })
})

// Add CSS for active nav link
const style = document.createElement('style')
style.textContent = `
  .nav-link.active {
    color: var(--primary) !important;
    font-weight: 700;
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.25rem;
  }
`
document.head.appendChild(style)

console.log('✓ Greenflow Dynamics website loaded successfully!')
