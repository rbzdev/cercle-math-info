"use client";

import { useState, useEffect } from "react";

export const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, ...options } // Threshold ajuste la proportion visible de l'élément
    );

    if (ref.current) {
      observer.observe(ref.current);
      // console.log("observe");
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
        // console.log("unobserve");
      }
    };
  }, [ref, options]);

  return isInView;
};
