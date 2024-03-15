import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import LogoMinimalist from "@assets/logo-minimalist.png";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
      elevation={0}
    >
      <Toolbar sx={{ color: "white" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={LogoMinimalist} style={{ height: "50px", width: "50px" }} />
        </Typography>

        <div>
          <IconButton size="small" sx={{ color: "#4CB1F1" }}>
            Link 1
          </IconButton>
          <IconButton size="small" sx={{ color: "#4CB1F1" }}>
            Link 2
          </IconButton>
          <IconButton size="small" sx={{ color: "#4CB1F1" }}>
            Link 3
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
