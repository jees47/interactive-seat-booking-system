# Seat Booking App

## Overview
This is a **Next.js** application for booking seats for shows. Users can select up to 8 seats and book them. The app prevents users from selecting more than 8 seats and provides feedback messages using `window.alert`.

## Features
- **Seat Selection**: Users can choose seats, which are visually highlighted when selected.
- **Booking Limit**: A user can select a maximum of 8 seats.
- **Error Handling**: If a user tries to select more than 8 seats, an alert message is shown.
- **Booking Confirmation**: If no seats are selected, an alert notifies the user. Upon successful booking, another alert confirms the reservation.
- **Reset Selection**: After booking, all selected seats are cleared.
- **Responsive UI**: Styled using Tailwind CSS for a clean and responsive design.

## Tech Stack
- **Next.js**: Framework for React-based SSR and SSG.
- **Redux Toolkit**: Manages the global state of selected seats.
- **TypeScript**: Ensures type safety in the application.
- **Tailwind CSS**: Provides a sleek and responsive UI.

## Installation
### Prerequisites
Ensure you have **Node.js** installed (version 16 or later is recommended).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/seat-booking-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd seat-booking-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000/`.

## Project Structure
```
seat-booking-app/
│── public/                 # Static assets
│── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Next.js page components
│   ├── store/              # Redux state management
│   ├── styles/             # Global and component styles
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation
```

## Redux Store Setup
- **seatSlice.ts**: Manages the state of selected seats, ensuring a max limit of 8.
- **RootState.ts**: Defines the root state structure for Redux.

## Key Components
### `Seat.tsx`
Handles individual seat selection and prevents selecting more than 8 seats.

### `PriceDetails.tsx`
Displays selected seats, total cost, and a "Book Now" button with validation.

## Usage Instructions
1. Select seats (up to 8).
2. Click "Book Now".
3. Alerts will indicate success or errors.
4. After booking, the selection resets.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Added new feature"`
4. Push to your branch: `git push origin feature-name`
5. Open a Pull Request.


## Contact
For questions or contributions, reach out to **Jeesmon Joy**.

