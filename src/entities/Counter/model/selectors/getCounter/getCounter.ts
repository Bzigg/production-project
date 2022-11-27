// StateSchema подключили из вышестоящего слоя. Исключение для типов
import { StateSchema } from "app/providers/StoreProvider"

export const getCounter = (state: StateSchema) => state.counter
