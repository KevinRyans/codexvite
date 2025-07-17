import './index.css'
import { createNav } from './components/nav'
import { createHero } from './components/hero'
import { createProjects, createAbout, createContact } from './components/sections'
import { createFooter } from './components/footer'

const app = document.querySelector('#app')

app.append(
  createNav(),
  createHero(),
  createProjects(),
  createAbout(),
  createContact(),
  createFooter()
)
