import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './Slides'
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css'
import Footer from './footer'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App: React.FC = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <Footer />
  </>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
