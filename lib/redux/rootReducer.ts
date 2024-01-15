/* Instruments */
import { basketSlice, performanceSlice, pricingSlice, variantSlice } from './slices'

export const reducer = {
  basket: basketSlice.reducer,
  performances: performanceSlice.reducer,
  pricing: pricingSlice.reducer,
  variants: variantSlice.reducer,
}
