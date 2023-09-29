import Card from "@mui/material/Box"; // Importing a Box component as 'Card'
import CardContent from "@mui/material/CardContent"; // Importing CardContent component
import Typography from "@mui/material/Typography"; // Importing Typography component
import Stack from "@mui/material/Stack"; // Importing Stack component
import Grid from "@mui/material/Grid"; // Importing Grid component

// Define a functional component called Card1 that takes an object as a parameter
const Card1 = (object) => {
    // Extract the 'cityWeather' object from the parameter
    const cityWeather = object.cityWeather;

    return (
        <div>
            {/* Display the city name and country */}
            <Typography variant="h5" component="div" sx={{ my: 2 }}>
                {cityWeather.location.name}, {cityWeather.location.country}
            </Typography>

            {/* Create a Grid container */}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >
                {/* Create a Card component for displaying weather information */}
                <Card
                    sx={{
                        width: 375,
                        minWidth: 275,
                        borderBottom: 1,
                        borderColor: "grey.500",
                        borderRadius: 1,
                        boxShadow: 1
                    }}
                >
                    <CardContent>
                        {/* Display weather condition icon */}
                        <Stack sx={{ width: 50 }}>
                            <img alt="CDN" src={cityWeather.current.condition.icon} />
                        </Stack>

                        {/* Display temperature in Celsius and Fahrenheit */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Temperature</Typography>
                            <Typography>
                                {cityWeather.current.temp_c}°C / {cityWeather.current.temp_f}°F
                            </Typography>
                        </Stack>

                        {/* Display weather condition text */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Condition</Typography>
                            <Typography>{cityWeather.current.condition.text}</Typography>
                        </Stack>

                        {/* Display wind speed */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Wind Speed</Typography>
                            <Typography>{cityWeather.current.wind_kph} km/h</Typography>
                        </Stack>

                        {/* Display humidity */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Humidity</Typography>
                            <Typography>{cityWeather.current.humidity}%</Typography>
                        </Stack>

                        {/* Display cloud coverage */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Cloud Coverage</Typography>
                            <Typography>{cityWeather.current.cloud}%</Typography>
                        </Stack>

                        {/* Display last updated timestamp */}
                        <Stack direction="row" justifyContent="space-between">
                            <Typography>Last Updated</Typography>
                            <Typography>{cityWeather.current.last_updated}</Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
};

// Export the Card1 component for use in other parts of the application
export default Card1;
