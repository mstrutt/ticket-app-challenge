import type { ReduxState } from '@/lib/redux'

export const selectVariantById = (state: ReduxState, id: string) => state.variants.entities[id];
