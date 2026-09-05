import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'

const cars = [
  ['e-Discover','Your first electric experience','₹7.99 L','30 kWh','275 km','₹19,900/month'],
  ['e-Explore','Go further, with confidence','₹14.99 L','49 kWh','440 km','₹34,900/month'],
  ['e-Prestige','All-in on electric','₹19.99 L','61 kWh','543 km','₹48,900/month'],
]

export default function Range() {
  return <><SiteHeader/><main>
    <section className="page-hero"><div className="container"><div className="eyebrow">FIND YOUR EV</div><h1>There’s an electric<br/>experience for you.</h1><p className="muted">Choose your EV based on how you want to experience electric mobility.</p></div></section>
    <section className="section"><div className="container"><div className="grid persona-grid">{[['e-Discover','I’m New to EVs','Dip your toes in and experience electric.'],['e-Explore','I’ve Experienced an EV','Go further with more range and features.'],['e-Prestige','I’m All-in on Electric','No compromises. All-in on electric.']].map(([id,title,text])=><Link className="card persona" href={'/leasing?car='+id} key={id}><div className="eyebrow">{id}</div><h3>{title}</h3><p className="muted">{text}</p><span className="text-link">Explore →</span></Link>)}</div></div></section>
    <section className="section soft-page"><div className="container"><div className="section-title"><div className="eyebrow">THE RANGE</div><h2>Meet the Suzuki Drive EVs.</h2></div><div className="grid car-range-grid">{cars.map(([name,tag,price,battery,range,monthly])=><article className="card vehicle-card" key={name}><div className="vehicle-art"><div className="miniShape"><div className="miniWindow"/><div className="miniWheel a"/><div className="miniWheel b"/></div></div><div className="eyebrow">{tag}</div><h2>{name}</h2><div className="vehicle-spec-row"><span><b>{battery}</b> battery</span><span><b>{range}</b> range</span></div><p className="muted">From <strong>{monthly}</strong></p><Link className="btn btn-primary" href={'/leasing?car='+name}>Lease {name} →</Link></article>)}</div></div></section>
  </main></>
}
