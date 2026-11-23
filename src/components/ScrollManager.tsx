import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Keeps scroll position sensible on client-side navigation:
 * - `/page#section` scrolls to the section once it has rendered (retrying briefly,
 *   because lazy-loaded pages mount a moment after the URL changes);
 * - any other navigation starts at the top of the page.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts++ < 20) {
        timer = setTimeout(tryScroll, 100);
      }
    };
    tryScroll();

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
