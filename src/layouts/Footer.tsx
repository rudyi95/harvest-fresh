
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#292929",
                color: "#fff",
                py: 2,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Typography sx={{
                        fontSize: '12px'
                    }}>
                        © {new Date().getFullYear()} XO Deli.
                        All Rights Reserved.
                    </Typography>

                    <Typography sx={{
                        fontSize: '12px'
                    }}>
                        Design & Development By:
                        Morgan & Madison Marketing
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
