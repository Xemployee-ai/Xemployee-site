"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/navigation";

type PageTransitionContextValue = {
  startTransition: (to: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null
);

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(
    (to: string) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      router.push(to);

      // Let the CSS circle animation play before removing it
      setTimeout(() => {
        setIsTransitioning(false);
      }, 900); // slightly longer than the 0.8s animation
    },
    [isTransitioning, router]
  );

  return (
    <PageTransitionContext.Provider value={{ startTransition }}>
      {children}

      {isTransitioning && (
        <div className="page-transition-circle-wrapper">
          <div className="page-transition-circle" />
        </div>
      )}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error(
      "usePageTransition must be used inside a <PageTransitionProvider>"
    );
  }
  return ctx;
}
