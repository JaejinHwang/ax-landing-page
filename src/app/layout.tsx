import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QANDA AX — AI로 일하는 방식을 바꾸다",
  description:
    "대기업과 공공기관을 위한 AI Literacy 교육 & AI Agent 업무 효율화 파트너. a16z Gen AI Top 50, MathGPT 세계 신기록의 글로벌 AI 기술력으로 조직의 AI 전환을 처음부터 끝까지 함께합니다.",
  keywords: [
    "AI 교육",
    "AI Agent",
    "AI 컨설팅",
    "AI 전환",
    "QANDA",
    "콴다",
    "AX",
    "AI Literacy",
    "대기업 AI",
    "공공기관 AI",
  ],
  openGraph: {
    title: "QANDA AX — AI로 일하는 방식을 바꾸다",
    description:
      "AI Literacy 교육부터 AI Agent 개발까지, 조직의 AI 전환을 처음부터 끝까지 함께합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
