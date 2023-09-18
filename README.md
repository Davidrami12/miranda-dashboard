# <p align="center">🏨 Miranda Dashboard ⭐</p>

<div align="center">
  <img src="src/assets/logo.jpg" alt="Miranda logo"/>  
</div>


## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Features](#features)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Introduction

<p>💻 Miranda Dashboard is an administratrive page for the Hotel Miranda page, where you can manage bookings, rooms, users and even more things!</p>

<p>📦 Deployed on Amazon Web Service (AWS) with S3. You can visualize this project at: http://miranda-travl.s3-website.eu-west-3.amazonaws.com/miranda/login</p>

<p>🔗 Connected with an API backend developed also by me. You can check out the repository here: https://github.com/Davidrami12/miranda-dashboard-backend (also deployed on AWS)</p>

## Technologies
<!-- FRONT END SIDE -->

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Redux
- Toastify
- Cypress
- JEST
- MongoDB
- Atlas
- AWS

<!-- BACK END SIDE -->

## Features

- **Login Page**: Firstly you will have to log in as a user of the miranda's dashboard. Don't worry, there is a hardcoded administrative user so you can pass the log in form, which has a token that expires after some days to keep some security.
- **Dashboard Page**: The application's main page, you can visualize the main page with some stadistics and relevant informations such as recent reviews made by users.
- **Bookings Page**: In the bookings page there will be the bookings that users made to book a room, or several rooms, with important data like check in and check out dates. Click on any booking to see more details about it.
- **Rooms Page**: Display all the rooms availables and booked too. Enter any room to see some pics inside and check important info about it
- **Users Page**: The users that are registered inside the dashboard administrative system.
- **Contacts Page**: In this page there will be comments in a slider and also messages from users that reviewed the hotel.

## Setup

### Prerequisites

- Node.js installed (v14 or later recommended)
- NPM (v6 or later) or Yarn (v1.22 or later)

### Installation

1. Clone the repository

```bash
git clone https://github.com/Davidrami12/miranda-dashboard.git
cd miranda-dashboard
```

2. Install NPM packages
```bash
npm install
```
  or
```bash
yarn install
```

3. Create a .env file in the root directory of the project, and add the backend API key
```bash
REACT_APP_API_URL=your_api_key_here
```

OR

If you want to use local data (JSON) there's also an old version of this application on the branch: local_json_data. NOTE: This version will be an old one and some features would not be available since all the implementations are written directly on the typescript branch and then merged within then current branch.

4. Run the app in the development mode
```bash
npm start
```
   or
```
yarn start
```

Open http://localhost:3000/miranda to view it in the browser.

## Usage
Navigate between the sidebar's routes, you can visualize bookings, rooms, users and reviews. And you can even create, update or delete some of them!
All data is generated using Faker.js library so there is no real information, all the data from the 
Navigate to the Search page and input a topic to retrieve images related to your query. To add an image to your Favorites, simply click on the heart icon. Visit the Favorites page to view all your favorite images.

NOTE: Responsive web design has not been planned since this is an applications for administrative personal, it is intentionally developed to use on a PC for desktop users, not available for mobiles.

## Contributing
<p>This project is under the MIT license, and contributions are welcome. Please feel free to fork, create a feature branch, and submit a pull request. If you want to contribute to this project and make it better, your help is very welcome.</p>
