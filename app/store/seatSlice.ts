import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Seat {
  label: string;
  price: number;
}

interface SeatState {
  selectedSeats: Seat[];
}

const initialState: SeatState = {
  selectedSeats: [],
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    toggleSeatSelection: (state, action: PayloadAction<Seat>) => {
      const index = state.selectedSeats.findIndex((s) => s.label === action.payload.label);
      if (index !== -1) {
        state.selectedSeats.splice(index, 1); 
      } else {
        state.selectedSeats.push(action.payload); 
      }
    },
    clearSeats: (state) => {
        state.selectedSeats = []; 
      },
  },
});

export const { toggleSeatSelection, clearSeats  } = seatSlice.actions;
export default seatSlice.reducer;
