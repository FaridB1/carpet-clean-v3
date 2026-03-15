import { NavLink } from 'react-router-dom'
import styles from './About.module.scss'

const stats = [
  { num: '8+', label: 'İl təcrübə' },
  { num: '10 000+', label: 'Yuyulan xalça' },
  { num: '5 000+', label: 'Məmnun müştəri' },
  { num: '99%', label: 'Məmnuniyyət dərəcəsi' },
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Keyfiyyət öhdəliyi',
    desc: 'Hər xalçaya fərdi yanaşırıq. Nəticədən razı qalmasanız, pulsuz yenidən yuyuruq.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Peşəkar komanda',
    desc: 'Sertifikatlı mütəxəssislərimiz daim təlim keçir, yeni texnologiyaları mənimsəyir.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c-2.76 0-5 4.48-5 10s2.24 10 5 10 5-4.48 5-10-2.24-10-5-10zM2 12h20"/>
      </svg>
    ),
    title: 'Ekoloji məsuliyyət',
    desc: 'İstifadə etdiyimiz bütün vasitələr EU ekoloji standartlarına uyğundur.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Pulsuz çatdırılma',
    desc: 'Bakı daxilinde xalçanızı götürüb, yuyulmuş halda geri çatdırırıq — tamamilə pulsuz.',
  },
]

const team = [
  { name: 'Elnur Həsənov', role: 'Baş menecer & Təsisçi', initial: 'E', exp: '10 il təcrübə' },
  { name: 'Rauf Quliyev', role: 'Texniki direktor', initial: 'R', exp: '8 il təcrübə' },
  { name: 'Sevinc Nəsirova', role: 'Müştəri xidmətləri', initial: 'S', exp: '5 il təcrübə' },
  { name: 'Tural Əliyev', role: 'Baş usta', initial: 'T', exp: '7 il təcrübə' },
]

const milestones = [
  { year: '2014', label: 'Şirkətin əsası qoyuldu', desc: 'Bakıda ilk professional xalça yuma stansiyamızı açdıq.' },
  { year: '2016', label: 'Avropa avadanlığı', desc: 'İtaliyadan gətirilmiş müasir yuma avadanlığını tətbiq etdik.' },
  { year: '2019', label: '2 000+ müştəri', desc: 'Müştəri bazamız 2000 nəfəri keçdi, yeni ofis açdıq.' },
  { year: '2022', label: 'Yerindəyuma xidməti', desc: 'Mebel və pərdə üçün yerindəyuma xidmətini başlatdıq.' },
  { year: '2024', label: '5 000+ müştəri', desc: 'Bakının ən çox tövsiyyə olunan xalça yuma şirkəti oldıq.' },
]

export default function About() {
  return (
    <div className={styles.about}>

      {/* ── HERO ─────────────────────────────────── */}
      <section className={styles.about__hero}>
        <div className={styles.about__hero_bg} />
        <div className={styles.about__hero_gradient} />
        <div className="container">
          <div className={styles.about__hero_content}>
            <span className="section-label" style={{ color: '#5fe09a' }}>Haqqımızda</span>
            <h1 className={styles.about__hero_title}>
              Bakının ən etibarlı<br /><em>təmizlik şirkəti</em>
            </h1>
            <p className={styles.about__hero_subtitle}>
              2014-cü ildən etibarən Bakıda professional xalça və mebel təmizləmə xidməti göstəririk.
              Müasir avadanlıq, ekoloji vasitələr və peşəkar komanda ilə hər gün yüzlərlə müştəriyə xidmət edirik.
            </p>
            <div className={styles.about__hero_actions}>
              <NavLink to="/elaqe" className="btn btn--primary">
                Sifariş ver
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </NavLink>
              <NavLink to="/xidmetlerimiz" className="btn btn--outline" style={{ color: 'rgba(255,255,255,0.82)', borderColor: 'rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.07)' }}>
                Xidmətlərə bax
              </NavLink>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.about__hero_stats}>
          <div className="container">
            <div className={styles.about__hero_stats_inner}>
              {stats.map(s => (
                <div key={s.label} className={styles.about__hero_stat}>
                  <span className={styles['about__hero_stat-num']}>{s.num}</span>
                  <span className={styles['about__hero_stat-label']}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────── */}
      <section className={`${styles.about__story} section`}>
        <div className="container">
          <div className={styles.about__story_inner}>
            <div className={styles.about__story_image}>
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80" alt="Şirkətin tarixi" loading="lazy" />
              <div className={styles.about__story_badge}>
                <span className={styles['about__story_badge-icon']}>🏆</span>
                <div>
                  <div className={styles['about__story_badge-num']}>8+</div>
                  <div className={styles['about__story_badge-label']}>İl bazarda</div>
                </div>
              </div>
            </div>
            <div className={styles.about__story_content}>
              <span className="section-label">Bizim hekayəmiz</span>
              <h2 className="section-title">Kiçik başlanğıcdan<br /><em>böyük uğura</em></h2>
              <p className={styles.about__story_text}>
                CleanPro 2014-cü ildə kiçik bir komanda ilə başladı. Məqsədimiz sadə idi: Bakı
                sakinlərinə həqiqətən keyfiyyətli, etibarlı xalça yuma xidməti göstərmək.
              </p>
              <p className={styles.about__story_text}>
                Bu gün 20-dən artıq əməkdaşımız, ən müasir İtaliya-istehsallı avadanlıq və
                5 000-dən çox məmnun müştərimiz var. Uğurumuzun sirri sadədir: hər xalçaya
                öz evimizin xalçası kimi yanaşırıq.
              </p>
              <div className={styles.about__checklist}>
                {[
                  'EU sertifikatlı ekoloji vasitələr',
                  'Bakı daxili pulsuz çatdırılma',
                  '24–48 saat ərzində nəticə',
                  'Keyfiyyət zəmanəti',
                ].map(item => (
                  <div key={item} className={styles.about__check_item}>
                    <span className={styles.about__check_icon}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────── */}
      <section className={styles.about__values}>
        <div className="container">
          <div className={styles.about__values_head}>
            <span className="section-label">Dəyərlərimiz</span>
            <h2 className="section-title">Bizi fərqləndirən <em>prinsiplər</em></h2>
            <p className="section-subtitle">Hər xidmətimizin arxasında duran əsas dəyərlərimiz.</p>
          </div>
          <div className={styles.about__values_grid}>
            {values.map(v => (
              <div key={v.title} className={styles.about__value_card}>
                <div className={styles['about__value_card-icon']}>{v.icon}</div>
                <h3 className={styles['about__value_card-title']}>{v.title}</h3>
                <p className={styles['about__value_card-desc']}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ───────────────────────────────── */}
      <section className={styles.about__timeline}>
        <div className="container">
          <div className={styles.about__timeline_head}>
            <span className="section-label">Tarixçəmiz</span>
            <h2 className="section-title">İnkişaf <em>yolumuz</em></h2>
          </div>
          <div className={styles.about__timeline_list}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.about__timeline_item} ${i % 2 === 0 ? styles['about__timeline_item--left'] : styles['about__timeline_item--right']}`}>
                <div className={styles.about__timeline_card}>
                  <span className={styles.about__timeline_year}>{m.year}</span>
                  <h4 className={styles.about__timeline_label}>{m.label}</h4>
                  <p className={styles.about__timeline_desc}>{m.desc}</p>
                </div>
                <div className={styles.about__timeline_dot} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────── */}
      <section className={`${styles.about__team} section`}>
        <div className="container">
          <div className={styles.about__team_head}>
            <span className="section-label">Komandamız</span>
            <h2 className="section-title">Arxanızda duran <em>peşəkarlar</em></h2>
            <p className="section-subtitle">Müştərilərimizin məmnuniyyəti üçün yorulmadan çalışan komandamız.</p>
          </div>
          <div className={styles.about__team_grid}>
            {team.map(member => (
              <div key={member.name} className={styles.about__team_card}>
                <div className={styles.about__team_avatar}>{member.initial}</div>
                <div className={styles.about__team_name}>{member.name}</div>
                <div className={styles.about__team_role}>{member.role}</div>
                <div className={styles.about__team_exp}>{member.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────── */}
      <section className={styles.about__cta}>
        <div className="container">
          <div className={styles.about__cta_inner}>
            <div>
              <h2 className={styles.about__cta_title}>Xidmətimizi sınamağa hazırsınız?</h2>
              <p className={styles.about__cta_sub}>Pulsuz sifariş edin, fərqi özünüz görün.</p>
            </div>
            <NavLink to="/elaqe" className="btn btn--white">
              İndi sifariş ver
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}
