import { useCallback, useEffect, useState } from "preact/hooks";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const currentTheme =
      window.localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    return currentTheme;
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const listener = (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
      updateTheme(newColorScheme);
    };
    matchMedia.addEventListener("change", listener);

    return () => matchMedia.removeEventListener("change", listener);
  }, []);

  return (
    <label class="ml-2 flex items-center cursor-pointer">
      <input
        type="checkbox"
        id="theme-toggle"
        value={theme}
        class="hidden"
        onChange={toggleTheme}
      />
      <div class="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex justify-center items-center">
        <span
          class="text-gray-700 dark:text-gray-300 
          transition-transform duration-300 ease-in-out transform 
          scale-100 rotate-0 dark:rotate-180 dark:scale-110"
        >
          {EMOJY[theme]}
        </span>
      </div>
    </label>
  );
};

const updateTheme = (newTheme: string) => {
  window.localStorage.setItem("theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
};

const EMOJY = {
  dark: "🌙",
  light: "🌝",
};

export default ThemeSwitcher;
