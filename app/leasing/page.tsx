import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'

export default function Leasing() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero dark-page-hero">
          <div className="container">
            <div className="eyebrow">SUZUKI DRIVE LEASING</div>
            <h1>Electric, on<br />your terms.</h1>
            <p className="muted">Choose the Suzuki Drive route that fits you — individual leasing for your own EV journey, or corporate leasing for your organisation.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">CHOOSE YOUR ROUTE</div>
              <h2>Two ways to drive electric.</h2>
            </div>
            <div className="grid persona-grid">
              <Link className="card persona leasing-choice" href="/leasing/individual">
                <div>
                  <div className="eyebrow">FOR INDIVIDUALS</div>
                  <h3>Individual Leasing</h3>
                  <p className="muted">Choose your EV, select a tenure from 3 to 36 months, see your monthly subscription and apply.</p>
                  <span className="text-link">Explore Individual Leasing →</span>
                </div>
              </Link>
              <Link className="card persona leasing-choice" href="/corporate">
                <div>
                  <div className="eyebrow">FOR ORGANISATIONS</div>
                  <h3>Corporate Leasing</h3>
                  <p className="muted">A dedicated proposition for organisations exploring employee mobility, workplace charging and flexible EV adoption.</p>
                  <span className="text-link">Explore Corporate Leasing →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section soft-page">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">THE SUZUKI DRIVE IDEA</div>
              <h2>Rent the confidence.<br />Then sell the car.</h2>
              <p className="muted">Suzuki Drive is designed to reduce the confidence gap around EV adoption with a flexible EV-only leasing experience.</p>
            </div>
            <div className="grid four-grid">
              {[
                ['EV only', 'A range built around electric mobility.'],
                ['3–36 months', 'Flexible tenure options starting at three months.'],
                ['Built-in support', 'Service, roadside assistance and other plan benefits according to vehicle tier.'],
                ['Buy-out option', 'An option to buy the exact leased EV at the applicable residual value.'],
              ].map(([h, p]) => <div className="card step-card" key={h}><h3>{h}</h3><p className="muted">{p}</p></div>)}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
