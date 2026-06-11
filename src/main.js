import './style.css'

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle - Simple and Direct
  const menuToggle = document.getElementById('menuToggle')
  const navLinks = document.querySelector('.nav-links')

  if (menuToggle && navLinks) {
    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault()
      e.stopPropagation()
      navLinks.classList.toggle('active')
      menuToggle.classList.toggle('active')
    })

    // Close menu when clicking a nav link
    const allLinks = navLinks.querySelectorAll('a')
    allLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active')
        menuToggle.classList.remove('active')
      })
    })

    // Close menu when clicking on the overlay (background)
    navLinks.addEventListener('click', function(e) {
      if (e.target === navLinks) {
        navLinks.classList.remove('active')
        menuToggle.classList.remove('active')
      }
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href')
      if (href !== '#') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
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

  const cardsAndSteps = document.querySelectorAll('.component-card, .step, .result-card, .stat-card')
  cardsAndSteps.forEach(element => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(20px)'
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    observer.observe(element)
  })

  // Active navigation link highlighting on scroll
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

  console.log('✓ Greenflow Dynamics website loaded successfully!')
})
