import { classNames } from 'shared/lib/classNames';
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"}>main</AppLink>
                <AppLink to={"/about"}>about</AppLink>
            </div>

        </div>
    )
};
