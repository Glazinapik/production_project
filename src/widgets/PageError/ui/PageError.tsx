import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import PageErrorImage from 'shared/assets/icons/11668427_20943566.svg'
import { useTheme } from 'app/providers/ThemeProvider'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()
    const { theme } = useTheme()
    const reloadPage = () => location.reload()
    return (
        <div
            className={classNames(cls.PageError, {}, [className, 'app', theme])}
        >
            <PageErrorImage
                className={classNames(cls.PageErrorImage, {}, [])}
            />
            <p>{t('Произошла непридвиденная ошибка')}</p>
            <button onClick={reloadPage}>{t('Обновить')}</button>
        </div>
    )
}
