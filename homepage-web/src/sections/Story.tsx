import { useEffect, useRef, useState } from 'react'
import PhoneScreen from '../components/PhoneScreen'
import Runner from '../components/Runner'
import Section from '../components/Section'
import { STORY, STORY_STEPS } from '../content'

/**
 * 기능 소개와 사용 흐름을 한 줄로 합친 섹션.
 * 글 옆에 한 줄짜리 러닝 트랙이 깔려 있고, 스크롤하는 동안 러너가 달립니다.
 * 넓은 화면: 글을 스크롤하면 옆에 고정된 폰 화면이 단계에 맞게 바뀝니다.
 * 좁은 화면: 단계마다 글과 화면이 번갈아 세로로 놓입니다.
 */
export default function Story() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])
  const courseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 화면 세로 가운데 선을 지나는 단계를 현재 단계로 봅니다.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index))
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // 스크롤하는 동안에만 러너의 팔다리가 움직입니다. 매 스크롤마다 리렌더하지 않도록 클래스만 바꿉니다.
    const course = courseRef.current
    if (!course) return
    let timer = 0
    const onScroll = () => {
      course.classList.add('is-running')
      window.clearTimeout(timer)
      timer = window.setTimeout(() => course.classList.remove('is-running'), 180)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <Section id="how" title={STORY.title} description={STORY.description}>
      <div className="story">
        <div ref={courseRef} className="course">
          <div className="course__track" aria-hidden="true">
            <Runner />
          </div>

          <ol className="story__steps">
            {STORY_STEPS.map((step, index) => (
              <li
                key={step.screen}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                data-index={index}
                className={`story__step ${index === active ? 'is-active' : ''}`}
              >
                <p className="story__label">
                  <span className="checkpoint" aria-hidden="true" />
                  <span className="story__number">{index + 1}</span>
                  {step.label}
                </p>
                <h3 className="story__title">{step.title}</h3>
                <p className="story__description">{step.description}</p>

                <div className="phone phone--inline" aria-hidden="true">
                  <PhoneScreen step={step} />
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="story__stage" aria-hidden="true">
          <div className="phone">
            {STORY_STEPS.map((step, index) => (
              <div
                key={step.screen}
                className={`phone__layer ${index === active ? 'is-active' : ''}`}
              >
                <PhoneScreen step={step} />
              </div>
            ))}
          </div>
          <div className="story__progress">
            {STORY_STEPS.map((step, index) => (
              <span key={step.screen} className={index === active ? 'is-active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
