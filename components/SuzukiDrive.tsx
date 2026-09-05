'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteHeader from './SiteHeader'

const cars = [
  { name: 'e-Discover', tag: 'Your first electric experience', price: '₹7.99 L', range: '275 km', battery: '30 kWh' },
  { name: 'e-Explore', tag: 'Go further, with confidence', price: '₹14.99 L', range: '440 km', battery: '49 kWh' },
  { name: 'e-Prestige', tag: 'All-in on electric', price: '₹19.99 L', range: '543 km', battery: '61 kWh' },
]

export default function SuzukiDrive() {
  const [slide, setSlide] = useState(0)
  const car = cars[slide]

  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="heroCopy">
          <div className="eyebrow">ELECTRIC, THE SUZUKI WAY</div>
          <h1>Rent the confidence.<br /><em>Then sell the car.</em></h1>
          <p>Experience an EV on your terms. From 3 to 36 months, Suzuki Drive makes going electric simpler, more flexible and more familiar.</p>
          <div className="heroButtons">
            <Link className="primary" href="/range">Find Your EV <span>→</span></Link>
            <Link className="secondary" href="/leasing">How Suzuki Drive works</Link>
          </div>
          <span className="terms">*Terms and Conditions apply.</span>
        </div>

        <div className="heroVisual">
          <div className={'carArt ' + car.name.replace('e-', '').toLowerCase()}>
            <div className="carGlow" />
            <div className="carShape">
              <div className="roof" />
              <div className="window" />
              <div className="wheel w1" />
              <div className="wheel w2" />
            </div>
            <div className="modelBadge"><span>{car.tag}</span><strong>{car.name}</strong></div>
          </div>
          <div className="carousel">
            <button aria-label="Previous vehicle" onClick={() => setSlide((slide + cars.length - 1) % cars.length)}>←</button>
            <div>{cars.map((item, index) => <button key={item.name} className={index === slide ? 'active' : ''} onClick={() => setSlide(index)}>{String(index + 1).padStart(2, '0')}</button>)}</div>
            <button aria-label="Next vehicle" onClick={() => setSlide((slide + 1) % cars.length)}>→</button>
          </div>
          <div className="heroSpecs"><b>{car.range}</b><span>range</span><b>{car.battery}</b><span>battery</span><b>{car.price}</b><span>ex-showroom reference</span></div>
        </div>
      </section>

      <section className="reviews">
        <div><strong>Designed for real life.</strong><span>Backed by Suzuki confidence.</span></div>
        <div className="review">★★★★★<b>“The easiest way to finally try an EV.”</b><small>— Suzuki Drive customer</small></div>
        <div className="review">★★★★★<b>“Flexible enough for how I actually drive.”</b><small>— Suzuki Drive customer</small></div>
      </section>

      <footer className="homeFooter">
        <div className="brand"><span className="smark">S</span><span>SUZUKI <b>DRIVE</b></span></div>
        <span>Experience electric on your terms.</span>
      </footer>
    </main>
  )
}
