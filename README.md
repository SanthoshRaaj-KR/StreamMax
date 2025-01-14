# StreamMax

StreamMax is a responsive and feature-rich web application designed for streaming movies and TV shows. Built with Node.js, Express.js, and Tailwind CSS, it provides an immersive experience for movie enthusiasts, allowing users to browse, search, and enjoy a wide range of content.

## Features

- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Dynamic Data Fetching:** Retrieves movie data dynamically from the OTT Details API.
- **Trending Section:** Highlights popular movies and shows.
- **Genre Browsing:** Allows users to explore content by genre.
- **User Testimonials:** Displays feedback from satisfied users.
- **Search Functionality:** Users can search for their favorite movies and TV shows.

## Technologies Used

- **Frontend:**
  - HTML5, CSS3, Tailwind CSS
  - JavaScript (client-side)
- **Backend:**
  - Node.js
  - Express.js
  - Axios (for API requests)
- **Template Engine:**
  - EJS

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/StreamMax.git
   ```

2. Navigate to the project directory:
   ```bash
   cd StreamMax
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create an `.env` file in the root directory and add your RapidAPI key:
   ```
   RAPIDAPI_KEY=your_rapidapi_key
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## File Structure

```
StreamMax
├── public
│   ├── script.js        # Frontend JavaScript
├── src
├── views
│   ├── index.ejs        # EJS template for homepage
├── index.js             # Main server file
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
```

## API Integration

The application uses the OTT Details API to fetch movie and TV show data. Ensure you have a valid RapidAPI key to access the API.

- **Base URL:** `https://ott-details.p.rapidapi.com/advancedsearch`
- **Parameters:**
  - `start_year`: The starting year for movie/TV show releases.
  - `min_imdb`: Minimum IMDb rating.
  - `type`: Type of content (e.g., movie, TV show).
  - `language`: Language filter.

## Dependencies

- `express`: Web framework for Node.js.
- `axios`: Promise-based HTTP client for API requests.
- `ejs`: Template engine for rendering views.
- `tailwindcss`: Utility-first CSS framework.

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [OTT Details API](https://rapidapi.com/ott-details/api/ott-details/) for providing movie data.
- [Tailwind CSS](https://tailwindcss.com/) for the amazing design framework.

---

Feel free to customize this README to fit your specific requirements!

