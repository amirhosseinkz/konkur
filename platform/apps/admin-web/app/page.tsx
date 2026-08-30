import { notFound } from "next/navigation";

import styles from "./page.module.css";

const operationalChecks = [
  { name: "پایگاه داده", state: "پیاده‌سازی اولیه", owner: "Platform" },
  { name: "صف پردازش", state: "راستی‌آزمایی نشده", owner: "Operations" },
  { name: "هوش مصنوعی", state: "غیرفعال و غیرضروری", owner: "Platform" },
] as const;

export default function AdminHomePage() {
  // The operational shell must not be reachable until server-side Admin auth is integrated.
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className={styles.adminShell}>
      <a className={styles.skipLink} href="#admin-content">
        رفتن به محتوای عملیاتی
      </a>
      <header className={styles.operationBar}>
        <strong>عملیات کنکور</strong>
        <div>
          <span>محیط: توسعه</span>
          <span>حالت: پیش‌نمایش غیرعملیاتی</span>
        </div>
      </header>

      <div className={styles.workspace}>
        <nav className={styles.navigation} aria-label="ناوبری مدیریت">
          <p>کنترل داخلی</p>
          <a aria-current="page" href="/">
            وضعیت سامانه
          </a>
        </nav>

        <section className={styles.content} id="admin-content">
          <div className={styles.heading}>
            <div>
              <p>Milestone 3 / Platform Foundation</p>
              <h1>وضعیت سامانه</h1>
            </div>
            <button type="button" disabled>
              اجرای بررسی سلامت
            </button>
          </div>

          <p className={styles.notice} role="status">
            این پیش‌نمایش فقط در محیط توسعه نمایش داده می‌شود و هیچ عملیات
            مدیریتی ارائه نمی‌کند. عرضه سطح عملیاتی به اتصال هویت مستقل، MFA و
            احراز هویت مجدد وابسته است.
          </p>

          <div className={styles.tableFrame} tabIndex={0} role="region" aria-label="جدول وضعیت سرویس‌ها">
            <table>
              <thead>
                <tr>
                  <th scope="col">سرویس</th>
                  <th scope="col">وضعیت</th>
                  <th scope="col">مالک</th>
                </tr>
              </thead>
              <tbody>
                {operationalChecks.map((check) => (
                  <tr key={check.name}>
                    <th scope="row">{check.name}</th>
                    <td>{check.state}</td>
                    <td dir="ltr">{check.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
