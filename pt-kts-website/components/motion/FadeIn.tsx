"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Direction to slide in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Trigger once when the element enters the viewport */
  once?: boolean;
}

/**
 * Scroll-triggered reveal: fades in with optional translateY motion.
 * Respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = "up",
  once = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const directionOffset = shouldReduceMotion
    ? { x: 0, y: 0 }
    : {
        up: { x: 0, y: 28 },
        down: { x: 0, y: -28 },
        left: { x: 28, y: 0 },
        right: { x: -28, y: 0 },
        none: { x: 0, y: 0 },
      }[direction];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...directionOffset }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
