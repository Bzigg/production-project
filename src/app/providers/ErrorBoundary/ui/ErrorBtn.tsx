import React, { useEffect, useState } from "react"
import { AppButton } from "shared/ui/AppButton/AppButton"

export const ErrorBtn = () => {
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const onThrow = () => {
        setError(true)
    }

    return <AppButton onClick={onThrow}>ErrorBtn</AppButton>
}
