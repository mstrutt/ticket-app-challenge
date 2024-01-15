import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getPerformanceAsync } from './thunks'
import type { EntitiesPayload, Performance } from '../../types';

const performanceAdapter = createEntityAdapter<Performance>();

const initialState = performanceAdapter.getInitialState({
  // Status allows for a loading star – only ever updated below
  status: 'idle',
});

export const performanceSlice = createSlice({
  name: 'performances',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPerformanceAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPerformanceAsync.fulfilled, (state, action: PayloadAction<EntitiesPayload>) => {
        // Manually returning a new state here because `upsertMany` and similar methods completely ignore record IDs
        return {
          ...state,
          status: 'idle',
          ids: Object.keys(action.payload.performances),
          entities: action.payload.performances,
        };
      })
      // @TODO: error case
  },
});
