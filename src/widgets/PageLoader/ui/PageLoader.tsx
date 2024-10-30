import { classNames } from 'helpers/classNames/classNames'
import cls from './PageLoader.module.scss'

import { Loader } from 'widgets/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
