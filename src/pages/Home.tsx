import { Box, Button, Typography, useMediaQuery } from "@mui/material";

import Logo from "@assets/logo.png";
import MainBg from "@assets/main.jpg";

export const Home = () => {
  return (
    <Box>
      <Main />
    </Box>
  );
};

const Main = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <MainLeft />
      <MainRight isMobile={isMobile} />
    </Box>
  );
};

const MainLeft = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 2,
          marginBottom: "2rem",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ height: "150px", width: "150px" }}
        />

        <Typography variant="h1" sx={{ marginTop: "1rem", fontSize: "2.5rem" }}>
          Bienvenue sur Cons'eau
        </Typography>

        <Typography
          variant="h2"
          sx={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
        >
          Votre application pour suivre votre consommation d'eau
        </Typography>
      </Box>

      <Box sx={{ flex: 3 }}>
        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Simplifiez la gestion de votre consommation d'eau avec notre
          application intuitive.
        </Typography>
        <br />
        <Typography variant="h5" sx={{ textAlign: "justify" }}>
          Saisissez facilement vos relevés de consommation et découvrez des
          graphiques détaillés pour une vue concrète de votre utilisation d'eau
          au fil du temps.
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{ fontSize: "1.5rem", marginBottom: "1rem" }}
        >
          Economisez de l'eau et réduisez votre impact sur l'environnement.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "1.25rem",
            borderRadius: "50px",
            width: "100%",
          }}
        >
          Enregister mon premier relevé !
        </Button>
      </Box>
    </Box>
  );
};

const MainRight = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box
      sx={{
        flex: isMobile ? null : 1,
        height: "100vh",
        backgroundImage: `url(${MainBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Box>
  );
};
