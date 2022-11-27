import { counterActions } from "../model/slice/counterSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppButton } from "shared/ui/AppButton/AppButton"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <AppButton onClick={increment}>+</AppButton>
            <AppButton onClick={decrement}>-</AppButton>
        </div>
    )
}
