import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Define a functional component called Header
const Header = () => {
    return (
        <div>
            {/* Create a Box component for the header */}
            <Box
                sx={{
                    width: "99vw",
                    height: 75,
                    backgroundColor: "#0570f2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2 // Margin bottom of 2 units
                }}
            >
                {/* Display a Typography component for the app title */}
                <Typography variant="h4" color="white">
                    Weather App
                </Typography>
            </Box>
        </div>
    );
};
// Export the Header component for use in other parts of the application
export default Header;