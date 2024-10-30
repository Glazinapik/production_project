import { useTranslation } from 'react-i18next'

function MainPage() {
    const { t } = useTranslation()
    return <div>{t('Главная страницa')}</div>
}
export default MainPage
