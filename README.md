# WanderLog 🌍

WanderLog is a React-based travel bucket list application that allows users to explore countries around the world, view detailed information, and maintain a personal wishlist of places they want to visit.

## Features

### Authentication

* Login and Signup pages
* Session persistence using Local Storage
* Protected Routes
* Logout functionality

### Country Exploration

* Fetches country data from REST Countries API
* Search countries by name
* Filter countries by region
* Responsive country grid layout

### Country Details

* View detailed information about a country
* Flag
* Capital
* Population
* Languages
* Currency
* Neighboring Countries

### Travel Tracking

* Add countries to Bucket List
* Mark countries as Visited
* Data persists using Local Storage

---

## Tech Stack

* React
* React Router DOM
* Axios
* Context API
* Vite
* CSS

---

## APIs Used

### REST Countries API

https://restcountries.com

Used for fetching country information.

### Reqres API

https://reqres.in

Used for authentication testing.

Test Credentials:

Email:
[eve.holt@reqres.in](mailto:eve.holt@reqres.in)

Password:
any password

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd wanderlog
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── api/
├── components/
├── context/
├── hooks/
├── pages/
├── App.jsx
└── main.jsx
```

---

## Future Improvements

With more development time, I would add:

* Dark Mode
* Sorting by Population, Name, and Area
* Drag-and-Drop Bucket List Management
* User Profile Management
* Advanced Search Filters
* Favorite Countries Analytics

---

## Author

Manikanta Kanuri

B.Tech Computer Science & Engineering
