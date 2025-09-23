import { useEffect, useState } from "react";

export function useDarkMode() : [boolean, React.Dispatch<React.SetStateAction<boolean>>]{
  const [isDark, setIsDark] = useState<boolean>(() => {
  if (localStorage.getItem("theme") === "dark") return true;
  if (localStorage.getItem("theme") === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
});

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
export default useDarkMode;