'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import SiteHeader from '../../components/SiteHeader'

const cars = {
  'e-Discover': { monthly:[25800,23100,21500,19900,17800,16100], battery:'30 kWh', range:'275 km' },
  'e-Explore': { monthly:[45300,40600,37700,34900,31100,28300], battery:'49 kWh', range:'440 km' },
  'e-Prestige': { monthly:[63500,56900,52900,48900,43600,39600], battery:'61 kWh', range:'543 km' },
}
const tenures=[3,6,9,12,24,36]

export default function Leasing(){
  const params=useSearchParams()
  const requested=params.get('car') || 'e-Discover'
  const carName=(requested in cars ? requested : 'e-Discover') as keyof typeof cars
  const [tenure,setTenure]=useState(12)
  const car=cars[carName]
  return <><SiteHeader/><main>
    <section className="page-hero dark-page-hero"><div className="container"><div className="eyebrow">SUZUKI DRIVE LEASING</div><h1>Try electric.<br/>Without the leap.</h1><p className="muted">Choose your EV, choose your tenure, and drive with confidence. Plans run from 3 to 36 months.</p></div></section>
    <section className="section"><div className="container"><div className="section-title"><div className="eyebrow">HOW IT WORKS</div><h2>A simple journey to electric.</h2></div><div className="grid four-grid">{[['01','Choose your EV','Pick the car that fits your life.'],['02','Choose your tenure','Select 3, 6, 9, 12, 24 or 36 months.'],['03','Apply','Complete your details, credit check and documents.'],['04','Drive','Get your EV delivered and start your journey.']].map(([n,h,p])=><div className="card step-card" key={n}><span className="eyebrow">{n}</span><h3>{h}</h3><p className="muted">{p}</p></div>)}</div></div></section>
    <section className="section soft-page"><div className="container"><div className="leasing-panel"><div><div className="eyebrow">SELECTED EV</div><h2>{carName}</h2><p className="muted">{car.battery} · {car.range} range</p><div className="tenure-grid">{tenures.map(t=><button key={t} className={tenure===t?'selected':''} onClick={()=>setTenure(t)}>{t} months</button>)}</div></div><div className="lease-price"><span>Monthly subscription</span><strong>₹{car.monthly[tenures.indexOf(tenure)].toLocaleString('en-IN')}</strong><small>for {tenure} months · *Terms and Conditions apply.</small><Link className="btn btn-primary" href="/login">Start your application →</Link></div></div></div></section>
    <section className="section"><div className="container"><div className="section-title"><div className="eyebrow">WHAT’S INCLUDED</div><h2>Built around your journey.</h2></div><div className="grid four-grid">{['Insurance & road tax','Roadside assistance','Scheduled service & tyres','Doorstep delivery & pickup','Battery-health certificate','Tier swap once per tenure','Buy-out option at residual','Charging support by vehicle tier'].map(x=><div className="card inclusion" key={x}><h3>{x}</h3><p className="muted">Included or available according to the selected vehicle tier and plan.</p></div>)}</div></div></section>
    <section className="section corporate-link"><div className="container split"><div><div className="eyebrow">CORPORATE</div><h2>Leasing for organisations, too.</h2><p className="muted">Explore the dedicated corporate leasing proposition.</p></div><Link className="btn btn-primary" href="/corporate">Explore Corporate Leasing →</Link></div></section>
  </main></>
}
