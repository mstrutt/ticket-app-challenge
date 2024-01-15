import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getPerformanceAsync } from '../performanceSlice';
import type { Variant, EntitiesPayload } from '../../types';

const variantAdapter = createEntityAdapter<Variant>();

const initialState = variantAdapter.getInitialState();

export const variantSlice = createSlice({
  name: 'variants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPerformanceAsync.fulfilled, (state, action: PayloadAction<EntitiesPayload>) => {
        // Manually returning a new state here because `upsertMany` and similar methods completely ignore record IDs
        return {
          ...state,
          ids: Object.keys(action.payload.variants),
          entities: action.payload.variants,
        };
      })
  },
});
