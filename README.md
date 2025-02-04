# Countdown App

This is a countdown app built with Vite, React, TypeScript, which allows users to input an event name and an end date, then displays a real-time countdown to the event.

## Features

- Allows users to set the event name and end date.
- Displays the time remaining in Days, Hours, Minutes, and Seconds (e.g., 3 days, 15 h, 20 m, 5 s).
- The countdown updates every second.
- Text dynamically resizes to fit the available screen space.
- Event name and end date are persisted between page reloads using `localStorage`.
- Responsive design works in both portrait and landscape modes.

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/countdown-app-v1.git
   cd countdown-app-v1
   ```
2. Install dependencies:
   npm install
   3.Start the development server:
   npm run dev
3. Open your browser and go to http://localhost:5173 to see the app in action.

## Technologies Used

- React
- TypeScript
- Vite
- date-fns (for date formatting)
- CSS (for styling)

## Next Steps / Possible Improvements

- **Mobile-First Design**: Enhance responsiveness for mobile screens.
- **Improved Accessibility**: Add ARIA labels for better screen reader support.
- **Notification Feature**: Send users a notification when the event is reached.
- **Unit Tests**: Write unit tests for the components using Jest or React Testing Library.

## Deployment

The app is hosted on [Netlify](https://www.netlify.com/) and can be accessed at:

[https://eventticker.netlify.app/](https://eventticker.netlify.app/)
