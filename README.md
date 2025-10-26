# Personal Dashboard

A modern, interactive, and motivational dashboard built with **HTML, CSS, and JavaScript**.  
It displays the **current time**, **local weather**, **latest GitHub repositories**, **inspirational quotes**, and a **random nature background** from Unsplash. Designed as a personal new tab extension or web dashboard.

---

## 🌟 Features

- **Dynamic Backgrounds**: Fetches a new random nature image from Unsplash each time the dashboard loads.
- **GitHub Integration**: Shows your **latest 3 repositories** with names, links, and programming languages.
- **Inspirational Quotes**: Fetches a random motivational quote from [ZenQuotes](https://zenquotes.io/).
- **Local Weather**: Shows current weather based on your geolocation using OpenWeatherMap API.
- **Live Clock**: Displays the current time with live updates every second.
- **Interactive Author Link**: Clicking on the Unsplash photo author’s name opens their Unsplash profile in a new tab.

---

## 🖥️ Demo

> Open the dashboard as a **new tab** in your browser or run the HTML file locally.  

🛠️ Technologies Used

HTML5 & CSS3 for layout and styling.

Vanilla JavaScript (ES6+) for dynamic content.

Fetch API to get data from:

Unsplash
 – random nature photos

GitHub API
 – latest repos

ZenQuotes
 – motivational quotes

OpenWeatherMap
 – weather data

 💡 Customization

Change the GitHub username in index.js to display your own repositories.

Modify the Unsplash query in index.js for different background themes.

Replace ZenQuotes API with any other quotes API if desired.

Update CSS to customize the look and feel of the dashboard.

⚠️ Notes

GitHub API may be rate-limited if unauthenticated. For frequent use, consider using a GitHub token.

Location access is required for the weather widget to function correctly.

Ensure an active internet connection to fetch all dynamic content.