import { classNames } from "shared/lib/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  return (
      <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
          {theme === Theme.LIGHT ? <Moon style={{ color: "red" }} /> : <Sun />}
      </Button>
  );
}
