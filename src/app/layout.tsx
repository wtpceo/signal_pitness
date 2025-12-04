import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "시그널휘트니스 장당점 | 평택 송탄 프리미엄 헬스장 & PT",
  description: "평택 송탄 최고의 시설과 전문 트레이너진을 갖춘 프리미엄 헬스장. 1:1 PT, 다이어트, 체형교정, 바디프로필 전문. 지금 무료 상담 신청하세요!",
  keywords: ["평택헬스장", "송탄헬스장", "장당동헬스장", "평택PT", "송탄PT", "시그널휘트니스"],
  openGraph: {
    title: "시그널휘트니스 장당점 | 평택 송탄 프리미엄 헬스장",
    description: "작심삼일을 작심평생으로! 평택 송탄 최고의 시설에서 시작하세요.",
    url: "https://signal-fitness.com",
    siteName: "시그널휘트니스",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
