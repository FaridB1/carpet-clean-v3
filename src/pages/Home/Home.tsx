import { NavLink } from 'react-router-dom'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import FAQ from '../../components/FAQ/FAQ'
import styles from './Home.module.scss'

/* ─── Data ───────────────────────────────────────── */
const services = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    title: 'Hər növ xalçaların yuyulması',
    description: 'Xovlu, xovsuz, türk, İran, sintetik — bütün növ xalçalar üçün professional yuma xidməti.',
    tag: 'Ən populyar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4"/>
        <path d="M5 21V10.85M19 21V10.85"/>
      </svg>
    ),
  },
  {
    image: 'https://media.istockphoto.com/id/1506179387/photo/dry-cleaners-employee-hoovering-carpet-with-vacuum-cleaner-in-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=k8LzDEB6CCAS6mUUITGLpw1gqgbnvi-W072RAoflO6U=',
    title: 'Xalçaların yerində yuyulması',
    description: 'Ağır xalçaları daşımadan bilavasitə evinizin içərisində yuma xidməti göstəririk.',
    tag: 'Əlverişli',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    title: 'Yumşaq mebellərin təmizlənməsi',
    description: 'Divan, kreslo, döşək örtükləri — dərin təmizləmə texnologiyası ilə ləkəsiz nəticə.',
    tag: 'Yeni',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-8 8v2m8-2v2"/>
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80',
    title: 'Pərdə və tüllərin yuyulması',
    description: 'Həssas parçalar üçün xüsusi yuma proqramları. Ölçü saxlayan, rəngi solmayan texnologiya.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v2H3zM5 5v16M19 5v16M9 5l1 8M15 5l-1 8"/>
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    title: 'Yorğan və döşəklərin yuyulması',
    description: 'Hipoallergen proseslə yorğan, döşək və yastıqların dərin sanitasiyası.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9h20M2 15h20M2 3h20v18H2z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
    title: 'Evlərin və ofislərin təmizlənməsi',
    description: 'Tam kompleks təmizlik: döşəmə, mebel, pəncərə — hər şey peşəkar komanda tərəfindən.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4"/>
        <path d="M5 21V10.85M19 21V10.85"/>
      </svg>
    ),
  },
]

const whyUsItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Ekoloji təmiz vasitələr',
    desc: 'Uşaq və allergiyaya həssas şəxslər üçün tam təhlükəsiz kimyəvi maddələr.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: '24 saat ərzində',
    desc: 'Sifariş verdiyiniz gün götürüb, ertəsi gün qaytarırıq.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Keyfiyyət zəmanəti',
    desc: 'Nəticədən razı qalmasanız, pulsuz yenidən yuyuruq.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Pulsuz çatdırılma',
    desc: 'Bakı daxilinde xalça götürüb çatdırmağı pulsuz həyata keçiririk.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Etiketləmə sistemi',
    desc: 'Xalçanız qəbul edilib unikal etiketlə qeydə alınır',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Toz alma prosesi',
    desc: 'Güclü tozsoran ilə tam tozdan arındırılır',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Avtomatik yuma',
    desc: 'Müasir Avropa avadanlığında dərin yuma aparılır',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c-2.76 0-5 4.48-5 10s2.24 10 5 10 5-4.48 5-10-2.24-10-5-10zM2 12h20"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Sıxma və qurudulma',
    desc: 'Suyun 95%-i sıxılır, tam qurudulur',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6m0 0l3-3m-3 3L9 5M5 12H2m3 0l-3 3m3-3l-3-3m19 3h-3m3 0l-3 3m3-3l-3-3M12 16v6m0-6l3 3m-3-3l-3 3"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Keyfiyyət yoxlanışı',
    desc: 'Son yoxlama, paketləmə və çatdırılma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

const reviews = [
  {
    text: 'Xalçam çox köhnə idi, amma elə yudular ki, sanki yenidir. Rənglər canlandı, iy tamamilə getdi. Çatdırılma da tam vaxtında oldu.',
    name: 'Aytən Məmmədova',
    service: 'Xalça yuyulması',
    initial: 'A',
  },
  {
    text: 'Divanda köhnə qəhvə ləkəsi vardı, tamamilə çıxdı. Peşəkar yanaşma, nəzakətli komanda. Mütləq yenidən müraciət edəcəyəm.',
    name: 'Fuad Həsənov',
    service: 'Mebel təmizliyi',
    initial: 'F',
  },
  {
    text: 'Pərdələrimi verdim, ağappaq gəldi. Forması qalmışdı, uzunluğu dəyişməmişdi. Çox razıyam bu xidmətdən!',
    name: 'Günel Əliyeva',
    service: 'Pərdə yuyulması',
    initial: 'G',
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const VerifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

/* ─── Component ──────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Background */}
        <div className={styles.hero__bg}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
            alt="Xalça təmizləmə"
          />
        </div>
        <div className={styles.hero__gradient} />

        {/* Decorative */}
        <div className={`${styles.hero__decor} ${styles['hero__decor--grid']}`} />
        <div className={`${styles.hero__decor} ${styles['hero__decor--circle1']}`} />
        <div className={`${styles.hero__decor} ${styles['hero__decor--circle2']}`} />
        <div className={`${styles.hero__decor} ${styles['hero__decor--glow']}`} />

        {/* Floating bubbles */}
        <div className={`${styles.hero__bubble} ${styles['hero__bubble--top']}`}>
          <div className={styles['hero__bubble-icon']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <div className={styles['hero__bubble-num']}>10 000+</div>
            <div className={styles['hero__bubble-label']}>Yuyulan xalça</div>
          </div>
        </div>

        <div className={`${styles.hero__bubble} ${styles['hero__bubble--bottom']}`}>
          <div className={`${styles['hero__bubble-icon']} ${styles['hero__bubble-icon--white']}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <div>
            <div className={`${styles['hero__bubble-num']} ${styles['hero__bubble-num--white']}`}>4.9 / 5</div>
            <div className={`${styles['hero__bubble-label']} ${styles['hero__bubble-label--white']}`}>Müştəri reytinqi</div>
          </div>
        </div>

        {/* Main grid */}
        <div className={styles.hero__content}>
          {/* Left: text */}
          <div className={styles.hero__text}>
            <div className={styles.hero__badge}>
              <span className={styles['hero__badge-dot']} />
              Bakıda №1 Xalça Yuma Xidməti
            </div>

            <h1 className={styles.hero__title}>
              Xalçanıza<br /><em>İkinci Həyat
              </em> Verin
            </h1>

            <p className={styles.hero__subtitle}>
              Professional avadanlıq, ekoloji vasitələr. Bakı daxilinde pulsuz çatdırılma. 24 saat ərzində nəticə.
            </p>

            <div className={styles.hero__actions}>
              <NavLink to="/elaqe" className="btn btn--primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/>
                </svg>
                İndi Sifariş Ver
              </NavLink>
              <NavLink
                to="/xidmetlerimiz"
                className="btn btn--outline"
                style={{ color: 'rgba(255,255,255,0.82)', borderColor: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.07)' }}
              >
                Xidmətlərə bax
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </NavLink>
            </div>

            {/* Animated stats */}
            <div className={styles.hero__stats}>
              {[
                { num: '10 000', sup: '+', label: 'Yuyulan xalça' },
                { num: '8', sup: ' il', label: 'Təcrübə' },
                { num: '4.9', sup: '★', label: 'Müştəri məmnuniyyəti' },
              ].map(({ num, sup, label }) => (
                <div className={styles.hero__stat} key={label}>
                  <div className={styles['hero__stat-num']}>
                    {num}<span>{sup}</span>
                  </div>
                  <div className={styles['hero__stat-label']}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating card */}
          <div className={styles['hero__card-wrap']}>
            <div className={styles.hero__card}>
              <div className={styles['hero__card-title']}>✨ Niyə bizi seçirlər?</div>
              <ul className={styles['hero__card-items']}>
                {[
                  'Pulsuz evdən götürmə',
                  '24 saat ərzində hazır',
                  'Keyfiyyət zəmanəti',
                  'Ekoloji sertifikatlı vasitələr',
                  'Peşəkar komanda',
                ].map(item => (
                  <li key={item} className={styles['hero__card-item']}>
                    <span className={styles['hero__card-item-check']}>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/elaqe" className={styles['hero__card-cta']}>
                Pulsuz qiymət al →
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────── */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.services__head}>
            <div>
              <span className="section-label">Xidmətlərimiz</span>
              <h2 className="section-title">
                Hərtərəfli <em>təmizlik</em><br />həlləri
              </h2>
            </div>
            <NavLink to="/xidmetlerimiz" className="btn btn--outline">
              Hamısına bax
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </NavLink>
          </div>
          <div className={styles.services__grid}>
            {services.map(service => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────── */}
      <section className={styles.whyus}>
        <div className="container">
          <div className={styles.whyus__inner}>
            <div className={styles.whyus__image}>
              <img
                src="https://plus.unsplash.com/premium_photo-1661663379320-213541539ec8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FycGV0JTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
                alt="Professional Cleaning"
              />
              <div className={styles.whyus__badge}>
                <div className={styles['whyus__badge-num']}>
                  5 000<span style={{ color: '#1a9c5b' }}>+</span>
                </div>
                <div className={styles['whyus__badge-text']}>Məmnun müştəri</div>
              </div>
            </div>

            <div className={styles.whyus__content}>
              <span className="section-label">Niyə biz?</span>
              <h2 className="section-title">
                Bakının ən <em>etibarlı</em> seçimi
              </h2>
              <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                8 ildən artıq təcrübə, müasir Avropa avadanlığı və peşəkar komanda ilə xidmətinizdəyik.
              </p>
              <div className={styles.whyus__grid}>
                {whyUsItems.map(item => (
                  <div key={item.title} className={styles.whyus__item}>
                    <div className={styles['whyus__item-icon']}>{item.icon}</div>
                    <div className={styles['whyus__item-title']}>{item.title}</div>
                    <div className={styles['whyus__item-desc']}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────── */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.process__head}>
            <span className="section-label">İş prosesimiz</span>
            <h2 className="section-title">
              Addım-addım <em>mükəmməllik</em>
            </h2>
            <p className="section-subtitle">
              Xalçanız bizə gəldiyindən geri dönənə kimi hər addımı şəffaf şəkildə izləyirsiniz.
            </p>
          </div>
          <div className={styles.process__grid}>
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={[
                  styles.process__step,
                  i === 2 ? styles['process__step--active'] : '',
                ].join(' ')}
              >
                <div className={styles['process__step-num']}>{step.num}</div>
                <div className={styles['process__step-icon']}>{step.icon}</div>
                <div className={styles['process__step-title']}>{step.title}</div>
                <div className={styles['process__step-desc']}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────── */}
      <section className={styles.reviews}>
        <div className="container">
          <div className={styles.reviews__head}>
            <span className="section-label">Rəylər</span>
            <h2 className="section-title">
              Müştərilərimiz <em>nə deyir?</em>
            </h2>
            {/* Aggregate score */}
            <div className={styles.reviews__score}>
              <span className={styles['reviews__score-num']}>4.9</span>
              <div className={styles['reviews__score-right']}>
                <div className={styles['reviews__score-stars']}>
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <span className={styles['reviews__score-label']}>5 000+ rəy əsasında</span>
              </div>
            </div>
          </div>

          <div className={styles.reviews__grid}>
            {reviews.map(review => (
              <div key={review.name} className={styles.review}>
                <div className={styles.review__stars}>
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className={styles.review__text}>{review.text}</p>
                <div className={styles.review__divider} />
                <div className={styles.review__author}>
                  <div className={styles.review__avatar}>{review.initial}</div>
                  <div>
                    <div className={styles.review__name}>{review.name}</div>
                    <div className={styles.review__service}>{review.service}</div>
                  </div>
                  <div className={styles.review__verified}>
                    <VerifyIcon />
                    Təsdiqlənib
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <FAQ />

      {/* ── CTA ─────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.cta__inner}>
            <div className={styles.cta__icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/>
              </svg>
            </div>
            <h2 className={styles.cta__title}>
              İndi zəng edin,<br /><em>qiymət alın</em>
            </h2>
            <p className={styles.cta__subtitle}>
              Pulsuz konsultasiya və qiymət təklifi üçün bizimlə əlaqə saxlayın. Cavab dərhal.
            </p>
            <div className={styles.cta__actions}>
              <NavLink to="/elaqe" className="btn btn--white">
                Sifariş ver
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </NavLink>
              <a href="tel:+994501234567" className={styles.cta__phone}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z"/>
                </svg>
                +994 50 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
