import { useState } from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import FAQ from '../../components/FAQ/FAQ'
import styles from './Services.module.scss'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    title: 'Hər növ xalçaların yuyulması',
    description: 'Xovlu, xovsuz, türk, İran, sintetik — bütün növ xalçalar üçün professional yuma xidməti. Ləkə çıxarma, zərərverici bakteriyaların məhv edilməsi.',
    tag: 'Ən populyar',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4"/><path d="M5 21V10.85M19 21V10.85"/></svg>),
  },
  {
    image: 'https://images.unsplash.com/photo-1527515637462-cff94ebb84ce?w=700&q=80',
    title: 'Xalçaların yerində yuyulması',
    description: 'Ağır xalçaları daşımadan bilavasitə evinizin içərisində yuma xidməti. Komandamız bütün avadanlıqla sizin evinizə gəlir.',
    tag: 'Əlverişli',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80',
    title: 'Yumşaq mebellərin təmizlənməsi',
    description: 'Divan, kreslo, döşək örtükləri — dərin buxar təmizləmə texnologiyası ilə ləkəsiz, mikrob-free nəticə.',
    tag: 'Yeni',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-8 8v2m8-2v2"/></svg>),
  },
  {
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80',
    title: 'Pərdə və tüllərin yuyulması',
    description: 'Həssas parçalar üçün xüsusi yuma proqramları. Ölçü saxlayan, rəngi solmayan innovativ texnologiya.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v2H3zM5 5v16M19 5v16M9 5l1 8M15 5l-1 8"/></svg>),
  },
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
    title: 'Yorğan və döşəklərin yuyulması',
    description: 'Hipoallergen proseslə yorğan, döşək, yastıq və yer döşəklərinin dərin sanitasiyası. Tozgənlər məhv edilir.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9h20M2 15h20M2 3h20v18H2z"/><circle cx="12" cy="12" r="2"/></svg>),
  },
  {
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80',
    title: 'Evlərin və ofislərin təmizlənməsi',
    description: 'Tam kompleks təmizlik xidməti: döşəmə, mebel, pəncərə, sanitar qovşaq — hər şey peşəkar komanda tərəfindən.',
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4"/><path d="M5 21V10.85M19 21V10.85"/></svg>),
  },
]

const filterTabs = ['Hamısı', 'Xalça', 'Mebel', 'Pərdə & Yorğan', 'Ev & Ofis']

const serviceCategories: Record<string, string[]> = {
  'Hamısı': services.map(s => s.title),
  'Xalça': ['Hər növ xalçaların yuyulması', 'Xalçaların yerində yuyulması'],
  'Mebel': ['Yumşaq mebellərin təmizlənməsi'],
  'Pərdə & Yorğan': ['Pərdə və tüllərin yuyulması', 'Yorğan və döşəklərin yuyulması'],
  'Ev & Ofis': ['Evlərin və ofislərin təmizlənməsi'],
}

const features = [
  { icon: '🌿', label: 'Ekoloji vasitələr' },
  { icon: '⚡', label: '24s ərzində' },
  { icon: '🚚', label: 'Pulsuz çatdırılma' },
  { icon: '✅', label: 'Keyfiyyət zəmanəti' },
  { icon: '🔬', label: 'Hipoallergenik' },
  { icon: '📱', label: 'Onlayn sifariş' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('Hamısı')

  const visibleTitles = serviceCategories[activeTab]
  const visible = services.filter(s => visibleTitles.includes(s.title))

  return (
    <div className={styles.services}>

      {/* ── HERO ──────────────────────────────────── */}
      <section className={styles.services__hero}>
        <div className={styles.services__hero_bg} />
        <div className={styles.services__hero_gradient} />
        <div className="container">
          <div className={styles.services__hero_content}>
            <span className="section-label" style={{ color: '#5fe09a' }}>Xidmətlərimiz</span>
            <h1 className={styles.services__hero_title}>
              Bütün <em>təmizlik həlləri</em><br />bir yerdə
            </h1>
            <p className={styles.services__hero_subtitle}>
              Müasir Avropa avadanlığı və ekoloji vasitələrlə 6 əsas istiqamətdə professional xidmət göstəririk.
            </p>
            {/* Feature pills */}
            <div className={styles.services__features}>
              {features.map(f => (
                <span key={f.label} className={styles.services__feature_pill}>
                  <span>{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────── */}
      <section className={`${styles.services__grid_section} section`}>
        <div className="container">
          {/* Filter tabs */}
          <div className={styles.services__tabs}>
            {filterTabs.map(tab => (
              <button
                key={tab}
                className={[styles.services__tab, activeTab === tab ? styles['services__tab--active'] : ''].join(' ')}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className={styles.services__grid}>
            {visible.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ─────────────────────────── */}
      <section className={styles.services__process}>
        <div className="container">
          <div className={styles.services__process_head}>
            <span className="section-label">Necə işləyirik?</span>
            <h2 className="section-title">Sadə, sürətli, <em>etibarlı</em></h2>
          </div>
          <div className={styles.services__process_steps}>
            {[
              { n: '1', t: 'Zəng edin', d: 'Telefon və ya forma ilə sifariş verin' },
              { n: '2', t: 'Götürürük', d: 'Evinizden pulsuz götürürük' },
              { n: '3', t: 'Yuyuruq', d: 'Professional avadanlıqla yuyuruq' },
              { n: '4', t: 'Çatdırırıq', d: 'Hazır xalçanı geri gətiriririk' },
            ].map(step => (
              <div key={step.n} className={styles.services__process_step}>
                <div className={styles['services__process_step-num']}>{step.n}</div>
                <div className={styles['services__process_step-title']}>{step.t}</div>
                <div className={styles['services__process_step-desc']}>{step.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <FAQ limit={4} />
    </div>
  )
}
