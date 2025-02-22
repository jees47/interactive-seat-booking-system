"use client";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearSeats } from "../../store/seatSlice";

const SEAT_LIMIT = 8;

const PriceDetails: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state: RootState) => state.seat.selectedSeats);

  const totalCost = useMemo(() => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  }, [selectedSeats]);

  const handleBookNow = () => {
    if (selectedSeats.length === 0) {
      window.alert("No seats selected");
    } else if (selectedSeats.length > SEAT_LIMIT) {
      window.alert("You can only select up to 8 seats");
    } else {
      window.alert("Seats booked successfully!");
      dispatch(clearSeats()); 
    }
  };

  return (
    <div className="w-full lg:w-80 p-6 border-t lg:border-l bg-white lg:mt-0 mt-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6 text-black text-center">
        Booking Summary
      </h3>

      <div className="space-y-4">
        <div className="text-black text-center">
          <p className="font-medium text-lg">Selected Seats:</p>

          {selectedSeats.length === 0 ? (
            <p className="italic text-gray-500 mt-2">No seats selected</p>
          ) : (
            <ul className="space-y-2 mt-2">
              {selectedSeats.map((seat) => (
                <li
                  key={seat.label}
                  className="flex justify-between text-sm text-gray-700"
                >
                  <span>{seat.label}</span>
                  <span>₹{seat.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4 text-black text-center">
          <p className="font-medium text-lg">Total Cost:</p>
          <p className="text-xl font-semibold mt-2">₹{totalCost}</p>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
