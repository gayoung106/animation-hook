export interface ScrollFadeInProps {
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
}

export interface ElementStyles {
  opacity: number;
  transform: string;
}
