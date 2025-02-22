"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleSeatSelection } from "../../store/seatSlice";

interface SeatProps {
  color: string;
  price: number;
  seat: { label: string; row: number };
}

export default function Seat({ color, price, seat }: SeatProps) {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state: RootState) => state.seat.selectedSeats);
  const isSelected = selectedSeats.some((s) => s.label === seat.label);

  return (
    <div
      className={`${color} border p-2 text-center text-white cursor-pointer ${isSelected ? "ring-2 ring-blue-500" : ""}`}
      onClick={() => dispatch(toggleSeatSelection({ label: seat.label, price }))}
    >
      <div>{seat.label}</div>
      <div className="text-xs">₹{price}</div>
    </div>
  );
}
