/**
 * 페이지에 들어가는 문구를 한곳에 모아 둡니다.
 * 카피를 고칠 때 컴포넌트를 건드리지 않아도 되도록 분리했습니다.
 * 문구 안의 \n 은 화면에서 줄바꿈으로 보입니다.
 */

/** TODO: 스토어 등록 후 실제 링크로 교체 */
export const DOWNLOAD_LINKS = [
  { platform: 'android', label: 'Android 다운로드', href: '#' },
  { platform: 'ios', label: 'iOS 다운로드', href: '#' },
] as const
/** 히어로에 넣는 YouTube Shorts 광고 영상 */
export const PROMO_VIDEO_ID = 'kLkGxwmTDtc'
export const CONTACT_EMAIL = 'somabruteforce@gmail.com'
export const GITHUB_URL = 'https://github.com/SWM-TeamBruteForce'

export const NAV_ITEMS = [
  { href: '#how', label: '함께 달리는 방법' },
  { href: '#music', label: '러닝 음악' },
  { href: '#team', label: '만드는 사람' },
] as const

export const HERO = {
  meta: '실시간 동반 러닝 앱 · Android · iOS',
  title: ['떨어져 있어도,', '함께 달립니다'],
  /** 문단마다 하나씩 */
  description: [
    '혼자 달리기 아쉬운 날, 함께 뛸 러너를 만나보세요.\n각자 있는 곳에서 동시에 출발하고, 서로의 달린 거리와 페이스를 확인하며 함께 달립니다.',
    '러닝이 끝나면 오늘 달린 거리, 시간, 경로를 기록으로 확인할 수 있습니다.',
  ],
  howLink: '함께 달리는 방법 보기',
  videoLink: 'Runiverse 소개 영상 보기',
} as const

export type StoryScreen = 'select' | 'matched' | 'running' | 'record'

export type StoryStep = {
  screen: StoryScreen
  label: string
  title: string
  description: string
  /** 실제 앱 스크린샷 경로. 비워 두면 코드로 그린 화면을 보여 줍니다. */
  image?: string
}

export const STORY = {
  title: '함께 달리는 방법',
  description: '뛸 거리와 시작 시간을 선택하세요.\nRuniverse가 함께 달릴 러너를 찾아드립니다.',
} as const

export const STORY_STEPS: StoryStep[] = [
  {
    screen: 'select',
    label: '매칭 신청',
    title: '언제, 얼마나 뛸지 정하세요',
    description:
      '원하는 거리와 시작 시간을 선택하고 매칭을 신청하세요. 기다리는 동안 대기 중인 러너 수를 확인할 수 있습니다.',
  },
  {
    screen: 'matched',
    label: '러너 연결',
    title: '함께 달릴 러너를 만나세요',
    description:
      '같은 시간에 뛸 러너가 연결되면 알려드립니다. 서로 다른 곳에 있어도 괜찮습니다. 각자 있는 곳에서 러닝을 준비하세요.',
  },
  {
    screen: 'running',
    label: '함께 달리기',
    title: '각자의 동네에서, 같은 시간에 출발하세요',
    description:
      '달리는 동안 서로의 진행 거리와 페이스를 실시간으로 확인할 수 있습니다. 상대가 얼마나 앞서거나 뒤처져 있는지 보며 함께 달려보세요.',
  },
  {
    screen: 'record',
    label: '기록 확인',
    title: '함께 달린 오늘을 돌아보세요',
    description:
      '러닝이 끝나면 나의 거리, 시간, 평균 페이스와 이동 경로가 정리됩니다. 기록이 쌓일수록 내 평균 페이스도 갱신됩니다.',
  },
]

export const MUSIC = {
  badge: '새로운 기능 · 준비 중',
  title: ['오늘의 러닝이', '나만의 음악으로'],
  description:
    '오늘 달린 기록을 바탕으로 나만의 연주곡을 만듭니다.\n함께 달린 순간은 두 사람의 곡에 같은 멜로디로 담깁니다.',
} as const

export type MusicStep = {
  label: string
  title: string
  description: string
  tags?: string[]
}

export const MUSIC_STEPS: MusicStep[] = [
  {
    label: '러닝 기록 분석',
    title: '오늘 어떻게 달렸는지 살펴봅니다',
    description:
      '발걸음의 빠르기, 달리는 속도와 경로, 함께 달성한 콤보를 모아 오늘의 러닝을 분석합니다.',
    tags: ['케이던스(분당 발걸음 수)', '페이스', '러닝 경로', '콤보'],
  },
  {
    label: '음악 구성',
    title: '달린 기록으로 곡의 빠르기와 분위기를 정합니다',
    description:
      '러닝 기록을 바탕으로 음악의 빠르기와 분위기, 길이를 정합니다. 오늘의 달리기가 곡을 만드는 재료가 됩니다.',
  },
  {
    label: 'AI 작곡',
    title: '나의 러닝을 담은 연주곡을 만듭니다',
    description: '음악 생성 AI가 러닝 기록에서 정한 조건을 바탕으로 나만의 연주곡을 만듭니다.',
  },
  {
    label: '함께한 멜로디',
    title: '함께 달린 순간을 같은 멜로디로 담습니다',
    description:
      '상대와 비슷한 거리를 유지하며 쌓은 콤보가 두 사람의 곡에 공통 멜로디로 들어갑니다. 각자의 음악에 함께한 흔적이 남습니다.',
  },
  {
    label: '음악 보관함',
    title: '달리던 순간을 음악으로 다시 만나세요',
    description:
      '완성된 곡은 보관함에 저장됩니다. 언제든 다시 들으며 그날의 러닝을 떠올려보세요.',
  },
]

export const TEAM_INTRO = {
  title: 'Runiverse를 만드는 사람들',
  description:
    '혼자 달리기 어려운 날에도 함께라면 달릴 수 있다고 믿습니다.\n멀리 떨어져 있어도 서로에게 힘이 되는 러닝 경험을 만들고 있습니다.',
} as const

export type Member = {
  name: string
  github: string
}

export const TEAM: Member[] = [
  { name: '조지환', github: 'jihwanjo-98' },
  { name: '김동완', github: 'KimDwDev' },
  { name: '박찬', github: 'zxc88kr' },
]

export const CTA = {
  title: '다음 러닝은, 함께 달려보세요',
  description:
    '각자 있는 곳에서 출발해도 함께 달릴 수 있습니다.\nRuniverse에서 함께 뛸 러너를 만나보세요.',
} as const

/** GitHub 프로필 이미지. 계정 아바타를 바꾸면 이 페이지도 따라 바뀝니다. */
export const avatarUrl = (github: string, size = 240) =>
  `https://github.com/${github}.png?size=${size}`

export const profileUrl = (github: string) => `https://github.com/${github}`
