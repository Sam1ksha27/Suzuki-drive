'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'

const cars = [
  { name: 'e-Discover', tag: 'Your first electric experience', battery: '30 kWh', range: '275 km', price: '₹19,900/month' },
  { name: 'e-Explore', tag: 'Go further, with confidence', battery: '49 kWh', range: '440 km', price: '₹34,900/month' },
  { name: 'e-Prestige', tag: 'All-in on electric', battery: '61 kWh', range: '543 km', price: '₹48,900/month' },
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  const car = cars[slide]
  const previous = () => setSlide((slide + cars.length - 1) % cars.length)
  const next = () => setSlide((slide + 1) % cars.length)

  return (
    <main>
      <SiteHeader />

      <section className="hero homeHero">
        <div className="heroCopy">
          <div className="eyebrow">ELECTRIC, THE SUZUKI WAY</div>
          <h1>Rent the confidence.<br /><em>Then sell the car.</em></h1>
          <p>Experience an EV on your terms. From 3 to 36 months, Suzuki Drive makes going electric simpler, more flexible and more familiar.</p>
          <Link className="primary" href={`/range?car=${car.name}`}>Find Your EV →</Link>
          <span className="terms">*Terms and Conditions apply.</span>
        </div>

        <div className="heroVisual">
          <div className={`carArt ${car.name.toLowerCase().replace('-', '')}`}>
            <div className="carGlow" />
            <div className="carShape"><div className="roof" /><div className="window" /><div className="wheel w1" /><div className="wheel w2" /></div>
            <div className="modelBadge"><span>{car.tag}</span><strong>{car.name}</strong></div>
          </div>
          <div className="homeCarSpecs">
            <div><strong>{car.range}</strong><span>range</span></div>
            <div><strong>{car.battery}</strong><span>battery</span></div>
            <div><strong>{car.price}</strong><span>starting monthly</span></div>
          </div>
          <div className="carousel">
            <button aria-label="Previous vehicle" onClick={previous}>←</button>
            <div>{cars.map((item, i) => <button key={item.name} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)}>{String(i + 1).padStart(2, '0')}</button>)}</div>
            <button aria-label="Next vehicle" onClick={next}>→</button>
          </div>
        </div>
      </section>

      <section className="reviews homeReviews">
        <div><strong>Designed for real life.</strong><span>Backed by Suzuki confidence.</span></div>
        <div className="review">★★★★★<b>“The easiest way to finally try an EV.”</b><small>— Suzuki Drive customer</small></div>
        <div className="review">★★★★★<b>“Flexible enough for how I actually drive.”</b><small>— Suzuki Drive customer</small></div>
      </section>

      <footer className="homeFooter">
        <div className="brand"><span className="smark">S</span><span>SUZUKI <b>DRIVE</b></span></div>
        <span>Experience electric. On your terms.</span>
        <span>© Suzuki Drive</span>
      </footer>
    </main>
  )
}
