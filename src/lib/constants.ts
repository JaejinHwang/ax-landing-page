export const NAV_ITEMS = [
  { label: "서비스", href: "#services" },
  { label: "Why AX", href: "#why-ax" },
  { label: "프로세스", href: "#process" },
  { label: "회사소개", href: "#trust" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  problem: "problem",
  services: "services",
  whyAx: "why-ax",
  process: "process",
  trust: "trust",
  faq: "faq",
  cta: "cta",
} as const;

export const PAIN_POINTS = [
  {
    icon: "Compass" as const,
    title: "AI 도입의 시작점 부재",
    description: "어디서부터 시작해야 할지, 어떤 업무에 AI를 적용할지 방향을 잡기 어렵습니다.",
  },
  {
    icon: "BookOpen" as const,
    title: "교육과 실무의 괴리",
    description: "일회성 교육으로는 실무에 적용할 수 없습니다. 체계적인 역량 내재화가 필요합니다.",
  },
  {
    icon: "RefreshCcw" as const,
    title: "지속적 변화 관리 부재",
    description: "초기 도입 후 후속 지원 없이 원점으로 회귀합니다. 정착까지 동반할 파트너가 필요합니다.",
  },
] as const;

export const STATS = [
  { value: 87, suffix: "%", label: "기업이 AI 도입 필요성 인식" },
  { value: 72, suffix: "%", label: "AI 교육 후 실무 적용 실패율" },
  { value: 3, suffix: "x", label: "AI 내재화된 조직의 생산성 향상" },
] as const;

export const SERVICES = [
  {
    icon: "GraduationCap" as const,
    title: "AI Literacy 교육",
    description: "임직원 대상 체계적인 AI 활용 역량 강화 프로그램",
    features: [
      "조직 맞춤형 AI 역량 진단",
      "기초 → 심화 → 실습 단계별 커리큘럼",
      "실무 중심 AI 도구 활용 교육",
      "교육 후 정착 지원 프로그램",
    ],
    ctaText: "교육 문의하기",
  },
  {
    icon: "Bot" as const,
    title: "AI Agent 컨설팅 · 개발",
    description: "업무 프로세스 분석부터 맞춤형 AI Agent 설계 · 개발 · 운영까지",
    features: [
      "업무 프로세스 AI 적용 진단",
      "맞춤형 AI Agent 설계 및 개발",
      "기존 시스템 연동 및 배포",
      "운영 및 지속적 최적화 지원",
    ],
    ctaText: "컨설팅 문의하기",
  },
] as const;

export const BERSIN_STAGES = [
  {
    stage: 1,
    name: "Assistance",
    efficiency: "15-30%",
    description: "현재 업무를 더 효율적으로",
  },
  {
    stage: 2,
    name: "Augmentation",
    efficiency: "50%",
    description: "업무 재설계로 불필요한 단계 제거",
  },
  {
    stage: 3,
    name: "Replacement",
    efficiency: "100-200%",
    description: "AI Agent와 협업하도록 업무 재구성",
  },
  {
    stage: 4,
    name: "Autonomy",
    efficiency: "300%+",
    description: "AI Agent가 업무 수행, 사람은 관리",
  },
] as const;

export const WHY_AX = [
  {
    number: "/01",
    title: "글로벌 AI 리더들이\n인정한 기술력",
    points: [
      "a16z Gen AI Top 50 (한국 유일)",
      "MathGPT 세계 신기록",
      "Microsoft, Anthropic, Google 공식 파트너",
    ],
  },
  {
    number: "/02",
    title: "검증된 AI 적용 경험",
    points: [],
    stats: [
      { value: "1억+", label: "사용자" },
      { value: "100억+", label: "문제 풀이" },
      { value: "50개국+", label: "글로벌 서비스" },
    ],
  },
  {
    number: "/03",
    title: "실무 중심\n맞춤형 프로그램",
    points: [
      "조직 현황 진단부터 시작",
      "업종별 특화 커리큘럼",
      "실제 업무에 바로 적용 가능",
    ],
  },
  {
    number: "/04",
    title: "지속적인 파트너십",
    points: [
      "교육 후 정착까지 동반",
      "AI Agent 개발 및 운영 지원",
      "글로벌 AI 트렌드 지속 공유",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "상담",
    items: ["니즈 파악", "목표 설정", "일정 수립"],
    duration: "1-2주",
  },
  {
    step: "02",
    title: "진단",
    items: ["조직 AI 성숙도 진단", "맞춤 로드맵 수립"],
    duration: "2-3주",
  },
  {
    step: "03",
    title: "실행",
    items: ["교육 · 컨설팅 실행", "AI Agent 개발 · 배포"],
    duration: "4-12주",
  },
  {
    step: "04",
    title: "정착",
    items: ["정착 · 최적화 지원", "지속적 성과 관리"],
    duration: "지속",
  },
] as const;

export const MILESTONES = [
  { year: "2026", events: ["AI+X Top 100 6년 연속 선정"] },
  {
    year: "2025",
    events: [
      "a16z Gen AI Top 50 (한국 스타트업 유일)",
      "Forbes Korea AI 50 3년 연속 선정",
      "Microsoft CEO 사티아 나델라 AI 라운드테이블 참여",
    ],
  },
  {
    year: "2024",
    events: [
      "MathGPT 세계 신기록 달성",
      "Meta CEO 마크 저커버그 라운드테이블 초청",
    ],
  },
  { year: "2023", events: ["G20 디지털 혁신 얼라이언스 EdTech 1위"] },
] as const;

export const TRUST_NUMBERS = [
  { value: 1, suffix: "억+", label: "Users", sublabel: "사용자" },
  { value: 100, suffix: "억+", label: "Problems", sublabel: "문제 풀이" },
  { value: 50, suffix: "+", label: "Countries", sublabel: "글로벌 서비스" },
  { value: 6, suffix: "년", label: "AI+X Top 100", sublabel: "연속 선정" },
] as const;

export const PARTNERS = [
  "Google",
  "Bytedance",
  "Samsung",
  "Microsoft",
  "Anthropic",
] as const;

export const FAQ_ITEMS = [
  {
    question: "AI 교육은 어떤 형태로 진행되나요?",
    answer:
      "조직의 AI 성숙도와 목표에 따라 맞춤형 커리큘럼을 설계합니다. 기초 AI 리터러시부터 심화 프롬프트 엔지니어링, 실무 적용 워크숍까지 단계별로 진행하며, 온라인과 오프라인 모두 가능합니다. 교육 후에는 실무 정착을 위한 후속 지원 프로그램을 함께 운영합니다.",
  },
  {
    question: "도입 비용은 어떻게 책정되나요?",
    answer:
      "조직 규모, 교육 대상 인원, 프로그램 구성(교육/컨설팅/에이전트 개발)에 따라 맞춤 견적을 산정합니다. 무료 상담을 통해 조직의 니즈를 먼저 파악한 후, 최적화된 견적을 제안드립니다.",
  },
  {
    question: "보안 및 데이터 처리는 어떻게 되나요?",
    answer:
      "기업 보안 기준에 맞춰 운영합니다. 온프레미스 배포, 데이터 암호화, 접근 권한 관리 등 엔터프라이즈급 보안 체계를 지원합니다. 공공기관의 경우 관련 보안 인증 기준을 준수합니다.",
  },
  {
    question: "기존 시스템과 연동이 가능한가요?",
    answer:
      "네, 기존 사내 시스템(ERP, CRM, 그룹웨어 등)과의 연동을 지원합니다. API 기반 연동, SSO 인증, 데이터 파이프라인 구성 등 기업 환경에 최적화된 통합 솔루션을 제공합니다.",
  },
  {
    question: "교육 후 어떤 지원을 받을 수 있나요?",
    answer:
      "교육 완료 후에도 AI 활용 정착을 위한 후속 지원을 제공합니다. 실무 적용 컨설팅, AI Agent 개발 및 운영 지원, 정기적인 AI 트렌드 업데이트 세션 등을 통해 지속적인 파트너십을 유지합니다.",
  },
  {
    question: "공공기관도 이용할 수 있나요?",
    answer:
      "네, 공공기관의 디지털 전환을 위한 특화 프로그램을 운영하고 있습니다. 공공기관 보안 기준 준수, 행정 업무 특화 AI 교육, 공공 데이터 활용 컨설팅 등을 제공합니다.",
  },
] as const;
