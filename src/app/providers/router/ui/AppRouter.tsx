import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
