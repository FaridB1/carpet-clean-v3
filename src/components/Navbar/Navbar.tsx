import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.scss'
// import logo from '../../assets/logo.png'
import logo from '../../assets/logo.png'
const navLinks = [
  { path: '/', label: 'Ana səhifə' },
  { path: '/haqqimizda', label: 'Haqqımızda' },
  { path: '/xidmetlerimiz', label: 'Xidmətlərimiz' },
  { path: '/qiymetler', label: 'Qiymətlər' },
  { path: '/elaqe', label: 'Əlaqə' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navbarClass = [
    styles.navbar,
    isHome && !scrolled ? styles['navbar--transparent'] : styles['navbar--scrolled'],
    scrolled ? styles['navbar--scrolled'] : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={navbarClass}>
      <div className={styles.navbar__inner}>
        {/* Logo */}
        <NavLink to="/" className={styles.navbar__logo}>
          {/* <div className={styles['navbar__logo-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4" />
              <path d="M5 21V10.85M19 21V10.85" />
            </svg>
          </div> */}
<img src={logo} alt="Butaxalı.az" className={styles.navbar__logoImage} />
          <span className={styles['navbar__logo-text']}>
            Butaxalı.az<span className={styles['navbar__logo-dot']}></span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className={styles.navbar__nav}>
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                [styles.navbar__link, isActive ? styles['navbar__link--active'] : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.navbar__actions}>
          <a href="tel:+994501234567" className={styles.navbar__phone}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z" />
            </svg>
            +994 50 123 45 67
          </a>
          <NavLink to="/elaqe" className={styles.navbar__cta}>
            Sifariş ver
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className={[styles.navbar__hamburger, menuOpen ? styles['navbar__hamburger--open'] : ''].join(' ')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyunu aç"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={[styles.navbar__mobile, menuOpen ? styles['navbar__mobile--open'] : ''].join(' ')}>
        <nav className={styles['navbar__mobile-nav']}>
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                [styles['navbar__mobile-link'], isActive ? styles['navbar__mobile-link--active'] : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles['navbar__mobile-bottom']}>
          <a href="tel:+994501234567" className={styles['navbar__mobile-phone']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z" />
            </svg>
            +994 50 123 45 67
          </a>
          <NavLink to="/elaqe" className={styles['navbar__mobile-cta']}>
            Sifariş ver
          </NavLink>
        </div>
      </div>
    </header>
  )
}
