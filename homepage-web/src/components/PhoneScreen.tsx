import type { CSSProperties } from 'react'
import type { StoryStep } from '../content'

/**
 * 앱(runiverse-frontend)의 실제 화면을 줄여 그린 모형입니다.
 * 문구는 앱의 app_strings.dart, 색과 크기는 v2 디자인 토큰을 따릅니다.
 * 장식용이라 스크린리더에는 숨기고, 내용은 옆의 글이 전달합니다.
 */
export default function PhoneScreen({ step }: { step: StoryStep }) {
  if (step.image) {
    return <img className="screen screen--image" src={step.image} alt="" />
  }

  switch (step.screen) {
    case 'select':
      return <MatchRegisterScreen />
    case 'matched':
      return <MatchRoomScreen />
    case 'running':
      return <PartyRunScreen />
    case 'record':
      return <RunResultScreen />
  }
}

/** 매칭 등록 — 시간대와 목표 거리를 고릅니다 */
function MatchRegisterScreen() {
  return (
    <div className="screen">
      <StatusBar time="12:30" />
      <div className="app-bar">
        <IconBack />
        매칭 등록
      </div>

      <div className="app-body">
        <p className="app-h">오늘 언제 뛸까요?</p>
        <div className="app-field">
          19:00
          <IconChevron />
        </div>
        <p className="app-banner">
          <IconPeople />
          3명 대기
        </p>
        <p className="app-note">{'같은 시간대 러너끼리 매칭돼요.\n대기 인원이 많을수록 빨리 만나요'}</p>

        <p className="app-h app-h--gap">목표 거리</p>
        <div className="app-chips">
          <span className="app-chip">3km</span>
          <span className="app-chip app-chip--on">5km</span>
          <span className="app-chip">10km</span>
        </div>

        <p className="app-tip">
          <IconRun />
          페이스는 프로필 기록으로 자동으로 맞춰드려요
        </p>
        <p className="app-guide">
          <IconInfo />
          2~4명이 함께 달려요
        </p>
        <p className="app-guide">
          <IconInfo />
          매칭이 확정된 뒤에 나가면 20분 동안 다시 신청할 수 없어요
        </p>
      </div>

      <div className="app-bottom">
        <span className="app-btn">매칭 등록하기</span>
      </div>
    </div>
  )
}

/** 매칭 대기실 — 확정된 뒤 시작 시각까지 기다립니다 */
function MatchRoomScreen() {
  return (
    <div className="screen">
      <StatusBar time="18:51" />
      <div className="app-bar app-bar--center">매칭 완료!</div>

      <div className="app-body">
        <div className="app-room">
          <span className="app-pill">시작까지</span>
          <p className="app-countdown">08:20</p>
          <p className="app-room__hint">출발 30초 전에 출발 대기실로 옮겨요</p>
        </div>

        <div className="app-facts">
          <div className="app-fact">
            <p className="app-fact__label">시작 시간</p>
            <p className="app-fact__value">19:00</p>
          </div>
          <div className="app-fact">
            <p className="app-fact__label">목표 거리</p>
            <p className="app-fact__value">5km</p>
          </div>
        </div>

        <div className="app-party">
          <p className="app-party__title">파티원 (2명)</p>
          <div className="app-party__chips">
            <span className="app-runner-chip">
              <span className="app-runner-chip__face">나</span>나
            </span>
            <span className="app-runner-chip">
              <span className="app-runner-chip__face">하</span>하늘
            </span>
          </div>
        </div>

        <p className="app-room__notice">지금 나가면 20분 동안 다시 신청할 수 없어요</p>
      </div>

      <div className="app-bottom">
        <span className="app-btn app-btn--secondary">나가기</span>
      </div>
    </div>
  )
}

/** 러닝 중 셋째 장 — 파티원과 거리·페이스를 비교하고 콤보를 쌓습니다 */
function PartyRunScreen() {
  return (
    <div className="screen">
      <StatusBar time="19:19" />
      <p className="app-page-title">파티원 비교</p>
      <p className="app-page-sub">파티원 상태</p>

      <div className="app-body app-body--run">
        <RunCard
          who="me"
          face="나"
          name="나"
          distance="3.4"
          pace={`5'30"`}
          progress={68}
          status="하늘 곁에서 달리는 중"
          combo="11콤보"
        />
        <RunCard
          who="mate"
          face="하"
          name="하늘"
          distance="3.4"
          pace={`5'26"`}
          progress={68}
          status="나보다 20m 앞"
          combo="11콤보"
        />

        <div className="app-dots">
          <span />
          <span />
          <span className="is-on" />
        </div>
      </div>

      <div className="app-bottom">
        <span className="app-btn app-btn--secondary">중지</span>
      </div>
    </div>
  )
}

type RunCardProps = {
  who: 'me' | 'mate'
  face: string
  name: string
  distance: string
  pace: string
  progress: number
  status: string
  combo: string
}

function RunCard({ who, face, name, distance, pace, progress, status, combo }: RunCardProps) {
  return (
    <div className={`app-runcard app-runcard--${who}`}>
      <div className="app-runcard__head">
        <span className="app-runcard__face">{face}</span>
        <span className="app-runcard__name">{name}</span>
        {who === 'me' && <span className="app-runcard__me">나</span>}
      </div>
      <div className="app-runcard__stats">
        <div>
          <p className="app-runcard__label">현재 거리</p>
          <p className="app-runcard__value">
            {distance}
            <span>/ 5 km</span>
          </p>
        </div>
        <div>
          <p className="app-runcard__label">페이스</p>
          <p className="app-runcard__value">
            {pace}
            <span>/km</span>
          </p>
        </div>
      </div>
      <div className="app-runcard__bar" style={{ '--p': `${progress}%` } as CSSProperties} />
      <div className="app-runcard__foot">
        <span className="app-runcard__status">{status}</span>
        <span className="app-runcard__combo">{combo}</span>
      </div>
    </div>
  )
}

/** 러닝 결과 — 내 경로와 기록, 파티원 비교, 구간별 페이스 */
function RunResultScreen() {
  return (
    <div className="screen">
      <StatusBar time="19:31" />
      <div className="app-bar">
        <IconBack />
        러닝 결과
      </div>

      <div className="app-body">
        <div className="app-map">
          <svg viewBox="0 0 240 132" preserveAspectRatio="xMidYMid slice">
            <path className="app-map__river" d="M-10 118 C60 100 120 104 170 82 S230 50 260 44 L260 70 C220 76 200 104 170 112 S70 130 -10 140Z" />
            <path className="app-map__road" d="M0 40h240M0 78h240M44 0v132M112 0v132M180 0v132M0 10l240 60" />
            <path className="app-map__road app-map__road--minor" d="M0 58h240M78 0v132M146 0v132M214 0v132M0 22h240" />
            <path
              className="app-map__route"
              d="M30 96 C46 90 58 86 76 82 S112 76 128 68 S160 54 176 50 S204 40 212 30 C216 24 210 18 202 20 S182 34 170 38"
            />
            <circle className="app-map__start" cx="30" cy="96" r="4.5" />
            <circle className="app-map__end" cx="170" cy="38" r="4.5" />
          </svg>
          <span className="app-map__pill">5.02km · 28:14</span>
        </div>

        <dl className="app-metrics">
          <div>
            <dd>28:14</dd>
            <dt>시간</dt>
          </div>
          <div>
            <dd>5.02km</dd>
            <dt>거리</dt>
          </div>
          <div>
            <dd>5'37"</dd>
            <dt>페이스</dt>
          </div>
          <div>
            <dd>172</dd>
            <dt>케이던스</dt>
          </div>
        </dl>

        <div className="app-compare">
          <p className="app-compare__title">파티원 비교</p>
          <p className="app-compare__row">
            <span className="app-compare__dot app-compare__dot--me" />
            <span>나</span>
            <span>28:14</span>
            <span>5'37"</span>
          </p>
          <p className="app-compare__row">
            <span className="app-compare__dot app-compare__dot--mate" />
            <span>하늘</span>
            <span>27:58</span>
            <span>5'34"</span>
          </p>
        </div>

        <div className="app-chart">
          <p className="app-chart__head">
            구간별 페이스<span>/km</span>
          </p>
          <svg viewBox="0 0 240 70" preserveAspectRatio="none">
            <path className="app-chart__grid" d="M0 10h240M0 35h240M0 60h240" />
            <polyline className="app-chart__line" points="10,44 66,32 122,38 178,26 230,16" />
          </svg>
          <div className="app-chart__axis">
            <span>1km</span>
            <span>2km</span>
            <span>3km</span>
            <span>4km</span>
            <span>5.02km</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusBar({ time }: { time: string }) {
  return (
    <div className="app-status">
      <span>{time}</span>
      <svg className="app-status__icons" viewBox="0 0 40 12">
        <rect x="0" y="8" width="3" height="4" rx="0.8" />
        <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" />
        <rect x="9" y="3" width="3" height="9" rx="0.8" />
        <rect x="13.5" y="0.5" width="3" height="11.5" rx="0.8" />
        <rect x="21" y="1" width="16" height="10" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <rect x="22.8" y="2.8" width="10.6" height="6.4" rx="1.2" />
        <rect x="38" y="4" width="1.6" height="4" rx="0.8" />
      </svg>
    </div>
  )
}

function IconBack() {
  return (
    <svg className="app-icon" viewBox="0 0 24 24">
      <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevron() {
  return (
    <svg className="app-icon app-icon--muted" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPeople() {
  return (
    <svg className="app-icon app-icon--brand" viewBox="0 0 24 24">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 19c0-3.2 2.9-5.4 6.5-5.4s6.5 2.2 6.5 5.4v.5h-13z" />
      <circle cx="17" cy="8.8" r="2.6" />
      <path d="M16.3 13.7c3 .3 5.2 2 5.2 4.8v1h-4.3v-.6c0-2-.3-3.7-.9-5.2z" />
    </svg>
  )
}

function IconRun() {
  return (
    <svg className="app-icon app-icon--brand" viewBox="0 0 24 24">
      <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
    </svg>
  )
}

function IconInfo() {
  return (
    <svg className="app-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 11v5M12 7.6v.1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
