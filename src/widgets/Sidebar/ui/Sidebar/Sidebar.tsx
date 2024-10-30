import { classNames } from 'helpers/classNames/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)
    const { t, i18n } = useTranslation()

    const onToggle = () => setCollapsed((prev) => !prev)

    const onToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>{t('toggle')}</button>
            <button onClick={onToggleLanguage}>{t('перевод')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
