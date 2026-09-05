'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['/leasing', 'Leasing'],
  ['/range', 'Explore EVs'],
  ['/corporate', 'Corporate'],
  ['/sustainability', 'Sustainability'],
  ['/about', 'About'],
  ['/faqs', 'FAQs'],
]

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="Suzuki Drive home">
        <span className="smark">S</span><span>SUZUKI <b>DRIVE</b></span>
      </Link>
      <nav className="nav">
        {links.map(([href, label]) => (
          <Link key={href} className={pathname === href ? 'navActive' : ''} href={href}>{label}</Link>
        ))}
      </nav>
      <div className="actions">
        <Link className="link" href="/login">Login</Link>
        <Link className="primary small" href="/range">Find Your EV</Link>
      </div>
    </header>
  )
}
