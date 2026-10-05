import { MUSIC, MUSIC_STEPS } from '../content'

/** 막대 높이(%) — 재생 중인 곡처럼 보이게 하는 장식용 파형 */
const WAVE = [38, 62, 46, 80, 55, 92, 70, 48, 84, 60, 96, 74, 52, 88, 66, 42, 78, 58, 90, 50, 72, 44, 64, 36]

/**
 * 러닝 기록으로 곡을 만드는 기능 소개.
 * 앞 섹션과 구분되도록 어두운 배경에 가로 흐름(좁은 화면에서는 세로)으로 놓습니다.
 */
export default function Music() {
  return (
    <section id="music" className="music">
      <div className="container">
        <div className="music__head">
          <div>
            <p className="music__badge">{MUSIC.badge}</p>
            <h2 className="music__title">
              {MUSIC.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="music__description">{MUSIC.description}</p>
          </div>

          <div className="track-card" aria-hidden="true">
            <div className="track-card__top">
              <span className="track-card__play" />
              <div>
                <p className="track-card__name">아침 5km, 하늘님과</p>
                <p className="track-card__meta">85 BPM · 12콤보 구간 포함</p>
              </div>
            </div>
            <div className="wave">
              {WAVE.map((h, i) => (
                <span
                  key={i}
                  className={i >= 9 && i <= 14 ? 'is-combo' : ''}
                  style={{ height: `${h}%`, animationDelay: `${(i % 6) * 0.12}s` }}
                />
              ))}
            </div>
            <p className="track-card__legend">
              <span className="track-card__swatch" /> 함께 달성한 콤보 구간
            </p>
          </div>
        </div>

        <ol className="pipeline">
          {MUSIC_STEPS.map((step, index) => (
            <li key={step.label} className="pipeline__step">
              <p className="pipeline__label">
                <span className="pipeline__number">{String(index + 1).padStart(2, '0')}</span>
                {step.label}
              </p>
              <h3 className="pipeline__title">{step.title}</h3>
              <p className="pipeline__description">{step.description}</p>
              {step.tags && (
                <ul className="pipeline__tags">
                  {step.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
