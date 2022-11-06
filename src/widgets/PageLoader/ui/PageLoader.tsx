import React from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Indicator } from "shared/ui/Indicator/Indicator"
import cls from "./PageLoader.module.scss"

export const PageLoader = () => {
    return (
        <div className={classNames(cls.PageLoader, {}, [])}>
            <Indicator />
        </div>
    )
}
