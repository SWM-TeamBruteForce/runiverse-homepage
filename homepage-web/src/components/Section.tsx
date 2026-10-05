import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  description?: string
  children: ReactNode
  /** 배경을 한 톤 내려 섹션 사이 경계를 만듭니다. */
  raised?: boolean
}

export default function Section({ id, title, description, children, raised = false }: SectionProps) {
  return (
    <section id={id} className={`section ${raised ? 'section--raised' : ''}`}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
