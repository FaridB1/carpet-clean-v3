import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Prices.module.scss'

const pricingCategories = [
  {
    id: 'carpet',
    category: 'Xalça yuyulması',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4"/></svg>),
    color: '#1a9c5b',
    items: [
      { name: 'Xov xalça (1m²)', price: '3', unit: 'AZN/m²', note: '' },
      { name: 'Xovsuz xalça (1m²)', price: '2.5', unit: 'AZN/m²', note: '' },
      { name: 'Yollayıcı (1m²)', price: '2', unit: 'AZN/m²', note: '' },
      { name: 'Yerindəyuma əlavəsi', price: '+1', unit: 'AZN/m²', note: 'Əsas qiymətə əlavə' },
    ],
  },
  {
    id: 'furniture',
    category: 'Mebel təmizliyi',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/></svg>),
    color: '#2563eb',
    items: [
      { name: '2 oturacaqlı divan', price: '40', unit: 'AZN', note: '' },
      { name: '3 oturacaqlı divan', price: '55', unit: 'AZN', note: '' },
      { name: 'Kreslo', price: '20', unit: 'AZN', note: '' },
      { name: 'Künc divan (böyük)', price: '80', unit: 'AZN', note: 'Ölçüyə görə dəyişə bilər' },
    ],
  },
  {
    id: 'curtain',
    category: 'Pərdə & Tül',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v2H3zM5 5v16M19 5v16"/></svg>),
    color: '#7c3aed',
    items: [
      { name: 'Tül (1m²)', price: '1.5', unit: 'AZN/m²', note: '' },
      { name: 'Pərdə (1m²)', price: '2', unit: 'AZN/m²', note: '' },
      { name: 'Stor pərdə (1m²)', price: '3', unit: 'AZN/m²', note: '' },
      { name: 'Yerindəasma', price: 'Pulsuz', unit: '', note: 'Bakı daxili' },
    ],
  },
  {
    id: 'bedding',
    category: 'Yorğan & Döşək',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9h20M2 15h20M2 3h20v18H2z"/></svg>),
    color: '#d97706',
    items: [
      { name: 'Tək yorğan', price: '15', unit: 'AZN', note: '' },
      { name: 'Cüt yorğan', price: '25', unit: 'AZN', note: '' },
      { name: 'Tək döşək', price: '30', unit: 'AZN', note: '' },
      { name: 'Cüt döşək', price: '50', unit: 'AZN', note: 'Standart ölçü' },
    ],
  },
]

const badges = [
  { icon: '🚚', text: 'Bakı daxili pulsuz çatdırılma' },
  { icon: '✅', text: 'Keyfiyyət zəmanəti' },
  { icon: '🌿', text: 'Ekoloji vasitələr' },
  { icon: '⚡', text: '24–48 saat ərzində' },
]

export default function Prices() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className={styles.prices}>

      {/* ── HERO ──────────────────────────────────── */}
      <section className={styles.prices__hero}>
        <div className="container">
          <span className="section-label">Qiymətlər</span>
          <h1 className="section-title">Şəffaf və <em>əlverişli</em><br />qiymətlər</h1>
          <p className="section-subtitle">
            Gizli ödəniş yoxdur. Bakı daxili çatdırılma bütün qiymətlərə daxildir.
          </p>
          <div className={styles.prices__badges}>
            {badges.map(b => (
              <span key={b.text} className={styles.prices__badge}>
                <span>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ─────────────────────────── */}
      <section className={`${styles.prices__grid_section} section`}>
        <div className="container">
          <div className={styles.prices__grid}>
            {pricingCategories.map(cat => (
              <div
                key={cat.id}
                className={[styles.price__card, activeId === cat.id ? styles['price__card--open'] : ''].join(' ')}
                style={{ '--cat-color': cat.color } as React.CSSProperties}
              >
                <button
                  className={styles['price__card-header']}
                  onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
                >
                  <div className={styles['price__card-icon']}>{cat.icon}</div>
                  <h3 className={styles['price__card-title']}>{cat.category}</h3>
                  <span className={styles['price__card-count']}>{cat.items.length} xidmət</span>
                  <svg
                    className={styles['price__card-chevron']}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>

                <div className={styles['price__card-body']}>
                  <ul className={styles['price__card-items']}>
                    {cat.items.map(item => (
                      <li key={item.name} className={styles['price__card-item']}>
                        <div>
                          <span className={styles['price__card-item-name']}>{item.name}</span>
                          {item.note && <span className={styles['price__card-item-note']}>{item.note}</span>}
                        </div>
                        <span className={styles['price__card-item-price']}>
                          {item.price}
                          {item.unit && <em>{item.unit}</em>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className={styles.prices__note}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>
              Minimum sifariş məbləği <strong>20 AZN</strong>-dir. Böyük sifarişlər üçün endirim mümkündür.
              Dəqiq qiymət üçün pulsuz konsultasiya xidmətimizdən istifadə edin.
            </span>
          </div>

          {/* CTA */}
          <div className={styles.prices__cta}>
            <div className={styles.prices__cta_left}>
              <h3 className={styles.prices__cta_title}>Dəqiq qiymət öyrənin</h3>
              <p className={styles.prices__cta_sub}>Ölçü və növünü bildirin, dərhal qiymət verək.</p>
            </div>
            <div className={styles.prices__cta_actions}>
              <NavLink to="/elaqe" className="btn btn--primary">
                Pulsuz qiymət al
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:17,height:17}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </NavLink>
              <a href="tel:+994501234567" className={styles.prices__cta_phone}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/></svg>
                +994 50 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
