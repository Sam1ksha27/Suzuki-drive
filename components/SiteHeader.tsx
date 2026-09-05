'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/range', 'Explore EVs'],
  ['/corporate', 'Corporate'],
  ['/sustainability', 'Sustainability'],
  ['/about', 'About'],
  ['/faqs', 'FAQs'],
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <Link className="brand" href="/" aria-label="Suzuki Drive home">
        <span className="smark">S</span><span>SUZUKI <b>DRIVE</b></span>
      </Link>

      <nav className="nav">
        <details className="navDrop">
          <summary className={pathname.startsWith('/leasing') ? 'navActive' : ''}>Leasing <ChevronDown size={13} /></summary>
          <div className="navMenu">
            <Link href="/leasing/individual">Individual Leasing</Link>
            <Link href="/corporate">Corporate Leasing</Link>
          </div>
        </details>
        {links.map(([href, label]) => (
          <Link key={href} className={pathname === href ? 'navActive' : ''} href={href}>{label}</Link>
        ))}
      </nav>

      <div className="actions">
        <Link className="link" href="/login">Login</Link>
        <Link className="primary small" href="/range">Find Your EV</Link>
      </div>

      <button className="hamb" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <div className="mobileNav">
        <Link href="/leasing/individual" onClick={() => setOpen(false)}>Individual Leasing</Link>
        <Link href="/corporate" onClick={() => setOpen(false)}>Corporate Leasing</Link>
        {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
      </div>}
    </header>
  )
}