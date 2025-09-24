# VerdePlate - Green Food Recipe App

Welcome to VerdePlate, a modern web application for discovering, saving, and planning delicious plant-powered meals. Built with a Manifest-powered backend and a React/Tailwind CSS frontend.

## Features

- **User Authentication**: Secure sign-up and login for personalized experiences.
- **Recipe Discovery**: Browse a collection of healthy, green recipes.
- **Save Favorites**: Logged-in users can save their favorite recipes to their personal dashboard.
- **Responsive Design**: A beautiful, modern interface that works on all devices.
- **Professional Landing Page**: A clean, conversion-focused entry point for the application.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd verdeplate-frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root of the project and add the following:
    ```
    VITE_API_URL=https://no-code-platform-backend-for-generated.onrender.com/api
    VITE_APP_ID=VerdePlate
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Backend (Manifest)

The backend is defined by the `manifest.yml` file. It automatically generates a REST API with the following key entities:

- `User`: Manages user data, authentication, and roles.
- `Recipe`: Stores all recipe information, including titles, ingredients, and images.
- `FavoriteRecipe`: A join table that connects users to their favorite recipes.

The backend is hosted and managed by the Manifest platform.