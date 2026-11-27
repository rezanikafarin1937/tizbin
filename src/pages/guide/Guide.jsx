
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./guide.module.scss";

const steps = [
  {
    number: "01",
    icon: "⌕",
    title: "انتخاب دسته‌بندی",
    description:
      "ابتدا متناسب با نیاز خود، از میان عینک‌های مردانه، زنانه، بچگانه، طبی، آفتابی و ورزشی انتخاب کنید.",
  },
  {
    number: "02",
    icon: "◈",
    title: "بررسی مشخصات محصول",
    description:
      "تصاویر، جنس فریم، رنگ، ابعاد و سایر مشخصات محصول را با دقت بررسی کنید.",
  },
  {
    number: "03",
    icon: "♡",
    title: "انتخاب عینک مناسب",
    description:
      "با توجه به فرم صورت، سلیقه شخصی و نوع استفاده، گزینه مناسب خود را انتخاب کنید.",
  },
  {
    number: "04",
    icon: "✓",
    title: "ثبت سفارش",
    description:
      "محصول موردنظر را به سبد خرید اضافه کنید و مراحل ثبت سفارش را تکمیل کنید.",
  },
];

const buyingTips = [
  {
    number: "01",
    title: "به فرم صورت توجه کنید",
    description:
      "فریم مناسب می‌تواند تناسب و زیبایی چهره را بیشتر نشان دهد. فرم صورت خود را در انتخاب عینک در نظر بگیرید.",
  },
  {
    number: "02",
    title: "به اندازه فریم دقت کنید",
    description:
      "عرض فریم، فاصله دو عدسی و طول دسته‌ها در راحتی عینک اهمیت دارند. عینک نباید روی بینی یا پشت گوش فشار ایجاد کند.",
  },
  {
    number: "03",
    title: "نوع استفاده را مشخص کنید",
    description:
      "برای استفاده روزمره، مطالعه، رانندگی، فعالیت ورزشی یا محافظت در برابر نور خورشید، نیازهای متفاوتی وجود دارد.",
  },
  {
    number: "04",
    title: "مشخصات عدسی را بررسی کنید",
    description:
      "در خرید عینک طبی، نسخه معتبر بینایی‌سنجی و مشخصات موردنیاز عدسی را در نظر بگیرید.",
  },
];

const categories = [
  {
    title: "عینک مردانه",
    description: "مدل‌های متنوع برای استایل‌های مختلف",
    link: "/search?title=مردانه",
    icon: "M",
  },
  {
    title: "عینک زنانه",
    description: "ترکیبی از ظرافت، زیبایی و جذابیت",
    link: "/search?title=زنانه",
    icon: "W",
  },
  {
    title: "عینک طبی",
    description: "انتخاب فریم مناسب برای عینک طبی",
    link: "/search?title=طبی",
    icon: "T",
  },
  {
    title: "عینک آفتابی",
    description: "انتخابی برای روزهای آفتابی",
    link: "/search?title=آفتابی",
    icon: "S",
  },
];

const faqs = [
  {
    question: "چگونه عینک مناسب فرم صورتم را انتخاب کنم؟",
    answer:
      "بهتر است فریمی انتخاب کنید که با فرم صورت شما تضاد ملایمی داشته باشد. برای مثال، فریم‌های زاویه‌دار می‌توانند با صورت‌های گرد هماهنگی خوبی داشته باشند. در نهایت راحتی و سلیقه شخصی نیز اهمیت زیادی دارند.",
  },
  {
    question: "هنگام خرید عینک طبی به چه نکاتی توجه کنم؟",
    answer:
      "علاوه بر انتخاب فریم مناسب، باید نسخه معتبر بینایی‌سنجی، فاصله مردمک‌ها و مشخصات موردنیاز عدسی را در نظر بگیرید. برای تعیین مشخصات عدسی با متخصص بینایی‌سنجی مشورت کنید.",
  },
  {
    question: "چطور اندازه مناسب فریم را انتخاب کنم؟",
    answer:
      "ابعاد فریم، عرض عدسی، پل بینی و طول دسته‌ها را بررسی کنید. عینک باید روی صورت ثابت قرار بگیرد و هنگام استفاده احساس فشار یا ناراحتی ایجاد نکند.",
  },
  {
    question: "آیا تصاویر محصولات برای انتخاب کافی هستند؟",
    answer:
      "تصاویر به شناخت ظاهر و طراحی محصول کمک می‌کنند، اما بهتر است توضیحات و مشخصات فنی هر محصول را نیز بررسی کنید.",
  },
  {
    question: "چطور محصولات مختلف را مشاهده کنم؟",
    answer:
      "از بخش دسته‌بندی‌ها می‌توانید محصولات مردانه، زنانه، طبی، آفتابی و سایر دسته‌ها را مشاهده و گزینه‌های مختلف را بررسی کنید.",
  },
];

const Guide = () => {
  useEffect(() => {
    document.title = "راهنمای خرید عینک | راهنمای انتخاب عینک مناسب | تیزبین";

    const description =
      "راهنمای خرید عینک از تیزبین؛ آشنایی با انتخاب فریم مناسب، فرم صورت، اندازه عینک، انواع عینک طبی و آفتابی و نکات مهم پیش از خرید.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    let schemaScript = document.getElementById("guide-faq-schema");

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "guide-faq-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(faqSchema);
  }, []);

  return (
    <main className={styles.guide} dir="rtl">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="مسیر صفحه">
            <Link to="/">صفحه اصلی</Link>
            <span>/</span>
            <span aria-current="page">راهنمای خرید</span>
          </nav>

          <div className={styles.hero__content}>
            <div className={styles.hero__text}>
              <span className={styles.eyebrow}>
                TIZBIN BUYING GUIDE
              </span>

              <h1>
                انتخاب درست،
                <br />
                <span>نگاهی متفاوت</span>
              </h1>

              <p>
                خرید یک عینک مناسب فقط انتخاب یک فریم زیبا نیست؛
                ترکیبی از راحتی، تناسب، کیفیت و سلیقه شخصی است.
                در این راهنما به شما کمک می‌کنیم انتخاب آگاهانه‌تری
                داشته باشید.
              </p>

              <div className={styles.hero__actions}>
                <Link to="/store" className={styles.primaryButton}>
                  مشاهده محصولات
                  <span>←</span>
                </Link>

                <a href="#buying-steps" className={styles.textButton}>
                  آشنایی با مراحل خرید
                  <span>↓</span>
                </a>
              </div>
            </div>

            <div className={styles.hero__visual}>
              <div className={styles.hero__circle}></div>

              <div className={styles.hero__frame}>
                <svg
                  viewBox="0 0 420 210"
                  role="img"
                  aria-label="تصویر گرافیکی یک فریم عینک"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 65 L12 45" />
                    <path d="M398 65 L408 45" />
                    <path d="M28 65 Q28 45 55 45 H165 Q190 45 190 75 L180 145 Q175 178 140 178 H70 Q35 178 30 145 Z" />
                    <path d="M392 65 Q392 45 365 45 H255 Q230 45 230 75 L240 145 Q245 178 280 178 H350 Q385 178 390 145 Z" />
                    <path d="M190 75 Q210 55 230 75" />
                  </g>
                  <g fill="none" stroke="#b88645" strokeWidth="3">
                    <path d="M55 70 Q105 55 160 72" />
                    <path d="M260 72 Q315 55 365 70" />
                  </g>
                </svg>
              </div>

              <div className={styles.hero__note}>
                <span>01</span>
                <div>
                  <strong>انتخاب هوشمندانه</strong>
                  <small>راهنمای خرید عینک</small>
                </div>
              </div>

              <div className={styles.hero__decoration}>
                TIZBIN
              </div>
            </div>
          </div>

          <div className={styles.hero__bottom}>
            <span>راهنمای جامع انتخاب عینک</span>
            <span>01 — 04</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>A BETTER CHOICE</span>
            <h2>
              قبل از خرید،
              <span> این نکات را بدانید</span>
            </h2>
            <p>
              انتخاب عینک مناسب، تجربه استفاده روزانه شما را
              تحت تأثیر قرار می‌دهد. با چند نکته ساده می‌توانید
              انتخاب دقیق‌تری داشته باشید.
            </p>
          </div>

          <div className={styles.steps} id="buying-steps">
            {steps.map((step) => (
              <article className={styles.stepCard} key={step.number}>
                <div className={styles.stepCard__top}>
                  <span className={styles.stepCard__number}>
                    {step.number}
                  </span>
                  <span className={styles.stepCard__icon}>
                    {step.icon}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buying tips */}
      <section className={styles.tips}>
        <div className={styles.container}>
          <div className={styles.tips__layout}>
            <div className={styles.tips__heading}>
              <span className={styles.eyebrow}>SMART BUYING</span>
              <h2>
                چطور عینک
                <br />
                <span>مناسب خودمان را</span>
                <br />
                انتخاب کنیم؟
              </h2>
              <p>
                پیش از انتخاب نهایی، این چهار نکته را بررسی کنید
                تا عینکی متناسب با نیاز و سلیقه خود داشته باشید.
              </p>

              <Link to="/store" className={styles.outlineButton}>
                دیدن مدل‌های عینک
                <span>←</span>
              </Link>
            </div>

            <div className={styles.tips__list}>
              {buyingTips.map((tip) => (
                <article className={styles.tipItem} key={tip.number}>
                  <span className={styles.tipItem__number}>
                    {tip.number}
                  </span>

                  <div>
                    <h3>{tip.title}</h3>
                    <p>{tip.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>EXPLORE COLLECTION</span>
            <h2>
              از کدام دسته
              <span> شروع کنیم؟</span>
            </h2>
            <p>
              دسته‌بندی موردنظر خود را انتخاب کنید و مدل‌های
              مختلف عینک را ببینید.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <Link
                to={category.link}
                className={styles.categoryCard}
                key={category.title}
              >
                <span className={styles.categoryCard__icon}>
                  {category.icon}
                </span>

                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <span className={styles.categoryCard__arrow}>
                  ←
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className={styles.notice}>
        <div className={styles.container}>
          <div className={styles.notice__box}>
            <span className={styles.notice__icon}>i</span>

            <div>
              <h2>یک نکته مهم درباره عینک طبی</h2>
              <p>
                برای تهیه عینک طبی، صرفاً به ظاهر فریم اکتفا نکنید.
                نسخه معتبر بینایی‌سنجی و اندازه‌گیری دقیق پارامترهای
                موردنیاز عدسی اهمیت زیادی دارد. برای انتخاب و تنظیم
                عدسی مناسب، از متخصص بینایی‌سنجی کمک بگیرید.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
            <h2>
              سؤالات
              <span> متداول خرید</span>
            </h2>
            <p>
              پاسخ برخی از پرسش‌های رایج درباره انتخاب و خرید عینک.
            </p>
          </div>

          <div className={styles.faq__list}>
            {faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question}>
                <summary>
                  <span className={styles.faqItem__number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{faq.question}</h3>

                  <span className={styles.faqItem__toggle}>+</span>
                </summary>

                <div className={styles.faqItem__answer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.cta__box}>
            <span className={styles.eyebrow}>YOUR STYLE, YOUR CHOICE</span>

            <h2>
              حالا وقت یک
              <span> انتخاب متفاوت است.</span>
            </h2>

            <p>
              مجموعه عینک‌های تیزبین را ببینید و مدل موردعلاقه خود
              را پیدا کنید.
            </p>

            <Link to="/category" className={styles.primaryButton}>
              شروع خرید
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Guide;
