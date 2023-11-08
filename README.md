# Worldwise

Time-frame：Oct. 2023

## Overview

### Project Purpose

The core objective of this project is to provide users with a seamless and intuitive platform for chronicling their travel experiences. It is designed to enable users to meticulously log each city and country they explore. The interface offers dual functionality, allowing travelers to manually select destinations or effortlessly capture their current whereabouts with an automated current location feature. Additionally, the application is equipped with a personalized note-taking capability, where users can annotate each visit with memories, observations, and reflections, enriching their travel logs with detailed narratives.

### My role

I was responsible for the full-stack development of the application, working from Jonas Schmedtmann's designs. I coded the app's functionality, integrated location services, and ensured a user-friendly experience for travelers to log their journeys.

## Technology Stack Summary

Our project is a Single-Page Application (SPA) developed with React, encapsulating cutting-edge front-end technologies for a seamless user experience.

### Core Technologies

- **React**: Empowers the interactive UI with component-based architecture.
- **JavaScript/JSX**: Facilitates scripting and markup integration for dynamic content.
- **HTML5/CSS3**: Ensures a modern, standards-compliant structure and style. Use **CSS modules** to increase the maintainability in component-based archetecture.

### React Ecosystem:

- **Leaflet**: Implements interactive mapping and geospatial data visualization.
- **React Router**: Manages in-app navigation without page reloads.
- **Context API**: Streamlines state management across the component hierarchy.
- **React Query**: Fetching, caching, and updating data.

### Hooks Utilization:

- **useState/useReducer**: Manages component state and complex state transitions.
- **useContext: Accesses** and subscribes to React context effortlessly.
- **useCallback: Optimizes** performance by memorizing callbacks.
- **useNavigate/useParams**: Enhances routing capabilities by handling navigation and URL parameters.
- **useEffect**: Performs side effects.

## Development Infrastructure:

- **Git**: Provides robust version control and collaborative workflow support.
- **Vite**: Offers a fast development server and optimized build process.
- **npm**: Install libraries and run code.

## Feature Highlights

### Home Page

- **Quick Summary**: Overview of services, pricing, and product offerings.

### User Authentication

- **Secure Access**: Mock login functionality using preset credentials for demonstrations.
- **User Privacy**: Maintains the confidentiality and security of user sessions.

### Interactive Map

- **City Selection**: Allows users to pick cities and utilize geolocation for ease of use.
- **Form Assistance**: Streamlines form-filling with automatic location detection.

### City and County Interaction

- **Travel Itinerary**: Users can manage (add/delete) and leave notes for visited places.
- **Share City**：City info is included in page router and can be easily shared.

These core features are designed to enhance user engagement and streamline the interactive experience.

## Screenshots

![Homepage](<Screenshot 2023-11-08 at 3.22.47 pm.png>)
![Login page](<Screenshot 2023-11-08 at 3.23.07 pm.png>)
![City list](<Screenshot 2023-11-08 at 3.26.03 pm.png>)
![City info](<Screenshot 2023-11-08 at 3.26.33 pm.png>)

### How to run Source Code

1. Download project files
2. Run `npm i` to install the npm packages
3. Run `npm run dev` for the app and run `npm run server` for the API server
4. Visit `http://localhost:5173/` to access the app

## Suggestions and Feedbacks

Let me know if you have any comments or feedbacks to make this project better!
