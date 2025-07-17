import './index.css'
import { createNav } from './components/nav'
import { createHero } from './components/hero'
import { createProjects, createAbout, createContact } from './components/sections'
import { createFooter } from './components/footer'

const app = document.querySelector('#main')

app.append(
  createNav(),
  createHero(),
  createProjects(),
  createAbout(),
  createContact(),
  createFooter()
)

const revealElements = app.querySelectorAll('nav, section, footer')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4')
      observer.unobserve(entry.target)
    }
  })
})

revealElements.forEach(el => observer.observe(el))
