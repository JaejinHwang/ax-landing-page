# Palantir.com 웹사이트 디자인 분석

> 분석 일자: 2026-01-27
> 대상 URL: https://www.palantir.com/

---

## 목차

1. [디자인 스타일 (Design System)](#1-디자인-스타일-design-system)
2. [마이크로인터랙션 & 애니메이션](#2-마이크로인터랙션--애니메이션)
3. [페이지 섹션 구조 & 구성 요소](#3-페이지-섹션-구조--구성-요소)
4. [핵심 디자인 패턴 요약](#4-핵심-디자인-패턴-요약)

---

## 1. 디자인 스타일 (Design System)

### 1.1 Typography

| 속성 | 값 |
|------|-----|
| **Primary Font** | `Alliance No.2` (헤딩용, 커스텀 폰트) |
| **Secondary Font** | `Alliance No.1` (본문용, 커스텀 폰트) |
| **Fallback Stack** | system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif |

#### Font Size Scale

| 용도 | 크기 |
|------|------|
| Hero 헤딩 | 72–80px |
| 섹션 헤딩 (제품명 등) | 46–68px |
| 서브 헤딩 | 24–34px |
| 본문 | 16–18px |
| 캡션 / 라벨 | 10–14px (대문자 변환, letter-spacing 확대) |

### 1.2 Color Palette

#### 배경색

| 토큰 | 색상값 | 용도 |
|------|--------|------|
| Body | `#FFFFFF` | 기본 페이지 배경 |
| Dark Primary | `#1E2124` | Hero, 캐러셀, 네비게이션 오버레이 |
| Dark Deep | `#0D0E10` | 가장 어두운 섹션 배경 |
| Dark Card | `#202426` | CTA 카드 (Start Building) |
| Light Gray | `#F3F3F3` / `#F4F4F4` | 후기 카드, CTA 카드 (Request a Demo) |
| Neutral Light | `#EFEFEF` / `#DBDBDB` | 보더, 디바이더 |
| Overlay | `rgba(0, 0, 0, 0.5)` | 모달 / 오버레이 배경 |
| Muted Overlay | `rgba(171, 171, 171, 0.1)` | 반투명 요소 |

#### 텍스트 색상

| 토큰 | 색상값 | 용도 |
|------|--------|------|
| Text Primary | `#1E2124` | 기본 본문 텍스트 |
| Text on Dark | `#FFFFFF` | 다크 배경 위 텍스트 |
| Text Muted | `#AAAAAA` | 보조 텍스트, 후기 본문 |
| Text Subtle | `#767676` | 비활성 요소 |
| Text Dim | `#555555` / `#565656` | 부가 설명 |
| Accent Blue | `#3860BE` | 포커스 링, 링크 강조 |
| Green Accent | `#3C7356` | 특수 강조 (CTA 등) |

### 1.3 Layout 특성

- **전체 너비 풀스크린** 레이아웃 (Hero, 캐러셀 등)
- 콘텐츠 최대 너비 제한 후 중앙 정렬
- 섹션 간 **수평 구분선(divider)** 으로 시각적 분리
- 여백이 넉넉한 **미니멀한 화이트스페이스** 활용
- 다크/라이트 섹션 교차 배치로 리듬감 생성
- 총 페이지 높이: ~6,798px (뷰포트 기준 약 7배)

---

## 2. 마이크로인터랙션 & 애니메이션

> 총 **210개의 인터랙션 CSS 규칙**과 **20개의 keyframe 애니메이션**이 감지되었습니다.

### 2.1 Hover 인터랙션

| 요소 | 동작 | 트랜지션 |
|------|------|----------|
| 일반 링크 (`:hover`) | `color` → `--hover-color` 변수 적용 | `0.25s ease-in-out` |
| 버튼 (`:hover`) | `background-color` 변경 | `0.3s` |
| 네비게이션 링크 | 호버 시 다른 항목의 opacity 감소 (`:focus-within` 패턴) | `0.25s ease-in-out` |
| 카드 (`:hover`) | 배경색 밝아짐 + 텍스트 색상 변경 + 좌측 보더 확대 | `0.3s` |
| 카드 내 아이콘 (`:active`) | `transform: translate(3px, -3px)` 대각선 이동 | `0.25s ease-in-out` |
| 검색 결과 (`:active`) | 아이콘 대각선 이동 + 텍스트 색상 변경 | - |
| 햄버거 메뉴 (`:hover`) | `opacity: 1` (완전 불투명) | - |
| 활성 버튼 (active state) | `background-color`, `border-color` → `--text-color` | - |
| 드롭다운 (`:focus`) | `outline: 0.111rem solid --accent-color` | - |

### 2.2 Transition 패턴

```css
/* 색상 전환 */
color:            0.25s ease-in-out;
color:            0.3s;

/* 투명도 */
opacity:          0.25s ease-in-out;
opacity:          0.5s;
opacity:          0.15s linear;

/* 배경색 */
background-color: 0.125s ease-in 0.175s;
background-color: 0.25s ease-in-out;
background-color: 0.3s;

/* 트랜스폼 */
transform:        0.25s ease-in-out;
transform:        0.5s;

/* 패딩 */
padding-bottom:   0.25s ease-in-out;

/* 복합 전환 */
background-color: 0.25s ease-in-out, color 0.25s ease-in-out;
background-color: 0.3s, color 0.3s, border-color 0.3s;
transform:        0.25s ease-in-out, opacity 0s linear 0.25s;
```

### 2.3 Keyframe Animations

| 애니메이션 이름 | 용도 |
|----------------|------|
| `fadeInUp` | 스크롤 진입 시 아래에서 위로 등장 |
| `fadeOutDown` | 스크롤 퇴장 시 위에서 아래로 사라짐 |
| `fadeIn` / `fadeOut` | 단순 투명도 전환 |
| `popUp` | 요소 팝업 등장 |
| `bounce` | 바운스 효과 (스크롤 안내 화살표 등) |
| `flicker-temp` | 텍스트 깜빡임 (글리치 효과) |
| `glitch` | 글리치 스타일 텍스트 이펙트 |
| `gothamFlicker` | Gotham 브랜드 전용 깜빡임 |
| `horizontalScrollingCardsTrack` | 수평 카드 캐러셀 자동 스크롤 |
| `trackScroll` | 트랙 스크롤 모션 |
| `shimmer` | 로딩/스켈레톤 시머 효과 |
| `cover-reveal` | 이미지 커버 리빌 (정면 마스크) |
| `side-cover-reveal` | 이미지 측면 리빌 |
| `right-side-cover-reveal` | 이미지 우측 리빌 |
| `far-right-side-cover-reveal` | 이미지 최우측 리빌 |
| `moveGrayBackground` | 배경 이동 애니메이션 |
| `progress` | 프로그레스 바 진행 |

### 2.4 스크롤 기반 인터랙션

- **Hero 영상**: 풀스크린 배경 비디오가 스크롤에 따라 전환 (복수 장면 순환)
- **"Scroll to Explore"** 텍스트와 함께 `bounce` 애니메이션으로 스크롤 유도
- **헤딩 등장**: `opacity: 0` 초기 상태 → 스크롤 진입 시 `fadeInUp`으로 등장 (`data-animation="header"` 속성)
- **리스트 아이템 등장**: 순차적 stagger 애니메이션 (`data-animation="list"` 속성)
- **CSS 변수 활용**: `--linkAnimationDone` 등의 변수로 애니메이션 완료 상태 관리

---

## 3. 페이지 섹션 구조 & 구성 요소

### 3.1 Announcement Bar (상단 배너)

```
[텍스트: "Read CEO Alex Karp's"] [링크: "Letter to Shareholders"] [닫기 버튼: X]
```

- **위치**: 페이지 최상단 고정
- **스타일**: 다크 배경 (`#1E2124`), 흰색 텍스트, 링크 밑줄 처리
- **인터랙션**: X 버튼으로 닫기 가능

### 3.2 Global Header (Sticky Navigation)

```
[Palantir 로고 (SVG)]                    [Get Started 버튼] [검색 아이콘] [햄버거 메뉴]
```

- **위치**: 스크롤 시 상단 고정 (sticky)
- **구성 요소**:
  - 좌측: Palantir 로고 (홈 링크)
  - 우측: "Get Started" 아웃라인 버튼 + 검색 돋보기 아이콘 + 햄버거 메뉴(3선)
- **인터랙션**: 스크롤 시 배경 투명 → 반투명 전환, 햄버거 클릭 시 풀스크린 네비게이션 오버레이

### 3.3 Hero Section (풀스크린)

```
┌─────────────────────────────────────────┐
│           [풀스크린 배경 비디오]            │
│                                         │
│        AI-Powered Automation            │
│         for Every Decision              │
│                                         │
│           [Scroll to Explore ↓]         │
└─────────────────────────────────────────┘
```

- **배경**: 자동 재생 루프 비디오 (군사/위성/소프트웨어 장면 순환)
- **타이포**: 중앙 정렬, 72–80px, 흰색, 모노스페이스 스타일 자간
- **하단 CTA**: "Scroll to Explore" 텍스트 + bounce 애니메이션 아이콘

### 3.4 Horizontal Scrolling Carousel (뉴스/제품 캐러셀)

```
[ShipOS] [Warp Speed] [Paragon] [DevCon 4] [AIPCon 8] [Interoperability] [Maven] [TITAN] [Chain Reaction]  [See All →]
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  [대형 이미지]  │  [대형 이미지]  │  [대형 이미지]  │  [대형 이미지]  │  ← 자동 수평 스크롤
│  카테고리 라벨  │  카테고리 라벨  │  카테고리 라벨  │  카테고리 라벨  │
│  제목 ↗       │  제목 ↗       │  제목 ↗       │  제목 ↗       │
│         [→]  │         [→]  │         [→]  │         [→]  │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

- **상단 필터 탭**: 9개 카테고리 버튼 + "See All" 링크
- **카드 구성**: 대형 이미지 + 카테고리 라벨 (작은 텍스트) + 제목 (h3) + 화살표 버튼
- **카드 목록** (9개):
  1. **ShipOS** — Rebuilding American Sea Power
  2. **Warp Speed** — The Manufacturing OS for American Re-Industrialization
  3. **Paragon** — The Archetype for Domination
  4. **DevCon 4** — Building Maximally Ambitious Products on a Digital Architecture
  5. **AIPCon 8** — How Foundry and AIP Help Companies Win
  6. **Multimodal Data Plane** — Activate AI. With Any Storage. Any Compute. Any Model. Anywhere
  7. **Maven** — AI Is Transforming the Battlefield
  8. **TITAN** — The New ISV TITAN. Designed and Delivered in 90 Days
  9. **Chain Reaction** — The Operating System for American AI Infrastructure
- **인터랙션**: `horizontalScrollingCardsTrack` 키프레임으로 자동 무한 스크롤 (카드 3벌 복제)
- **스타일**: 다크 배경 (`#1E2124`), 카드 내 대형 이미지, 흰색 텍스트

### 3.5 Our Software (제품 라인업)

```
Our Software

우리의 소프트웨어는 서방 세계의 가장 중요한 기관에서
실시간 AI 기반 의사결정을 지원합니다...

──────────────────────────────────────
AIP                              /0.1
Automate operations, from the factory
floor to the front lines
──────────────────────────────────────
Gotham                           /0.2
Achieve AI-driven combat superiority,
from space to mud
──────────────────────────────────────
Foundry                          /0.3
Build and manage Ontology-powered
software, with a complete developer platform
──────────────────────────────────────
Ontology                         /0.4
The central system for orchestrating
decisions across Human+AI teams
──────────────────────────────────────
Apollo                           /0.5
Autonomously deploy, monitor, and
manage software across any environment
──────────────────────────────────────
```

- **레이아웃**: 세로 리스트, 각 항목 사이 가로 구분선
- **구성**: 초대형 제품명 (68–80px) + 우측 넘버링 (`/0.1` ~ `/0.5`) + 한 줄 설명
- **인터랙션**: 각 항목 클릭 시 해당 제품 페이지로 이동, 호버 시 색상 변경
- **스타일**: 흰색 배경, 다크 텍스트, 넘버링은 뮤트 색상

### 3.6 Careers CTA

```
┌─────────────────┬──────────────────────────┐
│                 │                          │
│  [사무실 사진]    │  There is so much        │
│                 │  left to build           │
│                 │                          │
│                 │  Palantirians deliver     │
│                 │  mission-critical outcomes│
│                 │  for the West's most      │
│                 │  important institutions.  │
│                 │                          │
│                 │  [Learn More →]           │
└─────────────────┴──────────────────────────┘
```

- **레이아웃**: 이미지 + 텍스트 2단 구성
- **이미지**: "Two people in a Palantir office" (사무실 장면)
- **CTA**: "Learn More" 링크 → `/careers` 페이지

### 3.7 Partner Testimonials (파트너 후기)

```
What our partners say about us

┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│ WENDY'S     │ WALGREENS   │ AT&T        │ PAREXEL     │ HEINEKEN    │ ← 자동 수평 스크롤
│             │             │             │             │             │
│ "Now, we've │ "We started │ "[S.C.O.U.T]│ "We estimate│ "We had a   │
│ not only    │ with the    │ began as a  │ that this   │ great       │
│ fixed our   │ goal of...  │ joint...    │ solution... │ chassis...  │
│ inventory..."│            │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

- **카드 수**: 25개 이상의 고객 후기 카드
- **카드 구성**: 회사명 (대문자 라벨) + 인용 텍스트
- **주요 고객사**:
  - Wendy's, Walgreens, AT&T, Parexel, Heineken, L3Harris
  - Sompo Japan, General Mills, AARP, Lowe's, CAZ Investments
  - Panasonic Energy North America, United Airlines, Fujitsu, ESI
  - Lennar, Archer Aviation, Cummins, Jacobs
  - Tampa General Hospital, Northwind Technical Services, Eaton
  - HCA Healthcare, Cintra Ferrovial, CPKC
- **인터랙션**: 자동 수평 무한 스크롤 (marquee), 카드 2벌 복제
- **스타일**: 라이트 그레이 카드 (`#F3F3F3`), 뮤트 텍스트 (`#AAAAAA`)

### 3.8 CTA Section (Call-to-Action)

```
┌──────────────────────────┬──────────────────────────┐
│                          │                          │
│  Request a Demo     →    │  Start Building     →    │
│                          │                          │
│  (라이트 그레이 배경)       │  (다크 배경)               │
└──────────────────────────┴──────────────────────────┘
```

- **레이아웃**: 2개의 대형 CTA 카드 가로 배치 (50:50)
- **좌측**: "Request a Demo" — 라이트 그레이 배경 (`#F3F3F3`), 다크 텍스트
- **우측**: "Start Building" — 다크 배경 (`#202426`), 흰색 텍스트
- **타이포**: 46–50px 대형 텍스트
- **인터랙션**: 호버 시 배경색 변경 + 화살표(→) 이동 트랜지션

### 3.9 Full-screen Navigation Overlay (햄버거 메뉴)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Palantir 로고]                    [Get Started] [검색] [X 닫기] │
│─────────────────────────────────────────────────────────────────│
│ NAVIGATION        │ LATEST NEWS           │ OFFERINGS           │
│                   │ [Newsroom →]          │ [View All →]        │
│ Generate Alpha    │                       │                     │
│  ↳ AIP            │ [뉴스 카드 1]          │ 플랫폼 소개 텍스트    │
│  ↳ Foundry        │  CNBC 인터뷰 썸네일     │  ↳ Learn more       │
│  ↳ Gotham         │  + 설명 텍스트          │    about AIP        │
│  ↳ Ontology       │  + Watch Here 링크    │                     │
│  ↳ Apollo         │                       │                     │
│                   │ [뉴스 카드 2]          │─────────────────────│
│ Offerings         │  TITAN 트럭 썸네일      │ LATEST IMPACT       │
│ Impact Studies    │  + 설명 텍스트          │ [View All →]        │
│ Documentation     │  + Read More 링크     │                     │
│ Careers           │                       │ [Impact 카드]        │
│ Newsroom          │                       │ Tampa General       │
│ Palantir Explained│                       │ Hospital            │
│                   │                       │─────────────────────│
│                   │                       │ QUICK LINKS         │
│                   │                       │ About Palantir      │
│                   │                       │ Blog                │
│                   │                       │ Investor Relations  │
│                   │                       │ ...                 │
└──────────────────────────────────────────────────────────────────┘
```

- **트리거**: 햄버거 메뉴 클릭
- **스타일**: 다크 배경 (`#1E2124`) 풀스크린 오버레이
- **레이아웃**: 3단 컬럼 (네비게이션 / 뉴스+Offerings / Quick Links)
- **네비 타이포**: 30–46px 대형 텍스트, 하위 메뉴는 `↳` 접두사

### 3.10 Footer

```
──────────────────────────────────────────────────────────────
(c) 2026 Palantir Technologies Inc. All rights reserved.
[Cookies Settings]   [US] [UK] [JP] [KR]

[YOUTUBE] [X] [LINKEDIN] [GITHUB] [STORE]
──────────────────────────────────────────────────────────────
Offerings          │ Impact Studies     │ Capabilities       │ Documents
─ American Tech    │ ─ Airbus           │ ─ AI + ML          │ ─ Developer Community
─ Anti-Money...    │ ─ Axel Springer    │ ─ AIP for Dev...   │ ─ Platform Docs
─ Automotive...    │ ─ Cleveland Clinic │ ─ Data Integration │ ─ Palantir Developers
─ Data Protection  │ ─ Concordance      │ ─ Digital Twin     │ ─ Trust Center
─ Defense          │ ─ Doosan Infracore │ ─ Dynamic Sched... │ ─ Modern Slavery...
─ Energy           │ ─ Fujitsu          │ ─ Edge AI          │ ─ Cookies
─ Federal Health   │ ─ Jacobs           │ ─ Marketplace      │ ─ Privacy & Civil...
─ FedStart         │ ─ Kinder Morgan    │ ─ MetaConst...     │ ─ Palantir Explained
─ Financial Svc    │ ─ NHS              │ ─ Pipeline Builder │ ─ Sustainability
─ Food & Beverage  │ ─ Noto Peninsula   │ ─ Process Mining   │ ─ Human Rights
─ Palantir for...  │ ─ Pacific Gas...   │ ─ Real-Time Alert  │ ─ Privacy Statement
─ Govt Financial   │ ─ Ringier          │ ─ Streaming        │ ─ Terms of Use
─ Hospital Ops     │ ─ Sonnedix         │ ─ Titanium         │
─ Insurance        │ ─ SOMPO            │ ─ Warp Speed       │
─ Intelligence     │ ─ Swiss Re         │                    │
─ Life Sciences    │ ─ Tampa General    │                    │
─ Mission Manager  │ ─ World Food Prog  │                    │
─ Procurement      │                    │                    │
─ Rail             │                    │                    │
─ ...              │                    │                    │
```

- **상단**: 저작권 + 쿠키 설정 버튼 + 지역 선택 (US, UK, JP, KR) + 소셜 미디어 링크
- **하단 사이트맵**: 4단 컬럼
  - **Offerings**: 26개 산업/솔루션 링크
  - **Impact Studies**: 17개 고객 사례 링크
  - **Capabilities**: 14개 기능 링크
  - **Documents**: 12개 문서/정책 링크
- **소셜 링크 스타일**: 아웃라인 버튼 형태 (YouTube, X, LinkedIn, GitHub, Store)

---

## 4. 핵심 디자인 패턴 요약

### 4.1 비주얼 전략

| 패턴 | 설명 |
|------|------|
| **Dark-Light 교차** | 섹션마다 다크/라이트 배경을 번갈아 배치하여 시각적 리듬과 구분감 생성 |
| **대형 타이포그래피** | 72–80px 헤딩으로 강렬한 첫인상, 제품명도 초대형으로 표현 |
| **풀스크린 미디어** | Hero에 풀스크린 비디오, 캐러셀에 대형 이미지로 몰입감 극대화 |
| **미니멀 UI** | 아웃라인/고스트 버튼, 아이콘 최소화, `↳` `→` `↗` 유니코드 화살표 활용 |
| **넘버링 시스템** | 제품 목록에 `/0.1` ~ `/0.5` 인덱스 표기로 기술적/체계적 느낌 강조 |
| **화이트스페이스** | 넉넉한 여백으로 고급스러움과 가독성 확보 |

### 4.2 인터랙션 전략

| 패턴 | 설명 |
|------|------|
| **수평 무한 스크롤** | 뉴스 캐러셀 + 후기 캐러셀 모두 자동 수평 루프 (marquee 패턴) |
| **스크롤 트리거 애니메이션** | `data-animation` 속성 + Intersection Observer로 진입 시 등장 효과 |
| **글리치/플리커 효과** | 기술 브랜드 정체성을 강화하는 텍스트 글리치 애니메이션 |
| **CSS 변수 기반 테마** | `--hover-color`, `--text-color`, `--accent-color` 등 디자인 토큰 체계적 관리 |
| **일관된 이징** | 대부분의 트랜지션에 `ease-in-out` 사용, 0.25s 기본 duration |
| **Hover 디밍** | 리스트에서 하나에 호버 시 나머지 항목 opacity 감소 (포커스 강조) |

### 4.3 정보 구조 (IA)

```
palantir.com
├── Hero (브랜드 메시지 + 비디오)
├── 뉴스/제품 캐러셀 (최신 소식)
├── Our Software (제품 5종 소개)
│   ├── AIP
│   ├── Gotham
│   ├── Foundry
│   ├── Ontology
│   └── Apollo
├── Careers CTA (채용 유도)
├── Partner Testimonials (사회적 증거)
├── CTA (전환 유도: Demo / Builder)
└── Footer (사이트맵 + 소셜)
```

---

## 부록: 기술 스택 관찰

| 항목 | 값 |
|------|-----|
| **CSS 방법론** | CSS Modules (해시 기반 클래스명: `ptcom-design__*__[hash]`) |
| **애니메이션 제어** | `data-animation` 커스텀 속성 + JavaScript (Intersection Observer 추정) |
| **태그 매니저** | Google Tag Manager (`GTM-PSL84DJ`) |
| **쿠키 관리** | OneTrust (CybotCookiebot) |
| **디자인 토큰** | CSS Custom Properties (`--hover-color`, `--text-color`, `--accent-color` 등) |
| **폰트** | 커스텀 웹폰트 (Alliance No.1, Alliance No.2) |
| **반응형** | 지역별 사이트 분기 (US, UK, JP, KR) |
