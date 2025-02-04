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

### App Screenshot


<img width="1511" alt="Screenshot 2025-02-04 at 20 35 23" src="https://github.com/user-attachments/assets/ac6c3a00-e0d8-4170-8d64-a9452789af14" />

<img width="1512" alt="Screenshot 2025-02-04 at 20 37 54" src="https://github.com/user-attachments/assets/30ae2aea-73d2-4956-a93f-a46a033fba06" />

<img width="1502" alt="Screenshot 2025-02-04 at 20 38 31" src="https://github.com/user-attachments/assets/6f285b4e-c178-4eee-bc57-58c68cbd851e" />

<img width="298" alt="Screenshot 2025-02-04 at 20 54 44" src="https://github.com/user-attachments/assets/80087598-dbe6-41fc-aaf7-2afa4a422a68" />

