import { formatPersianNumber } from "@konkur/design-system";

import styles from "./page.module.css";

const focusAreas = [
  "تشخیص مباحث پربازده بر پایه شواهد آزمون",
  "مرور اشتباه‌ها پیش از افزودن محتوای تازه",
  "برنامه‌ای محدود و روشن برای زمان باقی‌مانده",
] as const;

export default function LearnerHomePage() {
  return (
    <main className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">
        رفتن به محتوای اصلی
      </a>

      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="کنکور، صفحه اصلی">
          کنکور
        </a>
        <span className={styles.foundationState}>نسخه داخلی زیرساخت</span>
      </header>

      <section className={styles.hero} id="main-content">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>آمادگی آزمون، بدون حدس اضافه</p>
          <h1>قدم بعدی مطالعه‌ات را دقیق انتخاب کن.</h1>
          <p className={styles.lead}>
            کنکور شواهد آزمون، زمان باقی‌مانده و اشتباه‌های قبلی را کنار هم
            می‌گذارد تا بدانی اکنون چه بخوانی و چرا.
          </p>
          <span className={styles.primaryAction} aria-disabled="true">
            ارزیابی پس از تکمیل زیرساخت فعال می‌شود
          </span>
          <p className={styles.assurance}>
            تصمیم‌های اصلی محصول قطعی و قابل بازیابی‌اند و به سرویس هوش مصنوعی
            وابسته نیستند.
          </p>
        </div>

        <aside className={styles.evidence} aria-labelledby="evidence-title">
          <p className={styles.context}>کارشناسی ارشد مهندسی کامپیوتر</p>
          <h2 id="evidence-title">یک مسیر روشن برای امروز</h2>
          <ol>
            {focusAreas.map((area, index) => (
              <li key={area}>
                <span aria-hidden="true">{formatPersianNumber(index + 1)}</span>
                {area}
              </li>
            ))}
          </ol>
          <p className={styles.status}>
            <span aria-hidden="true" /> وضعیت هسته: در حال پیاده‌سازی، مستقل از هوش مصنوعی
          </p>
        </aside>
      </section>

      <footer className={styles.footer}>
        <p>این نسخه یک نقطه کنترل داخلی است و انتشار عمومی نیست.</p>
      </footer>
    </main>
  );
}
