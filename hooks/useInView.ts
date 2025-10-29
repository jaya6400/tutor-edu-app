import { useEffect, useRef, useState } from "react";

export default function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          // optional: unobserve after first intersection to keep animation once
          obs.unobserve(entry.target);
        }
      });
    }, options ?? { threshold: 0.15 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);

  return { ref, inView };
}
