import { useState } from 'react'
import styles from './Contact.module.scss'

const contactItems = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/></svg>),
    label: 'Telefon',
    value: '+994 50 123 45 67',
    href: 'tel:+994501234567',
    sub: 'Hər gün 08:00–20:00',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>),
    label: 'Email',
    value: 'info@cleanpro.az',
    href: 'mailto:info@cleanpro.az',
    sub: 'Cavab 1 saat ərzində',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>),
    label: 'Ünvan',
    value: 'Bakı, Azərbaycan',
    href: undefined,
    sub: 'Bakı daxili xidmət',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
    label: 'İş saatları',
    value: 'B.e – Bazar: 08:00–20:00',
    href: undefined,
    sub: 'Bayram günlərindən başqa',
  },
]

const services = [
  'Xalça yuyulması', 'Yerindəyuma', 'Mebel təmizliyi',
  'Pərdə yuyulması', 'Yorğan & Döşək', 'Ev/Ofis təmizliyi',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '', area: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 900)
  }

  return (
    <div className={styles.contact}>

      {/* ── HERO ──────────────────────────────────── */}
      <section className={styles.contact__hero}>
        <div className="container">
          <span className="section-label">Əlaqə</span>
          <h1 className="section-title">Bizimlə <em>əlaqə</em><br />saxlayın</h1>
          <p className="section-subtitle">
            Sifariş vermək, qiymət öyrənmək və ya sual vermək üçün — istənilən üsulla əlaqə saxlayın.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────── */}
      <section className={`${styles.contact__body} section`}>
        <div className="container">
          <div className={styles.contact__inner}>

            {/* ─ Info Column ─ */}
            <div className={styles.contact__info}>
              <h2 className={styles['contact__info-title']}>Əlaqə məlumatları</h2>

              <div className={styles.contact__info_cards}>
                {contactItems.map(item => (
                  <div key={item.label} className={styles.contact__info_card}>
                    <div className={styles['contact__info_card-icon']}>{item.icon}</div>
                    <div>
                      <div className={styles['contact__info_card-label']}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} className={styles['contact__info_card-value']}>{item.value}</a>
                        : <div className={styles['contact__info_card-value']}>{item.value}</div>
                      }
                      <div className={styles['contact__info_card-sub']}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/994501234567" target="_blank" rel="noreferrer" className={styles.contact__whatsapp}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ilə yazın
              </a>

              {/* Map embed */}
              <div className={styles.contact__map}>
                <iframe
                  title="Bakı xəritəsi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97244.26435282483!2d49.72677!3d40.3953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ─ Form Column ─ */}
            <div className={styles.contact__form_wrap}>
              <div className={styles.contact__form_header}>
                <h2 className={styles['contact__form-title']}>Sifariş formu</h2>
                <p className={styles['contact__form-sub']}>
                  Formu doldurun, 30 dəqiqə ərzində sizinlə əlaqə saxlayaq.
                </p>
              </div>

              {sent ? (
                <div className={styles.contact__success}>
                  <div className={styles['contact__success-ring']}>
                    <div className={styles['contact__success-icon']}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                  </div>
                  <h3>Sifarişiniz qəbul edildi!</h3>
                  <p>Ən qısa zamanda — adətən 30 dəqiqə içərisində — sizinlə əlaqə saxlayacağıq.</p>
                  <button onClick={() => setSent(false)} className="btn btn--outline" style={{ marginTop: '20px' }}>
                    Yenidən sifariş ver
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contact__form}>
                  <div className={styles.contact__form_row}>
                    <div className={styles.contact__field}>
                      <label>Ad Soyad <span>*</span></label>
                      <input
                        type="text"
                        placeholder="Adınızı daxil edin"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className={styles.contact__field}>
                      <label>Telefon <span>*</span></label>
                      <input
                        type="tel"
                        placeholder="+994 XX XXX XX XX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.contact__form_row}>
                    <div className={styles.contact__field}>
                      <label>Xidmət növü</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">Seçin...</option>
                        {services.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className={styles.contact__field}>
                      <label>Xalça sahəsi (m²)</label>
                      <input
                        type="text"
                        placeholder="Məs: 12 m²"
                        value={form.area}
                        onChange={e => setForm({ ...form, area: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.contact__field}>
                    <label>Əlavə qeyd</label>
                    <textarea
                      rows={4}
                      placeholder="Ünvan, xalça növü, ləkə növü və s. bildirin..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className={[styles.contact__submit, loading ? styles['contact__submit--loading'] : ''].join(' ')}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.contact__spinner} />
                    ) : (
                      <>
                        Sifariş ver
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </>
                    )}
                  </button>

                  <p className={styles.contact__privacy}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Məlumatlarınız təhlükəsiz saxlanılır və üçüncü tərəflərə verilmir.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
