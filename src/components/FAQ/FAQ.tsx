import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './FAQ.module.scss'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Xalça yuma prosesi neçə gün çəkir?',
    answer:
      'Standart şəraitdə xalçanız götürüldüyü gündən etibarən 24–48 saat ərzində hazır olur. Böyük ölçülü xalçalar və ya xüsusi çirklənmə hallarında bu müddət 72 saata qədər uzana bilər. Dəqiq müddəti sifariş zamanı mütəxəssisimiz sizə bildirəcəkdir.',
  },
  {
    question: 'Xalçalar evdən götürülür?',
    answer:
      'Bəli, Bakı şəhəri daxilində xalçanızı evinizden pulsuz götürüb, yuyulduqdan sonra yenidən çatdırırıq. Müştərinizin rahat vaxtına uyğun vaxt razılaşdırırıq — həftəiçi və həftəsonu xidmət mövcuddur.',
  },
  {
    question: 'Yumşaq mebellərin təmizlənməsi yerindəmi edilir?',
    answer:
      'Bəli. Divan, kreslo və digər yumşaq mebellərin təmizlənməsi bilavasitə evinizin içərisində həyata keçirilir. Komandamız bütün lazımi avadanlıqla gəlir. Xidmət orta hesabla 1–3 saat çəkir.',
  },
  {
    question: 'Hansı təmizləyici vasitələrdən istifadə olunur?',
    answer:
      'Biz yalnız Avropa standartlarına cavab verən, ekoloji cəhətdən təmiz, hypoallergenic sertifikatlı vasitələrdən istifadə edirik. Bu vasitələr uşaqlar, ev heyvanları və allergiyaya həssas şəxslər üçün tamamilə təhlükəsizdir. Parçaya heç bir zərər vermir.',
  },
  {
    question: 'Qiymətlər xalçanın ölçüsünə görə dəyişirmi?',
    answer:
      'Bəli, qiymət xalçanın ölçüsünə (m²), növünə (xovlu, xovsuz, türk, İran) və çirklənmə dərəcəsinə görə müəyyən edilir. Saytımızda yalnız başlanğıc qiymətlər göstərilir. Dəqiq qiymət üçün pulsuz qiymətləndirmə xidmətimizdən istifadə edin — telefon və ya forma vasitəsilə.',
  },
]

interface FAQProps {
  /** Maximum number of items to show. Defaults to all. */
  limit?: number
}

export default function FAQ({ limit }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = limit ? faqData.slice(0, limit) : faqData

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className={styles.faq}>
      <div className="container">
        {/* Header */}
        <div className={styles.faq__head}>
          <div className={styles['faq__head-left']}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">
              Ən çox verilən <em>suallar</em>
            </h2>
            <p className="section-subtitle">
              Xidmətlərimiz haqqında ən çox soruşulan suallara aydın cavablar.
            </p>
          </div>

          <div className={styles['faq__head-right']}>
            <div className={styles['faq__contact-card']}>
              <div className={styles['faq__contact-card-title']}>
                Sualınıza cavab tapmadınız?
              </div>
              <p className={styles['faq__contact-card-desc']}>
                Mütəxəssisimiz sizin sualınızı cavablandırmağa hazırdır. Zəng edin və ya yazın.
              </p>
              <NavLink to="/elaqe" className={styles['faq__contact-card-btn']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .22h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.22 14l.7 2.92z" />
                </svg>
                Bizimlə əlaqə
              </NavLink>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <ul className={styles.faq__list}>
          {items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li
                key={i}
                className={[styles.faq__item, isOpen ? styles['faq__item--open'] : ''].join(' ')}
              >
                <button
                  className={styles.faq__question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faq__num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles['faq__question-text']}>{item.question}</span>
                  <svg
                    className={styles.faq__chevron}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={[styles.faq__answer, isOpen ? styles['faq__answer--open'] : ''].join(' ')}
                  aria-hidden={!isOpen}
                >
                  <div className={styles['faq__answer-inner']}>
                    <p className={styles['faq__answer-text']}>{item.answer}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Footer */}
        <div className={styles.faq__footer}>
          <span className={styles['faq__footer-text']}>Daha çox sualınız var?</span>
          <NavLink to="/elaqe" className={styles['faq__footer-link']}>
            Bizimlə əlaqə saxlayın
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  )
}
