import {
  useRef,
  useEffect,
  useCallback,
  RefObject,
  CSSProperties,
} from "react";

interface ScrollFadeInProps {
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}

interface AnimatedItem<T extends HTMLElement> {
  ref: RefObject<T>;
  style: CSSProperties;
}

const useScrollFadeIn = <T extends HTMLElement>({
  direction = "up",
  duration = 1,
  delay = 0,
}: ScrollFadeInProps = {}): AnimatedItem<T> => {
  const element = useRef<T>(null);

  const handleDirection = (name: string): string | undefined => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return undefined;
    }
  };

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = element;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) || "" },
  };
};

export default useScrollFadeIn;
