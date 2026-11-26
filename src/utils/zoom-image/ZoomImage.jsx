
import { useState, useRef, useEffect } from "react";
import HorizontalScroll from "./horizontal-scroll/HorizontalScroll";
import styles from "./zoomimage.module.scss";

// اصلاح مسیر تصاویر برای GitHub Pages
const getImagePath = (image) => {
  if (!image) return "";

  // حفظ آدرس تصاویر خارجی
  if (/^(https?:)?\/\//i.test(image) || image.startsWith("data:")) {
    return image;
  }

  const publicUrl = process.env.PUBLIC_URL || "";

  return `${publicUrl}/${image.replace(/^\/+/, "")}`;
};

const ZoomImage = ({ images = [], title = "تصویر محصول" }) => {
  const [activeImage, setActiveImage] = useState(0);
  const zoomImage = useRef(null);

  // اصلاح مسیر تمام تصاویر
  const imagePaths = images.map(getImagePath);

  useEffect(() => {
    function handleMouseEnter() {
      this.style.backgroundSize = "500%";
    }

    function handleMouseLeave() {
      this.style.backgroundSize = "cover";
      this.style.backgroundPosition = "center";
    }

    function handleMouseMove(e) {
      const x = (e.offsetX / this.offsetWidth) * 100;
      const y = (e.offsetY / this.offsetHeight) * 100;

      this.style.backgroundPosition = `${x}% ${y}%`;
    }

    const el = zoomImage.current;

    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (el) {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        el.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  if (!imagePaths.length) {
    return null;
  }

  // جلوگیری از خطا در صورت تغییر تعداد تصاویر
  const safeActiveImage = Math.min(activeImage, imagePaths.length - 1);

  return (
    <section
      className={styles.parent}
      aria-label={`تصاویر محصول ${title}`}
    >
      <div className={styles.parent__thumbnails}>
        {imagePaths.map((image, index) => (
          <button
            key={image + index}
            type="button"
            className={`${styles.parent__img} ${
              index === safeActiveImage ? styles.parent__active : ""
            }`}
            aria-label={`نمایش تصویر ${index + 1} از ${title}`}
            aria-pressed={index === safeActiveImage}
            onClick={() => setActiveImage(index)}
          >
            <img
              src={image}
              alt={`${title} - تصویر ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      <div
        ref={zoomImage}
        className={styles.parent__image}
        role="img"
        aria-label={`${title} - تصویر ${safeActiveImage + 1}`}
        style={{
          backgroundImage: `url("${imagePaths[safeActiveImage]}")`,
        }}
      />

      <div className={styles.parent__horizontalscroll}>
        <HorizontalScroll gap="1px">
          {imagePaths.map((image, index) => (
            <button
              key={image + index}
              type="button"
              className={`${styles.parent__img} ${
                index === safeActiveImage ? styles.parent__active : ""
              }`}
              aria-label={`نمایش تصویر ${index + 1} از ${title}`}
              aria-pressed={index === safeActiveImage}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image}
                alt={`${title} - تصویر ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default ZoomImage;





// import { useState, useRef, useEffect } from "react";
// import HorizontalScroll from "./horizontal-scroll/HorizontalScroll";
// import styles from "./zoomimage.module.scss";

// const ZoomImage = ({ images = [], title = "تصویر محصول" }) => {
//   const [activeImage, setActiveImage] = useState(0);
//   const zoomImage = useRef(null);

//   useEffect(() => {
//     function handleMouseEnter() {
//       this.style.backgroundSize = "500%";
//     }

//     function handleMouseLeave() {
//       this.style.backgroundSize = "cover";
//       this.style.backgroundPosition = "center";
//     }

//     function handleMouseMove(e) {
//       const x = (e.offsetX / this.offsetWidth) * 100;
//       const y = (e.offsetY / this.offsetHeight) * 100;

//       this.style.backgroundPosition = `${x}% ${y}%`;
//     }

//     const el = zoomImage.current;

//     if (el) {
//       el.addEventListener("mouseenter", handleMouseEnter);
//       el.addEventListener("mouseleave", handleMouseLeave);
//       el.addEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       if (el) {
//         el.removeEventListener("mouseenter", handleMouseEnter);
//         el.removeEventListener("mouseleave", handleMouseLeave);
//         el.removeEventListener("mousemove", handleMouseMove);
//       }
//     };
//   }, []);

//   if (!images.length) {
//     return null;
//   }

//   return (
//     <section className={styles.parent}  aria-label={`تصاویر محصول ${title}`}>
//       <div className={styles.parent__thumbnails}>
//         {images.map((image, index) => (
//           <button
//             key={image}
//             type="button"
//             className={`${styles.parent__img} ${
//               index === activeImage ? styles.parent__active : ""
//             }`}
//             aria-label={`نمایش تصویر ${index + 1} از ${title}`}
//             aria-pressed={index === activeImage}
//             onClick={() => setActiveImage(index)}
//           >
//             <img
//               src={image}
//               alt={`${title} - تصویر ${index + 1}`}
//               loading="lazy"
//               decoding="async"
//             />
//           </button>
//         ))}
//       </div>

//       <div
//         ref={zoomImage}
//         className={styles.parent__image}
//         role="img"
//         aria-label={`${title} - تصویر ${activeImage + 1}`}
//         style={{
//           backgroundImage: `url(${images[activeImage]})`,
//         }}
//       />

//       <div className={styles.parent__horizontalscroll}>
//         <HorizontalScroll gap="1px">
//           {images.map((image, index) => (
//             <button
//               key={image}
//               type="button"
//               className={`${styles.parent__img} ${
//                 index === activeImage ? styles.parent__active : ""
//               }`}
//               aria-label={`نمایش تصویر ${index + 1} از ${title}`}
//               aria-pressed={index === activeImage}
//               onClick={() => setActiveImage(index)}
//             >
//               <img
//                 src={image}
//                 alt={`${title} - تصویر ${index + 1}`}
//                 loading="lazy"
//                 decoding="async"
//               />
//             </button>
//           ))}
//         </HorizontalScroll>
//       </div>
//     </section>
//   );
// };

// export default ZoomImage;
