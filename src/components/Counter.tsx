import React, { useState } from "react"
import stule from "./Counter.module.scss"

export const Counter = () => {
    const [count, useCount] = useState(0)

    const increment = () => {
        useCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={stule.btn}>
                +
            </button>
        </div>
    )
}
