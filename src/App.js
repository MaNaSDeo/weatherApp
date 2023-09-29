import "./styles.css"; // Importing external CSS styles
import { useState, useEffect } from "react"; // Importing React hooks for state and effect
import axios from "axios"; // Importing Axios for making HTTP requests

import TextField from "@mui/material/TextField"; // Importing TextField component from Material-UI
import Typography from "@mui/material/Typography"; // Importing Typography component from Material-UI

import Header from "./Header"; // Importing the Header component from a local file
import Card from "./Card"; // Importing the Card component from a local file

export default function App() {
  const [cityName, setCityName] = useState(""); // State to store the entered city name
  const [cityWeather, setCityWeather] = useState([]); // State to store weather data for a city
  const [isCityFound, setIsCityFound] = useState(false); // State to track if a city is found

  useEffect(() => {
    // Use a setTimeout to delay fetching data until the user stops typing
    const getData = setTimeout(() => {
      handleChange(cityName);
    }, 800);

    // Cleanup function to clear the timeout when the component unmounts or when cityName changes
    return () => clearTimeout(getData);
  }, [cityName]);

  // Function to fetch weather data for a city
  const handleChange = async (city) => {
    const locationName = city.toLowerCase();
    const apiKey = "cbbe4d01a9f547e0bdc182525232409";
    const apiLink = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;

    try {
      console.log(apiLink);
      const response = await axios.get(apiLink);
      setIsCityFound(true); // City found, set the flag to true
      setCityWeather(response.data); // Set weather data for the city
    } catch (error) {
      if (error.response.status === 400) {
        setIsCityFound(false); // City not found, set the flag to false
      } else {
        setIsCityFound(false); // Handle other errors by setting the flag to false
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      {/* Render the Header component */}
      <Header />

      {/* Text input for entering a city name */}
      <TextField
        id="outlined-helperText"
        label="Enter location"
        defaultValue={cityName}
        sx={{
          width: 375,
          minWidth: 275,
          my: 2
        }}
        onChange={(e) => {
          setCityName(e.target.value); // Update the cityName state as the user types
          // handleChange(e.target.value);
        }}
      />

      {/* Conditionally render weather information or an error message */}
      {cityName.length ? (
        isCityFound ? (
          <Card cityWeather={cityWeather} /> // Display weather information if the city is found
        ) : (
          <Typography
            color="#d50000"
            sx={{ fontWeight: "medium", fontSize: "h6.fontSize", my: 2 }}
          >
            No matching location found
          </Typography> // Display an error message if the city is not found
        )
      ) : (
        <Typography></Typography>
      )}
    </div>
  );
}
