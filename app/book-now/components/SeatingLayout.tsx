import React from "react";
import Seat from "./Seat";

const ROWS = 6;
const SEATS_PER_ROW = 10;

const priceDetails = {
    front: { color: "bg-gray-500", price: 100 },
    middle: { color: "bg-yellow-600", price: 150 },
    back: { color: "bg-gray-600", price: 200 },
};

const SeatingDetails = () => {
    const seatLabels = [];
    for (let i = 0; i < ROWS; i++) {
        for (let j = 1; j <= SEATS_PER_ROW; j++) {
            seatLabels.push({
                label: `${String.fromCharCode(65 + i)}${j}`,
                row: i,
            });
        }
    }

    const getSeatInfo = (row: number) => {
        if (row < 2) return priceDetails.front;
        if (row < 4) return priceDetails.middle;
        return priceDetails.back;
    };

    return (
        <div className="flex-1 flex flex-col items-center p-4 mt-8 overflow-x-auto">
            <div className="border p-2 mb-4">Screen</div>
            <div className="grid grid-cols-10 gap-2 w-max">
                {seatLabels.map((seat) => {
                    const { color, price } = getSeatInfo(seat.row);
                    return <Seat key={seat.label} color={color} price={price} seat={seat} />;
                })}
            </div>
        </div>
    );
};

export default SeatingDetails;
