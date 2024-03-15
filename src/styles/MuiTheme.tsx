import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Bleu pour représenter l'eau
    },
    secondary: {
      main: "#4caf50", // Vert pour symboliser la durabilité
    },
    error: {
      main: "#f44336", // Rouge pour alerter sur le gaspillage
    },
    warning: {
      main: "#ff9800", // Orange pour mettre en évidence les conseils
    },
    info: {
      main: "#1976d2", // Bleu plus sombre pour le contraste
    },
    success: {
      main: "#8bc34a", // Vert plus clair pour les succès
    },
    text: {
      primary: "#000000",
      secondary: "#fff",
    },
    background: {
      default: "#ffffff", // Blanc pour la propreté et la fraîcheur
      paper: "#f0f0f0", // Gris clair pour le fond des contenus
    },
  },
  typography: {
    fontFamily: ["Barlow"].join(","),
    h1: {
      fontSize: "3rem", // Taille de police pour les titres de section
      fontWeight: 600,
    },
    h2: {
      fontSize: "2.5rem", // Taille de police pour les sous-titres
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem", // Taille de police pour les titres de contenu
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.2rem", // Taille de police pour le contenu principal
    },
    body2: {
      fontSize: "1rem", // Taille de police pour le contenu secondaire
    },
  },
});

export default theme;
