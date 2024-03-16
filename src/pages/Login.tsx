import {
  Box,
  Button,
  FormControl,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

import Logo from "@assets/logo.png";
import { Input } from "@components/Input";
import { useState } from "react";
import { User } from "@/types/User";

export const Login = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        background: theme.palette.primary.light,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm {...theme} />
    </Box>
  );
};

const UserForm = (theme: Theme) => {
  const [user, setUser] = useState<User>({ login: "", password: "" });

  const handleInputChange = (field: keyof User, value: string) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        maxWidth: "480px",
        width: "95%",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <img
          src={Logo}
          alt="logo cons'eau"
          style={{
            height: "100px",
          }}
        />
        <Typography variant="h5">Accéder à Cons'eau</Typography>
        <FormControl
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Input<string>
            type="string"
            placeholder="Nom d'utilisateur"
            value={user?.login || ""}
            handleChange={(newLogin: string) =>
              handleInputChange("login", newLogin)
            }
          />
          <Input<string>
            type="password"
            placeholder="Mot de passe"
            value={user?.password || ""}
            handleChange={(newPassword: string) =>
              handleInputChange("password", newPassword)
            }
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{
            maxWidth: "370px",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          Se connecter
        </Button>
      </Box>
    </Box>
  );
};
