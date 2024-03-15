import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { RouterView } from "@routes/RouterView";
import { ThemeProvider } from "@mui/material";
import theme from "@styles/MuiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <RouterView />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
