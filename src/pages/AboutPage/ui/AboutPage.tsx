import { useTranslation } from 'react-i18next'

export function AboutPage() {
    const { t } = useTranslation()
    return <div>{t('O сайте')}</div>
}

export default AboutPage
