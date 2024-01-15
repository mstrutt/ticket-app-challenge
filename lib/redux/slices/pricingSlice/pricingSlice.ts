import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getPerformanceAsync } from '../performanceSlice';
import type { EntitiesPayload, Pricing } from '../../types';

const pricingAdapter = createEntityAdapter<Pricing>();

const initialState = pricingAdapter.getInitialState();

export const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPerformanceAsync.fulfilled, (state, action: PayloadAction<EntitiesPayload>) => {
        // Manually returning a new state here because `upsertMany` and similar methods completely ignore record IDs
        return {
          ...state,
          ids: Object.keys(action.payload.pricing),
          entities: action.payload.pricing,
        };
      })
  },
});
