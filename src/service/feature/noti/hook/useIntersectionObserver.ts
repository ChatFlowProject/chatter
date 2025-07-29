// hooks/useIntersectionObserver.ts
import { useEffect } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  target: Element | null;
  onIntersect: () => void;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export function useIntersectionObserver({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = '0px',
  enabled = true,
}: UseIntersectionObserverOptions) {
  useEffect(() => {
    if (!enabled) return;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [target, enabled, onIntersect, root, rootMargin, threshold]);
}
