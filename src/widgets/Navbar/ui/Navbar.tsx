import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink to="/">main</AppLink>
              <AppLink to="/about">about</AppLink>
          </div>
      </div>
  );
}
