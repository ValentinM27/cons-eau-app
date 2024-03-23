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

export const Signin = () => {
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

type ExtendedUser = User & {
  passwordConfirmation: string;
};

const UserForm = (theme: Theme) => {
  const [user, setUser] = useState<ExtendedUser>({
    login: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleInputChange = (field: keyof ExtendedUser, value: string) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        maxWidth: "480px",
        width: "95%",
        margin: "0 .25rem",
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
        <Typography variant="h5">Créer ma Cons'eau</Typography>
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
          <Input<string>
            type="password"
            placeholder="Confirmation du mot de passe"
            value={user?.passwordConfirmation || ""}
            handleChange={(newPassword: string) =>
              handleInputChange("passwordConfirmation", newPassword)
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
