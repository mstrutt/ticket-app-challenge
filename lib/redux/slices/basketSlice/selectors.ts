/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectQuantityById = (state: ReduxState, id: string) =>  state.basket.quantities[id];
