import type { ReduxState } from '@/lib/redux'

export const selectPricingById = (state: ReduxState, pricingId: number) => state.pricing.entities[pricingId];

export const selectVariantsByPricingId = (state: ReduxState, pricingId: number) => state.pricing.entities[pricingId]?.priceBand.variants;