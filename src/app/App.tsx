import './styles/index.scss'

import { classNames } from 'helpers/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AppRouter } from './providers/router'

export function App() {
    const { t, i18n } = useTranslation()
    const { theme } = useTheme()

    // useEffect(() => {
    //     throw new Error()
    // }, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
