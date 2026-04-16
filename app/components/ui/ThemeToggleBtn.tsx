"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import style from "./ThemeToggleBtn.module.css";

const ThemeToggleBtn = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const modeIcon = theme === "light" ? <Moon size={20} /> : <Sun size={20} />;

  return (
    <button
      type="button"
      className={style.toggleBtn}
      onClick={() => toggleTheme()}
    >
      {modeIcon}
    </button>
  );
};

export default ThemeToggleBtn;
