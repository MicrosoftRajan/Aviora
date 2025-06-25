'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/companions' },
  { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
  const pathname = usePathname(); // ✅ Move this inside the component

  return (
    <nav className='flex items-center gap-4'>
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
