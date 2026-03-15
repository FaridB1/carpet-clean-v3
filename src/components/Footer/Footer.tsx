import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__brand}>
          <NavLink to="/" className={styles.footer__logo}>
<img src={logo} alt="Butaxalı.az" className={styles.navbar__logoImage} />

            <span className={styles['footer__brand-text']}>Butaxalı.az</span>
          </NavLink>
          <p className={styles.footer__desc}>
            Bakıda professional xalça və mebel təmizləmə xidmətləri. Müasir avadanlıq, ekoloji təmiz vasitələr.
          </p>
          <div className={styles.footer__social}>
            <a href="#" className={styles['footer__social-link']} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className={styles['footer__social-link']} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className={styles['footer__social-link']} aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles['footer__col-title']}>Xidmətlər</h4>
          <ul className={styles.footer__links}>
            {['Xalça yuyulması', 'Yerindəyuma', 'Mebel təmizliyi', 'Pərdə yuyulması', 'Yorğan & Döşək', 'Ofis təmizliyi'].map(s => (
              <li key={s}>
                <NavLink to="/xidmetlerimiz" className={styles.footer__link}>{s}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles['footer__col-title']}>Şirkət</h4>
          <ul className={styles.footer__links}>
            {[
              { to: '/haqqimizda', label: 'Haqqımızda' },
              { to: '/qiymetler', label: 'Qiymətlər' },
              { to: '/elaqe', label: 'Əlaqə' },
            ].map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={styles.footer__link}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles['footer__col-title']}>Əlaqə</h4>
          <div className={styles['footer__contact-items']}>
            <div className={styles['footer__contact-item']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/>
              </svg>
              <a href="tel:+994501234567">+994 50 123 45 67</a>
            </div>
            <div className={styles['footer__contact-item']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:info@cleanpro.az">info@cleanpro.az</a>
            </div>
            <div className={styles['footer__contact-item']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Bakı, Azərbaycan</span>
            </div>
            <div className={styles.footer__badge}>
              <span></span>
              Bugün işləyirik: 08:00–20:00
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} Butaxalı.az Bütün hüquqlar qorunur.
        </p>
        <div className={styles['footer__bottom-links']}>
          <a href="#" className={styles['footer__bottom-link']}>Məxfilik siyasəti</a>
          <a href="#" className={styles['footer__bottom-link']}>İstifadə şərtləri</a>
        </div>
      </div>
    </footer>
  )
}
