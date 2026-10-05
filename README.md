# Runiverse Homepage

실시간 동반 러닝 앱 **Runiverse**의 소개 페이지입니다.

> 떨어져 있어도, 함께 달립니다

## 페이지 구성

| 섹션 | 내용 |
|:-----|:-----|
| Hero | 서비스 소개, 앱 다운로드 버튼, 소개 영상 |
| Story | 함께 달리는 방법 (매칭 신청 → 러너 연결 → 함께 달리기 → 기록 확인) |
| Music | 러닝 기록으로 연주곡을 만드는 기능 소개 (준비 중) |
| Team | 만드는 사람들 |
| CallToAction | 다운로드 안내와 문의 |

## 기술 스택

- React 19
- TypeScript
- Vite

## 시작하기

```bash
cd homepage-web
npm install
npm run dev      # 개발 서버 실행
npm run build    # 타입 검사 후 dist/ 에 빌드
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```text
homepage-web/
├── index.html          # 메타 태그, OG 정보
└── src/
    ├── content.ts      # 페이지 문구, 링크, 팀원 정보
    ├── App.tsx         # 섹션 배치
    ├── index.css       # 전체 스타일
    ├── sections/       # Hero, Story, Music, Team, CallToAction
    └── components/     # Header, Footer, PhoneScreen, ContactModal 등
```

## 문구 수정

화면에 나오는 문구는 모두 `src/content.ts`에 모여 있습니다. 문구만 바꿀 때는 컴포넌트를 건드리지 않아도 됩니다.

- 앱 다운로드 링크: `DOWNLOAD_LINKS` (스토어 등록 전이라 지금은 `#`)
- 소개 영상: `PROMO_VIDEO_ID` (YouTube 영상 ID)
- 팀원: `TEAM` (GitHub 아이디로 프로필 사진과 링크를 불러옴)

## 팀

| 이름 | GitHub |
|:-----|:-------|
| 조지환 | [@jihwanjo-98](https://github.com/jihwanjo-98) |
| 김동완 | [@KimDwDev](https://github.com/KimDwDev) |
| 박찬 | [@zxc88kr](https://github.com/zxc88kr) |

문의: somabruteforce@gmail.com

## 컨벤션

커밋, 브랜치, PR 규칙은 [docs/git-convention.md](docs/git-convention.md)를 따릅니다.
