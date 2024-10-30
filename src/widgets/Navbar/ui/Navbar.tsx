import { classNames } from 'helpers/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/">{t('главная')}</AppLink>
                <AppLink to="/about">{t('O сайте')}</AppLink>
            </div>
        </div>
    )
}
