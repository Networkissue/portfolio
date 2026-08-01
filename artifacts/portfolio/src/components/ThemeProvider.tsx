import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force dark mode for the tech vibe
    document.documentElement.classList.add("dark");
  }, []);
  return <>{children}</>;
}