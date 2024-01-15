import type { ReduxState } from '@/lib/redux'

export const statusSelector = (state: ReduxState) => state.performances.status;

export const selectPerformanceById = (state: ReduxState, performanceId: number) => state.performances.entities[performanceId];
