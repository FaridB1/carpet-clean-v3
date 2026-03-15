import styles from './ServiceCard.module.scss'

interface ServiceCardProps {
  image: string
  title: string
  description: string
  icon: React.ReactNode
  tag?: string
}

export default function ServiceCard({ image, title, description, icon, tag }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      {/* Image */}
      <div className={styles['card__image-wrap']}>
        <img className={styles.card__img} src={image} alt={title} loading="lazy" />
        <div className={styles['card__image-shade']} />
        <div className={styles['card__overlay-gradient']} />

        {tag && <span className={styles.card__tag}>{tag}</span>}

        <div className={styles['card__zoom-btn']}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className={styles.card__body}>
        <div className={styles.card__header}>
          <div className={styles.card__icon}>{icon}</div>
          <h3 className={styles.card__title}>{title}</h3>
        </div>

        <p className={styles.card__desc}>{description}</p>

        <div className={styles.card__footer}>
          <span className={styles.card__more}>
            Ətraflı bax
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  )
}
