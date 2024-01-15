import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

// Simple reference look up using a unique ID for the price band / variant combo and the quantity.
// Missing records are assumed to be 0
const initialState: BasketSliceState = {
  quantities: {},
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    adjustQuantity: (state, action: PayloadAction<{ id: string, adjustment: number}>) => {
      const { quantities } = state;
      const { id, adjustment } = action.payload;
      // Simple validation that a record starts at 0 and can't go below it
      const oldQuantity = quantities[id] || 0;
      const newQuantity = Math.max(oldQuantity + adjustment, 0);
      return {
        ...state,
        quantities: {
          ...quantities,
          [id]: newQuantity,
        }
      }
    },
  },
});

/* Types */
export interface BasketSliceState {
  quantities: {
    [key: string]: number,
   },
};
