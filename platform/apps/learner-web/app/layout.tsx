import "@konkur/design-system/base.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "کنکور | آمادگی دقیق برای آزمون",
  description:
    "کنکور به شما کمک می‌کند زمان محدود مطالعه را به آمادگی قابل‌سنجش تبدیل کنید.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
