import React from 'react'
import PriceDetails from './components/PriceDetails'
import SeatingDetails from './components/SeatingLayout';

export interface SelectedSeats {
  label: string;
  price: number;
}

const page = () => {

  return (
    <div className="min-h-screen bg-offwhite flex flex-col lg:flex-row">
      <SeatingDetails />
      <PriceDetails />
    </div>
  )
}

export default page
