'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import SiteHeader from '../../../components/SiteHeader'

const vehicles = [
  { name: 'e-Discover', price: '₹7.99 L', battery: '30 kWh', range: '275 km', monthly: [25800, 23100, 21500, 19900, 17800, 16100] },
  { name: 'e-Explore', price: '₹14.99 L', battery: '49 kWh', range: '440 km', monthly: [45300, 40600, 37700, 34900, 31100, 28300] },
  { name: 'e-Prestige', price: '₹19.99 L', battery: '61 kWh', range: '543 km', monthly: [63500, 56900, 52900, 48900, 43600, 39600] },
] as const

const tenures = [3, 6, 9, 12, 24, 36] as const
type Tenure = typeof tenures[number]

export default function IndividualLeasing() {
  const [vehicle, setVehicle] = useState(0)
  const [tenure, setTenure] = useState<Tenure>(12)
  const selected = vehicles[vehicle]
  const monthly = useMemo(() => selected.monthly[tenures.indexOf(tenure)], [selected, tenure])

  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero dark-page-hero">
          <div className="container">
            <div className="eyebrow">INDIVIDUAL LEASING</div>
            <h1>Your EV.<br />Your tenure.</h1>
            <p className="muted">Choose your Suzuki Drive EV, select a tenure from 3 to 36 months, and see your monthly subscription before you apply.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">01 · CHOOSE YOUR EV</div>
              <h2>Find the right fit.</h2>
            </div>
            <div className="grid car-range-grid">
              {vehicles.map((v, i) => (
                <button key={v.name} className={`card vehicle-select ${vehicle === i ? 'vehicle-selected' : ''}`} onClick={() => setVehicle(i)}>
                  <div className="vehicle-art"><div className="miniShape" /></div>
                  <div className="eyebrow">{v.name}</div>
                  <h3>{v.price}</h3>
                  <div className="vehicle-spec-row">
                    <div><span>Battery</span><b>{v.battery}</b></div>
                    <div><span>Range</span><b>{v.range}</b></div>
                  </div>
                  <span className="text-link">{vehicle === i ? 'Selected ✓' : 'Select this EV →'}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-page">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">02 · CHOOSE YOUR TENURE</div>
              <h2>Stay as long as you need.</h2>
            </div>
            <div className="leasing-panel">
              <div>
                <div className="eyebrow">{selected.name}</div>
                <h2>{selected.name}</h2>
                <p className="muted">{selected.battery} · {selected.range} range</p>
                <div className="tenure-grid">
                  {tenures.map((t) => (
                    <button key={t} className={tenure === t ? 'selected' : ''} onClick={() => setTenure(t)}>{t} months</button>
                  ))}
                </div>
              </div>
              <div className="lease-price">
                <span>Monthly subscription</span>
                <strong>₹{monthly.toLocaleString('en-IN')}</strong>
                <small>for {tenure} months · *Terms and Conditions apply.</small>
                <Link className="btn btn-primary" href={`/login?car=${encodeURIComponent(selected.name)}&tenure=${tenure}`}>Continue to apply →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">03 · WHAT HAPPENS NEXT</div>
              <h2>From application to delivery.</h2>
            </div>
            <div className="grid four-grid">
              {[
                ['01', 'Confirm your plan', 'Review your selected EV, tenure and monthly subscription.'],
                ['02', 'Your details', 'Complete the personal information required for your application.'],
                ['03', 'Credit & documents', 'Complete the credit check and submit the required documents.'],
                ['04', 'Agreement & delivery', 'Complete the agreement process and arrange your EV delivery.'],
              ].map(([n, h, p]) => (
                <div className="card step-card" key={n}><span className="eyebrow">{n}</span><h3>{h}</h3><p className="muted">{p}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-page">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">WHAT'S INCLUDED</div>
              <h2>Confidence comes built in.</h2>
            </div>
            <div className="grid four-grid">
              {['Insurance & road tax', 'Roadside assistance', 'Scheduled service & tyres', 'Doorstep delivery & pickup', 'Battery-health certificate', 'Tier swap once per tenure', 'Buy-out option at residual', 'Charging support by vehicle tier'].map((item) => (
                <div className="card inclusion" key={item}><h3>{item}</h3><p className="muted">Included or available according to the selected vehicle tier and plan.</p></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
